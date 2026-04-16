# Episode 04: pptx — From Product Brief to Investor Deck in Under Six Minutes

**Series:** B — Documents & Files | **Skill:** anthropics/pptx | **Duration:** ~12 min
**Skill URL:** https://smithery.ai/skills/anthropics/pptx
**Install:** `npx @smithery/cli@latest skill add anthropics/pptx`
**Target Audience:** Founders, PMs, consultants — anyone who makes slide decks
**Use Case:** Paste a product brief, get a polished 10-slide investor deck as a .pptx file ready to open in PowerPoint.

---

## COLD OPEN [0:00–0:30]

**[SCREEN: 3-second close-up — a .pptx file icon in Finder/Explorer double-clicks open. PowerPoint launches. A fully formatted investor deck fills the screen — title slide, clean dark theme, orange accent bars, professional layout. Slides flip past: Problem, Solution, Market, Traction.]**

NARRATOR: That's a ten-slide investor deck. Title, problem, solution, market size, product, traction, team, roadmap, financials, CTA — fully formatted, slide transitions, consistent branding.

**[SCREEN: Zoom out to reveal the Claude Code session. The only input visible is a plain-text product brief. One prompt. One command. No PowerPoint open, no Canva, no templates dragged and dropped.]**

NARRATOR: That whole thing came from a four-hundred-word product brief, one Claude prompt, and exactly zero minutes in PowerPoint. Let me show you how.

**[ANIMATION: Orange line wipe transition]**

---

## INTRO [0:30–1:30]

**[ANIMATION: 5-sec channel intro — "Anthropic Skills Showcase" logo reveal on dark background, orange accent]**

NARRATOR: Welcome back to the Anthropic Skills Showcase — I'm walking through all 95 official Anthropic skills on Smithery, one episode at a time. I'm Denis, and today we're in Series B: Documents and Files.

**[SCREEN: Smithery.ai pptx skill page scrolls slowly — highlight install count: 718]**

NARRATOR: Episode 04 is the `pptx` skill. Seven hundred and eighteen installs, and the people who have it are never going back to building decks by hand. This skill generates real `.pptx` files — not a PDF, not a screenshot, an actual PowerPoint file you can open, edit, and send.

**[B-ROLL: Fast cuts — someone spending an hour dragging shapes around in PowerPoint, adjusting font sizes, aligning boxes. Cut to: same person looking at a finished deck on screen, confused about where the time went.]**

NARRATOR: If you've ever lost two hours of your life kerning a slide deck the night before a pitch, this episode is for you. The skill is for founders preparing investor materials, PMs putting together roadmap reviews, consultants building client deliverables, or anyone who needs a structured, professional deck quickly.

**[ANIMATION: Orange line wipe]**

---

## SKILL DEEP DIVE [1:30–3:30]

**[SCREEN: Terminal, dark mode, large font]**

NARRATOR: Install it with one command:

**[SCREEN: Typewriter effect — command appears character by character]**
`npx @smithery/cli@latest skill add anthropics/pptx`

NARRATOR: That drops a `pptx/` folder into `.claude/skills/`. Let's open the SKILL.md and see what we're working with.

**[SCREEN: VS Code — `.claude/skills/pptx/SKILL.md` opens. Frontmatter block is visible at the top.]**

NARRATOR: Same structure as every Anthropic skill — YAML frontmatter at the top, markdown instructions below. The frontmatter tells Claude when to activate. The instructions tell it what to build.

**[SCREEN: Highlight the `description:` field in the frontmatter]**

NARRATOR: The description is the activation trigger. It's looking for phrases like "create a presentation," "make a slide deck," "PowerPoint," or "investor deck." Specific enough that it doesn't fire on every request, broad enough to catch the variations you'll actually type.

**[SCREEN: Scroll down to the features section of SKILL.md]**

NARRATOR: What does it actually do? It creates fully structured `.pptx` files with real slide layouts — master slides, consistent fonts, color themes. It handles standard deck sections: title, agenda, content slides, two-column comparisons, full-bleed image slides, and closing CTAs. The output is native OOXML — open it in PowerPoint, Keynote, or Google Slides and every element is editable.

**[SCREEN: Highlight the slide-structure section — numbered list of supported layouts]**

NARRATOR: The skill also understands deck intent. Feed it an investor brief and it knows to structure around problem-solution-market-traction. Feed it a product roadmap and it builds a timeline. Feed it a sales deck and it leads with the value prop. The intelligence is in how you prompt it, which we're about to see.

