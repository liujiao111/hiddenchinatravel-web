import Container from "@/app/_components/container";
import { PRIMARY_CTA_LABEL } from "@/lib/trust/copy";
import Link from "next/link";

type Props = {
  title: string;
  body: string;
  plannerHref: string;
  plannerLabel?: string;
  secondaryHref: string;
  secondaryLabel: string;
};

export function DestinationCtaBand({
  title,
  body,
  plannerHref,
  plannerLabel,
  secondaryHref,
  secondaryLabel,
}: Props) {
  return (
    <section
      id="plan"
      className="scroll-mt-28 bg-white py-12 md:py-16"
    >
      <Container>
        <div className="flex flex-col gap-6 rounded-2xl border border-[color-mix(in_srgb,var(--brand-cta)_16%,transparent)] bg-[var(--brand-cream)] px-6 py-8 md:flex-row md:items-center md:justify-between md:px-10 md:py-10">
          <div className="max-w-xl">
            <h2 className="font-serif text-xl font-bold tracking-tight text-[var(--brand-ink)] md:text-2xl">
              {title}
            </h2>
            <p className="mt-2 text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
              {body}
            </p>
          </div>
          <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto">
            <Link
              href={plannerHref}
              className="btn-brand inline-flex min-h-12 items-center justify-center px-8 py-3.5 text-sm"
            >
              {plannerLabel ?? PRIMARY_CTA_LABEL}
            </Link>
            <p className="text-center text-xs font-bold tracking-tight text-[var(--brand-ink-muted)]">
              From $99 · confirm before you pay
            </p>
            <Link
              href={secondaryHref}
              className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-[color-mix(in_srgb,var(--brand-cta)_30%,transparent)] px-8 py-3.5 text-sm font-bold text-[var(--brand-cta)] transition-all duration-300 hover:bg-[color-mix(in_srgb,var(--brand-cta)_8%,transparent)]"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
