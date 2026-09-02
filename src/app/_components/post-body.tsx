import { ArticleToc } from "@/app/_components/article-toc";
import { ArticleAuthorBio } from "@/app/_components/article-author-bio";
import { AffiliateClickTracker } from "@/components/affiliates/affiliate-click-tracker";
import { ArticleBookingBlockCard } from "@/components/affiliates/article-booking-block";
import { EndCTA, InlineCTA } from "@/components/cta";
import { YunnanRouteCheck } from "@/components/cta/yunnan-route-check";
import { ArticleHubLink, ContinueReading } from "@/components/content";
import type { ContinueReadingItem } from "@/components/content/continue-reading";
import {
  getEndCtaCopy,
  getInlineCtaCopy,
  resolveArticleCtaVariant,
  shouldSkipInlineCta,
} from "@/config/cta";
import { getArticleBookingBlock } from "@/lib/affiliates/article-booking-blocks";
import { extractH2Toc, TOC_MIN_ITEMS } from "@/lib/article-toc";
import type { ArticleHubRef } from "@/lib/content/article-related";
import { splitHtmlForInlineCta } from "@/lib/cta/split-html";
import markdownStyles from "@/app/_components/markdown-styles.module.css";
import cn from "classnames";

type Props = {
  content: string;
  articleSlug?: string;
  section?: string;
  keywords?: string[];
  hub?: ArticleHubRef | null;
  relatedPosts?: ContinueReadingItem[];
};

/**
 * Article body with automated mid-article + end CTAs,
 * hub back-link, and same-section Continue reading.
 */
export function PostBody({
  content,
  articleSlug,
  section,
  keywords,
  hub = null,
  relatedPosts = [],
}: Props) {
  const variant = resolveArticleCtaVariant(section, keywords, articleSlug);
  const inlineCopy = getInlineCtaCopy();
  const endCopy = getEndCtaCopy(
    variant,
    hub
      ? {
          diyHref: hub.href,
          diyLabel: `More in ${hub.label}`,
          articleSlug,
        }
      : { articleSlug },
  );
  const bookingBlock = getArticleBookingBlock(articleSlug);
  const skipInlineCta = shouldSkipInlineCta(variant, articleSlug);
  const routeCheckMarker = "<!-- yunnan-route-check -->";
  const [beforeRouteCheck, afterRouteCheck] = content.split(routeCheckMarker);
  const hasYunnanRouteCheck =
    articleSlug === "dali-travel-guide" && afterRouteCheck !== undefined;
  const { before, after, inserted } = skipInlineCta
    ? { before: content, after: "", inserted: false }
    : splitHtmlForInlineCta(content);
  const toc = extractH2Toc(content);
  const showToc = toc.length >= TOC_MIN_ITEMS;

  const article = (
    <>
      <AffiliateClickTracker surface="article" articleSlug={articleSlug} />
      {hasYunnanRouteCheck ? (
        <>
          <div
            className={markdownStyles["markdown"]}
            dangerouslySetInnerHTML={{ __html: beforeRouteCheck }}
          />
          <YunnanRouteCheck articleSlug={articleSlug} />
          <div
            className={markdownStyles["markdown"]}
            dangerouslySetInnerHTML={{ __html: afterRouteCheck ?? "" }}
          />
        </>
      ) : inserted ? (
        <>
          <div
            className={markdownStyles["markdown"]}
            dangerouslySetInnerHTML={{ __html: before }}
          />
          <InlineCTA copy={inlineCopy} articleSlug={articleSlug} />
          <div
            className={markdownStyles["markdown"]}
            dangerouslySetInnerHTML={{ __html: after }}
          />
        </>
      ) : (
        <div
          className={markdownStyles["markdown"]}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
      {bookingBlock ? (
        <ArticleBookingBlockCard
          block={bookingBlock}
          articleSlug={articleSlug}
        />
      ) : null}
      <EndCTA copy={endCopy} articleSlug={articleSlug} />
      <ArticleAuthorBio />
      {hub ? <ArticleHubLink hub={hub} articleSlug={articleSlug} /> : null}
      <ContinueReading
        posts={relatedPosts}
        articleSlug={articleSlug}
        cardLabel={hub?.label}
      />
    </>
  );

  if (!showToc) {
    return <div className="mx-auto max-w-3xl">{article}</div>;
  }

  return (
    <div
      className={cn(
        "mx-auto max-w-3xl",
        // Exactly two grid children on xl+: sidebar + reading column.
        "xl:grid xl:w-full xl:max-w-6xl xl:grid-cols-[10rem_minmax(0,48rem)] xl:justify-center xl:gap-10",
        "2xl:grid-cols-[11rem_minmax(0,52rem)] 2xl:gap-12",
      )}
    >
      <ArticleToc items={toc} placement="desktop" />
      <div className="min-w-0 xl:col-start-2 xl:row-start-1 xl:self-start">
        <ArticleToc items={toc} placement="mobile" />
        {article}
      </div>
    </div>
  );
}
