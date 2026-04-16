# Thumbnail concept — Ep 05 xlsx

**Dimensions:** 1280×720, <2 MB, JPG/PNG
**Style anchor:** Dark-mode brand palette, high-contrast headline, split-screen visual, orange accents.

## Layout (rule-of-thirds, horizontal split)

```
┌────────────────────────────────────────────────────────────────────┐
│                                                                    │
│  TOP THIRD — HEADLINE BAND                                         │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │  TURN MESSY CSV     →     CLEAN EXCEL WORKBOOK               │  │
│  │  [Poppins Black, #faf9f5, 96pt]  [orange arrow #d97757]      │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                    │
│  MIDDLE THIRD — SPLIT VISUAL                                       │
│  ┌──────────────────────┐  ▶  ┌──────────────────────┐            │
│  │  LEFT: raw CSV view  │     │  RIGHT: Excel view    │            │
│  │  (Notepad/VS Code)   │     │  (clean data + chart) │            │
│  │  faint red tint       │     │  faint green tint     │            │
│  │  chaotic text rows   │     │  bar chart visible    │            │
│  └──────────────────────┘     └──────────────────────┘            │
│                [orange ▶ arrow between panels, 80px]               │
│                                                                    │
│  BOTTOM THIRD — TAG ROW                                            │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │  EP 05 · xlsx skill     [Presenter face — ⅓ right corner]    │  │
│  │  [#d97757, Poppins Medium, 40pt]                             │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                    │
│  BACKGROUND: #141413 with subtle orange radial glow center         │
└────────────────────────────────────────────────────────────────────┘
```

## Elements

- **Background:** `#141413` (Anthropic dark). Faint orange `#d97757` radial glow at center, 12–15% opacity. No gradients or neon.
- **Main headline:** "TURN MESSY CSV → CLEAN EXCEL WORKBOOK" — Poppins Black, 96 pt, color `#faf9f5`, tight leading. Arrow character in `#d97757`.
- **Underline accent:** 8 px orange bar, 360 px wide, under headline text.
- **Left panel (before):** Screenshot of `messy-sales-data.csv` open in VS Code or Notepad, dark mode. Subtle red `#ff6b6b` 8% tint overlay. Border: 2 px red `#ff4444`.
- **Right panel (after):** Screenshot of `NorthBridge-Sales-Q1.xlsx` open in Excel — showing the bar chart + clean data rows. Subtle green `#788c5d` 8% tint overlay. Border: 2 px green `#788c5d`.
- **Arrow:** Large bold right-pointing arrow `▶` between panels, `#d97757`, 80 pt, with slight drop shadow.
- **Episode tag:** "EP 05 · xlsx skill" — Poppins Medium, 40 pt, color `#d97757`, bottom-left of bottom third.
- **Presenter:** Cut-out portrait positioned bottom-right, 3/4 angle, looking left toward the panels. Warm key light, subtle orange rim. Sized so face occupies roughly the bottom-right ⅙ of the frame. Do not obscure the chart in the right panel.

## Visual hierarchy

1. Arrow (motion, eye travels left to right)
2. Headline (anchors the transformation story)
3. Before/after panels (confirms the promise)
4. Episode tag + presenter (brand + trust)

## What to avoid

- No red arrows or shock-face expression.
- No "AI magic wand" or sparkle graphics.
- No more than 3 text elements total (headline, episode tag, nothing else).
- No light backgrounds — keep everything on `#141413`.
- Do not show the Excel ribbon / UI chrome in the right panel thumbnail — crop to data and chart only.
- Nothing that reads as "generic spreadsheet tutorial" — the dark mode treatment is the differentiator.

## Production

- Build in Figma at 2× (2560×1440), export at 1× for upload.
- Alternate: render as a still frame from Remotion using brand constants — reuse `brandColors.orange`, `brandColors.dark`, `brandColors.light` from the Remotion shared config.
- Screenshots for the panels should be taken at the same resolution and cropped to identical dimensions before compositing.
