# Episode 03 — creating-financial-models — Build a Full DCF Model from One Paragraph

**Series:** E — Finance & Accounting | **Skill:** anthropics/creating-financial-models | **Duration:** ~12 min
**Skill URL:** https://smithery.ai/skills/anthropics/creating-financial-models
**Install:** `npx @smithery/cli@latest skill add anthropics/creating-financial-models`
**Target Audience:** CFOs, financial analysts, founders, anyone building financial projections
**Use Case:** Build a complete DCF model for a fictional SaaS startup from a one-paragraph business description

---

## COLD OPEN [0:00-0:30]

[SCREEN: Finished DCF model — a clean, structured financial document showing revenue projections table, WACC assumptions, terminal value calculation, and a final intrinsic value range. Orange highlights on key numbers. Dark background, white text. Numbers look real and institutional-grade.]

NARRATOR: "You've got a pitch meeting in two days. The investor wants a full DCF model — revenue projections, cost structure, discount rate, terminal value. The whole thing. Building that from scratch takes a senior analyst half a day. What if Claude could do it in under three minutes, from a single paragraph you write in plain English?"

[SCREEN: Quick cut — the Loopline one-paragraph brief pasted into Claude. Cut to Claude actively generating. Cut to the completed model, fully structured, five years out.]

NARRATOR: "That's exactly what we're about to do. Let's go."

---

## INTRO [0:30-1:30]

[ANIMATION: 5-second channel intro — dark background, orange accent line sweeps across, "Anthropic Skills Showcase" fades in with Poppins heading.]

NARRATOR: "Welcome back to the Anthropic Skills Showcase. I'm walking you through the 95 skills available on Smithery.ai — one episode at a time — so you know exactly when and how to use each one."

[SCREEN: Smithery.ai skill page for creating-financial-models. Scroll slowly from skill name down through the description. Install count — 762 — visible in the corner.]

NARRATOR: "Today's skill is creating-financial-models — and this one is genuinely powerful for anyone who builds financial projections. That's founders prepping for fundraising, analysts pulling together board decks, finance leads modeling out a new business unit, or CFOs who need a first draft fast."

[B-ROLL: Over-the-shoulder shot of someone at a laptop surrounded by Excel printouts. Stack of papers. Multiple browser tabs with spreadsheets.]

NARRATOR: "Here's the before state: a proper DCF model — Discounted Cash Flow — is one of the most common and most tedious deliverables in finance. You're building revenue assumptions, projecting costs forward, calculating a weighted average cost of capital, estimating a terminal value, and then discounting everything back to today. Done manually, even with a template, that's two to four hours of work for someone who knows what they're doing. And if your inputs change, you're rebuilding half of it."

[SCREEN: A blank Claude conversation window.]

NARRATOR: "With this skill installed, you describe your business in plain English and Claude produces a complete, structured financial model — assumptions documented, calculations laid out, ready to review and refine."

---

## SKILL DEEP DIVE [1:30-3:30]

[SCREEN: Clean terminal window, dark mode, cursor blinking.]

NARRATOR: "Let's install it. One command:"

