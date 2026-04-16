# Episode 05 — xlsx

**Series:** B — Documents & Files
**Skill:** `anthropics/xlsx` (664 installs)
**Status:** In production
**Target length:** 12:00

## Use case

Take a **messy sales CSV export** from fictional company "NorthBridge Tech" — inconsistent date formats, duplicate rows, missing values, mixed currency symbols, inconsistent rep names — and produce a clean, structured **.xlsx workbook** with:
- Cleaned, normalized data sheet
- Two calculated columns (Margin % and Month-over-Month Growth)
- A summary pivot table
- A bar chart visualizing revenue by rep
- Conditional formatting highlighting rows above/below target

## Production pipeline

```
Remotion (motion graphics)  →  ProRes MOVs with alpha
ElevenLabs (voiceover)      →  per-section MP3 stems
Loom / MELD (screen rec)    →  raw-screen.mp4
                              ↓
              DaVinci Resolve — master edit
                              ↓
                   ep05-xlsx-final.mp4
```

## Files

- `script.md` — narration with timestamps + visual cues
- `metadata.yml` — YouTube title / description / chapters / tags
- `use-case/walkthrough.md` — Denis's rehearsal script for the live demo
- `use-case/input/messy-sales-data.csv` — the raw messy input used on camera
- `use-case/output/` — final .xlsx workbook produced in the demo
- `assets/thumbnail.md` — thumbnail concept

## Checklist

- [ ] `script.md` complete and ~1,800 words
- [ ] Remotion compositions render with alpha preserved
- [ ] ElevenLabs stems generated for all 6 sections
- [ ] Screen recording captured (6:00 sharp, 1080p)
- [ ] Resolve timeline assembled, total 11:30–12:30
- [ ] Exported master MP4
- [ ] Thumbnail rendered
- [ ] PR opened on upstream repo
