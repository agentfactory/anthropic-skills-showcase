# Demo Walkthrough — Episode B02: xlsx

**For:** Denis (presenter)
**Purpose:** Step-by-step rehearsal guide for the live demo section (3:30–9:30)
**Total demo time:** ~6 minutes

---

## Before You Hit Record

- [ ] Skill installed: `npx @smithery/cli@latest skill add anthropics/xlsx`
- [ ] Input file ready: `use-case/input/expense-list.md` open in your text editor
- [ ] Terminal open, dark mode, font size 16pt minimum
- [ ] Microsoft Excel (or LibreOffice Calc as backup) installed and available
- [ ] File explorer pane open in your working directory
- [ ] NO existing `.xlsx` file in the directory — start clean so the file appearing on-screen is genuinely new

---

## Step 1: Review the Input File [3:30–4:30]

**What to do:**
1. Open `use-case/input/expense-list.md` in VS Code or your text editor
2. Scroll slowly from top to bottom — let viewers take in the raw format
3. Use your cursor (hover, no clicking) to indicate a few key line items:
   - One travel entry (likely the largest single amount)
   - One software subscription
   - One item that visually looks like it might be over budget (any single amount over $200)
4. Do NOT narrate individual line items — just scroll and let the rawness speak

**What to say:** Follow script — "Here's our starting point. This is a month of business expenses from a fictional ops manager..."

**Expected screen state:** Full-screen text editor, dark mode, 28 lines of plain text visible without scrolling if possible (adjust font size down slightly if needed — you want all 28 lines visible at once for visual impact).

**Tip:** Resize the font in VS Code before recording (`Ctrl+-` a few times) so all 28 lines fit in one screen. Then restore after recording.

---

## Step 2: Invoke the Skill [4:30–5:30]

**What to do:**
1. Open Claude Code in your terminal (or Claude chat)
2. Make sure you're in the directory containing `expense-list.md`
3. Type the following prompt — typing on camera is fine, reading it as you type:

```
Using the expense list in expense-list.md, build a formatted Excel workbook called
april-expenses.xlsx. It should have three sheets:

Sheet 1 — Expenses: all line items in a proper table with columns Date (formatted as
date), Category, Amount (formatted as USD currency), Description. Apply conditional
formatting that highlights any row red where the Amount exceeds these category budgets:
Travel 500, Meals 75, Software 200, Office Supplies 100, Client Entertainment 300.

Sheet 2 — Summary: a table showing total and average spend per category, using
SUMIF and AVERAGEIF formulas referencing the Expenses sheet.

Sheet 3 — Chart: a pie chart of total spend by category with data labels showing
category name and percentage.
```

4. Submit the prompt and stay on screen.

**What to say:** Follow script narration as you type. Pause narration naturally while the prompt runs.

**If Claude asks where the file is:** Reply with the full path, e.g., `./expense-list.md` or the absolute path. This is unlikely if you're running from the same directory.

**Backup plan:** If the skill fails for any reason, have a pre-generated `april-expenses-BACKUP.xlsx` ready to open and present as the output. Do not mention the backup.

---

## Step 3: Watch the Process [5:30–7:00]

**What to do:**
1. Stay on the terminal — let Claude's processing stream on screen for the full duration
2. The output will show Claude's reasoning as it parses the expense data, then tool calls for generating the workbook
3. When `april-expenses.xlsx` appears in the file explorer, note the file size aloud

**What to say:** Follow script — "Watch what happens here. Claude is parsing the 28 expense lines..."

**What you'll see on screen:**
- Claude reasoning about the expense structure
- The skill making library calls (openpyxl or xlsxwriter references may appear)
- Sheet creation messages
- Formula generation
- Conditional formatting rule setup
- Chart creation
- Final success message with output path

**Timing:** Expect 15–30 seconds of processing. This is fine on camera. The longer it takes, the more impressive the reveal.

---

## Step 4: Review the Output [7:00–8:00]

**What to do:**
1. Double-click `april-expenses.xlsx` to open in Excel
2. You'll land on the Expenses sheet. Go through in this order:

**Expenses sheet:**
- Show the column headers (Date, Category, Amount, Description)
- Click one date cell — show in the formula bar that it's a true date value, not text
- Click one amount cell — show it's formatted as currency
- Scroll down to find and point out the red highlighted rows (the over-budget items)
- Count them verbally: "Three rows highlighted — those three exceeded their category budget"

