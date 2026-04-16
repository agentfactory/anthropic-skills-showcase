# Episode B03: pdf — Build a Complete Client Onboarding Package

**Series:** B — Documents & Files
**Status:** In production
**Skill:** `anthropics/pdf`
**Install:** `npx @smithery/cli@latest skill add anthropics/pdf`
**Skill URL:** https://smithery.ai/skills/anthropics/pdf
**Installs:** 895
**Duration:** ~12 min
**Target Audience:** Agencies, consultants, operations teams

---

## Use Case Summary

Every agency and consulting firm sends the same set of documents when a new client signs: a service agreement, a statement of work, and a welcome letter. They go out as three separate email attachments, clients print them separately, and the experience feels transactional rather than considered. The skill changes that in under two minutes.

In this episode, Denis takes three source PDFs — a client services agreement, a statement of work, and a branded welcome letter — and assembles them into a single, professional onboarding package. The output has a generated cover page, automatic PDF bookmarks linking to each section, sequential page numbering across all three documents, and a "DRAFT" watermark stamped diagonally across every page. When the account manager signs off on the content, one more command removes the watermark and the document is client-ready.

What makes this episode distinct from the Series A pdf episode (which merged quarterly financial reports) is the operational workflow: the cover page generation from metadata, the bookmark structure, and the iterative draft-to-final loop that mirrors how agencies actually work. This is document assembly as a professional process, not a one-shot merge.

---

## Production Pipeline

```
Input briefs (3 mock PDFs described in markdown)
         |
         v
anthropics/pdf skill invoked via Claude Code
         |
         +-- merge: contract + SOW + welcome letter
         |
         +-- cover page: generated from client metadata
         |
         +-- bookmarks: auto-created per document section
         |
         +-- page numbers: sequential across full package
         |
         +-- watermark: DRAFT (diagonal, 45deg, 40% opacity)
         |
         v
  onboarding-package-DRAFT.pdf
         |
         v
  [approval step — remove watermark]
         |
         v
  onboarding-package-FINAL.pdf
```

---

## File List

| File | Purpose |
|------|---------|
| `README.md` | Episode overview and production checklist |
| `script.md` | Full narrated script with timestamps (~1,800 words) |
| `metadata.yml` | YouTube title, description, chapters, tags |
| `use-case/walkthrough.md` | Step-by-step rehearsal guide for Denis |
| `use-case/input/onboarding-source-docs.md` | Description of the three source PDFs for the demo |
| `assets/thumbnail.md` | Thumbnail concept with layout and color spec |

---

## Pre-Production Checklist

- [ ] Script reviewed and timed (~12 min at 150 wpm)
- [ ] Walkthrough rehearsed end-to-end at least twice
- [ ] Screen recording resolution set to 1080p minimum
- [ ] Terminal font size readable (18pt or larger)
- [ ] Three mock PDFs created or described clearly enough for live demo
- [ ] Output PDF reviewed: cover page, bookmarks, watermark, page numbers all present
- [ ] Final-version PDF reviewed: watermark cleanly removed, all pages intact
- [ ] Metadata reviewed: title under 100 chars, description under 5,000 chars
- [ ] Thumbnail rendered and A/B tested against ep02 thumbnail
- [ ] ElevenLabs voiceover stems generated for all script sections

---

## Next Episode

**Episode B04: pptx** — Transform a customer case study into a polished sales presentation with a dark theme iteration.
