# Episode 02: pdf — Merge, Watermark, and Extract PDFs in Minutes

**Series:** B — Documents & Files | **Skill:** anthropics/pdf | **Duration:** ~12 min
**Skill URL:** https://smithery.ai/skills/anthropics/pdf
**Install:** `npx @smithery/cli@latest skill add anthropics/pdf`
**Target Audience:** Everyone — universal office skill for anyone who handles documents
**Use Case:** Merge 5 quarterly PDF reports into one master document, stamp every page with a CONFIDENTIAL watermark, and extract all tables into structured markdown.

---

## COLD OPEN [0:00–0:30]

**[SCREEN: Split-screen — left side shows 5 separate PDF files in a folder (Q1, Q2, Q3, Q4, Annual Summary); right side shows a single merged PDF open with a diagonal "CONFIDENTIAL" watermark visible on every page]**

NARRATOR: Five separate quarterly reports. Twenty-three tables scattered across 84 pages. And a board meeting starting in 30 minutes.

**[SCREEN: Quick cut — terminal window, one command typed, progress bar fills in 4 seconds]**

NARRATOR: Watch what one skill does with all of that.

**[SCREEN: Three-panel result — the merged PDF, the watermarked cover page, and a clean markdown file showing a formatted table extracted from the PDF]**

NARRATOR: Merged. Watermarked. Tables extracted. Every single one. In the time it takes to pour a coffee.

**[ANIMATION: Orange line wipe transition]**

---

## INTRO [0:30–1:30]

**[ANIMATION: 5-sec channel intro — "Anthropic Skills Showcase" logo reveal on dark background, orange accent]**

NARRATOR: Welcome back to the Anthropic Skills Showcase — where we walk through every official Anthropic skill on Smithery, one episode at a time. I'm Denis. This is Episode 02, and we're covering the skill I get asked about most by non-technical people: **pdf**.

**[SCREEN: Smithery.ai anthropics/pdf skill page scrolls slowly — highlight install count: 895]**

NARRATOR: Nearly nine hundred installs, and you'll see why in about four minutes. This is a universal skill. If you've ever worked in a job that touches documents — finance, legal, ops, research, sales — this one belongs in your permanent toolkit.

**[B-ROLL: Quick cuts — office worker downloading 5 separate PDFs one at a time, opening each, scrolling to find a table, manually copying data into a spreadsheet]**

NARRATOR: The before state is painful and familiar: five reports downloaded separately, each opened one by one, tables copy-pasted by hand, watermarks added in Adobe Acrobat if you even have a license. It takes 45 minutes easy.

**[ANIMATION: Orange line wipe]**

---

## SKILL DEEP DIVE [1:30–3:30]

**[SCREEN: Terminal, dark mode, large font — 16pt minimum]**

NARRATOR: Install command, one line:

**[SCREEN: Typewriter animation]** `npx @smithery/cli@latest skill add anthropics/pdf`

NARRATOR: That drops the skill into your `.claude/skills/` directory. Done. No dependencies to manage, no Python environment, no Acrobat license required.

**[SCREEN: VS Code file tree — `.claude/skills/pdf/SKILL.md` opens. Frontmatter is visible.]**

NARRATOR: Let's look inside. Like every Anthropic skill, it's one file — `SKILL.md`. The YAML frontmatter block at the top is what Claude reads to decide when to auto-load the skill. The markdown body is what Claude executes when triggered.

**[SCREEN: Highlight the `triggers` and `description` sections in the frontmatter — orange glow box around them]**

NARRATOR: The triggers here are well-tuned. Phrases like "merge PDFs," "combine reports," "add watermark," "extract tables from PDF" — any of these in your prompt and the skill activates without you thinking about it.

**[SCREEN: Scroll through the main body of SKILL.md — three distinct capability blocks become visible]**

NARRATOR: The skill has three main capabilities, and this is where it gets interesting. Capability one: **merge** — combine any number of PDFs with optional page ordering and bookmarks. Capability two: **watermark** — stamp text or image watermarks at any position, rotation, opacity, and page range. Capability three: **extract** — pull text, tables, or images out of PDFs and export them as markdown, CSV, or raw text.

**[ANIMATION: Three capability icons slide in from left — labeled "Merge", "Watermark", "Extract" with orange accent bars beneath each]**

NARRATOR: Three distinct operations, one skill. You can run them individually, or chain them together in a single prompt — which is exactly what we're going to do.

