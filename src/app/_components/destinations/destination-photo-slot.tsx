import { CopySearchButton } from "@/app/_components/destinations/copy-search-button";
import type { DestinationPhoto, PhotoAspect } from "@/lib/destinations/types";
import cn from "classnames";
import Image from "next/image";

const aspectClass: Record<PhotoAspect, string> = {
  "16/9": "aspect-[16/9]",
  "2/3": "aspect-[2/3]",
  "5/4": "aspect-[5/4]",
};

type Props = {
  photo: DestinationPhoto;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Stretch to the parent instead of locking aspect ratio. */
  fillParent?: boolean;
  rounded?: boolean;
  showCopy?: boolean;
  /** Overlay name on a filled or placeholder photo (mosaic tiles). */
  overlayTitle?: string;
  overlayMeta?: string;
};

export function DestinationPhotoSlot({
  photo,
  className,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  fillParent = false,
  rounded = true,
  showCopy = true,
  overlayTitle,
  overlayMeta,
}: Props) {
  const frame = cn(
    "relative overflow-hidden bg-[var(--brand-soft)]",
    rounded && "rounded-lg",
    fillParent ? "h-full w-full" : aspectClass[photo.aspect],
    className,
  );

  const overlay =
    overlayTitle || overlayMeta ? (
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/55 via-black/20 to-transparent px-3 pb-3 pt-10">
        {overlayMeta ? (
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/90">
            {overlayMeta}
          </p>
        ) : null}
        {overlayTitle ? (
          <p className="font-serif text-lg font-bold leading-tight text-white md:text-xl">
            {overlayTitle}
          </p>
        ) : null}
      </div>
    ) : null;

  if (photo.src) {
    return (
      <div className={frame}>
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover transition-transform duration-300 motion-safe:group-hover:scale-105"
        />
        {overlay}
      </div>
    );
  }

  return (
    <div
      className={cn(
        frame,
        "flex flex-col items-stretch justify-between border border-dashed border-[color-mix(in_srgb,var(--brand-cta)_28%,transparent)] bg-[var(--brand-cream)] p-3 md:p-4",
      )}
    >
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
          Photo · {photo.aspect}
        </p>
        <p className="mt-2 select-all font-sans text-xs font-normal leading-relaxed text-[var(--brand-ink)] md:text-sm">
          {photo.keywords}
        </p>
        {photo.altKeywords?.length ? (
          <ul className="mt-2 space-y-1">
            {photo.altKeywords.map((term) => (
              <li
                key={term}
                className="select-all text-[11px] font-normal leading-snug text-[var(--brand-ink-muted)]"
              >
                or: {term}
              </li>
            ))}
          </ul>
        ) : null}
        {showCopy ? <CopySearchButton keywords={photo.keywords} /> : null}
      </div>
      {overlay ? (
        <div className="relative z-10 mt-3 border-t border-[color-mix(in_srgb,var(--brand-cta)_16%,transparent)] pt-2">
          {overlayMeta ? (
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--brand-mango)]">
              {overlayMeta}
            </p>
          ) : null}
          {overlayTitle ? (
            <p className="font-serif text-lg font-bold leading-tight text-[var(--brand-ink)] md:text-xl">
              {overlayTitle}
            </p>
          ) : null}
        </div>
      ) : (
        <p className="mt-3 text-[10px] font-normal leading-snug text-[var(--brand-ink-muted)]">
          {photo.alt}
        </p>
      )}
    </div>
  );
}
