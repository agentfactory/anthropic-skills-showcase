# Episode B06: internal-comms — One Update, Three Audiences

**Series:** B — Documents & Files
**Status:** In production
**Skill:** `anthropics/internal-comms`
**Install:** `npx @smithery/cli@latest skill add anthropics/internal-comms`
**Skill URL:** https://smithery.ai/skills/anthropics/internal-comms
**Installs:** 92
**Duration:** ~12 min
**Target Audience:** PMs, comms teams, team leads, anyone who sends the same update to multiple audiences

---

## Use Case Summary

Every product update eventually needs to reach three audiences: the leadership team, the engineering team, and the people closest to the customer. These audiences have fundamentally different needs. Leadership wants business impact and strategic context. Engineering wants to know what changed, what it means for them, and what breaks. Customer-facing teams need to understand what their customers will experience and how to talk about it.

The usual approach is to write these separately, which takes time and often produces inconsistent messages that create confusion downstream. Or you write one and adapt it for the others with a quick find-and-replace on the tone, which produces outputs that are technically about the same update but communicate it poorly to at least two of the three audiences.

The `internal-comms` skill handles this by taking a single source brief — in this case, eight to ten bullet points summarizing a product update — and generating three distinct communication formats in one pass. In this episode, Denis has a brief for a fictional pricing change and new feature bundle launch at a company called Helix. The skill produces an all-hands memo for the leadership team, a casual Slack announcement for engineering, and a formal email for customer-facing teams. Each one is calibrated for its audience. The tone variation between them is immediate and obvious — that's the "aha moment" for this skill.

---

## Production Pipeline

```
Input: product-update-brief.md  (8-10 bullet points, ~300 words)
              |
              v
   internal-comms skill invoked in Claude
              |
              v
   Output 1: All-hands memo (leadership)
   Output 2: Slack announcement (engineering)
   Output 3: Customer-facing email (GTM teams)
              |
              v
   Denis reads excerpts from each, highlighting tone differences
              |
              v
   DaVinci Resolve — master edit (12 min)
              |
              v
   ep06-internal-comms-final.mp4
```

---

## File List

| File | Purpose |
|------|---------|
| `README.md` | This file — episode overview |
| `script.md` | Full narrated script with timestamps (~1,800 words) |
| `metadata.yml` | YouTube title, description, chapters, tags |
| `use-case/walkthrough.md` | Step-by-step rehearsal guide for Denis |
| `use-case/input/product-update-brief.md` | Starting material — the brief used in the demo |
| `assets/thumbnail.md` | Thumbnail concept and layout description |

---

## Pre-Production Checklist

- [ ] Script reviewed and timed (~12 min at 150 wpm)
- [ ] Input brief confirmed as realistic — reads like something from a PM, not a screenwriter
- [ ] Demo rehearsed end-to-end: all three outputs reviewed on screen
- [ ] Skill installed and verified: `npx @smithery/cli@latest skill add anthropics/internal-comms`
- [ ] Screen recording at 1080p, browser zoom level readable
- [ ] Thumbnail tested at small sizes (mobile YouTube preview)
- [ ] metadata.yml chapters match final edit timestamps
- [ ] Series C teaser confirmed in wrap-up (data-visualization skill)
- [ ] Description links verified

---

## Series B Wrap-Up Note

This is the final episode of Series B (Documents & Files). The wrap-up should close the series with a sense of completion and transition — six episodes covering the core document workflows, now moving into data territory. The tease for Series C (Data & Analytics) starting with `data-visualization` should feel like a natural escalation, not just an afterthought.

## Next Series

**Series C: Data & Analytics** — Starting with `data-visualization`. Turning raw tabular data into insight-ready charts and graphics without leaving your Claude session. More details in the Series C production guide.
