import Container from "@/app/_components/container";
import { DestinationPhotoSlot } from "@/app/_components/destinations/destination-photo-slot";
import { DestinationSectionHeading } from "@/app/_components/destinations/destination-section-heading";
import type { DestinationCityStop, DestinationSectionCopy } from "@/lib/destinations/types";
import Link from "next/link";

type Props = {
  cities: DestinationCityStop[];
  heading: DestinationSectionCopy;
};

export function DestinationPlaces({ cities, heading }: Props) {
  const featured = cities[0];
  const stacked = cities.slice(1, 3);
  const gateway = cities[3];

  if (!featured || stacked.length < 2 || !gateway) return null;

  return (
    <section
      id="places"
      className="scroll-mt-28 bg-white py-12 md:py-20 lg:py-28"
    >
      <Container>
        <DestinationSectionHeading
          eyebrow={heading.eyebrow}
          title={heading.title}
          intro={heading.intro}
        />

        <div className="grid gap-3 md:grid-cols-3 md:grid-rows-2">
          <Link
            href={`#${featured.id}`}
            className="group block h-full min-h-[16rem] md:col-span-2 md:row-span-2"
          >
            <DestinationPhotoSlot
              photo={{ ...featured.photo, aspect: "16/9" }}
              fillParent
              className="min-h-[16rem] md:min-h-full"
              overlayTitle={featured.name}
              overlayMeta={featured.role}
              showCopy={false}
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </Link>
          {stacked.map((city) => (
            <Link key={city.id} href={`#${city.id}`} className="group">
              <DestinationPhotoSlot
                photo={city.photo}
                overlayTitle={city.name}
                overlayMeta={city.role}
                showCopy={false}
                sizes="(max-width: 768px) 100vw, 28vw"
              />
            </Link>
          ))}
        </div>

        <Link href={`#${gateway.id}`} className="group mt-3 block">
          <DestinationPhotoSlot
            photo={gateway.photo}
            overlayTitle={gateway.name}
            overlayMeta={`${gateway.role} · ${gateway.pitch}`}
            showCopy={false}
            sizes="(max-width: 768px) 100vw, 1152px"
          />
        </Link>

        <ul className="mt-12 space-y-10 md:mt-16 md:space-y-14">
          {cities.map((city) => (
            <li
              key={city.id}
              id={city.id}
              className="scroll-mt-36 border-t border-[color-mix(in_srgb,var(--brand-cta)_14%,transparent)] pt-8 md:scroll-mt-40"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--brand-mango)]">
                {city.role}
              </p>
              <h3 className="mt-1 font-serif text-2xl font-bold tracking-tight text-[var(--brand-ink)] md:text-3xl">
                {city.name}
              </h3>
              <p className="mt-2 max-w-2xl text-base font-normal leading-relaxed text-[var(--brand-ink)]">
                {city.pitch}
              </p>
              <p className="mt-2 text-sm font-normal text-[var(--brand-ink-muted)]">
                {city.seasonHint}
              </p>
              <p className="mt-4 max-w-2xl text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
                {city.body}
              </p>
              <Link
                href={city.plannerHref}
                className="btn-brand mt-5 inline-flex text-sm"
              >
                Plan this stop
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
