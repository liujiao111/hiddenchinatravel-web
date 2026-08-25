export type PlannerFormValues = {
  destinations: string[];
  yunnanShape: string;
  days: number;
  travelers: number;
  styles: string[];
  budget: string;
  name: string;
  email: string;
  whatsapp: string;
  whatsappOptIn: boolean;
  nationality: string;
  notes: string;
};

export type PlannerFormSource = "home" | "planner";

export const defaultPlannerFormValues = (
  nationality = "",
): PlannerFormValues => ({
  destinations: [],
  yunnanShape: "",
  days: 7,
  travelers: 2,
  styles: [],
  budget: "",
  name: "",
  email: "",
  whatsapp: "",
  whatsappOptIn: false,
  nationality,
  notes: "",
});
