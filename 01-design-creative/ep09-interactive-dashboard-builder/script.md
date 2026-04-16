# Episode 09 Script — interactive-dashboard-builder
**Runtime:** ~12 minutes | **Word count:** ~1,800 words

---

## [0:00–0:30] COLD OPEN

[SCREEN: Dark terminal. Cursor blinks. One command is typed: `npx @smithery/cli@latest skill add anthropics/interactive-dashboard-builder`]

[ANIMATION: Progress bar fills — "Skill installed." — then cut hard to a browser window filling the screen.]

[SCREEN: A dark, polished HTML dashboard opens. KPI cards flash in — Total Revenue: $1.84M. Win Rate: 64%. Top Rep: Sarah Chen. Charts animate in. User clicks a dropdown: "Region → West." Charts repaint instantly. Another click: "Product → Enterprise." The trend line shifts. Everything is live.]

**Narration:**
That CSV you've been staring at in Excel? Thirty rows of raw sales data. In about forty-five seconds, Claude just turned it into that. Fully interactive. Works in any browser. No Tableau subscription, no Python environment, no boilerplate. That's the interactive-dashboard-builder skill. Let's build it from scratch.

[B-ROLL: Quick cut montage — spreadsheet full of numbers → same data rendered as glowing charts → mouse clicking filters → dashboard updates live]

---

## [0:30–1:30] INTRO

[SCREEN: Channel intro card fades in. Title: "Anthropic Skills Showcase — Ep. 09"]

**Narration:**
Welcome back to the Anthropic Skills Showcase. I'm Denis, and every episode I take one skill from the Smithery directory, install it in under a minute, and show you exactly what it can do on a real use case.

[SCREEN: Smithery.ai skill page for interactive-dashboard-builder — 419 installs counter visible]

**Narration:**
Episode 9. The skill is `interactive-dashboard-builder`. Four hundred and nineteen installs and climbing — and after today you'll understand exactly why.

[SCREEN: Split screen — LEFT: raw CSV in VS Code, numbers in a grid, no context. RIGHT: the finished dashboard from the cold open.]

**Narration:**
Here's the before state. You've got a CSV file. Maybe it came from your CRM, maybe from a data export, maybe you built it yourself from scattered reports. It has all the right data — dates, reps, regions, deal sizes — but in this form, it tells you absolutely nothing. You can't filter it, you can't spot trends, you can't share it with a stakeholder without them needing Excel.

[SCREEN: Close-up on CSV — Date, Rep Name, Region, Product, Deal Size, Status columns]

**Narration:**
This is the exact problem this skill was built for. You give it a CSV, you describe what you want, and it hands you back a single HTML file that works everywhere — no server, no dependencies, no build step.

[SCREEN: Target audience callout text — "Data analysts. Sales ops. Business analysts. Anyone who reports numbers."]

**Narration:**
If you're in data, sales ops, or business analytics — or if you're just the person who ends up making the quarterly deck — this episode is directly for you.

---

## [1:30–3:30] DEEP DIVE

[SCREEN: Terminal in focus, clean dark background]

**Narration:**
Let's start with the install. One command.

[SCREEN: Terminal, slow typed for emphasis]

```
npx @smithery/cli@latest skill add anthropics/interactive-dashboard-builder
```

[ANIMATION: Text types out character by character, install progress shows]

**Narration:**
Done. That's it. The skill is now available to Claude Code. No config file, no API key, no package.json entry. The Smithery CLI handles the wiring automatically.

[SCREEN: SKILL.md file opens in editor — highlight: `# interactive-dashboard-builder`]

**Narration:**
Every Smithery skill ships with a SKILL.md — a plain-English spec that tells Claude what the skill does and how to trigger it. Let's look at what this one covers.

[SCREEN: SKILL.md sections highlighted one at a time as narration continues]

**Narration:**
The skill activates whenever you ask Claude to build a dashboard from a data file, or when you say phrases like "create an interactive report," "visualize this CSV," or "build me a filterable chart." The trigger language is flexible — you don't need to use magic words.

[SCREEN: Feature list in SKILL.md — animated check marks appear]

**Narration:**
Core capabilities. Automatic column type detection — it figures out which columns are dates, which are categories, which are numbers, without you telling it. Chart selection — it picks bar, line, or pie charts based on your data shape. KPI cards — it pulls summary metrics to the top: totals, averages, win rates. Dynamic filters — every categorical column becomes a dropdown. And one-file output — everything ships as a single self-contained HTML file with no external dependencies at runtime.

[SCREEN: Side-by-side — simple prompt on left, output feature list on right]

