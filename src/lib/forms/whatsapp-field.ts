/** Shared WhatsApp optional field + opt-in parsing for lead forms. */

export const WHATSAPP_OPT_IN_LABEL =
  "OK for Hidden China Travel to contact me on WhatsApp about this request";

export type WhatsAppFieldOk = {
  ok: true;
  /** Empty when not provided */
  whatsapp: string;
  optIn: boolean;
};

export type WhatsAppFieldErr = {
  ok: false;
  message: string;
};

export type WhatsAppFieldResult = WhatsAppFieldOk | WhatsAppFieldErr;

function isChecked(value: FormDataEntryValue | null): boolean {
  if (value == null) return false;
  const s = String(value).toLowerCase();
  return s === "on" || s === "true" || s === "1" || s === "yes";
}

/** Normalize to E.164-ish `+` + digits when possible. */
export function normalizeWhatsAppNumber(raw: string): string {
  const trimmed = raw.trim();
  const digits = trimmed.replace(/\D/g, "");
  if (!digits) return "";
  return `+${digits}`;
}

/**
 * Optional WhatsApp number. If provided, opt-in checkbox is required.
 * Email remains the primary contact elsewhere in each form.
 */
export function parseWhatsAppField(formData: FormData): WhatsAppFieldResult {
  const raw = String(formData.get("whatsapp") ?? "").trim();
  const optIn = isChecked(formData.get("whatsappOptIn"));

  if (!raw) {
    return { ok: true, whatsapp: "", optIn: false };
  }

  if (raw.length > 40) {
    return { ok: false, message: "WhatsApp number is too long." };
  }

  const digits = raw.replace(/\D/g, "");
  if (digits.length < 8 || digits.length > 15) {
    return {
      ok: false,
      message:
        "Please enter a WhatsApp number with country code (e.g. +44…), or leave it blank.",
    };
  }

  if (!optIn) {
    return {
      ok: false,
      message:
        "Please confirm we may contact you on WhatsApp, or leave the number blank.",
    };
  }

  return { ok: true, whatsapp: normalizeWhatsAppNumber(raw), optIn: true };
}

export function whatsappNotifyLines(whatsapp: string, optIn: boolean): string[] {
  if (!whatsapp) {
    return ["WhatsApp: (not provided)", "WhatsApp opt-in: no"];
  }
  return [
    `WhatsApp: ${whatsapp}`,
    `WhatsApp opt-in: ${optIn ? "yes" : "no"}`,
  ];
}
