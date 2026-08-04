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
    return <div className="mx-auto max-w-3xl">{article}</div>;
  }

  return (
    <div
      className={cn(
        "mx-auto max-w-3xl",
        // TOC + reading column: keep TOC slim, give prose most of the row.
        "xl:grid xl:w-full xl:max-w-6xl xl:grid-cols-[10rem_minmax(0,48rem)] xl:justify-center xl:gap-10",
        "2xl:grid-cols-[11rem_minmax(0,52rem)] 2xl:gap-12",
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
