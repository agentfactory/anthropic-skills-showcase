# Episode C02: xlsx — Know If April Was Actually a Good Month

**Series:** C — Service Trades | **Folder:** `03-service-trades/` | **Skill:** anthropics/xlsx | **Duration:** ~12 min
**Skill URL:** https://smithery.ai/skills/anthropics/xlsx
**Install:** `npx @smithery/cli@latest skill add anthropics/xlsx`
**Target Audience:** Service business owners — landscapers, plumbers, painters, HVAC, any trades running multiple jobs a week
**Use Case:** Month of job notes typed on a phone → Excel booking tracker with weekly revenue, costs, profit margin, and a chart — in one prompt

---

## COLD OPEN [0:00–0:30]

**[SCREEN: Full-width view of an Excel workbook — "GreenPro Landscaping — April 2026 Job Tracker" in bold header row. Jobs table with columns: Date | Client | Service Type | Revenue | Materials Cost | Labor Cost | Gross Profit | Margin % | Status. 15 data rows filled in with real entries. Summary row at bottom highlighted: Revenue $7,480 | Costs $2,105 | Gross Profit $5,375 | Margin 71.9% in bold green. To the right: a bar chart — Revenue vs. Costs by week, Week 1 through Week 4. Three rows in the table highlighted orange with "OUTSTANDING" status. A red callout cell visible: "Outstanding Balance: $1,450."]**

NARRATOR: This is April for GreenPro Landscaping. Fifteen jobs. Revenue: $7,480. Margin: 71.9%. Outstanding balance: $1,450. Marco knows exactly which clients haven't paid.

**[SCREEN: Hard cut to — a plain text file on a phone. Raw job log: "Apr 1 - martinez 4210 elm - mow edge blow $85 - PAID / Apr 2 - torres resi - spring cleanup rake haul $320 - PAID cash / Apr 3 - henderson backyard - mulch 8yds $180 mat + $320 labor - half paid $250 bal $250 owed." Continues for 15 entries — messy, abbreviated, exactly as typed on a phone between jobs.]**

NARRATOR: This is what went in.

**[SCREEN: Excel workbook again — slow scroll from jobs table down to the weekly chart, then to the outstanding tracker]**

NARRATOR: One prompt. That is the xlsx skill. Let's break it down.

**[ANIMATION: Orange line wipe]**

---

## INTRO [0:30–1:30]

**[ANIMATION: 5-sec channel intro — "Anthropic Skills Showcase" logo reveal, orange accent bar sweeps in on dark background]**

NARRATOR: Welcome back to Series C. Last episode, we turned a roofer's inspection notes into a signed estimate in four minutes. That's the front of the business — quoting, winning jobs. Today we're talking about the back of the business: tracking what actually happened.

**[B-ROLL: Landscaper loading a truck before dawn — gas cans, mowers, blowers ready. Crew arriving at a residential property. End of week: sitting in a truck cab with a phone, scrolling through job notes.]**

NARRATOR: Most service businesses run on two kinds of tracking. The optimistic kind — you know roughly how much you billed this month. And the real kind — how much of that was actually profit, after fuel, materials, and crew costs. For a lot of contractors, those two numbers are very different. And they only find out in February when the accountant calls.

**[SCREEN: Simple math graphic — dark background, orange numbers. "$180K revenue × 5% margin gap = $9,000 / year"]**

NARRATOR: Contractors who don't track job costs consistently run three to five percentage points lower on margin than those who do. On a hundred and eighty thousand in annual revenue, that's nine thousand dollars a year that evaporates. Not because of a bad job. Because nobody was watching.

**[SCREEN: Smithery.ai anthropics/xlsx skill page — install count highlighted in orange]**

NARRATOR: The xlsx skill turns any structured list — job notes, expense logs, project trackers — into a formatted Excel workbook. Not just cells with data in them. A real workbook with calculated columns, conditional formatting, summary rows, and charts. Let's build one.

**[ANIMATION: Orange line wipe]**

---

## SKILL DEEP DIVE [1:30–3:30]

**[SCREEN: Terminal — dark mode, large font, clean desktop]**

NARRATOR: One command to install the skill:

**[SCREEN: Typewriter animation]**

`npx @smithery/cli@latest skill add anthropics/xlsx`

**[SCREEN: Terminal output — skill installs, confirmation message appears]**

NARRATOR: That drops the SKILL.md into your `.claude/skills/` directory. Same pattern as every Anthropic skill — one file, no dependencies, no configuration required.

**[SCREEN: VS Code — `.claude/skills/xlsx/SKILL.md` opens. YAML frontmatter visible at top.]**

