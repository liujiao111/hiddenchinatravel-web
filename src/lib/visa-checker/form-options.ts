export type SelectOption = {
  value: string;
  label: string;
  searchText?: string;
};

export const purposeOptions: SelectOption[] = [
  { value: "tourism", label: "Tourism" },
  { value: "business", label: "Business" },
  { value: "family_visit", label: "Family / Friends Visit" },
  { value: "exchange", label: "Exchange / Short Visit" },
  { value: "transit", label: "Transit" },
  { value: "study", label: "Study" },
  { value: "work", label: "Work" },
  { value: "journalism", label: "Journalism" },
  { value: "other", label: "Other / Not Sure" },
];

export const stayOptions: SelectOption[] = [
  { value: "3", label: "1–3 days" },
  { value: "10", label: "4–10 days" },
  { value: "30", label: "11–30 days" },
  { value: "31", label: "More than 30 days" },
];

export const transitOptions: SelectOption[] = [
  { value: "no_transit", label: "No transit" },
  {
    value: "third_country_confirmed",
    label: "Third country/region transit with confirmed onward ticket",
  },
  {
    value: "same_country_return",
    label: "Returning to the same country/region",
  },
  { value: "not_sure", label: "Not sure yet" },
];

export const officialSources = [
  {
    label: "National Immigration Administration",
    href: "https://en.nia.gov.cn/",
  },
  {
    label: "Ministry of Foreign Affairs of China",
    href: "https://www.fmprc.gov.cn/mfa_eng/",
  },
  {
    label: "Chinese Consular Service",
    href: "http://cs.mfa.gov.cn/",
  },
  {
    label: "China Visa Application Service Center",
    href: "https://www.visaforchina.cn/",
  },
];
