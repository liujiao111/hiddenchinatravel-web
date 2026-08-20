import Image from "next/image";
import { TropicalCard } from "@/app/_components/tropical-card";
import type { SampleRoute } from "@/lib/trust/sample-routes";

export function SampleRouteCard({ route }: { route: SampleRoute }) {
  return (
    <TropicalCard
      label={route.label}
      title={route.title}
      titleLines={0}
      bodyLines={0}
      footerMeta={`${route.region} · ${route.days}`}
      media={
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={route.imageSrc}
            alt={route.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 640px"
          />
        </div>
      }
    >
      <p className="mb-4">{route.intro}</p>
      <ol className="space-y-3">
        {route.stops.map((stop) => (
          <li key={stop.day}>
            <p className="text-xs font-bold uppercase tracking-wide text-[var(--brand-coral)]">
              {stop.day}
            </p>
            <p className="font-bold text-[var(--brand-cta)]">{stop.title}</p>
            <p className="text-sm font-normal text-[var(--brand-ink-muted)]">
              {stop.note}
            </p>
          </li>
        ))}
      </ol>
      <p className="mt-4 text-xs font-normal leading-relaxed text-[var(--brand-ink-muted)]">
        {route.disclaimer}
      </p>
    </TropicalCard>
  );
}
