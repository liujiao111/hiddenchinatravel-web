import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html from "remark-html";
import { existsSync } from "fs";
import { join } from "path";
import "server-only";
import { ensureHeadingIds } from "@/lib/article-toc";

function mergeRel(attrs: string): string {
  if (/\brel=/i.test(attrs)) {
    return attrs.replace(/\brel=(["'])(.*?)\1/i, (_m, q, rel) => {
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
  return `${attrs} rel="sponsored noopener noreferrer"`;
}

function withTargetBlank(attrs: string): string {
  if (/\btarget=/i.test(attrs)) {
    return attrs.replace(/\btarget=(["']).*?\1/i, 'target="_blank"');
  }
  return `${attrs} target="_blank"`;
}

/** Affiliate short links: sponsored rel + new tab. */
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

    return `<a${withTargetBlank(mergeRel(attrs))}>`;
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
  // Explicit screenshot / step-UI cues — do not treat trip photos as phones.
  if (
    /screenshot|screen[-_]?shot|phone[-_]?ui|app[-_]?ui|app[-_]?screen|qr[-_]?code|\/step-\d+|step\s*\d+/.test(
      blob,
    )
  ) {
    return true;
  }
  const mentionsApp =
    /\b(amap|gaode|wechat|alipay|meituan|eleme|taobao|didi|mini[-_]?program)\b/.test(
      blob,
    );
  const mentionsUi =
    /\b(ui|screen|settings|wallet|offline[-_]?map|add[-_]?card|home[-_]?screen|download|verif|language|confirm|search\s+results|driver|where\s+to)\b/.test(
      blob,
    );
  return mentionsApp && mentionsUi;
}

function resolvePublicAssetPath(src: string): string | null {
  if (!src.startsWith("/")) return null;
  const full = join(process.cwd(), "public", src.replace(/^\//, ""));
  return existsSync(full) ? full : null;
}

/** True when asset is wider than tall (wide UI crops / maps / photos). */
async function isLandscapeAsset(src: string): Promise<boolean> {
  const full = resolvePublicAssetPath(src);
  if (!full) return false;
  try {
    const { default: sharp } = await import("sharp");
    const meta = await sharp(full).metadata();
    const w = meta.width ?? 0;
    const h = meta.height ?? 0;
    return w > 0 && h > 0 && w > h;
  } catch {
    return false;
  }
}

/**
 * Wrap Markdown images in shared blog media frames so every post
 * (current + future) gets consistent presentation without per-article CSS.
 *
 * Portrait phone UI → blog-media-shot (narrow phone canvas).
 * Portrait trip photos → blog-media-portrait (full frame, capped width).
 * Landscape UI / photos → blog-media-frame (readable article width).
 */
async function wrapBlogImages(markup: string): Promise<string> {
  const tagRe = /<img\b([^>]*)\/?>/gi;
  const matches = [...markup.matchAll(tagRe)];
  if (!matches.length) return markup;

  const landscapeFlags = await Promise.all(
    matches.map(async (m) => {
      const attrs = m[1] ?? "";
      const srcMatch = attrs.match(/\bsrc=(["'])(.*?)\1/i);
      const src = srcMatch?.[2] ?? "";
      return isLandscapeAsset(src);
    }),
  );

  let i = 0;
  return markup.replace(tagRe, (full, attrs: string) => {
    const landscape = landscapeFlags[i++] ?? false;
    const srcMatch = attrs.match(/\bsrc=(["'])(.*?)\1/i);
    const altMatch = attrs.match(/\balt=(["'])(.*?)\1/i);
    const src = srcMatch?.[2] ?? "";
    const alt = altMatch?.[2] ?? "";
    if (isCompactIconSrc(src)) {
      return `<span class="blog-media-icon">${full}</span>`;
    }
    // Wide UI crops must not be squeezed into the phone canvas.
    if (landscape) {
      return `<span class="blog-media-frame">${full}</span>`;
    }
    if (isPhoneScreenshot(src, alt)) {
      return `<span class="blog-media-shot">${full}</span>`;
    }
    return `<span class="blog-media-portrait">${full}</span>`;
  });
}

const PORTRAIT_PARA_RE =
  /<p>\s*<span class="blog-media-portrait">[\s\S]*?<\/span>\s*<\/p>/;

/** Two consecutive portrait trip photos → one row. */
function pairAdjacentPortraits(markup: string): string {
  return markup.replace(
    new RegExp(`${PORTRAIT_PARA_RE.source}\\s*${PORTRAIT_PARA_RE.source}`, "g"),
    (pair) => `<div class="blog-media-pair">${pair}</div>`,
  );
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
        const cellRows = block.map((row) => splitTableCells(row));
        const colCount = Math.max(...cellRows.map((cells) => cells.length), 1);
        const normalized = block.map((row, idx) => {
          const cells = [...cellRows[idx]];
          while (cells.length < colCount) cells.push("");
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
  const withImages = await wrapBlogImages(withAffiliates);
  return ensureHeadingIds(wrapTables(pairAdjacentPortraits(withImages)));
}
