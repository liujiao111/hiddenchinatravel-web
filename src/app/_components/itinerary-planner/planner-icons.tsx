type IconProps = { className?: string };

export function StyleFoodIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 11h16M7 5v6m5-8v8m5-4v4M6 11c0 5 2 8 6 8s6-3 6-8"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StyleHistoryIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 20h16M6 20V9l6-4 6 4v11M10 20v-5h4v5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StyleNatureIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21V11M12 11c-3-4-7-5-7-5s2 6 7 5Zm0 0c3-4 7-5 7-5s-2 6-7 5Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StyleOffbeatIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3v3M12 18v3M3 12h3M18 12h3M6.2 6.2l2.1 2.1M15.7 15.7l2.1 2.1M17.8 6.2l-2.1 2.1M8.3 15.7l-2.1 2.1"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

export function StyleFamilyIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="16" cy="8.5" r="2" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M3.5 19c.6-3 2.6-4.5 4.5-4.5S12 16 12.5 19M12.5 19c.4-2.2 1.8-3.5 3.5-3.5s3.2 1.4 3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ScopeCitiesIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.25" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

export function ScopeResponseIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="4"
        y="5"
        width="16"
        height="15"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="M8 3v4M16 3v4M4 10h16"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ScopeSupportIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12a7 7 0 0 1 14 0v5a2 2 0 0 1-2 2h-1v-6h3M5 13h3v6H7a2 2 0 0 1-2-2v-4Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ScopePricingIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M12 7.5v9M9.5 9.5c.5-1 1.4-1.5 2.5-1.5s2 .7 2 1.8-1 1.7-2.5 2.1-2.5.9-2.5 2.1 1 1.8 2.5 1.8 2-.5 2.5-1.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

const styleIconMap = {
  food: StyleFoodIcon,
  history: StyleHistoryIcon,
  nature: StyleNatureIcon,
  offbeat: StyleOffbeatIcon,
  family: StyleFamilyIcon,
} as const;

export function StyleIcon({
  name,
  className = "h-4 w-4",
}: {
  name: keyof typeof styleIconMap;
  className?: string;
}) {
  const Icon = styleIconMap[name];
  return <Icon className={className} />;
}

const scopeIconMap = {
  cities: ScopeCitiesIcon,
  response: ScopeResponseIcon,
  support: ScopeSupportIcon,
  pricing: ScopePricingIcon,
} as const;

export function ScopeIcon({
  name,
  className = "h-5 w-5",
}: {
  name: keyof typeof scopeIconMap;
  className?: string;
}) {
  const Icon = scopeIconMap[name];
  return <Icon className={className} />;
}
