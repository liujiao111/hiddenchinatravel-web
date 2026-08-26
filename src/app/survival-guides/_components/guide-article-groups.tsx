import Image from "next/image";
import Link from "next/link";
import { TropicalCard } from "@/app/_components/tropical-card";
import type { GuideDirectoryGroup } from "@/lib/content/survival-guides-directory";

type Props = {
  groups: GuideDirectoryGroup[];
};

export function GuideArticleGroups({ groups }: Props) {
  return (
    <div id="all-guides" className="mb-24 space-y-14 md:mb-32 md:space-y-16">
      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--brand-mango)]">
        All guides
      </p>
      {groups.map((group) => (
        <section
          key={group.href}
          aria-labelledby={`guides-${group.href.replace(/\W+/g, "")}`}
        >
          <div className="mb-5 flex flex-col gap-1 sm:mb-6 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
            <h2
              id={`guides-${group.href.replace(/\W+/g, "")}`}
              className="text-lg font-bold tracking-tight text-[var(--brand-ink)] md:text-xl"
            >
              {group.title}
            </h2>
            {group.href !== "/survival-guides" ? (
              <Link
                href={group.href}
                className="shrink-0 text-sm font-bold text-[var(--brand-coral)] underline decoration-[color-mix(in_srgb,var(--brand-coral)_35%,transparent)] underline-offset-2"
              >
                {group.href === "/china-visa-checker"
                  ? "Open visa checker →"
                  : `Open ${group.title} hub →`}
              </Link>
            ) : null}
          </div>
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-5">
            {group.posts.map((post) => (
              <li key={post.slug}>
                <TropicalCard
                  href={`/${post.slug}`}
                  label={group.title}
                  title={post.title}
                  footerCta="Read guide →"
                  className="h-full"
                  titleLines={3}
                  bodyLines={3}
                  media={
                    <div className="relative aspect-[16/10] w-full bg-[var(--brand-soft)]">
                      <Image
                        src={post.coverImage}
                        alt=""
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 360px"
                      />
                    </div>
                  }
                >
                  {post.excerpt}
                </TropicalCard>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
