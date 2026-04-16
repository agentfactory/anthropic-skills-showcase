# Demo walkthrough — algorithmic-art (three generative pieces)

Rehearsal script for Denis's live screen recording. Target duration: **6:00** (fits the 3:30–9:30 demo slot). Keep terminal font at 16pt+, dark mode, VS Code on one side, Claude Code on the other. Browser should be dark mode or at minimum using a dark themed browser profile.

## Pre-flight checklist (do before recording starts)
1. Fresh demo directory: `mkdir ~/demo-ep14 && cd ~/demo-ep14`
2. Confirm skill is installed: `ls ~/.claude/skills/algorithmic-art/SKILL.md`
   - If not installed: `npx @smithery/cli@latest skill add anthropics/algorithmic-art`
3. Copy `use-case/input/art-brief.md` into `~/demo-ep14/` so it's visible on screen
4. Claude Code launched in `~/demo-ep14`, empty session
5. Browser ready (Chrome preferred, dark mode OS, default zoom 100%)
6. VS Code open to `~/demo-ep14/` directory — no other files open yet
7. Close email, Slack, notifications off, "Do Not Disturb" on
8. Check monitor color profile: sRGB or Display P3. The earth-tone palette will look different on uncalibrated displays — do a quick test render before recording if possible.

---

## Recording — step by step

### Step 1 — Show the creative brief (3:30–4:30) • ~60s
**Action:** Open `art-brief.md` in VS Code. Scroll through all three pieces slowly.

**Say:** "Here's the input. Three art pieces described in plain English — palette, algorithm, dimensions, interaction. This is everything Claude needs. Let me start with the flow field."

**Zoom in on** the hex codes `#d4c5a9, #8b7355, #3d2b1f` under the Flow Field section.

**Say:** "Notice these are exact hex codes. When you're specific about palette, the output is predictable — not interpreted, not approximate. Exact."

### Step 2 — Generate Flow Field (4:30–5:30) • ~60s
**Action:** Switch to Claude Code. Paste this exact prompt (copy from art-brief.md, the "Prompt to paste" block under Flow Field):

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
Filename: flow-field.html
```

**Wait for:** `flow-field.html` appears in the VS Code explorer sidebar.

**Say (while it writes):** "The skill is writing the Perlin noise implementation, the canvas setup, and the animation loop — all inline in a single HTML file."

### Step 3 — Open Flow Field in browser — the aha moment (5:30–6:30) • ~60s
**Action:** Double-click `flow-field.html` in VS Code sidebar to open in browser. Allow 2–3 seconds for it to fully render before saying anything.

**Say:** "There it is. No server. No build. No npm install. That file contains everything — you could email it to someone and they'd see exactly this."

**Pause for 5 seconds** — let the animation breathe on screen. The slow drift of the earth-tone vectors is the hook.

**Say:** "Two thousand vectors, each following a Perlin noise gradient that shifts every frame. The palette maps to the noise density — warmer tones where the field is dense, darker at the edges. Claude made that creative decision."

**Note:** If the animation looks choppy, don't apologize — just continue. The 30fps target may vary by machine. Authenticity over perfection.

### Step 4 — Generate Recursive Tree and Particle Drift (6:30–7:30) • ~60s
**Action:** Back to Claude Code. Paste the Recursive Tree prompt (from art-brief.md):

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
Filename: recursive-tree.html
```

**Wait for:** `recursive-tree.html` is written. Open in browser immediately.

**Say:** "Watch it build itself — recursion depth by depth."

**Action:** After the tree finishes drawing, click the canvas.

**Say:** "Click. New tree. Same algorithm, different parameters, completely different structure."

**Action:** Click twice more quickly to show the variation.

**Action:** Switch back to Claude Code without closing the tree tab. Paste the Particle Drift prompt:

