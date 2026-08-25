import Container from "@/app/_components/container";
import { DestinationSectionHeading } from "@/app/_components/destinations/destination-section-heading";
import type { DestinationBudget } from "@/lib/destinations/types";

type Props = {
  budget: DestinationBudget;
};

export function DestinationBudgetSection({ budget }: Props) {
  return (
    <section
      id="budget"
      className="scroll-mt-28 bg-white py-12 md:py-20 lg:py-28"
    >
      <Container>
        <DestinationSectionHeading
          eyebrow={budget.eyebrow}
          title={budget.title}
          intro={budget.intro}
        />
        <ul className="grid gap-3 md:grid-cols-2">
          {budget.lines.map((line) => (
            <li
              key={line.label}
              className="rounded-2xl border border-[var(--brand-border-subtle)] bg-[var(--brand-cream)] px-5 py-4"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--brand-mango)]">
                {line.label}
              </p>
              <p className="mt-1 font-serif text-xl font-bold text-[var(--brand-ink)]">
                {line.value}
              </p>
              {line.note ? (
                <p className="mt-2 text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)]">
                  {line.note}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-2xl text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
          {budget.planningNote}
        </p>
      </Container>
    </section>
  );
}
