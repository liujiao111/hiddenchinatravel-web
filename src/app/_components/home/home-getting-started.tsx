import Container from "@/app/_components/container";
import {
  homePrepSection,
  homePrepSteps,
  type HomePrepStep,
} from "@/lib/home/prep-content";
import dynamic from "next/dynamic";
import Link from "next/link";

const HomePrepVisaMini = dynamic(
  () =>
    import("@/app/_components/home/home-prep-visa-mini").then(
      (m) => m.HomePrepVisaMini,
    ),
  {
    loading: () => (
      <div className="h-12 rounded-full bg-[var(--brand-cream)]" aria-hidden />
    ),
  },
);

function stepLink(step: HomePrepStep): { label: string; href: string } {
  if (step.id === "network") {
    return { label: "Internet, eSIM & VPN", href: "/internet-in-china" };
  }
  if (step.kind === "visa") {
    return { label: "Open visa checker", href: "/china-visa-checker" };
  }
  if (step.kind === "buy-menus") {
    return step.menus[0].guide;
  }
  return step.cta;
}

/** Packing-list prep — not a six-card product dashboard. */
export function HomeGettingStarted() {
  return (
    <section
      id="getting-started"
      className="scroll-mt-24 border-b border-[color-mix(in_srgb,var(--brand-cta)_12%,transparent)] bg-white py-12 md:py-20 lg:py-28"
    >
      <Container>
        <div className="mb-10 max-w-2xl md:mb-12">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
            {homePrepSection.eyebrow}
          </p>
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-[var(--brand-cta)] md:text-3xl">
            {homePrepSection.title}
          </h2>
          <p className="text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
            {homePrepSection.intro}
          </p>
        </div>

        <ol className="max-w-3xl">
          {homePrepSteps.map((step) => {
            const link = stepLink(step);
            return (
              <li
                key={step.id}
                className="grid grid-cols-[auto_1fr] gap-x-5 border-t border-[color-mix(in_srgb,var(--brand-cta)_12%,transparent)] py-6 first:border-t-0 first:pt-0 last:pb-0 md:gap-x-8 md:py-7"
              >
                <span
                  className="pt-0.5 text-sm font-bold tabular-nums text-[var(--brand-mango)]"
                  aria-hidden
                >
                  {String(step.step).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="mb-2 text-lg font-bold leading-snug tracking-tight text-[var(--brand-cta)]">
                    {step.title}
                  </h3>
                  <p className="text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
                    {step.body}
                  </p>
                  {step.kind === "visa" ? (
                    <div className="relative z-10 mt-4 max-w-md">
                      <HomePrepVisaMini />
                    </div>
                  ) : null}
                  <p className="mt-3">
                    <Link
                      href={link.href}
                      className="text-sm font-bold text-[var(--brand-coral)] underline decoration-[color-mix(in_srgb,var(--brand-coral)_35%,transparent)] underline-offset-2 transition-colors duration-300 hover:text-[var(--brand-coral-hover)]"
                    >
                      {link.label} →
                    </Link>
                  </p>
                </div>
              </li>
            );
          })}
        </ol>

        <p className="mt-10 max-w-3xl text-sm font-normal text-[var(--brand-ink-muted)] md:mt-12">
          Prefer a full checklist?{" "}
          <Link
            href={homePrepSection.kitCta.href}
            className="font-bold text-[var(--brand-cta)] underline decoration-[color-mix(in_srgb,var(--brand-cta)_35%,transparent)] underline-offset-2"
          >
            {homePrepSection.kitCta.label} →
          </Link>
        </p>
      </Container>
    </section>
  );
}