**Summary sheet:**
- Click the Summary tab
- Show the Category | Total Spend | Average Spend table
- Click into one Total Spend cell — show the SUMIF formula in the formula bar
- Say the formula bar text aloud briefly

**Chart sheet:**
- Click the Chart tab
- Show the pie chart — it should have a title, labeled slices, legend
- Do NOT click into the chart (this invokes Excel's chart editor which is visually messy)
- Just scroll/zoom so it's fully visible

**What to say:** Follow script for each element.

**What good output looks like:**
- Expenses sheet: Proper data table, column A is dates (not text), column C is dollar values ($XX.XX), red rows visible
- Summary sheet: Six rows (one per category), SUMIF formulas wired to Expenses sheet by name
- Chart sheet: Pie chart with all 6 categories as slices, data labels visible, chart title "April Expenses by Category" or similar

---

## Step 5: Iterate [8:00–9:00]

**What to do:**
1. Go back to the Claude terminal
2. Type this follow-up prompt:

```
Add a Cumulative Total column to the Expenses sheet — column E — that shows the
running total of the Amount column from row 2 down, sorted by date. Update the
Chart sheet to also include a line chart showing cumulative spend over the month
as a separate chart below the pie chart.
```

3. Submit and wait for the new file: `april-expenses-v2.xlsx`
4. Open and show:
   - Column E on the Expenses sheet with the running totals
   - The Chart sheet with the pie chart and the new line chart below it

**What to say:** Follow script — "Let's add one more thing. The ops manager wants to see a running total column..."

**Expected output:**
- Column E header: "Cumulative Total" or "Running Total"
- Column E values: Cumulative sum from row 2 down (formula: =SUM($C$2:C2) or similar)
- Line chart on Chart sheet: X-axis is dates, Y-axis is cumulative amount, clear upward slope

**If only one chart comes out (not two):** That's acceptable — narrate it as the skill making a reasonable choice. Do not re-run.

---

## Step 6: Final Result [9:00–9:30]

**What to do:**
1. Snap two windows side by side:
   - Left: text editor with `expense-list.md` (the plain text input)
   - Right: Excel with `april-expenses-v2.xlsx` showing the Summary sheet
2. Hold that view for about 20 seconds — no narration needed after the opening line
3. Then switch to file explorer — show both files with visible timestamps

**What to say:** "Plain text list on the left. Finance-ready workbook on the right. Three sheets, live formulas, conditional formatting, two charts..."

**Setup tip:** Use Win+Left and Win+Right to snap windows before recording this step. Pre-position the Summary sheet tab so it's what Excel shows when you focus it.

---

## Common Issues and Fixes

| Issue | Fix |
|-------|-----|
| Skill not found | Re-run: `npx @smithery/cli@latest skill add anthropics/xlsx` |
| Output is `.xlsx` but won't open | Try opening with LibreOffice Calc as backup |
| Conditional formatting not visible | Scroll to rows where amounts exceed thresholds (Travel >500, Meals >75, etc.) |
| Chart sheet is empty | The chart may be embedded on the Summary sheet instead — check there |
| Formulas show `#REF!` errors | Sheet reference syntax may differ — ask Claude to fix: "Fix any formula reference errors in april-expenses.xlsx" |
| Date column shows numbers instead of dates | Click a date cell, Ctrl+1, Format Cells → Date — or ask Claude to fix |

---

## Category Budget Thresholds (Reference)

Use these when reviewing the output — these are the thresholds specified in the prompt:

| Category | Budget |
|----------|--------|
| Travel | $500 |
| Meals | $75 |
| Software | $200 |
| Office Supplies | $100 |
| Client Entertainment | $300 |

Check the expense list — lines exceeding these amounts should be highlighted red.

---

## Timing Reference

| Segment | Start | End | Duration |
|---------|-------|-----|----------|
| Review input | 3:30 | 4:30 | 1:00 |
| Invoke skill | 4:30 | 5:30 | 1:00 |
| Watch process | 5:30 | 7:00 | 1:30 |
| Review output | 7:00 | 8:00 | 1:00 |
| Iterate | 8:00 | 9:00 | 1:00 |
| Final result | 9:00 | 9:30 | 0:30 |
| **Total** | **3:30** | **9:30** | **6:00** |
