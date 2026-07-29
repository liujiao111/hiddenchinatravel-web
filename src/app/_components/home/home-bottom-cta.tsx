import Container from "@/app/_components/container";
import Link from "next/link";

export function HomeBottomCta() {
  return (
    <section className="bg-[var(--brand-cream)] py-12 md:py-20 lg:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-[var(--brand-cta)] md:text-3xl">
            Ready for a local partner on your China trip?
          </h2>
          <p className="mb-8 text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
            Open the itinerary planner to start — or prepare essentials first
            with the survival kit.
          </p>
          <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              href="/china-itinerary-planner"
              className="btn-brand text-sm"
            >
              Plan my China trip
            </Link>
            <Link href="/survival-kit" className="btn-brand-outline text-sm">
              Open Survival Checklist
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
