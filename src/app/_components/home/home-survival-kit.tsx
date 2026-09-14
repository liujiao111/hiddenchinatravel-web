import Container from "@/app/_components/container";
import Link from "next/link";

const prepItems = [
  {
    title: "Payments",
    body: "Set up Alipay, understand WeChat Pay, and know what to do if a payment fails.",
    icon: "¥",
  },
  {
    title: "eSIMs & Internet",
    body: "Choose the right SIM or eSIM setup and know when you may still need a VPN.",
    icon: "⌁",
  },
  {
    title: "Maps & Navigation",
    body: "Use the apps that actually work in China and avoid getting stuck with the wrong map.",
    icon: "⌖",
  },
  {
    title: "Visas & Entry",
    body: "Check visa-free options, transit rules, and the practical entry details that matter before you fly.",
    icon: "✓",
  },
  {
    title: "Transport & Booking",
    body: "Prepare for trains, hotels, attraction tickets, and the booking systems that can trip up first-time visitors.",
    icon: "→",
  },
] as const;

export function HomeSurvivalKit() {
  return (
    <section className="border-b border-[color-mix(in_srgb,var(--brand-cta)_12%,transparent)] bg-[var(--brand-soft)] py-14 md:py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
            Prepare for your China travel
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[var(--brand-ink)] md:text-4xl">
            Everything you need before you land
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[var(--brand-ink-muted)] md:text-lg">
            Payments, eSIMs, maps, visas and more.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {prepItems.map((item) => (
            <article
              key={item.title}
              className="group rounded-[1.75rem] border border-[var(--brand-cta)]/10 bg-white p-5 shadow-[0_8px_28px_rgba(80,40,24,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(80,40,24,0.1)]"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--brand-cream)] text-lg font-bold text-[var(--brand-coral)]">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold leading-snug text-[var(--brand-ink)]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--brand-ink-muted)]">
                {item.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/survival-kit" className="btn-brand inline-flex px-8 py-3.5 text-sm">
            Get the full Checklist
          </Link>
        </div>
      </Container>
    </section>
  );
}
