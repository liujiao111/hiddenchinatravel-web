import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_LOGO_PATH } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Audley-style Home Preview | Hidden China Travel",
  robots: { index: false, follow: false },
};

const destinations = [
  { title: "Dali", image: "/brand/destinations/yunnan/city-dali.webp" },
  { title: "Shaxi", image: "/brand/destinations/yunnan/hero-erhai.webp" },
  { title: "Lijiang", image: "/brand/destinations/yunnan/city-lijiang.webp" },
  { title: "Yunnan", image: "/brand/destinations/yunnan/food-erhai.webp" },
];

const journeyIdeas = [
  {
    title: "Dali, Shaxi & Lijiang",
    kicker: "6-day private journey",
    text: "A slower first journey through Yunnan, with private transport, local experiences and room to breathe.",
    image: "/brand/destinations/yunnan/hero-erhai.webp",
    href: "/journeys/dali-shaxi-lijiang-tour",
  },
  {
    title: "Dali at a slower pace",
    kicker: "Travel idea",
    text: "Lake mornings, Bai culture, old-town evenings and enough time to enjoy the place instead of racing through it.",
    image: "/brand/destinations/yunnan/city-dali.webp",
    href: "/china-destinations",
  },
  {
    title: "Lijiang & beyond",
    kicker: "Travel idea",
    text: "Old-town lanes, mountain landscapes and a more personal route into northwest Yunnan.",
    image: "/brand/destinations/yunnan/city-lijiang.webp",
    href: "/china-destinations",
  },
];

const whyUs = [
  ["Private journeys", "Travel with your own party, not a coach group."],
  ["Local perspective", "Born in Yunnan and shaped by experiences abroad."],
  ["No forced shopping", "Your time is for the journey, not commission stops."],
  ["Practical support", "Help with the details that make China feel easier."],
];

