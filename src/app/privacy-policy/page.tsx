import Link from "next/link";
import Container from "@/app/_components/container";
import { LastUpdated } from "@/app/_components/last-updated";
import { SITE_EMAIL, SITE_LAST_UPDATED, SITE_NAME, SITE_URL } from "@/lib/constants";
import type { Metadata } from "next";

const pageTitle = `Privacy Policy | ${SITE_NAME}`;
const pageDescription = `How ${SITE_NAME} collects, uses, and protects information when you visit our website.`;

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

export default function PrivacyPage() {
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
            <li className="text-[var(--brand-ink)]">Privacy</li>
          </ol>
        </nav>

        <header className="mb-12 max-w-3xl md:mb-16">
          <p className="mb-4 text-xs font-light uppercase tracking-[0.16em] text-[var(--brand-muted)]">
            Legal
          </p>
          <h1 className="mb-4 text-2xl font-light leading-tight tracking-wide text-[var(--brand-ink)] md:text-4xl">
            Privacy Policy
          </h1>
          <LastUpdated date={SITE_LAST_UPDATED} className="mb-6" />
          <p className="text-sm font-light leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
            Welcome to{" "}
            <span className="font-light tracking-wide text-[var(--brand-ink)]">
              hiddenchinatravel
            </span>
            . This Privacy Policy explains how we collect, use, and protect your
            information when you visit our website.
          </p>
          <p className="mt-4 text-sm font-light leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
            By using this website, you agree to the terms of this Privacy
            Policy.
          </p>
        </header>

        <div className="grid grid-cols-1 items-start gap-12 pb-24 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-16">
          <article>
            <Section id="information-we-collect" number={1} title="Information We Collect">
              <p>We may collect the following types of information:</p>

              <h3 className="!mt-6 text-lg font-light tracking-wide text-[var(--brand-ink)] md:text-xl">
                a. Personal Information
              </h3>
              <p>
                We do not directly collect personal information unless you
                voluntarily provide it (for example, contacting us via email).
              </p>

              <h3 className="!mt-6 text-lg font-light tracking-wide text-[var(--brand-ink)] md:text-xl">
                b. Non-Personal Information
              </h3>
              <p>When you visit our website, we may automatically collect:</p>
              <ul className="list-disc space-y-2 pl-5 marker:text-[var(--brand-muted)]">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device information</li>
                <li>Pages visited</li>
                <li>Time spent on pages</li>
              </ul>
              <p>
                This information is used for analytics and improving user
                experience.
              </p>
            </Section>

            <Section id="how-we-use" number={2} title="How We Use Your Information">
              <p>We use the collected information to:</p>
              <ul className="list-disc space-y-2 pl-5 marker:text-[var(--brand-muted)]">
                <li>Improve website content and user experience</li>
                <li>Understand how visitors use our site</li>
                <li>Monitor website performance</li>
                <li>Prevent fraud and ensure security</li>
              </ul>
            </Section>

            <Section id="cookies" number={3} title="Cookies">
              <p>We use cookies to enhance your browsing experience.</p>
              <p>Cookies help us:</p>
              <ul className="list-disc space-y-2 pl-5 marker:text-[var(--brand-muted)]">
                <li>Understand user behavior</li>
                <li>Remember preferences</li>
                <li>Analyze traffic</li>
              </ul>
              <p>
                You can disable cookies through your browser settings. However,
                some parts of the website may not function properly.
              </p>
            </Section>

            <Section id="third-party" number={4} title="Third-Party Services">
              <p>
                We may use third-party services that collect, monitor, and
                analyze usage data.
              </p>
              <p>These may include:</p>
              <ul className="list-disc space-y-2 pl-5 marker:text-[var(--brand-muted)]">
                <li>Google Analytics (for traffic analysis)</li>
                <li>
                  Advertising platforms such as Google AdSense (future use)
                </li>
              </ul>
              <p>
                These third parties may use cookies and similar tracking
                technologies.
              </p>
              <p>
                We do not control how these third parties collect or use your
                data. Please review their respective privacy policies.
              </p>
            </Section>

            <Section id="affiliate-links" number={5} title="Affiliate Links">
              <p>
                Some pages on this website may contain affiliate links.
              </p>
              <p>This means:</p>
              <ul className="list-disc space-y-2 pl-5 marker:text-[var(--brand-muted)]">
                <li>
                  We may earn a small commission if you make a purchase
                </li>
                <li>There is no extra cost to you</li>
              </ul>
              <p>
                We only recommend services and products that we believe are
                useful for travelers. Affiliate links on this site typically use
                short paths such as{" "}
                <code className="rounded-sm bg-[var(--brand-soft)] px-1.5 py-0.5 text-sm font-light">
                  /go/…
                </code>
                .
              </p>
            </Section>

            <Section id="data-protection" number={6} title="Data Protection">
              <p>
                We take reasonable measures to protect your information.
              </p>
              <p>
                However, no method of transmission over the Internet is 100%
                secure. We cannot guarantee absolute security.
              </p>
            </Section>

            <Section id="your-rights" number={7} title="Your Rights">
              <p>Depending on your location, you may have the right to:</p>
              <ul className="list-disc space-y-2 pl-5 marker:text-[var(--brand-muted)]">
                <li>Request access to your data</li>
                <li>Request correction or deletion</li>
                <li>Withdraw consent</li>
              </ul>
              <p>
                To exercise these rights, please contact us at{" "}
                <a
                  href={`mailto:${SITE_EMAIL}`}
                  className="font-light underline underline-offset-4 transition-colors duration-500 hover:text-[var(--brand-cta)]"
                >
                  {SITE_EMAIL}
                </a>
                .
              </p>
            </Section>

            <Section id="external-links" number={8} title="External Links">
              <p>Our website may contain links to external websites.</p>
              <p>
                We are not responsible for the privacy practices or content of
                those third-party sites.
              </p>
            </Section>

            <Section id="changes" number={9} title="Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time.
              </p>
              <p>
                Changes will be posted on this page with an updated “Last
                updated” date.
              </p>
            </Section>

            <Section id="contact" number={10} title="Contact Us">
              <p>
                If you have any questions about this Privacy Policy, you can
                contact us at:
              </p>
              <p>
                Email:{" "}
                <a
                  href={`mailto:${SITE_EMAIL}`}
                  className="break-all font-light underline underline-offset-4 transition-colors duration-500 hover:text-[var(--brand-cta)]"
                >
                  {SITE_EMAIL}
                </a>
              </p>
            </Section>

            <Section id="consent" number={11} title="Consent">
              <p>
                By using our website, you hereby consent to our Privacy Policy
                and agree to its terms.
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
                {[
                  { href: "#information-we-collect", label: "Information we collect" },
                  { href: "#how-we-use", label: "How we use it" },
                  { href: "#cookies", label: "Cookies" },
                  { href: "#third-party", label: "Third parties" },
                  { href: "#affiliate-links", label: "Affiliate links" },
                  { href: "#your-rights", label: "Your rights" },
                  { href: "#contact", label: "Contact" },
                ].map((item) => (
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
                Site:{" "}
                <a href={SITE_URL} className="break-all underline">
                  {SITE_URL.replace(/^https?:\/\//, "")}
                </a>
              </p>
            </nav>
          </aside>
        </div>
      </Container>
    </main>
  );
}
