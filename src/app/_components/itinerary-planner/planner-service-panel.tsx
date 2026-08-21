import {
  plannerAddonLinks,
  plannerAddonLinksFooter,
  plannerInfoCards,
  plannerSectionCopy,
  type PlannerInfoTone,
} from "@/lib/itinerary-planner/content";
import cn from "classnames";
import Link from "next/link";

const toneStyles: Record<
  PlannerInfoTone,
  { iconWrap: string; icon: string; title: string; mark: string }
> = {
  include: {
    iconWrap: "bg-[color-mix(in_srgb,var(--brand-olive)_18%,white)]",
    icon: "text-[var(--brand-olive)]",
    title: "text-[var(--brand-olive)]",
    mark: "text-[var(--brand-olive)]",
  },
  exclude: {
    iconWrap: "bg-[color-mix(in_srgb,var(--brand-ink-muted)_12%,white)]",
    icon: "text-[var(--brand-ink-muted)]",
    title: "text-[var(--brand-ink-muted)]",
    mark: "text-[var(--brand-ink-muted)]",
  },
  pricing: {
    iconWrap: "bg-[color-mix(in_srgb,var(--brand-mango)_22%,white)]",
    icon: "text-[var(--brand-mango)]",
    title: "text-[var(--brand-mango)]",
    mark: "text-[var(--brand-mango)]",
  },
  response: {
    iconWrap: "bg-[color-mix(in_srgb,var(--brand-cta)_12%,white)]",
    icon: "text-[var(--brand-cta)]",
    title: "text-[var(--brand-cta)]",
    mark: "text-[var(--brand-cta)]",
  },
};

function ToneGlyph({ tone }: { tone: PlannerInfoTone }) {
  const className = "h-5 w-5";
  if (tone === "include") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M5 12.5 9.5 17 19 7.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (tone === "exclude") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M7 7l10 10M17 7 7 17"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (tone === "pricing") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.75" />
        <path
          d="M12 7.5v9M9.5 9.5c.5-1 1.4-1.5 2.5-1.5s2 .7 2 1.8-1 1.7-2.5 2.1-2.5.9-2.5 2.1 1 1.8 2.5 1.8 2-.5 2.5-1.5"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M12 7v5l3 2"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InfoCardBody({
  tone,
  title,
  summary,
  items,
  compact,
}: {
  tone: PlannerInfoTone;
  title: string;
  summary: string;
  items?: string[];
  compact?: boolean;
}) {
  const styles = toneStyles[tone];
  return (
    <>
      <div className="mb-3 flex items-start gap-3">
        <span
          className={cn(
            "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full",
            styles.iconWrap,
            styles.icon,
          )}
        >
          <ToneGlyph tone={tone} />
        </span>
        <div className="min-w-0">
          <h3 className={cn("text-sm font-bold tracking-tight", styles.title)}>
            {title}
          </h3>
          <p
            className={cn(
              "mt-0.5 font-normal leading-snug text-[var(--brand-ink-muted)]",
              compact ? "text-xs" : "text-sm",
            )}
          >
            {summary}
          </p>
        </div>
      </div>
      {items?.length ? (
        <ul className="space-y-1.5">
          {items.map((item) => (
            <li
              key={item}
              className={cn(
                "flex gap-2 font-normal leading-snug text-[var(--brand-cta)]",
                compact ? "text-xs" : "text-sm",
              )}
            >
              <span className={cn("mt-0.5 shrink-0 font-bold", styles.mark)} aria-hidden>
                {tone === "exclude" ? "–" : "•"}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}

function AddonLinksBlock({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={cn(
        compact
          ? "mt-3 border-t border-[color-mix(in_srgb,var(--brand-cta)_10%,transparent)] pt-3"
          : "mt-5 border-t border-[color-mix(in_srgb,var(--brand-cta)_10%,transparent)] pt-5",
      )}
    >
      <p
        className={cn(
          "mb-2 font-bold tracking-tight text-[var(--brand-ink)]",
          compact ? "text-xs" : "text-sm",
        )}
      >
        More services
      </p>
      <ul className="space-y-1.5">
        {plannerAddonLinks.map((link) => (
          <li key={link.id}>
            <Link
              href={link.href}
              className={cn(
                "group flex items-baseline justify-between gap-2 font-normal text-[var(--brand-cta)] transition-colors duration-300 hover:text-[var(--brand-coral)]",
                compact ? "text-xs" : "text-sm",
              )}
            >
              <span className="underline decoration-[color-mix(in_srgb,var(--brand-cta)_25%,transparent)] underline-offset-2 group-hover:decoration-[var(--brand-coral)]">
                {link.label}
              </span>
              <span className="shrink-0 text-[var(--brand-ink-muted)] group-hover:text-[var(--brand-coral)]">
                {link.price}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href={plannerAddonLinksFooter.href}
        className={cn(
          "mt-2.5 inline-flex font-bold text-[var(--brand-coral)] underline decoration-[color-mix(in_srgb,var(--brand-coral)_35%,transparent)] underline-offset-2 transition-colors duration-300 hover:text-[var(--brand-coral-hover)]",
          compact ? "text-xs" : "text-sm",
        )}
      >
        {plannerAddonLinksFooter.label} →
      </Link>
    </div>
  );
}

type Props = {
  /** Show trust line under desktop sticky stack */
  showTrust?: boolean;
};

/**
 * Stacked service/pricing panel — full-width on mobile, sticky on desktop.
 */
export function PlannerServicePanel({ showTrust = true }: Props) {
  return (
    <div className="lg:sticky lg:top-28 lg:self-start">
      <div className="rounded-2xl border-2 border-[var(--brand-cta)]/15 bg-white p-4 shadow-[0_4px_20px_rgba(80,40,24,0.1)] sm:p-5 md:p-6">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-mango)]">
          Service & pricing
        </p>
        <ul className="space-y-4 sm:space-y-5">
          {plannerInfoCards.map((card, index) => (
            <li
              key={card.id}
              className={cn(
                index > 0 &&
                  "border-t border-[color-mix(in_srgb,var(--brand-cta)_10%,transparent)] pt-4 sm:pt-5",
              )}
            >
              <InfoCardBody
                tone={card.tone}
                title={card.title}
                summary={card.summary}
                items={card.items}
              />
            </li>
          ))}
        </ul>
        <AddonLinksBlock />
        {showTrust ? (
          <p className="mt-5 border-t border-[color-mix(in_srgb,var(--brand-cta)_10%,transparent)] pt-5 text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)]">
            {plannerSectionCopy.trustLine}
          </p>
        ) : null}
      </div>
    </div>
  );
}
