"use client";

import { useLocaleDict } from "@/i18n/locale-provider";
import { SITE_HERO_PATH, SITE_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export function HomeHeroClient() {
  const { dict } = useLocaleDict();
  const copy = dict.home;

  return (
    <section className="relative isolate -mt-14 min-h-[76svh] overflow-hidden bg-[var(--brand-cream)] md:-mt-16 md:min-h-[84svh]">
      <Image
        src={SITE_HERO_PATH}
        alt={`${SITE_NAME} — China travel atmosphere`}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center scale-[1.02] brightness-[1.05] contrast-[0.95] saturate-[1.05]"
      />

      {/* Light wash — teal-led */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(255,250,240,0.94) 0%, rgba(255,250,240,0.86) 38%, rgba(255,250,240,0.45) 62%, rgba(255,248,224,0.2) 82%, transparent 100%), radial-gradient(ellipse 70% 60% at 15% 40%, rgba(0,137,123,0.14), transparent 55%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 top-10 h-48 w-48 rounded-full bg-[var(--brand-cta)]/15 blur-3xl md:h-64 md:w-64"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-10 right-0 h-40 w-40 rounded-full bg-[var(--brand-cta)]/10 blur-3xl md:h-56 md:w-56"
      />

      <div className="relative z-10 mx-auto flex min-h-[76svh] max-w-6xl items-center px-4 pb-16 pt-24 md:min-h-[84svh] md:px-8 md:pb-20 md:pt-28 lg:px-12 lg:pb-28 lg:pt-32">
        <div className="w-full max-w-xl text-left md:max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-muted)]">
            {copy.eyebrow}
          </p>
          <h1 className="mb-5 max-w-xl text-3xl font-bold leading-tight tracking-tight text-[var(--brand-cta)] md:mb-6 md:text-5xl">
            {copy.title}
          </h1>
          <p className="mb-8 max-w-md text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:mb-10 md:text-base">
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
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border-2 border-[color-mix(in_srgb,var(--brand-cta)_30%,transparent)] bg-transparent px-8 py-3.5 text-sm font-bold text-[var(--brand-cta)] transition-all duration-300 hover:border-[var(--brand-cta)] hover:bg-[color-mix(in_srgb,var(--brand-cta)_8%,transparent)] active:scale-[0.98] sm:w-auto md:px-10"
            >
              {copy.secondaryCta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
