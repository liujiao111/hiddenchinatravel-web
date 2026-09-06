import Link from "next/link";
import { KitSectionRail } from "./kit-section-rail";
import { kitPracticalSection } from "@/lib/survival-kit/content";

export function KitPracticalSection() {
  const section = kitPracticalSection;

  return (
    <section
      id={section.id}
      aria-labelledby={`${section.id}-heading`}
      className="scroll-mt-24 border-b border-[var(--brand-border-subtle)] py-12 md:grid md:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] md:gap-12 md:py-16 lg:gap-16"
    >
      <KitSectionRail
        step={section.step}
        eyebrow={section.eyebrow}
        title={section.title}
        intro={section.intro}
        headingId={`${section.id}-heading`}
      />

      <div>
        <div className="mb-10">
          <h3 className="mb-2 text-base font-bold tracking-tight text-[var(--brand-ink)] md:text-lg">
            {section.emergencyTitle}
          </h3>
          <p className="mb-5 text-sm font-normal leading-relaxed text-[var(--brand-muted)]">
            {section.emergencyNote}
          </p>

          <div className="overflow-x-auto rounded-lg border border-[var(--brand-border-subtle)] bg-[var(--brand-surface)]">
            <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
              <caption className="sr-only">
                Mainland China emergency phone numbers
              </caption>
              <thead>
                <tr className="border-b border-[var(--brand-border-subtle)] bg-[var(--brand-soft)]">
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
                    className="border-b border-[var(--brand-border-subtle)] last:border-b-0"
                  >
                    <td className="whitespace-nowrap px-4 py-3.5 font-bold tracking-tight text-[var(--brand-ink)]">
                      {row.service}
                    </td>
                    <td className="px-4 py-3.5 font-normal tabular-nums tracking-wide text-[var(--brand-ink)]">
                      <a
                        href={`tel:${row.number}`}
                        className="underline decoration-[color-mix(in_srgb,var(--brand-cta)_30%,transparent)] underline-offset-4 transition-colors duration-300 hover:text-[var(--brand-cta-hover)]"
                      >
                        {row.number}
                      </a>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3.5 font-bold tracking-tight text-[var(--brand-ink-muted)]">
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
          <div className="overflow-hidden rounded-lg border border-[var(--brand-border-subtle)] bg-[var(--brand-surface)]">
            <dl>
              {section.facts.map((fact, index) => (
                <div
                  key={fact.topic}
                  className={
                    index > 0
                      ? "border-t border-[var(--brand-border-subtle)]"
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
                              className="text-[var(--brand-cta)] underline decoration-[color-mix(in_srgb,var(--brand-cta)_35%,transparent)] underline-offset-4 transition-colors duration-300 hover:text-[var(--brand-cta-hover)]"
                            >
                              {fact.linkLabel} →
                            </a>
                          ) : (
                            <Link
                              href={fact.linkHref}
                              className="text-[var(--brand-cta)] underline decoration-[color-mix(in_srgb,var(--brand-cta)_35%,transparent)] underline-offset-4 transition-colors duration-300 hover:text-[var(--brand-cta-hover)]"
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
      </div>
    </section>
  );
}
