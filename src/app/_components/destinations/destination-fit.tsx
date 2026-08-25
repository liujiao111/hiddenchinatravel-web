import Container from "@/app/_components/container";
import { DestinationSectionHeading } from "@/app/_components/destinations/destination-section-heading";
import type { DestinationFit } from "@/lib/destinations/types";

type Props = {
  fit: DestinationFit;
};

export function DestinationFit({ fit }: Props) {
  return (
    <section
      id="fit"
      className="scroll-mt-28 bg-[var(--brand-cream)] py-12 md:py-20 lg:py-28"
    >
      <Container>
        <DestinationSectionHeading
          eyebrow={fit.eyebrow}
          title={fit.title}
          intro={fit.intro}
        />
        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          <article className="rounded-2xl border border-[color-mix(in_srgb,var(--brand-cta)_28%,transparent)] bg-white p-5 md:p-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--brand-mango)]">
              {fit.yesLabel}
            </p>
            <ul className="mt-4 list-disc space-y-3 pl-5">
              {fit.yes.map((item) => (
                <li
                  key={item}
                  className="text-sm font-normal leading-relaxed text-[var(--brand-ink)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-2xl border border-[var(--brand-border-subtle)] bg-white p-5 md:p-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--brand-ink-muted)]">
              {fit.noLabel}
            </p>
            <ul className="mt-4 list-disc space-y-3 pl-5">
              {fit.no.map((item) => (
                <li
                  key={item}
                  className="text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </Container>
    </section>
  );
}
