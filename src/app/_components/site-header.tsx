"use client";

import { MobileNav } from "@/app/_components/mobile-nav";
import { SiteLogo } from "@/app/_components/site-logo";
import { SiteNav } from "@/app/_components/site-nav";
import { SiteSearch } from "@/app/_components/site-search";
import { WhatsAppContact } from "@/app/_components/whatsapp-contact";
import { useLocaleDict } from "@/i18n/locale-provider";
import { isPhotoHeroPath } from "@/lib/destinations";
import cn from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const { dict } = useLocaleDict();
  const pathname = usePathname();
  const photoHero = isPhotoHeroPath(pathname);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!photoHero) {
      setScrolled(false);
      return;
    }

    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [photoHero]);

  const overlay = photoHero && !scrolled;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 isolate transition-[background-color,border-color,box-shadow] duration-300",
        overlay
          ? "border-b border-transparent bg-transparent"
          : "border-b border-neutral-200 bg-white",
      )}
    >
      <div className="mx-auto flex h-14 w-full max-w-[90rem] items-center gap-3 px-4 md:h-16 md:gap-3 md:px-6 lg:px-8">
        <div className="relative z-10 shrink-0 pr-1 md:pr-2">
          <SiteLogo
            size="sm"
            tone={overlay ? "onTeal" : "onWhite"}
            compactOnMobile
          />
        </div>

        <div className="hidden min-w-0 flex-1 xl:flex">
          <SiteNav labels={dict.nav} tone={overlay ? "onTeal" : "default"} />
        </div>

        <div className="relative z-20 ml-auto flex shrink-0 items-center justify-end gap-2 sm:gap-2.5 md:gap-3">
          <div className="relative w-[8.5rem] shrink-0 sm:w-[11rem] md:w-[12rem] xl:w-[10.5rem] min-[1800px]:w-[12.5rem]">
            <SiteSearch
              variant="header"
              loadIndexOnFocus
              tone={overlay ? "onPhoto" : "default"}
            />
          </div>
          <Link
            href="/china-itinerary-planner#plan-trip"
            className="btn-brand hidden h-10 items-center px-3 py-0 text-sm md:inline-flex xl:hidden min-[1800px]:inline-flex min-[1800px]:px-4"
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

export default SiteHeader;
