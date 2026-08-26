"use client";

import { useLocaleDict } from "@/i18n/locale-provider";
import Link from "next/link";

/** Locale-aware hero copy/CTAs — kept client so language switch still updates. */
export function HomeHeroCopy() {
  const { dict } = useLocaleDict();
  const copy = dict.home;

  return (
    <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 items-center px-4 pb-12 pt-20 md:px-8 md:pb-16 md:pt-24 lg:px-12 lg:pb-20">
      <div className="w-full max-w-xl text-left md:max-w-xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)] [text-shadow:0_0_18px_rgba(250,246,239,0.95),0_1px_0_rgba(250,246,239,0.8)]">
          {copy.eyebrow}
        </p>
        <h1 className="mb-5 max-w-xl font-serif text-3xl font-bold leading-[1.1] tracking-tight text-[var(--brand-ink)] [text-shadow:0_1px_0_rgba(250,246,239,0.9),0_0_28px_rgba(250,246,239,0.75)] md:mb-6 md:text-5xl">
          {copy.title}
        </h1>
        <p className="mb-8 max-w-md text-sm font-normal leading-relaxed text-[var(--brand-ink)] [text-shadow:0_1px_0_rgba(250,246,239,0.9),0_0_22px_rgba(250,246,239,0.75)] md:mb-10 md:text-base">
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
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/70 bg-white/20 px-8 py-3.5 text-sm font-bold text-[var(--brand-cta)] transition-all duration-300 hover:border-white hover:bg-white/35 sm:w-auto md:px-10"
          >
            {copy.secondaryCta}
          </Link>
        </div>
        <p className="mt-4 max-w-lg text-xs font-normal leading-relaxed text-[var(--brand-ink)] [text-shadow:0_1px_0_rgba(250,246,239,0.9),0_0_20px_rgba(250,246,239,0.8)] md:text-sm">
          {copy.ctaSplitBefore}
          <Link
            href="/survival-guides"
            className="font-bold underline decoration-[color-mix(in_srgb,var(--brand-ink)_35%,transparent)] underline-offset-2 transition-colors duration-300 hover:text-[var(--brand-cta)]"
          >
            {copy.ctaSplitLink}
          </Link>
          {copy.ctaSplitAfter}
        </p>
        <p className="mt-2 max-w-md text-xs font-normal leading-relaxed text-[var(--brand-ink)]/80 [text-shadow:0_1px_0_rgba(250,246,239,0.9),0_0_20px_rgba(250,246,239,0.8)]">
          {copy.ctaHint}
        </p>
      </div>
    </div>
  );
}
