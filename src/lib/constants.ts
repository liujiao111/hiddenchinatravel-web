export const SITE_NAME = "Hidden China Travel";
export const SITE_TAGLINE =
  "Your local partner for independent China travel.";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://hiddenchinatravel.com";

export const SITE_EMAIL = "joy.liu@hiddenchinatravel.com";
/** @deprecated use src/lib/whatsapp.ts */
export const SITE_WHATSAPP = "";
export const SITE_LOCATION = "Kunming, Yunnan, China";
export const SITE_LOCATION_ZH = "中国云南昆明";
export const SITE_FOUNDER_NAME = "Joy Liu";
export const SITE_FOUNDER_PATH = "/about#founder";
export const SITE_FOUNDER_PICTURE = "/brand/founder/avatar-joy.webp";

/** Full horizontal Hidden China Travel wordmark used in site chrome and schema. */
export const SITE_LOGO_PATH = "/brand/logo.webp";
/** Compact square assets remain separate because a horizontal wordmark is not legible as a favicon. */
export const SITE_FAVICON_PATH = "/favicon/favicon-32x32.png";
export const SITE_APPLE_TOUCH_ICON_PATH = "/favicon/apple-touch-icon.png";
export const SITE_HERO_PATH = "/brand/hero-lijiang.webp";

/** ISO date — bump when shipping sitewide content / chrome updates */
export const SITE_LAST_UPDATED = "2026-08-26";

export const socialLinks = [
  {
    id: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@hiddenchinatravel",
  },
  {
    id: "tiktok",
    label: "TikTok",
    href: "https://www.tiktok.com/@hiddenchinatravel",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/hiddenchina_travel",
  },
] as const;

export type SocialLinkId = (typeof socialLinks)[number]["id"];

/** @deprecated use SITE_NAME / content labels instead */
export const CMS_NAME = "Hidden China Travel";

export const HOME_OG_IMAGE_URL = SITE_HERO_PATH;
