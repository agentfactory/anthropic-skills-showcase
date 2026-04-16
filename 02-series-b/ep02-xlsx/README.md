# Episode B02: xlsx — Build an Expense Tracker from Scratch

**Series:** B — Documents & Files
**Status:** In production
**Skill:** `anthropics/xlsx`
**Install:** `npx @smithery/cli@latest skill add anthropics/xlsx`
**Skill URL:** https://smithery.ai/skills/anthropics/xlsx
**Installs:** 664
**Duration:** ~12 min
**Target Audience:** Finance teams, ops managers, executive assistants, anyone tracking business expenses or building workbooks from raw data

---

## Use Case Summary

Series A Episode 05 showed the xlsx skill cleaning a messy, existing spreadsheet. This episode is a different problem entirely: building a structured workbook from nothing but a plain text list of expenses. No existing spreadsheet to clean. No CSV to import. Just 28 lines of raw expense data in a notes file — dates, amounts, categories, descriptions — and a need to turn it into something finance-ready.

The output is a fully-formatted Excel workbook with three sheets. The first sheet is the raw data, organized into a proper table with headers, data types set correctly (dates as dates, currencies as currency), and conditional formatting that highlights any line item exceeding its category budget. The second sheet is a summary: total and average spend per category, with SUM and AVERAGE formulas that update automatically if you add more expenses to sheet one. The third sheet contains a pie chart of spending by category — formatted, labeled, and ready to paste into a report.

The point of this episode is to show that the xlsx skill is not just a cleanup tool. It can take unstructured text and produce a workbook that would ordinarily require 45 minutes of manual work in Excel: creating headers, entering formulas, setting data types, applying conditional formatting rules, building and formatting a chart, and wiring it all together. One prompt, under a minute.

---

## Production Pipeline

```
Remotion (motion graphics)  →  ProRes MOVs with alpha
ElevenLabs (voiceover)      →  per-section MP3 stems
Loom / MELD (screen rec)    →  raw-screen.mp4
                              ↓
              DaVinci Resolve — master edit
                              ↓
                   ep02-xlsx-final.mp4
```

---

## File List

| File | Purpose |
|------|---------|
| `README.md` | This file — episode overview and production tracker |
| `script.md` | Full narrated script with timestamps (~1,800 words) |
| `metadata.yml` | YouTube title, description, chapters, tags |
| `use-case/walkthrough.md` | Denis's step-by-step demo rehearsal guide |
| `use-case/input/expense-list.md` | Plain text expense list used as demo input |
| `assets/thumbnail.md` | Thumbnail concept description |

---

## Pre-Production Checklist

- [ ] Script reviewed and timed (~12 min at 150 wpm)
- [ ] Input file (`expense-list.md`) reviewed — realistic amounts, categories, dates
- [ ] Walkthrough rehearsed end-to-end on screen
- [ ] Skill installed and confirmed working: `npx @smithery/cli@latest skill add anthropics/xlsx`
- [ ] Output `.xlsx` reviewed — all three sheets present, formulas working, chart rendering, conditional formatting applied
- [ ] Confirmed this feels DIFFERENT from Series A ep05 (building from scratch, not cleaning)
- [ ] Remotion compositions rendered with alpha preserved
- [ ] ElevenLabs stems generated for all 6 sections
- [ ] Screen recording captured (clean terminal, 1080p, 16pt font)
- [ ] DaVinci Resolve timeline assembled, total 11:30–12:30
- [ ] Exported master MP4
- [ ] Thumbnail rendered and uploaded
- [ ] PR opened on upstream repo

---

## Next Episode

**Episode B03** — coming soon. Series B continues with more Documents & Files skills from the Anthropic catalog.
