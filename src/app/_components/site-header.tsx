"use client";

import { MobileNav } from "@/app/_components/mobile-nav";
import { SiteLogo } from "@/app/_components/site-logo";
import { SiteNav } from "@/app/_components/site-nav";
import { SiteSearch } from "@/app/_components/site-search";
import { WhatsAppContact } from "@/app/_components/whatsapp-contact";
import { useLocaleDict } from "@/i18n/locale-provider";
import cn from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const { dict } = useLocaleDict();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setScrolled(false);
      return;
    }

    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const overlay = isHome && !scrolled;

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-[background-color,border-color,box-shadow] duration-300",
        overlay
          ? "border-b border-transparent bg-transparent"
          : "border-b border-neutral-200 bg-white",
      )}
    >
      <div className="mx-auto flex h-14 w-full max-w-7xl items-center gap-4 px-4 md:h-16 md:gap-6 md:px-6 lg:px-8 xl:gap-8">
        <div className="relative z-10 shrink-0 pr-2">
          <SiteLogo
            size="sm"
            tone={overlay ? "onTeal" : "onWhite"}
            compactOnMobile
          />
        </div>

        <div className="hidden min-w-0 flex-1 lg:block">
          <SiteNav labels={dict.nav} tone={overlay ? "onTeal" : "default"} />
        </div>

        <div className="relative z-10 ml-auto flex shrink-0 items-center gap-2.5 sm:gap-3">
          <div className="hidden min-w-0 2xl:block">
            <SiteSearch
              variant="header"
              preferResultsPage
              loadIndexOnFocus
            />
          </div>
          <Link
            href="/search"
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300 2xl:hidden",
              overlay
                ? "border-white/40 text-white hover:bg-white/10"
                : "border-neutral-200 text-neutral-900 hover:bg-neutral-50",
            )}
            aria-label="Search guides"
          >
            <SearchGlyph className="h-4 w-4" />
          </Link>
          <Link
            href="/china-itinerary-planner#plan-trip"
            className="btn-brand hidden h-10 items-center px-4 py-0 text-sm md:inline-flex"
          >
            {dict.header.plannerCta}
          </Link>
          <WhatsAppContact
            variant="nav"
            tone={overlay ? "onTeal" : "default"}
            showDivider={false}
            label={dict.whatsapp.navLabel}
            cardTitle={dict.whatsapp.cardTitle}
          />
          <MobileNav
            labels={dict.nav}
            plannerCta={dict.header.plannerCta}
            tone={overlay ? "onPhoto" : "default"}
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
