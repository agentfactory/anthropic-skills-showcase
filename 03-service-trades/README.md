# Service Trades — Anthropic Skills Showcase

> Real skills for real service businesses. Each episode shows one Anthropic Skill solving an actual problem for a contractor, travel agent, massage therapist, accountant, or other service professional — from install to finished output in about 12 minutes.

---

## Who This Is For

Service businesses that run on phones, clients, and hustle:

- **Contractors & Trades** — plumbers, electricians, HVAC, landscapers, painters
- **Health & Wellness** — massage therapists, chiropractors, personal trainers
- **Professional Services** — accountants, bookkeepers, tax preparers, consultants
- **Travel & Hospitality** — travel agents, tour operators, event planners
- **Any service business** with clients, invoices, and more work than time

---

## What Each Episode Shows

1. Which Anthropic Skill solves your specific problem
2. How to install it into Claude — takes 30 seconds
3. A real-world demo with actual inputs a service business would have
4. The finished output, ready to use

---

## Episode Guide

| Ep | Skill | Who It Helps |
| -- | ----- | ------------ |
| 01 | `docx` | Quotes, proposals, and job cards that look professional |
| 02 | `xlsx` | Know if last month was actually profitable |
| 03 | `internal-comms` | Customer emails and crew updates without the hour of typing |
| 04 | `response-drafting` | Respond to new leads in 2 minutes, not 20 |
| 05 | `brand-voice` | Sound professional on every document you send |
| 06 | `daily-briefing` | Start every morning knowing exactly what's ahead |
| 07 | `pdf` | Merge contracts, generate reports, sign and send |
| 08 | `creating-financial-models` | Build a real P&L that tells you if the business is working |

---

## Installing Any Skill

One line in Claude's terminal:

```bash
npx @smithery/cli@latest skill add anthropics/<skill-name>
```

The skill is then available in every conversation. No configuration. No setup beyond that.

---

## Want to Go Deeper?

Join **Claude Academy** for structured training built specifically for service businesses:

- **Half-day** — Claude foundations: how it works, what it can do for your business
- **Full day** — Build your complete Claude workflow from intake to invoice
- **Two days** — Full team onboarding with custom skills built for your operation

---

## Production Workflow (Internal)

```text
Script written → Claude validates → ElevenLabs stems → Screen recording → DaVinci Resolve → YouTube
```

### Script Validation Before Audio

Before any episode script goes to ElevenLabs, it runs through a validation agent that checks:

- No stage directions or visual cues left in the narration text
- No markdown formatting that would sound unnatural when spoken aloud
- No incomplete sentences or robotic constructions
- Every section reads naturally at conversational pace

The script has to pass clean before audio generation starts. This catches problems early instead of re-rendering stems after the fact.

To generate voiceover stems without opening a terminal:

```bash
python generate-vo.py --episode ep02-xlsx-job-costing
```

Claude runs this directly. No npm. No npx. Just Python.

---

## Episode Folder Structure

```text
03-service-trades/
├── README.md                    # You are here
├── generate-vo.py               # Python voiceover generator (no npx required)
├── .env                         # API keys — not committed
└── ep##-<skill-name>/
    ├── README.md                # Episode overview and checklist
    ├── script.md                # Full narration with timestamps + visual cues
    ├── metadata.yml             # YouTube title, description, chapters, tags
    ├── use-case/
    │   ├── walkthrough.md       # On-camera rehearsal notes
    │   └── input/               # Real-world input files used in the demo
    ├── assets/
    │   └── thumbnail.md         # Thumbnail concept
    └── resolve/
        └── timeline-map.md      # Shot-by-shot DaVinci Resolve assembly
```

---

## Pre-Production Checklist (Every Episode)

- [ ] Script complete and timed (~1,800 words / 12 min at 150 wpm)
- [ ] Script passes Claude validation (`generate-vo.py` will report issues)
- [ ] ElevenLabs stems generated and reviewed
- [ ] Use-case input files realistic — read like actual business inputs
- [ ] Skill confirmed working end-to-end before recording
- [ ] Screen recording captured (dark mode, 16pt font, clean terminal)
- [ ] DaVinci Resolve timeline assembled per `resolve/timeline-map.md`
- [ ] Total runtime: 11:30–12:30
- [ ] Master MP4 exported
- [ ] Thumbnail rendered
