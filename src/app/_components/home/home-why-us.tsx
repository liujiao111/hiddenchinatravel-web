import Container from "@/app/_components/container";

const travelReasons = [
  {
    title: "Private Journeys",
    body: "Travel with your own party, at a pace that fits you — not a large coach group or a fixed sightseeing schedule.",
  },
  {
    title: "No Shopping Stops",
    body: "Our journeys are designed around places, people and experiences — never mandatory shopping stops or commission-led detours.",
  },
  {
    title: "Licensed Local Partners",
    body: "Trips are operated with licensed local travel partners who provide the guides, drivers and on-the-ground services included in your proposal.",
  },
  {
    title: "First-Time China Friendly",
    body: "We design journeys with international visitors in mind, including the practical details that can make a first trip to China feel easier.",
  },
  {
    title: "Local Support",
    body: "You have local support before and during your journey, so questions and unexpected changes do not have to become travel-day stress.",
  },
] as const;

export function HomeWhyUs() {
  return (
    <section
      id="why-us"
      aria-labelledby="why-travel-with-us-heading"
      className="scroll-mt-24 border-b border-[color-mix(in_srgb,var(--brand-cta)_12%,transparent)] bg-[var(--brand-cream)] py-14 md:py-18 lg:py-20"
    >
      <Container>
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
            Travel with confidence
          </p>
          <h2
            id="why-travel-with-us-heading"
            className="font-serif text-3xl font-bold tracking-tight text-[var(--brand-ink)] md:text-4xl"
          >
            Why Travel With Us
          </h2>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          {travelReasons.map((reason) => (
            <li
              key={reason.title}
              className="rounded-3xl border border-[var(--brand-cta)]/10 bg-white p-6 shadow-[0_4px_20px_rgba(80,40,24,0.05)]"
            >
              <div
                aria-hidden
                className="mb-5 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--brand-soft)] text-sm font-bold text-[var(--brand-coral)]"
              >
                ✓
              </div>
              <h3 className="text-base font-bold leading-snug text-[var(--brand-ink)]">
                {reason.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--brand-ink-muted)]">
                {reason.body}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
