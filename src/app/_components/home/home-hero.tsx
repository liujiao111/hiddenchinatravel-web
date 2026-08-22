import { HomeHeroCopy } from "@/app/_components/home/home-hero-copy";
import { SITE_HERO_PATH, SITE_NAME } from "@/lib/constants";
import Image from "next/image";

/** Full-bleed hero that tucks under the overlay nav (Evaneos-style). */
export function HomeHero() {
  return (
    <section className="relative isolate flex min-h-[max(36rem,88svh)] -mt-14 overflow-hidden bg-[var(--brand-cream)] md:-mt-16">
      <Image
        src={SITE_HERO_PATH}
        alt={`${SITE_NAME} — Jade Dragon Snow Mountain over Black Dragon Pool, Yunnan`}
        fill
        priority
        fetchPriority="high"
        quality={75}
        sizes="100vw"
        className="object-cover object-[center_42%]"
      />

      {/* Top scrim so white nav type stays readable on the photo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/45 to-transparent md:h-28"
      />

      {/* Soft left haze only — no panel, no hard edge, photo stays visible */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_90%_at_8%_52%,rgba(250,246,239,0.82)_0%,rgba(250,246,239,0.5)_38%,rgba(250,246,239,0.16)_58%,transparent_72%)] md:bg-[radial-gradient(ellipse_55%_85%_at_10%_50%,rgba(250,246,239,0.78)_0%,rgba(250,246,239,0.42)_42%,rgba(250,246,239,0.12)_62%,transparent_76%)]"
      />

      <HomeHeroCopy />
    </section>
  );
}
