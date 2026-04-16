# Master Production Document — Anthropic Skills Showcase

> The complete production bible for creating YouTube demo episodes for each of the 95 Anthropic Skills on Smithery.ai.

---

## 1. Episode Format (12 Minutes)

Every episode follows this exact structure:

### [0:00-0:30] COLD OPEN (30 sec)
Hook the viewer with the end result. Show the finished output of the use case. Be specific — exact document names, real numbers, real company headers. The viewer should immediately understand the before/after.

### [0:30-1:30] INTRO + CONTEXT (60 sec)
Branded intro animation (5 sec). Identify the series and the audience it's for. Introduce the skill by name, what it does, and who it's for. Show the Smithery.ai skill page briefly. Quantify the "before" cost — time lost, money spent, errors made.

### [1:30-3:30] SKILL DEEP DIVE (2 min)
How to install it (`npx @smithery/cli@latest skill add anthropics/[skill-name]`). Walk through the SKILL.md — what's in it, how it works. Show the triggers. Name the 2-3 capabilities most relevant to this episode's audience. Keep it tight — the demo is where the value lands.

### [3:30-9:30] LIVE USE CASE DEMO (6 min)
The core. One concrete, relatable use case for this episode's specific audience. Real input data — messy, abbreviated, the way this audience actually works. Show the full workflow: input, prompt, process, output, one iteration. Narrate the translation — what the skill understood and what it produced. Show any errors/iterations; keep it authentic.

### [9:30-11:00] RESULTS + VARIATIONS (90 sec)
Show the final output. Name 2-3 other documents or tasks this audience could produce with the same skill. Quick clips of alternative outputs where available.

### [11:00-12:00] WRAP-UP + CTA (60 sec)
Honest summary: what the skill does, what the use case proved, what it doesn't do. Install command. Link in description. Tease the next episode. End card.

---

## 2. Series Logic — Audience First

> **Core rule: Each series targets one professional audience. The same skill appears in multiple series — what changes is the use case, the language, and the business context.**

A Series B episode on `docx` teaches an office worker how to turn a project brief into a client report. A Series C episode on `docx` teaches a roofer how to turn inspection shorthand into a signed estimate. Same skill. Different audience. Different value proposition. Both are equally valid episodes.

This means:
- Never organize episodes by "which skills haven't been covered yet"
- Always organize by "which use case resonates with this series' audience"
- Research the audience's actual workflow before writing the use case

---

## 3. Episode Series (11 Series, 95+ Episodes)

| Series | Folder | Audience | Primary Skills Featured |
|--------|--------|----------|------------------------|
| A | `01-design-creative/` | Designers, marketers, content creators | skill-creator, canvas-design, frontend-design, pptx, theme-factory, brand-guidelines, brand-voice, algorithmic-art |
| B | `02-office-productivity/` | Office teams, knowledge workers | docx, xlsx, pdf, pptx, internal-comms, doc-coauthoring, daily-briefing, knowledge-synthesis |
| C | `03-service-trades/` | Contractors, service businesses, SMB trades | docx, xlsx, internal-comms, response-drafting, brand-voice, daily-briefing |
| D | `04-sales-growth/` | Sales reps, marketers, growth teams | competitive-analysis, draft-outreach, campaign-planning, call-prep, account-research, performance-analytics |
| E | `05-finance-accounting/` | CFOs, controllers, accountants | creating-financial-models, analyzing-financial-statements, financial-statements, variance-analysis, xlsx, pdf |
| F | `06-legal-compliance/` | Lawyers, paralegals, compliance officers | contract-review, legal-risk-assessment, nda-triage, compliance, pdf, docx |
| G | `07-customer-support/` | Support teams, CS managers | response-drafting, ticket-triage, escalation, knowledge-management, stakeholder-comms |
| H | `08-product-management/` | Product managers, product leads | feature-spec, roadmap-management, user-research-synthesis, metrics-tracking, interactive-dashboard-builder |
| I | `09-developer-tools/` | Developers, Claude Code users | skill-creator, skill-development, agent-development, mcp-builder, webapp-testing, and 18 more |
| J | `10-science-healthcare/` | Researchers, biotech, clinical teams | statistical-analysis, nextflow-development, scientific-problem-selection, fhir-developer-skill |
| K | `11-general-productivity/` | Knowledge workers — general skills | skill-creator, daily-briefing, task-management, memory-management, knowledge-synthesis |

