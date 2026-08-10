import Link from "next/link";
import Container from "@/app/_components/container";
import { LastUpdated } from "@/app/_components/last-updated";
import { SocialLinks } from "@/app/_components/social-links";
import { TropicalCard, tropicalAccentAt } from "@/app/_components/tropical-card";
import { AboutLinkList } from "./_components/about-link-list";
import { AboutSection } from "./_components/about-section";
import { TopicHubCards } from "./_components/topic-hub-cards";
import {
  aboutStartHereGuides,
  aboutTools,
  aboutTopicHubs,
} from "@/lib/about/content";
import {
  partnerConsultTagline,
  partnerHero,
  partnerServices,
  partnerWhoWeAre,
  supportScenarios,
  whyChooseUs,
} from "@/lib/about/partner-content";
import { ClientEmailLink } from "@/components/contact/client-email-link";
import {
  SITE_EMAIL,
  SITE_FOUNDER_NAME,
  SITE_LAST_UPDATED,
  SITE_LOCATION,
  SITE_LOCATION_ZH,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "@/lib/constants";
import type { Metadata } from "next";

const pageTitle = `About ${SITE_NAME} — Your Local Partner for Independent China Travel`;
const pageDescription =
  "Hidden China Travel is your local partner for independent China travel: 1:1 itinerary planning, on-trip support, and practical prep — not a tour agency.";

export const metadata: Metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  keywords: [
    "about Hidden China Travel",
    "China travel partner for foreigners",
    "independent China travel",
    "Joy Liu",
    "China itinerary planning",
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "profile",
    url: "/about",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
  alternates: {
    canonical: "/about",
  },
};

function aboutJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: pageTitle,
      description: pageDescription,
      url: `${SITE_URL}/about`,
      isPartOf: {
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
      },
      mainEntity: {
        "@type": "Person",
        name: SITE_FOUNDER_NAME,
        jobTitle: "Founder",
        worksFor: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Kunming",
          addressRegion: "Yunnan",
          addressCountry: "CN",
        },
        email: SITE_EMAIL,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About",
          item: `${SITE_URL}/about`,
        },
      ],
    },
  ];
}

