"use client";

import type { DestinationLoopMap } from "@/lib/destinations/types";
import "leaflet/dist/leaflet.css";
import { useEffect, useId, useRef } from "react";

type Props = {
  map: DestinationLoopMap;
};

export function DestinationLoopMapCanvas({ map }: Props) {
  const hostId = useId().replace(/:/g, "");
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = hostRef.current;
    if (!el) return;

    let cancelled = false;
    let leafletMap: import("leaflet").Map | undefined;

    async function mount() {
      const L = await import("leaflet");
      if (cancelled || !el) return;

      const loop = map.points.filter((p) => p.onLoop);
      const extras = map.points.filter((p) => !p.onLoop);
      leafletMap = L.map(el, {
        scrollWheelZoom: false,
        attributionControl: true,
      });

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      ).addTo(leafletMap);

      const loopLatLngs = loop.map((p) => [p.lat, p.lng] as [number, number]);
      if (loopLatLngs.length >= 2) {
        L.polyline(loopLatLngs, {
          color: "#c45c3e",
          weight: 3,
          opacity: 0.9,
        }).addTo(leafletMap);
      }

      for (const point of loop) {
        L.circleMarker([point.lat, point.lng], {
          radius: 8,
          color: "#c45c3e",
          weight: 2,
          fillColor: "#c45c3e",
          fillOpacity: 1,
        })
          .bindPopup(
            `<strong>${point.name}</strong>${point.localName ? ` · ${point.localName}` : ""}<br/><span>${point.role}</span>`,
          )
          .addTo(leafletMap);
      }

      for (const point of extras) {
        L.circleMarker([point.lat, point.lng], {
          radius: 7,
          color: "#c45c3e",
          weight: 2,
          fillColor: "#faf6ef",
          fillOpacity: 1,
          dashArray: "2 4",
        })
          .bindPopup(
            `<strong>${point.name}</strong>${point.localName ? ` · ${point.localName}` : ""}<br/><span>${point.role}</span>`,
          )
          .addTo(leafletMap);
      }

      const bounds = L.latLngBounds(
        map.points.map((p) => [p.lat, p.lng] as [number, number]),
      );
      leafletMap.fitBounds(bounds, { padding: [28, 28], maxZoom: 8 });
    }

    void mount();

    return () => {
      cancelled = true;
      leafletMap?.remove();
    };
  }, [map]);

  return (
    <div
      id={`yunnan-loop-map-${hostId}`}
      ref={hostRef}
      className="h-[min(28rem,70svh)] w-full overflow-hidden rounded-2xl border border-[color-mix(in_srgb,var(--brand-cta)_16%,transparent)] bg-[var(--brand-soft)]"
      role="img"
      aria-label={map.title}
    />
  );
}