**Narration:**
The interesting thing about this skill is what it doesn't require. You don't write CSS. You don't touch JavaScript. You don't specify chart types or pick a color palette. The skill handles all of those decisions based on your data structure and your description of what matters. You stay in the problem domain. You say "I want to see which region is underperforming" — and the skill figures out how to show you that.

[SCREEN: Brief flash of Chart.js attribution in generated output]

**Narration:**
Under the hood, the generated dashboards use Chart.js for rendering — which means they're fast, they look professional, and they work in every modern browser without a single npm install.

---

## [3:30–9:30] LIVE DEMO

[SCREEN: VS Code editor opens. New terminal panel at bottom. Left panel shows file tree with `sales-data.csv` visible.]

**Narration:**
Let's build the real thing. I've got a CSV here — thirty rows of sales data for a fictional company called Vantage Analytics. Q1 and Q2 of 2025. Four sales reps, four regions, three product tiers. Mix of closed won, lost, and pipeline deals. This is representative of what you'd export from Salesforce or HubSpot after a quarter.

[SCREEN: CSV preview in VS Code — first 8 rows visible. Columns: Date, Rep Name, Region, Product, Deal Size, Status]

**Narration:**
Step one — open Claude Code and drop the prompt.

[SCREEN: Claude Code interface opens. User types prompt — animate the typing]

**Narration:**
Here's my prompt:

[SCREEN: Prompt text displayed clearly, large enough to read]

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

[ANIMATION: Cursor hits Enter. Processing indicator appears in Claude Code.]

**Narration:**
One thing I want you to notice — I specified exactly which KPIs I care about, I asked for three specific chart types, and I gave it the brand colors I want. The more specific your brief, the closer the first output lands.

[SCREEN: Claude Code working — code generation visible in real-time, scrolling HTML/JS/CSS output]

**Narration:**
Claude is reading the CSV, inferring the data types, calculating the KPIs, and writing the complete Chart.js dashboard in one pass. This takes roughly thirty to forty-five seconds depending on file size.

[B-ROLL: Code scrolling in terminal — glimpses of HTML structure, JavaScript chart configs, CSS variables]

[SCREEN: "dashboard.html written to use-case/output/" confirmation message]

**Narration:**
There it is. dashboard.html, written to the output folder. Step two — open the browser.

[SCREEN: Browser opens with dashboard.html. Full dashboard renders. KPI cards appear at top row.]

[ANIMATION: Each element fades in — KPI cards, then charts animate into place: bar chart grows up, line chart draws left to right, pie chart spins in]

**Narration:**
And here is your aha moment.

[SCREEN: Hold on full dashboard for 3 seconds. Let it breathe.]

**Narration:**
Total Revenue: $1.84 million. Win Rate: 64%. Average deal size: $42,000. Top rep: Sarah Chen, 9 closed deals. And we can see immediately from the bar chart that the West region is dramatically underperforming — roughly half the revenue of North and East. That's an insight that was invisible in the CSV.

[SCREEN: Slowly zoom into the bar chart — West bar notably shorter]

**Narration:**
Step three — let's use the filters. I'm going to drill into Enterprise deals only.

[SCREEN: User clicks Product dropdown → selects "Enterprise"]

[ANIMATION: All charts repaint. Bar chart heights shift. Pie chart redraws to Enterprise-only slice. Line chart trend changes.]

**Narration:**
Every chart just updated simultaneously. Now I can see that Enterprise deals are concentrated in the East and North. West has zero closed Enterprise deals. That's a coaching conversation, right there, generated from a CSV in under a minute.

[SCREEN: Click Rep Name filter → select "Marcus Webb"]

**Narration:**
Let me filter by rep. Marcus Webb — and now I can see his deal mix, his monthly trend, and exactly which products he's closing. This is the kind of individual performance view that normally takes a dashboard engineer half a day.

[SCREEN: Reset filters button — click — charts reset]

**Narration:**
Reset. Step four — let's do a refinement pass. I want to add a date range picker so stakeholders can slice Q1 vs Q2 independently.

[SCREEN: Claude Code — new follow-up prompt typed]

```
Add a date range picker to the dashboard. Two inputs: Start Date and End Date.
When dates are selected, filter all charts and KPIs to that date range.
Default to showing all data. Place the date picker in the filter row alongside
the existing dropdowns.
```

[ANIMATION: Claude Code processes. New code block generates.]

**Narration:**
This is where the iteration loop shines. I'm not rewriting the dashboard — I'm adding one capability with a single natural-language instruction. The skill picks up the existing structure and extends it.

[SCREEN: Updated dashboard.html reloads in browser. Date picker inputs now visible in filter row.]

**Narration:**
Date range picker, added. Let me test it — January 1st to March 31st, Q1 only.

[SCREEN: User sets date range. Charts update. KPI cards recalculate.]

