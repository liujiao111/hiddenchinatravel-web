import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();

/** Site-wide analytics: Vercel Web Analytics + optional GA4. */
export function SiteAnalytics() {
  return (
    <>
      <Analytics />
      {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
    </>
  );
}
