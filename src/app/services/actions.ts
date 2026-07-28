"use server";

import { SITE_EMAIL } from "@/lib/constants";
import { sendFormNotify } from "@/lib/forms/notify";
import { appendFile, access, mkdir, writeFile } from "fs/promises";
import path from "path";

export type AddonRequestState = {
  ok: boolean;
  message: string;
};

const CSV_HEADER = "timestamp,service,contact,need\n";
const DATA_DIR = path.join(process.cwd(), "data");
const CSV_PATH = path.join(DATA_DIR, "service-addon-submissions.csv");

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

export async function submitAddonServiceRequest(
  _prev: AddonRequestState,
  formData: FormData,
): Promise<AddonRequestState> {
  const honeypot = String(formData.get("company") ?? "").trim();
  if (honeypot) {
    return { ok: true, message: "Thanks — your request has been received." };
  }

  const service = String(formData.get("service") ?? "").trim();
  const contact = String(formData.get("contact") ?? "").trim();
  const need = String(formData.get("need") ?? "").trim();

  if (!service) {
    return { ok: false, message: "Missing service type." };
  }

  if (!contact || contact.length > 200) {
    return {
      ok: false,
      message: "Please leave an email or WhatsApp we can reach.",
    };
  }

  if (!need || need.length < 10) {
    return {
      ok: false,
      message: "Please describe what you need (at least 10 characters).",
    };
  }

  if (need.length > 5000) {
    return { ok: false, message: "Description is too long." };
  }

  const timestamp = new Date().toISOString();
  const row = [
    timestamp,
    escapeCsv(service),
    escapeCsv(contact),
    escapeCsv(need),
  ].join(",");

  const requireEmail = Boolean(process.env.RESEND_API_KEY?.trim());
  const emailed = await sendFormNotify({
    subject: `[Service request] ${service}`,
    text: [
      "New service / add-on request",
      `Time: ${timestamp}`,
      `Service: ${service}`,
      `Contact: ${contact}`,
      "",
      need,
    ].join("\n"),
  });

  let savedCsv = false;
  try {
    await ensureCsv();
    await appendFile(CSV_PATH, `${row}\n`, "utf8");
    savedCsv = true;
  } catch {
    // CSV is best-effort on Vercel (ephemeral FS).
  }

  if ((requireEmail && !emailed) || (!requireEmail && !savedCsv)) {
    console.error("[service-addon-submission-failed]", {
      timestamp,
      service,
      contact,
      emailed,
      savedCsv,
    });
    return {
      ok: false,
      message: `Something went wrong saving your request. Please email ${SITE_EMAIL} or use the contact page.`,
    };
  }

  return {
    ok: true,
    message: "Thanks — we'll reply within 24–48 hours.",
  };
}