NARRATOR: The SKILL.md tells Claude what this skill can build. The triggers are plain language: "create a spreadsheet," "build a tracker," "make a workbook from this data," "generate an Excel file from these notes." No slash commands. No special syntax.

**[SCREEN: Cursor highlights the triggers block — orange glow]**

NARRATOR: For today's demo, three capabilities matter most.

**[SCREEN: Highlight the structured tables section]**

NARRATOR: First: **structured tables**. Every row is a real Excel row — not just text in cells. Column headers formatted, widths auto-fitted, freeze-pane on the header row so it stays visible when you scroll. The kind of table that actually works in Excel: sort it, filter it, pivot it if you want.

**[SCREEN: Highlight the formulas and calculated columns section]**

NARRATOR: Second: **calculated columns and summary rows**. You describe the math in plain English — "gross profit equals revenue minus materials cost minus labor cost" — and the skill writes the formulas. You don't need to know Excel syntax. You just need to know what you want to measure.

**[SCREEN: Highlight the conditional formatting section]**

NARRATOR: Third: **conditional formatting**. Cells that change color based on their value. A margin above thirty percent turns green. Below twenty goes red. A status column where "Outstanding" highlights in orange. The visual signals that let you scan thirty rows in five seconds and know which ones need attention.

**[SCREEN: All three capability sections visible together]**

NARRATOR: Tables, formulas, conditional formatting — one pass, one prompt. Let's build Marco's April tracker.

**[ANIMATION: Orange line wipe]**

---

## LIVE DEMO [3:30–9:30]

### Step 1 — Review the Input [3:30–4:30]

**[SCREEN: Text editor — `april-jobs-notes.md` fills the screen. Header: "April jobs — GreenPro Landscaping / Marco Reyes / 602-555-0134". Below: 15 job entries, each on its own line. First few visible: "Apr 1 - martinez 4210 elm - mow edge blow $85 - PAID / Apr 2 - torres resi - spring cleanup rake haul $320 - PAID cash / Apr 3 - henderson backyard - mulch 8yds $180 mat + $320 labor - half paid $250 bal $250 owed / Apr 4 - smith irrig repair - 2hr + parts ~$65 total $195 - PAID". Below the job list: "COSTS APRIL: Fuel - $280 / Mulch 8yds - $180 / Sod materials - $310 / Plants/chen job - $420 / Drip sys parts - $380 / Misc supplies - $85 / Diego 3 days @ $150/day - $450".]**

NARRATOR: This is Marco's April log. He typed it on his phone in between jobs — client name, address shorthand, what he did, the price, and whether they paid. It's not a structured form. It's exactly the way a working contractor captures information when they're moving from job to job all day.

**[SCREEN: Scroll through the full 15-entry list at reading pace, then down to the costs section]**

NARRATOR: The revenue data is in the job lines. The material and crew costs are lumped at the bottom — the way most guys actually track them, not per job but per month. Everything is here. It just doesn't look like anything yet.

---

### Step 2 — Invoke the Skill [4:30–5:30]

**[SCREEN: Claude Code terminal — dark mode, cursor ready]**

NARRATOR: I'll open a Claude session. xlsx skill is installed — no activation needed. I'll just describe the workbook I want.

**[SCREEN: Typing animation — prompt appearing character by character at reading pace]**

NARRATOR: My prompt: "Using april-jobs-notes.md, build a job tracker workbook for GreenPro Landscaping. Sheet one: Jobs table with columns Date, Client, Service Type, Revenue, Materials Cost, Labor Cost, Gross Profit, Margin %, Status. Categorize Service Type as one of: Lawn Maintenance, Landscaping Install, Irrigation, Tree Work, Other — infer from the job description. Gross Profit equals Revenue minus Materials Cost minus Labor Cost. Margin % equals Gross Profit divided by Revenue, shown as a percentage. For Status: PAID for paid jobs, OUTSTANDING in orange for unpaid, PARTIAL in yellow for partial payments. Distribute the monthly costs from the notes across jobs where possible — fuel and misc proportionally, materials to the specific jobs they match. Add a totals row: total revenue, total costs, total gross profit, average margin. Freeze the header row. Sheet two: Weekly summary — Week 1 through Week 4, Revenue and Costs per week, with a bar chart comparing them side by side. Sheet three: Outstanding balance tracker — only unpaid and partial jobs, with Amount Due and the job date. Output as greenPro-april-2026.xlsx."

**[SCREEN: Enter pressed. Processing indicator visible.]**

NARRATOR: It's a detailed prompt. But read it back — it's a description of a spreadsheet, written the way you'd explain it to someone building it for you. That is the only skill required on your end.

