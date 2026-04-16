# Episode 08: canvas-design — Design a Print-Ready Conference Poster in Claude

**Series:** A — Design & Creative | **Skill:** anthropics/canvas-design | **Duration:** ~12 min
**Skill URL:** https://smithery.ai/skills/anthropics/canvas-design
**Install:** `npx @smithery/cli@latest skill add anthropics/canvas-design`
**Target Audience:** Designers, marketers, event organizers, anyone who needs visual assets fast
**Use Case:** Design a print-ready 18x24 inch event poster for Signal 2025 — The Future of AI Infrastructure

---

## COLD OPEN [0:00–0:30]

**[SCREEN: Full-screen reveal — a stunning dark-navy conference poster. Bold white type. Electric blue accents. Four speaker names in a tight typographic grid. "SIGNAL 2025" in massive condensed capitals across the top. Bottom strip: date, venue, URL. The whole thing looks like it belongs in a gallery.]**

NARRATOR: That poster you're looking at right now — the one that looks like a design agency charged ten thousand dollars for it — was created in Claude. In about four minutes. With a text description and one install command.

**[SCREEN: Zoom in slowly on the poster, holding on the speaker names and date line]**

NARRATOR: No Figma. No Photoshop. No designer on retainer. Just an event brief, the canvas-design skill, and a single conversation.

**[SCREEN: Cut to terminal — command being typed]**

NARRATOR: In the next twelve minutes, I'll show you exactly how this works — start to finish.

**[ANIMATION: Orange line wipe transition]**

---

## INTRO [0:30–1:30]

**[ANIMATION: 5-second channel intro — "Anthropic Skills Showcase" logo reveal on dark background with orange accent]**

NARRATOR: Welcome to the Anthropic Skills Showcase. I'm working through every official Anthropic skill on Smithery — ninety-five of them — one episode at a time. Today we're in Series A, Design and Creative, and we're looking at **canvas-design**.

**[SCREEN: Smithery.ai canvas-design skill page scrolling slowly — highlight the install count: 443]**

NARRATOR: Four hundred and forty-three installs and counting. This skill teaches Claude to generate fully-rendered, visually designed HTML and CSS artifacts — layouts that actually look good, not just formatted text in a box.

**[B-ROLL: Split-screen — left side shows a generic "designed in Claude" chat output with bland formatting. Right side shows a richly designed poster-style artifact with typography, color, hierarchy.]**

NARRATOR: There's a huge difference between Claude generating content and Claude generating design. Most people only ever get the first one. canvas-design unlocks the second.

**[B-ROLL: Quick cuts — event flyer on a coffee table, printed poster on a brick wall, conference booth with signage]**

NARRATOR: Whether you're organizing an event, building a marketing campaign, or just need a one-pager that doesn't look like it was formatted in Google Docs — this skill is for you.

**[ANIMATION: Orange line wipe]**

---

## SKILL DEEP DIVE [1:30–3:30]

**[SCREEN: Terminal, dark mode, 16pt+ font]**

NARRATOR: One command. Let's run it.

**[SCREEN: Typewriter animation]** `npx @smithery/cli@latest skill add anthropics/canvas-design`

**[SCREEN: Terminal output scrolling — package install progress, then: "canvas-design installed to .claude/skills/canvas-design/"]**

NARRATOR: That's it. The skill is now available in any Claude Code session. Let's look at what just landed.

**[SCREEN: VS Code — file tree showing `.claude/skills/canvas-design/SKILL.md` opening]**

NARRATOR: Every skill is one file — `SKILL.md`. The YAML frontmatter at the top is Claude's trigger logic. The markdown body is its operating manual.

**[SCREEN: Highlight the `description:` field in the frontmatter]**

NARRATOR: The description field is everything. It's what Claude reads to decide whether this skill applies to your current request. canvas-design's description covers requests for: visual designs, posters, flyers, landing pages, infographics, cards — anything where visual output matters more than text output.

**[SCREEN: Scroll to the "Output Format" or "Canvas Rules" section of SKILL.md]**

NARRATOR: The core principle of this skill is that Claude should treat every canvas request like a senior designer would. That means: hierarchy first, then typography, then color, then spacing. It also means the output is always a self-contained HTML artifact — no external dependencies, no CDN fonts that might break — everything embedded.

**[SCREEN: Highlight the section on print-ready output or high-resolution specs]**

NARRATOR: Here's the part that makes today's use case possible: canvas-design knows how to target print dimensions. You can specify physical units — inches, centimeters — and it will set up the CSS at the right scale for export. Eighteen by twenty-four inches — standard US poster size — works out of the box.

**[ANIMATION: Three-panel diagram slides in:]**
```
Event Brief  →  canvas-design skill  →  HTML/CSS artifact
(text)           (design intelligence)   (print-ready)
```

