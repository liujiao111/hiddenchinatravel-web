"use client";

import { useLocaleDict } from "@/i18n/locale-provider";
import Link from "next/link";

/** Locale-aware hero copy/CTAs — kept client so language switch still updates. */
export function HomeHeroCopy() {
  const { dict } = useLocaleDict();
  const copy = dict.home;

  return (
    <div className="relative z-10 mx-auto flex min-h-[76svh] max-w-6xl items-center px-4 py-12 md:min-h-[84svh] md:px-8 md:py-16 lg:px-12 lg:py-20">
      <div className="w-full max-w-xl text-left md:max-w-2xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-muted)]">
          {copy.eyebrow}
        </p>
        <h1 className="mb-5 max-w-xl text-3xl font-bold leading-tight tracking-tight text-[var(--brand-cta)] md:mb-6 md:text-5xl">
          {copy.title}
        </h1>
        <p className="mb-8 max-w-md text-sm font-normal leading-relaxed text-[var(--brand-ink)] md:mb-10 md:text-base">
          {copy.subtitle}
        </p>

        <div className="flex w-full flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-3">
          <Link
            href="/china-itinerary-planner"
            className="btn-hero inline-flex min-h-12 w-full items-center justify-center px-8 py-3.5 text-base sm:w-auto md:px-10"
          >
            {copy.primaryCta}
          </Link>
          <Link
            href="/survival-kit"
            className="inline-flex min-h-12 items-center justify-center text-sm font-bold text-[var(--brand-cta)] underline decoration-[color-mix(in_srgb,var(--brand-cta)_35%,transparent)] underline-offset-[6px] transition-colors duration-300 hover:text-[var(--brand-cta-hover)]"
          >
            {copy.secondaryCta} →
          </Link>
        </div>
      </div>
    </div>
  );
}
