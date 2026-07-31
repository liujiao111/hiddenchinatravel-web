import Link from "next/link";
import { kitPracticalSection } from "@/lib/survival-kit/content";

export function KitPracticalSection() {
  const section = kitPracticalSection;

  return (
    <section
      id={section.id}
      aria-labelledby={`${section.id}-heading`}
      className="scroll-mt-28 border-b border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)] pb-16 pt-10 md:pb-20 md:pt-12"
    >
      <p className="mb-3 text-[11px] font-normal uppercase tracking-[0.18em] text-[var(--brand-warm)]">
        {section.eyebrow}
      </p>
      <h2
        id={`${section.id}-heading`}
        className="mb-3 max-w-2xl text-xl font-bold tracking-wide text-[var(--brand-ink)] md:text-3xl"
      >
        {section.title}
      </h2>
      <p className="mb-10 max-w-2xl text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
        {section.intro}
      </p>

      <div className="mb-12">
        <h3 className="mb-2 text-base font-bold tracking-tight text-[var(--brand-ink)] md:text-lg">
          {section.emergencyTitle}
        </h3>
        <p className="mb-5 max-w-2xl text-sm font-normal leading-relaxed text-[var(--brand-muted)]">
          {section.emergencyNote}
        </p>

        <div className="overflow-x-auto rounded-2xl border border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)] bg-[var(--brand-surface)]">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="sr-only">
              Mainland China emergency phone numbers
            </caption>
            <thead>
              <tr className="border-b border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)] bg-[var(--brand-soft)]">
                <th
                  scope="col"
                  className="px-4 py-3 text-[11px] font-normal uppercase tracking-[0.14em] text-[var(--brand-muted)]"
                >
                  Service
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-[11px] font-normal uppercase tracking-[0.14em] text-[var(--brand-muted)]"
                >
                  Number
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-[11px] font-normal uppercase tracking-[0.14em] text-[var(--brand-muted)]"
                >
                  Chinese
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-[11px] font-normal uppercase tracking-[0.14em] text-[var(--brand-muted)]"
                >
                  When to call
                </th>
              </tr>
            </thead>
            <tbody>
              {section.emergencies.map((row) => (
                <tr
                  key={row.number}
                  className="border-b border-[color-mix(in_srgb,var(--brand-cream-border)_30%,transparent)] last:border-b-0"
                >
                  <td className="px-4 py-3.5 font-bold tracking-tight text-[var(--brand-ink)]">
                    {row.service}
                  </td>
                  <td className="px-4 py-3.5 font-normal tabular-nums tracking-wide text-[var(--brand-cta)]">
                    <a
                      href={`tel:${row.number}`}
                      className="underline decoration-[color-mix(in_srgb,var(--brand-cta)_30%,transparent)] underline-offset-4 transition-colors duration-300 hover:text-[var(--brand-cta-hover)]"
                    >
                      {row.number}
                    </a>
                  </td>
                  <td className="px-4 py-3.5 font-bold tracking-tight text-[var(--brand-ink-muted)]">
                    {row.chinese}
                  </td>
                  <td className="px-4 py-3.5 font-normal leading-relaxed text-[var(--brand-ink-muted)]">
                    {row.when}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h3 className="mb-5 text-base font-bold tracking-tight text-[var(--brand-ink)] md:text-lg">
          {section.factsTitle}
        </h3>
        <div className="overflow-hidden rounded-2xl border border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)] bg-[var(--brand-surface)]">
          <dl>
            {section.facts.map((fact, index) => (
              <div
                key={fact.topic}
                className={
                  index > 0
                    ? "border-t border-[color-mix(in_srgb,var(--brand-cream-border)_35%,transparent)]"
                    : undefined
                }
              >
                <div className="grid gap-2 px-4 py-5 md:grid-cols-[11rem_1fr] md:gap-8 md:px-5 md:py-6">
                  <dt className="text-sm font-bold tracking-tight text-[var(--brand-ink)]">
                    {fact.topic}
                  </dt>
                  <dd className="text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)]">
                    <p>{fact.answer}</p>
                    {fact.linkHref && fact.linkLabel ? (
                      <p className="mt-2">
                        {fact.linkHref.startsWith("http") ? (
                          <a
                            href={fact.linkHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--brand-cta)] underline decoration-[color-mix(in_srgb,var(--brand-cream-border)_50%,transparent)] underline-offset-4 transition-colors duration-300 hover:text-[var(--brand-cta-hover)]"
                          >
                            {fact.linkLabel} →
                          </a>
                        ) : (
                          <Link
                            href={fact.linkHref}
                            className="text-[var(--brand-cta)] underline decoration-[color-mix(in_srgb,var(--brand-cream-border)_50%,transparent)] underline-offset-4 transition-colors duration-300 hover:text-[var(--brand-cta-hover)]"
                          >
                            {fact.linkLabel} →
                          </Link>
                        )}
                      </p>
                    ) : null}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
