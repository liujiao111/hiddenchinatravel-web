import Container from "@/app/_components/container";
import { DestinationPhotoSlot } from "@/app/_components/destinations/destination-photo-slot";
import { DestinationSectionHeading } from "@/app/_components/destinations/destination-section-heading";
import type {
  DestinationClimateNote,
  DestinationSeason,
  DestinationSectionCopy,
} from "@/lib/destinations/types";
import Link from "next/link";

type Props = {
  seasons: DestinationSeason[];
  heading: DestinationSectionCopy;
  climate?: DestinationClimateNote;
};

export function DestinationSeasons({ seasons, heading, climate }: Props) {
  return (
    <section
      id="season"
      className="scroll-mt-28 bg-[var(--brand-cream)] py-12 md:py-20 lg:py-28"
    >
      <Container>
        <DestinationSectionHeading
          eyebrow={heading.eyebrow}
          title={heading.title}
          intro={heading.intro}
        />
        {climate ? <ClimateNote climate={climate} /> : null}
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-5">
          {seasons.map((season) => (
            <li key={season.id} id={season.id} className="scroll-mt-28">
              <a href={`#${season.id}-note`} className="group block">
                <DestinationPhotoSlot
                  photo={season.photo}
                  overlayTitle={season.name}
                  overlayMeta={season.months}
                  showCopy={false}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 22vw"
                />
              </a>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-mango)]">
                {season.climate}
              </p>
              <p
                id={`${season.id}-note`}
                className="mt-2 scroll-mt-28 text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)]"
              >
                {season.body}
              </p>
              <p className="mt-3 flex flex-wrap gap-2">
                {season.cityAnchors.map((city) => (
                  <Link
                    key={city.id}
                    href={`#${city.id}`}
                    className="rounded-full border border-[color-mix(in_srgb,var(--brand-cta)_22%,transparent)] px-3 py-1 text-xs font-bold text-[var(--brand-cta)] transition-colors duration-300 hover:bg-[var(--brand-cta)] hover:text-white"
                  >
                    {city.label}
                  </Link>
                ))}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function ClimateNote({ climate }: { climate: DestinationClimateNote }) {
  return (
    <div className="mb-10 rounded-2xl border border-[color-mix(in_srgb,var(--brand-cta)_14%,transparent)] bg-white p-5 md:mb-12 md:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
        {climate.label}
      </p>
      <h3 className="mt-2 font-serif text-xl font-bold tracking-tight text-[var(--brand-ink)] md:text-2xl">
        {climate.title}
      </h3>
      <p className="mt-3 max-w-3xl text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
        {climate.body}
      </p>
      <ul className="mt-6 grid gap-4 md:grid-cols-3 md:gap-5">
        {climate.points.map((point) => (
          <li
            key={point.label}
            className="rounded-xl bg-[var(--brand-cream)] px-4 py-4"
          >
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-mango)]">
              {point.label}
            </p>
            <p className="mt-2 text-sm font-normal leading-relaxed text-[var(--brand-ink)]">
              {point.body}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
