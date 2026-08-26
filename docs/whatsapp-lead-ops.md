# WhatsApp lead ops (Hidden China Travel)

Use this after a contact / planner / services form lands in Zoho.

Official chat: https://wa.me/message/BMLOZTJY2QDXG1  
Business number: +63 977 345 0712 (Philippine number from earlier years abroad; work is from Kunming.)

## Goal

Move quotes and deposit nudges off slow email threads. Prefer the traveler opening your chat first; otherwise message them only when they opted in.

Position as **local partner for independent China travel** — not a tour agency. Same brand as the site and Stripe: **Hidden China Travel**.

---

## Business profile checklist

Configure in WhatsApp Business (phone) or WhatsApp Web → Settings → Business tools → Profile.

| Field | Value |
|---|---|
| Display name | `Hidden China Travel` (Meta may review 1–3 days) |
| Category | Travel company / Travel & tourism |
| Description | Local partner for independent China travel — custom itineraries, booking help & on-trip support. Based in Kunming, China. Not a tour agency. Paid planning is fee-only; some guides include labeled affiliate links. Mon–Fri 9AM–9PM China time. |
| Hours | Mon–Fri 09:00–21:00, Asia/Shanghai |
| Website | https://hiddenchinatravel.com |
| Email | joy.liu@hiddenchinatravel.com |
| Address | Kunming, Yunnan, China |
| Photo | Site logo (`public/brand/logo.png`) |

Use **Catalog** for fixed-price **service fees** only (aligned with Stripe — see `docs/stripe-products.md`). Not tour packages or OTA inventory.

Do **not** mass-broadcast. Do **not** change the phone number.

### Live account status (2026-08-17, WhatsApp Web)

