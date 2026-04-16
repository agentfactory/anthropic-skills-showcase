# Episode 04 — pptx

**Series:** B — Documents & Files
**Skill:** `anthropics/pptx` (718 installs)
**Status:** In production
**Target length:** 12:00

## Use case

Turn a **plain-text product brief** into a polished 10-slide investor deck (.pptx) — title, problem, solution, market, product, traction, team, roadmap, financials, and CTA — ready to open in PowerPoint or Keynote with zero manual formatting.

The demo company is **Stackline**, a fictional AI-powered sales pipeline tool raising a Series A off a $3M seed round.

## Production pipeline

```
Remotion (motion graphics)  →  ProRes MOVs with alpha
ElevenLabs (voiceover)      →  per-section MP3 stems
Loom / MELD (screen rec)    →  raw-screen.mp4
                              ↓
              DaVinci Resolve — master edit
                              ↓
                    ep04-pptx-final.mp4
```

## Files

- `script.md` — narration with timestamps + visual cues (~1,800 words)
- `metadata.yml` — YouTube title / description / chapters / tags
- `use-case/walkthrough.md` — Denis's rehearsal script for the live demo (3:30–9:30)
- `use-case/input/product-brief.md` — Stackline product brief pasted into Claude on camera
- `assets/thumbnail.md` — thumbnail concept with ASCII layout diagram

## Checklist

- [ ] `script.md` complete and ~1,800 words
- [ ] Hook lands within first 10 seconds
- [ ] Install command shown on screen
- [ ] Full use case runs start-to-finish in demo
- [ ] "Aha moment" highlighted (file opens in PowerPoint, fully formatted)
- [ ] Iteration step included (color theme change)
- [ ] 2–3 variations mentioned in Results section
- [ ] CTA included with both links
- [ ] Next episode teased
- [ ] Remotion compositions render with alpha preserved
- [ ] ElevenLabs stems generated for all 6 sections
- [ ] Screen recording captured (6:00 max, 1080p)
- [ ] Resolve timeline assembled, total 11:30–12:30
- [ ] Exported master MP4
- [ ] Thumbnail rendered
- [ ] PR opened on upstream repo
