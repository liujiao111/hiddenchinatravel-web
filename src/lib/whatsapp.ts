/**
 * WhatsApp Business chat — Hidden China Travel
 * Chat link: https://wa.me/message/BMLOZTJY2QDXG1
 */

/** Official chat / QR link (preferred over raw phone). */
export const SITE_WHATSAPP_CHAT_URL =
  process.env.NEXT_PUBLIC_WHATSAPP_CHAT_URL ??
  "https://wa.me/message/BMLOZTJY2QDXG1";

/** Digits-only fallback (country code, no +). Optional if chat URL is set. */
export const SITE_WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "639773450712";

/**
 * Hover / scan asset — branded WhatsApp Business card (WebP ~12KB).
 * Vector QR also available at /brand/whatsapp-qr.svg (~2KB).
 */
export const SITE_WHATSAPP_QR_PATH =
  process.env.NEXT_PUBLIC_WHATSAPP_QR_PATH ?? "/brand/whatsapp-qr-card.webp";

export const SITE_WHATSAPP_PREFILL =
  "Hi! I'd like help planning an independent trip to China.";

export function isWhatsAppReady(): boolean {
  return Boolean(
    SITE_WHATSAPP_CHAT_URL.trim() || SITE_WHATSAPP_NUMBER.replace(/\D/g, ""),
  );
}

export function getWhatsAppHref(prefill: string = SITE_WHATSAPP_PREFILL): string {
  const chat = SITE_WHATSAPP_CHAT_URL.trim();
  if (chat) return chat;

  const digits = SITE_WHATSAPP_NUMBER.replace(/\D/g, "");
  if (!digits) {
    return `https://wa.me/?text=${encodeURIComponent(prefill)}`;
  }
  return `https://wa.me/${digits}?text=${encodeURIComponent(prefill)}`;
}
