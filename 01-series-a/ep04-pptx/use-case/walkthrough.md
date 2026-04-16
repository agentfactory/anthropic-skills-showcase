# Demo walkthrough — Stackline investor deck (pptx skill)

Rehearsal script for Denis's live screen recording. Target duration: **6:00** (fits the 3:30–9:30 demo slot). Terminal font at 16pt+, dark mode, VS Code on left, Claude Code on right. Keep the .pptx file closed until the reveal moment.

---

## Pre-flight checklist (complete before recording starts)

1. Fresh directory: `mkdir ~/demo-ep04 && cd ~/demo-ep04`
2. Copy input brief: `cp <repo>/use-case/input/product-brief.md ~/demo-ep04/`
3. Confirm pptx skill is installed: `ls ~/.claude/skills/pptx/SKILL.md`
   - If missing, run: `npx @smithery/cli@latest skill add anthropics/pptx`
4. Confirm PowerPoint (or LibreOffice Impress) is installed and is the default `.pptx` opener
5. Close all other PowerPoint/Keynote/Slides windows
6. Claude Code launched in `~/demo-ep04`, empty session
7. VS Code open with `product-brief.md` in a tab but not yet focused
8. Close email, Slack, notifications off, "Do Not Disturb" on
9. Screen resolution: 1920×1080, browser/terminal at 100% zoom

---

## Recording — step by step

### Step 1 — Show the input (3:30–4:30) • ~60s

**Action:** Switch to VS Code. Open `product-brief.md`. Scroll through slowly — let the viewer read the key sections.

**Pause briefly on:**
- The company description line ("AI-powered sales pipeline tool")
- The traction section (MRR, customer count, growth rate)
- The funding ask ($8M Series A)

**Say:**
"Here's our starting point — a product brief for Stackline, a fictional AI sales pipeline company. Four hundred words, plain markdown. This is the kind of thing a founder drafts in Notion between calls — company background, the problem, early traction, the ask. No structure, no slides, no design. Let's turn it into a ten-slide investor deck."

---

### Step 2 — Install the skill (4:30–4:50) • ~20s

**Action:** Switch to terminal. Type the install command.

```
npx @smithery/cli@latest skill add anthropics/pptx
```

**Wait for:** Install confirmation message.

**Say:**
"One command. That's the install. Drop it into your terminal, and the skill is in your Claude environment."

> Skip this step if you've pre-installed the skill — just say "Already installed — let me show you the prompt."

---

### Step 3 — Write and submit the prompt (4:50–5:30) • ~40s

**Action:** Switch to Claude Code. Type the prompt slowly so viewers can read it.

```
Use the pptx skill to create a 10-slide investor deck for Stackline
based on the product brief in product-brief.md. The deck should include:
title slide, problem, solution, market size, product overview, traction,
team, roadmap, financials, and closing CTA. Use a dark theme with orange
accents. Output as stackline-investor-deck.pptx.
```

**Wait for:** pptx skill activation banner to appear at the top of the Claude Code UI.

**Say (while waiting):**
"Notice the banner at the top — that's Claude recognizing the intent and loading the pptx skill into context."

---

### Step 4 — Watch it build (5:30–7:00) • ~90s

**Action:** Let Claude's response stream. Do not interrupt or speed up.

**Narrate what's happening on screen. Use these callouts:**

- When it lists the 10 slides: "It's confirming the structure before it builds — ten slides, exactly what we asked."
- When it mentions the market size slide: "Look — it's pulling the TAM and SAM from the brief and laying out a three-column structure automatically."
- When it mentions the traction slide: "It's formatting the metrics as hero numbers — that's the investor-deck convention."
- When the file appears in the directory tree: "There it is. `stackline-investor-deck.pptx`. Sixty-something seconds."

**Say at completion:**
"That's the file. Let's open it."

---

### Step 5 — The aha moment: open in PowerPoint (7:00–8:00) • ~60s

**Action:** Double-click `stackline-investor-deck.pptx` in the file explorer. Let PowerPoint launch naturally — do not rush this.

**Wait for:** Title slide fully renders. Pause for 3 seconds so viewers can take it in.

**Say:**
"Real PowerPoint file. Not a PDF, not an image — every element is editable. Click on the title and start typing."

**Action:** Click through the slides one by one. Pause 1–2 seconds on each. Narrate briefly:
- Title: "Title slide."
- Problem: "Problem slide — it pulled the core pain point from the brief."
- Solution: "Solution."
- Market: "Market size — TAM, SAM, SOM in three columns."
- Product: "Product overview."
- Traction: "Traction — look at how it formatted the numbers as hero metrics. That's the format."
- Team: "Team in a two-column grid."
- Roadmap: "Roadmap — three quarters laid out horizontally."
- Financials: "Financials table."
- CTA: "Closing CTA with the ask."

**Say after the last slide:**
"Ten slides, consistent theme, all the content from the brief. Let me show you the iteration step."

---

### Step 6 — Iterate: change the color theme (8:00–9:00) • ~60s

**Action:** Switch back to Claude Code. Type the follow-up prompt.

```
Update stackline-investor-deck.pptx: change the accent color from orange
to #6a9bcc (muted blue) throughout all slides. Keep the dark background.
Regenerate the file.
```

**Wait for:** Claude confirms the change and writes the updated file.

**Action:** Double-click the updated file. Open it side by side with the original (two PowerPoint windows).

**Say:**
"Same deck, same structure, new palette. Forty seconds for a full color theme change. This is the refinement loop — describe the delta, Claude regenerates. You're not rebuilding from scratch."

---

### Step 7 — Closing shot (9:00–9:30) • ~30s

**Action:** Close one PowerPoint window. Display the final deck full-screen on the right. On the left, show the original `product-brief.md` in VS Code.

**Say:**
"From this — a plain-text brief — to this — a ten-slide investor deck ready to share. No templates, no manual formatting, no alignment guides. Under six minutes including the color iteration. That's pptx."

---

## What to capture in `output/`

After recording, copy these into `use-case/output/`:
- `stackline-investor-deck.pptx` — the original orange-accent version
- `stackline-investor-deck-blue.pptx` — the blue iteration
- `demo-prompt.txt` — the exact prompt used on camera (copy from above)

---

## Troubleshooting

**pptx skill doesn't activate:**
- Run `/skills` in Claude Code and confirm `pptx` appears in the list.
- If missing, re-run: `npx @smithery/cli@latest skill add anthropics/pptx`
- Worst case, prefix the prompt with: "Using the pptx skill, ..."

**PowerPoint takes too long to open:**
- Pre-launch PowerPoint before the demo and leave it in the background. Double-clicking the file will open in the existing instance, which is faster.
- If using LibreOffice: same principle applies. Open Impress first.

**Claude asks clarifying questions instead of building:**
- Answer briefly: "Yes, use the structure I listed." Then let it proceed.
- Keep answers to one sentence — don't extend the exchange or you'll lose time.

**The color theme iteration produces visual artifacts:**
- Accept the result and move on. Note it verbally: "You might want to tweak the exact shade — that's an easy manual fix in PowerPoint."

**File exceeds 6:30:**
- Cut the side-by-side comparison in Step 6 — just open the blue version alone. Save 20 seconds.
- In Step 4, narrate only three of the ten slides rather than all ten. Save another 20 seconds.

---

## Retakes

If a take runs over 6:30 or has a major flub in Steps 4–5 (the aha moment), restart from Step 3. Steps 1 and 2 can be used from a previous take in edit. The aha moment (PowerPoint opening, Step 5) must be a clean take — it's the centerpiece of the episode.
