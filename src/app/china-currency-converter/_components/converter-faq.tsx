import Link from "next/link";
import { faqItems } from "@/lib/currency-converter/faq-items";

export function ConverterFaq() {
  return (
    <section className="mb-12 md:mb-16" aria-labelledby="converter-faq">
      <h2
        id="converter-faq"
        className="mb-6 text-xl font-light tracking-wide text-[var(--brand-ink)] md:text-2xl"
      >
        Currency & cash FAQ for China travel
      </h2>
      <div className="space-y-4">
        {faqItems.map((item) => (
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
      <p className="mt-4 text-sm font-light text-[var(--brand-muted)]">
        Still setting up payments? Start with the{" "}
        <Link
          href="/payments-in-china"
          className="underline underline-offset-4 hover:text-[var(--brand-cta)]"
        >
          Payments in China hub
        </Link>
        .
      </p>
    </section>
  );
}
