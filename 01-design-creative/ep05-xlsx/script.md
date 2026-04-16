# Episode 05: xlsx — From Messy CSV to Clean Excel Workbook in Minutes

**Series:** B — Documents & Files | **Skill:** anthropics/xlsx | **Duration:** ~12 min
**Skill URL:** https://smithery.ai/skills/anthropics/xlsx
**Install:** `npx @smithery/cli@latest skill add anthropics/xlsx`
**Target Audience:** Data analysts, operations, finance, anyone working with spreadsheets
**Use Case:** Clean a messy sales CSV export, add calculated columns, build a pivot summary, and render a bar chart — all as a proper .xlsx file.

---

## COLD OPEN [0:00–0:30]

**[SCREEN: Split-screen — left: raw CSV in a text editor, rows visibly chaotic — mixed date formats, "$" symbols scattered, a few blank cells, "Bob" vs "Robert Smith"; right: polished Excel workbook with color-coded header row, clean data, a bar chart, and a summary pivot table]**

NARRATOR: This is the same data. The file on the left is what your CRM exports. The file on the right is what your VP actually wants to see — clean, calculated, charted, ready to present.

**[SCREEN: Quick montage — 3 clips, 3 seconds each]**
- Clip 1: One prompt typed into Claude Code
- Clip 2: xlsx skill activating — progress messages streaming
- Clip 3: A polished .xlsx file opening in Excel — chart visible, rows conditionally formatted

NARRATOR: One prompt. One command. One skill. I'll show you exactly how in the next twelve minutes.

**[ANIMATION: Orange line wipe transition]**

---

## INTRO [0:30–1:30]

**[ANIMATION: 5-sec channel intro — "Anthropic Skills Showcase" logo reveal on dark background, orange accent]**

NARRATOR: Welcome back to the Anthropic Skills Showcase. I'm working through every official Anthropic skill on Smithery — one episode at a time — and today we're in Series B: Documents and Files. The skill is **xlsx** — 664 installs, and once you see what it does, you'll understand why.

**[SCREEN: Smithery.ai xlsx skill page scrolls slowly — install count 664 highlighted]**

NARRATOR: If you work with spreadsheets at all — sales reports, expense tracking, operational data, anything — you know the pain. The CSV your tool exports is never what Excel needs. Dates are in three different formats, totals are missing, there's no chart, and someone always named themselves three different ways in the rep column.

**[B-ROLL: Quick cuts — frustrated analyst staring at a CSV in Notepad, someone manually fixing date formats cell by cell, a Slack message reading "can you reformat this and add the margin column before the 3pm call?"]**

NARRATOR: The xlsx skill doesn't just convert CSV to Excel. It cleans, calculates, structures, charts, and formats — the whole pipeline — driven entirely by plain English prompts.

**[ANIMATION: Orange line wipe]**

---

## SKILL DEEP DIVE [1:30–3:30]

**[SCREEN: Terminal, dark mode, large font]**

NARRATOR: One command to install:

**[SCREEN: Typewriter effect]** `npx @smithery/cli@latest skill add anthropics/xlsx`

NARRATOR: That drops an `xlsx/` folder into your `.claude/skills/` directory. Let's look at what's inside.

**[SCREEN: VS Code file tree — `.claude/skills/xlsx/SKILL.md` opens]**

NARRATOR: Like every skill in the Anthropic ecosystem, it's one file: `SKILL.md`. Frontmatter on top, instructions below. The frontmatter tells Claude *when* to reach for this skill. The instructions tell it *what* to do.

**[SCREEN: Highlight the `description:` field in the frontmatter]**

NARRATOR: The description is written to trigger on phrases like "create an Excel file," "build a spreadsheet," "export to xlsx," "clean up this CSV." If your message sounds like spreadsheet work, this skill loads automatically.

**[SCREEN: Scroll through the SKILL.md — highlight key capability sections]**

NARRATOR: Under the hood, the skill covers four major capabilities. First: **data cleaning** — it normalizes inconsistent formats, removes duplicates, fills or flags blank cells, and standardizes text fields. Second: **calculated columns** — you describe the logic in plain English and it adds the formula. Third: **pivot summaries** — group-by aggregations as separate sheets. And fourth: **charts** — bar, line, pie, scatter — embedded directly in the workbook, not as separate image files.

**[ANIMATION: Four-panel diagram slides in — "Clean" / "Calculate" / "Summarize" / "Chart" — each with a small icon, orange accent labels]**

NARRATOR: One more thing worth calling out: **conditional formatting**. You can say "highlight any row where margin is below 20 percent in red" — and it does it, using actual Excel conditional formatting rules, not just filled cells.

**[SCREEN: Close SKILL.md. Return to terminal.]**

