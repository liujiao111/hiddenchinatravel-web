import Container from "@/app/_components/container";
import { PublishedReviews } from "@/app/_components/trust/published-reviews";
import { SampleRouteCard } from "@/app/_components/trust/sample-route-card";
import { coreService } from "@/lib/services/content";
import { sampleRoutes } from "@/lib/trust/sample-routes";
import Link from "next/link";

function formatUsd(amount: number) {
  return `$${amount}`;
}

export function CustomItineraryLanding() {
  const sample = sampleRoutes[0];

  return (
    <>
      <section className="border-b border-[color-mix(in_srgb,var(--brand-cta)_12%,transparent)] bg-[var(--brand-cta)] py-12 md:py-16">
        <Container>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
            Custom itinerary
          </p>
          <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-white md:text-4xl">
            A local PDF route — not a tour package
          </h1>
          <p className="mt-4 max-w-2xl text-sm font-normal leading-relaxed text-white/85 md:text-base">
            {coreService.subtitle} Early-bird from{" "}
            {formatUsd(coreService.tiers[0].earlyBird)}.
          </p>
          <Link
            href="/china-itinerary-planner#plan-trip"
            className="btn-brand-inverse mt-8 inline-flex min-h-12 px-6 py-3 text-sm md:text-base"
            data-cta="custom_itinerary_hero_cta"
          >
            Plan my China trip
            <span aria-hidden>→</span>
          </Link>
        </Container>
      </section>

      <section className="bg-[var(--brand-cream)] py-12 md:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-[var(--brand-ink)]">
                What you get
              </h2>
              <ul className="space-y-3 text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
                <li>
                  A ready-to-follow PDF for your dates, pace, and cities — delivered 48–72 hours after we confirm scope.
                </li>
                <li>
                  Local texture (old streets, workshops, everyday places) mixed with landmarks only when they fit.
                </li>
                <li>One structured revision. Survival Kit included.</li>
                <li>
                  Service fee only. We do not mark up hotels or tickets if you later ask us to book.
                </li>
              </ul>
              <p className="mt-4 text-sm font-normal text-[var(--brand-ink-muted)]">
                Prefer to sketch the route yourself first? Read{" "}
                <Link
                  href="/china-itinerary-planning"
                  className="font-bold text-[var(--brand-coral)] underline decoration-[color-mix(in_srgb,var(--brand-coral)_35%,transparent)] underline-offset-2"
                >
                  how to plan an independent China itinerary
                </Link>
                .
              </p>
              <p className="mt-6 max-w-2xl text-sm font-normal text-[var(--brand-cta)]">
                {coreService.differentiator}
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-[color-mix(in_srgb,var(--brand-cta)_15%,transparent)] bg-white p-5">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-mango)]">
                  From (USD)
                </p>
                <ul className="space-y-2 text-sm">
                  {coreService.tiers.map((tier) => (
                    <li
                      key={tier.id}
                      className="flex justify-between gap-3 border-b border-[color-mix(in_srgb,var(--brand-cta)_10%,transparent)] py-2 last:border-0"
                    >
                      <span className="font-bold text-[var(--brand-cta)]">
                        {tier.daysLabel}
                      </span>
                      <span className="text-[var(--brand-coral)]">
                        {formatUsd(tier.earlyBird)}
                        <span className="ml-2 text-xs font-normal text-[var(--brand-ink-muted)] line-through">
                          {formatUsd(tier.regular)}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-xs font-normal text-[var(--brand-ink-muted)]">
                  Full table on{" "}
                  <Link href="/services#custom-itinerary" className="underline">
                    Services
                  </Link>
                  . Nothing is charged until we confirm scope.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section
        id="sample-route"
        className="border-t border-[color-mix(in_srgb,var(--brand-cta)_12%,transparent)] bg-[var(--brand-cream)] py-12 md:py-16"
      >
        <Container>
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-[var(--brand-ink)]">
            A sample of how a route can feel
          </h2>
          <p className="mb-8 max-w-2xl text-sm font-normal text-[var(--brand-ink-muted)]">
            Photos and days below are a work sample. They are not a client story.
          </p>
          {sample ? <SampleRouteCard route={sample} /> : null}
        </Container>
      </section>

      <section className="border-t border-[color-mix(in_srgb,var(--brand-cta)_12%,transparent)] bg-[var(--brand-cream)] py-12 md:py-16">
        <Container>
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-[var(--brand-ink)]">
            Traveler notes
          </h2>
          <PublishedReviews showEmptyCtas={false} />
          <p className="mt-4 text-sm font-normal text-[var(--brand-ink-muted)]">
            We only publish permissioned quotes.{" "}
            <Link
              href="/reviews"
              className="font-bold text-[var(--brand-coral)] underline decoration-[color-mix(in_srgb,var(--brand-coral)_35%,transparent)] underline-offset-2"
            >
              How a note gets here
            </Link>
            .
          </p>
          <Link
            href="/china-itinerary-planner#plan-trip"
            className="btn-brand mt-10 inline-flex min-h-12 px-6 py-3 text-sm md:text-base"
            data-cta="custom_itinerary_footer_cta"
          >
            Start with the planner
            <span aria-hidden>→</span>
          </Link>
        </Container>
      </section>
    </>
  );
}
