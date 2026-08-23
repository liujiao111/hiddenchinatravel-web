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
    destination: "/china-destinations/yunnan",
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
    destination: "/china-destinations/yunnan",
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
  {
    source: "/author/:slug*",
    destination: "/about",
    permanent: true,
  },
  {
    source: "/tag/:slug*",
    destination: "/survival-guides",
    permanent: true,
  },
  {
    source: "/page/:num(\\d+)",
    destination: "/survival-guides",
    permanent: true,
  },
  {
    source: "/wp-admin/:path*",
    destination: "/",
    permanent: true,
  },
  {
    source: "/wp-login.php",
    destination: "/",
    permanent: true,
  },
  {
    source: "/xmlrpc.php",
    destination: "/",
    permanent: true,
  },
] as const;

const nextConfig: NextConfig = {
  // Cursor / port-forward previews hit 127.0.0.1; without this, HMR and
  // /_next chunks can stay stale and keep serving the old visa widget.
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  // Native decoder used by markdownToHtml — keep off the client bundle.
  serverExternalPackages: ["sharp"],
  // Keep URLs without trailing slash so HTML canonical, sitemap, and GSC agree.
  trailingSlash: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
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
        source: "/terms",
        destination: "/terms-of-service",
        permanent: true,
      },
      {
        source: "/tos",
        destination: "/terms-of-service",
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
        source: "/china-visa-checker/usa",
        destination: "/china-visa-checker/united-states",
        permanent: true,
      },
      {
        source: "/china-visa-checker/us",
        destination: "/china-visa-checker/united-states",
        permanent: true,
      },
      {
        source: "/china-visa-checker/uk",
        destination: "/china-visa-checker/united-kingdom",
        permanent: true,
      },
      {
        source: "/china-visa-checker/korea",
        destination: "/china-visa-checker/south-korea",
        permanent: true,
      },
      {
        source: "/destinations",
        destination: "/china-destinations",
        permanent: true,
      },
      // Missing draft guides referenced from visa articles (Semrush broken links)
      {
        source: "/china-l-visa-tourist-guide",
        destination: "/do-i-need-a-visa-for-china",
        permanent: true,
      },
      {
        source: "/china-entry-border-immigration-guide",
        destination: "/do-i-need-a-visa-for-china",
        permanent: true,
      },
      {
        source: "/china-240-hour-transit-visa-free",
        destination: "/china-visa-checker",
        permanent: true,
      },
      // Soft-404 / thin WP leftovers that still show up in GSC discoveries
      {
        source: "/wp-content/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/wp-includes/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/wp-json/:path*",
        destination: "/",
        permanent: true,
      },
      ...wordpressCutoverRedirects,
    ];
  },
  async headers() {
    return [
      {
        source: "/search",
        headers: [{ key: "X-Robots-Tag", value: "noindex, follow" }],
      },
      {
        source: "/checkout/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, follow" }],
      },
      {
        source: "/api/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
