import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const AFFILIATE_CSV = "affiliate-links.csv";

export type AffiliateCategory =
  | "esim"
  | "vpn"
  | "hotels"
  | "tickets"
  | "trains"
  | "payments"
  | "general"
  | string;

export type AffiliateLink = {
  /** Pretty path segment, e.g. "airalo" → /go/airalo */
  slug: string;
  category: AffiliateCategory;
  partner: string;
  label: string;
  destinationUrl: string;
  active: boolean;
  notes: string;
};

function parseCsvLine(line: string): string[] {
  const fields: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (inQuotes) {
      if (ch === '"') {
        if (line[i + 1] === '"') {
          current += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        current += ch;
      }
    } else if (ch === '"') {
      inQuotes = true;
    } else if (ch === ",") {
      fields.push(current.trim());
      current = "";
    } else {
      current += ch;
    }
  }
  fields.push(current.trim());
  return fields;
}

function readCsv(fileName: string): string[][] {
  const raw = fs.readFileSync(path.join(DATA_DIR, fileName), "utf8");
  const text = raw.replace(/^\uFEFF/, "").trim();
  if (!text) return [];

  const rows: string[][] = [];
  for (const line of text.split(/\r?\n/)) {
    if (!line.trim()) continue;
    rows.push(parseCsvLine(line));
  }
  return rows;
}

function rowsToObjects(rows: string[][]): Record<string, string>[] {
  if (rows.length < 2) return [];
  const headers = rows[0].map((h) => h.trim());
  return rows.slice(1).map((row) => {
    const obj: Record<string, string> = {};
    headers.forEach((h, i) => {
      obj[h] = (row[i] ?? "").trim();
    });
    return obj;
  });
}

function parseActive(value: string): boolean {
  const v = value.toLowerCase();
  return v === "true" || v === "1" || v === "yes";
}

function loadAffiliateLinks(): AffiliateLink[] {
  return rowsToObjects(readCsv(AFFILIATE_CSV))
    .map((r) => ({
      slug: (r.slug || "").toLowerCase(),
      category: r.category || "general",
      partner: r.partner || "",
      label: r.label || r.partner || r.slug || "",
      destinationUrl: r.destination_url || "",
      active: parseActive(r.active ?? "true"),
      notes: r.notes || "",
    }))
    .filter((link) => link.slug && link.destinationUrl);
}

let cache: {
  all: AffiliateLink[];
  bySlug: Map<string, AffiliateLink>;
} | null = null;

function getCache() {
  if (cache && process.env.NODE_ENV === "production") {
    return cache;
  }
  const all = loadAffiliateLinks();
  cache = {
    all,
    bySlug: new Map(all.map((link) => [link.slug, link])),
  };
  return cache;
}

/** All rows from CSV (including inactive). */
export function getAllAffiliateLinks(): AffiliateLink[] {
  return getCache().all;
}

/** Active links only — use for redirects and public helpers. */
export function getActiveAffiliateLinks(): AffiliateLink[] {
  return getCache().all.filter((link) => link.active);
}

export function getAffiliateBySlug(
  slug: string,
): AffiliateLink | undefined {
  const key = slug.trim().toLowerCase();
  const link = getCache().bySlug.get(key);
  if (!link || !link.active) return undefined;
  return link;
}

/** Site-relative pretty short link, e.g. `/go/airalo`. */
export function affiliatePath(slug: string): string {
  return `/go/${slug.trim().toLowerCase()}`;
}
