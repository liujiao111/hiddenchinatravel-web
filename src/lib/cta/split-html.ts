import { INLINE_CTA_MIN_PARAGRAPHS } from "@/config/cta";

const SKIP_TAGS = new Set([
  "blockquote",
  "ul",
  "ol",
  "li",
  "pre",
  "code",
  "table",
  "thead",
  "tbody",
  "tr",
  "td",
  "th",
  "figure",
  "figcaption",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
]);

type ParagraphHit = {
  /** Index just after the closing </p> */
  endOffset: number;
};

/**
 * Find eligible top-level-ish `<p>` nodes: paragraphs whose open tag is not
 * nested inside lists, quotes, code, tables, or headings.
 */
function findEligibleParagraphs(html: string): ParagraphHit[] {
  const hits: ParagraphHit[] = [];
  const skipDepth: string[] = [];
  let i = 0;

  while (i < html.length) {
    if (html[i] !== "<") {
      i += 1;
      continue;
    }

    // Comment
    if (html.startsWith("<!--", i)) {
      const end = html.indexOf("-->", i + 4);
      i = end === -1 ? html.length : end + 3;
      continue;
    }

    const close = html.indexOf(">", i + 1);
    if (close === -1) break;
    const raw = html.slice(i + 1, close).trim();
    const isClosing = raw.startsWith("/");
    const nameMatch = raw.match(/^\/?\s*([a-zA-Z0-9]+)/);
    const tag = nameMatch?.[1]?.toLowerCase() ?? "";
    const selfClosing =
      raw.endsWith("/") ||
      ["br", "hr", "img", "input", "meta", "link", "source"].includes(tag);

    if (isClosing) {
      if (SKIP_TAGS.has(tag)) {
        for (let s = skipDepth.length - 1; s >= 0; s -= 1) {
          if (skipDepth[s] === tag) {
            skipDepth.splice(s, 1);
            break;
          }
        }
      }
      i = close + 1;
      continue;
    }

    if (SKIP_TAGS.has(tag) && !selfClosing) {
      skipDepth.push(tag);
      i = close + 1;
      continue;
    }

    if (tag === "p" && !selfClosing && skipDepth.length === 0) {
      const openEnd = close + 1;
      // Find matching </p> with naive depth for nested rare cases
      let depth = 1;
      let j = openEnd;
      while (j < html.length && depth > 0) {
        const nextOpen = html.toLowerCase().indexOf("<p", j);
        const nextClose = html.toLowerCase().indexOf("</p>", j);
        if (nextClose === -1) break;
        if (nextOpen !== -1 && nextOpen < nextClose) {
          // Could be <p or <pre — check word boundary
          const after = html.slice(nextOpen + 2, nextOpen + 3);
          if (after === ">" || after === " " || after === "\n" || after === "\t") {
            depth += 1;
            j = nextOpen + 2;
            continue;
          }
        }
        depth -= 1;
        if (depth === 0) {
          hits.push({ endOffset: nextClose + 4 });
          i = nextClose + 4;
          break;
        }
        j = nextClose + 4;
      }
      if (depth !== 0) {
        i = close + 1;
      }
      continue;
    }

    i = close + 1;
  }

  return hits;
}

/**
 * Split rendered article HTML for mid-body CTA insertion.
 * Insert after eligible paragraph at index Math.round(count / 3).
 */
export function splitHtmlForInlineCta(html: string): {
  before: string;
  after: string;
  inserted: boolean;
  paragraphCount: number;
  insertIndex: number | null;
} {
  const paragraphs = findEligibleParagraphs(html);
  const paragraphCount = paragraphs.length;

  if (paragraphCount < INLINE_CTA_MIN_PARAGRAPHS) {
    return {
      before: html,
      after: "",
      inserted: false,
      paragraphCount,
      insertIndex: null,
    };
  }

  const insertIndex = Math.min(
    Math.max(Math.round(paragraphCount / 3), 0),
    paragraphCount - 1,
  );
  const cut = paragraphs[insertIndex]?.endOffset;
  if (cut == null) {
    return {
      before: html,
      after: "",
      inserted: false,
      paragraphCount,
      insertIndex: null,
    };
  }

  return {
    before: html.slice(0, cut),
    after: html.slice(cut),
    inserted: true,
    paragraphCount,
    insertIndex,
  };
}
