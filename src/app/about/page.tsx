import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/app/_components/container";
import { FounderPhotoStrip } from "./_components/founder-photo-strip";
import {
  founderAssets,
  founderOriginPhotos,
  founderSceneGallery,
} from "@/lib/about/founder-content";
import {
  SITE_FOUNDER_NAME,
  SITE_FOUNDER_PICTURE,
  SITE_NAME,
  SITE_URL,
} from "@/lib/constants";

const pageTitle = `About ${SITE_NAME} | Born in Yunnan`;
const pageDescription =
  "Meet Joy Liu, founder of Hidden China Travel. Born and raised in Yunnan, Joy creates slower, more personal China journeys with trusted local partners.";

export const metadata: Metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "profile",
    url: "/about",
    images: [
      {
        url: founderAssets.portrait,
        alt: `${SITE_FOUNDER_NAME}, founder of ${SITE_NAME}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [founderAssets.portrait],
  },
};

const aboutStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${SITE_URL}/about#aboutpage`,
      url: `${SITE_URL}/about`,
      name: pageTitle,
      description: pageDescription,
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
      mainEntity: {
        "@id": `${SITE_URL}/about#founder`,
      },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/about#founder`,
      name: SITE_FOUNDER_NAME,
      jobTitle: "Founder",
      image: `${SITE_URL}${SITE_FOUNDER_PICTURE}`,
      url: `${SITE_URL}/about#founder`,
      worksFor: {
        "@id": `${SITE_URL}/#organization`,
      },
      homeLocation: {
        "@type": "Place",
        name: "Yunnan, China",
      },
    },
    {
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
  ],
};

const audience = [
  "First-time visitors to China",
  "Independent travelers seeking local support",
  "Couples and friends traveling together",
  "Curious travelers interested in culture and daily life",
  "People looking for a slower, more personal travel experience",
];

