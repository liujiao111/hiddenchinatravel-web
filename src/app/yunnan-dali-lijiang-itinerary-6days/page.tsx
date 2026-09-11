import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppContact } from "@/app/_components/whatsapp-contact";

export const metadata: Metadata = {
  title: "Dali, Shaxi & Lijiang: Your First Journey Through Yunnan",
  description:
    "A 6-day private journey from Kunming through Dali and Shaxi to Lijiang, designed around local experiences, a comfortable pace, and flexible travel support.",
  alternates: {
    canonical: "/yunnan-dali-lijiang-itinerary-6days",
  },
  openGraph: {
    title: "Dali, Shaxi & Lijiang: Your First Journey Through Yunnan",
    description:
      "A private 6-day Yunnan journey from Kunming to Lijiang, with Dali, Shaxi, Erhai Lake and Jade Dragon Snow Mountain.",
    type: "website",
    url: "/yunnan-dali-lijiang-itinerary-6days",
  },
};

const images = {
  hero: "https://images.unsplash.com/photo-1678620071844-8377e26f1944?auto=format&fit=crop&fm=jpg&q=82&w=2400",
  dali: "https://images.unsplash.com/photo-1725378673587-571798fc52a5?auto=format&fit=crop&fm=jpg&q=82&w=1800",
  shaxi: "https://images.unsplash.com/photo-1745488549142-8b38bf0af477?auto=format&fit=crop&fm=jpg&q=82&w=1800",
  shaxiHomes: "https://images.unsplash.com/photo-1665217238468-8b321c84413e?auto=format&fit=crop&fm=jpg&q=82&w=1800",
  jadeDragon: "https://images.unsplash.com/photo-1677922068836-149f83761ddb?auto=format&fit=crop&fm=jpg&q=82&w=1800",
  lijiang: "https://images.unsplash.com/photo-1781448473526-e43a784ca2db?auto=format&fit=crop&fm=jpg&q=82&w=1800",
};

const days = [
  {
    day: "Day 1",
    title: "Arrive in Kunming",
    meta: "Kunming · Private arrival support",
    image: images.hero,
    alt: "Erhai-style Yunnan landscape with mountains and water",
    text: "Arrive in Kunming and ease into Yunnan without rushing into a packed sightseeing schedule. Your local support begins from arrival, giving you time to settle in and get your bearings.",
    note: "Overnight: Kunming",
  },
  {
    day: "Day 2",
    title: "Into Dali & beside Erhai Lake",
    meta: "Kunming → Dali · Private transfer / train support",
    image: images.dali,
    alt: "Dali town beside Erhai Lake with mountains behind",
    text: "Travel towards Dali and slow the pace down. The open landscape around Erhai Lake, village life and changing light create the kind of morning and afternoon that feel very different from a conventional sightseeing tour.",
    note: "Overnight: Dali",
  },
  {
    day: "Day 3",
    title: "Meet the living traditions of Dali",
    meta: "Dali · Local culture & everyday life",
    image: images.shaxiHomes,
    alt: "Traditional Yunnan home and courtyard",
    text: "Step inside a traditional tie-dye workshop and discover a craft passed down through generations. More than a demonstration, it is a chance to connect with the people, stories and traditions that still shape daily life in Dali today.",
    note: "Overnight: Dali",
  },
  {
    day: "Day 4",
    title: "Slow down in Shaxi",
    meta: "Dali → Shaxi → Lijiang · Ancient Tea Horse Road",
    image: images.shaxi,
    alt: "Stone bridge and river landscape in Shaxi",
    text: "Spend time in one of the best-preserved towns along the Ancient Tea Horse Road. As day visitors leave, the old square grows quieter, lanterns begin to glow, and Shaxi reveals a slower side of Yunnan that many travelers never get to experience.",
    note: "Overnight: Lijiang",
  },
  {
    day: "Day 5",
    title: "Stand beneath Jade Dragon Snow Mountain",
    meta: "Lijiang · Mountain day",
    image: images.jadeDragon,
    alt: "Snow-covered Jade Dragon Snow Mountain",
    text: "Leave the villages and ancient towns behind and spend a day among the high peaks of Yunnan. Jade Dragon Snow Mountain offers a dramatic change of perspective, from quiet countryside to alpine scenery in a single journey.",
    note: "Overnight: Lijiang",
  },
  {
    day: "Day 6",
    title: "Lijiang, at your pace",
    meta: "Lijiang · Flexible final day",
    image: images.lijiang,
    alt: "Traditional architecture and lanterns in Lijiang",
    text: "Keep your final day flexible. Explore Lijiang at your own pace, enjoy a slow breakfast, revisit a favorite corner, or simply take your time before the journey ends.",
    note: "Journey ends in Lijiang",
  },
];

