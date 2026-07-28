"use server";

import { appendFile, access, mkdir, writeFile } from "fs/promises";
import path from "path";

export type ContactFormState = {
  ok: boolean;
  message: string;
};

const ALLOWED_SERVICE_TYPES = new Set([
  "custom-plan",
  "itinerary-review",
  "on-trip-help",
  "booking-help",
  "partnership",
  "general",
]);

const CSV_HEADER =
  "timestamp,name,email,subject,serviceType,message\n";
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
  const subject = String(formData.get("subject") ?? "").trim();
  const serviceType = String(formData.get("serviceType") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const honeypot = String(formData.get("company") ?? "").trim();

  if (honeypot) {
    return { ok: true, message: "Thanks — your message has been received." };
  }

  if (!name || name.length > 120) {
    return { ok: false, message: "Please enter your name." };
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 200) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  if (!ALLOWED_SERVICE_TYPES.has(serviceType)) {
    return { ok: false, message: "Please select what this is about." };
  }

  if (subject.length > 200) {
    return { ok: false, message: "Subject is too long." };
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

  const row = [
    new Date().toISOString(),
    escapeCsv(name),
    escapeCsv(email),
    escapeCsv(subject || "(no subject)"),
    escapeCsv(serviceType),
    escapeCsv(message),
  ].join(",");

  try {
    await ensureCsv();
    await appendFile(CSV_PATH, `${row}\n`, "utf8");
  } catch {
    return {
      ok: false,
      message:
        "Something went wrong saving your message. Please email us directly instead.",
    };
  }

  return {
    ok: true,
    message: "Thanks — message received. We’ll reply within 24–48 hours.",
  };
}