NARRATOR: That's the full toolkit. Now let's put it to work on a genuinely messy dataset.

**[ANIMATION: Orange line wipe]**

---

## LIVE DEMO [3:30–9:30]

**[SCREEN: Full-screen recording begins — dark-mode terminal + VS Code side by side]**

### Step 1 — Show the raw input [3:30–4:30]

**[SCREEN: Open `use-case/input/messy-sales-data.csv` in VS Code. Scroll slowly through all 25 rows.]**

NARRATOR: Here's our raw file. It's a sales export from "NorthBridge Tech" — twenty-five rows, twelve columns. At first glance it looks okay. But watch what happens when you actually look at it.

**[SCREEN: Zoom into the Date column — orange callout box]**

NARRATOR: The Date column alone has three different formats: "Jan 3 2024," "2024-01-15," and "1/22/24." Excel will misread half of these as text, not dates.

**[SCREEN: Scroll to the Revenue column — orange callout]**

NARRATOR: Revenue has dollar signs on some rows and not others. And there are two rows for "Robert Smith" and two for "Bob Smith" — same person, different names. Row 14 has a completely blank revenue cell.

**[SCREEN: Highlight a duplicate row — rows 9 and 17 are identical]**

NARRATOR: And rows 9 and 17 are exact duplicates — classic CRM export artifact. This is a realistic mess. This is Tuesday morning for a lot of people.

### Step 2 — Write the prompt [4:30–5:30]

**[SCREEN: Switch to Claude Code terminal. Begin typing.]**

NARRATOR: Now I write one prompt. I'm going to be specific — not because the skill needs a lot of hand-holding, but because precision here saves cleanup later.

**[SCREEN: Typewriter effect — the full prompt appears line by line]**

```
Using the xlsx skill, take messy-sales-data.csv and produce a clean
NorthBridge-Sales-Q1.xlsx with these requirements:

1. Clean the data: normalize all dates to YYYY-MM-DD, strip dollar signs
   from Revenue and Cost columns, standardize rep names (merge "Bob Smith"
   and "Robert Smith" into "Robert Smith"), remove exact duplicate rows,
   and flag any blank Revenue cells as 0 with a note in a new "Notes" column.

2. Add two calculated columns: "Margin %" = (Revenue - Cost) / Revenue,
   formatted as percentage; "MoM Growth %" = month-over-month revenue
   change per rep, formatted as percentage.

3. Add a Summary sheet with a pivot table: total Revenue and average
   Margin % grouped by rep.

4. Add a bar chart on the Summary sheet showing Revenue by rep.

5. Apply conditional formatting: highlight any row where Margin % is
   below 20% in light red.
```

**[SCREEN: Hit enter. xlsx skill activation banner appears.]**

NARRATOR: See that banner? Claude has loaded the xlsx skill. It knows exactly what's expected of it.

### Step 3 — Watch it process [5:30–7:00]

**[SCREEN: Stream of Claude's output — it's narrating each step as it works]**

NARRATOR: One thing I love about this skill is the transparency. It's telling us exactly what it's doing — parsing dates, found three formats; deduplication complete, one row removed; merging rep names. You can follow the logic in real time.

**[SCREEN: Highlight "Merged 4 rows for Bob Smith / Robert Smith → Robert Smith" message — orange callout]**

NARRATOR: Right there — it caught all four appearances of Bob Smith and folded them into Robert Smith. That's the kind of thing that takes twenty minutes in Excel and five seconds here.

**[SCREEN: Output continues — "Calculated Margin % for 24 rows... Calculated MoM Growth % for 24 rows..."]**

NARRATOR: Now the calculated columns. It's applying the margin formula and the month-over-month growth formula across all 24 clean rows. Notice it's handling the MoM growth correctly — it's per rep, not across the whole dataset.

**[SCREEN: "Building pivot table on Summary sheet... Inserting bar chart..." messages appear]**

**[SCREEN: Final line: "Wrote NorthBridge-Sales-Q1.xlsx" — cursor blinks]**

NARRATOR: Done. Let's open it.

### Step 4 — Review the output [7:00–8:00]

**[SCREEN: NorthBridge-Sales-Q1.xlsx opens in Excel. Wide shot of the Data sheet first.]**

NARRATOR: This is the aha moment. Look at that — clean headers, uniform date format, no dollar signs, no duplicates. The Notes column has flagged the one row that had a blank revenue.

**[SCREEN: Scroll right — show Margin % column in blue, MoM Growth % column in green]**

NARRATOR: Margin percentage and MoM Growth are right there — formatted, no manual formula entry needed.

**[SCREEN: Scroll down — orange highlight on a row with margin below 20%]**

