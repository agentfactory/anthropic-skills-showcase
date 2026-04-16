# Episode 14 — algorithmic-art

**Series:** A — Design & Creative
**Skill:** `anthropics/algorithmic-art` (125 installs)
**Status:** In production
**Target length:** 12:00

## Use case
Generate a series of **3 unique generative art pieces** as self-contained HTML/JS files using a structured creative brief: a Perlin noise flow field in muted earth tones, a recursive fractal tree that animates on click, and a particle system that responds to mouse movement. Each piece renders live in the browser — no image files, no external dependencies, just code drawing itself.

## Production pipeline
```
Remotion (motion graphics)  →  ProRes MOVs with alpha
ElevenLabs (voiceover)      →  per-section MP3 stems
Loom / MELD (screen rec)    →  raw-screen.mp4
                              ↓
              DaVinci Resolve — master edit
                              ↓
              ep14-algorithmic-art-final.mp4
```

## Files
- `script.md` — narration with timestamps + visual cues
- `metadata.yml` — YouTube title / description / chapters / tags
- `use-case/walkthrough.md` — Denis's rehearsal script for the live demo
- `use-case/input/art-brief.md` — the creative brief with 3 art piece descriptions, copy-paste ready
- `assets/thumbnail.md` — thumbnail concept

## Checklist
- [ ] `script.md` complete and ~1,800 words
- [ ] Remotion compositions render with alpha preserved
- [ ] ElevenLabs stems generated for all 6 sections
- [ ] Screen recording captured (<= 6:30, 1080p)
- [ ] Resolve timeline assembled, total 11:30–12:30
- [ ] Exported master MP4
- [ ] Thumbnail rendered
- [ ] PR opened on upstream repo
