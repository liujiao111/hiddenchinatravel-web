import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/app/_components/container";
import { founderAssets } from "@/lib/about/founder-content";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { getWhatsAppPrefillHref } from "@/lib/whatsapp";

const pageTitle = "Dali, Shaxi & Lijiang Private Journey | Hidden China Travel";
const pageDescription =
  "A relaxed 6-day private Yunnan journey through Dali, Shaxi and Lijiang, designed around local culture, slower travel and flexible support.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: "/journeys/dali-shaxi-lijiang-tour" },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "website",
    url: "/journeys/dali-shaxi-lijiang-tour",
  },
};

const whatsappHref = getWhatsAppPrefillHref(
  "Hi Joy, I'm interested in the Dali, Shaxi & Lijiang journey. I'd like to learn more about dates, pricing and customization.",
);

const fitYes = [
  "You prefer experiences over checklists.",
  "You enjoy discovering places many visitors overlook.",
  "You like learning about local culture and daily life.",
  "You prefer traveling at a comfortable pace.",
  "You'd rather return home with stories than a longer list of attractions.",
];

const fitNo = [
  "You want to visit as many destinations as possible in the shortest time.",
  "You prefer fast-paced coach tours.",
  "Your main priority is finding the lowest-cost option.",
  "You want a rigid, fixed itinerary with no room to slow down.",
];

const experiences = [
  {
    index: "01",
    eyebrow: "Slow down in Shaxi",
    title: "An evening on the Ancient Tea Horse Road",
    body: "Spend an evening in one of the best-preserved towns along the route. As day visitors leave, the old square grows quieter and Shaxi reveals a slower side of Yunnan that many travelers never get to experience.",
    image: "/brand/destinations/yunnan/city-dali.webp",
    alt: "Yunnan old-town streets and traditional architecture",
  },
  {
    index: "02",
    eyebrow: "Meet the living traditions of Dali",
    title: "Inside a traditional tie-dye workshop",
    body: "Step into a craft that has been passed down through generations. More than a demonstration, it is a chance to connect with the people, stories and traditions that still shape daily life around Dali.",
    image: "/brand/destinations/yunnan/hero-erhai.webp",
    alt: "Dali and Erhai Lake in Yunnan",
  },
  {
    index: "03",
    eyebrow: "Wake up beside Erhai Lake",
    title: "A slower morning, with room to breathe",
    body: "Enjoy a slower morning by the lake, where changing light, village life and open landscape encourage you to pause rather than rush. Some of the best moments happen when the schedule leaves space for them.",
    image: "/brand/destinations/yunnan/food-erhai.webp",
    alt: "A local scene near Erhai Lake in Dali",
  },
  {
    index: "04",
    eyebrow: "See Yunnan's high-country side",
    title: "Lijiang and the mountain landscape beyond",
    body: "Leave the lakeside villages behind and finish the journey around Lijiang, where old-town lanes and dramatic mountain scenery show just how quickly Yunnan changes from one valley to the next.",
    image: "/brand/destinations/yunnan/city-lijiang.webp",
    alt: "Lijiang in Yunnan",
  },
];

const days = [
  {
    label: "Day 1",
    title: "Arrive in Dali",
    meta: "Arrival · settle in · old-town orientation",
    body: "Arrive in Dali, settle into your hotel and take an easy first walk through the old town. The first day is deliberately light so there is time to recover from travel and get comfortable with the area.",
  },
  {
    label: "Day 2",
    title: "Erhai Lake & Bai culture",
    meta: "Easy pace · villages · local craft",
    body: "Explore the quieter side of the Erhai area, with time for village life and a traditional tie-dye experience. The focus is less on covering stops and more on understanding the place around you.",
  },
  {
    label: "Days 3–4",
    title: "Dali to Shaxi",
    meta: "Private road transfer · Tea Horse Road town · overnight stay",
    body: "Travel north to Shaxi and stay long enough to experience the town after the day visitors leave. The slower rhythm is the point: old lanes, the historic square and an evening that feels very different from a quick sightseeing stop.",
  },
  {
    label: "Days 5–6",
    title: "Shaxi to Lijiang",
    meta: "Old town · mountain scenery · departure",
    body: "Continue toward Lijiang for the final part of the journey. Depending on weather, season and your preferences, the day can lean more toward cultural exploration, mountain scenery or simply a slower final day before departure.",
  },
];

