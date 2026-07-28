"use client";

import { MobileNav } from "@/app/_components/mobile-nav";
import { PlannerPromoBar } from "@/app/_components/planner-promo-bar";
import { SiteLogo } from "@/app/_components/site-logo";
import { SiteNav } from "@/app/_components/site-nav";
import { SiteSearch } from "@/app/_components/site-search";
import { WhatsAppContact } from "@/app/_components/whatsapp-contact";
import { useLocaleDict } from "@/i18n/locale-provider";
import type { SearchItem } from "@/lib/search/types";
import cn from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  searchItems: SearchItem[];
};

export function SiteHeader({ searchItems }: Props) {
  const { dict } = useLocaleDict();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const tone = isHome ? "default" : "onTeal";
  const onTeal = tone === "onTeal";

  return (
    <>
      <PlannerPromoBar copy={dict.plannerPromo} />
      <header
        className={cn(
          "sticky top-0 z-40",
          isHome
            ? "bg-transparent"
            : "bg-[var(--brand-cta)] shadow-[0_4px_20px_rgba(0,137,123,0.18)]",
        )}
      >
        <div className="mx-auto flex h-14 w-full max-w-7xl items-center gap-4 px-4 md:h-16 md:gap-6 md:px-6 lg:px-8 xl:gap-8">
          <div className="shrink-0">
            <SiteLogo size="sm" priority tone={tone} compactOnMobile />
          </div>

          <div className="hidden min-w-0 flex-1 xl:block">
            <SiteNav labels={dict.nav} tone={tone} />
          </div>

          <div
            className={cn(
              "ml-auto flex shrink-0 items-center gap-2.5 sm:gap-3",
              "xl:border-l xl:pl-4",
              onTeal
                ? "xl:border-white/25"
                : "xl:border-[color-mix(in_srgb,var(--brand-cream-border)_55%,transparent)]",
            )}
          >
            <div className="hidden min-w-0 md:block">
              <SiteSearch
                items={searchItems}
                variant="header"
                preferResultsPage
              />
            </div>
            <Link
              href="/search"
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300 md:hidden",
                onTeal
                  ? "border-white/30 text-white hover:bg-white/10"
                  : "border-[color-mix(in_srgb,var(--brand-cta)_22%,transparent)] text-[var(--brand-cta)] hover:bg-[var(--brand-soft)]",
              )}
              aria-label="Search guides"
            >
              <SearchGlyph className="h-4 w-4" />
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
    </>
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
