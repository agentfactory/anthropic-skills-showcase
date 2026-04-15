# Master Production Document — Anthropic Skills Showcase

> The complete production bible for creating YouTube demo episodes for each of the 95 Anthropic Skills on Smithery.ai.

---

## 1. Episode Format (12 Minutes)

Every episode follows this exact structure:

### [0:00-0:30] COLD OPEN (30 sec)
Hook the viewer with the end result. Show the finished output of the use case. Voiceover: "What if you could [result] in under 5 minutes? Let me show you."

### [0:30-1:30] INTRO + CONTEXT (60 sec)
Branded intro animation (5 sec). Introduce the skill by name, what it does, and who it's for. Show the Smithery.ai skill page briefly. Explain the "before" state — what this used to take manually.

### [1:30-3:30] SKILL DEEP DIVE (2 min)
How to install it (`npx @smithery/cli@latest skill add anthropics/[skill-name]`). Walk through the SKILL.md — what's in it, how it works. Show the configuration options and triggers. Screen recording of the skill page.

### [3:30-9:30] LIVE USE CASE DEMO (6 min)
This is the core. One concrete, relatable use case. Show the entire workflow from start to finish: setting up the input, invoking the skill, watching it work, reviewing the output. Real-time screen recording with voiceover narration. Pause at key moments to explain what's happening. Show any errors/iterations — keep it authentic.

### [9:30-11:00] RESULTS + VARIATIONS (90 sec)
Show the final output. Suggest 2-3 other use cases this skill is perfect for. Show quick clips of alternative outputs if available.

### [11:00-12:00] WRAP-UP + CTA (60 sec)
Recap: what the skill does, the use case shown, key takeaway. CTA: Subscribe, link to the skill in description, link to the GitHub repo. Tease the next episode. End card.

---

## 2. Brand Identity

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
Professional but approachable, educational, enthusiastic without being hype-y. Think "senior engineer teaching a friend." Never condescending, never rushed. Let the skill speak for itself.

---

## 3. Episode Categories (11 Series, 95 Episodes)

| Series | Theme | Episode Count | Target Audience |
|--------|-------|---------------|-----------------|
| A | Design & Creative | 8 | Designers, marketers, content creators |
| B | Documents & Files | 6 | Everyone — universal office skills |
| C | Data & Analytics | 8 | Data analysts, scientists, business analysts |
| D | Sales & Marketing | 12 | Sales reps, marketing teams, growth teams |
| E | Finance & Accounting | 8 | CFOs, controllers, accounting teams |
| F | Legal & Compliance | 6 | Legal teams, compliance officers |
| G | Customer Support | 6 | Support teams, CS managers |
| H | Product Management | 5 | Product managers, product leads |
| I | Developer Tools | 23 | Developers, Claude Code users |
| J | Science & Healthcare | 7 | Researchers, biotech, clinical teams |
| K | Productivity & Knowledge | 6 | Knowledge workers, everyone |

---

## 4. Production Workflow

### Pre-Production (Per Episode)
1. Review the skill's SKILL.md on Smithery.ai
2. Install the skill locally and experiment with it
3. Design one concrete use case that demonstrates the skill's value
4. Write the script using `script-template.md`
5. Prepare input materials for the demo (sample data, documents, etc.)
6. Create the `metadata.yml` with title, description, tags, timestamps

### Production
1. Record screen capture at native resolution (dark mode)
2. Record voiceover narration following the script
3. Capture any B-roll footage needed
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

## 5. Recommended First 10 Episodes

These are selected for maximum audience appeal, visual impact, and install count:

| Priority | Skill | Installs | Use Case Idea |
|----------|-------|----------|---------------|
| 1 | skill-creator | 1,113 | Create a custom "meeting notes formatter" skill from scratch |
| 2 | pdf | 895 | Merge 5 quarterly reports, add watermarks, extract tables |
| 3 | creating-financial-models | 762 | Build a DCF model for a hypothetical SaaS startup |
| 4 | pptx | 718 | Turn a product brief into a 10-slide investor deck |
| 5 | xlsx | 664 | Clean a messy CSV dataset, add formulas, create charts |
| 6 | frontend-design | 488 | Build a SaaS landing page from a single prompt |
| 7 | competitive-analysis | 455 | Analyze 3 competitors in the project management space |
| 8 | canvas-design | 443 | Create a museum-quality poster for a tech conference |
| 9 | interactive-dashboard-builder | 419 | Build a sales performance dashboard from CSV data |
| 10 | theme-factory | 406 | Style a plain HTML report with 3 different themes |

---

## 6. File Deliverables Per Episode

Each episode folder must contain:

```
ep##-skill-name/
├── README.md           # Episode overview and status
├── script.md           # Full narrated script with timestamps
├── metadata.yml        # YouTube metadata (title, description, tags, chapters)
├── use-case/
│   ├── walkthrough.md  # Step-by-step demo instructions
│   ├── input/          # Starting materials for the demo
│   └── output/         # Final results from the demo
└── assets/
    └── thumbnail.md    # Thumbnail concept description
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
category: Science & Technology
```