NARRATOR: You write the brief. Claude handles all the design decisions — layout, font pairing, color application, whitespace. Let's watch it happen.

**[ANIMATION: Orange line wipe]**

---

## LIVE DEMO [3:30–9:30]

**[SCREEN: Full-screen recording — dark-mode VS Code on left, Claude Code on right. Both panels visible.]**

### Step 1 — Read the brief [3:30–4:30]

**[SCREEN: VS Code — `conference-brief.md` opens. Denis scrolls slowly through the content.]**

NARRATOR: Here's our input. A realistic event brief for Signal 2025 — a fictional AI infrastructure conference in San Francisco. We've got a venue, date, four keynote speakers with titles and companies, a tagline, a preferred color palette — dark navy, electric blue, white — and a clear ask: eighteen by twenty-four inches, bold typographic style, must feel premium not corporate.

**[SCREEN: Cursor highlights the "specific ask" section of the brief]**

NARRATOR: That phrase — "premium not corporate" — is doing real work here. It's the kind of creative direction a designer would ask you to clarify. Let's see how canvas-design handles it.

### Step 2 — Invoke the skill [4:30–5:30]

**[SCREEN: Claude Code — Denis types the prompt]**

NARRATOR: I'm going to paste the full brief and ask Claude to produce the poster.

**[SCREEN: Typewriter effect showing the prompt being entered:]**
```
Use canvas-design to create an 18x24 inch print-ready poster for Signal 2025
using the attached event brief. Output as a self-contained HTML/CSS file.
Bold typographic style — premium, not corporate.
```

**[SCREEN: canvas-design banner activates in Claude Code UI]**

NARRATOR: There it is — the skill banner. Claude has loaded canvas-design and is now working in design mode, not text mode.

**[SCREEN: Output streaming — HTML/CSS code generating rapidly in the Claude Code window]**

NARRATOR: Watch the output. This isn't just structured text — it's producing a full HTML document with embedded CSS, custom font stacks, CSS Grid layout, and print-specific media queries. About two hundred lines of production-quality code.

### Step 3 — The aha moment — first render [5:30–6:30]

**[SCREEN: Claude Code finishes. Denis opens the output HTML file in a browser — full screen. The poster renders.]**

**[ANIMATION: Slow zoom in on the poster. Linger for 4 seconds.]**

NARRATOR: There it is.

**[SCREEN: Hold on the poster — full frame. The viewer can read the speakers, the date, the tagline.]**

NARRATOR: "SIGNAL 2025" in massive condensed capitals. The four keynote speakers in a tight typographic grid below. Date, venue, and URL anchored to the bottom. The whole composition sits on a deep navy background with electric blue as the accent color — exactly what the brief asked for.

**[SCREEN: Scroll down the poster slowly, like a camera pan]**

NARRATOR: This is the aha moment with canvas-design. You give it direction in plain English — premium, bold, typographic — and it makes the actual design decisions. The font weight, the tracking on the headings, the proportion of the speaker section to the header. This is design intelligence, not just code generation.

### Step 4 — Inspect the output [6:30–7:15]

**[SCREEN: Switch back to VS Code — the output HTML file open. Denis scrolls through the CSS.]**

NARRATOR: Let's look under the hood quickly. The CSS is using `@page` rules with physical dimensions for print. The layout is a CSS Grid — clean, no floats. Typography is handled with a system font stack that degrades gracefully but still looks sharp. And everything is self-contained — no network requests at print time.

**[SCREEN: Highlight the `@media print` section and the `@page` rule with `size: 18in 24in`]**

NARRATOR: That print media query is the key to making this usable in the real world. Open this in Chrome, hit print, select "Save as PDF" — you get a vector PDF ready for any print shop.

### Step 5 — Iterate: switch to a bold brutalist style [7:15–8:30]

**[SCREEN: Claude Code — Denis types a follow-up prompt]**

NARRATOR: Let's push the design further. The first version is clean and premium — but what if the client wants something more aggressive? More editorial?

**[SCREEN: Typewriter effect:]**
```
Revise the poster to a bold brutalist typographic style.
Increase contrast dramatically — near-black background, high-voltage yellow
as the accent instead of electric blue. Make the type bigger and rawer.
Reduce visual polish — this should feel like a zine, not a conference brochure.
```

**[SCREEN: canvas-design processes the update — new output streams]**

**[SCREEN: Denis opens the revised HTML file in the browser]**

NARRATOR: Same event, completely different energy.

**[SCREEN: Split-screen — Version 1 (navy/blue, premium) on the left, Version 2 (black/yellow, brutalist) on the right]**

NARRATOR: Left: polished conference branding. Right: brutal editorial impact. Two design directions, two minutes, same event brief. Neither of these required me to touch a design tool.

### Step 6 — Final check [8:30–9:30]

