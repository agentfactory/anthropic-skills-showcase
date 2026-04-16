# Episode 06: frontend-design — Build a Production SaaS Landing Page in One Prompt

**Series:** A — Design & Creative | **Skill:** anthropics/frontend-design | **Duration:** ~12 min
**Skill URL:** https://smithery.ai/skills/anthropics/frontend-design
**Install:** `npx @smithery/cli@latest skill add anthropics/frontend-design`
**Target Audience:** Designers, marketers, founders, no-code builders — anyone who needs polished web UI fast
**Use Case:** Build a complete, production-ready SaaS landing page for fictional AI writing tool Draftly — hero, features grid, pricing table, testimonials, and CTA — from a single paragraph brief.

---

## COLD OPEN [0:00–0:30]

**[SCREEN: Full-screen browser preview of the finished Draftly landing page — hero loads first, then a slow scroll reveals the features grid, pricing cards, testimonial row, and the final CTA button glowing on dark background]**

NARRATOR: That is a production-ready SaaS landing page — hero, features, pricing, testimonials, CTA — fully responsive. I did not write a single line of HTML.

**[SCREEN: Quick montage — 3 clips, 3 seconds each]**
- Clip 1: A plain text brief in a markdown file — seven sentences
- Clip 2: A single prompt typed into Claude Code
- Clip 3: The browser preview snapping open with the finished page

NARRATOR: One paragraph. One prompt. Twelve minutes. Let me show you how.

**[ANIMATION: Orange line wipe transition]**

---

## INTRO [0:30–1:30]

**[ANIMATION: 5-sec channel intro — "Anthropic Skills Showcase" logo reveal on dark background, orange accent]**

NARRATOR: Welcome back to the Anthropic Skills Showcase — we go through all 95 official Smithery skills so you know exactly what to reach for. I'm Denis, and today's skill is **frontend-design**: a skill that turns natural-language briefs into complete, styled, production-quality web pages.

**[SCREEN: Smithery.ai frontend-design skill page — slow scroll, highlight the install count: 488]**

NARRATOR: Nearly five hundred installs already — and once you see it in action, that number will make sense. The problem this solves is real: every founder, marketer, and designer I know has the same story. They know what the page should feel like. They can describe it in plain English. But getting from that description to actual HTML is where the whole day disappears.

**[B-ROLL: Someone toggling between a Figma frame and a blank VS Code file, clearly stuck on the gap between design and code]**

NARRATOR: You can hire a developer, wait two days, and get something that's 70% of what you described. Or you can describe it once to Claude and have it in the browser in under ten minutes. That's the value proposition of this skill.

**[B-ROLL: Side-by-side — a paragraph of text on the left, a rendered landing page on the right]**

NARRATOR: And today we're building for a fictional product called **Draftly** — an AI writing assistant for marketing teams. By the end of this demo, we'll have the full page: hero, features, pricing, testimonials, CTA. Let's get into it.

**[ANIMATION: Orange line wipe]**

---

## SKILL DEEP DIVE [1:30–3:30]

**[SCREEN: Terminal, dark mode, large font — VS Code integrated terminal]**

NARRATOR: Install is one command. Here it is:

**[SCREEN: Typewriter effect]** `npx @smithery/cli@latest skill add anthropics/frontend-design`

NARRATOR: That pulls the skill into your `.claude/skills/` directory. From that point on, Claude knows about it — and will reach for it automatically any time you describe something visual.

**[SCREEN: VS Code file tree expands — `.claude/skills/frontend-design/SKILL.md` opens]**

NARRATOR: Let's look inside. Every skill is one file: `SKILL.md`. The YAML frontmatter is Claude's trigger logic — the `description` field is what tells Claude when to activate this skill versus any other. And the body is the actual design system Claude works from.

**[SCREEN: Zoom in on the frontmatter — `name: frontend-design`, `description:` field highlighted]**

NARRATOR: The description tells Claude to activate this skill when you ask for anything involving web UI, landing pages, dashboards, component design, or visual layout. It's deliberately broad — because this skill handles all of those.

**[SCREEN: Scroll down through SKILL.md body — highlight the sections: color handling, typography, responsiveness, component library]**

NARRATOR: Now look at what the body contains. There's a full design system baked in — sensible defaults for color contrast, spacing scales, Tailwind-compatible class patterns, and accessibility guidelines. When you give Claude a brief, it doesn't guess at typography — it follows a proven system.

**[SCREEN: Highlight the "Output Format" section of SKILL.md]**

NARRATOR: One important detail: the default output is a single self-contained HTML file — inline CSS, inline JavaScript, no build step required. You open it in a browser and it just works. If you want separate files or a React component, you ask for that explicitly — but the zero-config output is brilliant for speed.

