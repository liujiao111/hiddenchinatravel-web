import Link from "next/link";

export function HomeHeroCopy() {
  return (
    <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 items-center px-4 pb-12 pt-20 md:px-8 md:pb-16 md:pt-24 lg:px-12 lg:pb-20">
      <div className="w-full max-w-2xl text-left">
        <h1 className="mb-6 max-w-2xl font-serif text-4xl font-bold leading-[1.05] tracking-tight text-[var(--brand-ink)] [text-shadow:0_1px_0_rgba(250,246,239,0.9),0_0_28px_rgba(250,246,239,0.75)] md:text-6xl">
          China, at Your Pace.
        </h1>

        <p className="max-w-xl text-base font-normal leading-8 text-[var(--brand-ink)] [text-shadow:0_1px_0_rgba(250,246,239,0.9),0_0_22px_rgba(250,246,239,0.75)] md:text-lg">
          Discover a more personal side of China through carefully designed
          journeys, practical local guidance, and support from people who know
          it best.
        </p>

        <p className="mt-6 text-sm font-bold leading-6 tracking-wide text-[var(--brand-ink)] [text-shadow:0_1px_0_rgba(250,246,239,0.9),0_0_20px_rgba(250,246,239,0.8)] md:text-base">
          Born in Yunnan.
          <br />
          Shaped by experiences abroad.
        </p>

        <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <Link
            href="/journeys/dali-shaxi-lijiang-tour"
            className="btn-hero inline-flex min-h-12 w-full items-center justify-center px-8 py-3.5 text-base sm:w-auto md:px-10"
          >
            Explore Our Journeys
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/70 bg-white/20 px-8 py-3.5 text-sm font-bold text-[var(--brand-cta)] transition-all duration-300 hover:border-white hover:bg-white/35 sm:w-auto md:px-10"
          >
            Start the Conversation
          </Link>
        </div>
      </div>
    </div>
  );
}
