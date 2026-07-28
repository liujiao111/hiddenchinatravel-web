/**
 * Lightweight self-check for Sarah UX visa gate.
 * Run: npm run test:visa
 */
import assert from "node:assert/strict";
import { evaluateVisa } from "../src/lib/visa-checker/evaluate";
import { getPortSelectOptions } from "../src/lib/visa-checker/load-rules";

const beijingPort = getPortSelectOptions()[0]?.value;
assert.ok(beijingPort, "expected at least one transit port");

const usTourismNoTransit = evaluateVisa({
  nationality: "United States",
  purpose: "tourism",
  stayDays: 7,
  transitRoute: "no_transit",
  portId: beijingPort,
});

assert.equal(
  usTourismNoTransit.outcome,
  "visa_required",
  "US + tourism + no_transit must not be near_miss_240",
);
assert.notEqual(usTourismNoTransit.outcome, "near_miss_240");

const usTransitOk = evaluateVisa({
  nationality: "United States",
  purpose: "tourism",
  stayDays: 7,
  transitRoute: "third_country_confirmed",
  portId: beijingPort,
});

assert.equal(
  usTransitOk.outcome,
  "transit_240",
  "US + confirmed third-country transit + valid port should qualify",
);

const usNotSure = evaluateVisa({
  nationality: "United States",
  purpose: "tourism",
  stayDays: 7,
  transitRoute: "not_sure",
  portId: beijingPort,
});

assert.equal(
  usNotSure.outcome,
  "near_miss_240",
  "US + not_sure may surface incomplete 240h conditions",
);

console.log("verify-visa-evaluate: all checks passed");
