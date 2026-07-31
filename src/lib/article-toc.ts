export type TocItem = {
  id: string;
  text: string;
};

/** Only show TOC when the article has enough structure to jump through. */
export const TOC_MIN_ITEMS = 5;

function stripTags(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function slugify(text: string): string {
  const base = text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 64);
  return base || "section";
}

/**
 * Ensure every `<h2>` has a unique `id` for in-page anchors / TOC links.
 * Existing ids are preserved; collisions get a numeric suffix.
 */
export function ensureHeadingIds(html: string): string {
  const used = new Set<string>();

  return html.replace(
    /<h2(\s[^>]*)?>([\s\S]*?)<\/h2>/gi,
    (_full, attrs = "", inner: string) => {
      const attrStr = typeof attrs === "string" ? attrs : "";
      const existing = attrStr.match(/\bid=(["'])(.*?)\1/i)?.[2];
      let id = existing || slugify(stripTags(inner));
      const base = id;
      let n = 2;
      while (used.has(id)) {
        id = `${base}-${n++}`;
      }
      used.add(id);

      if (existing && existing === id) {
        return `<h2${attrStr}>${inner}</h2>`;
      }

      const withoutId = attrStr.replace(/\s*\bid=(["']).*?\1/i, "").trim();
      const nextAttrs = withoutId ? ` ${withoutId}` : "";
      return `<h2${nextAttrs} id="${id}">${inner}</h2>`;
    },
  );
}

/** Collect h2 TOC entries from HTML that already has heading ids. */
export function extractH2Toc(html: string): TocItem[] {
  const items: TocItem[] = [];
  const re = /<h2(\s[^>]*)?>([\s\S]*?)<\/h2>/gi;
  let match: RegExpExecArray | null;

  while ((match = re.exec(html))) {
    const attrs = match[1] ?? "";
    const id = attrs.match(/\bid=(["'])(.*?)\1/i)?.[2];
    if (!id) continue;
    const text = stripTags(match[2] ?? "");
    if (!text) continue;
    items.push({ id, text });
  }

  return items;
}
