import Link from "next/link";
import cn from "classnames";
import type { VisaEvaluationResult } from "@/lib/visa-checker/evaluate";

type Props = {
  result: VisaEvaluationResult;
};

const accentByOutcome: Record<
  VisaEvaluationResult["outcome"],
  {
    border: string;
    badge: string;
    iconBg: string;
    icon: string;
  }
> = {
  visa_free: {
    border: "border-l-[var(--brand-cta)]",
    badge: "bg-[var(--brand-cta)] text-[var(--brand-on)]",
    iconBg: "bg-[var(--brand-cta)] text-[var(--brand-on)]",
    icon: "✓",
  },
  transit_240: {
    border: "border-l-[var(--brand-warm)]",
    badge: "bg-[var(--brand-warm)] text-[var(--brand-on)]",
    iconBg: "bg-[var(--brand-warm)] text-[var(--brand-on)]",
    icon: "↔",
  },
  near_miss_240: {
    border: "border-l-[var(--brand-muted)]",
    badge: "bg-[var(--brand-ink-muted)] text-[var(--brand-on)]",
    iconBg: "bg-[var(--brand-ink-muted)] text-[var(--brand-on)]",
    icon: "!",
  },
  visa_required: {
    border: "border-l-amber-700",
    badge: "bg-amber-700 text-[var(--brand-on)]",
    iconBg: "bg-amber-700 text-[var(--brand-on)]",
    icon: "!",
  },
};

export function VisaResultPanel({ result }: Props) {
  const accent = accentByOutcome[result.outcome];

  return (
    <article
      id="visa-result"
      aria-live="polite"
      className={cn(
        "scroll-mt-32 overflow-hidden rounded-sm border border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)] border-l-4 bg-[var(--brand-surface)] shadow-md md:scroll-mt-36",
        accent.border,
      )}
    >
      <div className="px-6 pb-5 pt-6 sm:px-8 sm:pt-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
          <div
            className={cn(
              "flex h-14 w-14 shrink-0 items-center justify-center rounded-sm text-2xl font-light",
              accent.iconBg,
            )}
            aria-hidden
          >
            {accent.icon}
          </div>
          <div className="min-w-0">
            <span
              className={cn(
                "mb-3 inline-block rounded-sm px-2.5 py-1 text-xs font-light uppercase tracking-wider",
                accent.badge,
              )}
            >
              {result.kicker}
            </span>
            <h2 className="text-xl font-light leading-snug tracking-wide text-[var(--brand-ink)] sm:text-2xl md:text-3xl">
              {result.headline}
            </h2>
            <p className="mt-3 max-w-2xl text-base font-light leading-relaxed text-[var(--brand-ink-muted)]">
              {result.summary}
            </p>
            {result.note ? (
              <p className="mt-4 border-t border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)] pt-4 text-sm font-light leading-relaxed text-[var(--brand-muted)]">
                {result.note}
              </p>
            ) : null}
          </div>
        </div>

        {result.missingConditions && result.missingConditions.length > 0 ? (
          <div className="mt-6 rounded-sm border border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)] bg-[var(--brand-soft)] p-4">
            <h3 className="mb-2 text-sm font-light uppercase tracking-wider text-[var(--brand-muted)]">
              Missing conditions
            </h3>
            <ul className="space-y-2">
              {result.missingConditions.map((item) => (
                <li
                  key={item}
                  className="flex gap-2 text-sm font-light text-[var(--brand-ink-muted)]"
                >
                  <span className="font-light text-amber-700" aria-hidden>
                    –
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="mt-6 grid grid-cols-1 gap-4 border-t border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)] pt-5 sm:grid-cols-3">
          <MetaItem label="Nationality" value={result.meta.nationality} />
          <MetaItem label="Stay" value={result.meta.stayLabel} />
          <MetaItem label="Port" value={result.meta.portLabel} />
        </div>

        {result.policy?.allowedStayArea || result.policy?.policyType ? (
          <div className="mt-4 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
            {result.policy.policyType ? (
              <MetaItem label="Policy" value={result.policy.policyType} />
            ) : null}
            {result.policy.allowedStayArea ? (
              <MetaItem
                label="Allowed stay area"
                value={result.policy.allowedStayArea}
              />
            ) : null}
          </div>
        ) : null}
      </div>

      <div className="border-t border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)] bg-[var(--brand-soft)] px-6 py-6 sm:px-8">
        <h3 className="mb-4 text-sm font-light uppercase tracking-wider text-[var(--brand-muted)]">
          What to prepare
        </h3>
        <ul className="grid grid-cols-1 gap-x-8 gap-y-3 md:grid-cols-2">
          {result.checklist.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-sm font-light leading-relaxed text-[var(--brand-ink-muted)]"
            >
              <span
                aria-hidden
                className={cn(
                  "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-sm text-xs font-light",
                  accent.iconBg,
                )}
              >
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-4 border-t border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)] px-6 py-6 sm:flex-row sm:items-center sm:px-8">
        <Link
          href={result.primaryCta.href}
          className="btn-brand justify-center px-8 py-3.5"
        >
          {result.primaryCta.label}
        </Link>
        <Link
          href={result.secondaryCta.href}
          className="inline-flex items-center justify-center px-4 py-3.5 font-light tracking-wide text-[var(--brand-ink-muted)] underline underline-offset-4 transition-colors duration-500 hover:text-[var(--brand-ink)]"
        >
          {result.secondaryCta.label}
        </Link>
      </div>

      <p className="px-6 pb-6 text-xs font-light text-[var(--brand-muted)] sm:px-8">
        Final entry is decided by border officials. This result is for planning
        purposes only — not legal or immigration advice.
      </p>
    </article>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <strong className="mb-0.5 block text-sm font-light tracking-wide text-[var(--brand-ink)]">
        {label}
      </strong>
      <span className="text-sm font-light leading-snug text-[var(--brand-muted)]">
        {value}
      </span>
    </div>
  );
}
