"use client";

import { trackEvent } from "@/lib/analytics/track";
import { servicesStickyCta } from "@/lib/services/content";
import Link from "next/link";

export function ServicesStickyCta() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:p-4">
      <div className="pointer-events-auto mx-auto flex max-w-lg items-center justify-between gap-2 rounded-2xl border-2 border-[#00897b]/20 bg-white/95 px-3 py-2.5 shadow-[0_8px_30px_rgba(0,137,123,0.22)] backdrop-blur-sm sm:rounded-full sm:gap-3 sm:px-4 sm:py-2">
        <p className="hidden min-w-0 pl-1 text-xs font-bold leading-snug text-[var(--brand-cta)] sm:block">
          Ready for a local plan?
        </p>
        <Link
          href={servicesStickyCta.href}
          className="btn-brand min-h-11 w-full justify-center px-4 py-2.5 text-sm sm:w-auto sm:flex-none sm:px-5"
          data-cta={servicesStickyCta.trackingEvent}
          onClick={() =>
            trackEvent(servicesStickyCta.trackingEvent, { source: "sticky" })
          }
        >
          {servicesStickyCta.label}
        </Link>
      </div>
    </div>
  );
}
