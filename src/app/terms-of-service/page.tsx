import Link from "next/link";
import Container from "@/app/_components/container";
import { LastUpdated } from "@/app/_components/last-updated";
import {
  SITE_EMAIL,
  SITE_FOUNDER_NAME,
  SITE_LAST_UPDATED,
  SITE_LOCATION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/constants";
import type { Metadata } from "next";

const pageTitle = `Terms of Service | ${SITE_NAME}`;
const pageDescription = `Terms governing use of ${SITE_NAME} website, paid planning services, and payments.`;

export const metadata: Metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  alternates: {
    canonical: "/terms-of-service",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "website",
    url: "/terms-of-service",
  },
  twitter: {
    card: "summary",
    title: pageTitle,
    description: pageDescription,
  },
};

function Section({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mb-12 scroll-mt-32 md:mb-14">
      <h2 className="mb-4 text-xl font-light tracking-wide text-[var(--brand-ink)] md:text-3xl">
        <span className="mr-2 font-light text-[var(--brand-muted)]">
          {number}.
        </span>
        {title}
      </h2>
      <div className="max-w-3xl space-y-4 text-base font-light leading-relaxed text-[var(--brand-ink-muted)] md:text-lg">
        {children}
      </div>
    </section>
  );
}

const toc = [
  { href: "#agreement", label: "Agreement" },
  { href: "#who-we-are", label: "Who we are" },
  { href: "#services", label: "Services" },
  { href: "#orders-payments", label: "Orders & payments" },
  { href: "#refunds", label: "Refunds" },
  { href: "#your-responsibilities", label: "Your responsibilities" },
  { href: "#intellectual-property", label: "Intellectual property" },
  { href: "#disclaimers", label: "Disclaimers" },
  { href: "#limitation", label: "Limitation of liability" },
  { href: "#privacy", label: "Privacy" },
  { href: "#changes", label: "Changes" },
  { href: "#governing-law", label: "Governing law" },
  { href: "#contact", label: "Contact" },
];

