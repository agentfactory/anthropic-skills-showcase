# Episode 14: algorithmic-art — Generative Art That Runs in the Browser

**Series:** A — Design & Creative | **Skill:** anthropics/algorithmic-art | **Duration:** ~12 min
**Skill URL:** https://smithery.ai/skills/anthropics/algorithmic-art
**Install:** `npx @smithery/cli@latest skill add anthropics/algorithmic-art`
**Target Audience:** Developers, creative coders, designers, NFT artists, anyone who wants generative visuals
**Use Case:** Generate 3 unique generative art pieces as self-contained HTML/JS files — a Perlin noise flow field, a recursive fractal tree, and a mouse-reactive particle system.

---

## COLD OPEN [0:00–0:30]

**[SCREEN: Full-screen browser — a Perlin noise flow field in muted earth tones slowly animating, vectors drifting in organic arcs across a near-black canvas]**

NARRATOR: This is not a video. That is code running in your browser right now — no images, no libraries, no server. Three lines in a creative brief, and Claude wrote every pixel of it.

**[SCREEN: Quick cut — fractal tree branches exploding outward on click; then particle system scattering from mouse cursor, drifting back like smoke]**

NARRATOR: In the next twelve minutes, I'll generate three complete generative art pieces — each a self-contained HTML file, each one different, each one live-rendered on demand. Let's go.

**[ANIMATION: Orange line wipe transition]**

---

## INTRO [0:30–1:30]

**[ANIMATION: 5-sec channel intro — "Anthropic Skills Showcase" logo reveal on dark background, orange accent]**

NARRATOR: Welcome to the Anthropic Skills Showcase. I'm working through all 95 official Anthropic skills on Smithery, one episode at a time. Today: **algorithmic-art** — the skill that turns a creative brief into living, breathing generative visuals.

**[SCREEN: Smithery.ai algorithmic-art skill page scrolls — highlight install count: 125]**

NARRATOR: One hundred and twenty-five installs. This one is niche on purpose. It's not for everyone — it's for the people who've ever wanted to make generative art but didn't want to learn the math behind Perlin noise or recursive tree algorithms. Now you describe what you want, and Claude handles the hard parts.

**[B-ROLL: Developer scrolling through generative art on a gallery site — lots of striking visuals, clearly hand-coded, clearly time-intensive]**

NARRATOR: Generative art has always had a steep entry curve. You either know the algorithms — noise functions, L-systems, physics simulations — or you spend days learning them. This skill bridges that gap. You write a brief. You get working code.

**[SCREEN: Quick split — a paragraph of plain English creative brief on the left; a complete, animated HTML file on the right]**

NARRATOR: That's the before and after we're going to build today.

**[ANIMATION: Orange line wipe]**

---

## SKILL DEEP DIVE [1:30–3:30]

**[SCREEN: Terminal, dark mode, big font]**

NARRATOR: One command to install:

**[SCREEN: Typewriter effect]** `npx @smithery/cli@latest skill add anthropics/algorithmic-art`

NARRATOR: That drops an `algorithmic-art/` folder into `.claude/skills/`. Let's open the SKILL.md and understand what we're working with.

**[SCREEN: VS Code — `.claude/skills/algorithmic-art/SKILL.md` opens, scroll through the frontmatter]**

NARRATOR: The frontmatter describes the trigger conditions. Any time you ask Claude to make generative art, create a canvas animation, build a visual algorithm, or generate procedural visuals — this skill auto-loads. It's broad enough to catch the intent, specific enough not to fire on unrelated tasks.

**[SCREEN: Scroll to the output specification section of SKILL.md]**

NARRATOR: The output contract is the important part. Every piece this skill produces is a **self-contained HTML file** — all the JavaScript is inline, there are zero external dependencies, and the canvas renders on page load. You open it in any browser, and it runs. No npm install, no build step, no server.

**[SCREEN: Highlight the section on supported algorithm families]**

