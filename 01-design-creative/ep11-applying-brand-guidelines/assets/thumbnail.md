# Thumbnail Concept — Episode 11: applying-brand-guidelines

**Dimensions:** 1280 x 720px
**Style:** Dark mode, minimal, brand-forward — consistent with channel aesthetic

---

## Core Concept

The thumbnail tells the story in one frame: chaotic, mismatched copy on the left — clean, unified brand copy on the right. A single bold arrow or dividing line in orange separates the two states. The Verdant brand name anchors the right side so viewers immediately understand the context (brand enforcement, not generic AI writing).

---

## ASCII Layout Diagram

```
┌──────────────────────────────────────────────────────────────────┐
│  [DARK BG #141413]                                               │
│                                                                  │
│  ┌──────────────────┐   ┌───┐   ┌──────────────────┐           │
│  │  BEFORE          │   │ → │   │  AFTER           │           │
│  │  [#3a3a38 panel] │   │[#d│   │  [#1e2a1e panel] │           │
│  │                  │   │97 │   │                  │           │
│  │  LEVEL UP YOUR   │   │75 │   │  Made to nourish │           │
│  │  WELLNESS        │   │7] │   │  what daily life │           │
│  │  JOURNEY!!!      │   │   │   │  depletes.       │           │
│  │  [red strike]    │   └───┘   │  [green check]   │           │
│  └──────────────────┘           └──────────────────┘           │
│                                                                  │
│  ┌─────────────────────────────────────────────────┐           │
│  │  HEADLINE TEXT (bottom third, left-aligned)     │           │
│  │  "One skill. One voice."  [Poppins Bold, white] │           │
│  └─────────────────────────────────────────────────┘           │
│                                                                  │
│  [EP 11] [orange pill, top-left corner]                         │
│  [VERDANT wordmark, subtle, bottom-right]                       │
└──────────────────────────────────────────────────────────────────┘
```

---

## Element Descriptions

### Background
- Full-bleed dark background: `#141413`
- Subtle noise texture overlay at 4% opacity — prevents flat/CG look

### Left Panel (Before)
- Slightly lighter dark panel: `#3a3a38` or a warm near-black
- Contains two or three lines of the off-brand social post copy in a muted, desaturated typeface
- Red diagonal strike-through line or red X overlay — signals "wrong"
- Label: "BEFORE" in small caps, muted grey, top of panel
- Copy text: Lora italic, `#c0a090` (warm muted, looks tired)

### Centre Arrow
- Bold right-pointing arrow: `#d97757` (brand orange)
- Arrow weight: thick — 6px stroke minimum
- Optionally: a subtle glow/blur behind the arrow in orange at 20% opacity

### Right Panel (After)
- Slightly green-tinted dark panel: `#1a2318` or `#1e2a1e`
- Contains the rewritten headline: "Made to nourish what daily life depletes."
- Green checkmark top-right of panel: `#788c5d`
- Label: "AFTER" in small caps, muted sage green, top of panel
- Copy text: Lora italic, `#e8e0d0` (warm cream — looks clean and alive)

### Headline (Bottom Third)
- "One skill. One voice." — Poppins Bold, white, 48–56px
- Left-aligned, sits below both panels
- Optional: thin orange underline accent beneath the headline text

### Episode Pill (Top Left)
- Rounded pill/badge: `#d97757` background, white text
- Text: "EP 11" — Poppins SemiBold, 14px
- Positioned: top-left, 24px inset from edge

### Verdant Wordmark (Bottom Right)
- Small, subtle — Lora italic or custom wordmark mock-up
- Colour: `#788c5d` (brand green, muted)
- Shows the fictional brand context — helps viewers understand this is a real brand voice scenario, not an abstract demo

---

## Rule of Thirds Grid

```
     1/3          2/3
      │             │
──────┼─────────────┼──────
      │             │         ← top third: panels + arrow
      │  [BEFORE]→  │[AFTER]
──────┼─────────────┼──────
      │             │         ← middle third: panels continue
      │             │
──────┼─────────────┼──────
      │             │         ← bottom third: headline text
      │"One skill.  │
      │ One voice." │
```

- The orange arrow falls on the 1/3 vertical line — natural eye flow from left to right
- The headline sits in the lower-third — standard YouTube safe zone for text
- Both panels are equal width, creating visual balance and immediate before/after read

---

## Typography

| Element | Font | Weight | Size | Colour |
|---------|------|--------|------|--------|
| "BEFORE" / "AFTER" labels | Poppins | SemiBold | 12px | `#888880` / `#6a7a5a` |
| Off-brand copy | Lora | Italic | 18px | `#c0a090` |
| On-brand copy | Lora | Italic | 18px | `#e8e0d0` |
| Headline | Poppins | Bold | 52px | `#ffffff` |
| Episode pill | Poppins | SemiBold | 14px | `#ffffff` on `#d97757` |
| Verdant wordmark | Lora | Italic | 16px | `#788c5d` |

---

## What to Avoid

- Do NOT use AI face/person imagery — this is a copy/text-focused skill
- Do NOT use bright white background — off-brand for the channel
- Do NOT use stock imagery of notebooks, laptops, or generic "marketing" visuals
- Do NOT add more than 6 words of headline text — thumbnail must read at small size
- Do NOT use more than two colours for panel fills — keep it clean
- Do NOT show the full Verdant brand guide on screen — too much text, reads as clutter
- Avoid centre-alignment for the headline — left-aligned feels more editorial and confident

---

## A/B Variant

If testing two versions, the variant uses:
- A single full-width panel showing the three copy pieces in a tight column (blog, social, headline) with strikethrough, and the rewritten versions beside each in green
- Headline: "3 pieces. 1 voice." — slightly more specific, may perform better for content team audience

---

## File Notes

- Export at 1280x720px, PNG, sRGB
- Keep a layered source file (Figma or PSD) for future episode variants
- Filename: `thumbnail-ep11-applying-brand-guidelines.png`
