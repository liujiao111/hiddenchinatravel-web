import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html from "remark-html";

/** Add sponsored rel to affiliate short links in rendered HTML. */
function decorateAffiliateAnchors(markup: string): string {
  return markup.replace(/<a\b([^>]*)>/gi, (full, attrs: string) => {
    const hrefMatch = attrs.match(/href=(["'])(.*?)\1/i);
    if (!hrefMatch) return full;
    const href = hrefMatch[2] || "";
    const isGo =
      href.startsWith("/go/") ||
      href.includes("/go/") ||
      /^https?:\/\/[^/]+\/go\//i.test(href);
    if (!isGo) return full;

    if (/\brel=/i.test(attrs)) {
      return full.replace(/\brel=(["'])(.*?)\1/i, (_m, q, rel) => {
        const parts = new Set(
          String(rel)
            .split(/\s+/)
            .map((p) => p.trim())
            .filter(Boolean),
        );
        parts.add("sponsored");
        parts.add("noopener");
        parts.add("noreferrer");
        return `rel=${q}${[...parts].join(" ")}${q}`;
      });
    }

    return `<a${attrs} rel="sponsored noopener noreferrer">`;
  });
}

function isCompactIconSrc(src: string): boolean {
  return /icons8|\/icons?[_/-]|icon_china|icons_transport|icons_payments/i.test(
    src,
  );
}

function isCoverImageSrc(src: string): boolean {
  return /\/cover\.(webp|png|jpe?g)$/i.test(src);
}

/** Phone / app UI screenshots → fixed phone frame (not full-bleed photos). */
function isPhoneScreenshot(src: string, alt: string): boolean {
  if (isCompactIconSrc(src) || isCoverImageSrc(src)) return false;
  const blob = `${src} ${alt}`.toLowerCase();
  return (
    /amap|wechat|alipay|meituan|screenshot|screen|qr[-_]?code|wallet|language|offline[-_]?map|metro|navigation|passport|verif|restricted|settings|mini[-_]?program|eleme|taobao|didi|transit|download|add[-_]?card|home[-_]?screen/.test(
      blob,
    ) || /[-_]scaled\.(webp|png|jpe?g)$/i.test(src)
  );
}

/**
 * Wrap Markdown images in shared blog media frames so every post
 * (current + future) gets consistent presentation without per-article CSS.
 */
function wrapBlogImages(markup: string): string {
  return markup.replace(/<img\b([^>]*)\/?>/gi, (full, attrs: string) => {
    const srcMatch = attrs.match(/\bsrc=(["'])(.*?)\1/i);
    const altMatch = attrs.match(/\balt=(["'])(.*?)\1/i);
    const src = srcMatch?.[2] ?? "";
    const alt = altMatch?.[2] ?? "";
    if (isCompactIconSrc(src)) {
      return `<span class="blog-media-icon">${full}</span>`;
    }
    if (isPhoneScreenshot(src, alt)) {
      return `<span class="blog-media-shot">${full}</span>`;
    }
    return `<span class="blog-media-frame">${full}</span>`;
  });
}

/** Allow wide Markdown tables to scroll horizontally on small screens. */
function wrapTables(markup: string): string {
  return markup.replace(/<table\b[\s\S]*?<\/table>/gi, (table) => {
    if (table.includes("table-wrap")) return table;
    return `<div class="table-wrap">${table}</div>`;
  });
}

function isTableSeparatorLine(line: string): boolean {
  const t = line.trim();
  if (!t.includes("-") || !t.includes("|")) return false;
  return /^\|?[\s:]*-{3,}[\s:]*(?:\|[\s:]*-{3,}[\s:]*)+\|?$/.test(t);
}

function isTableRowLine(line: string): boolean {
  const t = line.trim();
  if (!t || !t.includes("|")) return false;
  return true;
}

function splitTableCells(line: string): string[] {
  let parts = line.trim().split("|").map((c) => c.trim());
  if (parts[0] === "") parts = parts.slice(1);
  if (parts.length > 0 && parts[parts.length - 1] === "") {
    parts = parts.slice(0, -1);
  }
  return parts;
}

function formatGfmTableRow(cells: string[]): string {
  return `| ${cells.join(" | ")} |`;
}

/**
 * WordPress imports often use "Situation| Col| Col" + "---|---|---" without
 * outer pipes, and trailing spaces (hard breaks) that break GFM parsing.
 * Normalize those blocks into standard GFM tables before remark runs.
 */
export function normalizePipeTables(markdown: string): string {
  const lines = markdown.split("\n");
  const out: string[] = [];
  let i = 0;

  while (i < lines.length) {
    const header = lines[i];
    const maybeSep = lines[i + 1];

    if (
      maybeSep !== undefined &&
      isTableRowLine(header) &&
      isTableSeparatorLine(maybeSep) &&
      !isTableSeparatorLine(header)
    ) {
      const block: string[] = [];
      while (i < lines.length && isTableRowLine(lines[i])) {
        block.push(lines[i]);
        i += 1;
      }

      if (block.length >= 2 && isTableSeparatorLine(block[1])) {
        const normalized = block.map((row) => {
          const cells = splitTableCells(row);
          if (isTableSeparatorLine(row)) {
            return formatGfmTableRow(
              cells.map((cell) => {
                if (/^:?-{3,}:?$/.test(cell)) return cell;
                return "---";
              }),
            );
          }
          return formatGfmTableRow(cells);
        });
        out.push(...normalized);
        if (i < lines.length && lines[i].trim() !== "") {
          out.push("");
        }
        continue;
      }

      out.push(...block);
      continue;
    }

    out.push(lines[i]);
    i += 1;
  }

  return out.join("\n");
}

export default async function markdownToHtml(markdown: string) {
  const normalized = normalizePipeTables(markdown);
  const result = await remark().use(remarkGfm).use(html).process(normalized);
  const withAffiliates = decorateAffiliateAnchors(result.toString());
  return wrapTables(wrapBlogImages(withAffiliates));
}