NARRATOR: The skill knows about a specific set of algorithm families. Noise fields — Perlin, simplex. Recursive systems — L-systems, fractals, tree generators. Particle systems — physics-based, mouse-reactive. And cellular automata, if you want to go deeper. Each family has a different creative personality, and the skill adjusts its code patterns accordingly.

**[ANIMATION: Diagram slides in — 4 boxes labeled "Noise Fields", "Recursive Systems", "Particle Systems", "Cellular Automata" — each with a small preview thumbnail animation]**

NARRATOR: The key insight is that each algorithm type has a natural parameter space. For a flow field, you tune the noise scale, the number of vectors, and the color palette. For a fractal tree, you tune the branching angle, the depth, and whether it responds to interaction. You don't need to know the implementation — just the creative intent.

**[SCREEN: Scroll to the section on creative briefs — highlight the fields: algorithm, dimensions, color palette, interaction, animation]**

NARRATOR: When you hand the skill a brief, you're filling in those fields. The more specific your palette and interaction model, the more precise the output. Vague brief — interesting art. Specific brief — exactly the art you imagined.

**[ANIMATION: Orange line wipe]**

---

## LIVE DEMO [3:30–9:30]

**[SCREEN: Full-screen recording begins — dark-mode terminal + VS Code side by side]**

### Step 1 — Open the creative brief [3:30–4:30]
NARRATOR: I've got a brief with three art pieces. Let me show you what's in it before we run anything.

**[SCREEN: Open `use-case/input/art-brief.md` in VS Code — scroll through all three pieces slowly]**

NARRATOR: Three pieces, three different algorithm families. "Flow Field" — a Perlin noise field in muted earth tones, 800 by 800, vectors animating slowly. "Recursive Tree" — a fractal binary tree from bottom center, spring green on dark, click to re-seed. "Particle Drift" — two hundred particles, mouse repels them within eighty pixels, they drift back with spring easing. Each brief specifies exactly the palette, the dimensions, and the interaction model.

