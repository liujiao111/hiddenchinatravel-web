"use client";

import { MobileNav } from "@/app/_components/mobile-nav";
import { PlannerPromoBar } from "@/app/_components/planner-promo-bar";
import { SiteLogo } from "@/app/_components/site-logo";
import { SiteNav } from "@/app/_components/site-nav";
import { WhatsAppContact } from "@/app/_components/whatsapp-contact";
import { useLocaleDict } from "@/i18n/locale-provider";
import cn from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteHeader() {
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
        <div className="mx-auto flex h-14 w-full max-w-7xl items-center gap-4 px-4 md:h-16 md:gap-5 md:px-6 lg:px-8">
          <div className="shrink-0">
            <SiteLogo size="sm" priority tone={tone} compactOnMobile />
          </div>

          <div className="hidden min-w-0 flex-1 xl:block">
            <SiteNav labels={dict.nav} tone={tone} />
          </div>

          <div
            className={cn(
              "ml-auto flex shrink-0 items-center gap-2.5 sm:gap-3",
              "xl:ml-2 xl:border-l xl:pl-5",
              onTeal
                ? "xl:border-white/25"
                : "xl:border-[color-mix(in_srgb,var(--brand-cream-border)_55%,transparent)]",
            )}
          >
            <WhatsAppContact
              variant="nav"
              tone={tone}
              showDivider={false}
              label={dict.whatsapp.navLabel}
              cardTitle={dict.whatsapp.cardTitle}
            />
            <Link
              href="/china-itinerary-planner"
              className={cn(
                "hidden whitespace-nowrap px-3.5 py-2 text-sm sm:inline-flex md:px-5 md:py-2.5",
                isHome ? "btn-brand" : "btn-brand-inverse",
              )}
            >
              {dict.header.plannerCta}
            </Link>
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

export default SiteHeader;
