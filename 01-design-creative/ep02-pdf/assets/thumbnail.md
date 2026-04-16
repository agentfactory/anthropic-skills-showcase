# Thumbnail concept — Ep 02 pdf

**Dimensions:** 1280×720, <2 MB, JPG/PNG
**Style anchor:** Dark-mode brand palette, high-contrast headline, one face, one document artifact with visible watermark.

## Layout (rule-of-thirds)

```
┌──────────────────────────────────────────────────────────────────────┐
│                                                                      │
│   LEFT (⅔ width)                          RIGHT (⅓ width)            │
│   ┌────────────────────────────┐          ┌──────────────────────┐   │
│   │                            │          │  Face / presenter    │   │
│   │  Headline (Poppins Black,  │          │  (3/4 angle, looking │   │
│   │  ~110pt, #faf9f5):         │          │  slight-left toward  │   │
│   │                            │          │  headline)           │   │
│   │   MERGE. WATERMARK.        │          │                      │   │
│   │   EXTRACT.                 │          │  Warm key light,     │   │
│   │                            │          │  subtle orange rim   │   │
│   │  [orange underline bar]    │          │                      │   │
│   │                            │          │                      │   │
│   │  EP 02 · pdf skill         │          │                      │   │
│   └────────────────────────────┘          └──────────────────────┘   │
│                                                                      │
│   BOTTOM-LEFT INSET: stacked PDF pages (3 visible) with diagonal     │
│   "CONFIDENTIAL" watermark text visible — small, ~200×140px          │
│                                                                      │
│   BACKGROUND: #141413, faint orange radial glow behind face          │
└──────────────────────────────────────────────────────────────────────┘
```

## Elements

**Background**
- Color: `#141413` (Anthropic dark)
- Faint orange `#d97757` radial glow behind the presenter at 15–20% opacity — same treatment as Ep 01 for series consistency

**Main headline**
- Text: "MERGE. WATERMARK. EXTRACT."
- Font: Poppins Black, ~110pt
- Color: `#faf9f5`
- Line breaks: three words on three separate lines, each word punchy and single-line
- Tight leading (~1.0 line height)

**Underline accent**
- 8px solid bar, `#d97757` orange
- Width: 260px, aligned to left edge of headline block
- Sits directly below the headline, before the episode tag

**Episode tag**
- Text: "EP 02  ·  pdf skill"
- Font: Poppins Medium, 40pt
- Color: `#d97757`
- Positioned below the underline accent

**Presenter**
- Cut-out portrait, 3/4 angle, looking toward the headline
- Warm key light from left, subtle orange rim light from right
- Expression: engaged, confident — not shocked, not grinning
- Occupies the right third, slightly overlapping the headline block at the shoulder

**PDF artifact inset (lower-left corner)**
- Three layered/fanned PDF page mockups, slightly angled
- The top page clearly shows a diagonal "CONFIDENTIAL" watermark in grey — this is the visual proof-of-concept hook
- Subtle drop shadow on the stack
- Approximately 200×140px, positioned in the lower-left dead zone (below and left of headline)
- Border: 1px `#d97757` orange on the top page only

**Optional badge (top-right corner)**
- Small `#d97757` pill badge: "SERIES B" in `#faf9f5`, Poppins SemiBold 26pt
- Communicates that this is a new series for returning viewers

## What to avoid

- No red arrows pointing at anything
- No shocked or exaggerated facial expression
- No more than 3 distinct text elements on the canvas
- No generic AI imagery (glowing brains, circuit boards, "the future of AI")
- No blue gradients — this is a dark-mode brand, not a tech-bro gradient card
- Do not put "PDF" in a red color — red implies error; use orange for brand consistency

## Series consistency notes

- Keep the same orange glow treatment behind the presenter as Ep 01
- Keep the same underline accent style (8px bar, `#d97757`)
- The episode tag format "EP 02 · [skill name]" should be identical in font/size/color to Ep 01's "EP 01 · skill-creator"
- The PDF artifact inset is this episode's unique visual element — future episodes should each have one skill-specific artifact in the lower-left inset position

## Production

- Build in Figma at 2x (2560×1440), export at 1x for upload
- Alternate: render in Remotion at composition size 1280×720 and export a still frame — reuse brand constants for color consistency
- Ensure the "CONFIDENTIAL" text on the inset PDF is legible at thumbnail size (70px on mobile) — minimum 10pt at 1x resolution