```
Using the algorithmic-art skill, create a generative art piece:

Title: Particle Drift
Algorithm: particle system with mouse repulsion
Canvas: 800x800px, full-window responsive
Background: #080808
Particles: 200 particles, randomized starting positions
Colors: #ffffff at 60% opacity, #d97757 for particles near the mouse
Mouse interaction: particles within 80px radius are repelled from cursor
Spring easing: particles drift back to their home positions, spring constant 0.05, damping 0.92
Animation: continuous 60fps loop
Output: self-contained HTML file
Filename: particle-drift.html
```

**Wait for:** `particle-drift.html` is written. Open in browser.

**Action:** Move the mouse slowly across the canvas. Then move it fast. Then let it sit still and watch the particles drift back.

**Say:** "Spring physics. Repulsion radius. Damping coefficient. A hundred and fifty words in a brief, and you get physics."

### Step 5 — Refine the Flow Field (7:30–8:30) • ~60s
**Action:** Switch back to Claude Code. Type this refinement prompt:

```
Revise flow-field.html: reduce vector count from 2,000 to 1,200, increase the Perlin noise scale from 0.003 to 0.006 so the curves are wider and more languid, and add a 0.4% chance per frame that any vector fades out and reseeds at a random position.
```

**Wait for:** Claude edits the existing file. The diff should be visible in VS Code — point to it briefly.

**Say:** "It's not starting over — it's editing the existing file. The noise scale constant, the vector count, the fade logic — targeted changes."

**Action:** Switch to the browser tab with flow-field.html and hard-reload (Ctrl+Shift+R or Cmd+Shift+R).

**Say:** "Bigger curves, lower density — and now watch — occasionally a vector fades and reappears somewhere new. More alive. This is the iteration loop: describe what you want different, get a targeted edit."

### Step 6 — Final review (8:30–9:30) • ~60s
**Action:** Tile all three browser windows side by side (or use a window manager to show them at 33% width each).

**Say:** "Three algorithms, three interaction models, three palettes. All from one brief file. Each one a complete, portable piece ready to ship, display, or mint."

**Action:** Hover over the particle system so the particles scatter while the tree and flow field are visible.

**Say:** "Everything you see is code running in real time. No images. No video. Just HTML and JavaScript, generated from a creative brief."

**Action:** Show all three filenames in the VS Code explorer: `flow-field.html`, `recursive-tree.html`, `particle-drift.html`.

---

## After recording: save outputs
Copy the three generated HTML files into `use-case/output/`:
- `flow-field.html` (the iterated version, after the refinement step)
- `recursive-tree.html`
- `particle-drift.html`

These become the canonical examples for the episode — linked in the GitHub folder and referenced in the description.

---

## Troubleshooting

**If algorithmic-art skill doesn't auto-activate:**
- Type `/skills` in Claude Code — confirm `algorithmic-art` is listed
- If not listed: re-run the install command: `npx @smithery/cli@latest skill add anthropics/algorithmic-art`
- Worst case, prefix the prompt with: "Using the algorithmic-art skill, ..."

**If the generated HTML has a blank canvas:**
- Open browser DevTools (F12) — check for JavaScript errors in the Console tab
- Most common cause: syntax error in generated code. Ask Claude: "The canvas is blank — check for JavaScript errors and fix."

**If the Perlin noise flow field has no visible movement:**
- The noise offset increment may be too small. Ask Claude: "The vectors aren't visibly animating — increase the noise offset step per frame."

**If the particle system shows no repulsion:**
- The mouse event listener may not be attached to the canvas. Ask Claude: "Mouse movement isn't triggering repulsion — check the mousemove event binding."

**If the fractal tree doesn't re-seed on click:**
- The click handler may be on document instead of canvas. Ask Claude: "Clicking doesn't re-seed the tree — fix the click event handler."

**If a take goes over 6:30:** Restart from Step 2. The brief-opening step (Step 1) is the easiest to cut short on a retake — just say "here's the brief" and scroll faster.

**If Claude asks clarifying questions:** Answer briefly and continue — authenticity over script adherence. These clarifications rarely take more than 15 seconds.
