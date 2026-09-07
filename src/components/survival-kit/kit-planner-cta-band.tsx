"use client";

import { KitTrackedLink } from "./kit-tracked-link";
import { kitPlannerBand } from "@/lib/survival-kit/content";

export function KitPlannerCtaBand() {
  const band = kitPlannerBand;
  return (
    <div className="rounded-lg bg-[var(--brand-cta)] px-6 py-8 text-[var(--brand-on)] md:flex md:items-center md:justify-between md:gap-10 md:px-10 md:py-10">
      <div className="md:max-w-2xl">
        <h3 className="mb-3 font-serif text-xl font-bold leading-tight md:text-2xl">
          {band.title}
        </h3>
        <p className="text-sm font-normal leading-relaxed text-[var(--brand-on)]/85 md:text-base">
          {band.body}
        </p>
      </div>
      <div className="mt-6 shrink-0 md:mt-0">
        <KitTrackedLink
          cta={{
            label: band.ctaLabel,
            href: band.href,
            trackingModule: band.trackingModule,
          }}
          variant="outline"
          className="!border-[var(--brand-on)]/40 !bg-[var(--brand-on)] !text-[var(--brand-cta)] hover:!bg-white"
        />
      </div>
    </div>
  );
}
