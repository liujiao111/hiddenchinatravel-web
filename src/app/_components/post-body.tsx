import { EndCTA, InlineCTA } from "@/components/cta";
import {
  getEndCtaCopy,
  getInlineCtaCopy,
  resolveArticleCtaVariant,
} from "@/config/cta";
import { splitHtmlForInlineCta } from "@/lib/cta/split-html";
import markdownStyles from "@/app/_components/markdown-styles.module.css";

type Props = {
  content: string;
  articleSlug?: string;
  section?: string;
  keywords?: string[];
};

/**
 * Article body with automated mid-article + end CTAs.
 * Insertion is computed from rendered HTML (not per-post Markdown).
 */
export function PostBody({
  content,
  articleSlug,
  section,
  keywords,
}: Props) {
  const variant = resolveArticleCtaVariant(section, keywords);
  const inlineCopy = getInlineCtaCopy();
  const endCopy = getEndCtaCopy(variant);
  const { before, after, inserted } = splitHtmlForInlineCta(content);

  return (
    <div className="mx-auto max-w-2xl">
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
    </div>
  );
}
