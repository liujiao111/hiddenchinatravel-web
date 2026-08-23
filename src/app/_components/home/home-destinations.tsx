import Container from "@/app/_components/container";
import { TropicalCard } from "@/app/_components/tropical-card";
import { destinationCities } from "@/lib/home/content";
import Image from "next/image";
import Link from "next/link";

type Props = {
  variant?: "home" | "hub";
};

export function HomeDestinations({ variant = "home" }: Props) {
  const isHub = variant === "hub";

  return (
    <section
      id={isHub ? undefined : "destinations"}
      className={
        isHub
          ? "scroll-mt-24 bg-white py-4 md:py-6"
          : "scroll-mt-24 border-b border-[color-mix(in_srgb,var(--brand-cta)_12%,transparent)] bg-white py-12 md:py-20 lg:py-28"
      }
    >
      <Container>
        {!isHub ? (
          <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
                Destinations
              </p>
              <h2 className="mb-3 text-2xl font-bold tracking-tight text-[var(--brand-ink)] md:text-3xl">
                Where to begin in China
              </h2>
              <p className="text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
                First-city bases plus one regional loop — then shape the route
                in the itinerary planner.
              </p>
            </div>
            <Link
              href="/china-destinations"
              className="btn-brand-outline shrink-0 text-sm"
            >
              Explore destinations
            </Link>
          </div>
        ) : null}
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {destinationCities.map((city) => {
            const href =
              city.guideHref ??
              (isHub
                ? `/china-itinerary-planner#plan-trip`
                : `/china-destinations#${city.id}`);

            return (
              <li key={city.id} id={isHub ? city.id : undefined}>
                <TropicalCard
                  variant="destination"
                  href={href}
                  className="scroll-mt-28"
                  title={city.name}
                  media={
                    city.image ? (
                      <Image
                        src={city.image}
                        alt={city.imageAlt ?? city.name}
                        fill
                        sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 320px"
                        className="object-cover"
                      />
                    ) : (
                      <div className="surface-card-poster" />
                    )
                  }
                >
                  <p>{city.pitch}</p>
                </TropicalCard>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
