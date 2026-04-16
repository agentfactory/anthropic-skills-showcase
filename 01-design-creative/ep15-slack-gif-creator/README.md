# Episode 15 — slack-gif-creator

**Series A, Episode 15 of 15 — Series A Finale**
**Status:** In production
**Skill:** `anthropics/slack-gif-creator`
**Install:** `npx @smithery/cli@latest skill add anthropics/slack-gif-creator`
**Skill URL:** https://smithery.ai/skills/anthropics/slack-gif-creator
**Installs:** 44
**Runtime:** ~12 minutes
**Series:** A — Design & Creative (final episode)

---

## Use Case Summary

Create 3 custom animated GIFs for a remote engineering team's Slack workspace:

1. **Deploy Party** — confetti explosion, green/teal palette, "SHIPPED" text reveal, 24 frames at 60ms each
2. **PR Review** — slow-blinking side-eye animation, warm amber tones, no text
3. **Meeting Alert** — pulsing calendar icon with orange ring and spinning clock hands

All GIFs are sized for Slack custom emoji: 128×128px, looping, under 2MB.

The skill generates HTML canvas animations that can be screen-captured or exported to GIF format.

---

## Why This Episode Matters

This is the **Series A finale**. After 14 episodes covering design and creative tools, this episode closes the series with something every remote team can use immediately — custom Slack reactions that feel native rather than like clip art. No Photoshop. No After Effects. Just a skill and a description.

---

## Production Pipeline

```
Pre-Production         Production             Post-Production
─────────────         ──────────             ───────────────
script.md         →   Screen record      →   Edit to 12:00
metadata.yml      →   Voiceover (sync)   →   Color grade (dark)
walkthrough.md    →   Demo recording     →   Captions
gif-brief.md      →   B-roll capture     →   Thumbnail
thumbnail.md      →   End card           →   Upload + schedule
```

---

## File List

```
ep15-slack-gif-creator/
├── README.md                        ← This file
├── script.md                        ← Full narrated script (~1,800 words)
├── metadata.yml                     ← YouTube title, description, tags, chapters
├── use-case/
│   ├── walkthrough.md               ← Rehearsal script for 6-min live demo
│   └── input/
│       └── gif-brief.md             ← Brief for all 3 GIFs with specs
└── assets/
    └── thumbnail.md                 ← Thumbnail concept and layout
```

---

## Pre-Production Checklist

- [ ] Script reviewed and timed (~150 wpm)
- [ ] Skill installed locally and tested
- [ ] All 3 GIF animations generated successfully
- [ ] Demo walkthrough rehearsed (3:30-9:30 window)
- [ ] Thumbnail designed per `thumbnail.md` brief
- [ ] Metadata reviewed — title under 70 chars
- [ ] Series B teaser confirmed with ep16 host
- [ ] End card template updated with new skill URL

---

## Series A Complete

Episodes 8 through 15 cover the Design & Creative series:

| Ep | Skill | Topic |
|----|-------|-------|
| 8  | canvas-design | Visual design on HTML canvas |
| 9  | interactive-dashboard-builder | Data dashboards |
| 10 | theme-factory | Design token systems |
| 11 | applying-brand-guidelines | Brand consistency |
| 12 | brand-voice | Tone and messaging |
| 13 | brand-guidelines | Brand system creation |
| 14 | algorithmic-art | Generative visual art |
| **15** | **slack-gif-creator** | **Custom Slack GIFs — FINALE** |

**Up Next:** Series B — Documents (Episodes 16–21)
First episode: `docx` — turn a rough draft into a polished Word document
