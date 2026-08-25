import { DestinationPhotoSlot } from "@/app/_components/destinations/destination-photo-slot";
import type { RegionDestination } from "@/lib/destinations/types";
import { PRIMARY_CTA_LABEL, SECONDARY_CTA_LABEL } from "@/lib/trust/copy";
import Link from "next/link";

type Props = {
  destination: RegionDestination;
};

export function DestinationHero({ destination }: Props) {
  return (
    <section id="overview" className="scroll-mt-0">
      <div className="relative isolate flex min-h-[max(28rem,78svh)] -mt-14 overflow-hidden bg-[var(--brand-cream)] md:min-h-[max(34rem,82svh)] md:-mt-16">
        <div className="absolute inset-0">
          <DestinationPhotoSlot
            photo={destination.heroMain}
            fillParent
            rounded={false}
            sizes="100vw"
            priority
          />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/45 to-transparent md:h-28"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_90%_at_8%_52%,rgba(250,246,239,0.82)_0%,rgba(250,246,239,0.5)_38%,rgba(250,246,239,0.16)_58%,transparent_72%)] md:bg-[radial-gradient(ellipse_55%_85%_at_10%_50%,rgba(250,246,239,0.78)_0%,rgba(250,246,239,0.42)_42%,rgba(250,246,239,0.12)_62%,transparent_76%)]"
        />

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 items-center px-4 pb-12 pt-20 md:px-8 md:pb-16 md:pt-24 lg:px-12">
          <div className="w-full max-w-xl text-left">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)] [text-shadow:0_0_18px_rgba(250,246,239,0.95),0_1px_0_rgba(250,246,239,0.8)]">
              {destination.eyebrow}
            </p>
            <h1 className="mb-5 max-w-xl font-serif text-3xl font-bold leading-[1.1] tracking-tight text-[var(--brand-ink)] [text-shadow:0_1px_0_rgba(250,246,239,0.9),0_0_28px_rgba(250,246,239,0.75)] md:mb-6 md:text-5xl">
              {destination.h1}
            </h1>
            <p className="mb-8 max-w-md text-sm font-normal leading-relaxed text-[var(--brand-ink)] [text-shadow:0_1px_0_rgba(250,246,239,0.9),0_0_22px_rgba(250,246,239,0.75)] md:mb-10 md:text-base">
              {destination.lede}
            </p>
            <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <Link
                href={
                  destination.plannerHref ??
                  "/china-itinerary-planner#plan-trip"
                }
                className="btn-hero inline-flex min-h-12 w-full items-center justify-center px-8 py-3.5 text-base sm:w-auto md:px-10"
              >
                {destination.plannerCtaLabel ?? PRIMARY_CTA_LABEL}
              </Link>
              <Link
                href={destination.secondaryCtaHref ?? "/survival-kit"}
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/70 bg-white/20 px-8 py-3.5 text-sm font-bold text-[var(--brand-cta)] transition-all duration-300 hover:border-white hover:bg-white/35 sm:w-auto md:px-10"
              >
                {destination.secondaryCtaLabel ?? SECONDARY_CTA_LABEL}
              </Link>
            </div>
            <p className="mt-4 max-w-md text-xs font-normal leading-relaxed text-[var(--brand-ink)] [text-shadow:0_1px_0_rgba(250,246,239,0.9),0_0_20px_rgba(250,246,239,0.8)] md:text-sm">
              {destination.ctaHint}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
