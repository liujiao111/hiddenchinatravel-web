import Link from "next/link";
import { policyCards } from "@/lib/visa-checker/policy-cards";
import { policyLastUpdated } from "@/lib/visa-checker/faq-items";

export function PolicyExplainer() {
  return (
    <section
      aria-labelledby="policy-heading"
      className="mb-20 md:mb-28"
    >
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2
            id="policy-heading"
            className="mb-3 text-xl font-bold leading-tight tracking-wide text-[var(--brand-ink)] md:text-3xl"
          >
            China visa policies explained
          </h2>
          <p className="max-w-2xl text-base font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-lg">
            Three main pathways for short visits. Which applies to you depends
            on nationality, route, and length of stay.
          </p>
        </div>
        <p className="shrink-0 text-sm font-normal text-[var(--brand-muted)]">
          Last updated: {policyLastUpdated}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
        {policyCards.map((card) => (
          <article
            key={card.id}
            className="surface-card flex flex-col bg-[var(--brand-surface)] p-6 md:p-8"
          >
            <h3 className="mb-3 text-lg font-bold tracking-tight text-[var(--brand-ink)] md:text-xl">
              {card.title}
            </h3>
            <p className="mb-5 text-base font-normal leading-relaxed text-[var(--brand-ink-muted)]">
              {card.definition}
            </p>
            <ul className="mb-6 flex-1 space-y-2">
              {card.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex gap-2 text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)]"
                >
                  <span aria-hidden className="font-normal text-[var(--brand-warm)]">
                    ·
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>
            <Link
              href={card.learnMoreHref}
              className="font-bold tracking-tight underline underline-offset-4 transition-colors duration-500 hover:text-[var(--brand-cta)]"
            >
              Learn more
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
