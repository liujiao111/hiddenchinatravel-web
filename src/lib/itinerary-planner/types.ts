export type PlannerFormValues = {
  destinations: string[];
  days: number;
  travelers: number;
  styles: string[];
  budget: string;
  name: string;
  email: string;
  nationality: string;
  notes: string;
};

export type PlannerFormSource = "home" | "planner";

export const defaultPlannerFormValues = (
  nationality = "United States",
): PlannerFormValues => ({
  destinations: [],
  days: 7,
  travelers: 2,
  styles: [],
  budget: "",
  name: "",
  email: "",
  nationality,
  notes: "",
});
