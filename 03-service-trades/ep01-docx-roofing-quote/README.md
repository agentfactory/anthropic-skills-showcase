# Episode C01: docx — Quote Out the Door Before Your Competitor Does

**Series:** C — SMB Operations
**Skill:** `anthropics/docx`
**Skill URL:** https://smithery.ai/skills/anthropics/docx
**Installs:** 623
**Duration:** ~12 min
**Status:** Pre-production

---

## Episode Summary

A roofing contractor finishes an inspection at 2pm. The homeowner has two other quotes coming in. The roofer types his inspection notes into Claude and gets a professional, itemized roofing quote — company header, scope of work table, materials spec, pricing breakdown, warranty terms, signature line — in under 5 minutes. Ready to email.

This episode is the entry point for **Series C: SMB Operations** — a track built for service industry business owners who run on trucks, phones, and hustle, not corporate IT departments.

---

## Target Audience

- Roofers, landscapers, painters, electricians, plumbers
- Any home services contractor who writes quotes by hand or from a messy Word template
- Small operators (1–10 people) who win or lose jobs based on who sends the professional-looking quote first

---

## The Core Problem

Most contractors either:
1. Use a beat-up Word template from 5 years ago — 30–45 minutes per quote to fill in and format
2. Write quotes by hand on a carbon form — unprofessional, no branded presence
3. Use expensive quoting software they barely know how to use

The `docx` skill collapses all of that into: inspection notes in → professional Word quote out.

---

## Use Case

**Input:** Roofer's inspection notes from phone/clipboard — abbreviated, real-world shorthand  
**Output:** Professional roofing estimate in `.docx` format with:
- Company header
- Quote number + expiration date
- Customer info block
- Scope of work (itemized list)
- Materials specification table
- Pricing breakdown table
- Optional add-ons section
- Warranty terms
- Payment schedule
- Signature line

**Time:** ~4 minutes start to finish

---

## File Structure

```
ep01-docx-roofing-quote/
├── README.md
├── script.md
├── use-case/
│   ├── walkthrough.md
│   └── input/
│       └── inspection-notes.md
└── assets/
    └── thumbnail.md
```

---

## Series C Context

This is Episode 1 of the SMB Operations track. The series is designed to be consumed in order — each episode builds on the previous one's output. By the end of the series, a service business owner has a complete operational toolkit:

| Ep | Skill | What It Solves |
|----|-------|----------------|
| C01 | docx | Quotes, proposals, job cards |
| C02 | xlsx | Booking tracker + expense sheet |
| C03 | internal-comms | Customer emails + crew updates |
| C04 | response-drafting | Responding to leads fast |
| C05 | brand-voice | Sound professional on every document |
| C06 | daily-briefing | Start every morning knowing what's ahead |
