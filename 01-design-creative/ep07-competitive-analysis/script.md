# Episode 07: competitive-analysis — Map Your Market in 12 Minutes

**Series:** D — Sales & Marketing | **Skill:** anthropics/competitive-analysis | **Duration:** ~12 min
**Skill URL:** https://smithery.ai/skills/anthropics/competitive-analysis
**Install:** `npx @smithery/cli@latest skill add anthropics/competitive-analysis`
**Target Audience:** Sales reps, product managers, marketing teams, founders doing market research
**Use Case:** Build a full competitive brief for Flowdesk — a remote-team project management startup — benchmarking Asana, Monday.com, and Linear on positioning, pricing, features, and ICP fit.

---

## COLD OPEN [0:00–0:30]

**[SCREEN: Finished competitive brief — full-screen, dark mode. A 3-column comparison table scrolls slowly. Column headers: Asana / Monday.com / Linear. Rows: Positioning, Price per seat, Core ICP, Top 3 features, Key weakness, Differentiation gap. Orange highlight boxes glow on three "gap" cells in the final row.]**

NARRATOR: This is a competitive brief — positioning analysis, pricing comparison, ICP overlap, and a clear map of where the white space is. It took about six minutes to generate. And that table at the bottom? That's the part your sales team actually uses.

**[SCREEN: Quick cut — the same brief collapses to reveal a tight one-page battle card. Title: "Flowdesk vs. The Field — Sales Battle Card."]**

NARRATOR: We also turned it into a battle card. In twelve minutes, I'll show you exactly how.

**[ANIMATION: Orange line wipe transition]**

---

## INTRO [0:30–1:30]

**[ANIMATION: 5-sec channel intro — "Anthropic Skills Showcase" logo reveal on dark background, orange accent]**

NARRATOR: Welcome back to the Anthropic Skills Showcase. I'm working through all 95 official Anthropic skills on Smithery, and today we're in Series D: Sales and Marketing.

**[SCREEN: Smithery.ai competitive-analysis skill page scrolls slowly — highlight install count: 455]**

NARRATOR: The skill is `competitive-analysis` — 455 installs and growing fast. And honestly, after running it today, I understand why.

