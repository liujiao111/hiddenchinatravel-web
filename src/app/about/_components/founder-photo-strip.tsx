import type { FounderPhoto } from "@/lib/about/founder-content";
import Image from "next/image";

export function FounderPhotoStrip({
  photos,
  columns = 3,
}: {
  photos: readonly FounderPhoto[];
  columns?: 2 | 3;
}) {
  return (
    <ul
      className={
        columns === 2
          ? "grid gap-4 sm:grid-cols-2 md:gap-5"
          : "grid gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3"
      }
    >
      {photos.map((photo) => (
        <li key={photo.src}>
          <figure className="overflow-hidden rounded-2xl border-2 border-[var(--brand-cta)]/15 bg-[var(--brand-soft)] shadow-[0_4px_20px_rgba(80,40,24,0.08)]">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes={
                columns === 2
                  ? "(max-width: 640px) 100vw, 50vw"
                  : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              }
              quality={88}
              className="h-auto w-full"
            />
            <figcaption className="border-t border-[color-mix(in_srgb,var(--brand-cta)_10%,transparent)] bg-white px-4 py-3 text-sm font-normal leading-snug text-[var(--brand-ink-muted)]">
              {photo.caption}
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
