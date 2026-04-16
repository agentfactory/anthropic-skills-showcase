# Episode B01: docx — From Markdown Mess to Polished Word Report

**Series:** B — Office & Productivity | **Folder:** `02-office-productivity/`
**Skill:** `anthropics/docx`
**Skill URL:** https://smithery.ai/skills/anthropics/docx
**Installs:** 623
**Duration:** ~12 min
**Target Audience:** Project managers, consultants, business analysts, anyone who produces Word documents professionally

---

## COLD OPEN [0:00–0:30]

**[SCREEN: Split-screen — left side shows a raw Markdown file open in a text editor, plain black text, no formatting, headings marked with # symbols, table represented as pipe characters. Right side shows a polished Word document: proper heading hierarchy, visible TOC, formatted table with shaded rows, an executive summary callout box, footer with client name and date]**

NARRATOR: This is the same document. Left side is what you typed. Right side is what your client actually receives.

**[SCREEN: Quick cut — cursor in the left pane, single prompt typed: "Turn this kickoff brief into a professional Word report with heading styles, a table of contents, formatted deliverables table, and an executive summary." Enter key pressed. Progress indicator runs for 4 seconds.]**

NARRATOR: One prompt. Four seconds.

**[SCREEN: The polished Word document opens in Microsoft Word, TOC auto-populates, deliverables table has alternating row shading, executive summary sits in a styled callout box]**

NARRATOR: That is the docx skill. Let's understand how it actually works.

**[ANIMATION: Orange line wipe transition]**

---

## INTRO [0:30–1:30]

**[ANIMATION: 5-sec channel intro — "Anthropic Skills Showcase" logo reveal on dark background, orange accent bar sweeps in]**

NARRATOR: Welcome back to the Anthropic Skills Showcase. I'm Denis. This is the first episode of Series B — Documents and Files. Series A covered design and creative work. Series B is about the documents that run business operations: Word files, Excel workbooks, PDFs, CSVs. Things that land in inboxes every single day.

**[SCREEN: Smithery.ai anthropics/docx skill page scrolls — install count 623 highlighted in orange]**

NARRATOR: We're starting with `docx`. Six hundred and twenty-three installs. That number is going to feel low to you by the end of this episode once you understand what the skill can do.

**[B-ROLL: Screen recording — someone spending 8 minutes manually reformatting a Word document: changing heading styles one by one, inserting a TOC, then updating it, formatting a table with borders, trying to get consistent spacing]**

NARRATOR: Here is how most people produce a Word report. They have the content — written in Notion, or Google Docs, or a Markdown file, or just a long email thread — and they paste it into Word. Then they spend the next 20 or 30 minutes reformatting. Applying heading styles. Inserting a table of contents. Formatting tables so they don't look like a spreadsheet pasted in from 2004. Adding a footer. Getting the font to match whatever the company template uses.

**[SCREEN: Clock graphic — "~25 minutes per document" label]**

NARRATOR: For one document. If you produce three or four of these a week — project briefs, proposals, SOWs, status reports — that is two hours a week of formatting work. Not writing. Formatting.

**[ANIMATION: Orange line wipe]**

---

## SKILL DEEP DIVE [1:30–3:30]

**[SCREEN: Terminal, dark mode, 16pt font minimum]**

NARRATOR: Install the skill in one line:

**[SCREEN: Typewriter animation]** `npx @smithery/cli@latest skill add anthropics/docx`

NARRATOR: It drops into `.claude/skills/docx/SKILL.md`. One file. No dependencies on Microsoft Office being installed, no COM automation, no Word license required on the machine running the skill.

**[SCREEN: VS Code — `.claude/skills/docx/SKILL.md` opens. Frontmatter visible.]**

NARRATOR: Like every Anthropic skill, the whole thing lives in a single `SKILL.md` file. The YAML frontmatter at the top is what Claude reads to know when to automatically activate it. The body is the instruction set Claude executes.

**[SCREEN: Highlight the `triggers` block in the frontmatter — orange glow box]**

NARRATOR: The triggers include phrases you'd naturally say: "create a Word document," "turn this into a docx," "format this as a report," "generate a Word file." Any of these and the skill activates automatically — no special syntax, no slash command needed.

**[SCREEN: Scroll down through SKILL.md body — three distinct capability sections become visible with visible headers]**

NARRATOR: The skill has four distinct document capabilities. Let's walk through each one briefly, because understanding what's available changes how you use it.

**[SCREEN: Highlight capability one — "Document Structure"]**

NARRATOR: Capability one: **document structure**. This is heading hierarchy — H1 through H6 — with proper Word styles applied, not just bolded text at a larger font size. It also covers auto-generated tables of contents that actually update when the document is opened, numbered lists, bullet hierarchies, and section breaks.

**[SCREEN: Highlight capability two — "Tables"]**

NARRATOR: Capability two: **tables**. Formatted tables with header rows, alternating row shading, borders, and column width control. Not the default Excel-paste look — actual Word table styles.

**[SCREEN: Highlight capability three — "Call-outs and Executive Summaries"]**

NARRATOR: Capability three: **call-outs and styled blocks**. Executive summaries in bordered boxes, warning notes, info panels, highlighted key findings. These are the elements that make a document look like it was designed, not just typed.

**[SCREEN: Highlight capability four — "Headers, Footers, Metadata"]**

NARRATOR: And capability four: **headers, footers, and document metadata**. Page numbers, document title, client name, date, author — all configurable from a single prompt. The output is a proper `.docx` file you can email directly.

**[ANIMATION: Four capability icons arranged in a 2x2 grid — "Structure", "Tables", "Call-outs", "Headers/Footers" with orange accent bars]**

NARRATOR: These aren't separate modes you switch between. They all work together in a single pass. One prompt, one output file. Let's prove it.

**[ANIMATION: Orange line wipe]**

---

## LIVE DEMO [3:30–9:30]

### Step 1 — Review the Input [3:30–4:30]

**[SCREEN: Text editor opens — `project-kickoff-brief.md` fills the screen. Clean Markdown but clearly unformatted. Headings marked with #. A pipe-character table for deliverables. A section of plain bullet points for stakeholders.]**

NARRATOR: Here is our input. This is a realistic project kickoff brief for a fictional digital transformation engagement. It has everything: project objectives, scope boundaries, stakeholder list, a deliverables table with owners and due dates, a timeline, and risk flags.

**[SCREEN: Scroll through the whole file slowly — approximately 350 words visible, clean but unstyled]**

NARRATOR: The content is solid. The formatting is zero. This is exactly what you get when a consultant writes up notes after a kickoff call — or when someone exports a doc from Notion, or pulls together notes from a Slack thread. Good thinking, no presentation layer.

**[SCREEN: Side panel — Word document of what we want as output, briefly shown for 3 seconds before being closed]**

NARRATOR: This is what we want as the final output. That's the target. Let's get there.

---

### Step 2 — Invoke the Skill [4:30–5:30]

**[SCREEN: Claude Code terminal or Claude chat interface — dark mode, large font]**

NARRATOR: I'll open a Claude session. The docx skill is already installed, so I don't need to do anything special to activate it. I'll just describe what I want.

**[SCREEN: Typing animation — prompt being typed character by character]**

NARRATOR: My prompt is: "Using the project kickoff brief in project-kickoff-brief.md, generate a professional Word report. Apply heading styles H1 through H3, insert an auto-generated table of contents after the title, format the deliverables section as a styled Word table with alternating row shading, put the project objectives in an executive summary callout box at the top, and add a footer with the client name and today's date. Output as kickoff-report.docx."

**[SCREEN: Prompt submitted. Progress indicator visible.]**

NARRATOR: That is the whole prompt. It reads like English. There's no special syntax for tables, no formatting code, no template file to set up in advance. I'm just describing the output I want.

---

### Step 3 — Watch the Process [5:30–7:00]

**[SCREEN: Claude's response streaming in — structured reasoning visible as it processes the document]**

NARRATOR: Watch what Claude does here. It's reading the Markdown, parsing the structure, identifying the headings, finding the table, locating the bullet lists. Then it's building the Word document programmatically — applying actual Word styles, not just visual formatting.

**[SCREEN: Terminal output — library calls visible, file being written]**

NARRATOR: Under the hood the skill is using `python-docx` — a mature library for generating Word documents from Python. But you never have to touch that. The skill abstracts it completely. You describe what you want in plain English and the skill translates that into the library calls.

**[SCREEN: File system view — `kickoff-report.docx` appears in the directory, file size visible]**

NARRATOR: File written. Thirty-two kilobytes. That took about twelve seconds on my machine, including the time to parse the Markdown and make the structural decisions.

---

### Step 4 — Review the Output [7:00–8:00]

**[SCREEN: `kickoff-report.docx` opens in Microsoft Word — full page view]**

NARRATOR: Let's open it.

**[SCREEN: Scroll from top — title page with document heading, then TOC appears with clickable entries]**

NARRATOR: Table of contents, auto-generated. If I update the document and hit "Update TOC," it rebuilds. These are real Word fields, not static text.

**[SCREEN: Scroll to executive summary section — visible in a styled bordered box with light background]**

NARRATOR: Project objectives in an executive summary callout. That bordered box is a Word text box with a light fill — exactly the kind of element that makes a document look finished.

**[SCREEN: Scroll to deliverables table — alternating row shading, bold header row, clean borders]**

NARRATOR: Deliverables table. Alternating row shading, bold header, column widths sized appropriately for the content. Compare that to the pipe-character table in our Markdown source. Same data, completely different readability.

**[SCREEN: Bottom of page — footer visible with "Client: Meridian Group | Prepared: April 2026" in small text]**

NARRATOR: Footer. Client name, date. Every page. A small detail that signals this document was prepared, not just typed.

**[SCREEN: Quick scroll through entire document — all sections visible in sequence]**

NARRATOR: The structure held perfectly. Every heading is styled correctly. Section breaks are in the right places. This document is ready to send.

---

### Step 5 — Iterate [8:00–9:00]

**[SCREEN: Back to Claude terminal]**

NARRATOR: Now let's say the client uses a specific corporate color scheme and wants the heading color changed from the default black to their brand blue. I'll give Claude a follow-up instruction.

**[SCREEN: Prompt typed]** "Change the H1 heading color to #1B4F8A and the H2 color to #2E6DB4. Also add a cover page before the TOC with the document title, client name, and a prepared-by line."

**[SCREEN: Processing — 8 seconds — new file written: `kickoff-report-v2.docx`]**

NARRATOR: New version written. Let's open it.

**[SCREEN: Word opens v2 — cover page visible with branded heading, then TOC, then blue H1 headings throughout]**

NARRATOR: Cover page added. Heading colors updated. Everything else preserved exactly as it was. This is how iteration should work — you describe the delta, the skill applies it, you get a new file. No manual clicking through Format menus.

---

### Step 6 — Final Result [9:00–9:30]

**[SCREEN: Side-by-side comparison — left: original `project-kickoff-brief.md` in text editor; right: `kickoff-report-v2.docx` open in Word]**

NARRATOR: Same content. Left is what you start with. Right is what you deliver. That gap used to be 20 to 30 minutes of reformatting work. Now it's one prompt and a follow-up.

**[SCREEN: File explorer — both files visible, timestamps showing the whole process took under 2 minutes]**

NARRATOR: Two minutes. Including the iteration.

**[ANIMATION: Orange line wipe]**

---

## RESULTS + VARIATIONS [9:30–11:00]

**[SCREEN: List of use cases slides in from left, one by one, with orange accent bars]**

NARRATOR: The docx skill handles a wider range of document types than you might expect. Let me show you three variations quickly.

**[SCREEN: Terminal — new prompt typed for a proposal document]**

NARRATOR: Variation one: **client proposals**. "Take this scope-of-work outline and generate a proposal document with a professional cover page, an engagement overview section, a pricing table with three tiers, and a terms section." The skill handles multi-section documents with mixed content types — narrative text, tables, call-outs — in a single pass.

**[SCREEN: Output proposal document opens briefly — cover page, pricing table visible]**

NARRATOR: That is a document you could send to a prospective client today.

**[SCREEN: Terminal — new prompt for a meeting minutes document]**

NARRATOR: Variation two: **meeting minutes**. Paste in raw notes from a meeting — bullet points, action items mixed in with discussion notes — and ask the skill to format them as a structured minutes document with attendees, decisions made, and action items table. The skill identifies the structure in your raw notes and maps it to the right document format.

**[SCREEN: Meeting minutes output document — clean, formal, action items in a table with owners and due dates]**

NARRATOR: Action items automatically in a table with owners and due dates extracted from the raw notes. That is not search and replace. That is understanding.

**[SCREEN: Terminal — new prompt for a technical specification]**

NARRATOR: Variation three: **technical specifications**. Code blocks, numbered requirement lists, architecture diagrams described in text — the skill preserves code formatting inside Word's code-block styled paragraphs, formats numbered requirements with proper indentation, and handles long documents — 50, 100 pages — without performance issues.

**[SCREEN: Tech spec document — code blocks styled, numbered requirements list formatted cleanly]**

NARRATOR: These three use cases cover probably 80 percent of the Word documents that get produced in business settings. The skill handles all of them.

**[ANIMATION: Orange line wipe]**

---

## WRAP-UP [11:00–12:00]

**[SCREEN: Final side-by-side: raw Markdown vs. polished Word document]**

NARRATOR: Here's the honest summary of the docx skill. It does not replace your ability to think and write. What it replaces is the manual labor of translating good thinking into a properly formatted document. That is a fundamentally different kind of work, and it's the kind computers are actually good at.

**[SCREEN: Smithery install command displayed large on dark background]**

NARRATOR: Install it:

**[SCREEN: Typewriter animation]** `npx @smithery/cli@latest skill add anthropics/docx`

NARRATOR: Six hundred installs. By the time you install it and run through one document, you'll understand exactly why.

**[SCREEN: Smithery page — anthropics/docx]**

NARRATOR: Full skill documentation at the link in the description. Every capability, every option, examples for different document types.

**[SCREEN: Episode B02 thumbnail preview — Excel workbook visible with charts and formatted cells]**

NARRATOR: Next episode: xlsx. But not cleaning data — we covered that in Series A. This one is building an expense tracker from scratch. Plain text list of expenses goes in. A fully-formatted Excel workbook with formulas, category totals, a pie chart, and conditional formatting highlighting over-budget items comes out. That's Episode B02.

**[ANIMATION: Channel outro — "Anthropic Skills Showcase" logo, subscribe prompt, dark background with orange accent]**

NARRATOR: I'm Denis. See you in the next one.

---

*End of script. Total estimated narration: ~1,820 words at 150 wpm ≈ 12:08.*
