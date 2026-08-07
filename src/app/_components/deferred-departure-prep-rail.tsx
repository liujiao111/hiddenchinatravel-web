"use client";

import dynamic from "next/dynamic";

const DeparturePrepRailLazy = dynamic(
  () =>
    import("@/components/action-rail/DeparturePrepRail").then(
      (m) => m.DeparturePrepRail,
    ),
  { ssr: false },
);

/** Below-fold action rail — keep out of the initial JS/HTML critical path. */
export function DeferredDeparturePrepRail() {
  return <DeparturePrepRailLazy />;
}
