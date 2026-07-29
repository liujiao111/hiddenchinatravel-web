import Container from "@/app/_components/container";
import Link from "next/link";

export function HomeSurvivalKit() {
  return (
    <section className="border-b border-[color-mix(in_srgb,var(--brand-cta)_12%,transparent)] bg-[var(--brand-soft)] py-12 md:py-20 lg:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
            Survival Kit
          </p>
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-[var(--brand-cta)] md:text-3xl">
            First-trip essentials, ready before you land
          </h2>
          <p className="mb-8 text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
            The survival prep that comes with partner planning — payments, maps,
            data, and booking checklists, so you are not improvising at the
            airport.
          </p>
          <Link href="/survival-kit" className="btn-brand inline-flex text-sm">
            Open Survival Checklist
          </Link>
        </div>
      </Container>
    </section>
  );
}
