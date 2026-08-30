import { FounderPhotoStrip } from "@/app/about/_components/founder-photo-strip";
import {
  founderBackgroundBullets,
  founderProfile,
  founderSceneGallery,
} from "@/lib/about/founder-content";
import { SITE_FOUNDER_NAME, SITE_NAME } from "@/lib/constants";
import Image from "next/image";

export function FounderProfileBlock() {
  return (
    <div className="space-y-8 md:space-y-10">
      <div className="grid items-start gap-8 md:grid-cols-[minmax(0,220px)_1fr] md:gap-10 lg:grid-cols-[minmax(0,260px)_1fr] lg:gap-12">
        <figure className="mx-auto w-full max-w-[260px] shrink-0 md:mx-0">
          <div className="relative aspect-[2/3] overflow-hidden rounded-2xl border-2 border-[var(--brand-cta)]/15 shadow-[0_8px_28px_rgba(80,40,24,0.12)]">
            <Image
              src={founderProfile.portrait.src}
              alt={founderProfile.portrait.alt}
              fill
              priority
              sizes="(max-width: 768px) 220px, 260px"
              quality={88}
              className="object-cover object-top"
            />
          </div>
          <figcaption className="mt-3 text-center text-sm font-normal text-[var(--brand-ink-muted)] md:text-left">
            {SITE_FOUNDER_NAME} · Kunming
          </figcaption>
        </figure>

        <div className="min-w-0 space-y-5 text-base font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-lg">
          <ul className="space-y-2 rounded-2xl border border-[color-mix(in_srgb,var(--brand-cta)_12%,transparent)] bg-[var(--brand-cream)]/80 px-4 py-4 text-sm md:text-base">
            {founderBackgroundBullets.map((item) => (
              <li key={item} className="flex gap-2.5">
                <span
                  aria-hidden
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-coral)]"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          {founderProfile.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-mango)]">
          On the ground
        </p>
        <p className="mb-5 max-w-2xl text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
          A few places behind how I plan — {SITE_NAME} is built from lived
          miles, not stock photos.
        </p>
        <FounderPhotoStrip photos={founderSceneGallery} />
      </div>
    </div>
  );
}
