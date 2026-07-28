# Terracotta（赤陶暖调）— Hidden China Travel

> **已废弃 / SUPERSEDED.** 全站现行规范为 [`tropical-paradise.md`](tropical-paradise.md) 与 `.cursor/rules/tropical-paradise-ui.mdc`。本文仅作历史参考，禁止用于新 UI。

> ~~Site design system (replacing Scandinavian Minimalism for new UI work).~~  
> Canonical tokens now follow Tropical Paradise in [`src/app/globals.css`](src/app/globals.css).

## Conflict note

Stylekit pastes may include neo-brutalism **TEMPLATES / CHECKLIST** (`bg-black`, `font-black`, hard offset shadows, `rounded-none`, `border-black`). Those conflict with Terracotta Style Rules.

**Ignore all brutalism templates.** Implement only from Style Rules + Token dictionary + `[FORBIDDEN]` / `[REQUIRED]` below.

## Tokens

| Role | Hex | CSS var |
|------|-----|---------|
| Primary (clay CTA) | `#b5654a` | `--brand-cta` |
| Primary hover | `#9e5540` | `--brand-cta-hover` |
| Olive accent | `#8b9d77` | `--brand-olive` / `--brand` |
| Cream surface | `#faf5ef` | `--brand-cream` |
| Card / soft | `#fffaf5` / `#f3ebe3` | `--brand-surface` / `--brand-soft` |
| Border | `#d4a373` | `--brand-cream-border` |
| Warm ink | `#7a6350` | `--brand-ink` |
| On-CTA text | `#faf5ef` | `--brand-on` |

## Required patterns

- Buttons: `rounded-lg`, `font-medium`, `px-6 py-3`, `transition-colors duration-300`, `active:scale-95` — use `.btn-brand` / `.btn-hero`
- Cards: `bg-[#faf5ef]` (or `.surface-card`), `rounded-xl`, `border` with `#d4a373` at ~25%
- Inputs: white/cream field, warm border, `focus:border-[#b5654a]`, soft terracotta ring

## Forbidden

- Cool blues / purples / cyan / indigo / neon
- Pure black (`text-black`, `bg-black`) and hard brutalist offset shadows
- `rounded-sm` / `rounded-none` for UI chrome (prefer `rounded-lg` / `rounded-xl`)
- Loud gradients as the main visual system
- Inter / Roboto / Geist for UI (keep **Outfit**)

## Accent usage

- **Terracotta** = primary CTAs only
- **Olive** = secondary emphasis (eyebrows, icons, soft highlights) — not primary buttons

## Copy

Visual restyles should not rewrite marketing copy unless explicitly requested.