const faqs = [
  [
    "Is this a private tour or a group tour?",
    "This is a private journey designed for couples, friends, families, and small groups traveling together. You won't be joining a large coach tour with strangers. The journey is arranged around your group, allowing for a more comfortable and flexible travel experience.",
  ],
  [
    "Can the itinerary be customized?",
    "Yes. This journey is designed as a starting point rather than a fixed package. Depending on your interests, available time, and travel style, destinations, accommodations, and experiences can be adjusted. You can spend more time in Shaxi, add a few days in Shangri-La, or slow the pace even further.",
  ],
  [
    "Is this suitable for first-time visitors to China?",
    "Absolutely. This journey was specifically designed for first-time visitors who want to experience Yunnan without feeling overwhelmed. It combines well-known destinations with local experiences while keeping travel logistics simple and comfortable.",
  ],
  [
    "Do I need to speak Chinese?",
    "Not at all. Many travelers visit China without speaking Chinese. We provide support before and during your trip, and our local partners are experienced in assisting international travelers.",
  ],
  [
    "Is Yunnan difficult to travel independently?",
    "Not necessarily. Many travelers explore Yunnan on their own and have a wonderful experience. The difference is how much planning you want to do yourself. This journey is for travelers who want the freedom of independent travel without the stress of organizing every detail.",
  ],
  [
    "Who will I travel with?",
    "You'll travel with your own private driver and receive support from trusted local partners throughout the journey. Depending on the itinerary and experiences selected, local guides may also be arranged when appropriate.",
  ],
  [
    "What kind of accommodation is included?",
    "We work with carefully selected hotels and guesthouses that offer comfort, good locations, and local character. Accommodation can be tailored to different budgets and preferences, from comfortable boutique stays to higher-end properties. Specific hotel choices will be discussed during planning.",
  ],
  [
    "Are meals included?",
    "Breakfast is included throughout the journey. Lunch and dinner are generally left flexible so you can explore local restaurants and food experiences that match your tastes and dietary preferences. We're always happy to provide recommendations.",
  ],
  [
    "Are there any shopping stops?",
    "No. This journey is designed as a genuine travel experience, not a shopping tour. There are no mandatory shopping stops, tourist factories, or commission-based detours built into the itinerary.",
  ],
  [
    "How physically demanding is this journey?",
    "The journey is suitable for most travelers with a reasonable level of mobility. There is some walking in ancient towns, villages, and scenic areas, but no strenuous hiking is required. If you have accessibility requirements or mobility concerns, we can discuss suitable adjustments.",
  ],
  [
    "When is the best time to visit Yunnan?",
    "Yunnan can be visited year-round. Spring and autumn are generally comfortable, summer offers lush green landscapes, and winter often brings clear skies and beautiful mountain views. The best time ultimately depends on the type of experience you're looking for.",
  ],
  [
    "How far in advance should I book?",
    "We recommend contacting us as early as possible, especially if you're traveling during public holidays or peak travel seasons. Early planning allows us to secure the best accommodation options and make any customizations you may need.",
  ],
  [
    "What happens after I contact you?",
    "We'll start with a conversation about your travel plans, interests, and priorities. If this journey feels like the right fit, we'll help refine the details and recommend adjustments that could improve your experience. There is no pressure to book.",
  ],
];

