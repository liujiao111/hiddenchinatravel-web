import Link from "next/link";
import Container from "@/app/_components/container";
import { LastUpdated } from "@/app/_components/last-updated";
import { ClientEmailLink } from "@/components/contact/client-email-link";
import { SITE_LAST_UPDATED, SITE_NAME, SITE_URL } from "@/lib/constants";
import type { Metadata } from "next";

const pageTitle = `Privacy Policy | ${SITE_NAME}`;
const pageDescription = `How ${SITE_NAME} collects, uses, and protects information when you visit our website, submit a form, or buy a planning service.`;

export const metadata: Metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "website",
    url: "/privacy-policy",
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
      <h2 className="mb-4 text-xl font-bold tracking-tight text-[var(--brand-ink)] md:text-2xl">
        <span className="mr-2 text-[var(--brand-mango)]">{number}.</span>
        {title}
      </h2>
      <div className="max-w-3xl space-y-4 text-base font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-lg">
        {children}
      </div>
    </section>
  );
}

const toc = [
  { href: "#information-we-collect", label: "Information we collect" },
  { href: "#how-we-use", label: "How we use it" },
  { href: "#email-whatsapp", label: "Email & WhatsApp" },
  { href: "#payments", label: "Payments" },
  { href: "#cookies", label: "Cookies & analytics" },
  { href: "#affiliate-links", label: "Affiliate links" },
  { href: "#your-rights", label: "Your rights" },
  { href: "#contact", label: "Contact" },
];

