import Container from "@/app/_components/container";
import { DestinationPhotoSlot } from "@/app/_components/destinations/destination-photo-slot";
import { DestinationSectionHeading } from "@/app/_components/destinations/destination-section-heading";
import type { RegionDestination } from "@/lib/destinations/types";
import { PRIMARY_CTA_LABEL } from "@/lib/trust/copy";
import Link from "next/link";

type Props = {
  destination: RegionDestination;
};

export function DestinationRoute({ destination }: Props) {
  return (
    <section
      id="route"
      className="scroll-mt-28 bg-white py-12 md:py-20 lg:py-28"
    >
      <Container>
        <DestinationSectionHeading
          eyebrow={destination.headings.route.eyebrow}
          title={destination.headings.route.title}
          intro={destination.routeIntro}
        />
        <ul className="flex gap-4 overflow-x-auto pb-4 [scrollbar-width:none] snap-x snap-mandatory [&::-webkit-scrollbar]:hidden">
          {destination.routeDays.map((day) => (
            <li
              key={day.day}
              className="w-[min(72vw,16rem)] shrink-0 snap-start"
            >
              <article className="surface-card h-full">
                <div className="group">
                  <DestinationPhotoSlot
                    photo={day.photo}
                    rounded={false}
                    sizes="288px"
                  />
                </div>
                <div className="p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--brand-mango)]">
                    Day {day.day}
                  </p>
                  <h3 className="mt-1 font-sans text-base font-bold leading-snug text-[var(--brand-ink)]">
                    {day.title}
                  </h3>
                  <p className="mt-2 text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)]">
                    {day.body}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col gap-6 rounded-2xl border border-[color-mix(in_srgb,var(--brand-cta)_16%,transparent)] bg-[var(--brand-cream)] px-6 py-8 md:mt-16 md:flex-row md:items-center md:justify-between md:px-10 md:py-10">
          <div className="max-w-xl">
            <h3 className="font-serif text-xl font-bold tracking-tight text-[var(--brand-ink)] md:text-2xl">
              {destination.routeCtaTitle}
            </h3>
            <p className="mt-2 text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
              {destination.routeCtaBody}
            </p>
          </div>
          <Link
            href={
              destination.plannerHref ?? "/china-itinerary-planner#plan-trip"
            }
            className="btn-brand shrink-0 px-8 py-3.5 text-sm"
          >
            {destination.plannerCtaLabel ?? PRIMARY_CTA_LABEL}
          </Link>
        </div>
      </Container>
    </section>
  );
}
