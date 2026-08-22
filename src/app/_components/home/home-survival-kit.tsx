import Container from "@/app/_components/container";
import Link from "next/link";

export function HomeSurvivalKit() {
  return (
    <section className="border-b border-[color-mix(in_srgb,var(--brand-cta)_12%,transparent)] bg-[var(--brand-soft)] py-12 md:py-20 lg:py-28">
      <Container>
        <div className="flex max-w-3xl flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-12">
          <div className="max-w-xl">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
              Survival Kit
            </p>
            <h2 className="mb-3 text-2xl font-bold tracking-tight text-[var(--brand-cta)] md:text-3xl">
              First-trip essentials, ready before you land
            </h2>
            <p className="text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
              Payments, maps, data, and booking checklists — the prep that
              comes with partner planning, so you are not improvising at the
              airport.
            </p>
          </div>
          <Link
            href="/survival-kit"
            className="shrink-0 text-sm font-bold text-[var(--brand-coral)] underline decoration-[color-mix(in_srgb,var(--brand-coral)_40%,transparent)] underline-offset-[5px] transition-colors duration-300 hover:text-[var(--brand-coral-hover)]"
          >
            Get Free Survival Kit →
          </Link>
        </div>
      </Container>
    </section>
  );
}
