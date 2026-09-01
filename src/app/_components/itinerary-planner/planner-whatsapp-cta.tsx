"use client";

import {
  getWhatsAppPrefillHref,
  isWhatsAppReady,
} from "@/lib/whatsapp";
import { plannerSectionCopy } from "@/lib/itinerary-planner/content";
import cn from "classnames";

type Props = {
  destinations?: string[];
  days?: number;
  className?: string;
};

export function PlannerWhatsAppCta({
  destinations = [],
  days,
  className,
}: Props) {
  if (!isWhatsAppReady()) return null;

  const cities = destinations.length ? destinations.join(", ") : "not chosen yet";
  const dayBit = days ? ` Days: ${days}.` : "";
  const href = getWhatsAppPrefillHref(
    `${plannerSectionCopy.whatsappPrefill} ${cities}.${dayBit}`,
  );

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex min-h-11 w-full items-center justify-center rounded-full border-2 border-[var(--brand-cta)]/30 px-6 py-3 text-sm font-bold text-[var(--brand-cta)] transition-all duration-300 hover:bg-[var(--brand-cta)]/8 sm:w-auto",
        className,
      )}
    >
      {plannerSectionCopy.whatsappCta}
    </a>
  );
}
