import { DeferredGoogleAnalytics } from "@/components/analytics/deferred-google-analytics";
import { Analytics } from "@vercel/analytics/next";

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();

/** Site-wide analytics: Vercel Web Analytics + optional deferred GA4. */
export function SiteAnalytics() {
  return (
    <>
      <Analytics />
      {gaId ? <DeferredGoogleAnalytics gaId={gaId} /> : null}
    </>
  );
}
