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
| Description | Local partner for independent China travel — custom itineraries, booking help & on-trip support. Based in Kunming, China. Not a tour agency; commission-neutral advice. Mon–Fri 9AM–9PM China time. |
| Hours | Mon–Fri 09:00–21:00, Asia/Shanghai |
| Website | https://hiddenchinatravel.com |
| Email | joy.liu@hiddenchinatravel.com |
| Address | Kunming, Yunnan, China |
| Photo | Site logo (`public/brand/logo.png`) |

Do **not** use Catalog (this is consult + booking-help, not OTA packages).

Do **not** mass-broadcast. Do **not** change the phone number.

---

## Automated messages

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

Apply one primary label; update as the thread moves.

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
