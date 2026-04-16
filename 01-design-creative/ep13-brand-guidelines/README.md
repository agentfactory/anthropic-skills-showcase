# Episode 13 — brand-guidelines

**Series:** A — Design & Creative
**Skill:** `anthropics/brand-guidelines` (138 installs)
**Status:** In production
**Target length:** 12:00

## Use case

Starting from a **minimal brand brief** — one logo description, three adjectives, and a target audience — generate a complete visual brand guidelines document covering color palette (primary, secondary, neutrals with hex codes), typography pairing, spacing system, logo usage rules, do/don't examples, and an application mockup spec.

Demo brand: **Canopy**, a fictional B2B climate-tech startup.

## Production pipeline

```
Remotion (motion graphics)  →  ProRes MOVs with alpha
ElevenLabs (voiceover)      →  per-section MP3 stems
Loom / MELD (screen rec)    →  raw-screen.mp4
                              ↓
              DaVinci Resolve — master edit
                              ↓
                 ep13-brand-guidelines-final.mp4
```

## Files

- `script.md` — narration with timestamps + visual cues (~1,800 words)
- `metadata.yml` — YouTube title / description / chapters / tags
- `use-case/walkthrough.md` — Denis's rehearsal script for the 6-minute live demo
- `use-case/input/brand-brief.md` — minimal brand brief for Canopy (the demo input)
- `assets/thumbnail.md` — thumbnail concept

## Checklist

- [ ] `script.md` complete and ~1,800 words
- [ ] Remotion compositions render with alpha preserved
- [ ] ElevenLabs stems generated for all 6 sections
- [ ] Screen recording captured (6:00 max, 1080p, dark mode)
- [ ] Resolve timeline assembled, total 11:30–12:30
- [ ] Exported master MP4
- [ ] Thumbnail rendered
- [ ] PR opened on upstream repo
