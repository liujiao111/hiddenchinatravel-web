import Container from "@/app/_components/container";
import { DestinationFacts } from "@/app/_components/destinations/destination-facts";
import { DestinationFoods } from "@/app/_components/destinations/destination-foods";
import { DestinationHero } from "@/app/_components/destinations/destination-hero";
import { DestinationPlaces } from "@/app/_components/destinations/destination-places";
import { DestinationPrepareSection } from "@/app/_components/destinations/destination-prepare";
import { DestinationRelated } from "@/app/_components/destinations/destination-related";
import { DestinationRoute } from "@/app/_components/destinations/destination-route";
import { DestinationSeasons } from "@/app/_components/destinations/destination-seasons";
import { DestinationStickyNav } from "@/app/_components/destinations/destination-sticky-nav";
import { LastUpdated } from "@/app/_components/last-updated";
import { HubFaq } from "@/components/hubs/hub-faq";
import type { RegionDestination } from "@/lib/destinations/types";
import { regionDestinationJsonLd } from "@/lib/destinations/jsonld";
import Link from "next/link";

type Props = {
  destination: RegionDestination;
};

export function RegionDestinationPage({ destination }: Props) {
  const graphs = regionDestinationJsonLd(destination);

  return (
    <main>
      {graphs.map((graph) => (
        <script
          key={graph["@type"] as string}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
        />
      ))}
      <DestinationHero destination={destination} />
      <DestinationStickyNav items={destination.nav} />
      <div className="border-b border-[color-mix(in_srgb,var(--brand-cta)_10%,transparent)] bg-white">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-3 py-4">
            <p className="text-sm font-normal text-[var(--brand-ink-muted)]">
              <Link
                href="/china-destinations"
                className="font-bold text-[var(--brand-ink)] transition-colors duration-300 hover:text-[var(--brand-cta)]"
              >
                Destinations
              </Link>
              <span aria-hidden className="mx-2">
                /
              </span>
              {destination.name}
            </p>
            <LastUpdated date={destination.dateModified} />
          </div>
        </Container>
      </div>
      <DestinationFacts facts={destination.facts} />
      <DestinationPlaces
        cities={destination.cities}
        heading={destination.headings.places}
        extrasHeading={destination.headings.placesExtras}
      />
      <DestinationSeasons
        seasons={destination.seasons}
        heading={destination.headings.seasons}
        climate={destination.climate}
      />
      <DestinationFoods
        foods={destination.foods}
        heading={destination.headings.foods}
      />
      {destination.prepare ? (
        <DestinationPrepareSection
          prepare={destination.prepare}
          plannerCtaLabel={destination.plannerCtaLabel}
          plannerHref={destination.plannerHref}
        />
      ) : null}
      <DestinationRoute destination={destination} />
      <section className="scroll-mt-28 bg-[var(--brand-cream)] py-12 md:py-20 lg:py-28">
        <Container>
          <HubFaq
            faqs={destination.faqs}
            heading={destination.headings.faq}
          />
        </Container>
      </section>
      <DestinationRelated
        links={destination.related}
        heading={destination.headings.related}
      />
    </main>
  );
}
