"use client";

import type { DestinationLoopMap } from "@/lib/destinations/types";
import dynamic from "next/dynamic";

const DestinationLoopMapCanvas = dynamic(
  () =>
    import("@/app/_components/destinations/destination-loop-map-canvas").then(
      (m) => m.DestinationLoopMapCanvas,
    ),
  { ssr: false },
);

type Props = {
  map: DestinationLoopMap;
};

/** Leaflet must load with ssr:false inside a Client Component. */
export function DestinationLoopMap({ map }: Props) {
  return <DestinationLoopMapCanvas map={map} />;
}
