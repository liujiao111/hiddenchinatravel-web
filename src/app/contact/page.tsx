import type { Metadata } from "next";
import Container from "@/app/_components/container";
import { ContactForm } from "@/app/contact/_components/contact-form";
import { founderAssets } from "@/lib/about/founder-content";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { getWhatsAppHref } from "@/lib/whatsapp";
import Image from "next/image";

const pageTitle = `Contact ${SITE_NAME} | Plan Your Yunnan Journey`;
const pageDescription =
  "Talk directly with Joy Liu about your Yunnan travel plans. Ask questions, explore ideas, and see whether Hidden China Travel is the right fit — no pressure or obligation.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "website",
    url: "/contact",
  },
  twitter: {
    card: "summary",
    title: pageTitle,
    description: pageDescription,
  },
  alternates: { canonical: "/contact" },
};

function contactJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: pageTitle,
    description: pageDescription,
    url: `${SITE_URL}/contact`,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

const reasons = [
  "Is Yunnan right for my first China trip?",
  "How many days do I need?",
  "Which hotels do you recommend?",
  "Can I customize the itinerary?",
  "Is this suitable for families or older travelers?",
];

const steps = [
  ["01", "Tell us about your trip"],
  ["02", "We'll reply within 24 hours"],
  ["03", "We'll discuss your plans and answer questions"],
  ["04", "If we're a good fit, we'll prepare a personalized proposal"],
];

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const { service } = await searchParams;

  return (
    <main className="bg-[var(--brand-cream)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd()) }}
      />

      <Container>
        <section className="mx-auto max-w-4xl pb-14 pt-12 text-center md:pb-18 md:pt-18">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
            Start a conversation
          </p>
          <h1 className="mx-auto mb-6 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-[var(--brand-ink)] md:text-5xl">
            Let&apos;s Talk About Your Yunnan Journey
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-8 text-[var(--brand-ink-muted)] md:text-lg">
            Whether you&apos;re still exploring ideas or already planning dates,
            we&apos;re happy to help.
          </p>
          <p className="mt-4 text-sm font-bold tracking-wide text-[var(--brand-ink)] md:text-base">
            No obligation. No pressure. Just a conversation.
          </p>
          <a
            href={getWhatsAppHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-brand mt-8 inline-flex px-8 py-3.5 text-sm"
          >
            Chat on WhatsApp
          </a>
        </section>

        <section className="border-t border-[color-mix(in_srgb,var(--brand-cta)_12%,transparent)] py-12 md:py-16">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 max-w-2xl">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
                Simple and clear
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-[var(--brand-ink)] md:text-3xl">
                What Happens Next?
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {steps.map(([number, title]) => (
                <div
                  key={number}
                  className="rounded-3xl border border-[var(--brand-cta)]/12 bg-white p-6 shadow-[0_4px_20px_rgba(80,40,24,0.06)]"
                >
                  <p className="mb-5 text-sm font-bold text-[var(--brand-coral)]">
                    {number}
                  </p>
                  <p className="font-bold leading-7 text-[var(--brand-ink)]">
                    {title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[color-mix(in_srgb,var(--brand-cta)_12%,transparent)] py-12 md:py-16">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start lg:gap-16">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
                You can ask anything
              </p>
              <h2 className="mb-6 text-2xl font-bold tracking-tight text-[var(--brand-ink)] md:text-3xl">
                Why Travelers Contact Us
              </h2>
              <div className="space-y-4">
                {reasons.map((reason) => (
                  <div key={reason} className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--brand-coral)_12%,white)] text-sm font-bold text-[var(--brand-coral)]"
                    >
                      ✓
                    </span>
                    <p className="leading-7 text-[var(--brand-ink-muted)]">
                      {reason}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-[var(--brand-ink)] p-7 text-white md:p-8">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
                Not sure what to ask?
              </p>
              <p className="text-xl font-bold leading-8">
                That&apos;s completely fine. Tell us where you are in the planning
                process, and we&apos;ll start there.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-[color-mix(in_srgb,var(--brand-cta)_12%,transparent)] py-12 md:py-16">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[340px_minmax(0,1fr)] lg:items-center lg:gap-16">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-[var(--brand-cta)]/10 bg-white">
              <Image
                src={founderAssets.portrait}
                alt="Joy Liu, founder of Hidden China Travel"
                fill
                className="object-cover"
                sizes="340px"
              />
            </div>

            <div className="max-w-2xl">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
                A real person, not a booking desk
              </p>
              <h2 className="mb-6 text-2xl font-bold tracking-tight text-[var(--brand-ink)] md:text-3xl">
                You&apos;ll Be Speaking Directly With Joy Liu
              </h2>
              <div className="space-y-5 text-[15px] leading-8 text-[var(--brand-ink-muted)] md:text-base">
                <p>Born and raised in Yunnan. Now based in Kunming.</p>
                <p>
                  Having lived abroad, I understand both sides of travel: being
                  local, and arriving somewhere completely new.
                </p>
                <p>Every inquiry is personally reviewed.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[color-mix(in_srgb,var(--brand-cta)_12%,transparent)] py-12 md:py-18">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
            <div className="max-w-md">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
                Tell us what you&apos;re thinking
              </p>
              <h2 className="mb-5 text-2xl font-bold tracking-tight text-[var(--brand-ink)] md:text-3xl">
                Start the Conversation
              </h2>
              <p className="leading-8 text-[var(--brand-ink-muted)]">
                You don&apos;t need a finished itinerary. A rough idea, possible
                dates, or even a few questions is enough to begin.
              </p>
              <p className="mt-5 text-sm font-bold leading-6 text-[var(--brand-ink)]">
                We&apos;ll reply within 24 hours.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[var(--brand-cta)]/12 bg-white p-6 shadow-[0_8px_30px_rgba(80,40,24,0.08)] md:p-8">
              <ContactForm defaultServiceType={service} />
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}
