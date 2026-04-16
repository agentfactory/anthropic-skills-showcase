# Episode B02: xlsx — Build an Expense Tracker from Scratch

**Series:** B — Documents & Files
**Skill:** `anthropics/xlsx`
**Skill URL:** https://smithery.ai/skills/anthropics/xlsx
**Installs:** 664
**Duration:** ~12 min
**Target Audience:** Finance teams, ops managers, executive assistants, anyone tracking business expenses or building workbooks from raw data

---

## COLD OPEN [0:00–0:30]

**[SCREEN: A plain text file open in a text editor — 28 lines of raw expense data. No formatting. Just dates, dollar amounts, categories, and descriptions separated by dashes. Looks like someone's notes from a month of business travel.]**

NARRATOR: Twenty-eight expense line items. Dumped from someone's notes file. No structure, no formulas, no formatting.

**[SCREEN: Quick cut — terminal window, one command typed and submitted. Progress indicator runs for 6 seconds.]**

NARRATOR: One prompt.

**[SCREEN: Excel opens — three tabs visible at the bottom: "Expenses", "Summary", "Chart". The Expenses sheet has a formatted table with alternating rows, currency formatting, and rows highlighted in red where spend exceeds budget. The Summary sheet shows totals and averages per category. The Chart sheet shows a clean pie chart of spending by category.]**

NARRATOR: Formatted expense table. Summary sheet with live formulas. Pie chart. In six seconds.

**[ANIMATION: Orange line wipe]**

---

## INTRO [0:30–1:30]

**[ANIMATION: 5-sec channel intro — "Anthropic Skills Showcase" logo reveal on dark background, orange accent bar]**

NARRATOR: Welcome back to the Anthropic Skills Showcase. I'm Denis. This is Episode B02, and we're back on the xlsx skill — but doing something completely different from when we covered it in Series A.

**[SCREEN: Brief thumbnail or title card of Series A Episode 05 — "xlsx: Clean a Messy CSV"]**

NARRATOR: In Series A, Episode 05, we used xlsx to clean a disaster of a sales spreadsheet. Duplicate rows, inconsistent dates, mixed currencies. The skill was a data janitor. That's a real use case, and it's worth going back to watch if you haven't seen it.

**[SCREEN: Episode B02 title card — "Build from Scratch"]**

NARRATOR: But today's problem is different. There is no existing spreadsheet. There's no CSV to import. There's nothing to clean. There's a plain text list — the kind of thing someone generates when they're tracking expenses on the road in a notes app — and we need to turn it into a finance-ready Excel workbook with formulas, conditional formatting, and a chart.

**[SCREEN: Smithery.ai anthropics/xlsx skill page — install count 664 highlighted]**

NARRATOR: Six hundred and sixty-four installs. The xlsx skill is the most-installed document skill in the Anthropic catalog right now, and the reason is the breadth of what it can do. Cleaning data is one mode. Building from scratch is another. We're in build-from-scratch mode today.

**[B-ROLL: Screen recording — someone manually building an expense tracker in Excel: clicking to set column headers, formatting cells as currency, typing a SUM formula, trying to set up conditional formatting rules through the menu, building a chart from scratch]**

NARRATOR: Here's what building this manually looks like. You open Excel, set up your headers, start entering the expense data row by row, remember to format the Amount column as currency, add a SUM formula at the bottom, then go to Conditional Formatting to set up a rule for over-budget rows — and that menu alone has eight steps. Then you pivot to a new sheet, build a summary table, write SUMIF formulas for each category, and finally attempt to create a pie chart, which in Excel requires selecting the right data range first. Forty-five minutes if you know what you're doing.

**[SCREEN: Clock graphic — "~45 minutes" label]**

NARRATOR: Forty-five minutes. We're going to do it in under a minute. Let's go.

**[ANIMATION: Orange line wipe]**

---

## SKILL DEEP DIVE [1:30–3:30]

**[SCREEN: Terminal, dark mode, 16pt font]**

NARRATOR: Install command:

**[SCREEN: Typewriter animation]** `npx @smithery/cli@latest skill add anthropics/xlsx`

NARRATOR: Same install, same location — `.claude/skills/xlsx/SKILL.md`. If you already installed it for the Series A episode, it's already there.

**[SCREEN: VS Code — `.claude/skills/xlsx/SKILL.md` opens. Frontmatter visible at top.]**

NARRATOR: Let's look at what this skill actually knows how to do. Because there's more here than most people expect.

**[SCREEN: Highlight the triggers block — orange glow box]**

NARRATOR: Triggers include: "create a spreadsheet," "build an Excel workbook," "make a tracker," "generate xlsx from this data," "add formulas to this." Any of these activate the skill automatically. You don't need to reference the skill by name.

**[SCREEN: Scroll through SKILL.md body — capability sections visible]**

NARRATOR: I want to walk through four specific capabilities we're using today, because understanding them changes what you ask for.

**[SCREEN: Highlight capability — "Structured Tables"]**

NARRATOR: First: **structured tables**. Not just entering data in rows and columns. The skill creates properly typed tables — dates recognized as date values, currency amounts formatted with the right symbol and decimal places, text fields left-aligned, numeric fields right-aligned. These aren't cosmetic choices. They're what makes Excel functions work correctly later.

**[SCREEN: Highlight capability — "Formulas"]**

NARRATOR: Second: **formulas**. SUM, AVERAGE, SUMIF, COUNTIF, and more complex combinations. The skill writes the correct formula syntax, references the right cell ranges, and places the formulas in the right cells. You describe what you want in plain English — "total spend per category" — and it writes the SUMIF. You don't have to know the formula syntax.

**[SCREEN: Highlight capability — "Conditional Formatting"]**

NARRATOR: Third: **conditional formatting**. Rules that change cell appearance based on values — highlight rows red when an expense exceeds a threshold, turn a cell green when a budget is under target. The skill can define these rules from a plain English description of the condition.

**[SCREEN: Highlight capability — "Charts"]**

NARRATOR: Fourth: **charts**. Pie charts, bar charts, line charts — the skill creates them from the data, places them on their own sheet or embedded in an existing sheet, and applies basic formatting: title, legend, data labels. Not publication-quality design, but finance-ready and clear.

**[ANIMATION: Four capability blocks in a 2x2 grid — "Typed Tables", "Formulas", "Conditional Formatting", "Charts" — orange accent bars]**

NARRATOR: Four capabilities, all working together in a single prompt. That is the build-from-scratch mode. Let's use all four.

**[ANIMATION: Orange line wipe]**

---

## LIVE DEMO [3:30–9:30]

### Step 1 — Review the Input [3:30–4:30]

**[SCREEN: Text editor — `expense-list.md` open and filling the screen. 28 lines of plain text. Format: "DATE — CATEGORY — AMOUNT — DESCRIPTION"]**

NARRATOR: Here's our starting point. This is a month of business expenses from a fictional ops manager named Jordan — travel, meals, software subscriptions, office supplies, client entertainment. Twenty-eight line items, typed in a plain text file the way you'd actually write them down.

**[SCREEN: Scroll through the full list slowly]**

NARRATOR: No structure beyond the basic format. No headers. No column separators Excel would recognize. No formulas, no totals, no nothing. This is what someone hands you when you say "send me your expenses for April."

**[SCREEN: Hover over a few representative lines — one travel entry, one software subscription, one over-budget item]**

NARRATOR: I can already spot a couple of line items that look like they're over the typical category budgets. The skill is going to flag those automatically with conditional formatting. But I'm getting ahead of myself — let's build the thing first.

---

### Step 2 — Invoke the Skill [4:30–5:30]

**[SCREEN: Claude terminal — dark mode, large font]**

NARRATOR: Claude session open. Skill is loaded. Here's my prompt:

**[SCREEN: Typing animation]**

NARRATOR: "Using the expense list in expense-list.md, build a formatted Excel workbook called april-expenses.xlsx. It should have three sheets: one called Expenses with all line items in a proper table — date formatted as date, amount as USD currency, category and description as text — and conditional formatting that highlights any row red where the amount exceeds these category budgets: Travel 500, Meals 75, Software 200, Office Supplies 100, Client Entertainment 300. Second sheet called Summary with a table showing total and average spend per category using formulas. Third sheet called Chart with a pie chart of total spend by category, with data labels showing the category name and percentage."

**[SCREEN: Prompt submitted. Processing indicator visible.]**

NARRATOR: Notice I didn't write a single formula. I didn't specify cell ranges. I described the output in business terms — "total and average spend per category" — and left the formula implementation to the skill. That's the right level of abstraction.

---

### Step 3 — Watch the Process [5:30–7:00]

**[SCREEN: Claude response streaming — reasoning visible as it processes the text]**

NARRATOR: Watch what happens here. Claude is parsing the 28 expense lines, identifying the date format, extracting amounts and categories, then making decisions about the workbook structure — which formulas to use for the summary, how to wire the chart data to the expenses sheet.

**[SCREEN: Terminal output — library calls to openpyxl or xlsxwriter visible, sheet creation, formula writing]**

NARRATOR: Under the hood this is `openpyxl` — the standard Python library for generating Excel files. Like with the docx skill, you never have to touch it directly. The skill is the interface.

**[SCREEN: File system — `april-expenses.xlsx` appears. File size visible: ~45KB]**

NARRATOR: File written. Forty-five kilobytes for three sheets including a chart. That ran in about twenty seconds.

---

### Step 4 — Review the Output [7:00–8:00]

**[SCREEN: Excel opens — `april-expenses.xlsx`. Three tabs visible at the bottom: Expenses, Summary, Chart.]**

NARRATOR: Let's open it.

**[SCREEN: Expenses sheet — full table view. Column headers: Date, Category, Amount, Description. Rows with alternating shading. Three rows highlighted in red — the over-budget items. Dates in date format, amounts in $X,XXX.XX format.]**

NARRATOR: Expenses sheet first. Column headers, data typed correctly — those are real Excel date values, not text strings that look like dates. Amounts formatted as USD currency. And three rows highlighted in red — those are the line items that exceeded their category budget thresholds. Conditional formatting rules applied automatically, exactly as specified.

**[SCREEN: Click the Summary tab — Summary sheet visible. Table with: Category | Total Spend | Average Spend. Six category rows. Formulas visible in the formula bar when a cell is clicked.]**

NARRATOR: Summary sheet. Total and average spend per category. I'll click into one of those cells so you can see the formula bar.

**[SCREEN: Click a cell in the Total Spend column — formula bar shows: =SUMIF(Expenses!B:B,A2,Expenses!C:C) or equivalent]**

NARRATOR: That is a SUMIF pulling from the Expenses sheet — live data. If I add a new expense to the Expenses sheet, this number updates automatically. That is what "formulas" means versus static values.

**[SCREEN: Click the Chart tab — pie chart fills most of the sheet. Each slice labeled with category name and percentage. Chart title: "April Expenses by Category"]**

NARRATOR: Chart sheet. Pie chart of total spend by category, data labels showing category name and percentage. This is ready to copy-paste into a slide deck or a finance report without any additional work.

---

### Step 5 — Iterate [8:00–9:00]

**[SCREEN: Back to Claude terminal]**

NARRATOR: Let's add one more thing. The ops manager wants to see a running total column on the Expenses sheet — a cumulative spend column so they can see how the month's budget was consumed over time. I'll ask for that now.

**[SCREEN: Prompt typed]** "Add a Cumulative Total column to the Expenses sheet — column E — that shows the running total of the Amount column from row 2 down, sorted by date. Update the chart on the Chart sheet to also show the cumulative total as a line overlaid on the pie chart — or if that doesn't work cleanly, add a separate line chart on the Chart sheet showing cumulative spend over the month."

**[SCREEN: Processing — new file written: `april-expenses-v2.xlsx`]**

NARRATOR: Note that I gave it an out there — "if that doesn't work cleanly, add a separate line chart." When you're working with charts in Excel, some combinations don't render the way you'd expect. Being explicit about acceptable alternatives means you get a usable result rather than a broken combo chart.

**[SCREEN: Excel opens `april-expenses-v2.xlsx` — Expenses sheet now has a column E "Cumulative Total" with running totals. Chart sheet now has two sub-sheets or two embedded charts — the pie chart and a line chart showing cumulative spend by date.]**

NARRATOR: Cumulative total column added, sorted by date. And the skill took the alternative I offered — a separate line chart on the Chart sheet — because the pie plus line combo would have been confusing. Good judgment call.

---

### Step 6 — Final Result [9:00–9:30]

**[SCREEN: Side-by-side — left: `expense-list.md` in text editor, plain text; right: `april-expenses-v2.xlsx` in Excel showing the Summary sheet]**

NARRATOR: Plain text list on the left. Finance-ready workbook on the right. Three sheets, live formulas, conditional formatting, two charts. That gap used to require someone who knows Excel well, and about 45 minutes of their time. Now it requires one well-written prompt and a minute.

**[SCREEN: File explorer — both files visible with timestamps. The entire session — from opening the prompt to final file — fits in under 3 minutes.]**

NARRATOR: Under three minutes including the iteration.

**[ANIMATION: Orange line wipe]**

---

## RESULTS + VARIATIONS [9:30–11:00]

**[SCREEN: Three use case cards slide in from left with orange accent bars]**

NARRATOR: Let's zoom out. The build-from-scratch mode of the xlsx skill covers a lot of territory. Here are three more scenarios where this exact workflow applies.

**[SCREEN: Terminal — new prompt for a project budget tracker]**

NARRATOR: Variation one: **project budget tracker**. You have a list of project tasks, estimates, and actuals from a status update email. Ask the skill to build a workbook with a budget vs. actual table, variance column, and a bar chart showing over-budget tasks. The skill handles the variance formula — actual minus estimate — and the conditional formatting for negative variance without you specifying the formula syntax.

**[SCREEN: Output — project budget tracker workbook, variance column visible with red negatives]**

NARRATOR: The variance column and conditional coloring were in the prompt as plain English. "Negative variance means over budget, highlight those red." That's all you need to specify.

**[SCREEN: Terminal — new prompt for a sales pipeline tracker]**

NARRATOR: Variation two: **sales pipeline tracker**. Paste in a list of deals from your CRM export — deal name, value, stage, close date, owner. Ask the skill to build a pipeline workbook with a deal table, a summary by stage showing total pipeline value, and a funnel chart. This is a workbook that would normally require a BI tool or a lot of Excel expertise to produce. The skill handles it from a flat list.

**[SCREEN: Output — sales pipeline workbook, stage summary table visible]**

NARRATOR: The SUMIF formulas pulling total pipeline value by stage, generated from the description "total pipeline value per stage."

**[SCREEN: Terminal — new prompt for a team capacity planner]**

NARRATOR: Variation three: **team capacity planner**. Give the skill a list of team members, their weekly hours available, and the projects they're assigned to with estimated hours per week. Ask for a workbook that shows utilization per person — hours allocated divided by hours available — and conditional formatting that turns a person's row yellow if they're over 80% utilized and red if they're over 100%. The skill writes the utilization formula and sets up both conditional rules from the plain English description.

**[SCREEN: Output — capacity planner workbook, utilization percentages visible, yellow and red rows highlighted]**

NARRATOR: Capacity planning is something ops managers build manually in Excel all the time. This is a five-minute prompt instead of a 45-minute Excel session.

**[ANIMATION: Orange line wipe]**

---

## WRAP-UP [11:00–12:00]

**[SCREEN: Side-by-side one more time — raw text list vs. three-tab Excel workbook]**

NARRATOR: The honest framing for the xlsx skill in build-from-scratch mode is this: it handles the implementation layer that comes between "I know what I want" and "I have a workbook that works." That implementation layer — formulas, data types, conditional rules, chart wiring — is what takes 45 minutes when you do it manually. The skill compresses it to one prompt.

**[SCREEN: Smithery install command displayed large on dark background]**

NARRATOR: Install it if you haven't:

**[SCREEN: Typewriter animation]** `npx @smithery/cli@latest skill add anthropics/xlsx`

NARRATOR: And if you've been using it for cleanup only, try the build-from-scratch approach. Start with a text file of whatever structured data you have — expenses, tasks, deals, team capacity — and describe the workbook you want. The skill's range is wider than you might have expected.

**[SCREEN: Smithery page — anthropics/xlsx]**

NARRATOR: Full documentation at the link below. If you missed Series A Episode 05 where we used the same skill to clean a messy CSV, that one's worth watching back-to-back with this one. Two completely different problems, same skill.

**[SCREEN: Preview of next episode — Series B continues]**

NARRATOR: Series B continues with more Documents and Files skills. Every official Anthropic skill on Smithery, one episode at a time. I'm Denis — see you in the next one.

**[ANIMATION: Channel outro — "Anthropic Skills Showcase" logo, subscribe prompt, dark background with orange accent bar]**

---

*End of script. Total estimated narration: ~1,850 words at 150 wpm ≈ 12:20.*
