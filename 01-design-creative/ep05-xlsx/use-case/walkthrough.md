# Demo walkthrough — xlsx: Messy Sales CSV to Clean Workbook

Rehearsal script for Denis's live screen recording. Target duration: **6:00** (fits the 3:30–9:30 demo slot). Keep terminal font at 16pt+, dark mode, VS Code on one side, Claude Code on the other.

---

## Pre-flight checklist (complete before recording starts)

1. Working directory: `mkdir ~/demo-ep05 && cd ~/demo-ep05`
2. Confirm xlsx skill is installed: `ls ~/.claude/skills/xlsx/SKILL.md`
3. Copy the input file: `cp <repo>/ep05-xlsx/use-case/input/messy-sales-data.csv ~/demo-ep05/`
4. Open `messy-sales-data.csv` in VS Code — scroll to the bottom to confirm all 25 rows are present but do NOT show the file to camera yet
5. Claude Code launched in `~/demo-ep05`, fresh empty session
6. Excel (or LibreOffice Calc) is installed and set as default for .xlsx files
7. Close email, Slack, notifications off — "Do Not Disturb" on
8. Screen resolution: 1920×1080. VS Code font size: 15pt. Terminal font size: 16pt.

---

## Recording — step by step

### Step 1 — Show the raw input (3:30–4:30) ~ 60s

**Action:** Switch focus to VS Code with `messy-sales-data.csv` open. Scroll through slowly — top to bottom, about 8 seconds.

**Say:** "Here's what we're starting with — a raw sales export from NorthBridge Tech. Twenty-five rows. At a glance it looks fine, but look closer."

**Action:** Pause on the Date column. Move cursor to highlight the inconsistent values.

**Say:** "Three different date formats in one column — 'Jan 3 2024,' then ISO format, then US shorthand. Excel will turn half of these into text."

**Action:** Scroll right to Revenue/Cost. Point to the dollar sign inconsistency.

**Say:** "Revenue has dollar signs on some rows, not others. And look at row 14 — blank revenue. That'll break any formula that touches it."

**Action:** Scroll to rows 9 and 17 — point out the duplicate.

**Say:** "Rows 9 and 17 are exact duplicates. Classic CRM artifact. And somewhere in here, Robert Smith is also called Bob Smith — same person, different rows."

**Action:** Return to the top of the file.

**Say:** "This is what I'm handing the xlsx skill. Let's see what comes back."

---

### Step 2 — Write the prompt (4:30–5:30) ~ 60s

**Action:** Switch to Claude Code. Slow down — type this clearly, or paste it if you've pre-staged it.

**Type the following prompt:**

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

**Say (while typing / after pasting):** "Five requirements in plain English — no formula syntax, no Excel knowledge required. I'm describing what I want, not how to build it."

**Action:** Hit enter.

**Wait for:** xlsx skill activation banner to appear at the top of the Claude Code response.

**Say:** "There — the xlsx skill activated. Claude has the full skill guidance loaded and is starting to process."

---

### Step 3 — Watch it process (5:30–7:00) ~ 90s

**Action:** Let the output stream. Do NOT fast-forward or cut.

**Say (narrate over the stream):** "Watch what it's doing — it's calling out each step. Date normalization, deduplication, rep name merging."

**Action:** When "Merged Bob Smith / Robert Smith" line appears — point to it.

**Say:** "Right there. It found all four Bob Smith rows and folded them into Robert Smith. That's the kind of cleanup that eats twenty minutes in Excel."

**Action:** When "Calculated Margin %" and "Calculated MoM Growth %" lines appear:

**Say:** "Calculated columns — margin per row, then month-over-month growth per rep. It's doing this correctly — growth per rep, not across all reps in aggregate."

**Action:** When "Building pivot table... Inserting bar chart..." lines appear:

**Say:** "Now the Summary sheet. Pivot table, then the chart."

**Action:** When "Wrote NorthBridge-Sales-Q1.xlsx" appears — pause briefly.

**Say:** "Done. Let's open it."

---

### Step 4 — Review the output (7:00–8:00) ~ 60s

**Action:** Double-click `NorthBridge-Sales-Q1.xlsx` in the file explorer to open it in Excel/Calc. Wait for it to load.

**Say:** "First thing — look at the Data sheet. Clean headers, uniform dates, no dollar signs."

**Action:** Scroll down slowly through the data.

**Say:** "The Notes column has flagged the blank revenue row. Everything else is clean."

**Action:** Scroll right to show Margin % and MoM Growth % columns.

**Say:** "The calculated columns are right here — formatted as percentages, no manual formula entry."

**Action:** Scroll down further — find the red-highlighted rows.

**Say:** "Conditional formatting is live. Two rows where margin fell below 20 percent are highlighted. In a real sales review, these jump out immediately."

**Action:** Click to the Summary sheet tab.

**Say:** "Summary sheet. Pivot by rep — total revenue, average margin. And the chart."

**Action:** Pause on the chart for 3 seconds.

**Say:** "This is a live embedded chart. Not an image. You can click it, edit it, change the type. It's a real Excel workbook."

---

### Step 5 — Iterate (8:00–9:00) ~ 60s

**Action:** Switch back to Claude Code.

**Say:** "One more thing — I want a target line on that chart. Our Q1 target was $50,000 per rep."

**Type:**
```
Update NorthBridge-Sales-Q1.xlsx: add a horizontal reference line at
$50,000 on the Revenue by Rep bar chart to show the Q1 target.
```

**Wait for:** "Done" or "Updated NorthBridge-Sales-Q1.xlsx"

**Say:** "Fifteen seconds. In Excel, a reference line on a bar chart means a secondary axis, a helper data series, and about eight steps. Here — one sentence."

**Action:** Switch back to Excel. Refresh or reopen the file. Show the updated chart with the orange dashed line at $50,000.

**Say:** "Two reps hit target. One didn't. Immediately visible."

---

### Step 6 — Closing shot (9:00–9:30) ~ 30s

**Action:** Alt-tab to VS Code with the raw CSV open. Then alt-tab to Excel with the finished workbook. Do this twice slowly — the split-screen effect is the close.

**Say:** "Raw CSV on the left. Presentation-ready workbook on the right. Same data. Five minutes apart. That's the xlsx skill."

**Action:** Hold on the finished workbook for the last 5 seconds.

---

## What to capture in `output/`

After recording, copy these into `use-case/output/`:
- `NorthBridge-Sales-Q1.xlsx` — the final workbook (after Step 5 iteration)

---

## Troubleshooting

- **xlsx skill doesn't activate:** Type `/skills` in Claude Code to confirm it's listed. If not listed, re-run the install command. Worst case, prefix your prompt with "Using the xlsx skill, ..."
- **Excel opens the file in Protected View:** Click "Enable Editing" before recording the review step — do this in the pre-flight, not on camera.
- **Conditional formatting not visible:** The light red may look pink on some monitors. Zoom in to 110% in Excel for clarity.
- **MoM Growth shows as 0% or N/A for January rows:** This is correct — no previous month to compare against. Mention it briefly: "January rows correctly show N/A for MoM — no prior month to compare."
- **Chart looks different in LibreOffice vs Excel:** Record in Excel if at all possible. LibreOffice chart rendering differs noticeably and may confuse viewers.
- **Iteration step fails or chart doesn't update:** Proceed without it — cut Step 5 from the demo and pick up at Step 6. The overall story still lands.

---

## Retakes

If a take runs over 6:30 or has a notable flub: restart from the top of the failed step, not the whole demo. Each step is designed to be a clean re-entry point. If the whole demo is compromised, reset `~/demo-ep05` and run from Step 1.
