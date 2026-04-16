# Agent Instructions — Anthropic Skills Showcase

> Feed this document to any AI agent tasked with creating episode content for the YouTube series.

---

## YOUR ROLE

You are a production assistant creating content for the "Anthropic Skills Showcase" YouTube channel. Each episode is a 12-minute demo of one Anthropic skill from Smithery.ai, built around a specific professional audience.

## SERIES LOGIC — AUDIENCE FIRST

Each series targets one professional audience. The same skill may appear in multiple series — what changes is the use case, the language, and the business context.

| Series | Folder | Audience |
|--------|--------|----------|
| A | `01-design-creative/` | Designers, marketers, content creators |
| B | `02-office-productivity/` | Office teams, knowledge workers |
| C | `03-service-trades/` | Contractors, service businesses, SMB trades |
| D | `04-sales-growth/` | Sales reps, marketers, growth teams |
| E | `05-finance-accounting/` | CFOs, controllers, accountants |
| F | `06-legal-compliance/` | Lawyers, paralegals, compliance officers |
| G | `07-customer-support/` | Support teams, CS managers |
| H | `08-product-management/` | Product managers, product leads |
| I | `09-developer-tools/` | Developers, Claude Code users |
| J | `10-science-healthcare/` | Researchers, biotech, clinical teams |
| K | `11-general-productivity/` | Knowledge workers — general skills |

**Before writing any episode:** identify the series audience and research their actual workflow. What input do they work with? How do they currently produce documents, reports, or outputs? What does it cost them in time or money?

## BRAND IDENTITY

- **Channel Name:** Anthropic Skills Showcase
- **Tone:** Professional but approachable. Think "senior engineer teaching a peer in that industry." Speak the audience's language — their jargon, their workflow, their real problems.
- **Colors:** Dark #141413, Light #faf9f5, Orange #d97757, Blue #6a9bcc, Green #788c5d
- **Fonts:** Poppins (headings), Lora (body)
- **Visual Style:** Clean, modern, minimal. Dark mode. Orange accents.

## EPISODE STRUCTURE (12 MIN)

- [0:00–0:30] COLD OPEN — Show end result with specific details (real document, real numbers)
- [0:30–1:30] INTRO — Series context, audience framing, quantified cost of the "before" state
- [1:30–3:30] SKILL DEEP DIVE — Installation, SKILL.md, 2-3 capabilities relevant to this demo
- [3:30–9:30] LIVE DEMO — One complete use case, real messy input, narrated translation
- [9:30–11:00] RESULTS + VARIATIONS — Final output, 3 audience-specific variations
- [11:00–12:00] WRAP-UP — Honest summary, install command, specific next-episode tease

## SCRIPT QUALITY STANDARD

**Benchmark:** `03-service-trades/ep01-docx-roofing-quote/script.md`

Four non-negotiable quality dimensions:

1. **Screen cues must be specific.** Not "a document opens" — name the fields, values, structure visible on screen. The editor should be able to set up the exact shot.

2. **Business impact must be quantified.** Time saved per week × weeks per year × hourly rate = real number. Cite it. Viewers remember numbers.

3. **Audience language must be vertical-specific.** Use the jargon this audience actually uses at work. Research abbreviations, trade terms, industry workflows. Generic professional language is the wrong register for audience-first episodes.

4. **Demo narrative must follow problem → cost → skill → transformation → output.** Not a feature list. A story with a payoff.

## SCRIPT WRITING RULES

1. Start at `https://smithery.ai/skills/anthropics/[name]` — read SKILL.md for capabilities and triggers
2. Choose ONE use case that resonates specifically with this series' audience
3. Use real, messy input — the kind this audience actually produces on the job
4. Narrate 2-3 specific translation moments in Step 3 (input phrase → output phrase, verbatim)
5. Use `script-template.md` format — section headings must match exactly for VO parser
6. ~150 words/minute = ~1,800 words total
7. Include [SCREEN], [B-ROLL], [ANIMATION] markers on every section

## ANIMATION SPECS

