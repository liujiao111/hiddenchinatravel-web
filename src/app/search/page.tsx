import Link from "next/link";
import Container from "@/app/_components/container";
import { LastUpdated } from "@/app/_components/last-updated";
import { SiteSearch } from "@/app/_components/site-search";
import { getSearchIndex } from "@/lib/search/build-index";
import { matchSearchItems, searchTypeLabel } from "@/lib/search/match";
import { SITE_LAST_UPDATED } from "@/lib/constants";
import type { Metadata } from "next";

type Props = {
  searchParams: Promise<{ q?: string }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { q } = await searchParams;
  const query = q?.trim();
  return {
    title: query ? `Search: ${query}` : "Search",
    description: "Search Hidden China Travel guides, hubs, and tools.",
    robots: { index: false, follow: true },
  };
}

export default async function SearchPage({ searchParams }: Props) {
  const { q } = await searchParams;
  const query = q?.trim() ?? "";
  const items = getSearchIndex();
  const results = query ? matchSearchItems(items, query, 40) : [];

  return (
    <main>
      <Container>
        <header className="mb-10 mt-8 max-w-3xl md:mb-12">
          <p className="mb-4 text-xs font-normal uppercase tracking-[0.16em] text-[var(--brand-muted)]">
            Search
          </p>
          <h1 className="mb-4 text-2xl font-bold tracking-wide text-[var(--brand-ink)] md:text-4xl">
            {query ? `Results for “${query}”` : "Search the site"}
          </h1>
          <p className="mb-6 text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
            Find guides, topic hubs, and tools for traveling in China as a
            foreigner.
          </p>
          <SiteSearch
            items={items}
            variant="page"
            initialQuery={query}
            preferResultsPage
            className="max-w-2xl"
          />
          <LastUpdated date={SITE_LAST_UPDATED} className="mt-4" />
        </header>

        {query ? (
          <section className="mb-24">
            <p className="mb-6 text-sm font-normal text-[var(--brand-muted)]">
              {results.length} result{results.length === 1 ? "" : "s"}
            </p>
            {results.length === 0 ? (
              <div className="surface-card bg-[var(--brand-surface)] p-8">
                <p className="mb-4 text-base font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-lg">
                  No matches. Try a broader term, or start from these:
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/china-visa-checker" className="btn-brand px-6 py-3 text-sm">
                    Visa Checker
                  </Link>
                  <Link href="/survival-kit" className="btn-brand-outline px-6 py-3 text-sm">
                    Survival Kit
                  </Link>
                  <Link href="/survival-guides" className="btn-brand-outline px-6 py-3 text-sm">
                    Survival Guides
                  </Link>
                </div>
              </div>
            ) : (
              <ul className="divide-y divide-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)] border-y border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)]">
                {results.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      className="-mx-2 flex flex-col gap-2 rounded-2xl px-2 py-5 transition-colors duration-500 hover:bg-[var(--brand-soft)] sm:flex-row sm:items-start sm:gap-4"
                    >
                      <span className="mt-0.5 w-fit shrink-0 rounded-2xl bg-[var(--brand-soft)] px-2.5 py-1 text-[11px] font-normal uppercase tracking-wider text-[var(--brand-ink-muted)]">
                        {searchTypeLabel[item.type]}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-lg font-bold tracking-tight text-[var(--brand-ink)]">
                          {item.title}
                        </span>
                        <span className="mt-1 block font-normal leading-relaxed text-[var(--brand-ink-muted)]">
                          {item.description}
                        </span>
                        <span className="mt-1 block text-sm font-normal text-[var(--brand-muted)]">
                          {item.href}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ) : (
          <p className="mb-24 font-normal text-[var(--brand-muted)]">
            Type a query above — for example visa, Alipay, hotels, or eSIM.
          </p>
        )}
      </Container>
    </main>
  );
}
