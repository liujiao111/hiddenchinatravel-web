"use client";

import dynamic from "next/dynamic";
import { useQuickVisaLookup } from "@/lib/home/use-quick-visa-lookup";
import type { PlannerFormSource } from "@/lib/itinerary-planner/types";

const ItineraryPlannerForm = dynamic(
  () =>
    import("@/app/_components/itinerary-planner/itinerary-planner-form").then(
      (m) => m.ItineraryPlannerForm,
    ),
  {
    loading: () => (
      <div
        className="min-h-[22rem] rounded-2xl border border-[color-mix(in_srgb,var(--brand-cta)_12%,transparent)] bg-white/80"
        aria-hidden
      />
    ),
  },
);

type Props = {
  source: PlannerFormSource;
  initialDestinations?: string[];
  initialYunnanShape?: string;
};

/** Client boundary: form chunk + visa lookup load after first paint. */
export function DeferredPlannerForm({
  source,
  initialDestinations,
  initialYunnanShape,
}: Props) {
  const visaLookup = useQuickVisaLookup();

  if (!visaLookup) {
    return (
      <div
        className="min-h-[22rem] rounded-2xl border border-[color-mix(in_srgb,var(--brand-cta)_12%,transparent)] bg-white/80"
        aria-busy
        aria-label="Loading itinerary planner"
      />
    );
  }

  return (
    <ItineraryPlannerForm
      visaLookup={visaLookup}
      source={source}
      initialDestinations={initialDestinations}
      initialYunnanShape={initialYunnanShape}
    />
  );
}