---

## 4. Script Quality Standard

The benchmark episode is **Series C ep01** (`03-service-trades/ep01-docx-roofing-quote/script.md`). Every episode should match it on four dimensions:

| Dimension | Below standard | At standard |
|-----------|---------------|-------------|
| Screen cues | "Document opens" | "Ridge Pro Roofing LLC, license ROC-291847, quote QT-2026-0847, 30-day expiration" |
| Business impact | Implicit | Quantified: "Three quotes a week, 45 min each — that's $5,000/year in formatting time" |
| Audience language | Generic professional | Vertical-specific: "3-tab over architectural, 2-layer full T/O, pipe boots, step and counter flash" |
| Demo narrative | Feature-list walkthrough | Problem → cost → skill → transformation → output that lands |

---

## 5. Production Workflow

### Pre-Production (Per Episode)
1. Identify the target audience for this series — research their actual workflow
2. Review the skill's SKILL.md on Smithery.ai
3. Design one use case that would resonate specifically with this audience (messy real-world input, tangible output)
4. Quantify the business impact: time, money, errors, competitive disadvantage
5. Write the script using `script-template.md`
6. Prepare input materials (real, messy, industry-appropriate — not a cleaned-up example)
7. Create the `metadata.yml`

### Production
1. Record screen capture at native resolution (dark mode, 16pt+ font, clean desktop)
2. Record voiceover narration following the script
3. Capture B-roll footage specific to this audience's environment
4. Run the demo end-to-end, capturing the full workflow

### Post-Production
1. Edit following the 12-minute format structure
2. Add intro/outro animations
3. Add transitions between sections (orange line wipe)
4. Add lower thirds, cursor highlights, and zoom callouts
5. Color grade and audio normalize
6. Export at 1920x1080 for YouTube
7. Create thumbnail
8. Write YouTube description with timestamps and links

---

## 6. File Deliverables Per Episode

```
ep##-[skill]-[use-case]/
├── README.md               # Episode overview and status
├── script.md               # Full narrated script with timestamps
├── metadata.yml            # YouTube metadata (title, description, tags, chapters)
├── use-case/
│   ├── walkthrough.md      # Reproducible step-by-step demo instructions
│   ├── input/              # Starting materials (messy, real-world)
│   └── output/             # Final results
├── assets/
│   └── thumbnail.md        # Thumbnail concept description
├── vo/                     # ElevenLabs voiceover pipeline (COPY from previous ep)
└── resolve/
    └── timeline-map.md     # DaVinci Resolve shot list and track layout
```

---

## 7. YouTube Metadata Template

```yaml
title: "Anthropic Skills: [Skill Name] — [Catchy Subtitle] | Ep [##]"
description: |
  In this episode, we demo the [skill-name] Anthropic Skill from Smithery.ai.
  [One sentence about what the skill does].

  We walk through a complete use case: [use case description].

  TIMESTAMPS:
  0:00 — Cold Open
  0:30 — What is [skill-name]?
  1:30 — Installation & Deep Dive
  3:30 — Live Demo: [use case]
  9:30 — Results & Other Use Cases
  11:00 — Wrap-Up

  LINKS:
  Skill: https://smithery.ai/skills/anthropics/[skill-name]
  Install: npx @smithery/cli@latest skill add anthropics/[skill-name]
  GitHub: https://github.com/agentfactory/anthropic-skills-showcase

tags:
  - anthropic
  - claude
  - ai skills
  - smithery
  - [skill-specific tags]
  - [audience-specific tags]
category: Science & Technology
```

---

## 8. Brand Identity

### Colors (Anthropic Brand Palette)
- **Dark:** #141413 — Primary text and dark backgrounds
- **Light:** #faf9f5 — Light backgrounds and text on dark
- **Mid Gray:** #b0aea5 — Secondary elements
- **Light Gray:** #e8e6dc — Subtle backgrounds
- **Orange (Primary Accent):** #d97757
- **Blue (Secondary Accent):** #6a9bcc
- **Green (Tertiary Accent):** #788c5d

### Typography
- **Headings:** Poppins (with Arial fallback)
- **Body Text:** Lora (with Georgia fallback)

### Tone
Professional but approachable, educational, specific. Think "senior engineer teaching a peer in that industry." Never condescending, never rushed. Speak the audience's language — use their jargon, reference their real problems. Let the skill speak for itself.
