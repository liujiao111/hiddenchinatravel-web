import { HomeHeroCopy } from "@/app/_components/home/home-hero-copy";
import { SITE_HERO_PATH, SITE_NAME } from "@/lib/constants";
import Image from "next/image";

/** Server-rendered hero chrome so the LCP image is not behind a client boundary. */
export function HomeHero() {
  return (
    <section className="relative isolate min-h-[76svh] overflow-hidden bg-[var(--brand-cream)] md:min-h-[84svh]">
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

      {/* Light left wash so title stays readable without covering the wall */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(255,253,245,0.88) 0%, rgba(255,253,245,0.58) 26%, rgba(255,253,245,0.18) 46%, transparent 68%)",
        }}
      />

      <HomeHeroCopy />
    </section>
  );
}
