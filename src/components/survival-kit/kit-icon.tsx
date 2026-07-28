type IconName =
  | "esim"
  | "signal"
  | "alipay"
  | "wallet"
  | "vpn"
  | "shield"
  | "guide"
  | "hotel"
  | "train"
  | "ticket"
  | "flight"
  | "map"
  | "visa"
  | "insurance";

type Props = {
  name: IconName;
  className?: string;
};

export function KitIcon({ name, className }: Props) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "esim":
      return (
        <svg {...common}>
          <rect x="7" y="2" width="10" height="20" rx="2" />
          <path d="M10 6h4M10 18h4" />
        </svg>
      );
    case "signal":
      return (
        <svg {...common}>
          <path d="M6 15v3M10 11v7M14 8v10M18 5v13" />
        </svg>
      );
    case "alipay":
    case "wallet":
      return (
        <svg {...common}>
          <rect x="3" y="6" width="18" height="13" rx="2" />
          <path d="M3 10h18M7 14h4" />
        </svg>
      );
    case "vpn":
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
          <path d="M9.5 12l1.8 1.8L15 10" />
        </svg>
      );
    case "flight":
      return (
        <svg {...common}>
          <path d="M10.5 19.5L9 22l-1.5-.75L9 12.5 3.5 14l-1-1.5L9 8.5 3 4.75 4.25 3.5 11 6.5l5.5-4.25L18 3.5 12.5 9l4.5 5.5-1.5 1L12 12.5l-1.5 7z" />
        </svg>
      );
    case "hotel":
      return (
        <svg {...common}>
          <path d="M4 20V8l8-4 8 4v12" />
          <path d="M9 20v-6h6v6M9 10h.01M15 10h.01" />
        </svg>
      );
    case "train":
      return (
        <svg {...common}>
          <rect x="6" y="3" width="12" height="14" rx="2" />
          <path d="M6 17l-2 4M18 17l2 4M9 20h6M10 8h4M10 12h4" />
        </svg>
      );
    case "ticket":
      return (
        <svg {...common}>
          <path d="M4 8a2 2 0 002-2h12a2 2 0 012 2v2a2 2 0 00-2 2 2 2 0 002 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2a2 2 0 002-2 2 2 0 00-2-2V8z" />
        </svg>
      );
    case "map":
      return (
        <svg {...common}>
          <path d="M9 4l-5 2v14l5-2 6 2 5-2V4l-5 2-6-2z" />
          <path d="M9 4v14M15 6v14" />
        </svg>
      );
    case "visa":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <circle cx="9" cy="12" r="2" />
          <path d="M14 10h4M14 14h3" />
        </svg>
      );
    case "insurance":
      return (
        <svg {...common}>
          <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
          <path d="M12 9v4M12 16h.01" />
        </svg>
      );
    case "guide":
    default:
      return (
        <svg {...common}>
          <path d="M5 4h11a2 2 0 012 2v14l-4-2-4 2-4-2-4 2V6a2 2 0 012-2z" />
          <path d="M9 8h6M9 12h6" />
        </svg>
      );
  }
}