function SectionHeading({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-cta)]">{eyebrow}</p>
      ) : null}
      <h2 className="font-serif text-4xl leading-[0.98] tracking-[-0.035em] text-[var(--brand-ink)] md:text-5xl">{title}</h2>
      {children ? <div className="mt-5 text-lg leading-8 text-[var(--brand-ink-muted)]">{children}</div> : null}
    </div>
  );
}

function ImageBlock({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-[var(--brand-soft)] ${className}`}>
      {/* Temporary remote imagery for the first product-page build. */}
      <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
    </div>
  );
}

export default function YunnanSixDayJourneyPage() {
  return (
    <main className="bg-[var(--brand-cream)]">
      <section className="relative min-h-[680px] overflow-hidden bg-stone-900 text-white md:min-h-[760px]">
        <img src={images.hero} alt="Yunnan landscape beside Erhai Lake" className="absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/15" />

        <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-end px-5 pb-14 pt-28 md:min-h-[760px] md:px-8 md:pb-20 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-white/80">Kunming → Dali → Shaxi → Lijiang · 6 days</p>
            <h1 className="max-w-4xl font-serif text-5xl leading-[0.92] tracking-[-0.045em] md:text-7xl lg:text-[5.8rem]">
              Dali, Shaxi &amp; Lijiang:
              <br />
              Your First Journey Through Yunnan
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/90 md:text-xl">
              A private journey built around local experiences, comfortable pacing, and the moments that make Yunnan feel personal.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#pricing" className="btn-brand-inverse">From ¥2,700 per person</a>
              <a href="#itinerary" className="rounded-full border border-white/50 px-6 py-3 font-bold text-white transition hover:bg-white hover:text-[var(--brand-ink)]">See the 6-day itinerary</a>
            </div>
          </div>
        </div>
      </section>

      <nav className="sticky top-14 z-30 border-b border-[var(--brand-border-subtle)] bg-[var(--brand-cream)]/95 backdrop-blur md:top-16">
        <div className="mx-auto flex max-w-7xl items-center gap-5 overflow-x-auto px-5 py-3 text-sm font-bold md:px-8 lg:px-12">
          <a href="#overview" className="whitespace-nowrap">At a glance</a>
          <a href="#why" className="whitespace-nowrap">Why this journey</a>
          <a href="#experiences" className="whitespace-nowrap">Experiences</a>
          <a href="#itinerary" className="whitespace-nowrap">Itinerary</a>
          <a href="#pricing" className="whitespace-nowrap">Pricing</a>
          <a href="#practical" className="whitespace-nowrap">Practical stuff</a>
          <a href="#faq" className="whitespace-nowrap">FAQs</a>
          <WhatsAppContact variant="nav" showDivider={false} className="ml-auto" label="Talk to us" cardTitle="Tell us a little about your travel plans." />
        </div>
      </nav>

      <section id="overview" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <SectionHeading eyebrow="At a glance" title="A slower way to see Yunnan">
          Six days, four places, one private journey. This is not a checklist tour. It is a carefully paced route through Kunming, Dali, Shaxi and Lijiang, designed to leave room for the places, people and experiences that stay with you.
        </SectionHeading>

        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-[var(--brand-border-subtle)] bg-[var(--brand-border-subtle)] sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["6 days", "5 nights"],
            ["Private journey", "Just your group"],
            ["4 places", "Kunming · Dali · Shaxi · Lijiang"],
            ["From ¥2,700", "Per person"],
          ].map(([label, value]) => (
            <div key={label} className="bg-white p-6 md:p-7">
              <p className="text-2xl font-bold tracking-tight">{label}</p>
              <p className="mt-2 text-sm leading-6 text-[var(--brand-ink-muted)]">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="why" className="border-y border-[var(--brand-border-subtle)] bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:px-12">
          <div>
            <SectionHeading eyebrow="Why this journey" title="We want you to remember how the places felt." />
          </div>
          <div className="text-lg leading-8 text-[var(--brand-ink-muted)]">
            <p>Most travelers remember the places they visited.</p>
            <p className="mt-5">We want you to remember how those places felt.</p>
            <div className="my-8 grid gap-4 sm:grid-cols-3">
              {[
                "A quiet evening in an old Tea Horse Road town.",
                "A conversation inside a traditional tie-dye workshop.",
                "A slow breakfast overlooking Erhai Lake.",
              ].map((item) => (
                <div key={item} className="rounded-xl bg-[var(--brand-soft)] p-5 text-base leading-7 text-[var(--brand-ink)]">{item}</div>
              ))}
            </div>
            <p>This journey was designed around moments like these.</p>
            <p className="mt-5 font-serif text-2xl leading-9 text-[var(--brand-ink)]">Because the best memories are rarely made in a hurry.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <SectionHeading eyebrow="Is this your kind of journey?" title="Travel for the experience, not the checklist." />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-[var(--brand-border-subtle)] bg-white p-7 md:p-9">
            <h3 className="font-serif text-3xl">You will probably enjoy this journey if...</h3>
            <ul className="mt-7 space-y-4 text-base leading-7 text-[var(--brand-ink-muted)]">
              {["You prefer experiences over checklists.", "You enjoy discovering places most visitors overlook.", "You like learning about local culture and daily life.", "You prefer traveling at a comfortable pace.", "You'd rather return home with stories than a longer list of attractions."].map((item) => <li key={item} className="flex gap-3"><span className="mt-1 text-[var(--brand-olive)]">✓</span><span>{item}</span></li>)}
            </ul>
          </div>
          <div className="rounded-2xl border border-[var(--brand-border-subtle)] bg-[var(--brand-soft)] p-7 md:p-9">
            <h3 className="font-serif text-3xl">And it may not be for you if...</h3>
            <ul className="mt-7 space-y-4 text-base leading-7 text-[var(--brand-ink-muted)]">
              {["You want to visit as many destinations as possible.", "You enjoy fast-paced coach tours.", "You're primarily looking for the lowest-cost option.", "You prefer luxury travel over cultural immersion."].map((item) => <li key={item} className="flex gap-3"><span className="mt-1 text-[var(--brand-cta)]">×</span><span>{item}</span></li>)}
            </ul>
          </div>
        </div>
      </section>

      <section id="experiences" className="bg-[#ede6dc]">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24 lg:px-12">
          <SectionHeading eyebrow="Signature experiences" title="The moments you'll remember" />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="overflow-hidden rounded-2xl bg-white">
              <ImageBlock src={images.shaxi} alt="Stone bridge and river in Shaxi" className="aspect-[16/10]" />
              <div className="p-7 md:p-8"><p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-cta)]">01</p><h3 className="mt-2 font-serif text-3xl">Slow Down in Shaxi</h3><p className="mt-4 leading-7 text-[var(--brand-ink-muted)]">Spend an evening in one of the best-preserved towns along the Ancient Tea Horse Road. As day visitors leave, the old square grows quieter, lanterns begin to glow, and Shaxi reveals a slower side of Yunnan that many travelers never get to experience.</p></div>
            </article>
            <article className="overflow-hidden rounded-2xl bg-white">
              <ImageBlock src={images.shaxiHomes} alt="Traditional Yunnan home" className="aspect-[16/10]" />
              <div className="p-7 md:p-8"><p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-cta)]">02</p><h3 className="mt-2 font-serif text-3xl">Meet the Living Traditions of Dali</h3><p className="mt-4 leading-7 text-[var(--brand-ink-muted)]">Step inside a traditional tie-dye workshop and discover a craft that has been passed down through generations. More than a demonstration, it's a chance to connect with the people, stories, and traditions that still shape daily life in Dali today.</p></div>
            </article>
            <article className="overflow-hidden rounded-2xl bg-white">
              <ImageBlock src={images.dali} alt="Erhai Lake and Dali" className="aspect-[16/10]" />
              <div className="p-7 md:p-8"><p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-cta)]">03</p><h3 className="mt-2 font-serif text-3xl">Wake Up Beside Erhai Lake</h3><p className="mt-4 leading-7 text-[var(--brand-ink-muted)]">Enjoy a slower morning by Erhai Lake, where the changing light, village life, and open landscapes encourage you to pause rather than rush. Sometimes the most memorable moments come with no schedule at all.</p></div>
            </article>
            <article className="overflow-hidden rounded-2xl bg-white">
              <ImageBlock src={images.jadeDragon} alt="Jade Dragon Snow Mountain" className="aspect-[16/10]" />
              <div className="p-7 md:p-8"><p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-cta)]">04</p><h3 className="mt-2 font-serif text-3xl">Stand Beneath Jade Dragon Snow Mountain</h3><p className="mt-4 leading-7 text-[var(--brand-ink-muted)]">Leave the villages and ancient towns behind and spend a day among the high peaks of Yunnan. The journey to Jade Dragon Snow Mountain offers a dramatic change of perspective, reminding you how quickly Yunnan's landscapes can transform from quiet countryside to alpine scenery.</p></div>
            </article>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--brand-border-subtle)] bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <SectionHeading eyebrow="Independent travel vs local support" title="Keep the freedom. Lose the friction." />
          <div className="text-lg leading-8 text-[var(--brand-ink-muted)]">
            <p>Can you visit Dali, Shaxi, and Lijiang independently? Absolutely.</p>
            <p className="mt-5">Yunnan is one of the easiest parts of China to explore on your own, and many travelers do exactly that.</p>
            <p className="mt-5">But the difference isn't whether you can do it yourself. The question is how you want the journey to feel.</p>
            <p className="mt-5">Planning transfers, navigating local transportation, researching experiences, and deciding what is truly worth your time can take far more effort than most travelers expect.</p>
            <p className="mt-5">This journey is designed for people who want the freedom of independent travel, without the stress of organizing every detail themselves.</p>
            <p className="mt-5 font-bold text-[var(--brand-ink)]">You still travel at your own pace. We simply help remove the friction.</p>
          </div>
        </div>
      </section>

      <section id="itinerary" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <SectionHeading eyebrow="Your 6 days in Yunnan" title="A route designed to breathe" />
        <div className="mt-12 space-y-8">
          {days.map((item, index) => (
            <article key={item.day} className="grid overflow-hidden rounded-2xl border border-[var(--brand-border-subtle)] bg-white lg:grid-cols-[0.92fr_1.08fr]">
              <ImageBlock src={item.image} alt={item.alt} className="min-h-[300px] rounded-none lg:min-h-[390px]" />
              <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-cta)]">{item.day}</p>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-muted)]">{item.note}</p>
                </div>
                <h3 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">{item.title}</h3>
                <p className="mt-3 text-sm font-bold text-[var(--brand-ink-muted)]">{item.meta}</p>
                <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--brand-ink-muted)]">{item.text}</p>
                {index < days.length - 1 ? <div className="mt-7 h-px bg-[var(--brand-border-subtle)]" /> : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="pricing" className="bg-[var(--brand-soft)]">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24 lg:px-12">
          <SectionHeading eyebrow="Pricing & travel styles" title="Choose the journey that fits you" />
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--brand-ink-muted)]">Every traveler has different expectations for comfort, accommodation, and travel style. We've designed this journey with three accommodation levels to help you choose the experience that suits you best.</p>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {[
              { name: "Essential", price: "¥2,700", intro: "Perfect for travelers who value comfort, authenticity, and great value.", hotel: "Comfortable 3-star hotels", ideal: "Friends · Couples · First-time visitors" },
              { name: "Comfort", price: "¥2,900", intro: "A balanced option combining upgraded hotels with a more comfortable travel experience.", hotel: "Selected 4-star hotels", ideal: "Most travelers · Couples · Small private groups", featured: true },
              { name: "Premium", price: "¥3,500", intro: "For travelers who value boutique stays and a more refined travel experience.", hotel: "Selected 5-star hotels", ideal: "Honeymooners · Special occasions · Comfort-focused travelers" },
            ].map((tier) => (
              <article key={tier.name} className={`relative flex flex-col rounded-2xl border bg-white p-7 md:p-8 ${tier.featured ? "border-[var(--brand-cta)] shadow-[0_14px_40px_rgba(80,40,24,0.10)]" : "border-[var(--brand-border-subtle)]"}`}>
                {tier.featured ? <span className="absolute right-6 top-6 rounded-full bg-[var(--brand-cta)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white">Most popular</span> : null}
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-muted)]">{tier.name}</p>
                <p className="mt-4 font-serif text-5xl tracking-[-0.04em]">From {tier.price}</p>
                <p className="mt-2 text-sm text-[var(--brand-ink-muted)]">per person</p>
                <p className="mt-7 min-h-[72px] leading-7 text-[var(--brand-ink-muted)]">{tier.intro}</p>
                <div className="my-7 h-px bg-[var(--brand-border-subtle)]" />
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--brand-muted)]">Included</p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--brand-ink-muted)]">
                  <li>✓ {tier.hotel}</li>
                  <li>✓ Private transportation</li>
                  <li>✓ Local experiences</li>
                  <li>✓ Travel support throughout the journey</li>
                </ul>
                <p className="mt-7 text-xs font-bold uppercase tracking-[0.15em] text-[var(--brand-muted)]">Ideal for</p>
                <p className="mt-3 text-sm leading-6 text-[var(--brand-ink-muted)]">{tier.ideal}</p>
                <a href="#contact" className="btn-brand mt-8 w-full">Plan this style</a>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-8 rounded-2xl border border-[var(--brand-border-subtle)] bg-white p-7 md:grid-cols-2 md:p-9">
            <div>
              <h3 className="font-serif text-2xl">What's included?</h3>
              <ul className="mt-5 grid gap-3 text-sm leading-6 text-[var(--brand-ink-muted)] sm:grid-cols-2">
                {['Accommodation', 'Private transportation', 'Train tickets', 'Signature experiences', 'Travel insurance', 'Local support throughout the journey'].map((item) => <li key={item}>✓ {item}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-2xl">What's not included?</h3>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-[var(--brand-ink-muted)]">
                {['International flights', 'Lunches and dinners', 'Personal expenses', 'Optional upgrades'].map((item) => <li key={item}>× {item}</li>)}
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-dashed border-[var(--brand-cta)]/40 bg-white/70 p-7 md:p-9">
            <h3 className="font-serif text-2xl">Every journey is personalized</h3>
            <p className="mt-4 max-w-3xl leading-7 text-[var(--brand-ink-muted)]">The prices above are intended as a guide. Final pricing depends on travel dates, group size, hotel preferences, and any customizations you would like to make. We'll provide a personalized proposal after learning more about your trip.</p>
          </div>
        </div>
      </section>

      <section id="practical" className="border-y border-[var(--brand-border-subtle)] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24 lg:px-12">
          <SectionHeading eyebrow="Practical stuff" title="Simple logistics, local support" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Getting there", "Start in Kunming. The journey finishes in Lijiang, making it easy to continue your China trip from Yunnan."],
              ["Accommodation", "Carefully selected hotels and guesthouses with comfort, good locations, and local character."],
              ["Transport", "Private transportation and local travel support throughout the journey, with train tickets where required."],
              ["Meals", "Breakfast included. Lunch and dinner stay flexible so you can explore local food on your own terms."],
            ].map(([title, text]) => <article key={title} className="rounded-2xl border border-[var(--brand-border-subtle)] p-6"><h3 className="font-serif text-2xl">{title}</h3><p className="mt-3 text-sm leading-7 text-[var(--brand-ink-muted)]">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <SectionHeading eyebrow="Meet Hidden China Travel" title="Born in Yunnan. Shaped by experiences abroad." />
          <div className="text-lg leading-8 text-[var(--brand-ink-muted)]">
            <p>Hi, I'm Jiao. I was born and raised in Yunnan.</p>
            <p className="mt-5">For most of my life, these places were simply home: the local markets, small villages, mountain roads, and historic towns that many travelers pass by without ever noticing.</p>
            <p className="mt-5">A few years ago, I spent more than three years living abroad. For the first time, I experienced what it felt like to be completely new to a country. Simple things suddenly became complicated: how people get around, where locals actually go, what customs to know, and what mistakes to avoid.</p>
            <p className="mt-5">I learned how much easier travel becomes when you have someone local you can trust. When I returned to Yunnan, I began to see my home differently.</p>
            <p className="mt-5">That's why I started Hidden China Travel. Not to help people see more places, but to help them feel more comfortable, more connected, and more confident exploring China.</p>
            <p className="mt-7 font-serif text-2xl leading-9 text-[var(--brand-ink)]">To make China feel a little less intimidating, and a lot more personal.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#2d2924] text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24 lg:px-12">
          <SectionHeading eyebrow="Who you'll be traveling with" title="Local people behind the journey" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              ["01", "Licensed Local Guides", "Our local guides bring destinations to life through stories, culture, and local knowledge. They don't just show you where to go. They help you understand what you're seeing."],
              ["02", "Experienced Drivers", "Many of Yunnan's most rewarding places are located beyond train stations and major tourist areas. Our experienced local drivers help you travel comfortably, safely, and efficiently."],
              ["03", "Local Travel Support", "Travel rarely goes exactly according to plan. That's why local support is available throughout your journey, providing assistance whenever you need it."],
            ].map(([num, title, text]) => <article key={title} className="rounded-2xl border border-white/15 bg-white/5 p-7"><p className="text-xs font-bold tracking-[0.18em] text-white/50">{num}</p><h3 className="mt-5 font-serif text-2xl">{title}</h3><p className="mt-4 text-sm leading-7 text-white/70">{text}</p></article>)}
          </div>
          <div className="mt-12 grid gap-2 text-center font-serif text-3xl md:text-4xl"><p>You focus on the experience.</p><p className="text-white/55">We take care of everything behind the scenes.</p></div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading eyebrow="Frequently asked questions" title="Before you decide" />
        <div className="mt-10 divide-y divide-[var(--brand-border-subtle)] rounded-2xl border border-[var(--brand-border-subtle)] bg-white px-6 md:px-8">
          {faqs.map(([question, answer]) => (
            <details key={question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-bold text-[var(--brand-ink)] marker:hidden">
                <span>{question}</span><span className="text-2xl font-normal text-[var(--brand-muted)] transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="max-w-3xl pt-4 text-sm leading-7 text-[var(--brand-ink-muted)]">{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden bg-[var(--brand-cta)] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">Ready to plan your first journey through Yunnan?</p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] md:text-6xl">Tell us a little about your travel plans.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">We'll help you decide whether this journey is the right fit for you. There is no pressure to book. Planning your journey starts with a conversation.</p>
          </div>
          <WhatsAppContact variant="nav" tone="onTeal" showDivider={false} label="Start the conversation" cardTitle="Tell us a little about your travel plans." className="justify-self-start lg:justify-self-end" />
        </div>
      </section>
    </main>
  );
}
