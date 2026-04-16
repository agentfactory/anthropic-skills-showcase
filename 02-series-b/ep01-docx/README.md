# Episode B01: docx — From Markdown Mess to Polished Word Report

**Series:** B — Documents & Files
**Status:** In production
**Skill:** `anthropics/docx`
**Install:** `npx @smithery/cli@latest skill add anthropics/docx`
**Skill URL:** https://smithery.ai/skills/anthropics/docx
**Installs:** 623
**Duration:** ~12 min
**Target Audience:** Project managers, consultants, business analysts, anyone who produces Word documents professionally

---

## Use Case Summary

Word documents are the lingua franca of business. Proposals, reports, project briefs, SOWs — they all end up as `.docx` files. But producing a *polished* Word document — one with consistent heading styles, an auto-generated table of contents, formatted tables, and an executive summary — takes time, institutional knowledge of Word's formatting tools, and patience most people don't have at the end of a busy day.

This episode shows a realistic scenario: a project kickoff brief that lives as a raw Markdown dump. It has the right content — objectives, scope, stakeholders, deliverables, timeline — but it's unformatted, unstyled, and completely unsuitable for sending to a client. The `docx` skill turns it into a professional Word report with a single prompt.

The output has proper heading hierarchy (H1 through H3), an auto-generated clickable table of contents, a formatted table of deliverables with conditional row shading, an executive summary block with styled call-out, and a footer with document metadata. The "before" and "after" are night and day — and the entire transformation takes under 30 seconds. We then show two quick variations: adding a company logo to the header, and switching the document theme from the default to a more formal corporate style.

---

## Production Pipeline

```
Remotion (motion graphics)  →  ProRes MOVs with alpha
ElevenLabs (voiceover)      →  per-section MP3 stems
Loom / MELD (screen rec)    →  raw-screen.mp4
                              ↓
              DaVinci Resolve — master edit
                              ↓
                   ep01-docx-final.mp4
```

---

## File List

| File | Purpose |
|------|---------|
| `README.md` | This file — episode overview and production tracker |
| `script.md` | Full narrated script with timestamps (~1,800 words) |
| `metadata.yml` | YouTube title, description, chapters, tags |
| `use-case/walkthrough.md` | Denis's step-by-step demo rehearsal guide |
| `use-case/input/project-kickoff-brief.md` | Raw Markdown brief used as demo input |
| `assets/thumbnail.md` | Thumbnail concept description |

---

## Pre-Production Checklist

- [ ] Script reviewed and timed (~12 min at 150 wpm)
- [ ] Input file (`project-kickoff-brief.md`) reviewed for realism and completeness
- [ ] Walkthrough rehearsed end-to-end on screen
- [ ] Skill installed and confirmed working: `npx @smithery/cli@latest skill add anthropics/docx`
- [ ] Output `.docx` reviewed — heading styles, TOC, table, executive summary block all present
- [ ] Remotion compositions rendered with alpha preserved
- [ ] ElevenLabs stems generated for all 6 sections
- [ ] Screen recording captured (clean terminal, 1080p, 16pt font)
- [ ] DaVinci Resolve timeline assembled, total 11:30–12:30
- [ ] Exported master MP4
- [ ] Thumbnail rendered and uploaded
- [ ] PR opened on upstream repo

---

## Next Episode

**Episode B02: xlsx** — Build a fully-formatted employee expense tracker from scratch. Plain text list in, formatted Excel workbook with formulas, a pie chart, and conditional formatting out.