export default function TermsOfServicePage() {
  return (
    <main>
      <Container>
        <nav aria-label="Breadcrumb" className="mb-6 mt-8">
          <ol className="flex flex-wrap items-center gap-2 text-sm font-light text-[var(--brand-muted)]">
            <li>
              <Link
                href="/"
                className="transition-colors duration-500 hover:text-[var(--brand-ink)] hover:underline"
              >
                Home
              </Link>
            </li>
            <li aria-hidden className="text-[var(--brand-warm)]">
              /
            </li>
            <li className="text-[var(--brand-ink)]">Terms of Service</li>
          </ol>
        </nav>

        <header className="mb-12 max-w-3xl md:mb-16">
          <p className="mb-4 text-xs font-light uppercase tracking-[0.16em] text-[var(--brand-muted)]">
            Legal
          </p>
          <h1 className="mb-4 text-2xl font-light leading-tight tracking-wide text-[var(--brand-ink)] md:text-4xl">
            Terms of Service
          </h1>
          <LastUpdated date={SITE_LAST_UPDATED} className="mb-6" />
          <p className="text-sm font-light leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
            These Terms of Service (“Terms”) govern your access to and use of{" "}
            <span className="font-light tracking-wide text-[var(--brand-ink)]">
              {SITE_NAME}
            </span>{" "}
            at{" "}
            <a href={SITE_URL} className="underline underline-offset-4">
              {SITE_URL.replace(/^https?:\/\//, "")}
            </a>
            , including paid planning and consulting services purchased through
            our site or related payment links.
          </p>
          <p className="mt-4 text-sm font-light leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
            By using the website or purchasing a service, you agree to these
            Terms. If you do not agree, please do not use the site or place an
            order.
          </p>
        </header>

        <div className="grid grid-cols-1 items-start gap-12 pb-24 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-16">
          <article>
            <Section id="agreement" number={1} title="Agreement to These Terms">
              <p>
                These Terms form a binding agreement between you (“you”,
                “customer”) and {SITE_NAME} (“we”, “us”, “our”). Additional
                details for a specific paid package may appear on the product
                page, checkout page, invoice, or written quote we send you.
                Those details apply together with these Terms. If there is a
                conflict on price, deliverables, or timeline for a specific
                order, the written quote or checkout description for that order
                controls.
              </p>
            </Section>

            <Section id="who-we-are" number={2} title="Who We Are">
              <p>
                {SITE_NAME} is operated by {SITE_FOUNDER_NAME}, based in{" "}
                {SITE_LOCATION}. We provide independent China travel guidance
                and digital consulting for foreign visitors planning to travel
                on their own.
              </p>
              <p>
                We are <strong>not</strong> a licensed travel agency, tour
                operator, airline, hotel, or insurance provider. We do not sell
                package tours as a principal, and we do not act as your
                full-time on-the-ground guide unless a separate written
                agreement says otherwise.
              </p>
              <p>
                Contact:{" "}
                <a
                  href={`mailto:${SITE_EMAIL}`}
                  className="break-all underline underline-offset-4 transition-colors duration-500 hover:text-[var(--brand-cta)]"
                >
                  {SITE_EMAIL}
                </a>
              </p>
            </Section>

            <Section id="services" number={3} title="Services We Provide">
              <p>Depending on what you purchase or request, services may include:</p>
              <ul className="list-disc space-y-2 pl-5 marker:text-[var(--brand-muted)]">
                <li>One-to-one itinerary planning and customization</li>
                <li>Review / optimization of an existing itinerary</li>
                <li>Practical trip-prep guidance (payments, apps, transport, and related topics)</li>
                <li>Limited on-trip consulting / Q&amp;A packs, when offered</li>
                <li>Optional booking assistance for tickets or hotels for a stated service fee</li>
                <li>Free website content, tools, and Survival Kit materials</li>
              </ul>
              <p>
                Free website content and tools are provided for general
                information. Paid services are digital / consulting deliverables
                described at checkout or in your quote. Unless explicitly stated
                in writing, fees cover our planning and advice time — not the
                cost of flights, hotels, trains, attraction tickets, visas,
                insurance, or other third-party products.
              </p>
            </Section>

            <Section id="orders-payments" number={4} title="Orders & Payments">
              <p>
                Paid services may be purchased through our website checkout,
                payment links, or invoices we send you. Payments are processed
                by third-party providers such as <strong>Stripe</strong>. We do
                not store full card numbers on our servers.
              </p>
              <p>
                Prices are shown before you pay. Taxes (if any) and currency
                conversion fees charged by your bank or card issuer are your
                responsibility unless we state otherwise. By paying, you
                authorize the charge for the selected service and confirm that
                the order details (dates, destinations, traveler count, and
                preferences you provided) are accurate enough for us to begin
                work.
              </p>
              <p>
                We may decline or cancel an order if payment fails, if required
                information is missing, if the request falls outside our
                services, or if we reasonably believe there is fraud or misuse.
              </p>
            </Section>

            <Section id="refunds" number={5} title="Refunds & Cancellations">
              <p>
                Because our paid services are customized digital consulting,
                refunds work as follows unless a specific product page states
                different terms:
              </p>
              <ul className="list-disc space-y-2 pl-5 marker:text-[var(--brand-muted)]">
                <li>
                  <strong>Before work starts:</strong> If you cancel before we
                  begin preparing your itinerary or consultation deliverable,
                  you may request a full refund of the unused service fee.
                </li>
                <li>
                  <strong>After work starts:</strong> Once we have started
                  custom work (research, drafting, calls, or written
                  deliverables), fees are generally non-refundable, except where
                  required by applicable law or where we agree in writing to a
                  partial refund.
                </li>
                <li>
                  <strong>If we cannot deliver:</strong> If we cancel an order
                  for reasons on our side and cannot provide a reasonable
                  alternative, we will refund the unused portion of the service
                  fee.
                </li>
              </ul>
              <p>
                Refund requests: email{" "}
                <a
                  href={`mailto:${SITE_EMAIL}`}
                  className="break-all underline underline-offset-4"
                >
                  {SITE_EMAIL}
                </a>{" "}
                with your name, order/payment reference, and reason. Approved
                refunds are returned to the original payment method via Stripe
                (or the processor used) within a reasonable processing time.
              </p>
              <p>
                Third-party purchases (tickets, hotels, eSIMs, etc.) follow the
                seller’s own cancellation rules. Our service fee for booking
                help does not automatically include those third-party refunds.
              </p>
            </Section>

            <Section
              id="your-responsibilities"
              number={6}
              title="Your Responsibilities"
            >
              <p>You agree to:</p>
              <ul className="list-disc space-y-2 pl-5 marker:text-[var(--brand-muted)]">
                <li>
                  Provide accurate travel details (dates, cities, passport
                  nationality, preferences, and constraints)
                </li>
                <li>
                  Verify visas, entry rules, passport validity, and insurance
                  for your own trip
                </li>
                <li>
                  Make final booking and travel decisions yourself, including
                  checking times, prices, and cancellation policies before you
                  pay third parties
                </li>
                <li>
                  Not misuse the site (no scraping that harms the service, no
                  illegal content, no fraudulent payments)
                </li>
                <li>
                  Keep login or payment-link information confidential when
                  shared with you
                </li>
              </ul>
            </Section>

            <Section
              id="intellectual-property"
              number={7}
              title="Intellectual Property"
            >
              <p>
                Website content, branding, guides, tools, and itinerary
                deliverables we create remain owned by {SITE_NAME} (or our
                licensors), except for materials you supply to us. When you
                purchase a planning service, we grant you a personal,
                non-exclusive license to use the delivered itinerary for your
                own trip. You may not resell, republish, or redistribute our
                paid deliverables or substantial site content without our prior
                written consent.
              </p>
            </Section>

            <Section id="disclaimers" number={8} title="Disclaimers">
              <p>
                Travel involves uncertainty. Schedules, prices, entry rules,
                transport, weather, and local conditions can change. Our
                advice, guides, tools, and itineraries are provided for
                informational and planning support. They are{" "}
                <strong>not</strong> a guarantee of outcomes, ticket
                availability, visa approval, or uninterrupted travel.
              </p>
              <p>
                To the fullest extent permitted by law, the website and
                services are provided “as is” and “as available,” without
                warranties of uninterrupted access or error-free content.
              </p>
              <p>
                Affiliate or third-party links (when present) may earn us a
                commission at no extra cost to you. We are not responsible for
                third-party websites, products, or their policies. See our{" "}
                <Link
                  href="/privacy-policy#affiliate-links"
                  className="underline underline-offset-4"
                >
                  Privacy Policy — Affiliate links
                </Link>
                .
              </p>
            </Section>

            <Section
              id="limitation"
              number={9}
              title="Limitation of Liability"
            >
              <p>
                To the fullest extent permitted by applicable law, {SITE_NAME}{" "}
                and {SITE_FOUNDER_NAME} are not liable for indirect, incidental,
                special, consequential, or punitive damages, or for lost
                profits, lost bookings, missed connections, visa refusals, or
                third-party failures arising from your use of the site or our
                advice.
              </p>
              <p>
                Our total liability for any claim related to a paid order is
                limited to the amount you paid us for that specific service
                order. Nothing in these Terms excludes liability that cannot be
                excluded under applicable law.
              </p>
            </Section>

            <Section id="privacy" number={10} title="Privacy">
              <p>
                How we collect and use personal data is described in our{" "}
                <Link
                  href="/privacy-policy"
                  className="underline underline-offset-4"
                >
                  Privacy Policy
                </Link>
                . By using the site or placing an order, you also acknowledge
                that policy.
              </p>
            </Section>

            <Section id="changes" number={11} title="Changes to These Terms">
              <p>
                We may update these Terms from time to time. The updated version
                will be posted on this page with a revised “Last updated” date.
                Continued use of the website after changes means you accept the
                updated Terms. For an active paid order, material changes that
                affect that order will be communicated if required.
              </p>
            </Section>

            <Section id="governing-law" number={12} title="Governing Law">
              <p>
                These Terms are governed by the laws of the People’s Republic of
                China, without regard to conflict-of-law rules. Courts in{" "}
                {SITE_LOCATION} shall have jurisdiction over disputes arising
                from these Terms, subject to any mandatory consumer protections
                that apply to you in your place of residence.
              </p>
            </Section>

            <Section id="contact" number={13} title="Contact Us">
              <p>
                Questions about these Terms, orders, or refunds:
              </p>
              <p>
                {SITE_NAME}
                <br />
                {SITE_FOUNDER_NAME}
                <br />
                {SITE_LOCATION}
                <br />
                Email:{" "}
                <a
                  href={`mailto:${SITE_EMAIL}`}
                  className="break-all font-light underline underline-offset-4 transition-colors duration-500 hover:text-[var(--brand-cta)]"
                >
                  {SITE_EMAIL}
                </a>
              </p>
            </Section>
          </article>

          <aside className="sticky top-32 hidden lg:block">
            <nav
              aria-label="On this page"
              className="surface-card bg-[var(--brand-surface)] p-5"
            >
              <p className="mb-3 text-xs font-light uppercase tracking-wider text-[var(--brand-muted)]">
                On this page
              </p>
              <ul className="space-y-2 text-sm font-light text-[var(--brand-ink-muted)]">
                {toc.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="underline-offset-4 transition-colors duration-500 hover:text-[var(--brand-ink)] hover:underline"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-t border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)] pt-4 text-xs font-light text-[var(--brand-muted)]">
                Also see:{" "}
                <Link href="/privacy-policy" className="underline">
                  Privacy Policy
                </Link>
              </p>
            </nav>
          </aside>
        </div>
      </Container>
    </main>
  );
}
