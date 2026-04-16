# Thumbnail Concept — Episode B02: xlsx

## Hook Text

**Primary:** "Plain text → expense workbook"
**Secondary:** "Formulas. Chart. Formatting. One prompt."

## Visual Concept

Split-screen composition. Left half shows a plain text file in a dark-mode text editor — the raw expense list, lines of "April 1 — Travel — $312.40 — Round-trip train..." repeating down the screen. Simple, raw, unformatted. Right half shows Excel open with the finished workbook: the Expenses sheet visible with its formatted table, alternating row shading, and two or three rows visibly highlighted in red (the over-budget items). The pie chart from the Chart sheet is visible as a small inset in the bottom-right corner of the Excel side.

A bold orange vertical divider line (#d97757) separates the two halves. The `xlsx` skill badge sits in the bottom-right corner. The hook text overlays the dark left side in bold white.

The composition emphasizes "raw → structured" — unformatted chaos on the left, organized workbook on the right. The red rows are a key visual because they signal that the workbook is not just data entry, it's intelligent — it flagged something.

## Color Palette

| Element | Color | Hex |
|---------|-------|-----|
| Background (left / dark) | Anthropic dark | #141413 |
| Background (right / Excel) | Excel white | #ffffff |
| Divider line | Anthropic orange | #d97757 |
| Hook text | Off-white | #faf9f5 |
| Skill badge | Anthropic blue | #6a9bcc |
| Over-budget row highlight | Excel red fill | #ffc7ce |
| Chart accent | Anthropic orange | #d97757 |

## Typography

- Hook text line 1 ("Plain text → expense workbook"): Bold sans-serif, ~68pt, white
- Hook text line 2 ("Formulas. Chart. Formatting. One prompt."): Regular sans-serif, ~32pt, orange (#d97757)
- Skill name badge: Monospace font, white text on blue pill shape (#6a9bcc background)

## ASCII Layout Diagram

```
+------------------------------------+----------------------------------+
|                                    |                                  |
|  April 1 — Travel — $312.40 — ... |  [Excel: Expenses Sheet]         |
|  April 2 — Meals — $64.20 — ...   |                                  |
|  April 3 — Software — $149.00 — . |  Date     Cat.   Amount  Desc    |
|  April 3 — Office Sup — $38.75 —  |  Apr 1    Travel $312.40 NYC...  |
|  April 5 — Travel — $89.50 — ...  |  Apr 2    Meals  $64.20  Team... |
|  April 7 — Client Ent — $287.60 . |  Apr 3    Softw  $149.00 Notion  |
|  April 8 — Meals — $18.40 — ...   | [RED ROW] Apr 11 Travel $538.20  |
|  April 9 — Software — $79.00 — .  |  Apr 12   Meals  $82.15  Dinner  |
|  April 10 — Office Sup — $124.90  | [RED ROW] Apr 23 Meals  $88.40   |
|  April 11 — Travel — $538.20 — .  |  Apr 25   C.Ent  $442.00 Dinner  |
|  ...                               |                                  |
|                                    |  [Pie chart inset — bottom right]|
|  Plain text →                      |  ← Expense workbook              |
|  expense workbook                  |                                  |
|                                    |                      [xlsx badge] |
+=================== | ==============+==================================+
                     |
                [orange divider]
```

## Production Notes

- Thumbnail: 1280x720px (standard YouTube HD)
- Left side: Screenshot of VS Code with `expense-list.md` — dark theme, slightly darkened overlay (20% black) so hook text is legible
- Right side: Screenshot of actual `april-expenses.xlsx` output in Excel — Expenses sheet visible with real data and red highlighted rows
- Pie chart inset: Small screenshot of the Chart sheet pie chart, positioned bottom-right of the Excel side, with a 2px white border
- Hook text: Overlaid in post — bold white for line 1, orange for line 2
- Orange divider: 8px vertical line at the midpoint
- Skill badge: Bottom-right corner of the full thumbnail, `anthropics/xlsx` in monospace white on #6a9bcc blue pill
- Do not use stock photos or mockups — use real output screenshots from the actual demo
