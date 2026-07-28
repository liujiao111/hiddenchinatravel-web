import type { CSSProperties } from "react";
import { KitIcon } from "./kit-icon";
import { KitTrackedLink } from "./kit-tracked-link";
import type { KitPrepCardData } from "@/lib/survival-kit/types";

type Props = {
  card: KitPrepCardData;
};

export function KitPrepCard({ card }: Props) {
  return (
    <article
      className="surface-card p-7"
      style={{ "--card-accent": "var(--brand-cta)" } as CSSProperties}
    >
      <div className="surface-card-bar" aria-hidden />
      <div className="mb-5 mt-1 flex items-center gap-1.5">
        <span className="surface-card-dots" aria-hidden>
          <span />
          <span />
          <span />
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--brand-soft)] text-[var(--brand-cta)]">
            <KitIcon name={card.icon} className="h-3.5 w-3.5" />
          </span>
          <span className="surface-card-label">Prep</span>
        </span>
      </div>
      <h3 className="mb-3 text-xl font-bold leading-tight tracking-tight text-[var(--brand-cta)]">
        {card.title}
      </h3>
      <p className="mb-5 text-sm font-light leading-relaxed text-[var(--brand-ink-muted)]">
        {card.anxiety}
      </p>

      {card.comingSoon ? (
        <div className="mt-auto border-t border-[color-mix(in_srgb,var(--brand-cream-border)_35%,transparent)] pt-4">
          <p className="text-[11px] font-light uppercase tracking-[0.16em] text-[var(--brand-warm)]">
            Coming soon
          </p>
          {card.comingSoonNote ? (
            <p className="mt-2 text-sm font-light leading-relaxed text-[var(--brand-muted)]">
              {card.comingSoonNote}
            </p>
          ) : null}
        </div>
      ) : (
        <>
          <ul className="mb-4 flex flex-1 flex-col divide-y divide-[color-mix(in_srgb,var(--brand-cream-border)_35%,transparent)] border-t border-[color-mix(in_srgb,var(--brand-cream-border)_35%,transparent)]">
            {card.options.map((option) => (
              <li
                key={option.name}
                className="flex flex-col gap-3 py-4 first:pt-4 last:pb-0"
              >
                <div>
                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <p className="text-sm font-light tracking-wide text-[var(--brand-ink)]">
                      {option.name}
                    </p>
                    {option.badge ? (
                      <span className="rounded-sm border border-[color-mix(in_srgb,var(--brand-cream-border)_45%,transparent)] bg-[var(--brand-soft)] px-1.5 py-0.5 text-[10px] font-light uppercase tracking-[0.14em] text-[var(--brand-muted)]">
                        {option.badge}
                      </span>
                    ) : null}
                  </div>
                  <p className="text-xs font-light leading-relaxed text-[var(--brand-muted)] md:text-[13px]">
                    {option.diff}
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                  <KitTrackedLink
                    cta={option.primaryCta}
                    variant="primary"
                    className="w-full px-4 py-2.5 text-sm sm:w-auto"
                  />
                  {option.secondaryCta ? (
                    <KitTrackedLink cta={option.secondaryCta} variant="text" />
                  ) : null}
                </div>
              </li>
            ))}
          </ul>

          {card.footerGuide ? (
            <div className="mt-auto border-t border-[color-mix(in_srgb,var(--brand-cream-border)_35%,transparent)] pt-4">
              <KitTrackedLink cta={card.footerGuide} variant="text" />
            </div>
          ) : null}
        </>
      )}
    </article>
  );
}