**Narration:**
All charts and KPIs just recalculated for Q1. Revenue drops from $1.84M to $820K — which tells us Q2 was actually stronger. The trend line confirms an acceleration into June. That's actionable intelligence.

[SCREEN: Pull back to full dashboard view — all filters visible, charts populated]

**Narration:**
Step five — the share test. I'm going to right-click dashboard.html, copy the path, send it to a colleague. No server required. No login. No Tableau license. Just open the file.

[B-ROLL: Email composer — attaching dashboard.html — recipient opens in browser — same live interactive dashboard appears on a different screen]

**Narration:**
That's the part that genuinely changes your workflow. The output is a portable artifact. It runs anywhere HTML runs. And step six — let's look at the final file size.

[SCREEN: Terminal — `ls -lh use-case/output/dashboard.html`]

**Narration:**
One hundred and sixty-two kilobytes. For a fully interactive dashboard with three chart types, four filters, a date picker, and live KPI cards. You could attach this to an email. You could host it on GitHub Pages. You could embed it in a Notion page. One file, total self-containment.

---

## [9:30–11:00] RESULTS + VARIATIONS

[SCREEN: Full dashboard — scroll slowly through all sections]

**Narration:**
Let's recap what we built. Starting point: thirty rows of CSV data. Forty-five seconds of generation time. Final output: a dark-mode interactive dashboard with four KPI cards, three chart types, five filter dimensions, a date range picker, and automatic Chart.js rendering. No external tools, no BI subscriptions, no JavaScript written by hand.

[SCREEN: Three variation cards appear — animated, brand colors]

**Narration:**
Now let's talk about what else this skill handles — because the sales dashboard is just one lane.

[SCREEN: Variation card 1 — "Marketing Campaign Report"]

**Narration:**
Variation one: marketing campaign performance. Drop in a CSV with campaign name, channel, spend, clicks, conversions, and CPA — and ask for a dashboard filtered by channel and date range. Same skill, same workflow, completely different domain. A growth team can use this to review weekly paid media without ever opening a BI tool.

[SCREEN: Variation card 2 — "Support Ticket Analytics"]

**Narration:**
Variation two: customer support analytics. Export your ticket data — open date, close date, category, agent, resolution time, CSAT score. Ask for average handle time by category, CSAT trends by agent, and a ticket volume heat map by day of week. Your support manager gets a live operations dashboard that would normally cost weeks of engineering time.

[SCREEN: Variation card 3 — "Financial Variance Report"]

**Narration:**
Variation three: budget vs. actuals. Give it a CSV with department, budget line item, forecasted spend, and actual spend. Ask for a variance dashboard with red/green conditional formatting on overages. Finance teams build these manually in Excel every month — this skill automates the visual layer entirely.

[SCREEN: Brief flash of all three variation dashboards side by side]

**Narration:**
The pattern is always the same. Structured CSV in. Prompt describing what you want to highlight. Interactive HTML out. The domain doesn't matter.

---

## [11:00–12:00] WRAP-UP + CTA

[SCREEN: Simple dark slide — episode title, skill name, brand colors]

**Narration:**
Let's land this. The interactive-dashboard-builder skill takes structured data and turns it into a shareable, browser-native interactive report — in a single Claude Code session. No BI tool required. No JavaScript knowledge required. No deployment required.

[SCREEN: Three bullet recap — animated in one by one]

**Narration:**
What you saw today: one install command, one CSV, one natural-language prompt, and a fully filtered interactive dashboard. Then one follow-up prompt to add a date range picker. The entire loop — from raw data to share-ready output — took under two minutes.

[SCREEN: Install command displayed large, centered]

```
npx @smithery/cli@latest skill add anthropics/interactive-dashboard-builder
```

[SCREEN: URL displayed: https://smithery.ai/skills/anthropics/interactive-dashboard-builder]

**Narration:**
The install command is on screen, the skill URL is below, and all the source files from today's demo are in the GitHub repo linked in the description.

[SCREEN: GitHub URL: https://github.com/agentfactory/anthropic-skills-showcase]

**Narration:**
If this saved you time or sparked an idea, subscribe — we drop a new skill every week. And if you've got a data use case you want me to tackle on a future episode, drop it in the comments.

[SCREEN: Next episode card — dark background, orange accent, Episode 10 title]

**Narration:**
Next week: Episode 10. Same dashboard. Three completely different visual styles. We're using the theme-factory skill to restyle this HTML report three ways — minimal, bold, and corporate — in under five minutes each. You're going to want to see how fast that goes.

[SCREEN: Subscribe button animation, bell icon]

**Narration:**
I'll see you in Episode 10.

[ANIMATION: Outro card with channel name, social links, episode card grid]

---

*Total word count: ~1,820 words | Estimated runtime: 12 min @ 150 wpm*
