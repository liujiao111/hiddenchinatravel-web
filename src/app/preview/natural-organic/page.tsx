import Image from "next/image";
import Link from "next/link";
import { UiPreviewBar } from "@/app/_components/ui-preview-bar";
import { getDictionary } from "@/i18n/get-dictionary";
import { getLocale } from "@/i18n/get-locale";
import { SITE_HERO_PATH, SITE_LOGO_PATH, SITE_NAME } from "@/lib/constants";

const navLinks = [
  { href: "#guides", label: "Guides" },
  { href: "#kit", label: "Survival Kit" },
  { href: "#tools", label: "Tools" },
  { href: "#about", label: "About" },
] as const;

const trustItems = [
  "Updated for 2026",
  "Written for foreign visitors",
  "No sponsored content",
  "Transparent affiliate links",
] as const;

const topics = [
  {
    title: "Payments",
    body: "Alipay, WeChat Pay, and what actually works with a foreign card.",
    href: "#",
  },
  {
    title: "Internet",
    body: "SIM, eSIM, and staying connected without the usual surprises.",
    href: "#",
  },
  {
    title: "Maps",
    body: "Why Google Maps struggles — and the apps travelers rely on.",
    href: "#",
  },
  {
    title: "Transport",
    body: "Trains, metro, and booking rides with a passport.",
    href: "#",
  },
  {
    title: "Hotels",
    body: "Check-in rules for foreign guests, explained plainly.",
    href: "#",
  },
  {
    title: "Visa & entry",
    body: "Visa-free, transit, or tourist visa — check before you book.",
    href: "#",
  },
] as const;

const tools = [
  {
    title: "China Itinerary Planner",
    body: "Sketch cities and days before you land.",
    cta: "Open planner",
  },
  {
    title: "China Visa Checker",
    body: "See visa-free and 240-hour transit options by passport.",
    cta: "Check visa rules",
  },
  {
    title: "Survival Kit",
    body: "First-trip essentials for payments, maps, and connectivity.",
    cta: "Get Free Survival Kit",
  },
] as const;

export default async function NaturalOrganicPreviewPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);

  return (
    <>
      <UiPreviewBar current="natural-organic" copy={dict.previewBar} />

      {/* Nav */}
      <header className="border-b border-stone-200 bg-[#faf6f1]/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 md:px-12 md:py-5">
          <Link href="/preview/natural-organic" className="flex items-center gap-3">
            <span className="relative h-10 w-10 overflow-hidden rounded-full border border-stone-200">
              <Image
                src={SITE_LOGO_PATH}
                alt=""
                fill
                className="object-cover"
                sizes="40px"
              />
            </span>
            <span className="font-[family-name:var(--font-organic-serif)] text-lg font-medium tracking-tight text-stone-800 md:text-xl">
              {SITE_NAME}
            </span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex" aria-label="Preview">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-stone-600 transition-colors duration-300 hover:text-stone-900"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <label className="sr-only" htmlFor="organic-search">
              Search
            </label>
            <input
              id="organic-search"
              type="search"
              placeholder="Search guides…"
              className="hidden w-44 px-5 py-3 text-sm bg-white border border-stone-200 rounded-full text-stone-800 placeholder:text-stone-400 focus:border-stone-400 focus:ring-2 focus:ring-stone-200 transition-all duration-300 sm:block md:w-52"
            />
            <a
              href="#kit"
              className="px-6 py-3 rounded-full font-medium transition-colors duration-300 active:scale-95 bg-[#b85c38] text-[#faf6f1] hover:bg-[#9e4d2f] text-sm"
            >
              Survival Kit
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-stone-200">
          <div className="absolute inset-0">
            <Image
              src={SITE_HERO_PATH}
              alt=""
              fill
              priority
              className="object-cover object-center opacity-90"
              sizes="100vw"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-[#3d3429]/55"
            />
          </div>

          <div className="relative mx-auto flex min-h-[70vh] max-w-6xl items-center px-6 py-16 md:min-h-[80vh] md:px-12 md:py-24">
            <div className="max-w-xl">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#e8dfd2]">
                China travel for foreigners
              </p>
              <h1 className="font-[family-name:var(--font-organic-serif)] text-4xl leading-tight text-[#faf6f1] md:text-5xl lg:text-6xl">
                Plan your China trip with calmer systems.
              </h1>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-[#f3efe8]/90 md:text-base">
                Practical guides and tools for payments, maps, visas, and the
                first days after you land — written for visitors, not locals.
              </p>

              <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
                {trustItems.map((item) => (
                  <li
                    key={item}
                    className="inline-flex items-center gap-2 text-sm text-[#f3efe8]/85"
                  >
                    <span
                      aria-hidden
                      className="h-1.5 w-1.5 rounded-full bg-[#d4a574]"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#tools"
                  className="inline-flex justify-center px-6 py-3 rounded-full font-medium transition-colors duration-300 active:scale-95 bg-[#b85c38] text-[#faf6f1] hover:bg-[#9e4d2f]"
                >
                  China Itinerary Planner
                </a>
                <a
                  href="#kit"
                  className="inline-flex justify-center px-6 py-3 rounded-full font-medium transition-colors duration-300 active:scale-95 border border-[#faf6f1]/50 bg-[#faf6f1]/10 text-[#faf6f1] hover:bg-[#faf6f1]/20"
                >
                  Get Free Survival Kit
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Topic hubs */}
        <section id="guides" className="py-16 md:py-24 px-6 md:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <h2 className="font-[family-name:var(--font-organic-serif)] text-2xl text-stone-800 md:text-3xl">
                Explore the systems behind the trip
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-stone-600 md:text-base">
                Topic hubs for the friction points foreign travelers hit most —
                warm, practical, and kept current.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 md:mt-12 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
              {topics.map((topic) => (
                <a
                  key={topic.title}
                  href={topic.href}
                  className="bg-[#faf6f1] rounded-[2rem] border border-stone-200 p-6 md:p-8 shadow-sm transition-colors duration-300 hover:border-stone-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-300"
                >
                  <h3 className="font-[family-name:var(--font-organic-serif)] text-xl text-stone-800 md:text-2xl">
                    {topic.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600 md:text-base">
                    {topic.body}
                  </p>
                  <span className="mt-5 inline-flex text-sm font-medium text-[#5c6b4a] transition-colors duration-300 group-hover:text-[#4a5740]">
                    Read more →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Survival Kit band */}
        <section
          id="kit"
          className="border-y border-stone-200 bg-[#e8dfd2] py-16 md:py-24 px-6 md:px-12"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h2 className="font-[family-name:var(--font-organic-serif)] text-2xl text-stone-800 md:text-3xl">
                Survival Kit for your first days
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-stone-600 md:text-base">
                One calm checklist for payments, connectivity, maps, and booking
                tools — so you are not googling under airport pressure.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex shrink-0 justify-center px-6 py-3 rounded-full font-medium transition-colors duration-300 active:scale-95 bg-[#5c6b4a] text-[#faf6f1] hover:bg-[#4a5740]"
            >
              Browse the Survival Kit
            </a>
          </div>
        </section>

        {/* Tools */}
        <section id="tools" className="py-16 md:py-24 px-6 md:px-12">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-[family-name:var(--font-organic-serif)] text-2xl text-stone-800 md:text-3xl">
              Tools that remove guesswork
            </h2>
            <p className="mt-3 max-w-xl text-sm text-stone-600 md:text-base">
              Lightweight planners and checkers — no install, no noise.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
              {tools.map((tool) => (
                <div
                  key={tool.title}
                  className="bg-[#faf6f1] rounded-[2rem] border border-stone-200 p-6 md:p-8"
                >
                  <h3 className="font-[family-name:var(--font-organic-serif)] text-xl text-stone-800 md:text-2xl">
                    {tool.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600 md:text-base">
                    {tool.body}
                  </p>
                  <button
                    type="button"
                    className="mt-6 px-6 py-3 rounded-full font-medium transition-colors duration-300 active:scale-95 border border-stone-300 text-stone-800 hover:bg-white focus-visible:ring-2 focus-visible:ring-stone-300"
                  >
                    {tool.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About blurb */}
        <section
          id="about"
          className="border-t border-stone-200 bg-[#faf6f1] py-16 md:py-24 px-6 md:px-12"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-[family-name:var(--font-organic-serif)] text-2xl text-stone-800 md:text-3xl">
              Built from traveler friction, not travel-brochure gloss
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-stone-600 md:text-base">
              Hidden China Travel is for foreign visitors who want the system
              explained clearly — payments, registration, apps, and entry —
              before the trip gets complicated.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex px-6 py-3 rounded-full font-medium transition-colors duration-300 active:scale-95 bg-[#b85c38] text-[#faf6f1] hover:bg-[#9e4d2f]"
            >
              Meet the founder
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200 bg-[#3d3429] py-16 text-[#f3efe8] md:py-20 px-6 md:px-12">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
          <div>
            <p className="font-[family-name:var(--font-organic-serif)] text-xl">
              {SITE_NAME}
            </p>
            <p className="mt-3 text-sm text-[#d4c8b8]">
              Practical China travel guides for foreign visitors.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-[#e8dfd2]">Explore</p>
            <ul className="mt-3 space-y-2 text-sm text-[#d4c8b8]">
              <li>
                <a href="#guides" className="transition-colors duration-300 hover:text-white">
                  Guides
                </a>
              </li>
              <li>
                <a href="#tools" className="transition-colors duration-300 hover:text-white">
                  Tools
                </a>
              </li>
              <li>
                <a href="#kit" className="transition-colors duration-300 hover:text-white">
                  Survival Kit
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium text-[#e8dfd2]">Note</p>
            <p className="mt-3 text-sm text-[#d4c8b8]">
              This is a static UI preview route. The live site remains at{" "}
              <Link href="/" className="underline underline-offset-2 hover:text-white">
                /
              </Link>
              .
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