**[SCREEN: Zoom into the "Flow Field" description — highlight the hex colors: #d4c5a9, #8b7355, #3d2b1f]**

NARRATOR: Notice these are exact hex codes. When you're specific about palette, the skill uses those values directly — no interpretation, no "close enough." That's the difference between a tool you trust and one you babysit.

### Step 2 — Generate the first piece [4:30–5:30]
**[SCREEN: Claude Code session in the demo directory. Paste the Flow Field brief.]**

NARRATOR: Piece one. I drop the Flow Field brief into Claude Code:

**[SCREEN: Typewriter]**
```
Using the algorithmic-art skill, create a generative art piece from this brief:

Title: Flow Field
Algorithm: Perlin noise flow field
Canvas: 800x800px
Background: #0f0e0c
Vector colors: #d4c5a9, #8b7355, #3d2b1f — vary by noise value
Vector count: 2,000
Animation: vectors redraw slowly at ~30fps, noise offset advances each frame
No interaction required
Output: self-contained HTML file, no external dependencies
```

**[SCREEN: Claude's response streams in — it's writing the HTML file with inline JavaScript]**

NARRATOR: Watch what's happening — it's writing the canvas setup, the Perlin noise implementation, the vector rendering loop, the animation frame logic. All inline. All in one file.

**[SCREEN: File write completes — `flow-field.html` appears in the directory listing]**

### Step 3 — Open in browser — the aha moment [5:30–6:30]
NARRATOR: Here's the moment.

**[SCREEN: Double-click `flow-field.html` — browser opens]**

**[SCREEN: FULL FRAME — the flow field renders. Muted earth tones, 2,000 vectors curling in organic arcs across a near-black canvas. It's moving. It's alive.]**

NARRATOR: No server. No build. No dependencies. That HTML file contains everything. You could email this to someone and they'd open it and see exactly this. That's what "self-contained" means — it's complete art in a single file.

**[B-ROLL: Slow push-in on the browser window — the flow field continues to animate, vectors cycling through the earth-tone palette]**

NARRATOR: Two thousand vectors. Each one following a Perlin noise gradient that shifts every frame. The colors map to the noise value at that point in space — warm in the dense regions, dark at the edges. Claude didn't just write code. It made a creative decision about how the palette maps to the field.

### Step 4 — Generate pieces two and three [6:30–7:30]
**[SCREEN: Back to Claude Code — paste the Recursive Tree brief]**

NARRATOR: Piece two — the fractal tree:

**[SCREEN: Typewriter]**
```
Using the algorithmic-art skill, create a generative art piece:

Title: Recursive Tree
Algorithm: recursive fractal binary tree
Canvas: 800x800px
Background: #0a0f0a
Start: base trunk from bottom center, pointing up
Branching: each branch splits into two at ~25 degrees, branches thin as depth increases
Color: #4a9e5c to #a8d5b5, lighten toward tips
Depth: 10 levels
Interaction: click anywhere to re-seed with a new random branching angle (22–30 degrees)
Animation: branches draw progressively on load, 40ms per level
Output: self-contained HTML file
```

**[SCREEN: File writes — `recursive-tree.html`; immediately open in browser]**

**[SCREEN: Tree draws itself branch by branch from the trunk — spring greens on near-black, fractal structure emerging level by level until it fills the canvas]**

NARRATOR: Watch it build itself. That progressive draw — that's not a GIF, that's the algorithm running in real time, recursion depth by recursion depth. And now — click.

**[SCREEN: Denis clicks the canvas — the tree reseeds, a new structure grows with slightly different angles]**

NARRATOR: Every click is a new tree. Same algorithm, different parameters, completely different result. That's the core appeal of generative art — infinite variation from finite rules.

**[SCREEN: Quick cut back to Claude Code — paste the Particle Drift brief]**

NARRATOR: Piece three — the particle system:

**[SCREEN: Typewriter]**
```
Using the algorithmic-art skill, create a generative art piece:

Title: Particle Drift
Algorithm: particle system with mouse repulsion
Canvas: 800x800px, full-window responsive
Background: #080808
Particles: 200 particles, randomized starting positions
Colors: #ffffff at 60% opacity, #d97757 for particles near the mouse
Mouse interaction: particles within 80px radius are repelled from cursor
Spring easing: particles drift back to their home positions after repulsion, spring constant 0.05, damping 0.92
Animation: continuous 60fps loop
Output: self-contained HTML file
```

**[SCREEN: `particle-drift.html` written; open in browser]**

**[SCREEN: 200 white particles drifting slowly on black — then Denis moves the mouse across the canvas, particles scatter outward, the ones near cursor glow orange, then drift back like smoke]**

NARRATOR: That — right there — is the aha moment for anyone watching. A hundred and fifty words in a brief, and you get physics. Spring constants, damping, repulsion radius — it's all there. You didn't write a single line of JavaScript.

### Step 5 — Iterate on the flow field [7:30–8:30]
NARRATOR: Now the refinement step. The flow field looks great, but the vectors are too dense in the center. I want to thin them out and increase the noise scale for bigger, lazier curves.

**[SCREEN: Back to Claude Code — type the refinement prompt]**

**[SCREEN: Typewriter]**
```
Revise flow-field.html: reduce vector count from 2,000 to 1,200, increase the Perlin noise scale from 0.003 to 0.006 so the curves are wider and more languid, and add a 0.4% chance per frame that any vector fades out and reseeds at a random position.
```

**[SCREEN: Claude edits the existing file — shows the diff in VS Code]**

NARRATOR: It's not rewriting from scratch — it's editing the existing file. It found the noise scale constant, updated it. It found the particle count, updated it. It added the fade-and-reseed logic to the animation loop.

**[SCREEN: Reload `flow-field.html` in the browser — the revised version plays]**

NARRATOR: Bigger curves, less density, and now watch — every so often a vector fades and reappears somewhere else. It looks more alive. This is the iteration loop: describe what you want changed, and the skill handles the implementation.

### Step 6 — Final review [8:30–9:30]
**[SCREEN: All three HTML files in VS Code explorer — flow-field.html, recursive-tree.html, particle-drift.html]**

NARRATOR: Three files. Three completely different algorithms. Each one a complete, portable, animated generative art piece.

**[SCREEN: Quick split — all three browsers tiled side by side, all three pieces running simultaneously]**

NARRATOR: The flow field drifting in earth tones. The fractal tree rebuilding on click. The particle system scattering under the cursor. All from a single creative brief file. All zero dependencies. All ready to ship, display, or mint.

**[ANIMATION: Orange line wipe]**

---

## RESULTS + VARIATIONS [9:30–11:00]

**[SCREEN: Three-way split showing all three finished pieces running simultaneously in browser tabs]**

NARRATOR: Let's take stock of what we built in one six-minute session: three self-contained generative art pieces, each using a different algorithm family, each with its own interaction model and animation loop. The total input was a creative brief you could write in ten minutes. The output is ready to display anywhere a browser can run.

**[SCREEN: Three use-case cards animate in sequentially — orange accents]**

NARRATOR: And algorithmic-art goes well beyond what we showed today. Three more directions worth exploring:

**[SCREEN: Card 1 — "NFT Collection Generator"]**

NARRATOR: One — **NFT collection generation**. Give the skill a single base algorithm and a palette system, then run it with fifty different random seeds. You get fifty unique pieces that share a visual language — exactly the kind of coherent collection that sells.

**[SCREEN: Card 2 — "Generative Wallpaper Engine"]**

NARRATOR: Two — **generative wallpapers**. Pass your brand colors and a noise algorithm. Output is a 2560-by-1440 canvas that renders once and saves as a screenshot. Every member of your team gets a unique wallpaper from the same brand palette — a nice trick for team swag or conference booths.

**[SCREEN: Card 3 — "Data Art / Data Visualization"]**

NARRATOR: Three — **data-driven art**. Inject a JSON dataset into the brief — daily temperatures, stock prices, word frequencies — and ask the skill to map the data onto the visual parameters. Vector length maps to temperature. Particle velocity maps to trading volume. The output is still generative art, but it's also information.

NARRATOR: Anywhere you have a repeatable visual system — brand palettes, collection themes, data series — algorithmic-art can generate the whole thing from a brief.

**[ANIMATION: Orange line wipe]**

---

## WRAP-UP [11:00–12:00]

**[SCREEN: End card begins animating in — dark background, orange accents]**

NARRATOR: Recap: algorithmic-art takes a structured creative brief and outputs self-contained HTML generative art — no build tools, no dependencies, runs anywhere. You describe the algorithm family, the palette, the dimensions, and the interaction model. Claude handles the math.

**[SCREEN: Lower third — "Install: npx @smithery/cli@latest skill add anthropics/algorithmic-art" — orange background]**

NARRATOR: Install command, skill link, and the full demo repo — all in the description below. The three files we generated today are in the episode folder on GitHub, ready to download and remix.

**[SCREEN: "Subscribe" animation — channel logo pulses, subscriber count animates]**

NARRATOR: If this saved you time or sparked an idea, hit subscribe — we're working through all 95 skills on this channel.

**[SCREEN: "Next up" card — "Episode 15: slack-gif-creator" with preview]**

NARRATOR: Next episode: **slack-gif-creator**. We take a text prompt and turn it into a custom animated GIF ready to drop into Slack — in under two minutes. See you there.

**[ANIMATION: 10-sec end card — logo, subscribe button, social links, GitHub URL]**

---

## Word count: ~1,820 words (target ~150 wpm → 12:08 narration)
