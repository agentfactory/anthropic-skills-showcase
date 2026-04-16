# Thumbnail concept — Ep 06 frontend-design

**Dimensions:** 1280x720, <2 MB, JPG/PNG
**Style anchor:** Dark-mode brand palette, high-contrast headline, one face, one artifact.

---

## Layout (rule-of-thirds)

```
┌──────────────────────────────────────────────────────────────────────┐
│  BACKGROUND: #141413  (deep dark, warm not cold)                     │
│                                                                      │
│  LEFT THIRD                 CENTER THIRD       RIGHT THIRD           │
│  ┌──────────────────┐       ┌──────────────┐   ┌────────────────┐    │
│  │                  │       │              │   │                │    │
│  │  HEADLINE        │       │  LANDING     │   │  Presenter     │    │
│  │  (Poppins 900):  │       │  PAGE        │   │  (3/4 angle,   │    │
│  │                  │       │  PREVIEW     │   │  looking left  │    │
│  │  "1 PROMPT.      │       │  (browser    │   │  toward the    │    │
│  │   1 LANDING      │       │  frame       │   │  browser       │    │
│  │   PAGE."         │       │  mockup of   │   │  mockup)       │    │
│  │                  │       │  Draftly     │   │                │    │
│  │  [orange accent  │       │  hero        │   │                │    │
│  │   underline]     │       │  section)    │   │                │    │
│  │                  │       │              │   │                │    │
│  │  EP 06 ·         │       │  [violet     │   │                │    │
│  │  frontend-design │       │   glow       │   │                │    │
│  │                  │       │   behind     │   │                │    │
│  └──────────────────┘       │   mockup]    │   └────────────────┘    │
│                             └──────────────┘                         │
│                                                                      │
│  BOTTOM BAR: narrow #d97757 orange strip, full width, 12px tall      │
└──────────────────────────────────────────────────────────────────────┘
```

---

## Elements

**Background:**
`#141413` full bleed. No gradient fills on the background itself — the depth comes from the glows on the artifacts.

**Main headline:**
"1 PROMPT. 1 LANDING PAGE." — Poppins Black (900 weight), 96pt, `#faf9f5` (near white), tight leading (1.0), left-aligned in the left third. The period after each line is a design choice — adds rhythm, creates visual breaks.

**Underline accent:**
8px orange bar (`#d97757`), 220px wide, sits directly under the second line of the headline.

**Episode tag:**
"EP 06 · frontend-design" — Poppins Medium, 36pt, color `#d97757`, positioned below the underline with 16px gap.

**Browser mockup (center):**
A cropped, slightly-rotated (~3 deg) browser window frame showing the Draftly hero section. The mockup should show: the dark-mode hero, "Stop staring at a blank page." headline, and the violet CTA button. Apply a soft violet/blue radial glow (`#7c5cfc` at 25% opacity) behind the mockup to make it feel like it's lit from within.

**Presenter:**
Cut-out portrait in the right third. Looking slightly left, toward the browser mockup — classic "look at the artifact" composition. Warm key light on face. Subtle orange rim light. Expression: engaged, slightly pleased — like someone who just saw something work.

**Bottom strip:**
A full-width 12px horizontal bar in `#d97757` at the very bottom of the frame. Adds brand consistency and a bottom anchor so the thumbnail doesn't float.

---

## Color palette reference

| Element | Value |
|---------|-------|
| Background | `#141413` |
| Headline text | `#faf9f5` |
| Orange accent | `#d97757` |
| Blue/violet glow | `#6a9bcc` or `#7c5cfc` |
| Muted label text | `#8b8fa8` |

---

## What to avoid

- No red arrows or circles pointing at things.
- No shocked or exaggerated facial expression.
- No more than 3 text elements total (headline, episode tag, bottom strip — the strip has no text).
- No generic "AI art" aesthetics: no floating particles, no neural network visualizations, no blue-gradient hands.
- Do not show the word "FREE" or a price — the thumbnail is about capability, not offer.
- Do not crowd the right third — give the presenter room to breathe.

---

## Alternate version (no presenter)

If a face isn't available for this episode, replace the right third with a second artifact: a zoomed-in screenshot of the pricing table from the Draftly page, also in a browser frame, rotated slightly opposite to the hero mockup (-3 deg). Use the same violet glow. Adjust headline to left-align further left to fill the space.

---

## Production

- Build in Figma at 2x (2560x1440), export at 1x for upload.
- Alternate: render in Remotion at 1280x720, export a still frame — reuse brand constants for color consistency.
- The browser mockup can be a real screenshot of the output file from the demo, or a Figma recreation of it.
- Test at small size (320x180, thumbnail grid view) — the headline must be readable at that scale.