Done on [web.whatsapp.com](https://web.whatsapp.com/) Business profile:

- Hours: Mon–Fri 9:00 AM–9:00 PM China time; Saturday and Sunday closed (was 24/7)
- Description, address (`Kunming, Yunnan, China`), website, email
- Categories: 旅遊資訊中心 + 旅行社 (removed 導遊). Prefer dropping 旅行社 on the phone if the chip still shows.
- Avatar was already the brand logo

**Phone app only** (Web has no editor, or Save does not persist) — full steps: [Phone app checklist](#phone-app-checklist-web-cannot-finish).

1. Display name → `Hidden China Travel`
2. Greeting + Away messages
3. Six Quick Replies
4. Six Lists: `New lead`, `Planner`, `Quote sent`, `Paid`, `On-trip`, `Cold`
5. Drop 旅行社 category if still shown
6. Re-export QR after name approval → replace `public/brand/whatsapp-qr-card.webp`

Site prefill already includes the brand name (`src/lib/whatsapp.ts`).

### Catalog (service fees — live 2026-08-18)

WhatsApp Web → **工具 → 目錄**. Ten items, USD amounts in descriptions (WhatsApp may show PHP on a +63 account — always say **US dollars** in chat when sending a link).

| # | Name | From (USD) | SKU |
|---|---|---|---|
| 1 | Custom Itinerary — up to 5 days | 99 | `plan-5d` |
| 2 | Custom Itinerary — 6–10 days | 129 | `plan-6-10d` |
| 3 | Custom Itinerary — 10+ days | 199 | `plan-10d` |
| 4 | Itinerary Review — 30 minutes | 25 | `review-30m` |
| 5 | Itinerary Review — 1 hour | 50 | `review-1h` |
| 6 | On-Trip Quick Help — 5 questions | 29.90 | `ontrip-5q` |
| 7 | Booking Help — under US$100 | 5 | `book-under100` |
| 8 | Booking Help — domestic flight | 10 | `book-dom-flight` |
| 9 | Booking Help — intl flight (standard) | 15 | `book-intl-std` |
| 10 | Booking Help — intl flight (complex) | 20 | `book-intl-cpx` |

Each item links to `https://hiddenchinatravel.com/china-itinerary-planner`, origin **China**, logo image. Descriptions say *service fee only* / *not a tour package*.

**In catalog:** fixed planning, review, on-trip, and booking-help service fees.  
**Not in catalog:** Survival Kit (free bonus), early-bird vs standard tier pick (confirm in chat), $100+ booking % fees (Stripe Invoice), one-off quotes.

New items may show **under review** until Meta approves — normal for Business Catalog.

**Currency note (+63 number):** Catalog prices display as **PHP** (Philippines default). Amounts match USD service fees numerically; descriptions say *US$*. WhatsApp does **not** let you change currency after a product is saved — only fix is delete + recreate with **USD** chosen at creation (if the phone app offers it). In chat, always confirm **US dollars** and send the Stripe link for actual payment.

---

## Phone app checklist (Web cannot finish)

Do these on the **WhatsApp Business phone app** (linked device). WhatsApp Web profile hours/description are done; Catalog (10 items) is done on Web. Web **Save** for quick replies often fails — use the phone.

### 1. Display name

**Path:** Settings → Business tools → Business profile → **Name**  
**Set to:** `Hidden China Travel`  
Meta may review **1–3 days**. Until approved, QR and public link may still show `hiddenchinatravel`.

### 2. Categories

**Path:** Business profile → **Category**  
**Keep:** Travel & tourism / 旅遊資訊中心  
**Remove if shown:** 旅行社 (looks like a tour agency)

### 3. Greeting + Away

**Path:** Settings → Business tools → **Greeting message** / **Away message**  
Turn **on** both. Paste copy from [Greeting](#greeting-new-chat--14-days-inactive) and [Away](#away-outside-business-hours) below.

### 4. Quick replies (6)

**Path:** Settings → Business tools → **Quick replies** → Add  
For each row: **Shortcut** (left) + **Message** (right) → tap **Save** on the phone (not Web).

| Shortcut | Message (paste) |
|---|---|
| `/hello` | See [/hello](#hello--form-opt-in-no-inbound-yet) below |
| `/plan` | See [/plan](#plan--send-them-to-the-planner) below |
| `/quote` | See [/quote](#quote--before-sending-a-price) below |
| `/pay` | See [/pay](#pay--sending-a-payment-link-or-invoice) below |
| `/hours` | See [/hours](#hours--response-time) below |
| `/number` | See [/number](#number--why-63) below |

Replace `{name}` in `/hello` when sending.

### 5. Lists / labels (6)

**Path:** Chats → **⋮** or filter bar → **Manage lists** (分類名單) → Create  
Create exactly:

`New lead` · `Planner` · `Quote sent` · `Paid` · `On-trip` · `Cold`

Apply one primary list per chat; update as the thread moves (see [Chat labels](#chat-labels)).

### 6. After display name is approved

1. Business tools → **Short link** / QR → export new QR card  
2. Replace `public/brand/whatsapp-qr-card.webp` on the site  
3. Spot-check: profile name, catalog visible to test contact, one quick reply in a test chat

### Optional — Catalog USD on phone

If the phone **Add product** form shows a currency picker before first save, you could delete all 10 Web items and re-add with **USD**. Not required if descriptions + `/pay` already state USD; Stripe is the payment source of truth.

**Done on Web (no phone needed):** profile hours/description/address/website/email, avatar, **Catalog 10 items** (2026-08-18).

---

## Automated messages

Set these on the **WhatsApp Business phone app** (Settings → Business tools → Greeting message / Away message). They are not in WhatsApp Web settings.

### Greeting (new chat / 14 days inactive)

```
Hi — thanks for messaging Hidden China Travel.

We're your local partner for independent China travel (not a tour agency). Joy usually replies within ~30 minutes during business hours (Mon–Fri, 9AM–9PM China time).

Planning a trip? Share: cities · dates · trip length · what you're unsure about (visa, payments, trains).

Start here: https://hiddenchinatravel.com/china-itinerary-planner
```

### Away (outside business hours)

```
Thanks for your message — we're outside business hours (Mon–Fri, 9AM–9PM, China time).

We'll reply on the next business day. For free prep while you wait: https://hiddenchinatravel.com/survival-kit
```

---

## Quick replies

Type `/` in a chat, then the shortcut.

### `/hello` — form opt-in, no inbound yet

```
Hi {name}, this is Joy from Hidden China Travel — you just sent a China trip request via our site. Happy to continue here if easier than email.
```

### `/plan` — send them to the planner

```
The fastest way to start is the itinerary form (cities, dates, pace, and what you care about):

https://hiddenchinatravel.com/china-itinerary-planner

Once that’s in, I’ll reply with next steps and pricing. Nothing is charged until we confirm scope.
```

### `/quote` — before sending a price

```
Before I send the quote, can you confirm:

• Cities / route
• Dates and trip length
• Service (custom itinerary / review / booking help / on-trip)
• Early-bird vs standard, if this is a custom itinerary

I’ll send a written quote next. Payment is in USD via Stripe.
```

### `/pay` — sending a Payment Link or Invoice

```
Here’s the payment link for the service fee we confirmed. It’s priced in US dollars (US$X). Stripe checkout may also show a converted amount in your local currency (you can switch back to USD before confirming).

You’ll see Hidden China Travel on the page, plus terms and a receipt/invoice to the email you enter.

You can also browse our service fees in the WhatsApp catalog (planning, review, on-trip help, booking help) — I’ll still send the exact Stripe link for what we agreed.

For booking help on items US$100+, I’ll send a personalized Stripe Invoice instead of a catalog link (so the line item matches your name and booking).
```

### `/hours` — response time

```
We’re usually on WhatsApp Mon–Fri, 9AM–9PM China time, and reply within about 30 minutes during those hours. Planner requests (custom itinerary) take 24–48 hours after we have the details.
```

### `/number` — why +63

```
This WhatsApp number is Philippine (+63) from years living there. I work from Kunming, China — same Hidden China Travel team as hiddenchinatravel.com. You’re in the right place.
```

---

## Chat labels

WhatsApp Web now calls these **分類名單** (Lists); the phone Business app may still say Labels. Apply one primary label; update as the thread moves.

| Label | When |
|---|---|
| `New lead` | First inbound or just submitted a form |
| `Planner` | Came through / is working on a custom itinerary |
| `Quote sent` | Quote sent, waiting for yes |
| `Paid` | Planning or booking fee received |
| `On-trip` | Active on-trip help credits |
| `Cold` | No reply after the 7-day mark |

---

## When a new lead email arrives

1. **Within 15–30 minutes**, open the notify email.
2. Check lines:
   - `WhatsApp: +…` / `(not provided)`
   - `WhatsApp opt-in: yes` / `no`
3. Also watch WhatsApp Business for an inbound chat from the success-page **Continue on WhatsApp** button.
4. Label the chat `New lead` (or `Planner` if it came from the itinerary form).

## Path A — they messaged you first (best)

Reply in that thread. Reference their request (cities / days / service). Keep email as backup for deposit receipts. Use `/hours` or `/plan` if you need a template.

## Path B — opt-in + number, no inbound yet

Message from the **Business** number (do not silently “add friend” and wait). Use `/hello`, then still send a **short email** confirming you received the request (in case WhatsApp is filtered).

## Path C — email only (no WhatsApp / no opt-in)

Stay on email. After quote, invite WhatsApp once:

```
Happy to continue on WhatsApp if easier — reply here or use: https://wa.me/message/BMLOZTJY2QDXG1
```

## After you send a quote

- Prefer WhatsApp for clarifications and “shall I send the deposit link?”
- Deposit / payment URL still via message or email (keep a written trail).
- Use `/pay` when sending Stripe. Catalog Payment Links = fixed packs. Personalized booking / $100+ % fees → Stripe Invoice (see `docs/stripe-products.md`).
- If no reply: nudge once at **~36 hours**, then label `Cold` at **7 days**.

## Do not

- Cold-message numbers without opt-in
- Mass-broadcast from the Business number
- Drop personal numbers in Reddit public comments (use site form or official wa.me)
- Reuse a catalog Payment Link for one-off / $100+ booking fees
