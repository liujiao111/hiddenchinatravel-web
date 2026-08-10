#!/usr/bin/env bash
# Create $1 test product + Payment Links for all catalog products.
# Usage: STRIPE_SECRET_KEY=rk_live_xxx ./scripts/create-stripe-payment-links.sh
# Needs: Products Write, Prices Write, Payment Links Write
set -euo pipefail

if [[ -z "${STRIPE_SECRET_KEY:-}" ]]; then
  echo "Set STRIPE_SECRET_KEY first."
  exit 1
fi

AUTH=(-u "${STRIPE_SECRET_KEY}:")
OUT_MD="$(cd "$(dirname "$0")/.." && pwd)/docs/stripe-payment-links.md"

json_get() {
  python3 -c "import json,sys; d=json.load(sys.stdin); print(d$1)"
}

create_link() {
  local name="$1"
  local price_id="$2"
  local json url link_id
  json=$(curl -sS https://api.stripe.com/v1/payment_links \
    "${AUTH[@]}" \
    -d "line_items[0][price]=${price_id}" \
    -d "line_items[0][quantity]=1" \
    -d "after_completion[type]=hosted_confirmation" \
    --data-urlencode "after_completion[hosted_confirmation][custom_message]=Thanks — Hidden China Travel received your payment. We’ll follow up by email shortly." \
    -d "metadata[catalog]=hiddenchinatravel" \
    --data-urlencode "metadata[product_name]=${name}")
  if echo "$json" | python3 -c "import json,sys; d=json.load(sys.stdin); sys.exit(0 if 'id' in d else 1)"; then
    link_id=$(echo "$json" | json_get "['id']")
    url=$(echo "$json" | json_get "['url']")
    echo "OK  $name"
    echo "    $url"
    echo "| $name | \`$price_id\` | $url |" >> "$OUT_MD"
  else
    echo "FAIL $name"
    echo "$json" | python3 -c "import json,sys; d=json.load(sys.stdin); print(d.get('error',d))"
    exit 1
  fi
}

{
  echo "# Stripe Payment Links — Hidden China Travel"
  echo
  echo "Generated: $(date -u +%Y-%m-%dT%H:%M:%SZ)"
  echo
  echo "| Product | price_id | Payment Link |"
  echo "|---|---|---|"
} > "$OUT_MD"

echo "=== \$1 test product ==="
TEST_PRODUCT=$(curl -sS https://api.stripe.com/v1/products \
  "${AUTH[@]}" \
  -d "name=Test Payment \$1" \
  --data-urlencode "description=Internal test charge — \$1. Safe to delete after Stripe checkout testing." \
  -d "metadata[source]=hiddenchinatravel-test")
TEST_PRODUCT_ID=$(echo "$TEST_PRODUCT" | json_get "['id']")
TEST_PRICE=$(curl -sS https://api.stripe.com/v1/prices \
  "${AUTH[@]}" \
  -d "product=${TEST_PRODUCT_ID}" \
  -d "currency=usd" \
  -d "unit_amount=100")
TEST_PRICE_ID=$(echo "$TEST_PRICE" | json_get "['id']")
echo "product=$TEST_PRODUCT_ID price=$TEST_PRICE_ID"
create_link "Test Payment \$1" "$TEST_PRICE_ID"

echo
echo "=== Catalog payment links ==="

# From docs/stripe-products.md live IDs (2026-08-05)
create_link "Custom Itinerary — Up to 5 Days (Early Bird)" "price_1U0uuHCgTiPORVqCqhSCy4Ax"
create_link "Custom Itinerary — Up to 5 Days" "price_1U0uuICgTiPORVqChoAqrJqK"
create_link "Custom Itinerary — 6–10 Days (Early Bird)" "price_1U0uuKCgTiPORVqCgMO94mGH"
create_link "Custom Itinerary — 6–10 Days" "price_1U0uuLCgTiPORVqCN62w3SSc"
create_link "Custom Itinerary — 10+ Days (Early Bird)" "price_1U0uuMCgTiPORVqCPIq6EkAd"
create_link "Custom Itinerary — 10+ Days" "price_1U0uuNCgTiPORVqC0Ybj6XFI"
create_link "On-Trip Quick Help — 5 Questions" "price_1U0uuOCgTiPORVqCs7CwqGva"
create_link "Itinerary Review — 30 Minutes" "price_1U0uuQCgTiPORVqCtjgqklfG"
create_link "Itinerary Review — 1 Hour" "price_1U0uuRCgTiPORVqCy78dUCeq"
create_link "Booking Help — Domestic Flight" "price_1U0uuSCgTiPORVqCHBHkQhIQ"
create_link "Booking Help — International Flight (Standard)" "price_1U0uuTCgTiPORVqCHBEjEuUX"
create_link "Booking Help — International Flight (Complex)" "price_1U0uuUCgTiPORVqCXtacDYBs"
create_link "Booking Help — Hotel / Ticket / Train (under \$100)" "price_1U0uuWCgTiPORVqCQ0Lsd2JW"

echo
echo "Wrote $OUT_MD"
echo "Done."
