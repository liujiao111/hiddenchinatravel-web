import { ActionRailCtaButton } from "./ActionRailCta";
import { CloseIcon } from "./icons";
import type { ActionRailContent } from "./types";

type Props = {
  content: ActionRailContent;
  titleId: string;
  onClose: () => void;
};

export function ActionRailPanel({ content, titleId, onClose }: Props) {
  return (
    <>
      <div className="mb-1 flex items-start justify-between gap-3">
        <p className="text-[11px] font-light uppercase tracking-[0.14em] text-[var(--action-rail-accent)]">
          {content.eyebrow}
        </p>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-sm text-[var(--action-rail-ink-muted)] transition-colors duration-300 hover:bg-[var(--action-rail-muted)] hover:text-[var(--action-rail-ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--action-rail-accent)]"
          aria-label="Close panel"
        >
          <CloseIcon />
        </button>
      </div>
      <h2
        id={titleId}
        className="mb-2 text-xl font-light leading-snug tracking-wide text-[var(--action-rail-ink)]"
      >
        {content.title}
      </h2>
      <p className="mb-5 text-sm font-light leading-relaxed text-[var(--action-rail-ink-muted)]">
        {content.support}
      </p>
      <div className="flex flex-col gap-2.5">
        {content.ctas.map((cta) => (
          <ActionRailCtaButton key={cta.id} cta={cta} />
        ))}
      </div>
    </>
  );
}
