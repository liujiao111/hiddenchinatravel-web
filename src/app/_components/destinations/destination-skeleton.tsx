import Container from "@/app/_components/container";
import { DestinationSectionHeading } from "@/app/_components/destinations/destination-section-heading";
import type {
  DestinationRouteDay,
  DestinationSectionCopy,
} from "@/lib/destinations/types";

type Props = {
  heading: DestinationSectionCopy;
  days: DestinationRouteDay[];
};

/** Thin 7-day skeleton — titles and one line each. Do not pad into a tour script. */
export function DestinationSkeleton({ heading, days }: Props) {
  return (
    <section
      id="days"
      className="scroll-mt-28 bg-white py-12 md:py-20 lg:py-28"
    >
      <Container>
        <DestinationSectionHeading
          eyebrow={heading.eyebrow}
          title={heading.title}
          intro={heading.intro}
        />
        <ol className="divide-y divide-[color-mix(in_srgb,var(--brand-cta)_12%,transparent)] border-y border-[color-mix(in_srgb,var(--brand-cta)_12%,transparent)]">
          {days.map((day) => (
            <li
              key={day.day}
              className="grid gap-2 py-4 sm:grid-cols-[4.5rem_minmax(0,14rem)_1fr] sm:items-baseline sm:gap-6"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--brand-mango)]">
                Day {day.day}
              </p>
              <h3 className="font-sans text-base font-bold text-[var(--brand-ink)]">
                {day.title}
              </h3>
              <p className="text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)]">
                {day.body}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
