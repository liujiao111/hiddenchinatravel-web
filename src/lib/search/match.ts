import type { SearchItem, SearchMatch } from "./types";

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’']/g, "'")
    .trim();
}

function tokenize(query: string): string[] {
  return normalize(query)
    .split(/[^a-z0-9\u4e00-\u9fff]+/i)
    .filter((t) => t.length > 0);
}

function fieldScore(field: string, tokens: string[], weight: number): number {
  if (!field) return 0;
  const hay = normalize(field);
  let score = 0;
  for (const token of tokens) {
    if (!token) continue;
    if (hay === token) score += weight * 4;
    else if (hay.startsWith(token)) score += weight * 3;
    else if (hay.includes(token)) score += weight * 2;
    else if (token.length >= 3 && hay.split(/\s+/).some((w) => w.startsWith(token))) {
      score += weight;
    }
  }
  return score;
}

/** Rank items by title-first fuzzy match. Empty query → []. */
export function matchSearchItems(
  items: SearchItem[],
  query: string,
  limit = 8,
): SearchMatch[] {
  const trimmed = query.trim();
  if (!trimmed) return [];

  const tokens = tokenize(trimmed);
  if (tokens.length === 0) return [];

  const scored: SearchMatch[] = [];

  for (const item of items) {
    const keywords = (item.keywords ?? []).join(" ");
    const score =
      fieldScore(item.title, tokens, 10) +
      fieldScore(item.description, tokens, 3) +
      fieldScore(keywords, tokens, 4) +
      fieldScore(item.type, tokens, 1) +
      fieldScore(item.href.replace(/\//g, " "), tokens, 1);

    if (score > 0) {
      scored.push({ ...item, score });
    }
  }

  return scored.sort((a, b) => b.score - a.score || a.title.localeCompare(b.title)).slice(0, limit);
}

export const searchTypeLabel: Record<SearchItem["type"], string> = {
  article: "Article",
  hub: "Topic hub",
  tool: "Tool",
  page: "Page",
};
