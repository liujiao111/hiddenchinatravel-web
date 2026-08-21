import { servicesTransition } from "@/lib/services/secondary-services";

export function ServicesTransitionHeading() {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
        {servicesTransition.eyebrow}
      </p>
      <h2 className="mb-3 text-2xl font-bold tracking-tight text-[var(--brand-ink)] md:text-3xl">
        {servicesTransition.title}
      </h2>
      <p className="text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
        {servicesTransition.subtitle}
      </p>
    </div>
  );
}
