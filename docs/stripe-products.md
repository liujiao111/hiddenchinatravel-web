# Stripe product catalog — Hidden China Travel

Currency: **USD**. Create each row as a **Product** with a **one-time Price** (not subscription).

Statement descriptor / business name: `Hidden China Travel`

Legal links (after Cloudflare purge if needed):

- Terms: https://hiddenchinatravel.com/terms-of-service
- Privacy: https://hiddenchinatravel.com/privacy-policy

Source of truth on site: `src/lib/services/content.ts`, `secondary-services.ts`, `differentiator.ts`.

---

## A. Custom itinerary planning

| Product name | Description (paste into Stripe) | Price |
|---|---|---|
| Custom Itinerary — Up to 5 Days (Early Bird) | 1-on-1 custom China itinerary PDF for trips up to 5 days. Hand-crafted local route for your dates, pace, and interests. Delivered in 48–72 hours after scope confirmation. Includes Complete China Survival Kit bonus. One structured revision included. | $99 |
| Custom Itinerary — Up to 5 Days | Same deliverable as early-bird: custom PDF itinerary (≤5 days), 48–72h delivery after confirmation, Survival Kit bonus, one revision. | $129 |
| Custom Itinerary — 6–10 Days (Early Bird) | 1-on-1 custom China itinerary PDF for 6–10 day trips. Local handcrafted route, 48–72h delivery after confirmation, Survival Kit included, one structured revision. | $129 |
| Custom Itinerary — 6–10 Days | Custom PDF itinerary for 6–10 days; 48–72h delivery after confirmation; Survival Kit + one revision. | $169 |
| Custom Itinerary — 10+ Days (Early Bird) | 1-on-1 custom China itinerary PDF for trips longer than 10 days. Local handcrafted multi-city route, 48–72h delivery after confirmation, Survival Kit included, one structured revision. | $199 |
| Custom Itinerary — 10+ Days | Custom PDF itinerary for 10+ days; 48–72h delivery after confirmation; Survival Kit + one revision. | $219 |

---

## B. On-trip quick help

| Product name | Description (paste into Stripe) | Price |
|---|---|---|
| On-Trip Quick Help — 5 Questions | 5 quick-answer credits for “what do I do now” moments while traveling in China. Message during business hours (9AM–9PM Mon–Fri, China time); typical replies within ~30 minutes. Information support only — not 24/7 concierge or emergency dispatch. | $29.90 |

---

## C. Existing itinerary review

| Product name | Description (paste into Stripe) | Price |
|---|---|---|
| Itinerary Review — 30 Minutes | Local review of your existing China plan (blog / friend / ChatGPT draft). We flag what’s overrated, missing, or impractical. 30-minute session. | $25 |
| Itinerary Review — 1 Hour | Same review service for a full hour of local insight and concrete swap suggestions. | $50 |

---

## D. Booking assistance (service fee only — ticket/hotel cost paid separately)

| Product name | Description (paste into Stripe) | Price |
|---|---|---|
| Booking Help — Domestic Flight | Service fee only (no markup on the ticket). We compare options, book for you, and send the receipt. You pay the airline/platform price separately. Stripe receipt emailed at checkout. | $10 |
| Booking Help — International Flight (Standard) | Service fee only for one international flight booking. Ticket cost paid separately. Stripe receipt emailed at checkout. | $15 |
| Booking Help — International Flight (Complex) | Service fee for multi-leg / harder international flight booking help. Ticket cost paid separately. Stripe receipt emailed at checkout. | $20 |
| Booking Help — Hotel / Ticket / Train (under $100) | Service fee only (ticket/hotel cost paid separately). Fixed US$5 when the booking item total is under US$100. For items US$100+, we quote a percentage fee and send a personalized invoice. No markup on the booking itself. Stripe receipt emailed to the address you enter at checkout. | $5 |

Do **not** create a fixed Stripe price for “5% of bookings $100+” — use a **Stripe Invoice** with a custom amount and a customer-recognizable line item (see SOP below).

Do **not** sell Survival Kit as a paid product — it is a bonus with paid custom itineraries.

---

## Payment Link vs Invoice (ops SOP)

| Use | When | What the customer sees |
|---|---|---|
| **Catalog Payment Link** | Fixed-price packs already in the product catalog (custom itinerary tiers, on-trip help, itinerary review, fixed booking-help fees) | Brand name + product description + USD (Adaptive Pricing may also show a local-currency option based on the customer’s IP) |
| **Stripe Invoice** | Personalized booking help, custom % fees ($100+ bookings), one-off quotes, or any charge that needs a customer name / booking ref | Line item they can match to the conversation |

### Invoice line-item template

`Booking help — [Hotel|Train|Ticket|Flight] · [Customer name] · [Item] · Ref [short id]`