export default function PrivacyPage() {
  return (
    <main>
      <Container>
        <nav aria-label="Breadcrumb" className="mb-6 mt-8">
          <ol className="flex flex-wrap items-center gap-2 text-sm font-normal text-[var(--brand-ink-muted)]">
            <li>
              <Link
                href="/"
                className="transition-colors duration-300 hover:text-[var(--brand-cta)] hover:underline"
              >
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-[var(--brand-ink)]">Privacy</li>
          </ol>
        </nav>

        <header className="mb-12 max-w-3xl md:mb-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
            Legal
          </p>
          <h1 className="mb-4 text-2xl font-bold leading-tight tracking-tight text-[var(--brand-ink)] md:text-4xl">
            Privacy Policy
          </h1>
          <LastUpdated date={SITE_LAST_UPDATED} className="mb-6" />
          <p className="text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
            This policy explains how {SITE_NAME} (
            <a href={SITE_URL} className="underline underline-offset-4">
              {SITE_URL.replace(/^https?:\/\//, "")}
            </a>
            ) collects, uses, and protects information when you visit the site,
            send a message, request an itinerary, or pay for a planning service.
          </p>
        </header>

        <div className="grid grid-cols-1 items-start gap-12 pb-24 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-16">
          <article>
            <Section
              id="information-we-collect"
              number={1}
              title="Information We Collect"
            >
              <p>We collect information in these ways:</p>
              <h3 className="!mt-6 text-lg font-bold tracking-tight text-[var(--brand-ink)]">
                a. Information you give us
              </h3>
              <p>
                When you use the contact form, itinerary planner, service
                request forms, or WhatsApp opt-in, we may collect your name,
                email, WhatsApp number (if you choose to share it), trip
                details (cities, dates, style, passport country), and the
                message you write.
              </p>
              <h3 className="!mt-6 text-lg font-bold tracking-tight text-[var(--brand-ink)]">
                b. Information collected automatically
              </h3>
              <p>When you visit the website, we may collect:</p>
              <ul className="list-disc space-y-2 pl-5 marker:text-[var(--brand-coral)]">
                <li>IP address and approximate location</li>
                <li>Browser and device type</li>
                <li>Pages viewed and referring URL</li>
                <li>Click events on CTAs and affiliate links</li>
              </ul>
            </Section>

            <Section id="how-we-use" number={2} title="How We Use Your Information">
              <p>We use this information to:</p>
              <ul className="list-disc space-y-2 pl-5 marker:text-[var(--brand-coral)]">
                <li>Reply to trip requests and messages</li>
                <li>Confirm scope, pricing, and deliver paid planning work</li>
                <li>Improve guides, tools, and site performance</li>
                <li>Understand which pages help travelers most</li>
                <li>Prevent spam and abuse of forms</li>
              </ul>
              <p>
                We do not sell your personal information. We do not use your
                trip details for unrelated marketing lists.
              </p>
            </Section>

            <Section
              id="email-whatsapp"
              number={3}
              title="Email, Forms & WhatsApp"
            >
              <p>
                Form notifications are sent through Resend so we can reply from
                our {SITE_NAME} inbox. If you opt in to WhatsApp, we may
                continue the same request in that chat. WhatsApp is operated by
                Meta; their privacy policy applies to that channel.
              </p>
              <p>
                Submissions may also be stored so we can follow up on your
                request. We keep them only as long as needed to deliver the
                service or meet legal record-keeping needs.
              </p>
            </Section>

            <Section id="payments" number={4} title="Payments">
              <p>
                Paid services may be purchased through Stripe checkout or
                Stripe Payment Links. Stripe processes card details. We do not
                store full card numbers on our servers. See Stripe’s privacy
                policy for how they handle payment data.
              </p>
            </Section>

            <Section id="cookies" number={5} title="Cookies & Analytics">
              <p>
                We use cookies and similar tools to understand traffic and
                improve the site. This may include Google Analytics (when
                configured) and Vercel Analytics. These providers may set their
                own cookies.
              </p>
              <p>
                You can disable cookies in your browser. Some site features may
                then work less smoothly.
              </p>
            </Section>

            <Section id="affiliate-links" number={6} title="Affiliate Links">
              <p>
                Some pages include affiliate links (usually short paths such as{" "}
                <code className="rounded-full bg-[var(--brand-soft)] px-2 py-0.5 text-sm">
                  /go/…
                </code>
                ). If you book or buy through them, we may earn a small
                commission at no extra cost to you. Click tracking may record
                that a link was used — not your payment details.
              </p>
            </Section>

            <Section id="third-party" number={7} title="Other Third Parties">
              <p>
                Hosting and delivery may involve Vercel. Maps, fonts, and
                similar utilities may load from their providers. We do not
                control how those services use data; please read their policies.
              </p>
            </Section>

            <Section id="your-rights" number={8} title="Your Rights">
              <p>Depending on your location, you may have the right to:</p>
              <ul className="list-disc space-y-2 pl-5 marker:text-[var(--brand-coral)]">
                <li>Request access to your data</li>
                <li>Request correction or deletion</li>
                <li>Withdraw consent for optional contact (such as WhatsApp)</li>
              </ul>
              <p>
                To exercise these rights, email us at{" "}
                <ClientEmailLink className="font-bold underline underline-offset-4 transition-colors duration-300 hover:text-[var(--brand-cta)]" />
                .
              </p>
            </Section>

            <Section id="changes" number={9} title="Changes">
              <p>
                We may update this Privacy Policy from time to time. Changes
                will be posted on this page with an updated “Last updated”
                date.
              </p>
            </Section>

            <Section id="contact" number={10} title="Contact">
              <p>
                Questions about this policy:{" "}
                <ClientEmailLink className="break-all font-bold underline underline-offset-4 transition-colors duration-300 hover:text-[var(--brand-cta)]" />{" "}
                or the{" "}
                <Link
                  href="/contact"
                  className="font-bold text-[var(--brand-coral)] underline decoration-[color-mix(in_srgb,var(--brand-coral)_35%,transparent)] underline-offset-2"
                >
                  contact form
                </Link>
                .
              </p>
            </Section>
          </article>

          <aside className="sticky top-32 hidden lg:block">
            <nav aria-label="On this page" className="surface-card p-5">
              <div className="surface-card-bar" aria-hidden />
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
                On this page
              </p>
              <ul className="space-y-2 text-sm font-normal text-[var(--brand-ink-muted)]">
                {toc.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="transition-colors duration-300 hover:text-[var(--brand-cta)] hover:underline hover:underline-offset-4"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      </Container>
    </main>
  );
}
