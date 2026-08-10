import { HomeHeroCopy } from "@/app/_components/home/home-hero-copy";
import { SITE_HERO_PATH, SITE_NAME } from "@/lib/constants";
import Image from "next/image";

/** Server-rendered hero chrome so the LCP image is not behind a client boundary. */
export function HomeHero() {
  return (
    <section className="relative isolate min-h-[76svh] overflow-hidden bg-[var(--brand-cream)] md:min-h-[84svh]">
      <Image
        src={SITE_HERO_PATH}
        alt={`${SITE_NAME} — China travel atmosphere`}
        fill
        priority
        fetchPriority="high"
        quality={70}
        sizes="100vw"
        className="object-cover object-center scale-[1.02] brightness-[1.05] contrast-[0.95] saturate-[1.05]"
      />

      {/* Stronger left wash so title/CTAs stay readable on bright hero photos */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(255,250,240,0.97) 0%, rgba(255,250,240,0.92) 34%, rgba(255,250,240,0.62) 55%, rgba(255,248,224,0.28) 78%, transparent 100%), radial-gradient(ellipse 70% 60% at 15% 40%, rgba(0,137,123,0.16), transparent 55%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 top-10 h-48 w-48 rounded-full bg-[var(--brand-cta)]/15 blur-3xl md:h-64 md:w-64"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-10 right-0 h-40 w-40 rounded-full bg-[var(--brand-cta)]/10 blur-3xl md:h-56 md:w-56"
      />

      <HomeHeroCopy />
    </section>
  );
}