---

### Step 3 — Watch the Process [5:30–7:00]

**[SCREEN: Claude's response streaming — reasoning visible as it works through the data structure]**

NARRATOR: Watch what it does with the ambiguous entries. "Henderson backyard — mulch 8yds $180 mat plus $320 labor — half paid $250 bal $250 owed." The skill parses this as: Revenue $500, Materials Cost $180, Status PARTIAL, Amount Due $250. It made the same inference you would reading it — no clarification needed.

**[SCREEN: Processing continues — service categories being assigned to each job]**

NARRATOR: The categories: "mow edge blow" becomes Lawn Maintenance. "mulch 8yds plus install" becomes Landscaping Install. "drip system 6 zones" becomes Irrigation. "tree trim plus haul" becomes Tree Work. Fifteen jobs. Fifteen categorized rows. Consistent, filterable values — not fifteen different ways to write "mowing."

**[SCREEN: File system — greenPro-april-2026.xlsx appears, 34KB, timestamp visible]**

NARRATOR: File written. Twenty-eight seconds.

---

### Step 4 — Review the Output [7:00–8:00]

**[SCREEN: Excel opens — Sheet 1 visible. "GreenPro Landscaping — April 2026 Job Tracker" header. Jobs table with frozen header row. All 15 rows visible.]**

NARRATOR: Let's open it.

**[SCREEN: Scroll slowly right across the columns — Date, Client, Service Type, Revenue, Materials Cost, Labor Cost, Gross Profit, Margin %, Status — all columns fitted to content width]**

NARRATOR: Every column from the prompt. Revenue and cost columns are currency-formatted. Margin % is a percentage with one decimal. Status column: "PAID" in grey text, three rows highlighted in solid orange — those are the outstanding jobs.

**[SCREEN: Scroll down to summary row — Revenue $7,480 | Total Costs $2,105 | Gross Profit $5,375 | Avg Margin 71.9% — all in bold]**

NARRATOR: Summary row at the bottom. Revenue: $7,480. Total costs: $2,105. Gross profit: $5,375. Margin: 71.9%. Marco's April is excellent. He just didn't know the number until right now.

**[SCREEN: Click Sheet 2 tab — Weekly summary table with bar chart. Weeks 1–4 visible. Week 2 clearly the largest bar.]**

NARRATOR: Sheet two. Weekly breakdown with the bar chart. Week two is the big one — that was the Henderson backyard install, the Chen property, and the Riverside apartments tree work. Week four slowed down. That dip is normal for mid-month. After twelve months of this data, Marco will see the pattern and plan crew hours around it instead of guessing.

**[SCREEN: Click Sheet 3 tab — Outstanding tracker. Three rows: Gonzalez $1,100 | Henderson $250 | Riverside $960. Red summary cell: Total Outstanding $1,450.]**

NARRATOR: Sheet three: what needs to be collected. Gonzalez — sod job, $1,100. Henderson's remaining balance, $250. Riverside Apartments has two checks pending, $960 total. Outstanding: $1,450. This is the sheet Marco opens Monday morning and makes three phone calls from.

---

### Step 5 — Iterate [8:00–9:00]

**[SCREEN: Back to Claude terminal]**

NARRATOR: Marco wants one addition. The outstanding tracker tells him what to collect, but not how urgent each one is. Follow-up prompt:

**[SCREEN: Prompt typed]**

"On Sheet 3, add a Days Outstanding column calculated from today's date minus the job completion date. Highlight any row where Days Outstanding is over 14 in red."

**[SCREEN: Processing — 11 seconds — updated file written]**

NARRATOR: Eleven seconds. Let's check it.

**[SCREEN: Sheet 3 updated — Days Outstanding column added. Gonzalez: 24 days, red. Henderson: 13 days, normal. Riverside Apr 9: 22 days, red. Riverside Apr 22: 9 days, normal.]**

NARRATOR: Gonzalez has been outstanding 24 days. That's the call to make today, not on Friday. The formula runs live — every time Marco opens this file, the days tick forward automatically. He doesn't update anything. It updates itself.

---

### Step 6 — Final Result [9:00–9:30]

**[SCREEN: Side-by-side — left: april-jobs-notes.md in plain text, right: greenPro-april-2026.xlsx open in Excel, Sheet 1 visible with jobs table]**

NARRATOR: Left side: fifteen lines of phone shorthand captured between jobs. Right side: a three-sheet workbook with calculated margins, conditional formatting, a weekly bar chart, and an outstanding balance tracker with aging. Same data. Actually useful.

**[SCREEN: File timestamps — april-jobs-notes.md shows entries spanning April 1–23 | greenPro-april-2026.xlsx shows today, 28 seconds generation time]**

NARRATOR: A month of business data, structured in twenty-eight seconds.

**[ANIMATION: Orange line wipe]**

---

## RESULTS + VARIATIONS [9:30–11:00]

**[SCREEN: "What else can you build with xlsx?" title card — dark background, orange accent]**

NARRATOR: The April tracker is one workbook. Here are three more that take the same skill and the same kind of raw notes in completely different directions.

**[SCREEN: Terminal — new prompt for variation 1]**

NARRATOR: Variation one: **parts cost tracker**. A plumber runs twenty service calls a week. Every job has parts — fittings, valves, pressure regulators — and he keeps a running list in his notebook. The xlsx skill turns that list into a parts tracker: job, part description, supplier, unit cost, quantity, total per job. Supplier totals at the bottom. At the end of the quarter he knows exactly where his parts money is going — and which supplier he should be negotiating a volume discount with.

**[SCREEN: Parts tracker workbook opens — clean parts table with supplier subtotals visible]**

**[SCREEN: Terminal — new prompt for variation 2]**

NARRATOR: Variation two: **crew time sheet**. A painting contractor has three guys on payroll. Each job gets time logged — who was there, how many hours, straight or overtime. The xlsx skill builds a weekly time sheet: jobs as rows, employees as columns, hours in each cell. Total hours and gross pay calculated at the bottom. Every Monday, one prompt and the time sheet is ready to process.

**[SCREEN: Time sheet workbook — employees as column headers, hours per job, totals row with pay amounts]**

**[SCREEN: Terminal — new prompt for variation 3]**

NARRATOR: Variation three: **annual revenue summary**. Twelve months of job logs — same format as Marco's April notes. One prompt builds the annual view: monthly revenue, monthly costs, gross profit per month, and a twelve-month trend line. The view that tells you whether the business is actually growing, whether margins are holding through the slow season, and which months you need to plan cash reserves for. All of it was already in the notes. The skill makes it visible.

**[SCREEN: Annual summary workbook — monthly columns, revenue/cost/profit rows, trend line chart across twelve months]**

**[SCREEN: All three variation workbooks shown as thumbnails side-by-side]**

NARRATOR: Same skill. A plumber's parts, a painter's crew, a twelve-month P&L. Every one starts the same way — a messy list of real data, a plain English prompt, and a workbook that actually works.

**[ANIMATION: Orange line wipe]**

---

## WRAP-UP [11:00–12:00]

**[SCREEN: greenPro-april-2026.xlsx scrolling slowly one final time — jobs table, then Sheet 2 chart, then Sheet 3 outstanding tracker]**

NARRATOR: Honest summary. The xlsx skill doesn't run GreenPro Landscaping. Marco runs GreenPro Landscaping. What the skill does is take the information he's already capturing — because he has to — and turn it into the visibility he needs to actually run the business. The margin number. The outstanding balance. The week-over-week pattern. That information was already in his phone. Now it's in a workbook.

**[SCREEN: Two files side-by-side — left: greenPro-april-2026.xlsx with clean formatting and chart | right: a generic unformatted spreadsheet paste — overflowing columns, no formulas, no totals, misaligned data]**

NARRATOR: Compare that to pasting those same notes into Excel manually. Misaligned columns. No formulas. Nothing calculated. It's technically a spreadsheet. It is not a tracker. The difference is twenty-eight seconds and a clear prompt.

**[SCREEN: Terminal install command — large text on dark background]**

NARRATOR: Install it:

**[SCREEN: Typewriter animation]**

`npx @smithery/cli@latest skill add anthropics/xlsx`

**[SCREEN: Smithery.ai anthropics/xlsx page]**

NARRATOR: Full documentation at the link in the description. Every format option, formula syntax, and chart type the skill supports.

**[SCREEN: Episode C03 thumbnail preview — professional email on screen, a landscaper's name visible in the To field]**

NARRATOR: Next episode: the internal-comms skill. We're showing a service business owner how to handle the one part of the job nobody wants to do — the customer emails. Appointment confirmations, job completion summaries, follow-ups on those three outstanding invoices we just saw. A list of jobs that need messages, turned into a complete drafted set — one per customer, right tone for each situation. That's Episode C03.

**[ANIMATION: Channel outro — "Anthropic Skills Showcase" logo, subscribe prompt, dark background with orange accent]**

NARRATOR: I'm Denis. See you on the next one.

---

*End of script. Total estimated narration: ~1,840 words at 150 wpm ≈ 12:16.*
