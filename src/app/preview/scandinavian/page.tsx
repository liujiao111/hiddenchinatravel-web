import Image from "next/image";
import Link from "next/link";
import { UiPreviewBar } from "@/app/_components/ui-preview-bar";
import { getDictionary } from "@/i18n/get-dictionary";
import { getLocale } from "@/i18n/get-locale";
import { SITE_LOGO_PATH, SITE_NAME } from "@/lib/constants";

const navLinks = [
  { href: "#guides", label: "Guides" },
  { href: "#kit", label: "Survival Kit" },
  { href: "#tools", label: "Tools" },
  { href: "#about", label: "About" },
] as const;

const topics = [
  {
    title: "Payments",
    body: "Alipay, WeChat Pay, and paying calmly with a foreign card.",
  },
  {
    title: "Internet",
    body: "SIM, eSIM, and staying connected without the usual stress.",
  },
  {
    title: "Maps",
    body: "What works when Google Maps does not.",
  },
  {
    title: "Transport",
    body: "Trains, metro, and booking with a passport.",
  },
  {
    title: "Hotels",
    body: "Foreign-guest check-in, explained without drama.",
  },
  {
    title: "Visa & entry",
    body: "Visa-free, transit, or tourist visa — before you book.",
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
    body: "See visa-free and 240-hour options by passport.",
    cta: "Check visa rules",
  },
  {
    title: "Survival Kit",
    body: "First-trip essentials for payments, maps, and data.",
    cta: "Open Survival Checklist",
  },
] as const;