const tiers = [
  {
    name: "Essential",
    price: "From ¥2,700",
    desc: "For travelers who value comfort, authenticity and good value.",
    bullets: ["Comfort-focused hotels", "Private ground transport", "Selected local experiences", "Local trip support"],
    ideal: "Friends · Couples · First-time visitors",
  },
  {
    name: "Comfort",
    price: "From ¥2,900",
    desc: "A balanced option with upgraded stays and a little more comfort built in.",
    bullets: ["Selected upgraded hotels", "Private ground transport", "Selected local experiences", "Local trip support"],
    ideal: "Most travelers · Couples · Small groups",
    featured: true,
  },
  {
    name: "Premium",
    price: "From ¥3,500",
    desc: "For travelers who prefer boutique stays and a more refined overall experience.",
    bullets: ["Selected premium hotels", "Private ground transport", "Selected local experiences", "Local trip support"],
    ideal: "Special occasions · Couples · Comfort-focused travelers",
  },
];

const faqs = [
  ["Is this a private tour or a group tour?", "It is designed as a private journey for your own party rather than a large coach tour. The exact operating arrangement is confirmed in your personalized proposal."],
  ["Can the itinerary be customized?", "Yes. This page is a starting point, not a rigid package. We can discuss more time in Shaxi, a slower pace, hotel preferences, or extensions elsewhere in Yunnan."],
  ["Is it suitable for first-time visitors to China?", "Yes. The route combines recognizable Yunnan highlights with a slower structure and local support, which makes it a comfortable introduction for many first-time visitors."],
  ["Do I need to speak Chinese?", "No. We can help organize the trip around international visitors, and the final proposal will spell out what English-language support is included."],
  ["Are there shopping stops?", "The journey is not designed around mandatory shopping stops, tourist factories or commission-led detours."],
  ["How physically demanding is it?", "The route can work for most travelers with normal mobility. There is walking in old towns and scenic areas, but the pace can be adjusted. Tell us about any mobility or altitude concerns before booking."],
  ["Are the prices fixed?", "No. The figures on this page are indicative starting prices. Final pricing depends on travel dates, party size, hotel level and the exact services included."],
  ["How do I get started?", "Send Joy a WhatsApp message with your approximate dates, number of travelers and preferred pace. The first step is simply a conversation; there is no obligation to book."],
] as const;

function journeyJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: "Dali, Shaxi & Lijiang Private Journey",
    description: pageDescription,
    url: `${SITE_URL}/journeys/dali-shaxi-lijiang-tour`,
    touristType: ["Independent travelers", "Couples", "First-time China visitors"],
    itinerary: {
      "@type": "ItemList",
      itemListElement: ["Dali", "Shaxi", "Lijiang"].map((name, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name,
      })),
    },
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export default function DaliShaxiLijiangJourneyPage() {
  return (
    <main className="bg-[var(--brand-cream)] text-[var(--brand-ink)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(journeyJsonLd()) }}
      />

      <section className="overflow-hidden border-b border-[var(--brand-cta)]/10 bg-white py-12 md:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
                Your first journey through Yunnan
              </p>
              <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
                China, at your pace.
              </h1>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Dali", "Shaxi", "Lijiang", "6 days", "Unhurried pace"].map((tag) => (
                  <span key={tag} className="rounded-full border border-[var(--brand-cta)]/15 bg-[var(--brand-soft)] px-3 py-1.5 text-sm text-[var(--brand-ink-muted)]">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--brand-ink-muted)]">
                Old towns, tie-dye workshops and lakeside mornings, arranged for people who would rather remember how a place felt than how many places they saw.
              </p>
              <p className="mt-6 text-sm text-[var(--brand-ink-muted)]">
                Indicative price from <span className="text-2xl font-bold text-[var(--brand-ink)]">¥2,700</span> per person
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-brand px-7 py-3.5 text-sm">
                  Start the conversation
                </a>
                <Link href="#itinerary" className="btn-brand-outline px-7 py-3.5 text-sm">
                  See the 6-day outline
                </Link>
              </div>
              <p className="mt-3 text-xs text-[var(--brand-ink-muted)]">No pressure. No obligation. Joy usually replies within 24 hours.</p>
            </div>

            <div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-[var(--brand-cta)]/10 shadow-sm">
                <Image src="/brand/destinations/yunnan/hero-erhai.webp" alt="Erhai Lake and mountains near Dali, Yunnan" fill priority className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" />
              </div>
              <p className="mt-3 text-sm italic text-[var(--brand-ink-muted)]">Dali and Erhai Lake — the slower beginning to the journey.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-[var(--brand-cta)]/10 bg-[var(--brand-soft)] py-7">
        <Container>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[["6", "days across three towns"], ["Private", "journey for your party"], ["4", "signature experiences"], ["Flexible", "pace and hotel options"]].map(([value, label]) => (
              <div key={value}>
                <p className="text-2xl font-bold tracking-tight">{value}</p>
                <p className="mt-1 text-sm text-[var(--brand-ink-muted)]">{label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 md:py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">Why this journey</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Most travelers remember the places they visited. We want you to remember how those places felt.</h2>
            <p className="mt-6 text-lg leading-8 text-[var(--brand-ink-muted)]">
              A quiet evening in an old Tea Horse Road town. A conversation inside a traditional tie-dye workshop. A slow breakfast overlooking Erhai Lake. This journey is designed around moments like these, because the best memories are rarely made in a hurry.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--brand-cta)]/10 bg-white py-14 md:py-20">
        <Container>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">Is this your kind of journey?</p>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-[var(--brand-cta)]/10 p-6 md:p-8">
              <h2 className="text-2xl font-bold">You'll probably enjoy it if</h2>
              <ul className="mt-5 space-y-4">
                {fitYes.map((item) => <li key={item} className="flex gap-3 text-[var(--brand-ink-muted)]"><span className="font-bold text-[var(--brand-olive)]">✓</span><span>{item}</span></li>)}
              </ul>
            </div>
            <div className="rounded-3xl border border-[var(--brand-cta)]/10 p-6 md:p-8">
              <h2 className="text-2xl font-bold">It may not be for you if</h2>
              <ul className="mt-5 space-y-4">
                {fitNo.map((item) => <li key={item} className="flex gap-3 text-[var(--brand-ink-muted)]"><span className="font-bold text-[var(--brand-coral)]">×</span><span>{item}</span></li>)}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 md:py-20">
        <Container>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">Signature experiences</p>
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight md:text-4xl">Not a checklist of attractions — a handful of moments that stay with you.</h2>
          <div className="mt-10 divide-y divide-[var(--brand-cta)]/10 border-y border-[var(--brand-cta)]/10">
            {experiences.map((exp) => (
              <div key={exp.index} className="grid gap-7 py-8 md:grid-cols-[280px_1fr] md:items-center md:py-10">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image src={exp.image} alt={exp.alt} fill className="object-cover" sizes="280px" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[var(--brand-coral)]">{exp.index} — {exp.eyebrow}</p>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight">{exp.title}</h3>
                  <p className="mt-3 max-w-2xl leading-7 text-[var(--brand-ink-muted)]">{exp.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--brand-soft)] py-14 md:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">Independent travel vs local support</p>
              <h2 className="text-3xl font-bold tracking-tight">Can you visit Dali, Shaxi and Lijiang on your own? Absolutely.</h2>
              <div className="mt-5 space-y-4 leading-7 text-[var(--brand-ink-muted)]">
                <p>Yunnan is very possible to explore independently. The question is not whether you can do it yourself — it is how you want the journey to feel.</p>
                <p>Transfers, local transport, hotel choices and deciding what is actually worth your time can take more effort than expected. This journey is designed to keep the freedom of independent travel while removing some of that friction.</p>
              </div>
            </div>
            <blockquote className="self-center border-l-4 border-[var(--brand-coral)] pl-6 text-2xl font-bold leading-relaxed tracking-tight">
              “You still travel at your own pace. We simply help remove the friction.”
            </blockquote>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--brand-ink)] py-14 text-white md:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[320px_1fr] lg:items-center lg:gap-16">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-[320px] overflow-hidden rounded-[2rem]">
              <Image src={founderAssets.portrait} alt="Joy Liu, founder of Hidden China Travel" fill className="object-cover" sizes="320px" />
            </div>
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">Meet Hidden China Travel</p>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Born in Yunnan. Shaped by experiences abroad.</h2>
              <p className="mt-5 text-xl font-semibold leading-8 text-white/95">“I learned how much easier travel becomes when you have someone local you can trust.”</p>
              <div className="mt-6 space-y-4 leading-7 text-white/75">
                <p>I’m Joy Liu. I was born and raised in Yunnan and I’m now based in Kunming.</p>
                <p>Living abroad changed the way I saw travel. Simple things suddenly became complicated: how to get around, where locals actually go, what to know before arriving. That experience is part of why I built Hidden China Travel.</p>
                <p>The goal is not to help you cram more places into a trip. It is to help you feel more comfortable, more connected and more confident exploring China.</p>
              </div>
              <Link href="/about" className="mt-6 inline-flex font-bold text-[var(--brand-mango)] underline underline-offset-4">Read the story behind Hidden China Travel →</Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 md:py-20">
        <Container>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">Who you'll travel with</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              ["01", "Licensed local guides", "Where included in your final plan, local guides help bring the destination to life through stories, culture and practical local knowledge."],
              ["02", "Experienced local drivers", "For road sections that are easier by car, local drivers make transfers more comfortable and help reach places beyond the main rail network."],
              ["03", "Local travel support", "The exact support included is set out in your proposal, so you know who to contact and what help is available before you travel."],
            ].map(([n, title, body]) => (
              <div key={n} className="border-t-2 border-[var(--brand-cta)]/15 pt-5">
                <p className="text-sm font-bold text-[var(--brand-coral)]">{n}</p>
                <h3 className="mt-2 text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-[var(--brand-ink-muted)]">{body}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-xl font-bold">You focus on the experience. The local operating team handles the details confirmed in your proposal.</p>
        </Container>
      </section>

      <section className="border-y border-[var(--brand-cta)]/10 bg-[var(--brand-soft)] py-14 md:py-20">
        <Container>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">Pricing & travel styles</p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Choose the level of comfort that fits you.</h2>
          <p className="mt-4 max-w-2xl leading-7 text-[var(--brand-ink-muted)]">These are indicative starting prices, not a final quote. Dates, group size, hotels and exact inclusions can change the final price.</p>
          <div className="mt-9 grid gap-6 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div key={tier.name} className={`rounded-3xl border p-6 md:p-7 ${tier.featured ? "border-[var(--brand-coral)] bg-white shadow-sm" : "border-[var(--brand-cta)]/10 bg-white/70"}`}>
                <p className="text-lg font-bold text-[var(--brand-coral)]">{tier.name}</p>
                <p className="mt-2 text-3xl font-bold tracking-tight">{tier.price}</p>
                <p className="mt-3 text-sm leading-6 text-[var(--brand-ink-muted)]">{tier.desc}</p>
                <ul className="mt-5 space-y-3 border-y border-[var(--brand-cta)]/10 py-5 text-sm text-[var(--brand-ink-muted)]">
                  {tier.bullets.map((b) => <li key={b}>✓ {b}</li>)}
                </ul>
                <p className="mt-5 text-xs uppercase tracking-wide text-[var(--brand-ink-muted)]">Ideal for</p>
                <p className="mt-1 text-sm font-semibold">{tier.ideal}</p>
              </div>
            ))}
          </div>
          <div className="mt-9 rounded-3xl border border-[var(--brand-cta)]/10 bg-white p-6 md:p-8">
            <h3 className="text-xl font-bold">What the final proposal will clarify</h3>
            <div className="mt-5 grid gap-3 text-sm text-[var(--brand-ink-muted)] sm:grid-cols-2 lg:grid-cols-3">
              {["Hotel names and room type", "Ground transportation", "Guide coverage", "Tickets and experiences", "Meals that are included", "Cancellation and payment terms"].map((item) => <p key={item}>✓ {item}</p>)}
            </div>
            <p className="mt-6 text-sm leading-6 text-[var(--brand-ink-muted)]">International flights, personal expenses and any item not listed in the final proposal are not assumed to be included.</p>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--brand-ink)] py-9 text-white">
        <Container>
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold">Ready to explore Yunnan your way?</h2>
              <p className="mt-1 text-sm text-white/70">Tell Joy what kind of trip you have in mind.</p>
            </div>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-brand shrink-0 px-7 py-3.5 text-sm">Talk on WhatsApp</a>
          </div>
        </Container>
      </section>

      <section id="itinerary" className="scroll-mt-28 bg-white py-14 md:py-20">
        <Container>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">Your 6 days in Yunnan</p>
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight md:text-4xl">A rhythm of arrival, discovery and rest — not a race between sights.</h2>
          <div className="mt-9 divide-y divide-[var(--brand-cta)]/10 border-y border-[var(--brand-cta)]/10">
            {days.map((day) => (
              <details key={day.label} className="group py-6 open:pb-7">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-coral)]">{day.label}</p>
                    <h3 className="mt-1 text-xl font-bold md:text-2xl">{day.title}</h3>
                    <p className="mt-2 text-sm text-[var(--brand-ink-muted)]">{day.meta}</p>
                  </div>
                  <span className="mt-1 text-2xl font-light text-[var(--brand-coral)] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-5 max-w-3xl leading-7 text-[var(--brand-ink-muted)]">{day.body}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--brand-soft)] py-14 md:py-20">
        <Container>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">Frequently asked questions</p>
          <div className="mt-7 max-w-4xl divide-y divide-[var(--brand-cta)]/10 border-y border-[var(--brand-cta)]/10">
            {faqs.map(([q, a]) => (
              <details key={q} className="group py-5 open:pb-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-bold">
                  <span>{q}</span>
                  <span className="text-2xl font-light text-[var(--brand-coral)] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-3xl leading-7 text-[var(--brand-ink-muted)]">{a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--brand-coral)] py-14 text-white md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-white/75">China, at Your Pace.</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Ready to plan your first journey through Yunnan?</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/85">Tell us your approximate dates, party size and the kind of pace you prefer. We’ll help you decide whether this route is the right fit before anything becomes a booking.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-[var(--brand-ink)] px-7 py-3.5 text-sm font-bold text-white transition hover:opacity-90">Start the conversation on WhatsApp →</a>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full border-2 border-white/60 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10">Use the contact form</Link>
            </div>
            <p className="mt-4 text-sm text-white/75">No pressure. No obligation. Just a conversation.</p>
          </div>
        </Container>
      </section>
    </main>
  );
}
