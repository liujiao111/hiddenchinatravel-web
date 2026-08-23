import type { Locale } from "./config";
import {
  PRIMARY_CTA_LABEL,
  SECONDARY_CTA_LABEL,
  WHATSAPP_CARD_TITLE,
  WHATSAPP_FLOAT_HINT,
  WHATSAPP_FLOAT_LABEL,
  WHATSAPP_NAV_LABEL,
} from "@/lib/trust/copy";

export type Dictionary = {
  nav: {
    guides: string;
    tools: string;
    survivalKit: string;
    services: string;
    destinations: string;
    destYunnan: string;
    contact: string;
    about: string;
    planner: string;
    visaChecker: string;
    currencyConverter: string;
    hubVisa: string;
    hubPayments: string;
    hubInternet: string;
    hubNavigation: string;
    hubTransport: string;
    hubFood: string;
    hubHotels: string;
    hubTickets: string;
    hubEssentials: string;
    hubItinerary: string;
    mainAria: string;
    toolsMenuAria: string;
    guidesMenuAria: string;
    destinationsMenuAria: string;
  };
  header: {
    /** Global itinerary planner button label */
    plannerCta: string;
  };
  whatsapp: {
    navLabel: string;
    cardTitle: string;
    floatLabel: string;
    floatHint: string;
  };
  locale: {
    switchAria: string;
    en: string;
    zh: string;
  };
  footer: {
    explore: string;
    guides: string;
    plan: string;
    company: string;
    contact: string;
    destinations: string;
    customItinerary: string;
    reviews: string;
    partners: string;
    disclaimer: string;
    affiliateDisclosure: string;
    affiliateLearnMore: string;
  };
  home: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    /** Line under hero CTAs — local-planning character, no price */
    ctaHint: string;
  };
};

const en: Dictionary = {
  nav: {
    guides: "Survival Guides",
    tools: "Tools",
    survivalKit: "Survival Kit",
    services: "Services",
    destinations: "Destinations",
    destYunnan: "Yunnan",
    contact: "Contact",
    about: "About",
    planner: "China Itinerary Planner",
    visaChecker: "China Visa Checker",
    currencyConverter: "China Currency Converter",
    hubVisa: "Visa",
    hubPayments: "Payments",
    hubInternet: "Internet",
    hubNavigation: "Navigation",
    hubTransport: "Transport",
    hubFood: "Food",
    hubHotels: "Hotels",
    hubTickets: "Tickets",
    hubEssentials: "Travel Essentials",
    hubItinerary: "Itinerary Planning",
    mainAria: "Main",
    toolsMenuAria: "Tools",
    guidesMenuAria: "Survival Guides",
    destinationsMenuAria: "Destinations",
  },
  header: {
    plannerCta: PRIMARY_CTA_LABEL,
  },
  whatsapp: {
    navLabel: WHATSAPP_NAV_LABEL,
    cardTitle: WHATSAPP_CARD_TITLE,
    floatLabel: WHATSAPP_FLOAT_LABEL,
    floatHint: WHATSAPP_FLOAT_HINT,
  },
  locale: {
    switchAria: "Language",
    en: "EN",
    zh: "中文",
  },
  footer: {
    explore: "Explore",
    guides: "Topic hubs",
    plan: "Plan & services",
    company: "Company",
    contact: "Contact",
    destinations: "Destinations",
    customItinerary: "Custom itinerary",
    reviews: "Traveler notes",
    partners: "Planner partnerships",
    disclaimer:
      "Practical guidance for independent travelers — not official visa, immigration, or government advice. Always verify with official sources before you go.",
    affiliateDisclosure:
      "Some links may be affiliate links—at no extra cost to you.",
    affiliateLearnMore: "Learn more",
  },
  home: {
    eyebrow: "For Independent visitors to China",
    title: "Your Local Partner for Independent China Travel",
    subtitle:
      "Tell us your cities and days. We send a 1-on-1 PDF route — not a tour template. Survival Kit prep is included so payments and data work on day one.",
    primaryCta: PRIMARY_CTA_LABEL,
    secondaryCta: SECONDARY_CTA_LABEL,
    ctaHint:
      "Old lanes, quiet cafés, neighborhood food, and the corners only locals name — not a group-tour checklist.",
  },
};

const zh: Dictionary = {
  nav: {
    guides: "生存指南",
    tools: "工具",
    survivalKit: "生存套件",
    services: "服务与定价",
    destinations: "目的地",
    destYunnan: "云南",
    contact: "联系",
    about: "关于",
    planner: "中国行程规划器",
    visaChecker: "中国签证查询",
    currencyConverter: "人民币汇率换算",
    hubVisa: "签证",
    hubPayments: "支付",
    hubInternet: "网络",
    hubNavigation: "导航",
    hubTransport: "交通",
    hubFood: "餐饮",
    hubHotels: "酒店",
    hubTickets: "门票",
    hubEssentials: "旅行必备",
    hubItinerary: "行程规划",
    mainAria: "主导航",
    toolsMenuAria: "工具",
    guidesMenuAria: "生存指南",
    destinationsMenuAria: "目的地",
  },
  header: {
    plannerCta: "规划行程",
  },
  whatsapp: {
    navLabel: "联系我们",
    cardTitle: "扫码联系 Hidden China Travel",
    floatLabel: "联系我们",
    floatHint: "WhatsApp",
  },
  locale: {
    switchAria: "语言",
    en: "EN",
    zh: "中文",
  },
  footer: {
    explore: "探索",
    guides: "主题 Hub",
    plan: "规划与服务",
    company: "关于",
    contact: "联系",
    destinations: "目的地",
    customItinerary: "定制行程",
    reviews: "旅行者点评",
    partners: "规划师合作",
    disclaimer:
      "面向独立旅行者的实用参考，不构成官方签证、移民或政府建议。出行前请核对官方信息来源。",
    affiliateDisclosure: "部分链接可能为联盟推广链接，对你不额外收费。",
    affiliateLearnMore: "了解更多",
  },
  home: {
    eyebrow: "写给独立自由行的旅行者",
    title: "独立中国旅行的本地伙伴",
    subtitle:
      "告诉我们城市和天数，一对一做出可独立执行的 PDF 行程——不是跟团模板。Survival Kit 行前准备包含在内，落地当天支付和网络能用。",
    primaryCta: "规划行程",
    secondaryCta: "获取免费生存套件",
    ctaHint:
      "古巷、秘境、巷子美食、幽静小馆——按本地人的走法排，不是跟团打卡清单。",
  },
};

const dictionaries: Record<Locale, Dictionary> = { en, zh };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}
