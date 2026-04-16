# Episode 10 — theme-factory

**Series:** A — Design & Creative
**Skill:** `anthropics/theme-factory` (406 installs)
**Status:** In production
**Target length:** 12:00

## Use case

Take a plain, unstyled HTML annual report for fictional company **Meridian Analytics** and apply three completely different CSS themes in sequence — (1) Corporate Minimal, (2) Bold Editorial, (3) Dark Tech — each in under 5 minutes, with no manual CSS writing.

The aha moment: side-by-side comparison showing the same HTML transformed into three radically different looks from a single command each time.

## Production pipeline

```
Remotion (motion graphics)  →  ProRes MOVs with alpha
ElevenLabs (voiceover)      →  per-section MP3 stems
Loom / MELD (screen rec)    →  raw-screen.mp4
                              ↓
              DaVinci Resolve — master edit
                              ↓
                 ep10-theme-factory-final.mp4
```

## Files

- `script.md` — narration with timestamps + visual cues
- `metadata.yml` — YouTube title / description / chapters / tags
- `use-case/walkthrough.md` — Denis's rehearsal script for the 6-minute live demo
- `use-case/input/plain-report.html` — Unstyled annual report HTML for Meridian Analytics (no CSS)
- `assets/thumbnail.md` — thumbnail concept

## Checklist

- [ ] `script.md` complete and ~1,800 words
- [ ] Remotion compositions render with alpha preserved
- [ ] ElevenLabs stems generated for all 6 sections
- [ ] Screen recording captured (under 6:30, 1080p)
- [ ] Resolve timeline assembled, total 11:30–12:30
- [ ] Exported master MP4
- [ ] Thumbnail rendered
- [ ] PR opened on upstream repo
