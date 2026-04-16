# Thumbnail concept — Ep 10 theme-factory

**Dimensions:** 1280x720, under 2 MB, JPG or PNG
**Style anchor:** Dark-mode brand palette, triple transformation as the hero visual, bold headline.

## Concept

The central visual story is one document, three faces — the same HTML fragment shown three times in browser mock-ups, each one styled radically differently. The headline frames the value in a single scannable line. No presenter face needed — the before/after product moment is strong enough.

## Layout (rule-of-thirds, horizontal triptych)

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  BACKGROUND: #141413                                                         │
│                                                                              │
│  TOP THIRD (headline zone)                                                   │
│  ┌────────────────────────────────────────────────────────────────────────┐  │
│  │                                                                        │  │
│  │   3 THEMES. 3 MINUTES.     [orange underline bar, 320px wide]         │  │
│  │   ZERO CSS WRITTEN.                                                    │  │
│  │                            EP 10 · theme-factory  [#d97757 label]     │  │
│  └────────────────────────────────────────────────────────────────────────┘  │
│                                                                              │
│  BOTTOM TWO-THIRDS (triptych zone)                                           │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐                   │
│  │              │    │              │    │              │                   │
│  │  BROWSER     │    │  BROWSER     │    │  BROWSER     │                   │
│  │  MOCK-UP 1   │ ─► │  MOCK-UP 2   │ ─► │  MOCK-UP 3   │                   │
│  │              │    │              │    │              │                   │
│  │  Corporate   │    │  Bold        │    │  Dark        │                   │
│  │  Minimal     │    │  Editorial   │    │  Tech        │                   │
│  │  [navy/white]│    │  [black/org] │    │  [#0d1117/   │                   │
│  │              │    │              │    │   amber]     │                   │
│  └──────────────┘    └──────────────┘    └──────────────┘                   │
│      label below:        label below:        label below:                   │
│  "Corporate Minimal" "Bold Editorial"    "Dark Tech"                         │
│   [light text]         [light text]       [light text]                       │
│                                                                              │
│  Orange arrows (→) between mock-ups showing progression                     │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

## Elements

- **Background:** `#141413` full bleed. No gradients, no textures.
- **Headline line 1:** "3 THEMES. 3 MINUTES." — Poppins Black, 110 pt, color `#faf9f5`, tight leading.
- **Headline line 2:** "ZERO CSS WRITTEN." — Poppins Black, 110 pt, color `#d97757` (orange), tight leading. This line should read as the "punchline" — slightly bolder visual weight via color.
- **Underline accent:** 8px orange bar `#d97757`, 320px wide, directly below line 1.
- **Episode label:** "EP 10 · theme-factory" — Poppins SemiBold, 36 pt, color `#d97757`, right-aligned to the underline.
- **Browser mock-ups:** Three small browser chrome frames (minimal, just a title bar with three dots + URL bar), each containing a screenshot crop of the same HTML section (the revenue table or key metrics block) in each theme. Size each mock-up approximately 300x200px within the thumbnail.
- **Theme labels:** Under each mock-up — "Corporate Minimal", "Bold Editorial", "Dark Tech" — Poppins Medium, 28 pt, `#6a9bcc` (blue), centered under each frame.
- **Progression arrows:** Two orange `→` arrows (30px, `#d97757`) between the three mock-ups, center-aligned to the mock-up midline.
- **Subtle orange radial glow:** Behind the center mock-up at 10-15% opacity — draws the eye to the middle of the triptych.

## Mock-up content (what to show inside each browser frame)

Use the revenue table section from `plain-report.html` — it contains a header row, four data rows, and a totals row. Visually distinctive across all three themes and legible at thumbnail scale.

- **Corporate Minimal:** White background, navy `#1a2744` header row with white text, Playfair Display headings, hairline table borders. Clean and formal.
- **Bold Editorial:** Black or very dark gray background for the header, bold sans-serif, an orange accent stripe on the left edge of the table, large section label above.
- **Dark Tech:** `#0d1117` background, monospace font for the data cells, amber `#e8a04a` header row, subtle grid lines in a muted green.

## What to avoid

- No red arrows or clickbait elements.
- No stock photo faces or AI-generated people.
- No shocked or exaggerated expressions.
- No more than 4 text elements total (headline line 1, headline line 2, episode label, theme labels beneath mock-ups).
- No generic AI aesthetics — purple gradients, neon, "the future is here" visual clichés.
- Do not make the mock-ups so small they are illegible — they need to read as clearly styled at thumbnail scale.

## Production

- Build in Figma at 2x (2560x1440), export at 1x for upload.
- The three mock-up screenshots should be actual renders of `plain-report.html` with each theme applied — not mockups created from scratch. Capture them during the demo recording session and use those frames.
- Alternate: render the full composition in Remotion at 1280x720 and export a still frame — reuse brand constants for color consistency.
- A/B test: run a variant with a presenter face in the bottom-right corner replacing the right-most mock-up arrow area. Keep the three mock-ups as the primary hero regardless.
