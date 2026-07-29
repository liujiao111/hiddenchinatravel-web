import type { NextConfig } from "next";

/**
 * SEO cutover redirects (WordPress → Next).
 * All permanent (301) so Google consolidates equity to the new URLs.
 * Do not recreate /category/* or the four retired destination posts.
 */
const wordpressCutoverRedirects = [
  // --- Yoast sitemap endpoints → Next sitemap ---
  {
    source: "/sitemap_index.xml",
    destination: "/sitemap.xml",
    permanent: true,
  },
  {
    source: "/post-sitemap.xml",
    destination: "/sitemap.xml",
    permanent: true,
  },
  {
    source: "/page-sitemap.xml",
    destination: "/sitemap.xml",
    permanent: true,
  },
  {
    source: "/category-sitemap.xml",
    destination: "/sitemap.xml",
    permanent: true,
  },

  // --- WP category archives → topic hubs (closest topical match) ---
  {
    source: "/category/china-attraction-tickets",
    destination: "/attraction-tickets-in-china",
    permanent: true,
  },
  {
    source: "/category/china-food-delivery",
    destination: "/food-delivery-in-china",
    permanent: true,
  },
  {
    source: "/category/china-internet-vpn",
    destination: "/internet-in-china",
    permanent: true,
  },
  {
    source: "/category/china-maps-navigation",
    destination: "/maps-navigation-in-china",
    permanent: true,
  },
  {
    source: "/category/china-transport",
    destination: "/transport-in-china",
    permanent: true,
  },
  {
    source: "/category/hotels-in-china",
    destination: "/hotels-in-china",
    permanent: true,
  },
  {
    source: "/category/payments-in-china",
    destination: "/payments-in-china",
    permanent: true,
  },
  {
    source: "/category/travel-china-essentials",
    destination: "/china-travel-essentials",
    permanent: true,
  },
  {
    source: "/category/visa-entry",
    destination: "/china-visa-checker",
    permanent: true,
  },
  {
    source: "/category/yunnan-travel",
    destination: "/china-destinations",
    permanent: true,
  },
  // Category RSS (must be before the catch-all)
  {
    source: "/category/:slug/feed",
    destination: "/survival-guides",
    permanent: true,
  },
  // Catch-all for any other legacy category slug
  {
    source: "/category/:slug*",
    destination: "/survival-guides",
    permanent: true,
  },

  // --- Retired destination posts (not migrating) → destinations hub ---
  {
    source:
      "/shuhe-ancient-town-the-quiet-retreat-youre-actually-looking-for-in-lijiang",
    destination: "/china-destinations",
    permanent: true,
  },
  {
    source: "/yubeng-trekking-guide",
    destination: "/china-destinations",
    permanent: true,
  },
  {
    source: "/yunnan-hidden-gems",
    destination: "/china-destinations",
    permanent: true,
  },
  {
    source: "/zhangjiajie-travel-foreigners",
    destination: "/china-destinations",
    permanent: true,
  },

  // --- Common WP leftovers (low SEO value; avoid soft-404s) ---
  {
    source: "/feed",
    destination: "/",
    permanent: true,
  },
  {
    source: "/comments/feed",
    destination: "/",
    permanent: true,
  },
] as const;

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/posts/:slug",
        destination: "/:slug",
        permanent: true,
      },
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/privacy",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/survive-guides",
        destination: "/survival-guides",
        permanent: true,
      },
      {
        source: "/survive-kit",
        destination: "/survival-kit",
        permanent: true,
      },
      {
        source: "/tools/visa-checker",
        destination: "/china-visa-checker",
        permanent: true,
      },
      {
        source: "/destinations",
        destination: "/china-destinations",
        permanent: true,
      },
      ...wordpressCutoverRedirects,
    ];
  },
};

export default nextConfig;