NARRATOR: And the conditional formatting is live — two rows with margin under 20 percent are highlighted in red. In a real sales review, you'd see that immediately.

**[SCREEN: Click to the Summary sheet — pivot table visible, bar chart to the right]**

NARRATOR: The Summary sheet. Pivot by rep — total revenue, average margin. And the bar chart embedded right next to it. This is presentation-ready.

**[SCREEN: Zoom on the chart — orange accent matches brand colors]**

NARRATOR: This is not a screenshot of a chart. This is a real embedded Excel chart — you can click into it, change the chart type, update the data range. It's a live workbook, not a PDF disguised as a spreadsheet.

### Step 5 — Iterate: add a threshold line [8:00–9:00]

**[SCREEN: Switch back to Claude Code. Type a follow-up.]**

NARRATOR: One more thing. I want to add a target line on that bar chart — our Q1 revenue target was $50,000 per rep — so we can see at a glance who hit it.

**[SCREEN: Typewriter]** `Update NorthBridge-Sales-Q1.xlsx: add a horizontal reference line at $50,000 on the Revenue by Rep bar chart to show the Q1 target.`

**[SCREEN: Claude processes — "Adding target line series to bar chart... Done."]**

NARRATOR: That iteration took about fifteen seconds. In Excel, adding a reference line to a bar chart means a secondary axis, a helper series, and about eight clicks. Here — one sentence.

**[SCREEN: Updated chart in Excel — orange dashed line at $50,000, two bars clearly above, one below]**

NARRATOR: Two reps hit target. One didn't. That's immediately visible. That's the point.

### Step 6 — Final result [9:00–9:30]

**[SCREEN: Side-by-side — raw CSV in text editor vs. finished .xlsx in Excel with chart and summary sheet]**

NARRATOR: Raw CSV on the left. Presentation-ready workbook on the right. Same data, five minutes apart. That's the xlsx skill.

**[ANIMATION: Orange line wipe]**

---

## RESULTS + VARIATIONS [9:30–11:00]

**[SCREEN: Full-screen view of the finished NorthBridge-Sales-Q1.xlsx — slowly scroll through Data sheet, then Summary sheet, then chart]**

NARRATOR: Let's be concrete about what happened in that demo. We took 25 rows of genuinely messy data — three date formats, duplicate rows, missing values, inconsistent names — and turned it into a clean, calculated, charted, conditionally formatted workbook. Five minutes, one skill, zero manual spreadsheet work.

**[SCREEN: Three use-case cards animate in — orange title bars, white text on dark cards]**

NARRATOR: And xlsx is useful well beyond sales data. Three other use cases I'd reach for this skill immediately:

**[SCREEN: Card 1 appears]**

NARRATOR: **Expense report consolidation.** Dump three months of expense CSVs — different columns, different formats — into one cleaned workbook with totals by category, a monthly trend chart, and any over-budget line items flagged in orange.

**[SCREEN: Card 2 appears]**

NARRATOR: **HR headcount tracker.** Take a raw HRIS export, normalize department names, add tenure calculated columns, build a pivot by manager, and chart headcount growth quarter over quarter.

**[SCREEN: Card 3 appears]**

NARRATOR: **Inventory audit report.** Clean a stock export, add reorder threshold logic as a conditional column, highlight SKUs below minimum stock in red, and produce a summary by category with a pie chart. The kind of thing operations teams rebuild manually every single week.

NARRATOR: Anywhere a CSV lands in your inbox that needs to become a presentable Excel file — that's the xlsx skill's home territory.

**[ANIMATION: Orange line wipe]**

---

## WRAP-UP [11:00–12:00]

**[SCREEN: End card begins animating in — dark background, orange accents]**

NARRATOR: Recap: the xlsx skill turns messy data into structured, calculated, charted Excel workbooks — driven by plain English. Install it once, describe what you need, and get back a live workbook you can hand to anyone.

**[SCREEN: Lower third — "Install: npx @smithery/cli@latest skill add anthropics/xlsx" — dark background, orange text, Poppins font]**

NARRATOR: The install command, the skill link, and the full demo repo with the raw CSV and finished workbook are all in the description below. If this is saving you time, hit subscribe — every episode is a different skill, a real use case, start to finish.

**[SCREEN: "Next up" card — "Episode 06: frontend-design" with preview thumbnail]**

NARRATOR: Next episode: the **frontend-design** skill — we take a single paragraph describing a SaaS product and generate a complete, production-ready landing page. Design, copy, responsive layout — one prompt. See you there.

**[ANIMATION: 10-sec end card — logo, subscribe button, links: smithery.ai/skills/anthropics/xlsx and github.com/agentfactory/anthropic-skills-showcase]**

---

## Word count: ~1,820 words (target ~150 wpm → 12:08 narration)
