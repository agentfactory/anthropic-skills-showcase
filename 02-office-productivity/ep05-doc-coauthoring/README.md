# Episode B05: doc-coauthoring — From Rough Notes to a Real Spec

**Series:** B — Documents & Files
**Status:** In production
**Skill:** `anthropics/doc-coauthoring`
**Install:** `npx @smithery/cli@latest skill add anthropics/doc-coauthoring`
**Skill URL:** https://smithery.ai/skills/anthropics/doc-coauthoring
**Installs:** 101
**Duration:** ~12 min
**Target Audience:** Engineers, tech leads, product managers writing technical specifications

---

## Use Case Summary

Writing a good technical specification is one of those tasks that everyone knows matters and almost no one has time to do well. The usual result is a doc that starts as bullet points in a Notion page, never quite becomes a structured spec, and gets referenced in PRs six months later by people squinting at half-formed ideas.

The `doc-coauthoring` skill addresses this directly. It works alongside the author — not as an autocomplete, but as a genuine co-author that understands technical document structure. In this episode, Denis starts with a rough outline for a new Webhook Events API: scattered bullet points, some requirements, a few notes about error codes. He invokes the skill to co-write it into a proper spec — complete with an overview, functional and non-functional requirements, API schema, error handling section, and an open questions appendix.

The second half of the demo shows the iterative loop that makes this skill genuinely useful in practice. Denis asks to "tighten the requirements section" — the skill revises with more precise language and removes ambiguity. He then asks it to add a "Security Considerations" appendix that wasn't in the original outline. The skill slots it in with appropriate depth, consistent formatting, and cross-references to the existing sections. The result is a spec document that reads like it was written by someone who cared, not assembled from fragments.

---

## Production Pipeline

```
Input: rough-api-spec-notes.md  (messy bullet points, ~350 words)
              |
              v
   doc-coauthoring skill invoked in Claude
              |
              v
   Structured spec draft (~1,200 words)
              |
              v
   Iteration pass 1: "tighten requirements"
              |
              v
   Iteration pass 2: "add security appendix"
              |
              v
   Final spec document (complete, formatted)
              |
              v
   DaVinci Resolve — master edit (12 min)
              |
              v
   ep05-doc-coauthoring-final.mp4
```

---

## File List

| File | Purpose |
|------|---------|
| `README.md` | This file — episode overview |
| `script.md` | Full narrated script with timestamps (~1,800 words) |
| `metadata.yml` | YouTube title, description, chapters, tags |
| `use-case/walkthrough.md` | Step-by-step rehearsal guide for Denis |
| `use-case/input/rough-api-spec-notes.md` | Starting material — the messy input used in the demo |
| `assets/thumbnail.md` | Thumbnail concept and layout description |

---

## Pre-Production Checklist

- [ ] Script reviewed and timed (~12 min at 150 wpm)
- [ ] Input file confirmed as realistic "rough notes" (not too clean, not unreadable)
- [ ] Demo rehearsed end-to-end at least twice
- [ ] Both iteration passes tested and outputs look good on screen
- [ ] Skill installed and verified working: `npx @smithery/cli@latest skill add anthropics/doc-coauthoring`
- [ ] Screen recording captured at 1080p, terminal font size readable
- [ ] Thumbnail rendered and tested at small sizes (mobile YouTube)
- [ ] metadata.yml chapters match final edit timestamps
- [ ] Description links verified (skill URL, GitHub)

---

## Next Episode

**Episode B06: internal-comms** — One Input, Three Audiences. Take a single product update brief and generate an all-hands memo for leadership, a casual Slack post for engineering, and a formal email for customer-facing teams — all from one prompt. The tone variation is the whole point. After B06, the series wraps and we head into **Series C: Data & Analytics**, starting with `data-visualization`.
