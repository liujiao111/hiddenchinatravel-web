import { DeferredMount } from "@/components/analytics/deferred-mount";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();

/** Site-wide analytics — deferred so gtag / Vercel scripts miss the LCP window. */
export function SiteAnalytics() {
  return (
    <DeferredMount>
      <Analytics />
      {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
    </DeferredMount>
  );
}
