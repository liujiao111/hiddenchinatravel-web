import { NextResponse } from "next/server";
import { getAffiliateBySlug } from "@/lib/affiliates/links";

type RouteParams = {
  params: Promise<{ slug: string }>;
};

/**
 * Affiliate pretty short links: /go/{slug} → partner destination (302).
 * Source of truth: data/affiliate-links.csv
 */
export async function GET(request: Request, props: RouteParams) {
  const { slug } = await props.params;
  const link = getAffiliateBySlug(slug);

  if (!link) {
    return NextResponse.json(
      { error: "Unknown or inactive affiliate link", slug },
      { status: 404 },
    );
  }

  const referer = request.headers.get("referer") || "";
  // Structured log for Vercel — filter by "affiliate_redirect" in logs.
  console.info(
    JSON.stringify({
      event: "affiliate_redirect",
      affiliate_slug: link.slug,
      partner: link.partner,
      category: link.category,
      referer: referer.slice(0, 300),
    }),
  );

  return NextResponse.redirect(link.destinationUrl, 302);
}
