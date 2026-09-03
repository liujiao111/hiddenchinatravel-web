"use client";

import { trackEvent } from "@/lib/analytics/track";
import {
  AFFILIATE_CLICK_EVENT,
  affiliateSlugFromHref,
} from "@/lib/affiliates/tracking";
import { useEffect } from "react";

type Props = {
  /** Where the click originated (article, hub, home, etc.) */
  surface: string;
  articleSlug?: string;
};

/**
 * Event delegation for `/go/` anchors in server-rendered HTML (articles).
 * Survival Kit / buy menus track themselves; this covers markdown + hub prose.
 */
export function AffiliateClickTracker({ surface, articleSlug }: Props) {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a");
      if (!anchor) return;
      // Components with their own onClick handler (booking blocks, Survival
      // Kit links, home prep menu) mark themselves so this delegated
      // listener does not double-count the same click in GA4.
      if (anchor.hasAttribute("data-affiliate-tracked")) return;
      const href = anchor.getAttribute("href") || "";
      const slug = affiliateSlugFromHref(href);
      if (!slug) return;
      trackEvent(AFFILIATE_CLICK_EVENT, {
        affiliate_slug: slug,
        surface,
        ...(articleSlug ? { article_slug: articleSlug } : {}),
      });
    }

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [surface, articleSlug]);

  return null;
}
