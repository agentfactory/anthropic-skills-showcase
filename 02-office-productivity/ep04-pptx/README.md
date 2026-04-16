# Episode B04: pptx — Turn a Case Study Into a Sales Presentation

**Series:** B — Documents & Files
**Status:** In production
**Skill:** `anthropics/pptx`
**Install:** `npx @smithery/cli@latest skill add anthropics/pptx`
**Skill URL:** https://smithery.ai/skills/anthropics/pptx
**Installs:** 718
**Duration:** ~12 min
**Target Audience:** Sales teams, account executives, customer success

---

## Use Case Summary

Account executives and customer success managers live in PowerPoint. They adapt the same materials constantly — tailoring case studies into slides for different prospect audiences, updating metrics, swapping out testimonial quotes. The work is repetitive and slow: copy text into a deck template, format it, make a chart, update the layout, do it again for the dark theme version someone asked for.

In this episode, Denis takes a customer case study in plain text — 400 words with real metrics and a direct quote — and builds a polished 8-slide sales presentation from a single prompt. The slides cover the standard case study arc: title, the client's challenge, the solution deployed, a results slide with a metrics chart, a testimonial quote slide, a before/after comparison, a pricing and ROI slide, and a call-to-action. Then, because a sales rep asked for it before a customer dinner, Denis asks for a dark theme version to show how fast that iteration goes.

This episode is deliberately different from the Series A pptx episode, which built an investor deck from a product brief. That was a fundraising context with a pitch narrative structure. This is a sales context: the audience is a prospect evaluating whether to buy, the format is a customer success story, and the metrics are the central argument. The chart slide and the dark theme iteration are both new territory.

---

## Production Pipeline

```
Input: case study plain text (~400 words)
            |
            v
  anthropics/pptx skill invoked via Claude Code
            |
            +-- Slide 1: Title slide
            +-- Slide 2: Client challenge
            +-- Slide 3: Solution overview
            +-- Slide 4: Results (bar chart — 3 metrics)
            +-- Slide 5: Testimonial quote
            +-- Slide 6: Before/after comparison
            +-- Slide 7: Pricing & ROI
            +-- Slide 8: Call-to-action
            |
            v
  apex-case-study-LIGHT.pptx
            |
            v
  [dark theme iteration request]
            |
            v
  apex-case-study-DARK.pptx
```

---

## File List

| File | Purpose |
|------|---------|
| `README.md` | Episode overview and production checklist |
| `script.md` | Full narrated script with timestamps (~1,800 words) |
| `metadata.yml` | YouTube title, description, chapters, tags |
| `use-case/walkthrough.md` | Step-by-step rehearsal guide for Denis |
| `use-case/input/apex-case-study.md` | Customer case study source text for the demo |
| `assets/thumbnail.md` | Thumbnail concept with layout and color spec |

---

## Pre-Production Checklist

- [ ] Script reviewed and timed (~12 min at 150 wpm)
- [ ] Walkthrough rehearsed end-to-end at least twice
- [ ] Screen recording resolution set to 1080p minimum
- [ ] Terminal font size readable (18pt or larger)
- [ ] PowerPoint viewer ready (or Keynote with PPTX import) for output review
- [ ] Light theme output reviewed: all 8 slides correct, chart renders, quote slide legible
- [ ] Dark theme output reviewed: all 8 slides correct, high contrast, readable fonts
- [ ] Metadata reviewed: title under 100 chars, description under 5,000 chars
- [ ] Thumbnail rendered and A/B tested
- [ ] ElevenLabs voiceover stems generated for all script sections

---

## Next Episode

**Episode B05** — the next skill in Series B. Check the series production schedule for the confirmed skill assignment.