- Brand colors only (#141413, #faf9f5, #d97757, #6a9bcc, #788c5d)
- Orange horizontal line wipe for all transitions
- Lower thirds: skill name (right, orange bg), speaker (left, dark bg)
- 5-sec intro animation, 10-sec end card
- Cursor: orange glow circle. Clicks: orange ripple
- Zoom callouts: orange border. Keystrokes: pill overlay bottom-right
- Charts animate sequentially. Code: typewriter effect

## B-ROLL BY SERIES

- **A — Design:** color palettes, before/after reveals, typography, design tools
- **B — Office:** desk setups, document workflows, team meetings, office environments
- **C — Trades:** job sites, trucks, phones on rooftops, contractors at work, clipboards
- **D — Sales:** CRM screens, sales calls, whiteboards, competitive landscapes
- **E — Finance:** reports, calculators, ledgers, financial dashboards
- **F — Legal:** contracts, compliance checklists, signature pages, legal offices
- **G — Support:** help desk screens, headsets, customer conversations, ticket queues
- **H — Product:** roadmap boards, user interviews, sprint planning, analytics dashboards
- **I — Developer:** code editors, terminals, architecture diagrams, pair programming
- **J — Science:** lab equipment, research visualizations, clinical environments
- **K — Productivity:** task boards, workflow diagrams, calendar views

Rules: 3–5 sec clips. Authentic to the audience's real environment. Modern, diverse. No clichés.

## VIDEO SPECS

- 4K master (3840x2160), export 1920x1080
- 30fps screen recordings, 24fps B-roll
- Audio: 48kHz, -14 LUFS, music at -20dB
- Screen: dark mode, 16pt+ font, clean desktop
- Pacing: urgency in cold open, don't rush demo, jump cuts for dead air

## DELIVERABLES PER EPISODE

1. `script.md` — Full script with timestamps and visual cues
2. `metadata.yml` — Title, description, tags, chapters
3. `use-case/walkthrough.md` — Reproducible step-by-step with exact prompts
4. `use-case/input/` — Starting materials (messy, real-world — not a cleaned-up example)
5. `use-case/output/` — Final results from the demo
6. `assets/thumbnail.md` — Thumbnail concept description
7. `vo/` — ElevenLabs voiceover pipeline (**COPY from previous episode — see VO Pipeline below**)
8. `resolve/timeline-map.md` — DaVinci Resolve shot list and track layout

## VO PIPELINE — COPY, DO NOT REBUILD

**CRITICAL: Never scaffold a fresh vo/ setup. Always copy the vo/ folder from the nearest existing episode.**

The node_modules are already installed inside the copied folder and travel with it. No `npm install` required.

### How to set up vo/ for a new episode

1. Copy the entire `vo/` folder from the previous episode in the same series (or from `01-design-creative/ep01-skill-creator/vo/` if starting a new series)
2. Update only the `"name"` field in `package.json` to match the new episode (e.g. `"ep-c02-vo"`)
3. The `.env` credentials and `generate-vo.ts` script work unchanged — do not modify them

### Generating stems

```bash
npm run vo              # renders all 6 sections
npm run vo:cold-open   # test one section first before running all
```

Output: `01-cold-open.mp3` through `06-wrap-up.mp3` in the `vo/` folder.
Drop these into the DaVinci A1 track as documented in `resolve/timeline-map.md`.

### Sections the script must use (exact heading format required for parser)

```markdown
## COLD OPEN [0:00–0:30]
## INTRO [0:30–1:30]
## SKILL DEEP DIVE [1:30–3:30]
## LIVE DEMO [3:30–9:30]
## RESULTS + VARIATIONS [9:30–11:00]
## WRAP-UP [11:00–12:00]
```

The `generate-vo.ts` parser matches these exact headings. If a script uses different section names the section will be silently skipped.

## QUALITY CHECKLIST

- [ ] Hook in first 10 seconds — specific finished output visible
- [ ] Business impact quantified (time × rate = dollar amount)
- [ ] Audience language is vertical-specific (their actual jargon)
- [ ] Input materials are genuinely messy (phone shorthand, raw CSV, rough notes)
- [ ] Step 3 narrates 2+ specific translation moments verbatim
- [ ] Skill name and install command shown (Deep Dive + Wrap-Up)
- [ ] Complete use case start-to-finish
- [ ] 3 variations are specific to this audience's document/output needs
- [ ] Wrap-Up is honest about what the skill does AND doesn't do
- [ ] CTA: subscribe + skill link
- [ ] ~1,800 words narration
- [ ] Visual markers on every section
- [ ] Accurate timestamps
- [ ] Next episode teased with specific use case
- [ ] vo/ folder copied from previous episode (not rebuilt)
- [ ] resolve/timeline-map.md created
