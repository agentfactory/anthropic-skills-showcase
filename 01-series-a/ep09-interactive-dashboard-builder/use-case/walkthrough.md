# Live Demo Walkthrough — Episode 09
**Demo window:** 3:30–9:30 (6 minutes)
**Skill:** anthropics/interactive-dashboard-builder

---

## Preflight Checklist

Run through these before recording. Do not skip.

- [ ] `sales-data.csv` is saved at `use-case/input/sales-data.csv`
- [ ] Skill is installed: run `npx @smithery/cli@latest skill add anthropics/interactive-dashboard-builder` and confirm "Skill installed" message
- [ ] Claude Code is open and responsive — send a test "hello" to confirm
- [ ] `use-case/output/` directory exists and is empty (clear any previous runs)
- [ ] Browser is set to dark mode (matches dashboard aesthetic)
- [ ] VS Code font size set to 18–20pt for screen legibility
- [ ] Terminal font size set to 16pt minimum
- [ ] Screen resolution: 1920x1080, recording at 1x (not Retina/2x)
- [ ] Notifications silenced (phone, desktop, Slack)
- [ ] CSV preview in VS Code: confirm 30 rows, 6 columns visible before recording

---

## Step 1 — Show the Raw Data (3:30–4:00)
**What to do:** Open `use-case/input/sales-data.csv` in VS Code. Scroll slowly through the rows.

**What to say:**
> "Here's the starting point. Thirty rows of sales data for Vantage Analytics — Q1 and Q2 of 2025. Four reps, four regions, three product tiers: Starter, Pro, Enterprise. Mix of closed won, lost, and pipeline. This is exactly what you'd export from Salesforce or HubSpot at the end of a quarter."

**Tip:** Hover over the Status column to show the variance — some Lost, some Pipeline, not just wins. Viewers need to see it's messy real data, not cherry-picked.

---

## Step 2 — Enter the Prompt (4:00–4:45)
**What to do:** Switch to Claude Code. Open a new conversation. Paste this exact prompt:

```
Build an interactive HTML dashboard from sales-data.csv for Vantage Analytics Q1-Q2 2025.

Include:
- KPI cards: Total Revenue (Closed Won), Win Rate, Average Deal Size, Top Performing Rep
- Bar chart: Revenue by Region (Closed Won deals only)
- Line chart: Monthly revenue trend by month
- Pie chart: Deal breakdown by product (Starter / Pro / Enterprise)
- Filters: Rep Name, Region, Product, Status

Style: Dark mode, professional. Use #141413 background, #d97757 accent color for highlights.
Output: Single HTML file, save as dashboard.html
```

**What to say while prompt is being typed:**
> "Here's my prompt. I'm being specific about exactly which KPIs I want, which chart types, and I've given it the brand colors. The more specific your brief, the closer the first output lands to what you actually want."

**After hitting Enter:**
> "One thing happening here that's easy to miss — Claude is reading the CSV, detecting column types automatically, calculating aggregates, and writing the complete Chart.js implementation in a single pass. No intermediate steps."

---

## Step 3 — Watch the Generation (4:45–5:15)
**What to do:** Let the screen show Claude Code generating code. Don't fast-forward, don't cut. Let it run at real speed.

**What to say while it generates:**
> "This is live — no speed-up. You can see it's working through the HTML structure, setting up the Chart.js configs, writing the filter logic, styling it. For a 30-row file, this takes thirty to forty-five seconds."

**Watch for:** "dashboard.html written to use-case/output/" confirmation message. Pause briefly here.

> "There it is. Output confirmed."

---

## Step 4 — The Aha Moment — Open the Browser (5:15–6:00)
**What to do:** Open `use-case/output/dashboard.html` in the browser. Let it load fully before speaking.

**What to say — pause 2 full seconds before speaking:**
> "And here is your aha moment."

**Wait 3 more seconds. Let the viewer take in the full dashboard.**