export default function AudleyHomePreviewPage() {
  return (
    <main className="bg-[#f6f4ef] text-[#222]">
      <div className="border-b border-black/10 bg-white">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-3 text-xs md:px-8">
          <p>Hidden China Travel · Yunnan, China</p>
          <div className="hidden items-center gap-6 md:flex">
            <span>Travel guides</span>
            <span>WhatsApp</span>
            <Link href="/contact" className="font-semibold underline underline-offset-4">Start a conversation</Link>
          </div>
        </div>
      </div>

      <header className="bg-white">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-5 py-5 md:px-8">
          <button className="text-xs font-semibold uppercase tracking-[0.18em] md:hidden">Menu</button>
          <Link href="/" className="relative block h-14 w-44 md:h-16 md:w-52">
            <Image src={SITE_LOGO_PATH} alt="Hidden China Travel" fill className="object-contain" sizes="208px" priority />
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <Link href="/china-destinations">Destinations</Link>
            <Link href="/travel-china-guide">Travel guides</Link>
            <Link href="/journeys/dali-shaxi-lijiang-tour">Journeys</Link>
            <Link href="/about">About us</Link>
          </nav>
          <Link href="/contact" className="border border-[#7b2f25] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#7b2f25] md:px-7">
            Request a journey
          </Link>
        </div>
      </header>

      <section className="relative min-h-[650px] overflow-hidden md:min-h-[760px]">
        <Image src="/brand/hero-lijiang.webp" alt="Yunnan mountain landscape" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative mx-auto flex min-h-[650px] max-w-[1440px] items-end px-5 pb-16 pt-24 md:min-h-[760px] md:px-8 md:pb-24">
          <div className="max-w-3xl text-white">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em]">Hidden China Travel</p>
            <h1 className="font-serif text-5xl leading-[0.98] md:text-7xl lg:text-8xl">China, at Your Pace.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/90 md:text-xl">
              Private journeys, practical local guidance, and a more personal way to experience Yunnan and China.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/journeys/dali-shaxi-lijiang-tour" className="bg-white px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[#222]">Explore our journeys</Link>
              <Link href="/contact" className="border border-white px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white">Start a conversation</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-5 md:px-8">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8f6b57]">Discover Yunnan</p>
              <h2 className="mt-3 font-serif text-4xl md:text-6xl">Where do you want to begin?</h2>
            </div>
            <Link href="/china-destinations" className="hidden text-sm font-semibold underline underline-offset-4 md:block">View destinations</Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {destinations.map((item) => (
              <Link key={item.title} href="/china-destinations" className="group relative min-h-[440px] overflow-hidden bg-black">
                <Image src={item.image} alt={item.title} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width:1024px) 25vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <h3 className="font-serif text-4xl">{item.title}</h3>
                  <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em]">I want to explore →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-5xl px-5 text-center md:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8f6b57]">Our point of view</p>
          <h2 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">The best journeys are not about seeing more. They are about feeling more connected to where you are.</h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-black/65">
            Hidden China Travel began in Yunnan, with one simple idea: travel feels better when you have enough confidence, local context and time to actually experience a place.
          </p>
          <Link href="/about" className="mt-8 inline-block text-sm font-semibold underline underline-offset-4">Read our story</Link>
        </div>
      </section>

      <section className="bg-[#e8e3da] py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8f6b57]">How it works</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">A journey shaped around you</h2>
          <div className="mt-12 grid gap-10 border-t border-black/20 pt-10 md:grid-cols-3">
            {[
              ["01", "Tell us what matters", "Share your dates, pace, interests and the kind of experience you want."],
              ["02", "We shape the journey", "We work with trusted local partners to turn those ideas into a practical proposal."],
              ["03", "Travel with support", "You keep the freedom of private travel, with the right support before and during the trip."],
            ].map(([n, title, body]) => (
              <div key={n}>
                <p className="text-sm font-bold text-[#7b2f25]">{n}</p>
                <h3 className="mt-5 font-serif text-3xl">{title}</h3>
                <p className="mt-4 leading-8 text-black/65">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-5 md:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8f6b57]">Journey ideas</p>
            <h2 className="mt-3 font-serif text-4xl md:text-6xl">A starting point, not a fixed package</h2>
            <p className="mt-5 text-lg leading-8 text-black/60">Use these journeys as inspiration. Dates, pace, hotels and experiences can be shaped around your trip.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {journeyIdeas.map((item) => (
              <Link key={item.title} href={item.href} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-black">
                  <Image src={item.image} alt={item.title} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width:1024px) 33vw, 100vw" />
                </div>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#8f6b57]">{item.kicker}</p>
                <h3 className="mt-2 font-serif text-3xl">{item.title}</h3>
                <p className="mt-3 leading-7 text-black/60">{item.text}</p>
                <p className="mt-4 text-sm font-semibold underline underline-offset-4">Explore this idea</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="grid min-h-[620px] bg-[#222] text-white lg:grid-cols-2">
        <div className="relative min-h-[480px] lg:min-h-full">
          <Image src="/brand/founder/portrait.webp" alt="Joy Liu, founder of Hidden China Travel" fill className="object-cover" sizes="50vw" />
        </div>
        <div className="flex items-center px-7 py-16 md:px-14 lg:px-20">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d8b69e]">Meet Joy Liu</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">Born in Yunnan. Shaped by experiences abroad.</h2>
            <p className="mt-7 text-lg leading-9 text-white/75">I know Yunnan as home, but I also know what it feels like to arrive somewhere as the foreigner. Hidden China Travel grew from both perspectives.</p>
            <Link href="/about" className="mt-8 inline-block border-b border-white pb-1 text-sm font-semibold">Read the story behind Hidden China Travel</Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8f6b57]">Why travel with us</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Personal by design</h2>
          </div>
          <div className="mt-12 grid gap-px bg-black/10 md:grid-cols-4">
            {whyUs.map(([title, body]) => (
              <div key={title} className="bg-white px-6 py-8 md:min-h-[220px]">
                <h3 className="font-serif text-2xl">{title}</h3>
                <p className="mt-4 leading-7 text-black/60">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[560px] overflow-hidden">
        <Image src="/brand/destinations/yunnan/hero-erhai.webp" alt="Erhai Lake in Yunnan" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative mx-auto flex min-h-[560px] max-w-[1440px] items-center px-5 md:px-8">
          <div className="max-w-2xl text-white">
            <p className="text-xs font-bold uppercase tracking-[0.2em]">China, at Your Pace.</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">Ready to start with Yunnan?</h2>
            <p className="mt-6 text-lg leading-8 text-white/85">Tell us a little about your plans. We will help you decide whether one of our journeys is the right fit.</p>
            <Link href="/contact" className="mt-8 inline-block bg-white px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[#222]">Start a conversation</Link>
          </div>
        </div>
      </section>

      <footer className="bg-[#1f1f1f] py-14 text-white">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-5 md:grid-cols-4 md:px-8">
          <div className="md:col-span-2">
            <p className="font-serif text-3xl">Hidden China Travel</p>
            <p className="mt-4 max-w-md leading-7 text-white/60">Private Yunnan journeys, local support and practical China travel guidance for international visitors.</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/50">Explore</p>
            <div className="mt-4 space-y-2 text-sm text-white/75"><p>Yunnan journeys</p><p>China travel guides</p><p>Destinations</p></div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/50">Hidden China Travel</p>
            <div className="mt-4 space-y-2 text-sm text-white/75"><p>About Joy</p><p>Contact</p><p>WhatsApp</p></div>
          </div>
        </div>
      </footer>
    </main>
  );
}