const localTeam = [
  "Licensed local guides",
  "Experienced private drivers",
  "Trusted local partners across Yunnan",
  "Ongoing support before and during your trip",
];

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-[var(--brand-cta)]/10 py-14 md:py-20">
      <div className="max-w-3xl">
        {eyebrow ? (
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="mb-7 text-2xl font-bold leading-tight tracking-tight text-[var(--brand-ink)] md:text-4xl">
          {title}
        </h2>
        <div className="space-y-5 text-[15px] leading-8 text-[var(--brand-ink-muted)] md:text-base">
          {children}
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutStructuredData).replace(/</g, "\\u003c"),
        }}
      />

      <Container>
        <section
          id="founder"
          className="grid gap-10 py-12 md:py-16 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center lg:gap-16"
        >
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
              About Hidden China Travel
            </p>
            <h1 className="mb-7 text-3xl font-bold leading-tight tracking-tight text-[var(--brand-ink)] md:text-5xl">
              Born in Yunnan. Shaped by Experiences Abroad.
            </h1>
            <div className="space-y-5 text-[15px] leading-8 text-[var(--brand-ink-muted)] md:text-base">
              <p className="text-lg font-semibold text-[var(--brand-ink)]">
                I&apos;m {SITE_FOUNDER_NAME}.
              </p>
              <p>I was born and raised in Yunnan, in southwest China.</p>
              <p>
                For most of my life, the places travelers now travel thousands
                of miles to visit were simply part of everyday life: local
                markets, mountain roads, village festivals, small family
                restaurants, and old towns along the Tea Horse Road.
              </p>
              <p>
                Back then, I never imagined people would travel from around the
                world to experience what I considered ordinary.
              </p>
              <p>That changed when I moved abroad.</p>
              <p>For the first time in my life, I became the foreigner.</p>
              <p>And everything that once felt simple suddenly became complicated.</p>
              <div className="space-y-1 font-medium text-[var(--brand-ink)]">
                <p>How do people get around?</p>
                <p>Which neighborhoods are actually worth visiting?</p>
                <p>What customs should I know?</p>
                <p>What mistakes should I avoid?</p>
              </div>
              <p>
                I quickly learned that having someone local you trust can
                transform an entire trip.
              </p>
              <p>Not because they help you see more.</p>
              <p>
                But because they help you feel comfortable enough to truly
                experience a place.
              </p>
              <p>
                That experience eventually became the foundation of Hidden China
                Travel.
              </p>
            </div>
          </div>

          <div className="mx-auto w-full max-w-sm">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-[var(--brand-cta)]/10 shadow-sm">
              <Image
                src={founderAssets.portrait}
                alt={`${SITE_FOUNDER_NAME}, founder of ${SITE_NAME}`}
                fill
                priority
                className="object-cover"
                sizes="360px"
              />
            </div>
            <p className="mt-4 text-center text-sm text-[var(--brand-ink-muted)]">
              {SITE_FOUNDER_NAME} · Yunnan, China
            </p>
          </div>
        </section>

        <Section id="why-i-started" eyebrow="Our story" title="Why I Started Hidden China Travel">
          <p>When I returned home to Yunnan, I saw my own province differently.</p>
          <p>
            I realized many international visitors arriving in China face the
            same questions I once faced abroad.
          </p>
          <p>Not because China isn&apos;t welcoming.</p>
          <p>Not because it isn&apos;t safe.</p>
          <p>But because it can feel unfamiliar at first.</p>
          <p>
            Many travelers spend weeks researching transportation, payment apps,
            train tickets, hotel locations, and endless destination guides. By
            the time they arrive, they&apos;re exhausted before the journey even
            begins.
          </p>
          <p>I wanted to create something different.</p>
          <div className="space-y-1 font-medium text-[var(--brand-ink)]">
            <p>Not another travel agency.</p>
            <p>Not another package tour.</p>
            <p>Not another checklist of attractions.</p>
          </div>
          <p>
            Instead, I wanted to help people travel with more confidence, more
            comfort, and more connection to the places they visit.
          </p>
          <p>Hidden China Travel was built around a simple idea:</p>
          <p className="text-xl font-bold leading-relaxed text-[var(--brand-ink)] md:text-2xl">
            Travel becomes better when you understand a place, not just visit it.
          </p>
          <div className="pt-5">
            <FounderPhotoStrip photos={founderOriginPhotos} columns={2} />
          </div>
        </Section>

        <Section eyebrow="Our philosophy" title="What We Believe About Travel">
          <p>Most travelers remember the places they visited.</p>
          <p className="text-xl font-bold text-[var(--brand-ink)]">
            We want you to remember how those places felt.
          </p>
          <div className="space-y-1 font-medium text-[var(--brand-ink)]">
            <p>A quiet evening in Shaxi.</p>
            <p>A conversation inside a traditional tie-dye workshop.</p>
            <p>A slow breakfast overlooking Erhai Lake.</p>
            <p>A local market you only found because someone told you about it.</p>
          </div>
          <p>We don&apos;t believe travel needs to be rushed.</p>
          <p>
            We don&apos;t believe more destinations automatically create better
            memories.
          </p>
          <p>
            And we don&apos;t believe meaningful travel happens from the window of a
            tour bus.
          </p>
          <p>
            We believe travel is at its best when there&apos;s enough time to slow
            down, observe, and connect.
          </p>
          <p>That&apos;s the philosophy behind every journey we create.</p>
        </Section>

        <Section eyebrow="Home first" title="Why We Focus on Yunnan">
          <p>China is a huge country.</p>
          <p>But Hidden China Travel began with the place we know best.</p>
          <p className="text-xl font-bold text-[var(--brand-ink)]">Home.</p>
          <p>Yunnan is one of China&apos;s most diverse provinces.</p>
          <div className="space-y-1 font-medium text-[var(--brand-ink)]">
            <p>Ancient towns.</p>
            <p>Snow-capped mountains.</p>
            <p>Tea Horse Road history.</p>
            <p>Dozens of ethnic cultures.</p>
            <p>Local traditions that remain part of daily life.</p>
          </div>
          <p>
            For us, these aren&apos;t destinations we recently discovered. They&apos;re
            places we&apos;ve known for years.
          </p>
          <p>
            That&apos;s why we believe Yunnan is one of the best introductions to
            China for first-time visitors.
          </p>
          <p>It&apos;s beautiful without feeling overwhelming.</p>
          <p>Authentic without feeling inaccessible.</p>
          <p>
            And diverse without requiring you to rush from place to place.
          </p>
          <div className="pt-5">
            <FounderPhotoStrip photos={founderSceneGallery} columns={3} />
          </div>
        </Section>

        <Section eyebrow="Good fit" title="Who We Work With">
          <p>We work best with travelers who value experiences over checklists.</p>
          <p>
            People who would rather spend an evening wandering through a small
            town than rushing through five attractions in one day.
          </p>
          <p>Many of our travelers are:</p>
          <ul className="grid gap-3 pt-2 sm:grid-cols-2">
            {audience.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-[var(--brand-cta)]/10 bg-[var(--brand-soft)] px-5 py-4 font-medium text-[var(--brand-ink)]"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="pt-2">
            We&apos;re probably not the right fit if your goal is simply to visit as
            many places as possible in the shortest amount of time.
          </p>
          <p>And that&apos;s perfectly okay.</p>
          <p>The best journeys begin by finding the right fit.</p>
        </Section>

        <Section eyebrow="On the ground" title="Who You&apos;ll Be Traveling With">
          <p>Behind every journey is a carefully selected local team.</p>
          <p>Depending on your itinerary, this may include:</p>
          <ul className="grid gap-3 pt-2 sm:grid-cols-2">
            {localTeam.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-[var(--brand-cta)]/10 bg-white px-5 py-4 font-medium text-[var(--brand-ink)] shadow-sm"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="pt-2">Our role is simple.</p>
          <p className="text-lg font-bold text-[var(--brand-ink)]">
            You focus on the experience. We take care of the details behind the
            scenes.
          </p>
        </Section>

        <Section eyebrow="Our standard" title="Our Commitment">
          <div className="space-y-1 font-medium text-[var(--brand-ink)]">
            <p>No forced shopping stops.</p>
            <p>No commission-based detours.</p>
            <p>No tourist factory visits disguised as cultural experiences.</p>
          </div>
          <p>
            We prioritize experiences that we would genuinely recommend to our
            own friends and family.
          </p>
          <p>
            And if we don&apos;t think something is worth your time, we&apos;ll tell you.
          </p>
          <p>Even if that means recommending less, not more.</p>
          <p>Because our goal isn&apos;t to fill your itinerary.</p>
          <p className="text-xl font-bold text-[var(--brand-ink)]">
            It&apos;s to help you enjoy your journey.
          </p>
        </Section>

        <section className="border-t border-[var(--brand-cta)]/10 py-16 md:py-24">
          <div className="rounded-[2rem] bg-[var(--brand-ink)] px-6 py-10 text-center text-white md:px-12 md:py-14">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
              Hidden China Travel in one sentence
            </p>
            <h2 className="mx-auto max-w-3xl text-2xl font-bold leading-tight tracking-tight md:text-4xl">
              We&apos;re not here to help you see more of China.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
              We&apos;re here to help you feel more comfortable, more connected, and
              more confident exploring it.
            </p>
          </div>
        </section>

        <section className="pb-20 text-center md:pb-28">
          <div className="mx-auto max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
              Ready to start the conversation?
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-[var(--brand-ink)] md:text-4xl">
              Tell us a little about your travel plans.
            </h2>
            <p className="mt-5 text-[15px] leading-8 text-[var(--brand-ink-muted)] md:text-base">
              We&apos;ll help you decide whether we&apos;re the right fit for your journey.
              No pressure. No obligation. Just a conversation.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn-brand px-8 py-3.5 text-[15px]">
                Start a conversation
              </Link>
              <Link
                href="/journeys/dali-shaxi-lijiang-tour"
                className="inline-flex items-center justify-center rounded-full border-2 border-[var(--brand-cta)]/25 px-8 py-3.5 text-sm font-bold text-[var(--brand-cta)] transition hover:border-[var(--brand-cta)] hover:bg-[var(--brand-cta)]/5"
              >
                Explore our Yunnan journey
              </Link>
            </div>
            <p className="mt-10 text-lg font-semibold tracking-wide text-[var(--brand-ink)]">
              China, at Your Pace.
            </p>
          </div>
        </section>
      </Container>
    </main>
  );
}
