import Link from "next/link";

export function VisaDisclaimer() {
  return (
    <aside
      className="surface-card mb-16 bg-[var(--brand-soft)] px-5 py-4 sm:px-6 sm:py-5 md:mb-20"
      aria-label="Disclaimer"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex min-w-0 flex-1 items-start gap-4">
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)] text-lg font-normal text-[var(--brand-ink)]"
            aria-hidden
          >
            i
          </span>
          <div>
            <p className="mb-1 text-sm font-bold tracking-tight text-[var(--brand-ink)]">
              Not official immigration advice — always confirm with government
              sources
            </p>
            <p className="text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)]">
              This checker is for general travel planning only and is not legal
              or immigration advice. Visa and entry rules can change. Always
              confirm your eligibility with official sources, your airline, and
              the Chinese embassy or consulate before travel.
            </p>
          </div>
        </div>
        <Link
          href="#official-sources"
          className="shrink-0 whitespace-nowrap text-sm font-bold tracking-tight underline underline-offset-4 transition-colors duration-500 hover:text-[var(--brand-cta)]"
        >
          View Official Sources →
        </Link>
      </div>
    </aside>
  );
}
