import { ArticleToc } from "@/app/_components/article-toc";
import { EndCTA, InlineCTA } from "@/components/cta";
import { ArticleHubLink, ContinueReading } from "@/components/content";
import type { ContinueReadingItem } from "@/components/content/continue-reading";
import {
  getEndCtaCopy,
  getInlineCtaCopy,
  resolveArticleCtaVariant,
} from "@/config/cta";
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
  const variant = resolveArticleCtaVariant(section, keywords);
  const inlineCopy = getInlineCtaCopy();
  const endCopy = getEndCtaCopy(variant);
  const { before, after, inserted } = splitHtmlForInlineCta(content);
  const toc = extractH2Toc(content);
  const showToc = toc.length >= TOC_MIN_ITEMS;

  const article = (
    <>
      {inserted ? (
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
      <EndCTA copy={endCopy} articleSlug={articleSlug} />
      {hub ? <ArticleHubLink hub={hub} articleSlug={articleSlug} /> : null}
      <ContinueReading
        posts={relatedPosts}
        articleSlug={articleSlug}
        cardLabel={hub?.label}
      />
    </>
  );

  if (!showToc) {
    return <div className="mx-auto max-w-2xl">{article}</div>;
  }

  return (
    <div
      className={cn(
        "mx-auto max-w-2xl",
        // Real grid columns — TOC never paints over the reading column.
        // Default stretch so the TOC column matches article height (needed for sticky).
        "xl:grid xl:max-w-5xl xl:grid-cols-[12rem_minmax(0,38rem)] xl:justify-center xl:gap-12",
        "2xl:max-w-6xl 2xl:grid-cols-[13.5rem_minmax(0,40rem)] 2xl:gap-14",
      )}
    >
      {/*
        ArticleToc renders mobile block + sidebar aside as siblings.
        CSS grid places them into columns in DOM order on xl+.
        Below xl, sidebar is hidden and mobile sits above the article —
        so article must follow in a wrapper that spans correctly.
      */}
      <ArticleToc items={toc} />
      <div className="min-w-0">{article}</div>
    </div>
  );
}