**[ANIMATION: Workflow diagram slides in — three boxes: "Plain English brief" → "frontend-design activates" → "browser-ready HTML"]**

NARRATOR: Brief in. Page out. Let's go build Draftly.

**[ANIMATION: Orange line wipe]**

---

## LIVE DEMO [3:30–9:30]

**[SCREEN: Full-screen recording begins — dark-mode VS Code on left, Chrome DevTools on right]**

### Step 1 — Open the brief [3:30–4:30]

**[SCREEN: Open `use-case/input/landing-page-brief.md` in VS Code — scroll slowly from top to bottom]**

NARRATOR: Here's what I'm handing to Claude. It's not a detailed spec — it's the kind of thing you'd write in ten minutes over coffee. Product name, target audience, tone, three feature bullets, three pricing tiers, and a color direction.

**[SCREEN: Zoom in on the brief's first paragraph]**

NARRATOR: "An AI writing assistant for marketing teams that drafts on-brand copy ten times faster." That's the whole hero headline, right there. The skill's job is to turn that intent into structure, layout, and code.

### Step 2 — Invoke the skill [4:30–5:30]

**[SCREEN: New Claude Code session. Type the prompt — typewriter effect as Denis narrates]**

NARRATOR: I open a fresh Claude Code session and type:

**[SCREEN: Typewriter]**
```
Use the frontend-design skill to build a complete SaaS landing page for Draftly using the brief in use-case/input/landing-page-brief.md. Include: hero with headline and CTA, features grid (3 features), pricing table (3 tiers), testimonials section (2 quotes), and a final CTA section. Output a single self-contained HTML file at use-case/output/draftly-landing.html.
```

**[SCREEN: The skill activation banner appears at the top of the Claude Code UI — zoom callout with orange border]**

NARRATOR: There — that banner. frontend-design just loaded into context. Claude now has the full design system available, not just its base knowledge. Watch what happens next.

### Step 3 — Watch it build [5:30–7:00]

**[SCREEN: Claude's response streams in — it narrates its plan first: color palette extraction, section order, component decisions]**

NARRATOR: Claude doesn't just start writing HTML — it surfaces its plan first. Notice it's reading the brand color preference from the brief, deciding on a dark-mode base, and laying out the section order. This planning step is intentional — it catches mismatches before any code is written.

**[SCREEN: Code streams into view — HTML doctype, then the CSS custom properties block]**

NARRATOR: Now the CSS variables block. Look at this — it's extracted the brand colors from the brief and set them as CSS custom properties at the root. Dark background, an orange-to-coral primary gradient, clean white body text. This is already better than most templates.

**[SCREEN: The hero section HTML appears — the headline, subheadline, and CTA button]**

NARRATOR: Hero section. The headline matches almost word for word what was in the brief. The CTA button has a hover state, a focus ring for accessibility, and it's using the gradient defined two hundred lines up.

**[SCREEN: Features grid code appears — CSS Grid with auto-fit columns]**

NARRATOR: Features grid — CSS Grid with auto-fit so it collapses gracefully to one column on mobile. Each card has an icon slot, a heading, and a body. No JavaScript required for any of this.

**[SCREEN: Pricing table code — three cards, center card highlighted as "Popular"]**

NARRATOR: Pricing. Three tiers, the center tier visually elevated. The popular badge is pure CSS — no library, no framework, no bundle. And look at this: the toggle between monthly and annual is handled with a CSS checkbox hack and a couple of adjacent sibling selectors. Forty lines of CSS, zero JS for the toggle.

**[SCREEN: Claude finishes writing — confirms file saved to `use-case/output/draftly-landing.html`]**

NARRATOR: File is written. Let's open it.

**[SCREEN: Terminal]** `open use-case/output/draftly-landing.html`

**[SCREEN: Browser snaps open — the full Draftly landing page loads instantly. Slow scroll from top to bottom. This is the AHA MOMENT.]**

NARRATOR: There it is. First try, zero errors, looks like a real product. Scroll with me — hero, features, pricing, testimonials, CTA. On a real screen, this would convert.

**[ANIMATION: Zoom callout with orange border on the pricing table — label: "AHA MOMENT"]**

### Step 4 — Review the output [7:00–8:00]

**[SCREEN: Chrome DevTools open — responsive mode, toggle to iPhone 375px width]**

NARRATOR: Let's check responsive. Switch to mobile — and the grid collapses, text reflows, the nav turns into a hamburger. Every breakpoint is handled.

**[SCREEN: DevTools Accessibility tab — no major issues flagged]**

NARRATOR: Accessibility audit — contrast ratios pass, all interactive elements have focus states, form inputs have labels. This isn't just visually polished — it's structurally sound.

**[SCREEN: Source code tab, scroll to the `<head>` — no external dependencies, no CDN links]**

NARRATOR: And notice the head — no external stylesheet, no CDN call, no framework. Everything is self-contained. You can drop this file on any static host — Netlify, Vercel, GitHub Pages — and it works. No build step.

### Step 5 — Iterate [8:00–9:00]

**[SCREEN: Back in Claude Code. Denis types a follow-up prompt.]**

NARRATOR: The brief mentioned the tone as "slightly playful." Looking at the page, the hero feels slightly corporate — good, but not playful. So I iterate.

**[SCREEN: Typewriter]**
```
The tone feels a bit corporate. Make the hero more playful: swap the headline to something with energy, add a subtle animated gradient to the hero background, and give the CTA button a slight bounce on hover. Keep everything else the same.
```

**[SCREEN: Claude makes targeted edits — only the hero section changes, rest untouched]**

NARRATOR: Notice Claude only touched the hero — it didn't regenerate the whole file. It rewrote the headline, added a CSS keyframe animation for the gradient, and gave the button a `transform: scale` bounce on hover. Surgical edit.

**[SCREEN: Browser hard-refresh — the hero now has the animated gradient, new headline, bouncy CTA]**

NARRATOR: The gradient animation. The new headline — "Stop staring at a blank page." That's a headline that makes a marketer lean forward. One follow-up prompt, thirty seconds of generation.

### Step 6 — Final result [9:00–9:30]

**[SCREEN: Full-screen browser — slow scroll of the final Draftly page from top to bottom]**

NARRATOR: That is the finished page. Hero with animated gradient. Features grid. Three-tier pricing with the "Popular" callout. Two testimonials. Final CTA. Fully responsive, accessible, self-contained — ready to hand to a developer for production integration, or ship as-is on a static host.

**[SCREEN: Side-by-side — the brief (left) vs. the rendered page (right)]**

NARRATOR: From this — seven sentences and a color preference — to this. That's what the frontend-design skill does.

**[ANIMATION: Orange line wipe]**

---

## RESULTS + VARIATIONS [9:30–11:00]

**[SCREEN: Before/after split — the plain text brief on the left, the finished Draftly landing page on the right]**

NARRATOR: One paragraph brief. One prompt. A complete, production-quality landing page — hero, features, pricing, testimonials, CTA — in under ten minutes. And the iteration took thirty seconds, not thirty minutes.

**[SCREEN: Three use-case cards animate in sequentially — orange accents on dark background]**

NARRATOR: But landing pages are just one use case. Here's what else this skill handles:

**[SCREEN: Card 1 animates in]**

NARRATOR: One — **interactive dashboards**. Give it a brief describing a SaaS metrics dashboard — daily actives, revenue, churn — and it builds a responsive HTML dashboard with charts using Chart.js. Full data visualization, no backend required.

**[SCREEN: Card 2 animates in]**

NARRATOR: Two — **email templates**. Describe your newsletter or transactional email layout — header, content blocks, footer — and it outputs table-based HTML that actually renders in Gmail. Email HTML is notoriously painful to write by hand. This makes it a five-minute job.

**[SCREEN: Card 3 animates in]**

NARRATOR: Three — **component libraries for design review**. Ask it to build a one-page component showcase — buttons, form elements, cards, modals — and it gives you a living style guide you can share with stakeholders before a single line of app code is written. Align on the design language first, build confidently second.

NARRATOR: The common thread: any time you can describe what a UI should feel like and do, this skill can materialize it. The barrier to "let me show you what I mean" just dropped to a single paragraph.

**[ANIMATION: Orange line wipe]**

---

## WRAP-UP [11:00–12:00]

**[SCREEN: End card begins animating — logo, links, next episode preview]**

NARRATOR: Quick recap. The `frontend-design` skill takes natural-language briefs and outputs complete, production-ready HTML, CSS, and JS — no build step, no framework dependencies, no back-and-forth with a developer. Install it once, describe your UI, get code that works.

**[SCREEN: Lower third — "Install: npx @smithery/cli@latest skill add anthropics/frontend-design" on orange bar]**

NARRATOR: The install command and the skill page are both in the description below. Full demo repo is on GitHub — link's there too — so you can grab the Draftly brief and try this yourself in the next ten minutes.

**[SCREEN: "Subscribe" button animation — orange pulse]**

NARRATOR: If you're finding these useful, a subscribe keeps you in the loop — we're doing all 95 skills, one episode at a time.

**[SCREEN: "Next up" card — "Episode 07: competitive-analysis" with preview thumbnail]**

NARRATOR: Next episode: the `competitive-analysis` skill — we map out three competitors in the project management space in under ten minutes. Full feature comparisons, positioning gaps, the works. See you there.

**[ANIMATION: 10-sec end card — logo, subscribe button, social links, Smithery and GitHub URLs]**

---

## Word count: ~1,810 words (target ~150 wpm → 12:04 narration)
