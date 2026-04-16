# Episode 01 — skill-creator

**Series:** A — Design & Creative (intro episode for the whole channel)
**Skill:** `anthropics/skill-creator` (1,113 installs)
**Status:** 🟡 In production
**Target length:** 12:00

## Use case
Build a **meeting-notes-formatter** skill from scratch — takes a raw meeting transcript and produces a structured markdown file with summary, action items, and decisions.

## Production pipeline
```
Remotion (motion graphics)  →  ProRes MOVs with alpha
ElevenLabs (voiceover)      →  per-section MP3 stems
Loom / MELD (screen rec)    →  raw-screen.mp4
                              ↓
              DaVinci Resolve — master edit
                              ↓
                 ep01-skill-creator-final.mp4
```

## Files
- `script.md` — narration with timestamps + visual cues
- `metadata.yml` — YouTube title / description / chapters / tags
- `use-case/walkthrough.md` — Denis's rehearsal script for the live demo
- `use-case/input/raw-meeting-notes.txt` — input used on camera
- `use-case/output/meeting-notes-formatter/` — final skill produced in the demo
- `remotion/` — Remotion project for intro, endcard, lower thirds, transitions
- `vo/generate-vo.ts` — ElevenLabs driver (reads script.md, emits stems)
- `resolve/timeline-map.md` — shot-by-shot assembly in DaVinci Resolve
- `assets/thumbnail.md` — thumbnail concept

## Checklist
- [ ] `script.md` complete and ≈1,800 words
- [ ] Remotion compositions render with alpha preserved
- [ ] ElevenLabs stems generated for all 6 sections
- [ ] Screen recording captured (≤ 6:30, 1080p)
- [ ] Resolve timeline assembled, total 11:30–12:30
- [ ] Exported master MP4
- [ ] Thumbnail rendered
- [ ] PR opened on upstream repo
