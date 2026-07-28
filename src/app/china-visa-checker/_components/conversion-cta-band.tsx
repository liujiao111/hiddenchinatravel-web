import Link from "next/link";

export function ConversionCtaBand() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="surface-card mb-32 bg-[var(--brand-soft)] p-8 md:p-12"
    >
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="lg:max-w-xl">
          <h2
            id="cta-heading"
            className="mb-4 text-xl font-light leading-tight tracking-wide text-[var(--brand-ink)] md:text-3xl"
          >
            Ready for the rest of your trip?
          </h2>
          <p className="text-base font-light leading-relaxed text-[var(--brand-ink-muted)] md:text-lg">
            Browse step-by-step survival guides and download checklists for your
            first days in China.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Link
            href="/survival-guides"
            className="btn-brand justify-center px-8 py-3.5 text-[15px]"
          >
            Survival Guides
            <span aria-hidden>→</span>
          </Link>
          <Link
            href="/survival-kit"
            className="btn-brand-outline justify-center px-8 py-3.5 text-[15px]"
          >
            Survival Kit
          </Link>
        </div>
      </div>
    </section>
  );
}
