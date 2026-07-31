import Link from "next/link";

export function ConverterDisclaimer() {
  return (
    <aside
      className="surface-card mb-12 bg-[var(--brand-soft)] px-5 py-4 sm:px-6 sm:py-5 md:mb-16"
      aria-label="Disclaimer"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)] text-lg font-normal text-[var(--brand-ink)]"
          aria-hidden
        >
          i
        </span>
        <div>
          <p className="mb-1 text-sm font-bold tracking-tight text-[var(--brand-ink)]">
            Reference rates only — not a bank quote or financial advice
          </p>
          <p className="text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)]">
            This China currency converter is for travel budgeting. Mid-market
            rates differ from ATM, airport, hotel, and card FX rates. Actual
            amounts depend on your bank, payment app, and exchange counter. We
            do not execute currency trades. See{" "}
            <Link
              href="/about"
              className="underline underline-offset-4 transition-colors hover:text-[var(--brand-cta)]"
            >
              About us
            </Link>{" "}
            for who publishes this guide.
          </p>
        </div>
      </div>
    </aside>
  );
}