> "Total Revenue: one point eight four million dollars, Closed Won only. Win rate: sixty-four percent. Average deal size: forty-two thousand. Top rep: Sarah Chen, nine closed deals. And look at this bar chart — West region is at roughly half the revenue of North and East. That insight was completely invisible in the CSV. It's front and center now."

**Tip:** Use your cursor to slowly circle the West bar in the chart as you mention it. Make the visual connection clear for the viewer.

---

## Step 5 — Filter Interactions (6:00–7:30)
**What to do:** Work through the filters deliberately. Don't rush.

**Filter 1 — Product: Enterprise**
> "Let's drill in. Enterprise deals only."
- Click Product dropdown → select Enterprise
- Pause 2 seconds while charts repaint
> "Every chart just updated simultaneously. Now I can see Enterprise deals are concentrated in East and North. West has zero closed Enterprise deals. That's a coaching conversation, right there."

**Filter 2 — Rep: Marcus Webb**
- Click Rep Name dropdown → select Marcus Webb
- Pause while charts update
> "Now let's look at one rep. Marcus Webb — his deal mix, his monthly trend, which products he's closing. Individual performance view in two clicks."

**Filter 3 — Reset**
- Click Reset / clear all filters
> "Reset. All back to full picture."

---

## Step 6 — Refinement: Date Range Picker (7:30–9:00)
**What to do:** Go back to Claude Code. Type this follow-up prompt:

```
Add a date range picker to the dashboard. Two inputs: Start Date and End Date.
When dates are selected, filter all charts and KPIs to that date range.
Default to showing all data. Place the date picker in the filter row alongside
the existing dropdowns.
```

**What to say:**
> "This is the iteration loop. I'm not rewriting the dashboard — I'm adding one feature with one natural-language prompt. The skill picks up the existing structure and extends it."

**After output:**
> "Done. Let's reload."

**In the browser — set date range to Q1 only (Jan 1 – Mar 31, 2025):**
> "Q1 only. January through March. Every chart and every KPI just recalculated. Revenue drops from one point eight four million to eight-twenty — which tells us Q2 was stronger. The trend line confirms the acceleration into June. That's actionable."

**Final beat — check file size:**
- Open terminal: `ls -lh use-case/output/dashboard.html`
> "One hundred and sixty-two kilobytes. For a fully interactive, multi-chart, filtered dashboard. You could attach this to an email. You could host it on GitHub Pages. One file, completely self-contained."

---

## Troubleshooting

**Issue: Dashboard renders but charts are blank**
Fix: The CSV path may be wrong. In Claude Code, confirm the file is referenced with a relative path. Re-run with explicit: `"The CSV is at use-case/input/sales-data.csv"` in the prompt.

**Issue: Filters don't update charts**
Fix: This is usually a JavaScript scope issue in the generated code. Ask Claude: `"The filter dropdowns aren't updating the charts. Fix the JavaScript so filter change events trigger a chart redraw."`

**Issue: KPI cards show wrong numbers**
Fix: Confirm Status filter — KPI should be Closed Won only. Ask Claude: `"The Total Revenue KPI should only include rows where Status is 'Closed Won'. Fix the calculation."`

**Issue: File opens as text instead of browser**
Fix: Right-click → Open With → your browser. Or drag the file directly into a browser window.

**Issue: Generation takes more than 90 seconds**
Fix: Acceptable on first run if Smithery is cold-starting. Wait it out. For recording, do a dry run first to warm the session.

---

## Timing Reference

| Timestamp | Action |
|-----------|--------|
| 3:30 | Show CSV in VS Code |
| 4:00 | Enter prompt in Claude Code |
| 4:45 | Watch generation |
| 5:15 | Open browser — aha moment |
| 6:00 | Start filter interactions |
| 7:30 | Refinement: date range picker |
| 8:15 | Show Q1 filter applied |
| 8:45 | File size check |
| 9:00 | Hand off to Results section |
