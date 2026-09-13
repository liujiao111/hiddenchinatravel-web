"use server";

import { SITE_EMAIL } from "@/lib/constants";
import { SLA_INQUIRY_SUCCESS } from "@/lib/trust/copy";
import { sendFormNotify } from "@/lib/forms/notify";
import {
  parseWhatsAppField,
  whatsappNotifyLines,
} from "@/lib/forms/whatsapp-field";
import { appendFile, access, mkdir, writeFile } from "fs/promises";
import path from "path";

export type ContactFormState = {
  ok: boolean;
  message: string;
  name?: string;
};

const ALLOWED_SERVICE_TYPES = new Set([
  "free-yunnan-route-check",
  "custom-plan",
  "itinerary-review",
  "on-trip-help",
  "booking-help",
  "partnership",
  "general",
]);

const CSV_HEADER =
  "timestamp,name,email,whatsapp,whatsappOptIn,travelTiming,serviceType,message\n";
const DATA_DIR = path.join(process.cwd(), "data");
const CSV_PATH = path.join(DATA_DIR, "contact-submissions.csv");

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

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const travelTiming = String(formData.get("travelTiming") ?? "").trim();
  const serviceType = String(formData.get("serviceType") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const honeypot = String(formData.get("company") ?? "").trim();

  if (honeypot) {
    return { ok: true, message: "Thanks — your message has been received.", name };
  }

  if (!name || name.length > 120) {
    return { ok: false, message: "Please enter your name." };
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 200) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  const whatsappField = parseWhatsAppField(formData);
  if (!whatsappField.ok) {
    return { ok: false, message: whatsappField.message };
  }

  if (!ALLOWED_SERVICE_TYPES.has(serviceType)) {
    return { ok: false, message: "Please select what this is about." };
  }

  if (travelTiming.length > 120) {
    return { ok: false, message: "Travel timing is too long." };
  }

  if (!message || message.length < 10) {
    return {
      ok: false,
      message: "Please write a short message (at least 10 characters).",
    };
  }

  if (message.length > 5000) {
    return { ok: false, message: "Message is too long." };
  }

  const timestamp = new Date().toISOString();
  const row = [
    timestamp,
    escapeCsv(name),
    escapeCsv(email),
    escapeCsv(whatsappField.whatsapp),
    whatsappField.optIn ? "yes" : "no",
    escapeCsv(travelTiming || "Not specified"),
    escapeCsv(serviceType),
    escapeCsv(message),
  ].join(",");

  const requireEmail = Boolean(process.env.RESEND_API_KEY?.trim());
  const emailed = await sendFormNotify({
    subject: `[Contact] ${name} · ${serviceType}`,
    replyTo: email,
    text: [
      "New contact form submission",
      `Time: ${timestamp}`,
      `Name: ${name}`,
      `Email: ${email}`,
      ...whatsappNotifyLines(whatsappField.whatsapp, whatsappField.optIn),
      `Travel timing: ${travelTiming || "Not specified"}`,
      `Type: ${serviceType}`,
      "",
      message,
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
    console.error("[contact-submission-failed]", {
      timestamp,
      name,
      email,
      travelTiming,
      serviceType,
      emailed,
      savedCsv,
    });
    return {
      ok: false,
      message: `Something went wrong sending your message. Please email ${SITE_EMAIL} directly instead.`,
    };
  }

  return {
    ok: true,
    name,
    message:
      serviceType === "free-yunnan-route-check"
        ? "Thanks — Joy Liu has your Yunnan route request and will send a practical check. There is no fee or booking obligation."
        : "Thanks — Joy Liu has your message. We'll reply within 24 hours and take it from there.",
  };
}
