"use client";

import { KitTrackedLink } from "./kit-tracked-link";
import { kitPlannerBand } from "@/lib/survival-kit/content";

export function KitPlannerCtaBand() {
  const band = kitPlannerBand;
  return (
    <div className="rounded-sm bg-[var(--brand-cta)] px-6 py-8 text-[var(--brand-on)] md:px-10 md:py-10">
      <h3 className="mb-3 text-xl font-light tracking-wide md:text-2xl">
        {band.title}
      </h3>
      <p className="mb-6 max-w-xl text-sm font-light leading-relaxed text-[var(--brand-on)]/85 md:text-base">
        {band.body}
      </p>
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
  );
}