**[ANIMATION: Flow diagram — "5 separate PDFs" → merge → watermark → extract → "1 master PDF + markdown tables"]**

NARRATOR: That chain — merge, then watermark, then extract — is our demo. Let's run it.

**[ANIMATION: Orange line wipe]**

---

## LIVE DEMO [3:30–9:30]

**[SCREEN: Full-screen recording begins — dark-mode terminal on left, file explorer on right. Font 16pt+.]**

### Step 1 — Set up the inputs [3:30–4:15]

**[SCREEN: File explorer showing the `use-case/input/` folder with 5 PDF files: meridian-q1-2024.pdf, meridian-q2-2024.pdf, meridian-q3-2024.pdf, meridian-q4-2024.pdf, meridian-annual-summary-2024.pdf]**

NARRATOR: Here's my starting point — five separate quarterly reports from Meridian SaaS. Q1 through Q4 and the annual summary. Different authors, different formatting styles, combined 84 pages. This is exactly what lands in your inbox before a board meeting.

**[SCREEN: Briefly open meridian-q1-2024.pdf — show the cover page and scroll to a table on page 4. Then close.]**

NARRATOR: Notice what we're working with — each file has its own header style, its own table layout, its own page numbering. Messy, but realistic.

### Step 2 — Write the prompt [4:15–5:00]

**[SCREEN: Claude Code session, empty. Denis types the prompt — typewriter effect.]**

NARRATOR: One prompt. I'm going to ask for all three operations at once.

**[SCREEN: Typewriter]**
```
Using the pdf skill, do the following with the 5 files in use-case/input/:
1. Merge them in order: Q1, Q2, Q3, Q4, then Annual Summary
2. Add a diagonal "CONFIDENTIAL" watermark to every page — grey, 40% opacity, rotated 45 degrees
3. Extract all tables from all pages and output them as structured markdown
Save the merged PDF as use-case/output/meridian-2024-master.pdf and the tables as use-case/output/tables.md
```

**[SCREEN: Denis hits enter. A banner appears at the top of the Claude Code session — "pdf skill active"]**

NARRATOR: There it is — the pdf skill auto-loaded. No slash command, no explicit invocation. The phrase "using the pdf skill" plus the nature of the request — merge, watermark, extract — that's all the trigger needed.

### Step 3 — Watch the merge [5:00–6:15]

**[SCREEN: Claude begins processing. Progress updates stream into the terminal.]**

NARRATOR: Claude is working through this in order. First, the merge. Watch the output — it's not just concatenating bytes. It's re-ordering page numbers, preserving internal bookmarks, and building a new table of contents.

**[SCREEN: Zoom callout — orange border highlights the "table of contents" log entry as it appears]**

NARRATOR: That table of contents entry — that's the aha moment right there. This isn't a dumb file joiner. The skill understands document structure. It knows Q1 ends and Q2 begins, and it builds navigation accordingly.

**[B-ROLL: Simulated preview of the merged PDF in a viewer — section bookmarks visible in the sidebar: "Q1 Report", "Q2 Report", "Q3 Report", "Q4 Report", "Annual Summary"]**

NARRATOR: Five separate documents, now one navigable file with section bookmarks. That alone would have taken 20 minutes in Acrobat.

### Step 4 — Watch the watermark [6:15–7:15]

**[SCREEN: Terminal shows watermark operation running — "Processing page 1 of 84... page 2 of 84..."]**

NARRATOR: Now the watermark pass. Every page. You can see it counting. Grey text, 40% opacity, 45-degree rotation. Precisely the settings you'd spend five minutes hunting through a UI to find.

**[SCREEN: Output preview — page 12 of the merged PDF showing CONFIDENTIAL watermark diagonally across the content. Watermark is visible but not obscuring text.]**

NARRATOR: That's page 12. The watermark sits behind the content layer — visible enough to communicate confidentiality, transparent enough to still read the underlying data. You can tune that opacity value to taste with a single parameter change.

### Step 5 — Watch the table extraction [7:15–8:30]

**[SCREEN: Terminal now running the extraction phase — "Scanning for tables... found 7 tables in Q1... found 5 tables in Q2..."]**

NARRATOR: This is the part that usually means a full afternoon with copy-paste. The skill is scanning every page, detecting table boundaries, and converting them into clean markdown.