**[B-ROLL: Someone with multiple browser tabs open — a Notion doc, a spreadsheet, a competitor's pricing page, a G2 review page. The cursor moves back and forth between tabs, slowly building out a half-finished comparison table.]**

NARRATOR: Here's the before state most teams live in. You've got a spreadsheet. You've got tabs. You've got a Notion page that nobody updates. You've got a VP of Sales pinging you for a battle card thirty minutes before a demo. Sound familiar?

**[SCREEN: Zoom out to reveal the spreadsheet is 40% empty with a "last updated: 6 months ago" header.]**

NARRATOR: Competitive research is the work that's always urgent, rarely current, and almost never structured for the person who actually needs to use it. The skill we're installing today fixes that.

**[ANIMATION: Orange line wipe]**

---

## SKILL DEEP DIVE [1:30–3:30]

**[SCREEN: Terminal, dark mode, large font]**

NARRATOR: One command. This is all you need to get started:

**[SCREEN: Typewriter effect, orange highlight on command]**
```
npx @smithery/cli@latest skill add anthropics/competitive-analysis
```

**[SCREEN: Terminal output streams — "Installing competitive-analysis... Done. Skill added to .claude/skills/"]**

NARRATOR: That drops a `competitive-analysis/` folder into your `.claude/skills/` directory. As always, there's one file that matters: `SKILL.md`.

**[SCREEN: VS Code opens — `.claude/skills/competitive-analysis/SKILL.md` loads. Frontmatter visible at top.]**

NARRATOR: The frontmatter is Claude's trigger logic. The description field tells Claude when to reach for this skill. Let's look at what it says.

**[SCREEN: Zoom in on description field in SKILL.md frontmatter — highlighted in orange]**

NARRATOR: It's listening for "competitive analysis," "compare competitors," "market positioning," "competitor research brief" — and a handful of variations. The moment you ask Claude to compare or benchmark a product against the market, this skill activates.

**[SCREEN: Scroll down to the body of SKILL.md — highlight the "Output Structure" section]**

NARRATOR: The skill's output structure is where this gets interesting. It doesn't just dump a paragraph about each competitor. It forces a consistent schema: positioning statement, pricing tier, core ICP, top strengths, key weakness, and — this is the part I really like — a differentiation gap for you to own.

**[SCREEN: Highlight the "Differentiation Gap" field definition in SKILL.md — orange callout box]**

NARRATOR: Every competitor analysis entry ends with the question: "What does this competitor not do well that you could own?" That framing alone is worth the install.

**[ANIMATION: Three-box diagram slides in from left — boxes labeled "Structured Input," "Consistent Schema," "Actionable Output (brief + battle card)." Arrows connect them left to right. Orange accents.]**

NARRATOR: The workflow is: you give it structured context, it returns a consistent schema, and you can then ask it to reformat that schema into any artifact you need — brief, battle card, exec summary, whatever.

**[ANIMATION: Orange line wipe]**

---

## LIVE DEMO [3:30–9:30]

**[SCREEN: Full-screen recording begins — dark-mode Claude Code session, VS Code open in split-pane on the right]**

### Step 1 — Show the research brief [3:30–4:30]

**[SCREEN: Open `use-case/input/competitor-research-prompt.md` in VS Code. Scroll through the full document.]**

NARRATOR: Here's the input I'm working with. This is a research brief for a fictional startup called Flowdesk — async project management for remote teams, twenty-nine dollars per seat per month. I've listed the three competitors I want analyzed: Asana, Monday.com, and Linear. And I've written out exactly what I want to know: positioning gaps, pricing comparison, feature whitespace, and ICP overlap.

**[SCREEN: Scroll to the "Specific Questions" section of the brief. Highlight the five numbered questions.]**

NARRATOR: Specific, scoped, and structured. That's the input. Now let's see what comes out.

### Step 2 — Paste the brief and activate the skill [4:30–5:30]

**[SCREEN: Claude Code session. Copy-paste the full content of competitor-research-prompt.md into the input field.]**

NARRATOR: I paste the full brief into Claude Code. No special command needed — the skill activates on context.

**[SCREEN: Orange callout box on competitive-analysis activation banner at top of Claude Code UI]**

NARRATOR: There it is — the skill loads automatically. Claude is now running the structured competitive-analysis workflow. Watch what happens next.

### Step 3 — First output streams in [5:30–7:00]

**[SCREEN: Claude's response streams in — structured markdown with three competitor sections. Each section has: positioning, price, ICP, strengths, weakness, differentiation gap. Text streams at reading pace, not instant.]**

NARRATOR: The output is organized by competitor. Asana first — notice it calls out the positioning as "enterprise workflow management" and marks the weakness as "implementation complexity, especially for teams under fifty people." That's not nothing — that's a sales handle.

**[SCREEN: Scroll to Monday.com section — highlight the ICP field and Differentiation Gap field]**

NARRATOR: Monday.com. ICP is "visual-first project managers, non-technical teams." Differentiation gap: "async-native workflows — Monday.com assumes synchronous collaboration by default." That is exactly the lane Flowdesk is trying to own.

**[SCREEN: Scroll to Linear section — highlight Pricing field and Weakness field]**

NARRATOR: Linear. Developer-first, flat pricing, beloved by engineering teams. Weakness: "limited adoption outside engineering." Gap: "cross-functional async — Linear doesn't try to bridge the eng-to-PM-to-design handoff."

**[SCREEN: Slow scroll to the bottom of the output — the 3-column comparison table comes into view]**

NARRATOR: And then — this is the moment. Scroll to the bottom.

**[ANIMATION: Orange pulse highlight spreads across the three "Differentiation Gap" cells in the comparison table — held for 3 seconds]**

NARRATOR: Three gaps, side by side. Async-native. Cross-functional handoffs. Sub-fifty-person teams. That's not a table — that's a positioning brief. Every cell in that last row is a sentence you can put in your pitch deck. That's the aha moment.

### Step 4 — Review the output quality [7:00–7:45]

**[SCREEN: Scroll back to top of output, highlight the structured schema on Asana section]**

NARRATOR: What I like about this output is the consistency. Every competitor entry follows the same schema, which means you can compare them cell by cell without your eyes jumping around. That's not easy to get from a raw prompt — it's what the skill enforces.

**[B-ROLL: Quick cut — someone at a whiteboard circling three bullet points labeled "async," "sub-50," "cross-functional." They look satisfied.]**

NARRATOR: Two minutes of reading and you know where to compete.

### Step 5 — Ask for the battle card [7:45–9:00]

**[SCREEN: Denis types a follow-up in Claude Code. Typewriter effect.]**

NARRATOR: Now for the iteration step. I want a version my sales team can actually print out before a call.

**[SCREEN: Typewriter]**
```
Based on this analysis, generate a one-page sales battle card for
Flowdesk. Format it as: top objection per competitor, Flowdesk's
best counter, and the single strongest differentiator to lead with.
```

**[SCREEN: Claude processes — new artifact streams in. Title: "Flowdesk vs. The Field — Sales Battle Card." Three sections, each with: Competitor, Top Objection, Counter, Lead Differentiator.]**

NARRATOR: And there's the battle card. This is what the sales rep opens ten minutes before the demo. "The prospect is already using Asana." Here's your objection. Here's your counter. Here's the one line you lead with.

**[SCREEN: Zoom in on the Asana row — highlight the "Lead Differentiator" cell: "Flowdesk is designed for teams that are already remote-first, not for companies retrofitting remote onto a legacy workflow."]**

NARRATOR: That's a sentence. That's a trainable, repeatable sentence. That's the difference between competitive research that lives in a doc and competitive intelligence that ships to the field.

### Step 6 — Final output [9:00–9:30]

**[SCREEN: Side-by-side — the full competitive brief on the left, the battle card on the right. Both visible at once.]**

NARRATOR: Six minutes from a blank session to two production-ready artifacts. The brief for the strategy team. The battle card for the field. One prompt, one refinement, done.

**[ANIMATION: Orange line wipe]**

---

## RESULTS + VARIATIONS [9:30–11:00]

**[SCREEN: The comparison table — full-screen, dark mode. Hold for 3 seconds, then fade to brand card layout.]**

NARRATOR: What we built: a competitive brief covering three competitors across six dimensions, a differentiation gap analysis, and a single-page battle card — all in under six minutes of active work.

**[SCREEN: Three use-case cards animate in one by one — orange headings, dark cards]**

NARRATOR: And this skill goes well beyond project management. Here are three other scenarios where I'd drop it immediately:

**[SCREEN: Card 1 animates in — heading: "Fundraising prep"]**

NARRATOR: One — fundraising. Before your next investor meeting, run your three closest competitors through this skill. Investors always ask "how are you different from X?" — now you have a structured, honest answer for each one.

**[SCREEN: Card 2 animates in — heading: "Product roadmap prioritization"]**

NARRATOR: Two — product roadmap. Feed in your competitors, ask it to map their feature footprint, and you'll see the whitespace your roadmap should be targeting. Better than scrolling G2 reviews for an afternoon.

**[SCREEN: Card 3 animates in — heading: "Sales onboarding"]**

NARRATOR: Three — sales onboarding. New rep starts Monday. Instead of handing them a six-month-old PDF, run the skill and hand them a current brief and a fresh battle card on day one.

**[ANIMATION: Orange line wipe]**

---

## WRAP-UP + CTA [11:00–12:00]

**[SCREEN: End card begins building in — dark background, orange accent line at top]**

NARRATOR: Let's recap. The `competitive-analysis` skill gives Claude a structured workflow for researching competitors, organizing the output into a consistent schema, and repackaging it into whatever artifact you need — brief, battle card, exec summary, onboarding doc.

**[SCREEN: Lower third slides up — "Install:" followed by the command in orange monospace font]**
```
npx @smithery/cli@latest skill add anthropics/competitive-analysis
```

NARRATOR: One command and it's live in your Claude environment. Link in the description.

**[SCREEN: Two-column layout — left: link to skill on Smithery; right: GitHub repo link]**

NARRATOR: Skill page, install command, and the full demo files — including the Flowdesk research brief you can adapt for your own company — all in the description below.

**[SCREEN: Subscribe button animates in with orange accent]**

NARRATOR: If this helped you think about how to make competitive research actually useful, hit subscribe. New episode every week — we're working through all 95 skills on this channel.

**[SCREEN: "Next up" episode card slides in from right — dark card, orange border, thumbnail preview area]**

NARRATOR: Next episode: `canvas-design`. We start with a blank canvas and build a museum-quality conference poster from scratch — layout, typography, imagery, all of it — entirely inside Claude. If you've ever fought with Canva or InDesign for three hours over something that should take thirty minutes, you'll want that one.

**[ANIMATION: 10-sec end card — Anthropic Skills Showcase logo, subscribe CTA, Smithery link, GitHub link]**

**[SCREEN: Links on end card:]**
- Skill: https://smithery.ai/skills/anthropics/competitive-analysis
- GitHub: https://github.com/agentfactory/anthropic-skills-showcase

---

## Word count: ~1,820 words (target ~150 wpm → 12:08 narration)
