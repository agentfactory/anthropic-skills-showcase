# Thumbnail Concept — Episode 03: creating-financial-models

## Concept Summary

"From one paragraph to a full DCF model" — the thumbnail should visually communicate the transformation: raw text in, structured financial model out. Clean, institutional, confident. This is a finance episode so the visual language should feel credible — not flashy, not over-designed.

---

## Layout: Rule of Thirds

```
+------------------------------------------+
|                                           |
|  [LEFT THIRD]    [CENTER THIRD]  [RIGHT]  |
|                                           |
|  "1 paragraph"   -->  [DCF TABLE]  [WACC] |
|                                           |
|  [small text    [orange arrow]   [numbers]|
|   snippet,       pointing right   glowing]|
|   slightly                                |
|   blurred]                                |
|                                           |
+------------------------------------------+
|  "Build a DCF model in 3 minutes"         |
|  [bottom bar — dark, orange text]         |
+------------------------------------------+
```

### Detailed Grid

```
+--------------------+-------------------+------------------+
|                    |                   |                  |
| LEFT PANEL         | CENTER            | RIGHT PANEL      |
| (blurred text bg)  | (arrow + label)   | (model output)   |
|                    |                   |                  |
| A wall of gray     | Large orange ">"  | White text on    |
| paragraph text,    | arrow (bold,      | dark background  |
| slightly out of    | centered, large)  |                  |
| focus. Suggests    |                   | Partial DCF      |
| "input."           | Below arrow:      | table: 3 rows    |
|                    | small label       | visible, numbers |
| One line           | "1 paragraph"     | sharp and clear  |
|highlighted in      |                   |                  |
| orange to anchor   |                   | WACC: 12.4%      |
| the viewer's eye   |                   | in orange text,  |
|                    |                   | larger than rest |
|                    |                   |                  |
+--------------------+-------------------+------------------+
|  BOTTOM BAR (full width, dark #141413)                    |
|  "Build a full DCF model from one paragraph"              |
|  Poppins Medium, #faf9f5, 32pt                            |
|  Left-aligned, orange accent line above bar               |
+-----------------------------------------------------------+
```

---

## Elements

### Background
- Full canvas: `#141413` (dark, near-black)
- Subtle texture: very faint grid pattern in `#1e1e1c` — references financial spreadsheets without being literal

### Left Panel (Input)
- Text block: a blurred, zoomed paragraph of text (use the Loopline brief)
- Blur level: slight — readable enough to look like real text, blurred enough to feel like "before"
- One line highlighted with an orange underline or orange background strip
- Label above: "INPUT" in `#b0aea5` (mid-gray), 12pt Poppins, uppercase

### Center Arrow
- Large right-pointing arrow: `>` or a custom SVG chevron
- Color: `#d97757` (orange)
- Size: roughly 80px tall — visually dominant
- Subtle glow/shadow effect in orange

### Right Panel (Output — DCF Model)
- Dark background panel with white text
- Show 3-4 rows of a revenue projection table:
  ```
  Year 1   $2.5M
  Year 2   $3.7M
  Year 3   $5.5M
  ```
- Numbers are large enough to read (24pt+)
- Below the table: "WACC: 12.4%" in `#d97757` orange, slightly larger, suggests precision
- Label above: "OUTPUT" in `#b0aea5`, 12pt, uppercase
- Right panel has a subtle orange left-border line (2px) separating it from the center

### Bottom Bar
- Full-width dark bar with 2px orange line above it
- Text: "Build a full DCF model from one paragraph"
- Font: Poppins Medium, `#faf9f5`, ~32pt
- Optional: Small channel logo (Anthropic/Skills Showcase mark) at bottom right, 32px

### Episode Badge
- Top-left corner: "EP 03" badge
- Background: `#6a9bcc` (blue)
- Text: white, Poppins Bold, 14pt
- Rounded corners, 4px radius

---

## Typography

| Element | Font | Size | Color |
|---------|------|------|-------|
| Bottom bar headline | Poppins Medium | 32pt | #faf9f5 |
| DCF table numbers | Lora Regular | 24pt | #faf9f5 |
| WACC figure | Poppins Bold | 28pt | #d97757 |
| Panel labels (INPUT/OUTPUT) | Poppins Medium | 12pt | #b0aea5 |
| Episode badge | Poppins Bold | 14pt | #faf9f5 |

---

## What to Avoid

- No emojis (charts, dollar signs as symbols are fine in the table text)
- No bright neon colors — keep it professional and institutional
- Do not make the text on the left panel readable enough to distract — it should read as "text wall" not "read me"
- Do not use green color for the numbers (feels stock-market-y and cheap) — use white
- Avoid red anywhere — finance context, red = losses
- Do not crowd the canvas — the three-panel layout needs breathing room between panels
- No stock photo faces — this thumbnail should be purely visual/typographic

---

## Dimensions

- Canvas: 1280 x 720px (YouTube standard)
- Safe zone: keep all critical elements within 1180 x 640 (50px margin all sides)
- Test at thumbnail size (320 x 180) — the WACC figure and arrow should still be legible

---

## Tone Check

The thumbnail should feel like: "A Bloomberg terminal designed by someone with taste."
It should NOT feel like: clickbait finance YouTube (stock charts, green/red candles, random dollar signs).

This is a technical, professional audience. The thumbnail signals credibility first, curiosity second.