**[SCREEN: The tables.md file opens as it's being written — first table appears: a structured markdown table with headers and rows, labeled "Source: meridian-q1-2024.pdf, Page 4"]**

NARRATOR: Look at the output format — each table gets a source label. Page number, source file. So when your CFO asks "where does this revenue figure come from?" you have a direct citation, not a shrug.

**[SCREEN: Scroll through tables.md — multiple tables visible, each cleanly formatted with its source reference]**

NARRATOR: Twenty-three tables across 84 pages. All of them, structured, sourced, and ready to paste into a presentation, a spreadsheet, or a report.

### Step 6 — Review the final outputs [8:30–9:30]

**[SCREEN: Split view — left: file explorer showing use-case/output/ with meridian-2024-master.pdf and tables.md; right: the PDF open, showing a section bookmark being clicked]**

NARRATOR: Here's what we produced: one 84-page master PDF with section navigation and a CONFIDENTIAL watermark on every page. And one markdown file with every table in the source documents, each tagged to its origin.

**[SCREEN: Typewriter — Denis types a follow-up refinement prompt]**

NARRATOR: One quick refinement — I want the tables in the markdown file sorted by section, not by raw page order.

**[SCREEN: Typewriter]** `Update tables.md: group the extracted tables by report section (Q1, Q2, Q3, Q4, Annual Summary) with a level-2 heading for each section.`

**[SCREEN: Claude edits tables.md — the file refreshes with ## Q1 Report, ## Q2 Report headings grouping the tables]**

NARRATOR: Done. That's the iteration pattern with this skill — the first pass gives you the heavy lifting, the follow-up refines the structure. Both steps together took under six minutes.

**[ANIMATION: Orange line wipe]**

---

## RESULTS + VARIATIONS [9:30–11:00]

**[SCREEN: Before/after comparison — left: 5 separate PDF icons; right: one master PDF with a document structure panel open and the tables.md preview alongside]**

NARRATOR: What we just did in under six minutes: merged five documents into one structured master, applied a precise watermark to all 84 pages, and extracted twenty-three tables with full source citations. The manual version of this is a 45-minute task. Every time.

**[SCREEN: Three use-case cards animate in sequentially — orange accent bars, clean minimal cards on dark background]**

NARRATOR: Three other ways I'd use this skill constantly:

**[SCREEN: Card 1 appears — "Legal Contract Review"]**

NARRATOR: One — **legal contract packages**. Merge all counterparty attachments into one reviewable PDF, redline watermark on the draft version, extract every clause table for analysis.

**[SCREEN: Card 2 appears — "Research Synthesis"]**

NARRATOR: Two — **research synthesis**. Pull 10 academic PDFs into one document, extract every data table into markdown, and feed that directly into Claude for cross-study analysis. No more manual table transcription.

**[SCREEN: Card 3 appears — "Client Report Delivery"]**

NARRATOR: Three — **client report delivery**. Merge all project deliverables into one branded package, stamp with your company watermark, and extract the key metrics tables for the executive summary. Makes every agency look like they have a custom internal tool.

NARRATOR: Anywhere you handle multi-document workflows — finance, legal, consulting, research, ops — this skill removes the friction entirely.

**[ANIMATION: Orange line wipe]**

---

## WRAP-UP [11:00–12:00]

**[SCREEN: End card starts animating in — dark background, orange accents]**

NARRATOR: Quick recap: the `pdf` skill from Anthropic on Smithery gives you merge, watermark, and table extraction in a single install. No extra software, no Acrobat license, no afternoon of copy-paste.

**[SCREEN: Lower third — orange background bar — "Install: npx @smithery/cli@latest skill add anthropics/pdf"]**

NARRATOR: Install command and the full demo are in the description. Skill link is there too — 895 installs and counting. If this saved you time, hit subscribe — we're covering all 95 Anthropic skills on this channel.

**[SCREEN: "Next up" card appears — "Episode 03: creating-financial-models — Build a full DCF model for a SaaS startup in minutes"]**

NARRATOR: Next episode, we use the `creating-financial-models` skill to build a full discounted cash flow model for a SaaS startup — from scratch, in minutes. If you work in finance or you're raising a round, you will not want to miss that one. See you there.

**[ANIMATION: 10-sec end card — logo, subscribe button, skill URL, GitHub link]**

---

## Word count: ~1,810 words (target ~150 wpm → ~12:04 narration)