**[ANIMATION: Three-box flow diagram slides in — "Product Brief" → "pptx skill" → ".pptx file". Arrow colors: white, orange, white.]**

NARRATOR: The whole workflow is: write a brief, invoke the skill, open the file. No intermediate steps. Let's do it live.

**[ANIMATION: Orange line wipe]**

---

## LIVE DEMO [3:30–9:30]

**[SCREEN: Full-screen recording begins — dark-mode terminal + VS Code side by side at 1080p]**

### Step 1 — Show the input [3:30–4:30]

**[SCREEN: Open `use-case/input/product-brief.md` in VS Code. Scroll through at a readable pace.]**

NARRATOR: Here's our input — a product brief for a fictional company called Stackline. AI-powered sales pipeline tool, three-million-dollar seed round, targeting a Series A. About four hundred words. Plain markdown, no special formatting, no slide structure — exactly what a founder might write in Notion the week before a pitch.

**[SCREEN: Pause on the company description paragraph, then the traction section, then the ask]**

NARRATOR: There's company context, problem, solution, some early traction numbers, and a funding ask. This is the kind of brief that usually gets turned into a deck via three hours in Canva and a lot of second-guessing. We're going to skip all of that.

### Step 2 — Install and invoke the skill [4:30–5:30]

**[SCREEN: Switch to terminal. Run the install command.]**

NARRATOR: If you haven't installed the skill yet, one line:

**[SCREEN: Typewriter]** `npx @smithery/cli@latest skill add anthropics/pptx`

**[SCREEN: Install completes. Switch to Claude Code session. Empty context, new project directory.]**

NARRATOR: Now I open Claude Code in a fresh directory and give it this prompt:

**[SCREEN: Typewriter — prompt appears as Denis types it]**
```
Use the pptx skill to create a 10-slide investor deck for Stackline
based on the product brief in product-brief.md. The deck should include:
title slide, problem, solution, market size, product overview, traction,
team, roadmap, financials, and closing CTA. Use a dark theme with orange
accents. Output as stackline-investor-deck.pptx.
```

**[SCREEN: Hit enter. pptx skill activation banner appears at the top of Claude Code.]**

NARRATOR: There's the activation — Claude is loading the pptx skill into context. Watch the response.

**[SCREEN: Claude's response starts streaming — it's confirming the structure, listing the ten slides it will build.]**

### Step 3 — Watch it build [5:30–7:00]

**[SCREEN: Claude streams its work — showing slide-by-slide construction. Highlight key moments: "Creating title slide...", "Building market size slide with TAM/SAM/SOM breakdown...", "Generating financial projections slide..."]**

NARRATOR: It's not just filling in a template — look at what it's doing with the market size slide. It's reading the TAM and SAM numbers from the brief and laying them out in a three-column structure. The financials slide — it's pulling the ARR growth figures and formatting them as a progression.

**[SCREEN: Claude completes — "stackline-investor-deck.pptx created" message appears. File visible in the directory tree.]**

NARRATOR: Done. Sixty-two seconds from prompt to file.

### Step 4 — The aha moment [7:00–8:00]

**[SCREEN: Double-click the .pptx file. PowerPoint opens. The title slide loads — "Stackline" in large Poppins-style type on a dark background, orange accent bar below, subtitle "Investor Deck | Series A"]**

**[ANIMATION: Slow zoom into the title slide, orange glow highlight effect around the slide thumbnail in the deck panel]**

NARRATOR: This is the moment. A real PowerPoint file. Not a PDF with locked elements, not a screenshot — every text box is editable, every shape is a native PowerPoint object. Click on the title and type.

**[SCREEN: Click through the slides one by one — Problem, Solution, Market, Product, Traction, Team, Roadmap, Financials, CTA. Each slide has consistent dark background, orange headline bars, proper typography hierarchy.]**

NARRATOR: Ten slides, consistent design, proper hierarchy on every slide. The team slide pulled the names from the brief and laid them out in a two-column grid. The roadmap is a three-column Q1/Q2/H2 structure. The financials are a table with the numbers from the brief already in place.

**[SCREEN: Close-up on the traction slide — metrics formatted as large pull-quote numbers with labels below]**

NARRATOR: Look at the traction slide. It took the raw numbers from the brief and formatted them as hero metrics — the format every investor deck should use. That would have taken me twenty minutes of alignment work in PowerPoint.

