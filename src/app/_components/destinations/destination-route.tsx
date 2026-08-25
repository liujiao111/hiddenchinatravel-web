import Container from "@/app/_components/container";
import { DestinationLoopMap } from "@/app/_components/destinations/destination-loop-map";
import { DestinationSectionHeading } from "@/app/_components/destinations/destination-section-heading";
import type { RegionDestination } from "@/lib/destinations/types";

type Props = {
  destination: RegionDestination;
};

export function DestinationRoute({ destination }: Props) {
  const map = destination.loopMap;
  if (!map) return null;

  return (
    <section
      id="route"
      className="scroll-mt-28 bg-white py-12 md:py-20 lg:py-28"
    >
      <Container>
        <DestinationSectionHeading
          eyebrow={map.eyebrow}
          title={map.title}
          intro={map.intro}
        />
        <DestinationLoopMap map={map} />
        <ul className="mt-4 flex flex-wrap gap-2 text-xs font-bold text-[var(--brand-ink-muted)]">
          <li className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-cream)] px-3 py-1">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--brand-cta)]" />
            7-day spine
          </li>
          <li className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-cream)] px-3 py-1">
            <span className="h-2.5 w-2.5 rounded-full border-2 border-[var(--brand-cta)] bg-[var(--brand-cream)]" />
            10-day add-on
          </li>
        </ul>
      </Container>
    </section>
  );
}
