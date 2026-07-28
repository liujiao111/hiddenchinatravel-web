"use server";

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

  const row = [
    new Date().toISOString(),
    escapeCsv(service),
    escapeCsv(contact),
    escapeCsv(need),
  ].join(",");

  try {
    await ensureCsv();
    await appendFile(CSV_PATH, `${row}\n`, "utf8");
  } catch {
    return {
      ok: false,
      message:
        "Something went wrong saving your request. Please use the contact page instead.",
    };
  }

  return {
    ok: true,
    message: "Thanks — we'll reply within 24–48 hours.",
  };
}
