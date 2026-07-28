import type { NextConfig } from "next";

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
    ];
  },
};

export default nextConfig;
