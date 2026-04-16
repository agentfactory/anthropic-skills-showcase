# Episode 10: theme-factory — Three CSS Themes in Three Minutes. No CSS Written.

**Series:** A — Design & Creative | **Skill:** anthropics/theme-factory | **Duration:** ~12 min
**Skill URL:** https://smithery.ai/skills/anthropics/theme-factory
**Install:** `npx @smithery/cli@latest skill add anthropics/theme-factory`
**Target Audience:** Frontend developers, designers, anyone delivering multiple design variants
**Use Case:** Apply Corporate Minimal, Bold Editorial, and Dark Tech themes to a plain HTML annual report — each in under 5 minutes, no manual CSS.

---

## COLD OPEN [0:00–0:30]

**[SCREEN: Three browser windows arrange themselves in a horizontal triptych — identical HTML structure, three radically different visual identities. Animate in with an orange horizontal wipe between each panel.]**

NARRATOR: Same HTML file. Thirty seconds apart. Three completely different reports — Corporate Minimal, Bold Editorial, Dark Tech. Not a line of CSS written by hand.

**[SCREEN: Zoom into each panel for 3 seconds each — show the typographic contrast, the color systems, the table styling, the dark background of the third]**

NARRATOR: That's theme-factory. In the next twelve minutes, I'll run this live on an actual unstyled HTML annual report, and you'll see exactly how it works.

**[ANIMATION: Orange line wipe transition into title card]**

---

## INTRO [0:30–1:30]

**[ANIMATION: 5-sec channel intro — "Anthropic Skills Showcase" logo reveal, dark background, orange accent]**

NARRATOR: Welcome to the Anthropic Skills Showcase — every official Anthropic skill on Smithery, one episode at a time. Episode ten. We're in Series A, Design and Creative, and today's skill is **theme-factory**.

**[SCREEN: Smithery.ai theme-factory page scrolls slowly — highlight install count: 406]**

NARRATOR: Four hundred installs and climbing, mostly developers and designers who are tired of rebuilding the same CSS from scratch every time a client asks "can I see it in a different style?" You know that request. You also know how long it usually takes.

**[B-ROLL: Time-lapse montage — developer in dark-mode VS Code, scrolling through a CSS file, tweaking hex codes, refreshing the browser, tweaking again]**

NARRATOR: The before state is manual CSS authoring — spending an hour per variant, usually with a reference you're half-guessing from. The after state is this: you describe the aesthetic in plain English, and theme-factory produces a production-quality stylesheet that matches. Let's install it.

**[ANIMATION: Orange line wipe]**

---

## SKILL DEEP DIVE [1:30–3:30]

**[SCREEN: Terminal, dark mode, 16pt font, clean workspace]**

NARRATOR: One command:

**[SCREEN: Typewriter effect — text appears character by character]** `npx @smithery/cli@latest skill add anthropics/theme-factory`

NARRATOR: That's it. The skill drops into `.claude/skills/theme-factory/` and loads automatically whenever you're working with HTML or CSS in Claude Code.

**[SCREEN: VS Code file tree — `.claude/skills/theme-factory/SKILL.md` opens]**

NARRATOR: Let's look at what you're actually installing. Like every Anthropic skill, theme-factory is a single `SKILL.md` file — YAML frontmatter that tells Claude when to activate, and markdown instructions that tell it what to do once triggered.

**[SCREEN: Highlight the frontmatter trigger section — `description:` field]**

NARRATOR: The trigger description covers the key phrases: "style this page," "apply a theme," "CSS for this HTML," "make it look like." Any of those in your prompt and theme-factory wakes up.

**[SCREEN: Scroll through the SKILL.md instructions section — show structure without reading verbatim]**

NARRATOR: The instructions break down into three phases. Phase one — document analysis. Before writing a single CSS rule, Claude reads your HTML structure: what headings are present, whether there are tables, how many sections, whether it's data-heavy or prose-heavy. It builds a structural map.

**[ANIMATION: Flow diagram — "HTML input" → "Structure analysis" → "Semantic mapping" → "Theme generation", connected with orange arrows]**

NARRATOR: Phase two — theme interpretation. You give it a label — "Corporate Minimal" or "Dark Tech" — and it expands that label into a complete design system: type scale, color palette, spacing, surface hierarchy. No guessing what you meant.

**[SCREEN: Scroll to the "Output" section of the SKILL.md — show the `<style>` block format]**

NARRATOR: Phase three — stylesheet generation. The output is a single `<style>` block, ready to drop into your HTML `<head>`. No build step, no dependencies, no PostCSS. Open the file in a browser and it works.

**[ANIMATION: Three-box diagram — "Analyze structure" → "Interpret aesthetic" → "Generate stylesheet", orange accent on each box]**

