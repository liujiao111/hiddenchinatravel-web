import Container from "@/app/_components/container";
import { featuredGuideFallbacks } from "@/lib/home/content";
import {
  getHomeHubTabs,
  type HomeGuideCard,
} from "@/lib/home/featured-guides";
import type { Post } from "@/interfaces/post";
import dynamic from "next/dynamic";
import Link from "next/link";

const HomeFeaturedGuidesClient = dynamic(
  () =>
    import("@/app/_components/home/home-featured-guides-client").then(
      (m) => m.HomeFeaturedGuidesClient,
    ),
  {
    loading: () => (
      <div
        className="min-h-[16rem] rounded-2xl border border-[color-mix(in_srgb,var(--brand-cta)_12%,transparent)] bg-white/70"
        aria-hidden
      />
    ),
  },
);

type Props = {
  posts: Post[];
};

export function HomeFeaturedGuides({ posts }: Props) {
  const fromPosts: HomeGuideCard[] = posts.slice(0, 6).map((post) => ({
    title: post.title,
    href: `/${post.slug}`,
    excerpt: post.excerpt,
    date: post.date,
  }));

  const featured: HomeGuideCard[] =
    fromPosts.length >= 4
      ? fromPosts
      : [
          ...fromPosts,
          ...featuredGuideFallbacks
            .filter((g) => !fromPosts.some((p) => p.href === g.href))
            .map((g) => ({ ...g, date: undefined as string | undefined })),
        ].slice(0, 6);

  const hubs = getHomeHubTabs();

  return (
    <section
      id="featured-guides"
      className="scroll-mt-24 border-b border-[color-mix(in_srgb,var(--brand-cta)_12%,transparent)] bg-[var(--brand-cream)] py-12 md:py-20 lg:py-28"
    >
      <Container>
        <div className="mb-8 flex flex-col gap-6 md:mb-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-2 text-sm font-bold tracking-tight text-[var(--brand-coral)]">
              Guides
            </p>
            <h2 className="mb-3 text-2xl font-bold tracking-tight text-[var(--brand-ink)] md:text-3xl">
              Featured survival guides
            </h2>
            <p className="text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
              Six practical picks to start — or jump into a topic hub for the
              full map of guides.
            </p>
          </div>
          <Link
            href="/survival-guides"
            className="btn-brand-outline shrink-0 text-sm"
          >
            Browse all guides
          </Link>
        </div>

        <HomeFeaturedGuidesClient featured={featured} hubs={hubs} />
      </Container>
    </section>
  );
}