### Step 5 — Iterate: change the color theme [8:00–9:00]

**[SCREEN: Switch back to Claude Code. Type the follow-up prompt.]**

NARRATOR: The deck looks sharp, but let me show you the refinement loop. The client wants a lighter version — blue accents instead of orange.

**[SCREEN: Typewriter]**
```
Update stackline-investor-deck.pptx: change the accent color from orange
to #6a9bcc (muted blue) throughout all slides. Keep the dark background.
Regenerate the file.
```

**[SCREEN: Claude processes the request. New file writes. Double-click the updated file — same structure, now with blue accent bars instead of orange. Side-by-side with the original.]**

NARRATOR: Same structure, new palette. This is the iteration loop — you don't go back to zero, you describe the delta and Claude regenerates. Forty seconds for a full color theme change.

### Step 6 — Final result [9:00–9:30]

**[SCREEN: Split view — the original product brief on the left, the open PowerPoint deck on the right, clicking through slides]**

NARRATOR: From this — a plain-text brief — to this — a ten-slide investor deck ready to send. No templates, no dragging, no alignment guides. Under six minutes including the color theme iteration.

**[ANIMATION: Orange line wipe]**

---

## RESULTS + VARIATIONS [9:30–11:00]

**[SCREEN: The final deck displayed full-screen, slides cycling at 2 seconds each]**

NARRATOR: What we just built: a complete, investor-ready PowerPoint deck from a plain-text brief in under six minutes. Every slide formatted, every number pulled from the source, consistent theme throughout. The file is fully editable — send it to your co-founder, your designer, your VC — whoever touches it next works on a real PowerPoint file, not a locked export.

**[SCREEN: Three use-case cards animate in sequentially — orange accent left border on each card]**

NARRATOR: And pptx isn't only for pitch decks. Three other things I'd use it for immediately:

**[SCREEN: Card 1 — "Board Meeting Update"]**

NARRATOR: First — **board update decks**. Every quarter, same structure: last quarter's numbers, this quarter's priorities, asks for the board. Feed the skill a bullet list of your OKR progress and get a formatted boardroom deck in the same time it takes to make a coffee.

**[SCREEN: Card 2 — "Client Deliverable"]**

NARRATOR: Second — **consulting deliverables**. You've finished the analysis, you have the findings in a doc. Instead of spending half a day translating it into a client deck, paste the findings section into Claude and ask for a five-slide executive summary. The skill handles the layout, you handle the thinking.

**[SCREEN: Card 3 — "Product Roadmap Review"]**

NARRATOR: Third — **product roadmap reviews**. A list of features, priorities, and quarters becomes a timeline slide, a priority matrix, and a "what we're not doing" slide — the three things every roadmap review actually needs.

NARRATOR: Anywhere you're turning structured information into slides, this skill replaces the busywork. The thinking is still yours. The formatting isn't.

**[ANIMATION: Orange line wipe]**

---

## WRAP-UP [11:00–12:00]

**[SCREEN: End card begins animating — dark background, brand colors, skill name prominent]**

NARRATOR: Recap: the `pptx` skill turns any structured brief into a real, editable PowerPoint file. Install it once, describe the deck you need, and open it in PowerPoint ninety seconds later.

**[SCREEN: Lower third — "Install: npx @smithery/cli@latest skill add anthropics/pptx" with orange background bar]**

NARRATOR: The install command, the skill link, and the full Stackline demo brief are all in the description below. Everything you saw in this episode is in the GitHub repo — the brief, the prompt, and the output deck.

**[SCREEN: Subscribe CTA card — "Hit subscribe if you're following the full 95-skill series"]**

NARRATOR: If you're working through this series with me, hit subscribe — we've got 91 more skills to cover and they get more interesting from here.

**[SCREEN: "Next up" card — "Episode 05: xlsx" with a preview thumbnail showing a messy CSV transforming into a clean Excel workbook with charts]**

NARRATOR: Next episode: the `xlsx` skill. We take an absolute disaster of a CSV spreadsheet — missing headers, mixed date formats, inconsistent categories — and turn it into a clean, formula-rich Excel workbook with charts. If you've ever inherited a spreadsheet from someone who had no business making spreadsheets, you'll want to see this one. See you there.

**[ANIMATION: 10-sec end card — logo, subscribe button, links]**

---

## Word count: ~1,810 words (target ~150 wpm → 12:04 narration)