NARRATOR: That's the complete pipeline. Now let's watch it on a real document.

**[ANIMATION: Orange line wipe]**

---

## LIVE DEMO [3:30–9:30]

**[SCREEN: Full-screen recording begins — dark-mode VS Code on the left, browser preview on the right]**

### Step 1 — Show the unstyled document [3:30–4:30]

**[SCREEN: Open `use-case/input/plain-report.html` in browser — show the raw, unstyled HTML]**

NARRATOR: Here's the starting point — Meridian Analytics' annual report. Full semantic structure: hero section, executive summary, revenue table, regional breakdown, four key metrics, a chart placeholder, leadership section, full-year outlook, and a footnotes block. Everything a real annual report needs.

**[SCREEN: Scroll slowly through the unstyled page — browser default fonts, no layout, just content]**

NARRATOR: And it looks exactly like 1996. Browser defaults, no spacing, Times New Roman. This is deliberate — theme-factory's job is to start from zero and prove it can get to something publication-ready. Let's apply theme one.

### Step 2 — Apply Theme 1: Corporate Minimal [4:30–5:30]

**[SCREEN: Claude Code session — new prompt]**

NARRATOR: Theme one — Corporate Minimal. This is the Goldman Sachs annual report look: restrained, precise, authority through whitespace.

**[SCREEN: Typewriter effect]** `Apply a Corporate Minimal theme to plain-report.html. Think Goldman Sachs annual report — restrained typography, navy and white, generous whitespace, data tables with clean rules, no decorative elements.`

**[SCREEN: theme-factory activation banner appears — zoom callout with orange border]**

NARRATOR: There's the skill activation. Claude is now reading the document structure before writing a single line of CSS.

**[SCREEN: Claude streams the CSS output into a style block — show it generating]**

NARRATOR: Watch the generation — it's building a proper design system: CSS custom properties for the color palette up top, type scale with Playfair Display for headings and Georgia for body, a table component with proper border rules, section spacing calibrated to the content depth.

**[SCREEN: Claude finishes, browser preview auto-refreshes — show the transformed Corporate Minimal design]**

NARRATOR: There it is. That navy header, the constrained column width, the table with thin hairline rules. That looks like something that went through a design team — and it took about forty-five seconds.

### Step 3 — Apply Theme 2: Bold Editorial [5:30–6:30]

**[SCREEN: New prompt in Claude Code]**

NARRATOR: Same file. Theme two — Bold Editorial. Think magazine feature, not finance deck. Big type, strong contrast, sections that breathe.

**[SCREEN: Typewriter effect]** `Now apply a Bold Editorial theme to the same HTML — think New York Times or Bloomberg Businessweek feature. Large display type, high contrast, generous section breaks, orange accent color, tables as data features not data dumps.`

**[SCREEN: Claude generates the second theme — a noticeably different CSS structure]**

NARRATOR: Notice the different rhythm here — it's setting up a much larger type scale, the sections are going to have ruled separators instead of whitespace, and that orange accent is going straight onto the hero and the metric cards.

**[SCREEN: Browser refreshes to Bold Editorial — show the dramatic contrast with Theme 1]**

NARRATOR: Now we're in a different world entirely. The same annual report, the same content, but it reads like a feature story. The metric cards with the orange accents, the large chapter-style section headers, the running text set wider for longer reads.

**[ANIMATION: Side-by-side split screen — Theme 1 left, Theme 2 right, orange divider line center]**

NARRATOR: Two completely different documents — same HTML, forty-five seconds each.

### Step 4 — Apply Theme 3: Dark Tech [6:30–7:30]

**[SCREEN: New prompt in Claude Code]**

NARRATOR: Theme three is where it gets interesting for the developer audience. Dark Tech — think Stripe's API docs or a Vercel dashboard report. Dark backgrounds, monospace data, a terminal-native feel.

**[SCREEN: Typewriter effect]** `Apply a Dark Tech theme to the same HTML — dark background (#0d1117), monospace data presentation, cyan and green accents, tables as code-native grids, metrics displayed as terminal-style readouts.`

**[SCREEN: Claude generates the Dark Tech stylesheet — show the `#0d1117` background variable being set]**

NARRATOR: The background variable is set first — that cascade of dark surfaces from the body through the sections, each one slightly lighter to create depth without a gradient. Cyan on the metric numbers, green on the positive variance rows in the table.

**[SCREEN: Browser refreshes — Bold Dark Tech design appears]**

NARRATOR: And there is the aha moment — the exact same semantic HTML, now looking like it belongs in a developer-facing product dashboard. The revenue table reads like a terminal output, the metrics have that monospace precision, the footnotes look like code comments.

### Step 5 — The three-way comparison [7:30–8:30]

