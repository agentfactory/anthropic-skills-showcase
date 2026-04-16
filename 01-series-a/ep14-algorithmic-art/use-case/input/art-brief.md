# Creative Brief — Episode 14 Demo
## Three Generative Art Pieces for algorithmic-art skill

This brief is the demo input for the live recording. Each section contains the creative description and a copy-paste-ready prompt block for use in Claude Code.

---

## Piece 1: Flow Field

**Title:** Flow Field
**Algorithm family:** Perlin noise flow field
**Concept:** Two thousand vectors distributed across the canvas, each following the gradient of a Perlin noise field that shifts slowly over time. The field produces organic, flowing curves — like iron filings near a slowly rotating magnet. The palette is muted earth tones: warm sand, dark umber, deep brown. The background is near-black. No user interaction — this piece is purely contemplative.

**Visual parameters:**
- Canvas: 800×800px
- Background: `#0f0e0c` (near-black with very slight warm cast)
- Vector colors (vary by noise value at position):
  - High density: `#d4c5a9` (warm sand)
  - Mid density: `#8b7355` (umber brown)
  - Low density: `#3d2b1f` (deep dark brown)
- Vector count: 2,000
- Vector length: 4–6px
- Vector opacity: 0.6
- Noise scale: 0.003 (tight, detailed curves)
- Noise offset per frame: 0.002 (slow, languid motion)
- Animation: continuous loop at ~30fps, no user interaction

**Prompt to paste into Claude Code:**
```
Using the algorithmic-art skill, create a generative art piece from this brief:

Title: Flow Field
Algorithm: Perlin noise flow field
Canvas: 800x800px
Background: #0f0e0c
Vector colors: #d4c5a9, #8b7355, #3d2b1f — vary by noise value at each vector's position
Vector count: 2,000
Vector length: 4–6px, opacity 0.6
Noise scale: 0.003
Animation: vectors redraw continuously at ~30fps, noise offset advances 0.002 per frame
No user interaction required
Output: self-contained HTML file, no external dependencies
Filename: flow-field.html
```

**Refinement prompt (Step 5 of demo):**
```
Revise flow-field.html: reduce vector count from 2,000 to 1,200, increase the Perlin noise scale from 0.003 to 0.006 so the curves are wider and more languid, and add a 0.4% chance per frame that any vector fades out and reseeds at a random position on the canvas.
```

---

## Piece 2: Recursive Tree

**Title:** Recursive Tree
**Algorithm family:** Recursive fractal binary tree
**Concept:** A binary tree generated recursively from a trunk at the bottom center of the canvas. Each branch splits into two daughter branches at a slight angle, and each daughter is shorter and thinner than its parent. The palette is spring green — dark at the trunk, lightening toward the leaf tips — on a near-black background with a very slight green cast. The interaction model is kinetic: every click reseeds the tree with a new random branching angle, producing an entirely new structure from the same algorithm. The tree draws itself progressively on load, level by level, so the viewer watches it grow.

**Visual parameters:**
- Canvas: 800×800px
- Background: `#0a0f0a` (near-black, slight green cast)
- Trunk start: bottom center (400, 780), pointing straight up
- Trunk length: 120px
- Branch angle: ~25 degrees per side (randomized 22–30 on reseed)
- Branch length ratio: 0.72 (each child is 72% of parent length)
- Branch width ratio: 0.65 (each child is 65% of parent width)
- Trunk width: 8px
- Depth: 10 levels
- Color: `#4a9e5c` at trunk, `#a8d5b5` at leaf tips — interpolate linearly by depth
- Progressive draw: 40ms delay between each depth level on initial load
- Interaction: click anywhere on canvas to re-seed with new random angle (22–30 degrees) and redraw

**Prompt to paste into Claude Code:**
```
Using the algorithmic-art skill, create a generative art piece:

Title: Recursive Tree
Algorithm: recursive fractal binary tree
Canvas: 800x800px
Background: #0a0f0a
Trunk: starts at bottom center (400,780), points up, length 120px, width 8px
Branching: each branch splits into two at ~25 degrees per side, child length = parent * 0.72, child width = parent * 0.65
Depth: 10 levels
Color: #4a9e5c at trunk to #a8d5b5 at tips, interpolated linearly by depth level
Progressive draw: 40ms per level on initial load
Interaction: click anywhere to re-seed with a new random branching angle (22–30 degrees) and redraw the entire tree
Output: self-contained HTML file
Filename: recursive-tree.html
```

---

## Piece 3: Particle Drift

**Title:** Particle Drift
**Algorithm family:** Particle system with mouse repulsion and spring return
**Concept:** Two hundred particles distributed across the canvas, each assigned a fixed "home" position at initialization. The particles drift very slowly toward their home positions when undisturbed, creating a gentle living field. When the mouse moves within 80px of a particle, it is repelled — the repulsion force is inversely proportional to distance. When the mouse moves away, each particle springs back to its home position using spring physics: a spring constant and a damping coefficient that prevent overshoot. Particles near the cursor glow the channel's orange accent color; all others are white at reduced opacity. The canvas responds to window resize.

**Visual parameters:**
- Canvas: full-window responsive (updates on resize)
- Background: `#080808` (near-black)
- Particle count: 200
- Particle radius: 2px
- Default color: `#ffffff` at 60% opacity
- Near-mouse color: `#d97757` (channel orange) for particles within 80px of cursor
- Repulsion radius: 80px
- Repulsion force: `(80 - distance) * 0.12` (stronger when closer)
- Spring constant: 0.05 (gentle pull toward home)
- Damping: 0.92 (slows velocity each frame, prevents overshoot)
- Home position drift: each frame, particle velocity += spring force toward home
- Animation: continuous 60fps requestAnimationFrame loop

**Prompt to paste into Claude Code:**
```
Using the algorithmic-art skill, create a generative art piece:

Title: Particle Drift
Algorithm: particle system with mouse repulsion and spring return to home positions
Canvas: full-window responsive (update on window resize)
Background: #080808
Particles: 200 particles, each with a fixed random home position assigned at init
Particle radius: 2px
Default color: #ffffff at 60% opacity
Near-mouse color: #d97757 for particles within 80px of the cursor
Repulsion: particles within 80px of cursor are pushed away, force = (80 - distance) * 0.12
Spring return: each frame, velocity += (homePosition - currentPosition) * 0.05
Damping: velocity *= 0.92 each frame
Animation: continuous 60fps requestAnimationFrame loop
Output: self-contained HTML file
Filename: particle-drift.html
```

---

## Notes for recording
- Paste the prompts exactly as written — the parameter specificity is part of the point
- The three pieces represent three different algorithm families on purpose: noise-based, recursive, physics-based
- The `#d97757` orange in Particle Drift is the channel brand color — a subtle nod that's worth calling out on camera
- All three output files should be saved to `use-case/output/` after recording for the GitHub folder
