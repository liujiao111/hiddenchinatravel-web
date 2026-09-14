"use client";

import Link from "next/link";
import Container from "@/app/_components/container";
import { LastUpdated } from "@/app/_components/last-updated";
import { SiteLogo } from "@/app/_components/site-logo";
import { SocialLinks } from "@/app/_components/social-links";
import { WhatsAppContact } from "@/app/_components/whatsapp-contact";
import { useLocaleDict } from "@/i18n/locale-provider";
import {
  SITE_LAST_UPDATED,
  SITE_LOCATION,
  SITE_LOCATION_ZH,
  SITE_NAME,
  SITE_TAGLINE,
} from "@/lib/constants";
import { guidesNav, toolsNav, type NavId } from "@/lib/navigation";
import cn from "classnames";

const linkClass =
  "text-sm font-normal tracking-wide text-[var(--brand-ink-muted)] transition-colors duration-300 hover:text-[var(--brand-cta)]";

const headingClass =
  "mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-mango)]";

export function Footer() {
  const year = new Date().getFullYear();
  const { dict } = useLocaleDict();

  function navLabel(id: NavId) {
    const key = id as keyof typeof dict.nav;
    return dict.nav[key] ?? id;
  }

  const planLinks = [
    {
      href: "/china-itinerary-planner#plan-trip",
      label: dict.home.primaryCta,
    },
    { href: "/services", label: dict.nav.services },
    {
      href: "/services/custom-itinerary",
      label: dict.footer.customItinerary,
    },
    { href: "/survival-kit", label: dict.home.secondaryCta },
    ...toolsNav.map((item) => ({
      href: item.href,
      label: navLabel(item.id),
    })),
  ];

  const companyLinks = [
    { href: "/about", label: dict.nav.about },
    { href: "/reviews", label: dict.footer.reviews },
    { href: "/partners", label: dict.footer.partners },
    { href: "/china-destinations", label: dict.footer.destinations },
    { href: "/survival-guides", label: dict.nav.guides },
    { href: "/contact", label: dict.nav.contact },
  ];

  return (
    <footer className="border-t border-[color-mix(in_srgb,var(--brand-cta)_12%,transparent)] bg-[var(--brand-cream)]">
      <Container>
        <div className="py-10 md:py-12">
          <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-x-10 lg:grid-cols-[minmax(13.5rem,1.15fr)_0.9fr_minmax(0,1.45fr)_0.9fr] lg:gap-x-8">
            <div className="min-w-0">
              <SiteLogo size="md" />
              <p className="mt-2.5 text-sm font-normal leading-snug text-[var(--brand-ink-muted)]">
                <span className="font-bold tracking-tight text-[var(--brand-ink)]">
                  {SITE_TAGLINE}
                </span>{" "}
                One-to-one planning — not a tour template.
              </p>
              <div className="mt-3 flex flex-col items-start gap-1.5">
                <Link
                  href="/china-itinerary-planner#plan-trip"
                  className="btn-brand !h-8 !min-h-8 !px-3.5 !py-0 text-xs leading-none"
                >
                  {dict.home.primaryCta}
                </Link>
                <Link
                  href="/survival-kit"
                  className="inline-flex h-8 min-h-8 items-center justify-center rounded-full border-2 border-[var(--brand-cta)]/30 px-3.5 text-xs font-bold leading-none text-[var(--brand-cta)] transition-all duration-300 hover:bg-[var(--brand-cta)]/8"
                >
                  {dict.home.secondaryCta}
                </Link>
              </div>
            </div>

            <div className="min-w-0">
              <h4 className={headingClass}>{dict.footer.plan}</h4>
              <ul className="space-y-2.5">
                {planLinks.map((item) => (
                  <li key={`${item.href}-${item.label}`}>
                    <Link href={item.href} className={linkClass}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="min-w-0">
              <h4 className={headingClass}>{dict.footer.guides}</h4>
              <ul className="grid grid-cols-1 gap-x-8 gap-y-2.5 lg:grid-cols-2 lg:grid-flow-col lg:grid-rows-5">
                {guidesNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        linkClass,
                        "inline-flex max-w-full items-center gap-2",
                      )}
                    >
                      {item.icon ? (
                        <span
                          className="w-5 shrink-0 text-center text-[0.95em] leading-none"
                          aria-hidden
                        >
                          {item.icon}
                        </span>
                      ) : null}
                      <span className="min-w-0">{navLabel(item.id)}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="min-w-0">
              <h4 className={headingClass}>{dict.footer.company}</h4>
              <ul className="space-y-2.5">
                {companyLinks.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={linkClass}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm font-normal leading-snug text-[var(--brand-ink-muted)]">
                {SITE_LOCATION}
                <span className="text-[var(--brand-ink-muted)]/80">
                  {" "}
                  · {SITE_LOCATION_ZH}
                </span>
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-3 border-t border-[color-mix(in_srgb,var(--brand-cta)_12%,transparent)] pt-6 md:mt-10">
            <p className="max-w-3xl text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)]">
              {dict.footer.disclaimer}
            </p>
            <p className="max-w-3xl text-sm font-normal text-[var(--brand-ink-muted)]">
              {dict.footer.affiliateDisclosure}{" "}
              <Link
                href="/privacy-policy#affiliate-links"
                className="font-bold text-[var(--brand-coral)] underline decoration-[color-mix(in_srgb,var(--brand-coral)_35%,transparent)] underline-offset-2"
              >
                {dict.footer.affiliateLearnMore}
              </Link>
            </p>

            <div className="flex flex-col gap-4 pt-2 text-sm font-normal text-[var(--brand-ink-muted)] md:flex-row md:items-center md:justify-between">
              <div>
                <p>
                  © {year} {SITE_NAME}. All rights reserved.
                </p>
                <LastUpdated
                  date={SITE_LAST_UPDATED}
                  label="Site last updated"
                />
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <SocialLinks size="sm" />
                <WhatsAppContact
                  variant="footer"
                  label={dict.whatsapp.navLabel}
                  cardTitle={dict.whatsapp.cardTitle}
                />
                <span
                  className="hidden h-4 w-px bg-[color-mix(in_srgb,var(--brand-cta)_18%,transparent)] md:block"
                  aria-hidden
                />
                <Link
                  href="/terms-of-service"
                  className="transition-colors duration-300 hover:text-[var(--brand-cta)]"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/privacy-policy"
                  className="transition-colors duration-300 hover:text-[var(--brand-cta)]"
                >
                  Privacy policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
