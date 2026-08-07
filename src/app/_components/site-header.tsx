"use client";

import { MobileNav } from "@/app/_components/mobile-nav";
import { SiteLogo } from "@/app/_components/site-logo";
import { SiteNav } from "@/app/_components/site-nav";
import { SiteSearch } from "@/app/_components/site-search";
import { WhatsAppContact } from "@/app/_components/whatsapp-contact";
import { useLocaleDict } from "@/i18n/locale-provider";
import Link from "next/link";

export function SiteHeader() {
  const { dict } = useLocaleDict();
  const tone = "onTeal" as const;

  return (
    <header className="sticky top-0 z-40 bg-[var(--brand-cta)] shadow-[0_4px_20px_rgba(0,137,123,0.18)]">
      <div className="mx-auto flex h-14 w-full max-w-7xl items-center gap-4 px-4 md:h-16 md:gap-6 md:px-6 lg:px-8 xl:gap-8">
        <div className="relative z-10 shrink-0 bg-[var(--brand-cta)] pr-2">
          {/* No priority — avoid competing with page LCP (e.g. home hero) */}
          <SiteLogo size="sm" tone={tone} compactOnMobile />
        </div>

        <div className="hidden min-w-0 flex-1 lg:block">
          <SiteNav labels={dict.nav} tone={tone} />
        </div>

        <div className="relative z-10 ml-auto flex shrink-0 items-center gap-2.5 bg-[var(--brand-cta)] sm:gap-3 2xl:border-l 2xl:border-white/25 2xl:pl-4">
          {/* Full search from 2xl — lg/xl keep the icon so nav stays readable */}
          <div className="hidden min-w-0 2xl:block">
            <SiteSearch
              variant="header"
              preferResultsPage
              loadIndexOnFocus
            />
          </div>
          <Link
            href="/search"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors duration-300 hover:bg-white/10 2xl:hidden"
            aria-label="Search guides"
          >
            <SearchGlyph className="h-4 w-4" />
          </Link>
          <Link
            href="/china-itinerary-planner#plan-trip"
            className="btn-brand-inverse hidden h-10 items-center px-4 py-0 text-sm md:inline-flex"
          >
            {dict.header.plannerCta}
          </Link>
          <WhatsAppContact
            variant="nav"
            tone={tone}
            showDivider={false}
            label={dict.whatsapp.navLabel}
            cardTitle={dict.whatsapp.cardTitle}
          />
          <MobileNav
            labels={dict.nav}
            plannerCta={dict.header.plannerCta}
            tone={tone}
          />
        </div>
      </div>
    </header>
  );
}

function SearchGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
    </svg>
  );
}

export default SiteHeader;
