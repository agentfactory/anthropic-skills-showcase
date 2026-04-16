# Thumbnail concept — Ep 04 pptx

**Dimensions:** 1280×720, <2 MB, JPG/PNG
**Style anchor:** Dark-mode brand palette, high-contrast headline, one dramatic artifact, no face (optional — see variation below).

---

## Layout (rule of thirds — artifact-led)

```
┌──────────────────────────────────────────────────────────────────────────┐
│                                                                          │
│   LEFT (⅓ width)                     RIGHT (⅔ width)                     │
│   ┌──────────────────────┐           ┌──────────────────────────────┐    │
│   │ Headline block       │           │  Slide deck artifact         │    │
│   │ (Poppins 900,        │           │                              │    │
│   │ light on dark):      │           │  Mock PowerPoint window:     │    │
│   │                      │           │  - Dark slide title:         │    │
│   │   SLIDE              │           │    "STACKLINE"               │    │
│   │   DECK               │           │  - Orange accent bar         │    │
│   │   IN 6               │           │  - Subtitle: "Series A"      │    │
│   │   MINUTES            │           │  - 3–4 slide thumbnails      │    │
│   │                      │           │    visible in filmstrip      │    │
│   │ [orange underline]   │           │    below the main slide      │    │
│   │                      │           │                              │    │
│   │ EP 04 · pptx         │           │  Slight 3D perspective tilt  │    │
│   └──────────────────────┘           │  (~5 deg right-down)         │    │
│                                      └──────────────────────────────┘    │
│   BACKGROUND: #141413 throughout                                         │
│   Faint orange radial glow behind the slide window at 20% opacity        │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

---

## Elements

**Background**
- Fill: `#141413` (Anthropic dark). No gradients.
- Faint `#d97757` radial glow in the upper-right quadrant, behind the slide artifact, at 15–20% opacity and ~300px radius.

**Main headline**
- Text: "SLIDE DECK IN 6 MINUTES" — split across 4 lines as shown
- Font: Poppins Black (900 weight)
- Size: ~110pt at 1280×720 (scale up 2× for Figma work at 2560×1440)
- Color: `#faf9f5` (off-white)
- Line height: 1.0–1.05 (tight)

**Orange underline accent**
- 8px bar, ~220px wide
- Color: `#d97757`
- Position: immediately below the headline block, 12px gap

**Episode tag**
- Text: "EP 04 · pptx"
- Font: Poppins Medium
- Size: ~40pt
- Color: `#d97757`
- Position: below orange underline accent, 16px gap

**Slide deck artifact (right side)**
- Render a mock PowerPoint-style window:
  - Outer chrome: dark gray `#1e1e1c`, thin 1px border `#333`
  - Main slide area: `#141413` background, "STACKLINE" in `#faf9f5` Poppins Bold, orange accent bar `#d97757` running underneath the title
  - Subtitle line: "Series A · Investor Deck" in `#aaa` at small size
  - Filmstrip: 3 smaller slide thumbnails below, each with a distinct layout hint (two-column, chart-like lines, table rows) — convey that it's a real multi-slide deck
- Apply a subtle 5-degree perspective transform (right edge slightly lower) to give depth
- Drop shadow: `rgba(0,0,0,0.6)` at 24px blur, 8px Y-offset

**Optional presenter variant**
- If a face shot is used: place presenter in the left third, looking toward the slide artifact. Orange rim light. Slide deck moves to right two-thirds with headline overlaid at top-left of that section.
- Avoid if the presenter photo isn't strong — the artifact-led layout above is the primary concept.

---

## What to avoid

- No red arrows or circle callouts.
- No shocked/surprised face.
- No "magic wand" or glowing AI clichés.
- No more than 3 text elements (headline, underline, episode tag).
- No stock-photo conference room backgrounds.
- Do not show a realistic Canva or PowerPoint UI chrome — keep it branded/abstract.

---

## Production

- Build in Figma at 2× (2560×1440), export at 1× (1280×720) for YouTube upload.
- Alternate: render in Remotion at 1280×720 and export a still frame — reuse brand color constants for consistency with motion graphics.
- File: `ep04-thumbnail.png` (or `.jpg` at 90% quality — keep under 2 MB).
- A/B test: run the artifact-led version first; if CTR is low after 48h, swap to the presenter variant.
