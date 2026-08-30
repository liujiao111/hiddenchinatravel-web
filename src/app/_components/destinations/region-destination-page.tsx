import { DestinationWhyIKnow } from "@/app/_components/destinations/destination-why-i-know";
import Container from "@/app/_components/container";
import { DestinationAddonsSection } from "@/app/_components/destinations/destination-addons";
import { DestinationBudgetSection } from "@/app/_components/destinations/destination-budget";
import { DestinationCtaBand } from "@/app/_components/destinations/destination-cta-band";
import { DestinationFacts } from "@/app/_components/destinations/destination-facts";
import { DestinationFit } from "@/app/_components/destinations/destination-fit";
import { DestinationFoods } from "@/app/_components/destinations/destination-foods";
import { DestinationHero } from "@/app/_components/destinations/destination-hero";
import { DestinationHighlights } from "@/app/_components/destinations/destination-highlights";
import { DestinationPlaceButtons } from "@/app/_components/destinations/destination-place-buttons";
import { DestinationPrepareSection } from "@/app/_components/destinations/destination-prepare";
import { DestinationRelated } from "@/app/_components/destinations/destination-related";
import { DestinationRoute } from "@/app/_components/destinations/destination-route";
import { DestinationSeasons } from "@/app/_components/destinations/destination-seasons";
import { DestinationSkeleton } from "@/app/_components/destinations/destination-skeleton";
import { DestinationStickyNav } from "@/app/_components/destinations/destination-sticky-nav";
import { DestinationTexture } from "@/app/_components/destinations/destination-texture";
import { DestinationTrainsSection } from "@/app/_components/destinations/destination-trains";
import { LastUpdated } from "@/app/_components/last-updated";
import { HubFaq } from "@/components/hubs/hub-faq";
import type { RegionDestination } from "@/lib/destinations/types";
import { regionDestinationJsonLd } from "@/lib/destinations/jsonld";
import { SECONDARY_CTA_LABEL } from "@/lib/trust/copy";
import Link from "next/link";

type Props = {
  destination: RegionDestination;
};

export function RegionDestinationPage({ destination }: Props) {
  const graphs = regionDestinationJsonLd(destination);
  const plannerHref =
    destination.plannerHref ?? "/china-itinerary-planner#plan-trip";
  const secondaryHref = destination.secondaryCtaHref ?? "/survival-kit";
  const secondaryLabel =
    destination.secondaryCtaLabel ?? SECONDARY_CTA_LABEL;

  return (
    <main>
      {graphs.map((graph, index) => (
        <script
          key={`${graph["@type"] as string}-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
        />
      ))}
      <DestinationHero destination={destination} />
      <DestinationFacts facts={destination.facts} />
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
      {destination.fit ? <DestinationFit fit={destination.fit} /> : null}
      <DestinationRoute destination={destination} />
      {destination.highlights?.length ? (
        <DestinationHighlights highlights={destination.highlights} />
      ) : null}
      {destination.headings.skeleton ? (
        <DestinationSkeleton
          heading={destination.headings.skeleton}
          days={destination.routeDays}
        />
      ) : null}
      {destination.texture ? (
        <DestinationTexture texture={destination.texture} />
      ) : null}
      <DestinationCtaBand
        title={destination.routeCtaTitle}
        body={destination.routeCtaBody}
        plannerHref={plannerHref}
        plannerLabel={destination.plannerCtaLabel}
        secondaryHref={secondaryHref}
        secondaryLabel={secondaryLabel}
      />
      {destination.budget ? (
        <DestinationBudgetSection budget={destination.budget} />
      ) : null}
      {destination.trains ? (
        <DestinationTrainsSection trains={destination.trains} />
      ) : null}
      {destination.addons ? (
        <DestinationAddonsSection addons={destination.addons} />
      ) : null}
      {destination.whyIKnow ? (
        <DestinationWhyIKnow block={destination.whyIKnow} />
      ) : null}
      {destination.placeLinks?.length ? (
        <DestinationPlaceButtons
          heading={destination.headings.places}
          links={destination.placeLinks}
        />
      ) : null}
      <DestinationSeasons
        seasons={destination.seasons}
        heading={destination.headings.seasons}
        climate={destination.climate}
      />
      {destination.prepare ? (
        <DestinationPrepareSection
          prepare={destination.prepare}
          plannerCtaLabel={destination.plannerCtaLabel}
          plannerHref={plannerHref}
          secondaryCtaLabel={secondaryLabel}
          secondaryCtaHref={secondaryHref}
        />
      ) : null}
      <DestinationFoods
        foods={destination.foods}
        heading={destination.headings.foods}
      />
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
