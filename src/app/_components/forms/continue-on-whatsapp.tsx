"use client";

import {
  buildLeadWhatsAppPrefill,
  getWhatsAppPrefillHref,
  isWhatsAppReady,
} from "@/lib/whatsapp";

type Props = {
  name?: string;
  context: string;
  className?: string;
};

/** Post-submit CTA: user opens WhatsApp to us (best conversion path). */
export function ContinueOnWhatsApp({ name, context, className }: Props) {
  if (!isWhatsAppReady()) return null;

  const href = getWhatsAppPrefillHref(
    buildLeadWhatsAppPrefill({ name, context }),
  );

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={
        className ??
        "btn-brand mt-5 inline-flex min-h-11 w-full items-center justify-center px-6 py-3 text-sm sm:w-auto"
      }
    >
      Continue on WhatsApp
    </a>
  );
}