export default function AboutUsPage() {
  const beforeTrip = partnerServices.filter((s) => s.phase === "Before you go");
  const duringTrip = partnerServices.filter(
    (s) => s.phase === "During your trip",
  );

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd()) }}
      />

      <Container>
        <header className="mb-14 mt-8 max-w-3xl md:mb-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
            {partnerHero.eyebrow}
          </p>
          <h1 className="mb-5 text-2xl font-bold leading-tight tracking-tight text-[var(--brand-cta)] md:text-4xl">
            {partnerHero.title}
          </h1>
          <p className="mb-3 text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
            {partnerHero.lead}
          </p>
          <p className="mb-6 text-sm font-normal text-[var(--brand-ink-muted)] md:text-base">
            {SITE_TAGLINE} Built by {SITE_FOUNDER_NAME}, based in {SITE_LOCATION}{" "}
            ({SITE_LOCATION_ZH}).
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/china-itinerary-planner"
              className="btn-brand px-8 py-3.5 text-[15px]"
            >
              {partnerHero.primaryCta}
            </Link>
            <Link
              href="/survival-kit"
              className="inline-flex items-center justify-center rounded-full border-2 border-[#00897b]/30 bg-transparent px-8 py-3.5 text-sm font-bold text-[var(--brand-cta)] transition-all duration-300 hover:scale-105 hover:border-[var(--brand-cta)] hover:bg-[#00897b]/8"
            >
              {partnerHero.secondaryCta}
            </Link>
          </div>
        </header>

        <div className="grid grid-cols-1 items-start gap-12 pb-28 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-14 lg:pr-16 xl:pr-20">
          <article>
            <AboutSection id="who-we-are" title={partnerWhoWeAre.title}>
              {partnerWhoWeAre.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
              <p className="!mt-6 text-lg font-bold tracking-tight text-[var(--brand-cta)]">
                {partnerWhoWeAre.oneLiner}
              </p>
            </AboutSection>

            <AboutSection
              id="services"
              title="What we offer"
              eyebrow="Services"
            >
              <p className="mb-6">
                Clear services — not vague promises. Primary work is before you
                fly; support continues when you are on the ground.
              </p>

              <h3 className="mb-4 text-lg font-bold tracking-tight text-[var(--brand-cta)]">
                Before you go
              </h3>
              <ul className="mb-10 grid gap-4 sm:grid-cols-2 md:gap-5">
                {beforeTrip.map((service, index) => (
                  <li key={service.id}>
                    <TropicalCard
                      accent={service.accent ?? tropicalAccentAt(index)}
                      label={service.label}
                      title={service.title}
                      footerMeta={service.phase}
                    >
                      <p>{service.body}</p>
                    </TropicalCard>
                  </li>
                ))}
              </ul>

              <h3 className="mb-3 text-lg font-bold tracking-tight text-[var(--brand-cta)]">
                During your trip
              </h3>
              <p className="mb-6 text-sm font-bold leading-relaxed text-[var(--brand-coral)] md:text-base">
                {partnerConsultTagline}
              </p>
              <ul className="grid gap-4 sm:grid-cols-2 md:gap-5">
                {duringTrip.map((service, index) => (
                  <li key={service.id}>
                    <TropicalCard
                      accent={service.accent ?? tropicalAccentAt(index)}
                      label={service.label}
                      title={service.title}
                      footerMeta={service.phase}
                    >
                      <p>{service.body}</p>
                    </TropicalCard>
                  </li>
                ))}
              </ul>
            </AboutSection>

            <AboutSection
              id="support-scenarios"
              title="On-trip support — real scenarios"
              eyebrow="Consult packs"
            >
              <p className="mb-8">
                When you buy a consult pack, these are the kinds of moments we
                help with — concrete paths, not abstract reassurance.
              </p>
              <ul className="grid gap-4 sm:grid-cols-2 md:gap-5">
                {supportScenarios.map((scenario, index) => (
                  <li key={scenario.id}>
                    <TropicalCard
                      accent={tropicalAccentAt(index)}
                      label={scenario.category}
                      title={scenario.category}
                    >
                      <ul className="space-y-2">
                        {scenario.items.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span
                              aria-hidden
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-coral)]"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </TropicalCard>
                  </li>
                ))}
              </ul>
            </AboutSection>

            <AboutSection id="why-us" title="Why choose us" eyebrow="Trust">
              {whyChooseUs.map((block) => (
                <div key={block.id} className="mb-10 last:mb-0">
                  <h3 className="mb-3 text-lg font-bold tracking-tight text-[var(--brand-cta)] md:text-xl">
                    {block.title}
                  </h3>
                  {block.paragraphs.map((p) => (
                    <p key={p.slice(0, 32)} className="mb-3 last:mb-0">
                      {p}
                    </p>
                  ))}
                </div>
              ))}
            </AboutSection>

            <AboutSection
              id="founder"
              title={`I'm ${SITE_FOUNDER_NAME}`}
              eyebrow="Founder"
            >
              <p>
                I&apos;m {SITE_FOUNDER_NAME}, currently based in Kunming,
                Yunnan.
              </p>
              <p>
                I grew up in China and later lived overseas for years — including
                three years in the Philippines, with travel across Southeast Asia
                and Hong Kong. I know the fear before a first landing: Will it
                feel safe? What if I don&apos;t speak the language? What if the
                card fails? What if I can&apos;t reach family?
              </p>
              <p>
                That two-way life is why {SITE_NAME} exists — to be a{" "}
                <strong className="text-[var(--brand-cta)]">local partner</strong>{" "}
                who has lived both in China and abroad, and can translate the
                practical gaps most first-time visitors hit.
              </p>
            </AboutSection>

            <AboutSection
              id="guides"
              title="Free guides & tools on this site"
              eyebrow="Also here"
            >
              <p>
                Alongside partner services, the site publishes practical guides
                and tools so you can prepare yourself — or deepen what we plan
                together.
              </p>
              <div className="!max-w-none pt-2">
                <TopicHubCards links={aboutTopicHubs} />
              </div>
              <p className="!mt-8 font-bold tracking-tight text-[var(--brand-cta)]">
                Useful starting points:
              </p>
              <AboutLinkList links={aboutStartHereGuides.slice(0, 6)} />
            </AboutSection>

            <AboutSection id="transparency" title="Transparency">
              <p>
                Some guides include affiliate links to tools that help with
                travel logistics. They never raise your price. We only include
                them when they directly help solve the problem in that guide.
              </p>
              <p>
                Partner planning and booking help are separate: we do not take
                attraction / hotel / OTA commissions for itinerary advice. Paid
                booking help uses a clear service fee.
              </p>
            </AboutSection>

            <AboutSection id="start-here" title="Ready when you are">
              <p>
                Start with a conversation about your trip — or prepare the
                essentials first.
              </p>
              <div className="!mt-6 flex flex-wrap gap-3">
                <Link
                  href="/china-itinerary-planner"
                  className="btn-brand text-sm"
                >
                  Plan my China trip
                </Link>
                <Link
                  href="/survival-kit"
                  className="btn-brand-outline text-sm"
                >
                  Open Survival Checklist
                </Link>
              </div>
              <LastUpdated
                date={SITE_LAST_UPDATED}
                className="!mt-10 border-t border-[color-mix(in_srgb,var(--brand-cta)_12%,transparent)] pt-6"
              />
            </AboutSection>
          </article>

          <aside className="z-0 space-y-5 lg:sticky lg:top-28 lg:self-start">
            <div className="surface-card p-5">
              <div className="surface-card-bar" aria-hidden />
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
                Founder
              </p>
              <p className="mb-1 text-xl font-bold tracking-tight text-[var(--brand-cta)]">
                {SITE_FOUNDER_NAME}
              </p>
              <p className="mb-4 text-sm font-normal text-[var(--brand-ink-muted)]">
                {SITE_LOCATION}
                <br />
                {SITE_LOCATION_ZH}
              </p>
              <ClientEmailLink className="break-all text-sm font-normal underline underline-offset-4 transition-colors duration-300 hover:text-[var(--brand-cta)]" />
              <div className="mt-5 border-t border-[color-mix(in_srgb,var(--brand-cta)_12%,transparent)] pt-5">
                <p className="mb-3 text-xs font-bold uppercase tracking-wide text-[var(--brand-cta)]">
                  Follow
                </p>
                <SocialLinks />
              </div>
            </div>

            <div className="surface-card p-5">
              <div className="surface-card-bar" aria-hidden />
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
                Start
              </p>
              <h2 className="mb-4 text-lg font-bold tracking-tight text-[var(--brand-cta)]">
                Plan or prepare
              </h2>
              <div className="mb-4 flex flex-col gap-2">
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
              <ul className="space-y-2.5">
                {aboutTools.map((tool) => (
                  <li key={tool.href}>
                    <Link
                      href={tool.href}
                      className="inline-flex items-center gap-2 text-sm font-normal tracking-wide text-[var(--brand-ink-muted)] underline decoration-[color-mix(in_srgb,var(--brand-cta)_25%,transparent)] underline-offset-4 transition-colors duration-300 hover:text-[var(--brand-cta)]"
                    >
                      <span aria-hidden>→</span>
                      {tool.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <nav
              aria-label="On this page"
              className="surface-card hidden p-5 lg:block"
            >
              <div className="surface-card-bar" aria-hidden />
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
                On this page
              </p>
              <ul className="space-y-2 text-sm font-normal text-[var(--brand-ink-muted)]">
                {[
                  { href: "#who-we-are", label: "Who we are" },
                  { href: "#services", label: "Services" },
                  { href: "#support-scenarios", label: "Support scenarios" },
                  { href: "#why-us", label: "Why choose us" },
                  { href: "#guides", label: "Guides & tools" },
                  { href: "#start-here", label: "Start here" },
                ].map((item) => (
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
