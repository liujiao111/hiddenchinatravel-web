import type { Metadata } from "next";
import Container from "@/app/_components/container";
import { LastUpdated } from "@/app/_components/last-updated";
import { ContactForm } from "@/app/contact/_components/contact-form";
import { ClientEmailLink } from "@/components/contact/client-email-link";
import {
  SITE_EMAIL,
  SITE_FOUNDER_NAME,
  SITE_LAST_UPDATED,
  SITE_LOCATION,
  SITE_LOCATION_ZH,
  SITE_NAME,
  SITE_URL,
} from "@/lib/constants";
import {
  getWhatsAppHref,
} from "@/lib/whatsapp";
import Link from "next/link";

const pageTitle = `Contact ${SITE_NAME}`;
const pageDescription =
  "Contact Hidden China Travel for custom itineraries, booking help, on-trip questions, partnerships, or guide feedback. We usually reply within 30 minutes.";

export const metadata: Metadata = {
  title: {
    absolute: pageTitle,
  },
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
  alternates: {
    canonical: "/contact",
  },
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
    mainEntity: {
      "@type": "Organization",
      name: SITE_NAME,
      email: SITE_EMAIL,
      url: SITE_URL,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kunming",
        addressRegion: "Yunnan",
        addressCountry: "CN",
      },
    },
  };
}

export default function ContactPage() {
  return (
    <main className="bg-[var(--brand-cream)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd()) }}
      />

      <Container>
        <header className="mb-10 max-w-2xl pt-10 md:mb-12 md:pt-14">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
            Contact
          </p>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-[var(--brand-cta)] md:text-4xl">
            Let&apos;s talk about your China trip
          </h1>
          <p className="text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
            Planning help, booking questions, partnerships, or guide feedback —
            send a note. {SITE_FOUNDER_NAME} reads every message and usually
            replies within{" "}
            <span className="font-bold text-[var(--brand-cta)]">30 minutes</span>
            .
          </p>
        </header>

        <div className="mb-8 grid gap-3 sm:grid-cols-2 md:mb-10">
          <Link
            href="/china-itinerary-planner#plan-trip"
            className="rounded-2xl border-2 border-[#00897b]/15 bg-white px-5 py-4 shadow-[0_4px_20px_rgba(0,137,123,0.08)] transition-all duration-300 hover:border-[var(--brand-cta)] hover:shadow-[0_8px_28px_rgba(0,137,123,0.14)]"
          >
            <p className="text-xs font-bold uppercase tracking-wide text-[var(--brand-mango)]">
              Fastest for planning
            </p>
            <p className="mt-1 text-base font-bold text-[var(--brand-cta)]">
              Request a custom itinerary →
            </p>
            <p className="mt-1 text-sm text-[var(--brand-ink-muted)]">
              Share cities, days, and style in the planner form.
            </p>
          </Link>
          <Link
            href="/services"
            className="rounded-2xl border-2 border-[#00897b]/15 bg-white px-5 py-4 shadow-[0_4px_20px_rgba(0,137,123,0.08)] transition-all duration-300 hover:border-[var(--brand-cta)] hover:shadow-[0_8px_28px_rgba(0,137,123,0.14)]"
          >
            <p className="text-xs font-bold uppercase tracking-wide text-[var(--brand-mango)]">
              See pricing first
            </p>
            <p className="mt-1 text-base font-bold text-[var(--brand-cta)]">
              Services &amp; pricing →
            </p>
            <p className="mt-1 text-sm text-[var(--brand-ink-muted)]">
              Custom plans, reviews, on-trip help, and booking fees.
            </p>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-10 pb-24 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-12">
          <section
            aria-labelledby="contact-form-heading"
            className="rounded-2xl border-2 border-[#00897b]/15 bg-white p-6 shadow-[0_4px_20px_rgba(0,137,123,0.1)] md:p-8"
          >
            <h2
              id="contact-form-heading"
              className="mb-2 text-xl font-bold tracking-tight text-[var(--brand-cta)]"
            >
              Send a message
            </h2>
            <p className="mb-6 text-sm font-normal text-[var(--brand-ink-muted)]">
              For general questions, partnerships, or anything that doesn&apos;t
              fit the planner form.
            </p>
            <ContactForm />
          </section>

          <aside className="space-y-8">
            <div>
              <h2 className="mb-2 text-sm font-bold tracking-tight text-[var(--brand-cta)]">
                Email
              </h2>
              <ClientEmailLink className="break-all text-sm font-normal text-[var(--brand-ink-muted)] transition-colors duration-300 hover:text-[var(--brand-coral)]" />
              <p className="mt-2 text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)]">
                Prefer email? Write anytime — we usually reply within 30
                minutes.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-sm font-bold tracking-tight text-[var(--brand-cta)]">
                WhatsApp
              </h2>
              <a
                href={getWhatsAppHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-[var(--brand-coral)] underline decoration-[color-mix(in_srgb,var(--brand-coral)_35%,transparent)] underline-offset-2"
              >
                Chat on WhatsApp →
              </a>
            </div>

            <div>
              <h2 className="mb-2 text-sm font-bold tracking-tight text-[var(--brand-cta)]">
                Based in
              </h2>
              <p className="text-sm font-normal text-[var(--brand-ink-muted)]">
                {SITE_LOCATION}
                <span className="text-[var(--brand-ink-muted)]/80">
                  {" "}
                  · {SITE_LOCATION_ZH}
                </span>
              </p>
            </div>

            <LastUpdated date={SITE_LAST_UPDATED} label="Page last updated" />
          </aside>
        </div>
      </Container>
    </main>
  );
}
