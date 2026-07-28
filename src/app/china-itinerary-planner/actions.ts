"use server";

import { SITE_EMAIL } from "@/lib/constants";
import { sendFormNotify } from "@/lib/forms/notify";
import { appendFile, access, mkdir, writeFile } from "fs/promises";
import path from "path";

export type PlannerFormState = {
  ok: boolean;
  message: string;
};

const CSV_HEADER =
  "timestamp,source,name,email,nationality,destinations,days,travelers,styles,budget,notes\n";
const DATA_DIR = path.join(process.cwd(), "data");
const CSV_PATH = path.join(DATA_DIR, "itinerary-submissions.csv");

function escapeCsv(value: string): string {
  const normalized = value.replace(/\r\n/g, "\n").trim();
  if (/[",\n]/.test(normalized)) {
    return `"${normalized.replace(/"/g, '""')}"`;
  }
  return normalized;
}

async function ensureCsv(): Promise<void> {
  await mkdir(DATA_DIR, { recursive: true });
  try {
    await access(CSV_PATH);
  } catch {
    await writeFile(CSV_PATH, CSV_HEADER, "utf8");
  }
}

type SubmissionPayload = {
  timestamp: string;
  source: string;
  name: string;
  email: string;
  nationality: string;
  destinations: string;
  days: number;
  travelers: number;
  styles: string;
  budget: string;
  notes: string;
};

async function persistToCsv(row: string): Promise<boolean> {
  try {
    await ensureCsv();
    await appendFile(CSV_PATH, `${row}\n`, "utf8");
    return true;
  } catch {
    return false;
  }
}

async function persistViaResend(payload: SubmissionPayload): Promise<boolean> {
  return sendFormNotify({
    subject: `[Itinerary request] ${payload.name} · ${payload.days}d`,
    replyTo: payload.email,
    text: [
      `New itinerary request (${payload.source})`,
      `Time: ${payload.timestamp}`,
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Passport: ${payload.nationality}`,
      `Destinations: ${payload.destinations}`,
      `Days: ${payload.days}`,
      `Travelers: ${payload.travelers}`,
      `Styles: ${payload.styles}`,
      `Budget: ${payload.budget}`,
      `Notes: ${payload.notes}`,
    ].join("\n"),
  });
}

/** Optional webhook (Zapier / Make / Slack) — set ITINERARY_WEBHOOK_URL. */
async function persistViaWebhook(payload: SubmissionPayload): Promise<boolean> {
  const url = process.env.ITINERARY_WEBHOOK_URL?.trim();
  if (!url) return false;
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export async function submitItineraryPlan(
  _prev: PlannerFormState,
  formData: FormData,
): Promise<PlannerFormState> {
  const honeypot = String(formData.get("company") ?? "").trim();
  if (honeypot) {
    return {
      ok: true,
      message: "Thanks — your itinerary request has been received.",
    };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const nationality = String(formData.get("nationality") ?? "").trim();
  const destinations = String(formData.get("destinations") ?? "").trim();
  const daysRaw = String(formData.get("days") ?? "").trim();
  const travelersRaw = String(formData.get("travelers") ?? "").trim();
  const styles = String(formData.get("styles") ?? "").trim();
  const budget = String(formData.get("budget") ?? "").trim();
  const notes = String(formData.get("notes") ?? "").trim();
  const source = String(formData.get("source") ?? "planner").trim();

  if (!destinations) {
    return { ok: false, message: "Please choose at least one destination." };
  }

  const days = Number(daysRaw);
  if (!Number.isFinite(days) || days < 3 || days > 21) {
    return {
      ok: false,
      message: "Please choose a trip length between 3 and 21 days.",
    };
  }

  const travelers = Number(travelersRaw);
  if (!Number.isFinite(travelers) || travelers < 1 || travelers > 8) {
    return { ok: false, message: "Please choose how many travelers (1–8)." };
  }

  if (!styles) {
    return { ok: false, message: "Please pick at least one travel style." };
  }

  if (!name || name.length > 120) {
    return { ok: false, message: "Please enter your name." };
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 200) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  if (!nationality || nationality.length > 120) {
    return { ok: false, message: "Please select your passport country." };
  }

  if (notes.length > 5000) {
    return { ok: false, message: "Notes are too long." };
  }

  const allowedSource = source === "home" ? "home" : "planner";
  const timestamp = new Date().toISOString();
  const payload: SubmissionPayload = {
    timestamp,
    source: allowedSource,
    name,
    email,
    nationality,
    destinations,
    days,
    travelers,
    styles,
    budget: budget || "(not set)",
    notes: notes || "(none)",
  };

  const row = [
    timestamp,
    escapeCsv(allowedSource),
    escapeCsv(name),
    escapeCsv(email),
    escapeCsv(nationality),
    escapeCsv(destinations),
    String(days),
    String(travelers),
    escapeCsv(styles),
    escapeCsv(payload.budget),
    escapeCsv(payload.notes),
  ].join(",");

  // Email first when Resend is configured; CSV / webhook are backups.
  const requireEmail = Boolean(process.env.RESEND_API_KEY?.trim());
  const savedEmail = await persistViaResend(payload);
  const savedCsv = await persistToCsv(row);
  const savedWebhook =
    savedEmail || savedCsv ? false : await persistViaWebhook(payload);

  if (requireEmail ? !savedEmail : !savedEmail && !savedCsv && !savedWebhook) {
    console.error("[itinerary-submission-failed]", payload);
    return {
      ok: false,
      message: `We couldn't save your request just now. Please email ${SITE_EMAIL} with your trip details, or try the contact form.`,
    };
  }

  return {
    ok: true,
    message: "Thanks — your itinerary request has been received.",
  };
}
