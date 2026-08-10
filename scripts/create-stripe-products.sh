#!/usr/bin/env bash
# Create Hidden China Travel Stripe products (one-time USD prices).
# Usage: STRIPE_SECRET_KEY=sk_live_xxx ./scripts/create-stripe-products.sh
set -euo pipefail

if [[ -z "${STRIPE_SECRET_KEY:-}" ]]; then
  echo "Set STRIPE_SECRET_KEY first (Dashboard → Developers → API keys)."
  exit 1
fi

create_product() {
  local name="$1"
  local description="$2"
  local amount_cents="$3"

  echo "Creating: $name (\$$(python3 -c "print($amount_cents/100)"))"

  local product_json
  product_json=$(curl -sS https://api.stripe.com/v1/products \
    -u "${STRIPE_SECRET_KEY}:" \
    -d "name=${name}" \
    --data-urlencode "description=${description}" \
    -d "metadata[source]=hiddenchinatravel-catalog")

  local product_id
  product_id=$(python3 -c "import json,sys; print(json.load(sys.stdin)['id'])" <<<"$product_json")

  local price_json
  price_json=$(curl -sS https://api.stripe.com/v1/prices \
    -u "${STRIPE_SECRET_KEY}:" \
    -d "product=${product_id}" \
    -d "currency=usd" \
    -d "unit_amount=${amount_cents}")

  local price_id
  price_id=$(python3 -c "import json,sys; print(json.load(sys.stdin)['id'])" <<<"$price_json")

  echo "  product=$product_id price=$price_id"
}

# A. Custom itinerary
create_product \
  "Custom Itinerary — Up to 5 Days (Early Bird)" \
  "1-on-1 custom China itinerary PDF for trips up to 5 days. Hand-crafted local route for your dates, pace, and interests. Delivered in 48–72 hours after scope confirmation. Includes Complete China Survival Kit bonus. One structured revision included." \
  9900

create_product \
  "Custom Itinerary — Up to 5 Days" \
  "Same deliverable as early-bird: custom PDF itinerary (≤5 days), 48–72h delivery after confirmation, Survival Kit bonus, one revision." \
  12900

create_product \
  "Custom Itinerary — 6–10 Days (Early Bird)" \
  "1-on-1 custom China itinerary PDF for 6–10 day trips. Local handcrafted route, 48–72h delivery after confirmation, Survival Kit included, one structured revision." \
  12900

create_product \
  "Custom Itinerary — 6–10 Days" \
  "Custom PDF itinerary for 6–10 days; 48–72h delivery after confirmation; Survival Kit + one revision." \
  16900

create_product \
  "Custom Itinerary — 10+ Days (Early Bird)" \
  "1-on-1 custom China itinerary PDF for trips longer than 10 days. Local handcrafted multi-city route, 48–72h delivery after confirmation, Survival Kit included, one structured revision." \
  19900

create_product \
  "Custom Itinerary — 10+ Days" \
  "Custom PDF itinerary for 10+ days; 48–72h delivery after confirmation; Survival Kit + one revision." \
  21900

# B. On-trip
create_product \
  "On-Trip Quick Help — 5 Questions" \
  "5 quick-answer credits for “what do I do now” moments while traveling in China. Message during business hours (9AM–9PM Mon–Fri, China time); typical replies within ~30 minutes. Information support only — not 24/7 concierge or emergency dispatch." \
  2990

# C. Review
create_product \
  "Itinerary Review — 30 Minutes" \
  "Local review of your existing China plan (blog / friend / ChatGPT draft). We flag what’s overrated, missing, or impractical. 30-minute session." \
  2500

create_product \
  "Itinerary Review — 1 Hour" \
  "Same review service for a full hour of local insight and concrete swap suggestions." \
  5000

# D. Booking help
create_product \
  "Booking Help — Domestic Flight" \
  "Service fee only (no markup on the ticket). We compare options, book for you, and send the receipt. You pay the airline/platform price separately." \
  1000

create_product \
  "Booking Help — International Flight (Standard)" \
  "Service fee only for one international flight booking; receipt provided. Ticket cost paid separately." \
  1500

create_product \
  "Booking Help — International Flight (Complex)" \
  "Service fee for multi-leg / harder international flight booking help; receipt provided. Ticket cost paid separately." \
  2000

create_product \
  "Booking Help — Hotel / Ticket / Train (under \$100)" \
  "Service fee for one hotel, attraction ticket, train, or ride booking when the item total is under \$100. No markup; receipt provided." \
  500

echo "Done. Created 13 products."
