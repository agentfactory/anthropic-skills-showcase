# Thumbnail concept — Ep 13 brand-guidelines

**Dimensions:** 1280×720, <2 MB, JPG/PNG
**Style anchor:** Dark-mode brand palette, high-contrast headline, one color swatch artifact, no face required (or face optional — see notes).

---

## Layout (rule-of-thirds grid)

```
┌────────────────────────────────────────────────────────────────────┐
│  TOP ROW (visual breathing room — 80px)                            │
├───────────────────────────────────┬────────────────────────────────┤
│                                   │                                │
│  LEFT / CENTER (⅔ width)          │  RIGHT (⅓ width)               │
│  ┌────────────────────────────┐   │  ┌──────────────────────────┐  │
│  │ Headline (Poppins Black,   │   │  │  Color swatch stack:     │  │
│  │ light on dark):            │   │  │                          │  │
│  │                            │   │  │  ████ #2D5A3D Forest     │  │
│  │  FROM 3 SENTENCES          │   │  │  ████ #4A7C59 Moss       │  │
│  │  TO A COMPLETE             │   │  │  ████ #F5F0E8 Warm White │  │
│  │  BRAND SYSTEM              │   │  │  ████ #C49A3C Amber      │  │
│  │                            │   │  │                          │  │
│  │  [orange underline bar]    │   │  │  Small hex codes below   │  │
│  │                            │   │  │  each swatch (Lora,      │  │
│  │  EP 13 · brand-guidelines  │   │  │  12pt, muted)            │  │
│  └────────────────────────────┘   │  └──────────────────────────┘  │
│                                   │                                │
├───────────────────────────────────┴────────────────────────────────┤
│  BOTTOM ROW (visual breathing room — 60px)                         │
└────────────────────────────────────────────────────────────────────┘
```

---

## Elements

- **Background:** `#141413` (Anthropic dark). Subtle dark green `#1A3325` radial glow in the lower-right quadrant at 20% opacity — references the Canopy brand without being literal.
- **Main headline:** "FROM 3 SENTENCES / TO A COMPLETE / BRAND SYSTEM" — Poppins Black, 110pt, color `#faf9f5`, tight 1.1 leading. Two-line or three-line break is fine.
- **Underline accent:** 8px solid bar, color `#d97757` (channel orange), 260px wide, directly under the last headline word.
- **Episode tag:** "EP 13 · brand-guidelines" — Poppins Medium, 38pt, color `#d97757`, below the underline. This is the only orange text.
- **Color swatch stack (right third):** Four horizontal pill swatches, 220×40px each, 12px gap between. Colors from left: Forest `#2D5A3D`, Moss `#4A7C59`, Warm White `#F5F0E8`, Amber `#C49A3C`. Hex codes in Lora Regular 11pt, color `#6a9bcc` (channel blue), right-aligned below each pill.
- **Optional presenter:** If a face is used, place at far right behind the swatch stack, 3/4 angle looking left toward headline. Orange rim light. Kept at 60% opacity so swatches stay legible. If no face is available, the swatch stack stands alone — it reads as a strong artifact.

---

## What to avoid

- No gradients that scream "AI aesthetic" (neon, purple-to-teal, etc.).
- No clip-art trees or leaf icons — the logo description is abstract; the thumbnail shouldn't be literal.
- No more than 3 text elements total (headline, episode tag, hex codes below swatches count as one group).
- Do not use the Canopy green as the thumbnail's dominant background — it competes with the channel brand. Keep background `#141413` as anchor.
- No red arrows, no shocked faces, no "5 TIPS" energy.

---

## Production notes

- Build in Figma at 2× (2560×1440), export at 1× for upload.
- Alternate: render as a Remotion still frame at 1280×720 using brand constants — ensures color consistency with intro/outro animations.
- The swatch stack is a strong visual hook on mobile thumbnail size (100×56px) — verify legibility at that scale before finalizing.
- A/B test option: swap headline to "9 LINES IN. FULL BRAND SYSTEM OUT." — more specific, may outperform the generic version. Worth testing after the first 48 hours of impressions.
