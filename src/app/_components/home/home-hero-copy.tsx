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
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
          {copy.eyebrow}
        </p>
        <h1 className="mb-5 max-w-xl font-serif text-3xl font-bold leading-[1.1] tracking-tight text-[var(--brand-ink)] md:mb-6 md:text-5xl">
          {copy.title}
        </h1>
        <p className="mb-8 max-w-md text-sm font-normal leading-relaxed text-[var(--brand-ink)] md:mb-10 md:text-base">
          {copy.subtitle}
        </p>

        <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <Link
            href="/china-itinerary-planner"
            className="btn-hero inline-flex min-h-12 w-full items-center justify-center px-8 py-3.5 text-base sm:w-auto md:px-10"
          >
            {copy.primaryCta}
          </Link>
          <Link
            href="/survival-kit"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full border-2 border-[var(--brand-cta)] bg-[var(--brand-cream)]/95 px-8 py-3.5 text-sm font-bold text-[var(--brand-cta)] shadow-[0_6px_20px_rgba(80,40,24,0.08)] transition-all duration-300 hover:bg-white hover:shadow-[0_8px_24px_rgba(80,40,24,0.12)] active:scale-[0.98] sm:w-auto md:px-10"
          >
            {copy.secondaryCta}
          </Link>
        </div>
      </div>
    </div>
  );
}
