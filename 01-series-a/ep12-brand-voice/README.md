# Episode 12 — brand-voice

**Series:** A — Design & Creative
**Skill:** `anthropics/brand-voice` (337 installs)
**Status:** In production
**Target length:** 12:00

## Use case

Feed 5 copy samples from a fictional fintech startup called **Luma** (expense management for remote teams) into the skill and have it reverse-engineer a complete brand voice guide — including tone, personality pillars, vocabulary do/don't lists, and a scoring rubric. Then refine it by splitting social-media voice from error-state voice.

## Production pipeline

```
Remotion (motion graphics)  →  ProRes MOVs with alpha
ElevenLabs (voiceover)      →  per-section MP3 stems
Loom / MELD (screen rec)    →  raw-screen.mp4
                              ↓
              DaVinci Resolve — master edit
                              ↓
                 ep12-brand-voice-final.mp4
```

## Files

- `script.md` — narration with timestamps + visual cues
- `metadata.yml` — YouTube title / description / chapters / tags
- `use-case/walkthrough.md` — Denis's rehearsal script for the live demo
- `use-case/input/copy-samples.md` — 5 Luma copy samples used on camera
- `assets/thumbnail.md` — thumbnail concept

## Checklist

- [ ] `script.md` complete and ~1,800 words
- [ ] `use-case/input/copy-samples.md` written with 5 coherent Luma samples
- [ ] `use-case/walkthrough.md` covers all 6 demo steps with exact lines
- [ ] `metadata.yml` has title, description, timestamps, tags, chapters
- [ ] `assets/thumbnail.md` has layout diagram and element specs
- [ ] Remotion compositions render with alpha preserved
- [ ] ElevenLabs stems generated for all 6 sections
- [ ] Screen recording captured (6:00 max, 1080p dark mode)
- [ ] Resolve timeline assembled, total 11:30–12:30
- [ ] Exported master MP4
- [ ] Thumbnail rendered
- [ ] PR opened on upstream repo
