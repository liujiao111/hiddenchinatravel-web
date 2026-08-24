/**
 * Lightweight self-check for Sarah UX visa gate.
 * Run: npm run test:visa
 */
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import { evaluateVisa } from "../src/lib/visa-checker/evaluate";
import {
  getHainan30Rule,
  getPortSelectOptions,
  getTransit240Rule,
  getVisaFreeRule,
} from "../src/lib/visa-checker/load-rules";
import { getCountryVisaPage } from "../src/lib/visa-checker/country-pages";

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
assert.ok(getHainan30Rule("Vietnam"), "Vietnam should be on Hainan 30-day list");
assert.ok(
  getHainan30Rule("Kyrgyzstan"),
  "Kyrgyzstan should be on Hainan 30-day list",
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
  assert.match(
    noTransit.headline,
    /240-hour transit and Hainan 30-day stay/i,
    `${nationality} no-transit result should lead with the two visa-free paths`,
  );
  assert.match(
    noTransit.summary,
    /Hainan/i,
    `${nationality} no-transit summary should mention Hainan`,
  );
}

const hainanPort = getPortSelectOptions().find((p) =>
  /haikou|sanya/i.test(`${p.label} ${p.searchText ?? ""}`),
);
assert.ok(hainanPort, "expected a Hainan port in the 240-hour port list");

const vnHainan = evaluateVisa({
  nationality: "Vietnam",
  purpose: "tourism",
  stayDays: 10,
  transitRoute: "no_transit",
  portId: hainanPort.value,
});
assert.equal(
  vnHainan.outcome,
  "hainan_30",
  "Vietnam + Hainan port + stay ≤ 30 should qualify for island visa-free",
);

const vnPage = getCountryVisaPage("vietnam");
assert.ok(vnPage, "Vietnam country page should exist");
assert.match(
  vnPage.conclusionHeadline,
  /Two visa-free paths/i,
  "Vietnam country page should lead with visa-free paths, not a visa-required headline",
);
assert.equal(vnPage.hasHainan30, true);

console.log("verify-visa-evaluate: all checks passed");
