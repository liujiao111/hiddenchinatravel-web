import { getQuickVisaLookup } from "@/lib/home/get-quick-visa-lookup";

/** Client-fetched visa lookup for deferred homepage widgets. */
export const dynamic = "force-static";

export function GET() {
  return Response.json(getQuickVisaLookup(), {
    headers: {
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
