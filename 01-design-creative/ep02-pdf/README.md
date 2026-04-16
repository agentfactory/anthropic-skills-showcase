# Episode 02 — pdf

**Series:** B — Documents & Files
**Skill:** `anthropics/pdf` (895 installs)
**Status:** In production
**Target length:** 12:00

## Use case

Merge 5 quarterly PDF reports (Q1–Q4 + Annual Summary) from mock company **Meridian SaaS** into one master deliverable, stamp every page with a **CONFIDENTIAL** watermark, and extract all tables into structured markdown — start to finish in under 6 minutes.

## Production pipeline

```
Remotion (motion graphics)  →  ProRes MOVs with alpha
ElevenLabs (voiceover)      →  per-section MP3 stems
Loom / MELD (screen rec)    →  raw-screen.mp4
                              ↓
              DaVinci Resolve — master edit
                              ↓
                 ep02-pdf-final.mp4
```

## Files

- `script.md` — narration with timestamps + visual cues
- `metadata.yml` — YouTube title / description / chapters / tags
- `use-case/walkthrough.md` — Denis's rehearsal script for the live demo
- `use-case/input/quarterly-reports-list.md` — mock description of the 5 source PDFs
- `assets/thumbnail.md` — thumbnail concept

## Checklist

- [ ] `script.md` complete and ~1,800 words
- [ ] ElevenLabs stems generated for all 6 sections
- [ ] Screen recording captured (6:00 target, 1080p)
- [ ] Resolve timeline assembled, total 11:30–12:30
- [ ] Exported master MP4
- [ ] Thumbnail rendered
- [ ] PR opened on upstream repo