export default async function ScandinavianPreviewPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);

  return (
    <div className="bg-[#f5f2ed] text-[#333333]">
      <UiPreviewBar current="scandinavian" copy={dict.previewBar} />

      <header className="border-b border-[#d4cdc5]/40 bg-[#f5f2ed]/90">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4 md:px-12 lg:px-20">
          <Link href="/preview/scandinavian" className="flex items-center gap-3">
            <span className="relative h-9 w-9 overflow-hidden rounded-sm border border-[#d4cdc5]/40">
              <Image
                src={SITE_LOGO_PATH}
                alt=""
                fill
                className="object-cover"
                sizes="36px"
              />
            </span>
            <span className="text-lg font-light tracking-wide text-[#333333] md:text-xl">
              {SITE_NAME}
            </span>
          </Link>

          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Preview"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-light tracking-wide text-[#5c564f] transition-colors duration-500 hover:text-[#333333]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <label className="sr-only" htmlFor="scandi-header-search">
              Search
            </label>
            <input
              id="scandi-header-search"
              type="search"
              placeholder="Search guides"
              className="hidden w-40 border-b border-[#d4cdc5]/40 bg-transparent py-2 text-sm font-light text-[#333333] placeholder:text-[#9a9288] focus:outline-none focus:ring-2 focus:ring-[#5a7a6b]/30 sm:block md:w-48"
            />
            <a
              href="#kit"
              className="bg-[#5a7a6b] px-5 py-2.5 text-sm font-light tracking-wide text-[#f5f2ed] transition-colors duration-300 hover:bg-[#4d6b5d] active:scale-[0.98]"
            >
              Survival Kit
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="flex flex-col items-center px-6 py-10 text-center md:px-12 md:py-14 lg:px-20 lg:py-16">
          <p className="mb-4 text-[11px] font-light uppercase tracking-[0.28em] text-[#a69483]">
            the art of traveling simply
          </p>

          <h1 className="max-w-3xl text-3xl font-light leading-[1.15] tracking-wide text-[#333333] md:text-4xl">
            Help you explore hidden china
          </h1>

          <div
            aria-hidden
            className="mx-auto mt-5 h-px w-12 bg-[#a69483]/50"
          />

          <p className="mx-auto mt-5 max-w-md text-sm font-light leading-relaxed text-[#8a7d70] md:text-base">
            Payments, maps, visas, and first days after you land — without the
            noise.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="#tools"
              className="bg-[#5a7a6b] px-6 py-3 text-sm font-light tracking-wide text-[#f5f2ed] transition-colors duration-300 hover:bg-[#4d6b5d] active:scale-[0.98]"
            >
              china itinerary planner
            </a>
            <a
              href="#kit"
              className="border border-[#d4cdc5]/40 bg-transparent px-6 py-3 text-sm font-light tracking-wide text-[#333333] transition-colors duration-300 hover:bg-[#efeae3] active:scale-[0.98]"
            >
              get the survival kit
            </a>
          </div>

          <form
            action="/search"
            method="get"
            className="mx-auto mt-8 w-full max-w-md"
            role="search"
          >
            <label htmlFor="scandi-hero-search" className="sr-only">
              Search guides and tools
            </label>
            <div className="flex items-end gap-3 border-b border-[#d4cdc5]/60 focus-within:border-[#a69483] transition-colors duration-500">
              <input
                id="scandi-hero-search"
                name="q"
                type="search"
                placeholder="search visas, payments, maps…"
                className="min-w-0 flex-1 bg-transparent px-1 py-2.5 text-center text-sm font-light tracking-wide text-[#333333] placeholder:text-[#b5a99c] focus:outline-none md:text-base"
              />
              <button
                type="submit"
                className="shrink-0 pb-2.5 text-sm font-light tracking-wide text-[#a69483] transition-colors duration-500 hover:text-[#333333] active:scale-[0.98]"
              >
                search →
              </button>
            </div>
          </form>
        </section>

        <section
          id="guides"
          className="border-t border-[#d4cdc5]/40 py-20 md:py-28 lg:py-36 px-6 md:px-12 lg:px-20"
        >
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto max-w-lg text-center">
              <h2 className="text-xl font-light tracking-wide text-[#333333] md:text-3xl">
                explore the systems
              </h2>
              <p className="mt-4 text-sm font-light leading-relaxed text-[#8a7d70] md:text-base">
                quiet topic hubs for the friction points foreign travelers meet
                most often.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 md:gap-10">
              {topics.map((topic) => (
                <a
                  key={topic.title}
                  href="#"
                  className="rounded-sm border border-[#d4cdc5]/40 bg-[#faf8f5] p-6 transition-colors duration-500 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5a7a6b]/30 md:p-8"
                >
                  <h3 className="text-lg font-light tracking-wide text-[#333333] md:text-xl">
                    {topic.title}
                  </h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-[#8a7d70] md:text-base">
                    {topic.body}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section
          id="kit"
          className="border-y border-[#d4cdc5]/40 bg-[#efeae3] py-20 md:py-28 lg:py-36 px-6 md:px-12 lg:px-20"
        >
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-xl font-light tracking-wide text-[#333333] md:text-3xl">
              survival kit
            </h2>
            <p className="mt-4 text-sm font-light leading-relaxed text-[#8a7d70] md:text-base">
              a calm checklist for payments, connectivity, maps, and booking —
              prepared before airport pressure.
            </p>
            <a
              href="#"
              className="mt-10 inline-flex bg-[#5a7a6b] px-6 py-3 text-sm font-light tracking-wide text-[#f5f2ed] transition-colors duration-300 hover:bg-[#4d6b5d] active:scale-[0.98]"
            >
              browse the kit →
            </a>
          </div>
        </section>

        <section
          id="tools"
          className="py-20 md:py-28 lg:py-36 px-6 md:px-12 lg:px-20"
        >
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto max-w-lg text-center">
              <h2 className="text-xl font-light tracking-wide text-[#333333] md:text-3xl">
                tools
              </h2>
              <p className="mt-4 text-sm font-light text-[#8a7d70] md:text-base">
                lightweight planners and checkers. no noise.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
              {tools.map((tool) => (
                <div
                  key={tool.title}
                  className="rounded-sm border border-[#d4cdc5]/40 bg-[#faf8f5] p-6 transition-colors duration-500 md:p-8"
                >
                  <h3 className="text-lg font-light tracking-wide text-[#333333] md:text-xl">
                    {tool.title}
                  </h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-[#8a7d70] md:text-base">
                    {tool.body}
                  </p>
                  <button
                    type="button"
                    className="mt-8 text-sm font-light tracking-wide text-[#a69483] transition-colors duration-500 hover:text-[#333333] active:scale-[0.98] focus:outline-none"
                  >
                    {tool.cta} →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="about"
          className="border-t border-[#d4cdc5]/40 py-20 md:py-28 lg:py-36 px-6 md:px-12 lg:px-20"
        >
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-xl font-light tracking-wide text-[#333333] md:text-3xl">
              warmth through restraint
            </h2>
            <p className="mt-6 text-sm font-light leading-relaxed text-[#8a7d70] md:text-base">
              hidden china travel explains the systems foreign visitors actually
              meet — with room to breathe.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#d4cdc5]/40 py-16 px-6 text-center md:py-20 md:px-12 lg:px-20">
        <p className="text-sm font-light tracking-wide text-[#a69483]">
          {SITE_NAME.toLowerCase()}
        </p>
        <p className="mt-3 text-xs font-light text-[#b5a99c]">
          ui preview only ·{" "}
          <Link
            href="/"
            className="underline underline-offset-4 transition-colors duration-500 hover:text-[#333333]"
          >
            live homepage
          </Link>
        </p>
      </footer>
    </div>
  );
}
