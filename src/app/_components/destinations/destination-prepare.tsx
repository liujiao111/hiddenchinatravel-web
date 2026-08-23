import Container from "@/app/_components/container";
import { DestinationSectionHeading } from "@/app/_components/destinations/destination-section-heading";
import type { DestinationPrepare } from "@/lib/destinations/types";
import { PRIMARY_CTA_LABEL, SECONDARY_CTA_LABEL } from "@/lib/trust/copy";
import Link from "next/link";

type Props = {
  prepare: DestinationPrepare;
  plannerCtaLabel?: string;
  plannerHref?: string;
};

export function DestinationPrepareSection({
  prepare,
  plannerCtaLabel,
  plannerHref = "/china-itinerary-planner#plan-trip",
}: Props) {
  return (
    <section
      id="prepare"
      className="scroll-mt-36 bg-[var(--brand-cream)] py-12 md:py-20 lg:py-28"
    >
      <Container>
        <DestinationSectionHeading
          eyebrow={prepare.eyebrow}
          title={prepare.title}
          intro={prepare.intro}
        />

        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          <article className="rounded-lg border border-[var(--brand-border-subtle)] bg-white p-5 md:p-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--brand-ink-muted)]">
              {prepare.tourLabel}
            </p>
            <ul className="mt-4 list-disc space-y-3 pl-5">
              {prepare.tourPoints.map((point) => (
                <li
                  key={point}
                  className="text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)]"
                >
                  {point}
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-lg border border-[color-mix(in_srgb,var(--brand-cta)_28%,transparent)] bg-white p-5 md:p-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--brand-mango)]">
              {prepare.independentLabel}
            </p>
            <ul className="mt-4 list-disc space-y-3 pl-5">
              {prepare.independentPoints.map((point) => (
                <li
                  key={point}
                  className="text-sm font-normal leading-relaxed text-[var(--brand-ink)]"
                >
                  {point}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:mt-12 md:gap-5">
          {prepare.steps.map((step, index) => (
            <li
              key={step.id}
              id={`prepare-${step.id}`}
              className="surface-card h-full scroll-mt-28 p-5"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--brand-mango)]">
                Step {index + 1}
              </p>
              <h3 className="mt-2 font-sans text-base font-bold leading-snug text-[var(--brand-ink)]">
                {step.title}
              </h3>
              <p className="mt-2 flex-1 text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)]">
                {step.body}
              </p>
              <Link
                href={step.href}
                className="mt-4 inline-flex text-sm font-bold text-[var(--brand-cta)] transition-colors duration-300 hover:text-[var(--brand-cta-hover)]"
              >
                {step.linkLabel}
                <span aria-hidden className="ml-1">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-col gap-6 rounded-2xl border border-[color-mix(in_srgb,var(--brand-cta)_16%,transparent)] bg-white px-6 py-8 md:mt-16 md:flex-row md:items-center md:justify-between md:px-10 md:py-10">
          <div className="max-w-xl">
            <h3 className="font-serif text-xl font-bold tracking-tight text-[var(--brand-ink)] md:text-2xl">
              {prepare.ctaTitle}
            </h3>
            <p className="mt-2 text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
              {prepare.ctaBody}
            </p>
          </div>
          <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            <Link
              href={plannerHref}
              className="btn-brand inline-flex min-h-12 items-center justify-center px-8 py-3.5 text-sm"
            >
              {plannerCtaLabel ?? PRIMARY_CTA_LABEL}
            </Link>
            <Link
              href="/survival-kit"
              className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-[color-mix(in_srgb,var(--brand-cta)_30%,transparent)] px-8 py-3.5 text-sm font-bold text-[var(--brand-cta)] transition-all duration-300 hover:bg-[color-mix(in_srgb,var(--brand-cta)_8%,transparent)]"
            >
              {SECONDARY_CTA_LABEL}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
