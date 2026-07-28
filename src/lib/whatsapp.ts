/**
 * WhatsApp contact — placeholders until a real number / QR are ready.
 * Fill SITE_WHATSAPP_NUMBER (digits only, country code included, no +)
 * and replace SITE_WHATSAPP_QR_PATH with the final QR image.
 */

export const SITE_WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";

/** Placeholder QR until the real asset is uploaded. */
export const SITE_WHATSAPP_QR_PATH = "/brand/whatsapp-qr.svg";

export const SITE_WHATSAPP_PREFILL =
  "Hi! I'd like help planning an independent trip to China.";

export function getWhatsAppHref(prefill: string = SITE_WHATSAPP_PREFILL): string {
  const digits = SITE_WHATSAPP_NUMBER.replace(/\D/g, "");
  if (!digits) {
    // Placeholder so UI can ship before the number is confirmed.
    return `https://wa.me/?text=${encodeURIComponent(prefill)}`;
  }
  return `https://wa.me/${digits}?text=${encodeURIComponent(prefill)}`;
}
