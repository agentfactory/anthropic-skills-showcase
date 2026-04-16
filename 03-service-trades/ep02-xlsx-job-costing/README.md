# Episode 02: xlsx — Know If April Was Actually a Good Month

**Series:** Service Trades
**Skill:** `anthropics/xlsx`
**Skill URL:** [smithery.ai/skills/anthropics/xlsx](https://smithery.ai/skills/anthropics/xlsx)
**Install:** `npx @smithery/cli@latest skill add anthropics/xlsx`
**Duration:** ~12 min
**Status:** Pre-production

---

## Episode Summary

A landscaping contractor finishes the month with 15 jobs' worth of phone shorthand — client names, services, amounts, and a costs list at the bottom. He runs a profitable business. He just doesn't know the numbers yet. One prompt turns that text file into a three-sheet Excel workbook: a job tracker with calculated margins and color-coded status, a weekly revenue vs. costs bar chart, and an outstanding balance tracker that tells him exactly who to call on Monday and how many days they've been sitting.

This is Episode 2 of the **Service Trades** series — continuing the operational toolkit for service business owners running on trucks, phones, and hustle.

---

## Target Audience

- Landscapers, plumbers, painters, HVAC, electricians, and any trades running multiple jobs a week
- Small operators (1–15 people) who track revenue in their heads or in a notebook
- Owners who want to know if the business is actually profitable — not just busy

---

## The Core Problem

Most service contractors know roughly how much they billed. Very few know their actual margin per job. The gap between "I think we had a good month" and "I know we had a 71.9% gross margin month" is usually a spreadsheet — one that nobody's had time to build properly.

The xlsx skill collapses that into: messy job notes in → structured workbook with formulas, formatting, and charts out.

---

## Use Case

**Input:** One month of job notes from a phone — 15 entries, abbreviated, with a costs block at the bottom  
**Output:** `greenPro-april-2026.xlsx` with:

- Sheet 1: Jobs table with revenue, costs, gross profit, margin %, conditional-formatted status
- Sheet 2: Weekly revenue vs. costs bar chart
- Sheet 3: Outstanding balance tracker with Days Outstanding aging

**Time:** ~30 seconds to generate

---

## File Structure

```text
ep02-xlsx-job-costing/
├── README.md
├── script.md
├── metadata.yml
├── use-case/
│   ├── walkthrough.md
│   └── input/
│       └── april-jobs-notes.md
├── assets/
│   └── thumbnail.md
├── vo/                     ← copied from ep01, name updated to "ep-c02-vo"
└── resolve/
    └── timeline-map.md
```

---

## Series Context

| Ep | Skill | What It Solves |
| -- | ----- | -------------- |
| 01 | docx | Quotes, proposals, job cards |
| **02** | **xlsx** | **Booking tracker + expense sheet** |
| 03 | internal-comms | Customer emails + crew updates |
| 04 | response-drafting | Responding to leads fast |
| 05 | brand-voice | Sound professional on every document |
| 06 | daily-briefing | Start every morning knowing what's ahead |

---

## Pre-Production Checklist

- [ ] Script reviewed and timed (~12 min at 150 wpm)
- [ ] Input file (`april-jobs-notes.md`) reviewed for realism — reads like actual phone notes
- [ ] Walkthrough rehearsed end-to-end: skill installed, prompt run, output reviewed
- [ ] Skill confirmed working: `npx @smithery/cli@latest skill add anthropics/xlsx`
- [ ] Output workbook reviewed — 3 sheets, correct formulas, conditional formatting, chart present
- [ ] vo/ folder copied from `ep01-docx-roofing-quote/vo/` — only `package.json` name field updated to `"ep-c02-vo"`
- [ ] ElevenLabs stems generated: `npm run generate` in vo/ folder
- [ ] Screen recording captured (dark mode, 16pt font, clean terminal + Excel)
- [ ] DaVinci Resolve timeline assembled per `resolve/timeline-map.md`
- [ ] Total runtime: 11:30–12:30
- [ ] Exported master MP4
- [ ] Thumbnail rendered and uploaded
