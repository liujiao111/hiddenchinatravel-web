import Container from "@/app/_components/container";
import { DestinationSectionHeading } from "@/app/_components/destinations/destination-section-heading";
import type { DestinationTrains } from "@/lib/destinations/types";

type Props = {
  trains: DestinationTrains;
};

export function DestinationTrainsSection({ trains }: Props) {
  return (
    <section
      id="trains"
      className="scroll-mt-28 bg-[var(--brand-cream)] py-12 md:py-20 lg:py-28"
    >
      <Container>
        <DestinationSectionHeading
          eyebrow={trains.eyebrow}
          title={trains.title}
          intro={trains.intro}
        />
        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          {trains.stations.map((station) => (
            <article
              key={station.id}
              id={station.id}
              className="scroll-mt-28 rounded-2xl border border-[var(--brand-border-subtle)] bg-white p-5 md:p-6"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--brand-mango)]">
                {station.localName}
              </p>
              <h3 className="mt-1 font-serif text-xl font-bold tracking-tight text-[var(--brand-ink)]">
                {station.name}
              </h3>
              <p className="mt-3 text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
                {station.body}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
