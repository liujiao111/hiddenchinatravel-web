/**
 * Lightweight self-check for Sarah UX visa gate.
 * Run: npm run test:visa
 */
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import { evaluateVisa } from "../src/lib/visa-checker/evaluate";
import {
  getPortSelectOptions,
  getTransit240Rule,
  getVisaFreeRule,
} from "../src/lib/visa-checker/load-rules";

const beijingPort = getPortSelectOptions()[0]?.value;
assert.ok(beijingPort, "expected at least one transit port");

const transitCsv = readFileSync(
  path.join(
    process.cwd(),
    "data",
    "china_visa_for_foreigners_countries - transit_240_country_rules.csv",
  ),
  "utf8",
);
const transitCountries = transitCsv
  .split(/\r?\n/)
  .map((line) => line.trim())
  .filter((line) => line && !line.startsWith("Country,"));
assert.equal(
  transitCountries.length,
  57,
  "240-hour transit list should have 57 countries",
);

assert.ok(getTransit240Rule("Vietnam"), "Vietnam should be on 240-hour list");
assert.ok(
  getTransit240Rule("Kyrgyzstan"),
  "Kyrgyzstan should be on 240-hour list",
);
assert.equal(
  getVisaFreeRule("Vietnam"),
  undefined,
  "Vietnam must not be on nationwide 30-day visa-free list",
);
assert.equal(
  getVisaFreeRule("Kyrgyzstan"),
  undefined,
  "Kyrgyzstan must not be on nationwide 30-day visa-free list",
);

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

for (const nationality of ["Vietnam", "Kyrgyzstan"] as const) {
  const transitOk = evaluateVisa({
    nationality,
    purpose: "tourism",
    stayDays: 7,
    transitRoute: "third_country_confirmed",
    portId: beijingPort,
  });
  assert.equal(
    transitOk.outcome,
    "transit_240",
    `${nationality} + confirmed third-country transit + valid port should qualify`,
  );

  const noTransit = evaluateVisa({
    nationality,
    purpose: "tourism",
    stayDays: 7,
    transitRoute: "no_transit",
    portId: beijingPort,
  });
  assert.equal(
    noTransit.outcome,
    "visa_required",
    `${nationality} + no_transit must still require a visa for a standalone trip`,
  );
}

console.log("verify-visa-evaluate: all checks passed");
