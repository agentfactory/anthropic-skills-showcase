# Anthropic Skills Showcase

> A YouTube series that shows real people — in real jobs — getting real work done with Anthropic Skills. Each ~12-minute episode covers one skill: what it does, how to install it, and a live demo with inputs you'd actually have.

---

## What Is This?

Anthropic Skills are pre-built capabilities you install into Claude in one command. This repo is the production hub for a series of episodes that show people in specific industries how to use them — without needing an IT department or a software background.

Each episode is organized by **who it's for**, not by what the skill does technically.

---

## Episode Series

### 01 — Design & Creative

For designers, marketers, and anyone making visual or branded content.

| Ep | Skill | What It Does |
| -- | ----- | ------------ |
| 01 | skill-creator | Build a custom skill from scratch |
| 02 | pdf | Merge, split, watermark, OCR |
| 03 | creating-financial-models | DCF model for a startup |
| 04 | pptx | Product brief → 10-slide deck |
| 05 | xlsx | Clean messy data, add charts |
| 06 | frontend-design | SaaS landing page from a prompt |
| 07 | competitive-analysis | Analyze a competitor landscape |
| 08 | canvas-design | Museum-quality poster from a brief |
| 09 | interactive-dashboard-builder | Sales dashboard from a CSV |
| 10 | theme-factory | Style a report three different ways |
| 11 | applying-brand-guidelines | Apply a brand guide to any content |
| 12 | brand-voice | Extract and apply a consistent voice |
| 13 | brand-guidelines | Build a brand guide from scratch |
| 14 | algorithmic-art | Generative art from code |
| 15 | slack-gif-creator | Make a branded Slack GIF |

---

### 02 — Office Productivity

For anyone in an office dealing with documents, spreadsheets, and internal communication.

| Ep | Skill | What It Does |
| -- | ----- | ------------ |
| 01 | docx | Create and edit Word documents |
| 02 | xlsx | Build spreadsheets with formulas and charts |
| 03 | pdf | Work with PDFs — merge, extract, OCR |
| 04 | pptx | Build presentations from scratch |
| 05 | doc-coauthoring | Collaborate on documents with Claude |
| 06 | internal-comms | Write internal announcements and updates |

---

### 03 — Service Trades

For contractors, travel agents, therapists, accountants, and any service business running on clients and hustle.

| Ep | Skill | What It Does |
| -- | ----- | ------------ |
| 01 | docx | Professional quote out the door in 4 minutes |
| 02 | xlsx | Know if last month was actually profitable |

More episodes in production — see [03-service-trades/README.md](03-service-trades/README.md) for the full episode plan.

---

## Installing Any Skill

```bash
npx @smithery/cli@latest skill add anthropics/<skill-name>
```

One line. The skill is available in every Claude conversation immediately.

---

## Want Structured Training?

Join **Claude Academy** for half-day, full-day, or two-day courses built for specific industries:

- **Half-day** — What Claude can do and how to start using it today
- **Full day** — Build a complete Claude workflow for your business
- **Two days** — Full team onboarding with custom skills built for your operation

---

## Repo Structure

```text
anthropic-skills-showcase/
├── README.md                        # You are here
├── 00-production-guide/             # Production bible, script templates, guidelines
├── 01-design-creative/              # Episodes 01–15
├── 02-office-productivity/          # Episodes 01–06
└── 03-service-trades/               # Episodes 01–02 (growing)
    ├── generate-vo.py               # Python voiceover generator — no npx required
    └── ep##-<skill>/
        ├── script.md
        ├── use-case/
        ├── assets/
        └── resolve/
```

---

## Production Pipeline

```text
Script → Claude validates narration → ElevenLabs stems → Screen recording → DaVinci Resolve → YouTube
```

See [00-production-guide/](00-production-guide/) for the full production bible, script templates, and recording standards.
