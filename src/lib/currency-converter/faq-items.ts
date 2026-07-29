export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    id: "mid-market",
    question: "Is this the rate I will get at an ATM or airport?",
    answer:
      "No. This tool shows a mid-market (interbank) reference rate. Banks, ATMs, airport desks, and hotels usually add a markup or worse cash rate on top. Expect to receive fewer yuan than the mid-market number for the same foreign-currency spend.",
  },
  {
    id: "alipay-rate",
    question: "What rate does Alipay or WeChat Pay use?",
    answer:
      "When you pay in China with a linked foreign card, the card network and your bank set the conversion — often closer to mid-market than airport cash desks, but still with possible FX fees. Check your bank’s foreign-transaction fee before you travel.",
  },
  {
    id: "how-much-cash",
    question: "How much cash (RMB) should I carry?",
    answer:
      "Many travelers keep a small backup — often around 200–500 RMB in small bills — for taxis, temples, or places that still prefer cash. Mobile payment covers most urban purchases once Alipay or WeChat Pay is set up.",
  },
  {
    id: "update-frequency",
    question: "How often are these exchange rates updated?",
    answer:
      "Rates are refreshed about once per hour from a public FX data feed. The page shows the last successful update time. Markets move; always treat the figure as a planning estimate.",
  },
  {
    id: "financial-advice",
    question: "Is this financial advice?",
    answer:
      "No. Hidden China Travel provides this converter for travel budgeting only. It is not financial, tax, or investment advice. Actual rates and fees are set by your bank, payment app, or exchange counter.",
  },
];
