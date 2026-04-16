# Episode 08 — canvas-design

**Series:** A — Design & Creative
**Skill:** `anthropics/canvas-design` (443 installs)
**Status:** In production
**Target length:** 12:00

## Use case

Create a museum-quality event poster for a fictional tech conference "Signal 2025 — The Future of AI Infrastructure" — bold typographic layout, speaker lineup, event details — output as a complete HTML/CSS artifact printable at 18x24 inches.

## Production pipeline

```
Remotion (motion graphics)  →  ProRes MOVs with alpha
ElevenLabs (voiceover)      →  per-section MP3 stems
Loom / MELD (screen rec)    →  raw-screen.mp4
                              ↓
              DaVinci Resolve — master edit
                              ↓
                 ep08-canvas-design-final.mp4
```

## Files

- `README.md` — this file
- `script.md` — narration with timestamps + visual cues (~1,800 words)
- `metadata.yml` — YouTube title / description / chapters / tags
- `use-case/walkthrough.md` — Denis's rehearsal script for the 6-minute live demo
- `use-case/input/conference-brief.md` — Signal 2025 event brief used on camera
- `assets/thumbnail.md` — thumbnail concept with rule-of-thirds layout

## Checklist

- [ ] `script.md` complete and approx 1,800 words
- [ ] Remotion compositions render with alpha preserved
- [ ] ElevenLabs stems generated for all 6 sections
- [ ] Screen recording captured (6:00 demo, 1080p minimum)
- [ ] Resolve timeline assembled, total 11:30–12:30
- [ ] Exported master MP4
- [ ] Thumbnail rendered
- [ ] PR opened on upstream repo
