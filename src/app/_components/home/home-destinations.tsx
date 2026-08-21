import Container from "@/app/_components/container";
import { TropicalCard } from "@/app/_components/tropical-card";
import { destinationCities } from "@/lib/home/content";
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
          <div className="mb-10 max-w-2xl md:mb-12">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
              Destinations
            </p>
            <h2 className="mb-3 text-2xl font-bold tracking-tight text-[var(--brand-cta)] md:text-3xl">
              Where to begin in China
            </h2>
            <p className="text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
              A short list of cities that work well as first bases — then shape
              the route in the itinerary planner.
            </p>
          </div>
        ) : null}
        {isHub ? (
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
            {destinationCities.map((city) => {
              const href = `/china-itinerary-planner#plan-trip`;
              return (
                <li key={city.id} id={city.id}>
                  <TropicalCard
                    href={href}
                    className="scroll-mt-28"
                    label={city.label}
                    title={city.name}
                    footerMeta={city.guidesHint}
                    footerCta="Sketch a route"
                  >
                    <p>{city.pitch}</p>
                  </TropicalCard>
                </li>
              );
            })}
          </ul>
        ) : (
          <ul className="max-w-3xl">
            {destinationCities.map((city) => (
              <li
                key={city.id}
                className="grid grid-cols-1 gap-2 border-t border-[color-mix(in_srgb,var(--brand-cta)_12%,transparent)] py-5 first:border-t-0 first:pt-0 last:pb-0 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6 md:py-6"
              >
                <div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-muted)]">
                    {city.label}
                  </p>
                  <h3 className="text-lg font-bold tracking-tight text-[var(--brand-cta)]">
                    {city.name}
                  </h3>
                  <p className="mt-1 text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)]">
                    {city.pitch}
                  </p>
                </div>
                <Link
                  href={`/china-destinations#${city.id}`}
                  className="text-sm font-bold text-[var(--brand-coral)] underline decoration-[color-mix(in_srgb,var(--brand-coral)_35%,transparent)] underline-offset-2 transition-colors duration-300 hover:text-[var(--brand-coral-hover)]"
                >
                  Explore →
                </Link>
              </li>
            ))}
          </ul>
        )}
        {!isHub ? (
          <p className="mt-10 max-w-3xl">
            <Link
              href="/china-destinations"
              className="text-sm font-bold text-[var(--brand-cta)] underline decoration-[color-mix(in_srgb,var(--brand-cta)_35%,transparent)] underline-offset-2"
            >
              Explore destinations →
            </Link>
          </p>
        ) : null}
      </Container>
    </section>
  );
}