**[ANIMATION: Three browser windows tile horizontally — Corporate Minimal | Bold Editorial | Dark Tech — all visible simultaneously with an orange label under each]**

NARRATOR: Here's the side-by-side. Same structure — look at the revenue section in all three. In Corporate Minimal it's a formal table with hairline rules. In Bold Editorial it's a data feature with a large label and accent bar. In Dark Tech it's a terminal grid with monospace figures. Three brand personalities, one HTML file.

**[SCREEN: Slowly pan across all three — linger on the revenue table comparison]**

NARRATOR: This is what used to take a design team an afternoon per variant. We just did all three in under six minutes total.

### Step 6 — Iterate: refine the Dark Tech accent color [8:30–9:30]

**[SCREEN: Back to Claude Code — new prompt on the Dark Tech theme]**

NARRATOR: One more thing — the cyan on the metrics is a bit cool. I want to push it warmer, closer to the channel's orange. Let me show you how the iteration step works.

**[SCREEN: Typewriter effect]** `In the Dark Tech theme, change the primary accent from cyan to a warm orange-amber (#e8a04a). Update the metric values, the table header row, and the active section indicator to use this color instead.`

**[SCREEN: Claude makes targeted edits — only the accent color variables change, structure stays intact]**

NARRATOR: This is important — notice it's doing a targeted variable update, not rewriting the whole stylesheet. It identified the three places the accent color was defined and updated only those. The rest of the design system stays intact.

**[SCREEN: Browser refreshes — Dark Tech with warm amber accents instead of cyan]**

NARRATOR: Warmer, more on-brand, done. That took twenty seconds and didn't break anything else. Skills are living documents — you refine them exactly like code.

**[ANIMATION: Orange line wipe]**

---

## RESULTS + VARIATIONS [9:30–11:00]

**[ANIMATION: Final three-panel comparison slides in — all three final themes visible]**

NARRATOR: What we just did: started from zero CSS, described three aesthetic directions in plain English, and got three production-quality stylesheets. The document structure never changed. The content never changed. Only the presentation layer did — and each version is independently usable.

**[SCREEN: Three use-case cards animate in sequentially — orange accents, clean dark-mode layout]**

NARRATOR: Theme-factory goes well beyond annual reports. Three other cases I'd reach for it immediately:

**[SCREEN: Card 1 slides in]**

NARRATOR: First — **client deliverable variants**. You're a freelancer or agency, the client wants to see two or three visual directions before committing. Instead of mocking up each one in Figma, generate the HTML structure once and run theme-factory three times. Show up to the review with working browser previews, not static images.

**[SCREEN: Card 2 slides in]**

NARRATOR: Second — **design system prototyping**. You're starting a new product and need to evaluate whether a design language actually works across all your real content — not just a hero screenshot. Apply a candidate theme to a full HTML prototype and see where it breaks. Find the problems before they're in production.

**[SCREEN: Card 3 slides in]**

NARRATOR: Third — **white-label products**. You have a report template, a dashboard export, a generated document. Each client needs their own branding. Build the template once, keep a theme-factory prompt per client, regenerate their branded stylesheet whenever the base template changes. One source of truth, infinite brand variants.

**[ANIMATION: Orange line wipe]**

---

## WRAP-UP [11:00–12:00]

**[SCREEN: End card begins building — dark background, brand colors, logo in corner]**

NARRATOR: Here's the recap: theme-factory is a structured CSS generation skill. You give it an HTML document and a design direction. It analyzes the document, builds a full design system, and hands you a stylesheet. No manual CSS authoring, no guessing at type scales, no hunting for the right hex value.

**[SCREEN: Install command appears on screen with orange background — typewriter effect]** `npx @smithery/cli@latest skill add anthropics/theme-factory`

NARRATOR: One command to install. Works immediately in any Claude Code session where you're touching HTML or CSS.

**[SCREEN: Lower third — "406 installs on smithery.ai" with the Smithery URL]**

NARRATOR: The skill page, the install command, and the full demo files — including the Meridian Analytics annual report we used today — are all linked in the description below. If you want to try the three-theme comparison yourself, the input file is in the episode folder on GitHub.

**[SCREEN: GitHub URL lower third — https://github.com/agentfactory/anthropic-skills-showcase]**

NARRATOR: If this saved you time, hit subscribe. We're working through all 95 official Anthropic skills on this channel, and every episode has a live demo you can reproduce from the repo.

**[SCREEN: "Next up" card with episode 11 preview thumbnail]**

NARRATOR: We're just getting started — subscribe to catch Episode 11 and the rest of the series.

**[ANIMATION: 10-sec end card — logo, subscribe button, social links, episode playlist]**

---

## Word count: ~1,810 words (target ~150 wpm → 12:04 narration)
