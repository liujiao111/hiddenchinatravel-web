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

const steps = [
  {
    number: "01",
    title: "Tell us about your trip",
    body: "Share your dates, travel style, and any questions you have.",
  },
  {
    number: "02",
    title: "We'll reply personally",
    body: "Every inquiry is reviewed by Joy Liu, founder of Hidden China Travel.",
  },
  {
    number: "03",
    title: "We'll explore the possibilities",
    body: "If one of our journeys fits your plans, we'll prepare a personalized proposal.",
  },
  {
    number: "04",
    title: "You decide",
    body: "No pressure. No sales calls. No obligation to book.",
  },
];

const reasons = [
  "Is Yunnan a good first destination in China?",
  "How many days should I spend in Dali, Shaxi or Lijiang?",
  "Is this journey suitable for couples or families?",
  "Can I customize the itinerary?",
  "What hotels do you recommend?",
  "Do I need to speak Chinese?",
  "What's included in the trip price?",
];

const trustItems = [
  ["Local Insight", "Born and raised in Yunnan."],
  ["Personalized Planning", "No template itineraries."],
  ["Private Travel", "No large tour groups."],
  ["No Forced Shopping Stops", "Ever."],
  ["Local Support", "Before and during your journey."],
];

const faqs = [
  ["How quickly do you reply?", "Usually within 24 hours."],
  [
    "Do I need to know my exact travel dates?",
    "Not at all. We're happy to discuss ideas even if you're still exploring options.",
  ],
  [
    "Is there any obligation to book?",
    "No. We're happy to answer questions and help you decide if we're a good fit.",
  ],
  [
    "Do you only offer Yunnan journeys?",
    "Yunnan is currently our primary focus and the place we know best.",
  ],
] as const;

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const { service } = await searchParams;
  const whatsappHref = getWhatsAppHref();

  return (
    <main className="bg-[var(--brand-cream)] text-[var(--brand-ink)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd()) }}
      />

      <Container>
        <section className="mx-auto max-w-4xl pb-14 pt-12 text-center md:pb-18 md:pt-18">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
            Start a conversation
          </p>
          <h1 className="mx-auto max-w-3xl text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            Let&apos;s Talk About Your Yunnan Journey
          </h1>
          <div className="mx-auto mt-6 max-w-2xl space-y-4 text-base leading-8 text-[var(--brand-ink-muted)] md:text-lg">
            <p>
              Whether you&apos;re still exploring ideas or already have dates in mind,
              we&apos;d love to hear about your plans.
            </p>
            <p>
              We&apos;re happy to answer questions, share advice, and help you decide
              whether one of our journeys is the right fit.
            </p>
          </div>
          <p className="mt-5 font-bold">No pressure. No obligation. Just a conversation.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brand px-8 py-3.5 text-sm"
            >
              Chat on WhatsApp
            </a>
            <a href="#inquiry" className="btn-brand-outline px-8 py-3.5 text-sm">
              Send an Inquiry
            </a>
          </div>
        </section>

        <section className="border-t border-[color-mix(in_srgb,var(--brand-cta)_12%,transparent)] py-12 md:py-16">
          <div className="mx-auto max-w-5xl">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
              What Happens Next
            </p>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Simple, personal, and straightforward.
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-3xl border border-[var(--brand-cta)]/12 bg-white p-6 shadow-[0_4px_20px_rgba(80,40,24,0.06)]"
                >
                  <p className="mb-5 text-sm font-bold text-[var(--brand-coral)]">
                    {step.number}
                  </p>
                  <h3 className="font-bold leading-7">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--brand-ink-muted)]">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[color-mix(in_srgb,var(--brand-cta)_12%,transparent)] py-12 md:py-16">
          <div className="mx-auto max-w-5xl">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
              Why Travelers Contact Us
            </p>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Not sure where to start?</h2>
            <p className="mt-4 max-w-2xl leading-7 text-[var(--brand-ink-muted)]">
              These are some of the most common questions we receive.
            </p>
            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {reasons.map((reason) => (
                <div key={reason} className="flex items-start gap-3">
                  <span aria-hidden className="mt-0.5 font-bold text-[var(--brand-coral)]">✓</span>
                  <p className="leading-7 text-[var(--brand-ink-muted)]">{reason}</p>
                </div>
              ))}
            </div>
            <p className="mt-7 max-w-3xl font-bold leading-7">
              If you&apos;re wondering about any of these, you&apos;re exactly the kind of traveler we enjoy helping.
            </p>
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
                Founder
              </p>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                You&apos;ll Be Speaking Directly With Joy Liu
              </h2>
              <div className="mt-6 space-y-5 text-[15px] leading-8 text-[var(--brand-ink-muted)] md:text-base">
                <p>Born and raised in Yunnan.</p>
                <p>
                  Having spent several years living abroad, I understand both sides of travel:
                  what it&apos;s like to know a place deeply, and what it&apos;s like to arrive somewhere completely new.
                </p>
                <p>That&apos;s why every inquiry is reviewed personally.</p>
                <p>
                  Whether you&apos;re planning your first trip to China or returning to explore more deeply,
                  I&apos;m happy to help point you in the right direction.
                </p>
              </div>
              <p className="mt-6 font-bold">Joy Liu</p>
              <p className="text-sm text-[var(--brand-ink-muted)]">Founder, Hidden China Travel</p>
            </div>
          </div>
        </section>

        <section id="inquiry" className="scroll-mt-28 border-t border-[color-mix(in_srgb,var(--brand-cta)_12%,transparent)] py-12 md:py-18">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
            <div className="max-w-md">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
                Contact Form
              </p>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Tell Us About Your Plans</h2>
              <p className="mt-4 leading-8 text-[var(--brand-ink-muted)]">
                The more we know, the better advice we can give.
              </p>
            </div>
            <div className="rounded-[2rem] border border-[var(--brand-cta)]/12 bg-white p-6 shadow-[0_8px_30px_rgba(80,40,24,0.08)] md:p-8">
              <ContactForm defaultServiceType={service} />
            </div>
          </div>
        </section>

        <section className="border-t border-[color-mix(in_srgb,var(--brand-cta)_12%,transparent)] py-12 md:py-16">
          <div className="mx-auto max-w-5xl">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
              Why Travelers Choose Hidden China Travel
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {trustItems.map(([title, body]) => (
                <div key={title} className="rounded-3xl border border-[var(--brand-cta)]/12 bg-white p-5">
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--brand-ink-muted)]">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[color-mix(in_srgb,var(--brand-cta)_12%,transparent)] py-12 md:py-16">
          <div className="mx-auto max-w-4xl">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">FAQ</p>
            <div className="mt-6 divide-y divide-[var(--brand-cta)]/10 border-y border-[var(--brand-cta)]/10">
              {faqs.map(([question, answer]) => (
                <details key={question} className="group py-5">
                  <summary className="cursor-pointer list-none font-bold">{question}</summary>
                  <p className="mt-3 max-w-3xl leading-7 text-[var(--brand-ink-muted)]">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[color-mix(in_srgb,var(--brand-cta)_12%,transparent)] py-14 text-center md:py-18">
          <div className="mx-auto max-w-3xl rounded-[2rem] bg-[var(--brand-ink)] px-6 py-10 text-white md:px-10 md:py-12">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Ready to Start the Conversation?</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/75">
              A great journey usually begins long before the flight. Tell us about your travel plans and we&apos;ll help you explore the possibilities.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-brand px-7 py-3.5 text-sm">
                Chat on WhatsApp
              </a>
              <a href="#inquiry" className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-white/35 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10">
                Send an Inquiry
              </a>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}