[SCREEN: Zoom in on terminal. Type the install command slowly so it's readable.]

```
npx @smithery/cli@latest skill add anthropics/creating-financial-models
```

[SCREEN: Terminal shows install progress — packages resolving, SKILL.md being written. Final confirmation line: "Skill added: creating-financial-models".]

NARRATOR: "Done. That installs the skill into your Claude Code environment. Under the hood, it writes a SKILL.md file that gives Claude persistent, structured instructions for how to behave when you ask for a financial model."

[SCREEN: Open the SKILL.md file in a code editor — dark mode, orange syntax highlights. Scroll through it at readable pace.]

NARRATOR: "Let's look at what's actually in the skill. The SKILL.md has three main parts. First, it defines the financial frameworks — the skill knows DCF, comparable company analysis, LBO fundamentals, and scenario modeling. It understands the difference between a three-statement model and a standalone projection. This isn't generic financial advice — it's structured methodology."

[SCREEN: Highlight the triggers section of SKILL.md.]

NARRATOR: "Second, there are triggers. The skill activates when you use phrases like 'build a financial model,' 'create a DCF,' 'project revenue,' or 'model out the financials.' You don't need a special command — just talk about finance and the skill kicks in."

[SCREEN: Scroll to the output format section of SKILL.md.]

NARRATOR: "Third — and this is key — the skill specifies output format. It produces structured markdown: clearly labeled sections for assumptions, revenue projections, cost structure, capital structure, and valuation. Everything is documented with its own reasoning. If an assumption seems aggressive, the skill will call that out."

[ANIMATION: Simple diagram fading in. Three boxes connected by arrows: "Business Description (text)" → "creating-financial-models skill" → "Structured DCF Model (markdown)". Orange arrows, dark background.]

NARRATOR: "The workflow is clean. You give it a business description — a paragraph or a page, it doesn't matter — and it outputs a complete model. The more context you give it, the more precise the output. Historical revenue numbers, market size estimates, known cost benchmarks — all of that feeds better projections."

---

## LIVE DEMO [3:30-9:30]

[SCREEN: Full screen recording, dark mode, 1920x1080. Claude Code interface open with a clean, empty conversation.]

NARRATOR: "Let's build something real. Our subject is Loopline — a B2B SaaS company. They make project workflow automation software. I've got a one-paragraph brief that gives Claude everything it needs to get started."

### Step 1 — Paste the Business Brief [3:30-4:30]

[SCREEN: Open the file use-case/input/startup-brief.md in the editor. The full Loopline brief is visible. Read it slowly on screen.]

NARRATOR: "Here's our input. This is the kind of brief a founder might write for their own records — pricing model, target market, a few years of ARR history. Nothing fancy. No spreadsheets. Just context."

[SCREEN: Select all text in the brief. Copy it.]

NARRATOR: "We're going to paste this directly into Claude. No formatting, no structured template. Just plain text."

[SCREEN: Switch to Claude Code conversation window. Paste the text.]

### Step 2 — Invoke the Skill [4:30-5:30]

[SCREEN: Cursor positioned after the pasted brief. Type the prompt clearly so viewers can read it.]

NARRATOR: "Now I add the actual request. I'll keep it direct:"

[SCREEN: Type the following prompt below the pasted brief:]

```
Using this business description, build a complete DCF financial model for Loopline.
Include: 5-year revenue projections with growth rate assumptions, operating cost structure
(COGS, S&M, R&D, G&A), EBITDA bridge, WACC calculation with assumptions stated, terminal
value using exit multiple and perpetuity growth methods, and a final equity value range.
Document every assumption you make and flag any that are aggressive or uncertain.
```

[SCREEN: Hit Enter. Claude begins processing. Scroll indicator or thinking animation visible.]

NARRATOR: "And we let it run. What's happening right now is the skill is parsing the business description, identifying the key financial inputs — pricing, cohort size, growth trajectory — and mapping those to a standard DCF structure. It's not just doing math. It's making judgment calls about what assumptions are reasonable for a mid-market B2B SaaS company."

### Step 3 — Watch the Model Build [5:30-7:00]

[SCREEN: Claude's response begins streaming in. Revenue projections table appears first. Show it building line by line. Slow scroll to keep each section readable.]

NARRATOR: "Look at what's coming out. First section — Revenue Projections. It's picked up Loopline's three years of historical ARR — 180k, 620k, 1.4 million — and used that to calibrate growth rate assumptions. Year four and five projections are grounded in that trajectory, not made up."

[SCREEN: The cost structure section populates — COGS, S&M, R&D, G&A as percentages of revenue. Pause scrolling here.]

NARRATOR: "Cost structure — this is where a lot of financial models fall apart. The skill is using SaaS industry benchmarks. S&M is running around 35 percent of revenue in the growth phase — that's right for a company Loopline's stage. R&D at 18 percent. G&A at 10. These aren't random numbers, they're calibrated to stage and sector."

[SCREEN: WACC section appears. Beta, risk-free rate, equity risk premium all listed with values AND sources noted inline. Orange highlight box around the final WACC figure: 12.4%.]

[ANIMATION: WACC MOMENT — Freeze frame on the WACC section. Bold orange callout arrow pointing to the WACC figure. Text overlay: "Every assumption labeled. Nothing hidden." Hold for 2 seconds.]

NARRATOR: "Here's the aha moment — the WACC section. Weighted Average Cost of Capital. This is normally where people either copy a number from somewhere else or spend an hour arguing about beta. The skill has calculated a WACC of 12.4 percent — and it's shown every input: risk-free rate, equity risk premium, beta, cost of debt, capital structure. Every assumption is labeled. You can agree or disagree with each one. That's the right way to build a model."

[SCREEN: Terminal value section streams in. Both exit multiple method and perpetuity growth method shown side by side.]

NARRATOR: "Terminal value — done two ways. Exit multiple method using a 6x ARR multiple, which is conservative for high-growth SaaS. Perpetuity growth method using a 3 percent long-run growth rate. When the two methods produce a similar range, that's a good sign your assumptions are internally consistent. They do here."

### Step 4 — Review the Output [7:00-8:00]

[SCREEN: Scroll back to the top of the model output. Slow, deliberate scroll through every section. Use cursor to highlight key rows.]

NARRATOR: "Let's do a quick review pass. Revenue projections — Loopline goes from 1.4 million ARR in year zero to 12.8 million in year five. That's a 55 percent CAGR, which is steep but defensible given the historical acceleration from 180k to 620k to 1.4M. The growth rate steps down over time — 85%, 65%, 50%, 40%, 30% — which is realistic modeling, not hockey stick fantasy."

[SCREEN: EBITDA bridge section. Highlight the year where EBITDA turns positive.]

NARRATOR: "EBITDA bridge — they go EBITDA-positive in year three at around 8 percent margin. That's when S&M spend starts to leverage. Solid for a company still in growth mode."

[SCREEN: Scroll to the final equity value range. Two methods produce a range: $28M to $36M enterprise value.]

NARRATOR: "Enterprise value range: 28 to 36 million. That's a meaningful output. A founder walking into a Series A conversation can use this to anchor valuation expectations."

[SCREEN: The assumptions section at the bottom of the model. Multiple bullet points flagging uncertain assumptions in a different color or with explicit labels.]

NARRATOR: "And notice this — the skill called out three assumptions as 'aggressive or uncertain.' Churn rate. Net revenue retention. Year five growth. That's intellectual honesty built into the model. A good analyst does this. Now Claude does it too."

### Step 5 — Iterate: Adjust the Growth Assumption [8:00-9:00]

[SCREEN: New message box below the model output. Type a follow-up prompt.]

NARRATOR: "Let's iterate. Say our investor is skeptical of the growth rate — wants to see what happens in a conservative scenario. I'll ask Claude to rerun with tighter assumptions."

[SCREEN: Type and send:]

```
Run a conservative scenario: cap year-over-year growth at 40% starting in year 2,
increase churn assumption to 8% annually, and reduce NRR to 108%.
Show me the revised enterprise value range and flag which line items changed most.
```

[SCREEN: Claude processes and returns the revised model. New enterprise value range: $18M to $23M. Side-by-side comparison table appears showing base case vs. conservative case.]

NARRATOR: "Conservative scenario: enterprise value drops to 18 to 23 million. The delta is mostly driven by revenue — churn and NRR compound out over five years in a way that really shows up in terminal value. Claude has flagged the three biggest drivers of the change: revenue in years 4 and 5, gross profit margin, and the terminal growth assumption. That's exactly what you'd want a senior analyst to tell you."

[SCREEN: Brief pause on the comparison table. Viewer has time to absorb the before/after numbers.]

### Step 6 — Final Model [9:00-9:30]

[SCREEN: Scroll through the complete final output — both scenarios visible. Clean formatting. Every section present.]

NARRATOR: "This is the deliverable. Base case, conservative case, every assumption documented, WACC calculated, terminal value done two ways, equity value range produced. From one paragraph to board-ready financial model in under three minutes. That is what this skill does."

---

## RESULTS + VARIATIONS [9:30-11:00]

[SCREEN: Side-by-side split screen. Left: the original one-paragraph Loopline brief — 97 words. Right: the complete DCF model output — scrolling slowly to show its full length. Orange dividing line between the two panels.]

NARRATOR: "Ninety-seven words in. A complete DCF model out. That's the before and after."

[B-ROLL: Finance professional at a laptop, nodding slightly, reading a printed document. Coffee cup nearby. Comfortable, not stressed.]

NARRATOR: "But let's talk about what else this skill is perfect for — because DCF is just one mode."

[ANIMATION: Three cards fade in from left to right, each with an icon (simple line icon), title, and one-sentence description. Dark background, orange card borders.]

NARRATOR: "Scenario planning for board decks. You've got your base model — now you need a bull case and a bear case for the board presentation. The skill can generate all three scenarios with a single prompt, producing a structured comparison table that drops straight into a slide."

[SCREEN: Quick clip of Claude generating a three-scenario comparison table for a different business. 10 seconds.]

NARRATOR: "Budget variance analysis. You have actuals vs. budget. Feed Claude both — as a table, in plain text, however you have it — and ask for a variance model with root cause flags. The skill will structure the output and call out the largest drivers. Great for monthly finance reviews."

[SCREEN: Quick clip of Claude building a variance table. 10 seconds.]

NARRATOR: "SaaS unit economics. LTV, CAC, payback period, magic number — these aren't DCF, but they're all financial modeling. The skill handles unit economics natively. Great for growth-stage companies that are more focused on unit metrics than enterprise value."

[SCREEN: Quick clip of a unit economics output with LTV/CAC ratio highlighted. 10 seconds.]

NARRATOR: "762 installs and counting. This is one of the most-used financial skills in the ecosystem — because financial modeling is universally painful and Claude is genuinely good at structured quantitative reasoning when you give it the right framework."

---

## WRAP-UP + CTA [11:00-12:00]

[SCREEN: Return to the completed Loopline DCF model. Slow final scroll. Orange cursor highlight traces down the key figures.]

NARRATOR: "Let's recap. The creating-financial-models skill from Smithery.ai lets Claude build structured financial models from plain English business descriptions. We took a one-paragraph brief for Loopline, a B2B SaaS startup, and produced a complete DCF — five-year revenue projections, cost structure, WACC, terminal value, and an enterprise value range — in under three minutes. Then we ran a conservative scenario in 30 seconds more. Every assumption labeled. Every uncertain input flagged."

[SCREEN: Show the install command one final time, large and centered, dark background, orange text.]

```
npx @smithery/cli@latest skill add anthropics/creating-financial-models
```

NARRATOR: "Install command is right there — one line, runs in seconds. All links are in the description below — the Smithery skill page, the GitHub repo for this series."

[SCREEN: Two clean link cards appear side by side:]
NARRATOR: "Smithery skill page: smithery.ai/skills/anthropics/creating-financial-models"
NARRATOR: "GitHub: github.com/agentfactory/anthropic-skills-showcase"

[B-ROLL: Quick shot of a subscribe button being clicked. Clean, minimal.]

NARRATOR: "If this saved you some time — or if you know someone who spends too many hours rebuilding the same financial models — hit subscribe. We're covering all 95 skills in the catalog. There's a lot more coming."

[SCREEN: Episode 04 teaser card fades in — dark background, blue accent, "Episode 04" label, skill name "pptx" large in Poppins.]

NARRATOR: "Next episode: pptx. We take a single product brief — one page, plain text — and turn it into a polished 10-slide investor deck. No PowerPoint required, no design skills required. Just a prompt. That's Episode 04. See you there."

[ANIMATION: End card — 10 seconds. Channel branding, subscribe button, last video card, playlist card. Dark background, orange accent line at bottom. "Anthropic Skills Showcase" in Poppins centered.]

---

## Word Count: ~1,820 words
## Sections: 6 | Timestamps: Accurate | Aha Moment: WACC section [6:00-6:20]