Example: `Booking help — Hotel · Aya Tanaka · Shanghai Bund Hotel · Ref AT-0816`

Optional memo: link or short note pointing to the email/WhatsApp thread.

### How to send a personalized Invoice (Dashboard)

1. Stripe → **账单 / Invoices** → **Create invoice**
2. Customer: email used in the conversation (creates/attaches a Stripe Customer)
3. Line item description (must be recognizable):  
   `Booking help — [Hotel|Train|Ticket|Flight] · [Customer name] · [Item] · Ref [short id]`
4. Amount in **USD** (service fee only — never the hotel/ticket cost)
5. Memo: one sentence pointing back to the email/WhatsApp thread
6. Send. Customer pays a hosted invoice page branded as Hidden China Travel, with Terms/Privacy already set at account level.

Do **not** reuse a catalog Payment Link for $100+ percentage fees or one-off quotes.

### Customer email — currency note (paste when sending a Payment Link)

> The service fee is priced in **US dollars** (US$X). Stripe checkout may also show a converted amount in your local currency (Adaptive Pricing; conversion can include a small Stripe fee). You can switch back to **USD** on the payment page before confirming.

Live Payment Links pick presentment currency from the **visitor’s IP**, not the billing-country dropdown. `?prefilled_email=test+location_JP@example.com` is a sandbox/test helper and did **not** override PHP when opened from a Philippines IP. Japanese customers in Japan should see JPY + USD; always include the sentence above so a mismatch does not look like a wrong link.

### Dashboard checklist (account-level)

- Public business name: `Hidden China Travel`
- Terms: https://hiddenchinatravel.com/terms-of-service
- Privacy: https://hiddenchinatravel.com/privacy-policy
- Branding logo + Ocean Teal `#00897b`
- Payment Links: require Terms acceptance + create PDF invoice after payment

---

## Quick paste list (name → amount)

1. Custom Itinerary — Up to 5 Days (Early Bird) → 99.00
2. Custom Itinerary — Up to 5 Days → 129.00
3. Custom Itinerary — 6–10 Days (Early Bird) → 129.00
4. Custom Itinerary — 6–10 Days → 169.00
5. Custom Itinerary — 10+ Days (Early Bird) → 199.00
6. Custom Itinerary — 10+ Days → 219.00
7. On-Trip Quick Help — 5 Questions → 29.90
8. Itinerary Review — 30 Minutes → 25.00
9. Itinerary Review — 1 Hour → 50.00
10. Booking Help — Domestic Flight → 10.00
11. Booking Help — International Flight (Standard) → 15.00
12. Booking Help — International Flight (Complex) → 20.00
13. Booking Help — Hotel / Ticket / Train (under $100) → 5.00

---

## Live Stripe IDs (created 2026-08-05)

| Product | product_id | price_id |
|---|---|---|
| Custom Itinerary — Up to 5 Days (Early Bird) | prod_V0wn88R2SX1RPR | price_1U0uuHCgTiPORVqCqhSCy4Ax |
| Custom Itinerary — Up to 5 Days | prod_V0wnbruJtjNWjI | price_1U0uuICgTiPORVqChoAqrJqK |
| Custom Itinerary — 6–10 Days (Early Bird) | prod_V0wnWWTixkjlZx | price_1U0uuKCgTiPORVqCgMO94mGH |
| Custom Itinerary — 6–10 Days | prod_V0wnrrHIAZQzjZ | price_1U0uuLCgTiPORVqCN62w3SSc |
| Custom Itinerary — 10+ Days (Early Bird) | prod_V0wno4dyoEPUQV | price_1U0uuMCgTiPORVqCPIq6EkAd |
| Custom Itinerary — 10+ Days | prod_V0wnj98YT260AA | price_1U0uuNCgTiPORVqC0Ybj6XFI |
| On-Trip Quick Help — 5 Questions | prod_V0worVLanL89ON | price_1U0uuOCgTiPORVqCs7CwqGva |
| Itinerary Review — 30 Minutes | prod_V0woTBNqPe2cx9 | price_1U0uuQCgTiPORVqCtjgqklfG |
| Itinerary Review — 1 Hour | prod_V0woEkY49GLkuv | price_1U0uuRCgTiPORVqCy78dUCeq |
| Booking Help — Domestic Flight | prod_V0wothRfYwVB9y | price_1U0uuSCgTiPORVqCHBHkQhIQ |
| Booking Help — International Flight (Standard) | prod_V0woC8pdZz9z0l | price_1U0uuTCgTiPORVqCHBEjEuUX |
| Booking Help — International Flight (Complex) | prod_V0woCq6vS7g1dt | price_1U0uuUCgTiPORVqCXtacDYBs |
| Booking Help — Hotel / Ticket / Train (under $100) | prod_V0woU6hyQBvwLd | price_1U0uuWCgTiPORVqCQ0Lsd2JW |
