import type { CountryPageFaq } from "@/lib/visa-checker/country-pages";

export function CountryFaq({ faqs }: { faqs: CountryPageFaq[] }) {
  return (
    <section className="mb-10 md:mb-12" aria-labelledby="country-faq-heading">
      <h2
        id="country-faq-heading"
        className="mb-6 text-xl font-light tracking-wide text-[var(--brand-ink)] md:text-2xl"
      >
        Frequently asked questions
      </h2>
      <div className="space-y-3">
        {faqs.map((item) => (
          <details
            key={item.id}
            className="surface-card group bg-[var(--brand-surface)] px-5 py-4"
          >
            <summary className="cursor-pointer list-none text-sm font-light tracking-wide text-[var(--brand-ink)] marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-start justify-between gap-3">
                {item.question}
                <span
                  aria-hidden
                  className="shrink-0 text-[var(--brand-cta)] transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </span>
            </summary>
            <p className="mt-3 text-sm font-light leading-relaxed text-[var(--brand-ink-muted)]">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
