"use server";

import { evaluateVisa, type VisaCheckInput, type VisaEvaluationResult } from "@/lib/visa-checker/evaluate";

export type CheckVisaPayload = {
  nationality: string;
  purpose: string;
  stayDays: number;
  transitRoute: string;
  portId: string;
};

export async function checkVisaEligibility(
  input: CheckVisaPayload,
): Promise<VisaEvaluationResult> {
  const payload: VisaCheckInput = {
    nationality: input.nationality?.trim() ?? "",
    purpose: input.purpose,
    stayDays: Number(input.stayDays) || 0,
    transitRoute: input.transitRoute,
    portId: input.portId?.trim() ?? "",
  };

  return evaluateVisa(payload);
}
