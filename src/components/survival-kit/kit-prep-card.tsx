"use client";

import { HomePrepBuyMenu } from "@/app/_components/home/home-prep-buy-menu";
import type { PrepBuyMenu } from "@/lib/home/prep-content";
import { trackEvent } from "@/lib/survival-kit/track";
import type { KitPrepCardData } from "@/lib/survival-kit/types";
import { KitTrackedLink } from "./kit-tracked-link";

type Props = {
  card: KitPrepCardData;
};

function buyButtonLabel(title: string): string {
  if (/esim/i.test(title)) return "Compare China eSIMs";
  if (/vpn/i.test(title)) return "Compare travel VPNs";
  if (/wallet/i.test(title)) return "Set up a wallet";
  if (/trip\.com/i.test(title)) return "Book on Trip.com";
  if (/^(get|set|book|compare)\b/i.test(title)) return title;
  return `Compare ${title}`;
}

function toBuyMenu(card: KitPrepCardData): PrepBuyMenu | null {
  const options = card.options.filter((option) => option.primaryCta);
  if (options.length < 2) return null;

  const guideCta =
    card.footerGuide ?? options.find((o) => o.secondaryCta)?.secondaryCta;
  if (!guideCta) return null;

  return {
    buttonLabel: buyButtonLabel(card.title),
    chooseHint:
      "Choose the option that fits your trip. Some product links are affiliate.",
    guide: { label: guideCta.label, href: guideCta.href },
    options: options.map((option) => ({
      label: option.name,
      href: option.primaryCta!.href,
      external: option.primaryCta!.external,
      hint: option.badge,
    })),
  };
}

function OptionLogo({ src, name }: { src: string; name: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- mixed svg/webp brand marks
    <img
      src={src}
      alt=""
      width={28}
      height={28}
      className="h-7 w-7 shrink-0 rounded-[0.55rem] object-cover ring-1 ring-[var(--brand-border-subtle)]"
      aria-hidden
      data-app={name}
    />
  );
}

function OptionHeading({
  name,
  badge,
  logoSrc,
}: {
  name: string;
  badge?: string;
  logoSrc?: string;
}) {
  return (
    <div className="mb-1 flex flex-wrap items-center gap-2">
      {logoSrc ? <OptionLogo src={logoSrc} name={name} /> : null}
      <p className="text-sm font-bold tracking-tight text-[var(--brand-ink)]">
        {name}
      </p>
      {badge ? (
        <span className="rounded-full bg-[var(--brand-soft)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--brand-muted)]">
          {badge}
        </span>
      ) : null}
    </div>
  );
}

export function KitPrepCard({ card }: Props) {
  const buyMenu = !card.comingSoon ? toBuyMenu(card) : null;

  return (
    <article className="surface-card overflow-visible p-5 md:p-6">
      <h3 className="mb-2 text-base font-bold leading-snug tracking-tight text-[var(--brand-ink)] md:text-lg">
        {card.title}
      </h3>
      <p className="mb-5 text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)]">
        {card.note}
      </p>

      {card.comingSoon ? (
        <div className="mt-auto border-t border-[var(--brand-border-subtle)] pt-4">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--brand-mango)]">
            Coming soon
          </p>
          {card.comingSoonNote ? (
            <p className="mt-2 text-sm font-normal leading-relaxed text-[var(--brand-muted)]">
              {card.comingSoonNote}
            </p>
          ) : null}
        </div>
      ) : buyMenu ? (
        <>
          <ul className="mb-4 flex flex-1 flex-col divide-y divide-[var(--brand-border-subtle)] border-t border-[var(--brand-border-subtle)]">
            {card.options.map((option) => (
              <li key={option.name} className="py-3 first:pt-4 last:pb-0">
                <OptionHeading
                  name={option.name}
                  badge={option.badge}
                  logoSrc={option.logoSrc}
                />
                <p className="text-[13px] font-normal leading-relaxed text-[var(--brand-muted)]">
                  {option.diff}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-auto max-w-sm border-t border-[var(--brand-border-subtle)] pt-4">
            <HomePrepBuyMenu
              menu={buyMenu}
              onOptionClick={(option) => {
                const matched = card.options.find(
                  (o) => o.name === option.label,
                );
                if (!matched?.primaryCta) return;
                trackEvent("cta_click", {
                  module: matched.primaryCta.trackingModule,
                  label: matched.primaryCta.label,
                  href: matched.primaryCta.href,
                  external: Boolean(matched.primaryCta.external),
                });
              }}
            />
          </div>
        </>
      ) : (
        <>
          <ul className="mb-4 flex flex-1 flex-col divide-y divide-[var(--brand-border-subtle)] border-t border-[var(--brand-border-subtle)]">
            {card.options.map((option) => (
              <li
                key={option.name}
                className="flex flex-col gap-3 py-4 first:pt-4 last:pb-0"
              >
                <div>
                  <OptionHeading
                    name={option.name}
                    badge={option.badge}
                    logoSrc={option.logoSrc}
                  />
                  <p className="text-[13px] font-normal leading-relaxed text-[var(--brand-muted)]">
                    {option.diff}
                  </p>
                </div>
                {option.primaryCta || option.secondaryCta ? (
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5">
                    {option.primaryCta ? (
                      <KitTrackedLink
                        cta={option.primaryCta}
                        variant="primary"
                        className="px-4 py-2.5 text-sm"
                      />
                    ) : null}
                    {option.secondaryCta ? (
                      <KitTrackedLink cta={option.secondaryCta} variant="text" />
                    ) : null}
                  </div>
                ) : null}
              </li>
            ))}
          </ul>

          {card.footerGuide ? (
            <div className="mt-auto border-t border-[var(--brand-border-subtle)] pt-4">
              <KitTrackedLink cta={card.footerGuide} variant="text" />
            </div>
          ) : null}
        </>
      )}
    </article>
  );
}
