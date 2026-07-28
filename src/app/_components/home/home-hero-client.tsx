"use client";

import { SiteSearch } from "@/app/_components/site-search";
import { useLocaleDict } from "@/i18n/locale-provider";
import { SITE_HERO_PATH, SITE_NAME } from "@/lib/constants";
import { homePopularSearches } from "@/lib/home/content";
import type { SearchItem } from "@/lib/search/types";
import Image from "next/image";
import Link from "next/link";

type Props = {
  searchItems: SearchItem[];
};

export function HomeHeroClient({ searchItems }: Props) {
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

      {/* Sunny wash — tropical light, not dark theme */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(255,250,240,0.94) 0%, rgba(255,250,240,0.86) 38%, rgba(255,250,240,0.45) 62%, rgba(255,248,224,0.2) 82%, transparent 100%), radial-gradient(ellipse 70% 60% at 15% 40%, rgba(0,137,123,0.12), transparent 55%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 top-10 h-48 w-48 rounded-full bg-[var(--brand-mango)]/25 blur-3xl md:h-64 md:w-64"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-10 right-0 h-40 w-40 rounded-full bg-[var(--brand-coral)]/20 blur-3xl md:h-56 md:w-56"
      />

      <div className="relative z-10 mx-auto flex min-h-[76svh] max-w-6xl items-center px-4 pb-16 pt-24 md:min-h-[84svh] md:px-8 md:pb-20 md:pt-28 lg:px-12 lg:pb-28 lg:pt-32">
        <div className="w-full max-w-xl text-left md:max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
            {copy.eyebrow}
          </p>
          <h1 className="mb-5 max-w-xl text-3xl font-bold leading-tight tracking-tight text-[var(--brand-cta)] md:mb-6 md:text-5xl">
            {copy.title}
          </h1>
          <p className="mb-6 max-w-md text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
            {copy.subtitle}
          </p>

          <div className="w-full max-w-xl">
            <SiteSearch items={searchItems} variant="hero" preferResultsPage />

            <div className="mt-3 flex flex-wrap items-center gap-x-1 gap-y-2">
              <span className="inline-flex items-center gap-1.5 pr-1 text-xs font-bold tracking-tight text-[var(--brand-cta)]">
                <PopularIcon className="h-3.5 w-3.5" />
                Popular
              </span>
              {homePopularSearches.map((item) => (
                <span key={item.href} className="inline-flex items-center">
                  <span aria-hidden className="mx-1.5 text-[var(--brand-muted)]">
                    ·
                  </span>
                  <Link
                    href={item.href}
                    className="rounded-full px-2 py-0.5 text-xs font-normal lowercase tracking-wide text-[var(--brand-ink-muted)] transition-colors duration-300 hover:bg-white/80 hover:text-[var(--brand-cta)]"
                  >
                    {item.label}
                  </Link>
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href="/china-itinerary-planner"
              className="btn-hero min-h-12 px-8 py-3.5 text-base md:px-10"
            >
              {copy.primaryCta}
            </Link>
            <Link
              href="/survival-kit"
              className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-[#00897b]/30 bg-transparent px-8 py-3.5 text-sm font-bold text-[var(--brand-cta)] transition-all duration-300 hover:scale-105 hover:border-[var(--brand-cta)] hover:bg-[#00897b]/8 md:px-10"
            >
              {copy.secondaryCta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function PopularIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <path
        d="M12 3c1.5 3 2 5.2 1.2 7.2.9-.2 1.7-.1 2.5.4 1.5 1 2.3 2.8 2.1 4.6-.3 3.2-2.9 5.8-5.8 5.8S6.5 18.4 6.2 15.2c-.2-1.5.2-3 1.2-4.1.6-.7 1.4-1.2 2.3-1.4C9 7.2 10.2 4.8 12 3z"
        strokeLinejoin="round"
      />
    </svg>
  );
}