**[SCREEN: Denis reopens Version 1 in the browser. Uses Chrome's print dialog — "Save as PDF". The PDF preview shows in Chrome.]**

NARRATOR: Final step — validate the print output. I'll open Chrome's print dialog, set destination to "Save as PDF," make sure the paper size matches — eighteen by twenty-four, no scaling — and export.

**[SCREEN: PDF renders in Chrome's print preview — the poster fills the page perfectly]**

NARRATOR: The layout holds. Margins are clean. Nothing is cropped. That file goes straight to a print shop.

**[SCREEN: File manager — shows `signal-2025-poster-v1.pdf` and `signal-2025-poster-v2.pdf` sitting next to the HTML source files]**

NARRATOR: Two poster designs, two PDF exports, full brief to finished file — under eight minutes on the clock.

**[ANIMATION: Orange line wipe]**

---

## RESULTS + VARIATIONS [9:30–11:00]

**[SCREEN: Final poster Version 1 — full frame, 3 seconds]**

NARRATOR: Here's what we produced: a print-ready, 18-by-24-inch conference poster with a full speaker lineup, event details, and brand-consistent design — no design tool required, no external assets, a single self-contained HTML file.

**[SCREEN: Side-by-side: the conference-brief.md input on the left, the rendered poster on the right]**

NARRATOR: The gap between that brief — plain text, a couple of paragraphs — and that output is where canvas-design lives. It translated creative direction into actual design decisions.

**[B-ROLL: Montage — quick cuts of other design artifacts]**

NARRATOR: Now, posters are just one thing this skill can do. Here are three other places I'd reach for canvas-design immediately.

**[SCREEN: Render 1 — a product launch one-pager: clean white layout, product name, three feature callouts, pricing block, CTA button]**

NARRATOR: One — product launch one-pagers. You've got a feature, a price, a release date. Give canvas-design a brief and it produces a complete sales document you can share as a link or print.

**[SCREEN: Render 2 — a team org chart with color-coded departments, clean hierarchy visualization]**

NARRATOR: Two — org charts and visual hierarchies. Any structured data with a relational component — teams, project ownership, system architecture — canvas-design can render as a clean visual.

**[SCREEN: Render 3 — a branded social media card with quote text, speaker name, event logo placeholder, and a background gradient that matches conference branding]**

NARRATOR: Three — social media assets. Speaker announcement cards, quote graphics, countdown posts. Same event brief, same skill, different output dimensions and social-native proportions. One command to generate a suite of on-brand assets.

**[B-ROLL: Someone sending a PDF to a Slack channel; a Canva-style export button being clicked]**

NARRATOR: The pattern is always the same: write a clear brief, invoke canvas-design, iterate once or twice on style, export. That workflow replaces hours of design tool time for anything that isn't a truly bespoke brand identity project.

**[ANIMATION: Orange line wipe]**

---

## WRAP-UP + CTA [11:00–12:00]

**[SCREEN: Split final frame — install command on the left, the Signal 2025 poster on the right]**

NARRATOR: canvas-design is Anthropic skill number eight, Series A. Here's what you saw today: a full design brief turned into a production-ready poster in under eight minutes. Two visual directions from a single iteration. A PDF ready for any print shop or screen.

**[SCREEN: Install command in large text on dark background with orange highlight]**

`npx @smithery/cli@latest skill add anthropics/canvas-design`

NARRATOR: That's all it takes to install it. One command. Then the next time you describe a visual you need — a poster, a one-pager, an org chart, a social card — Claude reaches for the skill automatically.

**[B-ROLL: Someone running the install command, then immediately describing a design in natural language to Claude]**

NARRATOR: If you want to follow along with the exact brief I used today — the Signal 2025 conference files — they're all in the episode folder on GitHub. Link in the description.

**[SCREEN: GitHub URL appears:]**
`github.com/agentfactory/anthropic-skills-showcase`

NARRATOR: Subscribe if you want to see all ninety-five skills. We're releasing one a week — every skill in Series A is design and creative, so if this episode was useful, the next few are going to be even more so.

**[ANIMATION: End card — channel logo, subscribe button, two video thumbnails (Ep 07 and Ep 09)]**

NARRATOR: Next week: Episode Nine — **interactive-dashboard-builder**. We take a raw CSV — messy sales data, nothing formatted — and turn it into a fully interactive dashboard with filters, charts, and drill-down. If you've ever sent a spreadsheet when you really needed a dashboard, you'll want that one.

**[SCREEN: Skill link and GitHub link appear side by side]**

NARRATOR: Skill link: smithery.ai/skills/anthropics/canvas-design. GitHub for all episode files: github.com/agentfactory/anthropic-skills-showcase. See you next week.

**[ANIMATION: Channel logo holds, orange accent fades to black]**

---

*Word count: approx 1,820 words*
