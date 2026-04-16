# Episode 13: brand-guidelines — Generate a Complete Visual Identity from 3 Sentences

**Series:** A — Design & Creative | **Skill:** anthropics/brand-guidelines | **Duration:** ~12 min
**Skill URL:** https://smithery.ai/skills/anthropics/brand-guidelines
**Install:** `npx @smithery/cli@latest skill add anthropics/brand-guidelines`
**Target Audience:** Founders, designers, brand managers — anyone building a visual identity system
**Use Case:** Turn a minimal brand brief into a full visual guidelines document with color palette, typography pairing, spacing system, logo rules, and application mockup specs.

---

## COLD OPEN [0:00–0:30]

**[SCREEN: Finished brand guidelines document — Canopy — scrolling at medium speed. Show: dark green primary color swatch with hex code, Poppins/Lora type pairing specimen, spacing scale, logo usage grid with clear-space rules, a do/don't panel, and a mockup of a SaaS dashboard header. Clean, dark-mode layout with green and off-white.]**

NARRATOR: Three sentences. That's all the input. A logo description, three words that describe the brand, and a single line about who it's for.

**[SCREEN: Cut to the raw brand-brief.md — 9 lines of plain text, deliberately sparse]**

NARRATOR: And in about ninety seconds, Claude turns that into this — a complete visual brand guidelines document, production-ready, with real hex codes, real type pairings, and real usage rules.

**[SCREEN: Fast montage — 3 clips, 3 seconds each]**
- Clip 1: The brand brief file open in VS Code, deliberately sparse
- Clip 2: Claude streaming the guidelines document, color swatches rendering line by line
- Clip 3: The finished PDF-ready output, scrolling smoothly

NARRATOR: In the next twelve minutes, you'll see exactly how. Let's go.

**[ANIMATION: Orange line wipe transition]**

---

## INTRO [0:30–1:30]

**[ANIMATION: 5-sec channel intro — "Anthropic Skills Showcase" logo reveal on dark background, orange accent]**

NARRATOR: Welcome back to the Anthropic Skills Showcase. I'm working through all 95 official Anthropic skills on Smithery, one episode at a time. Today is Episode 13, and we're covering **brand-guidelines** — the skill that takes a skeleton brief and extrapolates a full visual identity system.

**[SCREEN: Smithery.ai brand-guidelines skill page — scroll slowly, highlight install count: 138]**

NARRATOR: A hundred and thirty-eight installs so far, which feels low for how useful this thing is. I think it's underrated. Here's why it exists.

**[B-ROLL: Split-screen montage — left side: founder at laptop, 2 AM, staring at a blank Figma canvas; right side: a Canva template they've clearly already used on five other brands]**

NARRATOR: Building a brand from scratch is brutal if you're not a designer. You either spend days agonizing over colors that feel arbitrary, or you grab a template that looks like everyone else's brand. Either way, you don't have a system — you have a guess.

**[B-ROLL: Designer scrolling through a 60-page brand guidelines PDF at high speed — overwhelming]**

NARRATOR: And even if you hire a designer, what comes back is often a 60-page PDF that no one on the team ever reads — because there's no time to learn it, and the decisions aren't explained, just mandated.

**[SCREEN: brand-guidelines skill page — hover over the description]**

NARRATOR: The brand-guidelines skill solves both problems. It takes the signal you already have — what your brand stands for, who it's for, how it should feel — and turns that into a structured, opinionated system with real decisions and real rationale. Not a template. Not a guess. A system built from your inputs.

**[ANIMATION: Orange line wipe]**

---

## SKILL DEEP DIVE [1:30–3:30]

**[SCREEN: Terminal, dark mode, 16pt+ font]**

NARRATOR: Install it with one command:

**[SCREEN: Typewriter effect — command appears character by character]**

`npx @smithery/cli@latest skill add anthropics/brand-guidelines`

NARRATOR: That drops `brand-guidelines/` into your `.claude/skills/` directory. Let's see what's inside.

**[SCREEN: VS Code — file tree opens, `.claude/skills/brand-guidelines/SKILL.md` is highlighted and opens]**

NARRATOR: Same structure as every skill — YAML frontmatter, markdown instructions. The frontmatter defines the triggers. Let's look at the description field.

**[SCREEN: Zoom in on the `description:` field in the frontmatter — highlight with orange border callout]**

NARRATOR: The trigger description here is broad but specific in the right way: anything about creating brand guidelines, developing visual identity, building a color palette, or defining typography. Claude loads this skill whenever the intent is "I need to define how my brand looks and feels."

**[SCREEN: Scroll down through the SKILL.md body — pause on each major section]**

NARRATOR: Now look at the instructions. This skill knows exactly what a complete brand system needs. It's looking for — and will generate if missing — six things: a color palette with primary, secondary, and neutral groups; a typography pairing with weights and use cases; a spacing and layout scale; logo usage rules including clear space and minimum size; a do/don't examples panel; and at least one application mockup spec.

**[SCREEN: Highlight the "extrapolation" section of SKILL.md — or equivalent passage describing what Claude does with minimal input]**

NARRATOR: The most powerful part of this skill is buried in the instructions: it's told to extrapolate. If you give it a brand adjective like "grounded," it infers appropriate type weights, color saturation levels, and spatial density. It doesn't ask you "what hex code do you want for your primary color?" — it decides, with rationale, based on everything you gave it.

**[ANIMATION: Diagram slides in — three boxes left to right: "Brand Brief (minimal)" → "brand-guidelines skill" → "Complete Visual System (with rationale)"]**

NARRATOR: The model is: you supply the brand soul, the skill supplies the system. Now let's see it in action.

**[ANIMATION: Orange line wipe]**

---

## LIVE DEMO [3:30–9:30]

**[SCREEN: Full-screen recording begins — dark-mode VS Code with Claude Code panel on the right]**

### Step 1 — Show the input [3:30–4:30]

**[SCREEN: Open `use-case/input/brand-brief.md` in VS Code — show the full file, scroll through slowly]**

NARRATOR: Here's the entire input. I want you to see how little this is. The brand is called Canopy — a B2B climate-tech startup. The logo is described as an abstract tree formed by upward arrows, dark green on white. Three adjectives: purposeful, optimistic, grounded. Target audience: sustainability officers at mid-market companies. And one sentence on feel: "like a trusted expert who also happens to care deeply about the planet."

**[SCREEN: Zoom in on the brand-brief.md — highlight just these 9 lines, orange callout box]**

NARRATOR: Nine lines. That's it. No hex codes. No font names. No spacing decisions. Nothing but signal. This is the entire input we're giving the skill.

### Step 2 — Invoke the skill [4:30–5:30]

**[SCREEN: Switch to Claude Code session in the same directory. Type the prompt.]**

NARRATOR: I open a Claude Code session, reference the brief, and ask:

**[SCREEN: Typewriter effect — prompt appears]**

```
Read use-case/input/brand-brief.md and use the brand-guidelines skill
to generate a complete visual brand guidelines document for Canopy.
Output it as brand-guidelines.md in this directory.
```

**[SCREEN: Zoom callout on the brand-guidelines skill activation indicator in the Claude Code UI — orange border]**

NARRATOR: Watch the top of the Claude Code panel — there's the skill loading. Claude now has the brand-guidelines framework in context alongside our brief.

### Step 3 — Watch it build the system [5:30–7:00]

**[SCREEN: Claude's response streams in — narrate what's appearing as it renders]**

NARRATOR: Here we go. First, it restates the brand inputs — that's good practice, it's confirming its interpretation before committing. "Canopy communicates environmental leadership without the visual clichés of the green movement." I like that. It already knows what to avoid.

**[SCREEN: The color section renders — primary, secondary, neutrals with hex codes appear]**

NARRATOR: And here's the moment. The color palette. Primary: Forest — hex `#2D5A3D`. Secondary: Moss — `#4A7C59`. A warm neutral for body backgrounds, a near-white for light surfaces. And an accent — a muted amber — for emphasis without alarm.

**[SCREEN: Pause on the color section — zoom in on the hex codes, show saturation and lightness decisions]**

NARRATOR: Notice the choices. The greens are desaturated — not the neon green of a startup that just discovered sustainability. These are deep, considered greens. The kind that say "we've been doing this for a decade," not "we just pivoted." That's the "grounded" adjective doing work.

**[SCREEN: Typography section streams in — heading font, body font, weight scale]**

NARRATOR: Typography pairing: Poppins for headings at 700 weight, IBM Plex Serif for body text. That pairing is doing something specific — the geometric sans says "structured, forward-thinking," and the humanist serif says "trustworthy, considered." Together they land exactly on "trusted expert who cares." That's the aha moment. Three adjectives in, a type system out.

**[SCREEN: Spacing scale, logo rules, do/don't panel continue streaming]**

NARRATOR: The rest builds out — spacing scale based on an 8-point grid, logo clear space rules, minimum sizes for print and digital, a do/don't panel that specifically flags "do not use on busy photographic backgrounds" and "do not recreate the arrows in a different color." Then an application mockup spec for a SaaS dashboard header.

### Step 4 — Review the output [7:00–8:00]

**[SCREEN: Open `brand-guidelines.md` in VS Code — scroll through the full document at medium speed]**

NARRATOR: Let's walk through what we got. The document is structured in exactly the six sections the skill targets. Every color decision has a name, a hex code, and a one-sentence rationale. Every type decision specifies weight, size range, and use case. The spacing scale is a simple multiplier table. The logo rules include both the permitted zone and the forbidden zones.

**[SCREEN: Zoom into the do/don't panel section — highlight the specificity]**

NARRATOR: What I appreciate most is the specificity of the don'ts. It's not "don't distort the logo" — every brand guide says that. It says "do not pair the Canopy mark with imagery that centers individual consumer choices — this brand is B2B and systemic." That's a decision that came from the brief. The skill connected "sustainability officers at mid-market companies" to "don't look like a recycling campaign."

### Step 5 — Iterate: request a dark mode variant [8:00–9:00]

**[SCREEN: Denis types a follow-up prompt in Claude Code]**

NARRATOR: Now one iteration. The product team tells me they need a dark mode version of the palette for their web app. I want to see how the skill handles that.

**[SCREEN: Typewriter effect — follow-up prompt appears]**

```
The product ships a dark-mode web app. Add a dark mode color section
to brand-guidelines.md with the same palette adapted for dark surfaces —
maintain the same brand feel and accessibility contrast ratios (WCAG AA minimum).
```

**[SCREEN: Claude streams the dark mode section — inverted hierarchy, new background colors, contrast annotations]**

NARRATOR: Look at what it does. It doesn't just invert the palette — that would be lazy and break the brand feel. Instead it takes the Forest green and shifts it to a lighter, more luminous variant for use on dark backgrounds. The warm neutral becomes the darkest surface. The near-white becomes the primary text color. And it annotates every pairing with a contrast ratio — Forest-on-dark passes AA at 4.9:1, it says. That's the kind of detail that saves you a Figma audit pass.

**[SCREEN: Final brand-guidelines.md with the dark mode section appended — show the document is now complete]**

NARRATOR: The iteration took about forty seconds and extended the document cleanly. No restructuring needed.

### Step 6 — Final result [9:00–9:30]

**[SCREEN: Slow scroll through the complete brand-guidelines.md — show the full document from top to bottom, 30 seconds]**

NARRATOR: Here's the complete system. Color palette in both light and dark variants, typography pairing with weight scale, 8-point spacing system, logo rules, do/don't panel, and a dashboard mockup spec. From nine lines of input to a production-ready guidelines document. That's what this skill does.

**[ANIMATION: Orange line wipe]**

---

## RESULTS + VARIATIONS [9:30–11:00]

**[SCREEN: Before/after split — left: the 9-line brand brief; right: the complete brand-guidelines.md document scrolling]**

NARRATOR: Let's be clear about what happened. We gave it nine lines. We got back a complete visual system with documented decisions, rationale, and dark mode variants — ready to hand to a developer, a designer, or a contractor. That's the whole value proposition.

**[SCREEN: Three use-case cards animate in sequentially from the left — orange label, title, description. Dark background, clean layout.]**

NARRATOR: And this skill is useful well beyond a startup's first brand build. Three other scenarios where I'd reach for it:

**[SCREEN: Card 1 appears]**

NARRATOR: **Scenario one: sub-brand system.** You have a parent brand and you're launching a new product line that needs its own visual personality — but it has to stay within the parent's system. Give the skill the parent brand guidelines plus three adjectives for the sub-brand's distinct character, and it generates a compliant derivative palette and type scale. It understands hierarchy.

**[SCREEN: Card 2 appears]**

NARRATOR: **Scenario two: brand audit and update.** You have an existing brand that's drifted — different hex codes in different files, three fonts in use instead of one, inconsistent spacing. Give the skill your current assets plus where you want to go, and it produces a rationalized, tightened system with a "before vs. after" comparison. The rationale makes it much easier to get team buy-in on changes.

**[SCREEN: Card 3 appears]**

NARRATOR: **Scenario three: client pitch.** You're an agency or freelancer pitching a rebrand. Before you've built anything in Figma, use this skill to generate three directional brand concepts — one for each adjective cluster you're considering. You walk into the meeting with three fully-articulated directions, not mood boards. Clients respond very differently to "here are your hex codes and type pairs" than to "here are some vibes."

**[SCREEN: Fade back to the Canopy brand-guidelines.md scrolling slowly in background]**

NARRATOR: In all three cases, the skill gives you the scaffold. Your judgment shapes what goes in and refines what comes out. It's not replacing design thinking — it's compressing the first three days of a brand project into a starting document that's already 70% of the way there.

**[ANIMATION: Orange line wipe]**

---

## WRAP-UP [11:00–12:00]

**[SCREEN: End card begins building in from left — brand colors, clean layout]**

NARRATOR: Let's recap. The brand-guidelines skill takes minimal brand input — a brief, a few adjectives, an audience description — and generates a complete visual identity system with color palette, typography, spacing, logo rules, and application specs. It extrapolates rather than asking for decisions you haven't made yet. And it works iteratively — ask for a dark mode variant, a sub-brand, a refinement, and it extends the document cleanly.

**[SCREEN: Lower third slides up — orange background: "Install: npx @smithery/cli@latest skill add anthropics/brand-guidelines"]**

NARRATOR: One command to get it:

`npx @smithery/cli@latest skill add anthropics/brand-guidelines`

**[SCREEN: Lower third updates — show skill URL and GitHub link]**

NARRATOR: The skill is at smithery.ai/skills/anthropics/brand-guidelines. The full demo files — Canopy brand brief and complete output — are on GitHub at github.com/agentfactory/anthropic-skills-showcase. Both links are in the description. Grab them, try it with your own brand, and see how far nine lines takes you.

**[SCREEN: "Next up" card animates in — "Episode 14: algorithmic-art" with a preview image showing generative patterns]**

NARRATOR: Next episode: **algorithmic-art**. We take a creative brief — just a mood and a color direction — and generate a series of unique generative art pieces using nothing but Claude and a set of algorithmic constraints. No Midjourney, no Stable Diffusion — pure code-generated visual output. If you're into design systems, you'll want to see what's possible when you remove the human hand entirely. Subscribe so you don't miss it.

**[ANIMATION: 10-sec end card — Anthropic Skills Showcase logo, subscribe button, social links, dark background with orange accents]**

---

## Word count: ~1,810 words (target ~150 wpm → 12:04 narration)
