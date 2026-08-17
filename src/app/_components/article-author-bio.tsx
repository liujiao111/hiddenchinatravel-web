import Link from "next/link";
import {
  SITE_FOUNDER_NAME,
  SITE_FOUNDER_PATH,
  SITE_FOUNDER_PICTURE,
  SITE_NAME,
} from "@/lib/constants";
import cn from "classnames";

type Props = {
  name?: string;
  picture?: string;
  className?: string;
};

export function ArticleAuthorBio({
  name = SITE_FOUNDER_NAME,
  picture = SITE_FOUNDER_PICTURE,
  className,
}: Props) {
  return (
    <aside
      className={cn(
        "mt-12 rounded-2xl border-2 border-[#00897b]/15 bg-white p-5 shadow-[0_4px_20px_rgba(0,137,123,0.08)] md:p-6",
        className,
      )}
    >
      <div className="flex gap-4">
        <Link
          href={SITE_FOUNDER_PATH}
          className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-[#00897b]/15"
        >
          <img
            src={picture}
            alt={name}
            width={64}
            height={64}
            className="h-full w-full object-cover"
          />
        </Link>
        <div>
          <p className="mb-1 text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-mango)]">
            Written by
          </p>
          <p className="text-base font-bold tracking-tight text-[var(--brand-cta)]">
            <Link
              href={SITE_FOUNDER_PATH}
              className="transition-colors duration-300 hover:text-[var(--brand-coral)]"
            >
              {name}
            </Link>
            <span className="font-normal text-[var(--brand-ink-muted)]">
              , founder of {SITE_NAME}
            </span>
          </p>
          <p className="mt-2 text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)]">
            First-hand China travel notes from Kunming — practical prep, not a
            tour script.{" "}
            <Link
              href={SITE_FOUNDER_PATH}
              className="font-bold text-[var(--brand-coral)] underline decoration-[color-mix(in_srgb,var(--brand-coral)_35%,transparent)] underline-offset-2"
            >
              About the founder
            </Link>
          </p>
        </div>
      </div>
    </aside>
  );
}
