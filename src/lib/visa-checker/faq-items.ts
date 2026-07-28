export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    id: "visa-free-countries",
    question: "Which countries qualify for China's 30-day visa-free entry?",
    answer:
      "China maintains a list of countries whose ordinary passport holders may enter visa-free for short stays. The list changes — always verify your nationality against the latest official announcement before booking travel.",
  },
  {
    id: "240-hour-transit",
    question: "What is the 240-hour (10-day) visa-free transit policy?",
    answer:
      "Eligible travelers transiting through China to a third country may stay up to 240 hours without a visa in designated regions. You typically need proof of onward travel and must enter through approved ports.",
  },
  {
    id: "purpose-mismatch",
    question: "Can I use visa-free entry for business or family visits?",
    answer:
      "Permitted activities depend on the specific policy. Tourism and short business activities may be allowed under visa-free rules for some nationalities, but work, study, and long-term stays usually require the appropriate visa.",
  },
  {
    id: "extension",
    question: "Can I extend a visa-free stay in China?",
    answer:
      "Visa-free and transit stays generally cannot be extended. If you need to stay longer, you must apply for a visa through the exit-entry administration before your allowed period ends.",
  },
  {
    id: "registration",
    question: "Do I need to register with the police after arrival?",
    answer:
      "Hotels usually register foreign guests automatically. If you stay with friends or in private accommodation, you or your host may need to register with local police within 24 hours.",
  },
  {
    id: "accuracy",
    question: "Is this tool official immigration advice?",
    answer:
      "No. This checker provides general guidance only. Immigration officers make the final decision at the border. Always confirm requirements with official government sources and your airline.",
  },
];

export const policyLastUpdated = "July 2026";
