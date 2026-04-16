# Use Case Walkthrough — Episode C02: xlsx Job Tracker

## Setup

1. Install the skill:
   ```
   npx @smithery/cli@latest skill add anthropics/xlsx
   ```

2. Open Claude Code with the input file ready:
   ```
   claude
   ```

3. The input file `april-jobs-notes.md` should be in the working directory.

---

## The Prompt

Paste this into Claude exactly as written during the demo:

```
Using april-jobs-notes.md, build a job tracker workbook for GreenPro Landscaping.

Sheet one: Jobs table with columns Date, Client, Service Type, Revenue, Materials Cost,
Labor Cost, Gross Profit, Margin %, Status. Categorize Service Type as one of:
Lawn Maintenance, Landscaping Install, Irrigation, Tree Work, Other — infer from
the job description. Gross Profit = Revenue minus Materials Cost minus Labor Cost.
Margin % = Gross Profit divided by Revenue, shown as a percentage.

For Status: PAID for paid jobs, OUTSTANDING in orange for unpaid or pending,
PARTIAL in yellow for partial payments. Distribute the monthly costs from the notes
across jobs where possible — fuel and misc proportionally across all jobs, materials
to the specific jobs they match (mulch to henderson, sod to gonzalez, plants to chen,
drip parts to torres). Diego's labor to the three bigger installs: henderson, gonzalez,
and chen proportionally by job revenue.

Add a totals row at the bottom: total revenue, total costs, total gross profit,
average margin %. Freeze the header row.

Sheet two: Weekly summary table — Week 1 (Apr 1–7), Week 2 (Apr 8–14),
Week 3 (Apr 15–21), Week 4 (Apr 22–30). Columns: Revenue and Total Costs per week.
Add a bar chart comparing Revenue vs. Costs by week.

Sheet three: Outstanding balance tracker — only OUTSTANDING and PARTIAL jobs,
with columns: Date, Client, Job Description, Amount Due. Red summary cell at
bottom: Total Outstanding.

Output as: greenPro-april-2026.xlsx
```

---

## What to Highlight During Demo

**Step 3 — Watch the Process:**
- Point out that "henderson backyard — mulch 8yds $180 mat + $320 labor — half paid $250 bal $250 owed" gets parsed as: Revenue $500, Materials $180, Status PARTIAL, Amount Due $250
- The service categorization: "mow edge blow" → Lawn Maintenance, "mulch 8yds + install" → Landscaping Install, "drip system 6 zones" → Irrigation
- Cost allocation: Claude should distribute the monthly costs across the relevant jobs

**Step 4 — Review the Output:**
- Open in Excel, Sheet 1 at 100% zoom
- Scroll right across all columns — confirm formatting (currency, %, conditional colors)
- Highlight the summary row — specific numbers: Revenue $7,480, Margin 71.9%
- Switch to Sheet 2 — point out the bar chart and Week 2 being the largest
- Switch to Sheet 3 — three outstanding rows, Total $1,450 in red

**Step 5 — Iterate:**
Follow-up prompt for the "Days Outstanding" column:
```
On Sheet 3, add a Days Outstanding column calculated from today's date minus the
job completion date. Highlight any row where Days Outstanding is over 14 in red.
```
- Show the updated Sheet 3 — Gonzalez at 24 days in red, Riverside Apr 9 at 22 days in red

---

## Expected Output Quality

The finished `.xlsx` workbook should contain:

**Sheet 1 — Jobs Table**
- 15 data rows + header + totals row
- Revenue column: currency format, right-aligned
- Margin %: percentage with 1 decimal place
- Status column: PAID (grey), PARTIAL (yellow background), OUTSTANDING (orange background)
- Header row frozen (scroll down and header stays visible)
- Column widths auto-fitted to content

**Sheet 2 — Weekly Summary**
- 4 week rows + header
- Bar chart embedded in the sheet (Revenue = one bar color, Costs = another)
- Chart title: "GreenPro Landscaping — April 2026 Weekly Revenue vs. Costs"

**Sheet 3 — Outstanding Tracker**
- 3 rows (Gonzalez, Henderson, Riverside ×2 entries or combined)
- Amount Due column with currency format
- Red summary/total cell clearly labeled "Total Outstanding"

---

## Variations to Show in Results Section

**Variation 1 — Parts Cost Tracker (Plumber)**
```
Using these parts notes from last week's service calls, build a parts cost tracker.
Columns: Job Date, Client, Part Description, Supplier, Unit Cost, Quantity, Line Total.
Add subtotal rows grouped by supplier. Sort by Supplier then Job Date.
Output as parts-tracker-week-of-apr-14.xlsx
```

**Variation 2 — Crew Time Sheet (Painter)**
```
Using this week's job log, build a crew time sheet for ABC Painting.
Rows are jobs, columns are crew members (Marco, Diego, Rosa). Enter hours worked
per job per person. Add overtime calculation (anything over 8hrs/day = 1.5x).
Total hours and gross pay per employee at the bottom.
Output as crew-timesheet-apr-14-18.xlsx
```

**Variation 3 — Annual Revenue Summary**
```
Using all 12 monthly job log files (jan-jobs.md through dec-jobs.md), build an
annual summary workbook. Sheet 1: monthly columns (Jan–Dec), rows for Revenue,
Costs, Gross Profit, Margin %. Sheet 2: 12-month trend line chart for Revenue
and Gross Profit. Highlight the top 3 revenue months in green.
Output as greenPro-2025-annual.xlsx
```
