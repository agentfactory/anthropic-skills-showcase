# Demo walkthrough — Draftly Landing Page

Rehearsal script for Denis's live screen recording. Target duration: **6:00** (fits the 3:30–9:30 demo slot). Keep terminal font at 16pt+, dark mode, VS Code on left, Chrome on right.

---

## Pre-flight checklist (do before recording starts)

1. Fresh demo directory: `mkdir ~/demo-ep06 && cd ~/demo-ep06`
2. Confirm frontend-design is installed: `ls ~/.claude/skills/frontend-design/SKILL.md`
3. Copy the brief: `cp /path/to/ep06/use-case/input/landing-page-brief.md ~/demo-ep06/`
4. Open `landing-page-brief.md` in VS Code — visible but not yet focused
5. Create output directory: `mkdir -p ~/demo-ep06/output`
6. Chrome open on a blank tab — NOT on smithery.ai or any competitor sites
7. Claude Code launched in `~/demo-ep06/`, empty session
8. Close email, Slack, all notifications. "Do Not Disturb" on.
9. Screen resolution: 1920x1080. Record at 1080p.
10. DevTools open in Chrome, docked to right side, at standard size (not fullscreen)

---

## Recording — step by step

### Step 1 — Show the brief (3:30–4:30) • ~60s

**Action:** Focus VS Code on `landing-page-brief.md`. Scroll slowly from top to bottom.

**Say:** "Here's the starting point — a brief that took about ten minutes to write. Product name, target audience, tone, three features, three pricing tiers, and a rough color direction. Nothing a non-designer couldn't write. This is what we're handing to Claude."

**Pause on:** the one-sentence product description at the top. Let it sit for two seconds.

**Say:** "That first sentence is the hero headline. Let's see what the skill does with it."

---

### Step 2 — Invoke the skill (4:30–5:30) • ~60s

**Action:** Switch to Claude Code. Open a new session. Type the following prompt — type it, don't paste, so the keystrokes are visible:

```
Use the frontend-design skill to build a complete SaaS landing page
for Draftly using the brief in landing-page-brief.md.

Include:
- Hero section with headline, subheadline, and primary CTA button
- Features grid with 3 feature cards (icons + heading + description)
- Pricing table with 3 tiers (Free / Pro / Team)
- Testimonials section with 2 customer quotes
- Final CTA section at the bottom

Output a single self-contained HTML file at output/draftly-landing.html.
```

**Wait for:** the frontend-design skill activation banner to appear at the top of Claude Code.

**Say (while pointing at the banner):** "There — the skill just loaded. Claude now has a full design system in context, not just its base knowledge."

---

### Step 3 — Narrate the generation (5:30–7:00) • ~90s

Claude will stream the response in stages. Narrate each stage as it appears:

**When Claude surfaces its plan (color palette, section order):**
"Notice it's planning before coding — it's pulling the brand colors from the brief, deciding on the section order, identifying the component patterns. This prevents the expensive back-and-forth of 'that's not what I meant.'"

**When CSS variables block appears:**
"CSS custom properties from the brief's color direction. Everything downstream references these variables — if the client changes brand colors, you change three lines."

**When hero HTML appears:**
"Hero section. Read that headline — it's almost word for word from the brief. The skill understood the tone and translated it to copy."

**When features grid appears:**
"Features grid. CSS Grid with auto-fit — this collapses to a single column on mobile without a single media query written by hand."

**When pricing table appears:**
"Pricing. Center card elevated. The 'Most Popular' badge is pure CSS — no library."

**When Claude confirms file is written:**
"File's done. Let's open it."

**Action:** In the terminal, run: `open output/draftly-landing.html`

**Wait for:** Chrome opens and the full page renders.

**Say (as page appears — let this land):** "There it is."

**Action:** Scroll slowly from top to bottom in Chrome. Let the viewer see every section. Take five full seconds on this scroll — don't rush it. This is the aha moment.

---

### Step 4 — Review the output (7:00–8:00) • ~60s

**Action:** In Chrome, open DevTools (F12). Switch to responsive mode (Ctrl+Shift+M). Set width to 375px (iPhone SE).

**Say:** "Mobile check — the grid collapses, text reflows, nav condenses. Every breakpoint handled."

**Action:** Run Lighthouse or the Accessibility panel. Show the result briefly.

**Say:** "Accessibility pass. Contrast ratios, focus states, semantic HTML. This is structurally sound, not just visually polished."

**Action:** Switch to the Sources tab. Show the `<head>` — no external CDN links.

**Say:** "Zero external dependencies. Drop this file on Netlify right now and it goes live. No build step."

---

### Step 5 — Iterate (8:00–9:00) • ~60s

**Action:** Switch back to Claude Code. Type this follow-up prompt:

```
The hero feels a bit corporate. Make it more playful:
- New headline with more energy — something that speaks directly to the pain
- Add a subtle animated gradient to the hero background (CSS keyframes, no JS)
- Give the CTA button a gentle bounce on hover (transform: scale)
Keep everything else exactly as is.
```

**Wait for:** Claude streams targeted edits — only the hero section should change.

**Say (while Claude edits):** "Watch what it changes — only the hero. It's not regenerating the whole file. Surgical edit."

**Action:** Hard-refresh Chrome (Cmd+Shift+R / Ctrl+Shift+R).

**Say:** "The gradient animation. New headline. Bouncy CTA. One follow-up, thirty seconds of generation."

---

### Step 6 — Final scroll (9:00–9:30) • ~30s

**Action:** Close DevTools. Full-screen the browser. Scroll the final page from top to bottom in five to six seconds.

**Say:** "Hero with animated gradient. Features. Pricing. Testimonials. CTA. From a seven-sentence brief to a page that looks like a real product. That's the frontend-design skill."

**Action:** Split Chrome and VS Code — brief on left, finished page on right.

**Say:** "From this — to this."

---

## What to capture in `output/`

After recording, commit to `use-case/output/`:
- `draftly-landing.html` — final page after the iteration step

---

## Troubleshooting

**Frontend-design doesn't auto-activate:**
Type `/skills` in Claude Code to confirm it's listed. If it's missing, re-run the install command. Worst case, prefix the prompt with "Using the frontend-design skill, ..." and it will load explicitly.

**Claude asks clarifying questions:**
Answer briefly and keep moving. Authenticity beats script adherence. If it asks about color scheme, point to the brief: "Use the colors in the brief."

**Page doesn't render in Chrome:**
Check for a syntax error — ask Claude "There's a rendering issue with the HTML file, please check for syntax errors and fix." This is rare but can happen on very long outputs.

**The iteration step regenerates the whole file:**
Accept it and move on — the end result will still be correct. Just note in voiceover: "Sometimes Claude rewrites the full file — that's fine, the output is the same."

**Demo runs long:**
If you're at 5:30 and still in Step 3, compress Steps 4 and 5 into one: skip the Lighthouse check, just show mobile view and the iteration. Target 6:00 hard stop before Step 6.

---

## Retakes

If a take goes over 6:30 or has a significant flub: restart from Step 1. Don't splice within a step — section timings in Resolve assume clean takes per step.

Best takes are the ones where Claude surprises you. If the page looks particularly good, let the scroll breathe.
