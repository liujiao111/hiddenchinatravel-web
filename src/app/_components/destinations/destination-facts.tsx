import Container from "@/app/_components/container";
import type { DestinationFact } from "@/lib/destinations/types";

type Props = {
  facts: DestinationFact[];
};

export function DestinationFacts({ facts }: Props) {
  return (
    <section
      aria-label="Snapshot"
      className="border-b border-[color-mix(in_srgb,var(--brand-cta)_12%,transparent)] bg-white py-8 md:py-10"
    >
      <Container>
        <ul className="flex gap-3 overflow-x-auto pb-1 [scrollbar-width:none] md:grid md:grid-cols-4 md:gap-4 md:overflow-visible [&::-webkit-scrollbar]:hidden">
          {facts.map((fact) => (
            <li
              key={fact.label}
              className="min-w-[9.5rem] shrink-0 rounded-lg border border-[var(--brand-border-subtle)] bg-[var(--brand-cream)] px-3 py-3 md:min-w-0"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--brand-mango)]">
                {fact.label}
              </p>
              <p className="mt-1 text-sm font-normal leading-snug text-[var(--brand-ink)]">
                {fact.value}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
