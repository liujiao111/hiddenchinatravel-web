import Link from "next/link";
import type { GuideDirectoryHub } from "@/lib/content/survival-guides-directory";

type Props = {
  hubs: GuideDirectoryHub[];
};

export function GuideHubGrid({ hubs }: Props) {
  return (
    <section aria-labelledby="topic-hubs-heading" className="mb-16 md:mb-20">
      <div className="mb-6 md:mb-8">
        <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--brand-mango)]">
          Start here
        </p>
        <h2
          id="topic-hubs-heading"
          className="text-xl font-bold tracking-tight text-[var(--brand-ink)] md:text-2xl"
        >
          Topic hubs
        </h2>
        <p className="mt-2 max-w-2xl text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
          Same map as the Survival Guides menu. Open a hub for the full path —
          then the long guides sit underneath.
        </p>
      </div>
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 md:gap-4">
        {hubs.map((hub) => (
          <li key={hub.href}>
            <Link
              href={hub.href}
              className="surface-card group flex h-full flex-col bg-[var(--brand-surface)] p-5 transition-colors duration-300 hover:bg-white"
            >
              <span className="mb-3 flex items-center gap-2">
                {hub.icon ? (
                  <span className="text-lg leading-none" aria-hidden>
                    {hub.icon}
                  </span>
                ) : null}
                <span className="text-base font-bold tracking-tight text-[var(--brand-ink)] md:text-lg">
                  {hub.title}
                </span>
              </span>
              <p className="mb-4 line-clamp-2 flex-1 text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)]">
                {hub.description}
              </p>
              <span className="text-sm font-bold text-[var(--brand-cta)] group-hover:underline">
                {hub.href === "/china-visa-checker"
                  ? "Open visa checker →"
                  : hub.articleCount > 0
                    ? `${hub.articleCount} guide${hub.articleCount === 1 ? "" : "s"} →`
                    : "Open hub →"}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
