import Image from "next/image";
import { KitIcon } from "./kit-icon";
import { KitTrackedLink } from "./kit-tracked-link";
import type { KitToolCardData } from "@/lib/survival-kit/types";

type Props = {
  card: KitToolCardData;
};

export function KitToolCard({ card }: Props) {
  return (
    <article className="surface-card flex h-full flex-col overflow-hidden border border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)] bg-[var(--brand-surface)]">
      {card.coverImage ? (
        <div className="relative aspect-[2.2/1] w-full bg-[var(--brand-soft)]">
          <Image
            src={card.coverImage}
            alt={card.coverAlt || card.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-4 md:p-5">
        <div className="mb-2.5 flex h-8 w-8 items-center justify-center rounded-sm border border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)] bg-[var(--brand-soft)] text-[var(--brand-cta)]">
          <KitIcon name={card.icon} className="h-4 w-4" />
        </div>
        <h3 className="mb-1.5 text-base font-light tracking-wide text-[var(--brand-ink)]">
          {card.title}
        </h3>
        <p className="mb-4 flex-1 text-sm font-light leading-relaxed text-[var(--brand-ink-muted)]">
          {card.description}
        </p>
        <div className="flex flex-col gap-2">
          <KitTrackedLink
            cta={card.primaryCta}
            variant="primary"
            className="px-4 py-2.5 text-sm"
          />
          {card.secondaryLink ? (
            <KitTrackedLink cta={card.secondaryLink} variant="text" />
          ) : null}
        </div>
      </div>
    </article>
  );
}
