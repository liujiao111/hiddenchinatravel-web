import Container from "@/app/_components/container";
import { DeferredPlannerForm } from "@/app/_components/itinerary-planner/deferred-planner-form";
import { ItineraryPlannerForm } from "@/app/_components/itinerary-planner/itinerary-planner-form";
import { PlannerServicePanel } from "@/app/_components/itinerary-planner/planner-service-panel";
import { getQuickVisaLookup } from "@/lib/home/get-quick-visa-lookup";
import { plannerSectionCopy } from "@/lib/itinerary-planner/content";
import type { PlannerFormSource } from "@/lib/itinerary-planner/types";
import cn from "classnames";

type Props = {
  source?: PlannerFormSource;
  /** Extra top padding for standalone tool pages */
  dense?: boolean;
  /**
   * On the homepage, load the interactive form as a separate client chunk
   * so it does not compete with LCP / first paint.
   */
  deferForm?: boolean;
  initialDestinations?: string[];
  initialYunnanShape?: string;
};

export function ItineraryPlannerSection({
  source = "home",
  dense = false,
  deferForm = false,
  initialDestinations,
  initialYunnanShape,
}: Props) {
  const visaLookup = deferForm ? null : getQuickVisaLookup();

  return (
    <section
      id="plan-trip"
      className={cn(
        "scroll-mt-24 bg-[var(--brand-cream)]",
        dense
          ? "py-10 md:py-14"
          : "border-b border-[color-mix(in_srgb,var(--brand-cta)_12%,transparent)] py-12 md:py-20 lg:py-28",
      )}
    >
      <Container>
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
            {plannerSectionCopy.eyebrow}
          </p>
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-[var(--brand-ink)] md:text-3xl lg:text-4xl">
            {plannerSectionCopy.title}
          </h2>
          <p className="text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
            {plannerSectionCopy.subtitle}
          </p>
        </div>

        {/*
          Mobile order: scope cards → form
          Desktop (≥lg): form 60% | sticky info 40%
        */}
        <div className="grid items-start gap-8 lg:grid-cols-5 lg:gap-10">
          <aside className="order-1 lg:order-2 lg:col-span-2">
            <PlannerServicePanel />
          </aside>
          <div className="order-2 lg:order-1 lg:col-span-3">
            {deferForm || !visaLookup ? (
              <DeferredPlannerForm
                source={source}
                initialDestinations={initialDestinations}
                initialYunnanShape={initialYunnanShape}
              />
            ) : (
              <ItineraryPlannerForm
                visaLookup={visaLookup}
                source={source}
                initialDestinations={initialDestinations}
                initialYunnanShape={initialYunnanShape}
              />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
