"use client";

import Link from "next/link";
import Container from "@/app/_components/container";
import { LastUpdated } from "@/app/_components/last-updated";
import { SiteLogo } from "@/app/_components/site-logo";
import { SocialLinks } from "@/app/_components/social-links";
import { WhatsAppContact } from "@/app/_components/whatsapp-contact";
import { useLocaleDict } from "@/i18n/locale-provider";
import {
  SITE_EMAIL,
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
  "mb-4 text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-mango)]";

export function Footer() {
  const year = new Date().getFullYear();
  const { dict } = useLocaleDict();

  function navLabel(id: NavId) {
    return dict.nav[id];
  }

  const planLinks = [
    {
      href: "/china-itinerary-planner#plan-trip",
      label: dict.home.primaryCta,
    },
    { href: "/services", label: dict.nav.services },
    { href: "/survival-kit", label: dict.home.secondaryCta },
    ...toolsNav.map((item) => ({
      href: item.href,
      label: navLabel(item.id),
    })),
  ];

  const companyLinks = [
    { href: "/about", label: dict.nav.about },
    { href: "/china-destinations", label: dict.footer.destinations },
    { href: "/survival-guides", label: dict.nav.guides },
    { href: "/contact", label: dict.nav.contact },
  ];

  return (
    <footer className="border-t border-[color-mix(in_srgb,var(--brand-cta)_12%,transparent)] bg-[var(--brand-cream)]">
      <Container>
        <div className="py-14 md:py-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
            {/* Brand + CTAs */}
            <div className="lg:col-span-4">
              <SiteLogo size="lg" />
              <p className="mt-5 max-w-md text-base font-bold leading-snug tracking-tight text-[var(--brand-cta)]">
                {SITE_TAGLINE}
              </p>
              <p className="mt-3 max-w-md text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)]">
                One-to-one planning and practical prep for foreigners traveling
                China independently — not a tour template.
              </p>
              <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
                <Link
                  href="/china-itinerary-planner#plan-trip"
                  className="btn-brand inline-flex min-h-11 justify-center px-5 py-2.5 text-sm"
                >
                  {dict.home.primaryCta}
                </Link>
                <Link
                  href="/survival-kit"
                  className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-[#00897b]/30 px-5 py-2.5 text-sm font-bold text-[var(--brand-cta)] transition-all duration-300 hover:bg-[#00897b]/8"
                >
                  {dict.home.secondaryCta}
                </Link>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <SocialLinks />
                <WhatsAppContact
                  variant="footer"
                  label={dict.whatsapp.navLabel}
                  cardTitle={dict.whatsapp.cardTitle}
                />
              </div>
            </div>

            {/* Plan & services */}
            <div className="lg:col-span-2">
              <h4 className={headingClass}>{dict.footer.plan}</h4>
              <ul className="space-y-3">
                {planLinks.map((item) => (
                  <li key={`${item.href}-${item.label}`}>
                    <Link href={item.href} className={linkClass}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Topic hubs */}
            <div className="lg:col-span-3">
              <h4 className={headingClass}>{dict.footer.guides}</h4>
              <ul className="space-y-3 lg:columns-2 lg:gap-x-6">
                {guidesNav.map((item) => (
                  <li key={item.href} className="break-inside-avoid lg:mb-3">
                    <Link
                      href={item.href}
                      className={cn(linkClass, "inline-flex items-center gap-2")}
                    >
                      {item.icon ? (
                        <span
                          className="w-5 shrink-0 text-center text-[0.95em] leading-none"
                          aria-hidden
                        >
                          {item.icon}
                        </span>
                      ) : null}
                      {navLabel(item.id)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company + contact */}
            <div className="lg:col-span-3">
              <h4 className={headingClass}>{dict.footer.company}</h4>
              <ul className="mb-8 space-y-3">
                {companyLinks.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={linkClass}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <h4 className={headingClass}>{dict.footer.contact}</h4>
              <ul className="space-y-3 text-sm font-normal text-[var(--brand-ink-muted)]">
                <li>
                  <a
                    href={`mailto:${SITE_EMAIL}`}
                    className="break-all transition-colors duration-300 hover:text-[var(--brand-cta)]"
                  >
                    {SITE_EMAIL}
                  </a>
                </li>
                <li>
                  {SITE_LOCATION}
                  <span className="text-[var(--brand-ink-muted)]/80">
                    {" "}
                    · {SITE_LOCATION_ZH}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 space-y-4 border-t border-[color-mix(in_srgb,var(--brand-cta)_12%,transparent)] pt-8 md:mt-16">
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

            <div className="flex flex-col items-start justify-between gap-4 pt-2 text-sm font-normal text-[var(--brand-ink-muted)] md:flex-row md:items-center">
              <div>
                <p>
                  © {year} {SITE_NAME}. All rights reserved.
                </p>
                <LastUpdated
                  date={SITE_LAST_UPDATED}
                  label="Site last updated"
                />
              </div>
              <Link
                href="/privacy-policy"
                className="transition-colors duration-300 hover:text-[var(--brand-cta)]"
              >
                Privacy policy
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
