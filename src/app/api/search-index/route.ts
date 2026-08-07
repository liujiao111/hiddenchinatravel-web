import { getSearchIndex } from "@/lib/search/build-index";

/** Cached search catalog for header autocomplete — keeps layout HTML lean. */
export const dynamic = "force-static";

export function GET() {
  return Response.json(getSearchIndex(), {
    headers: {
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
