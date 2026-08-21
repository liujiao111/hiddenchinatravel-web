import { HomeHeroCopy } from "@/app/_components/home/home-hero-copy";
import { SITE_HERO_PATH, SITE_NAME } from "@/lib/constants";
import Image from "next/image";

/** Full-bleed hero that tucks under the overlay nav (Evaneos-style). */
export function HomeHero() {
  return (
    <section className="relative isolate flex min-h-[max(32rem,72svh)] -mt-14 overflow-hidden bg-[var(--brand-cream)] md:-mt-16">
      <Image
        src={SITE_HERO_PATH}
        alt={`${SITE_NAME} — Great Wall in autumn`}
        fill
        priority
        fetchPriority="high"
        quality={75}
        sizes="100vw"
        className="object-cover object-[70%_center]"
      />

      {/* Top scrim so white nav type stays readable on the photo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/45 to-transparent md:h-28"
      />

      {/* Light left wash below the nav so title stays readable */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 top-14 md:top-16"
        style={{
          background:
            "linear-gradient(100deg, rgba(255,253,245,0.88) 0%, rgba(255,253,245,0.58) 26%, rgba(255,253,245,0.18) 46%, transparent 68%)",
        }}
      />

      <HomeHeroCopy />
    </section>
  );
}
