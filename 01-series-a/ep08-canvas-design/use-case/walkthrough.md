# Demo Walkthrough — Signal 2025 Conference Poster

Rehearsal script for Denis's live screen recording. Target duration: **6:00** (fits the 3:30–9:30 demo slot). Keep terminal font at 16pt+, dark mode throughout. VS Code on the left half, Claude Code on the right half.

---

## Pre-flight checklist (complete before recording starts)

1. Fresh output directory: `mkdir ~/demo-ep08 && cd ~/demo-ep08`
2. Confirm canvas-design is installed: `ls ~/.claude/skills/canvas-design/SKILL.md`
3. Copy the input brief into the demo folder: `cp <repo>/use-case/input/conference-brief.md ~/demo-ep08/`
4. Open `conference-brief.md` in VS Code — visible but not front-and-center yet
5. Claude Code launched in `~/demo-ep08`, empty session
6. Browser (Chrome) open in a separate Space or behind the main window — ready to open HTML files
7. Close email, Slack, notifications off, Do Not Disturb on
8. Screen resolution: 1920x1080, Retina display preferred
9. Have a finder/file manager window ready to show output files at Step 6

---

## Recording — step by step

### Step 1 — Read the brief (3:30–4:30) | approx 60 seconds

**Action:** Bring VS Code to front. `conference-brief.md` is open. Scroll through the whole document slowly — top to bottom, about 8 seconds of scroll.

**Say:**
"Here's the input. A one-page event brief for Signal 2025 — a fictional AI infrastructure conference. We've got a venue, dates, four keynote speakers with their titles and companies, a tagline, a preferred color palette, and a specific ask. Let me zoom in on that ask."

**Action:** Highlight or zoom into the "Specific Ask" section at the bottom of the brief.

**Say:**
"Eighteen by twenty-four inches — standard US poster size. Bold typographic style. And this line: 'must feel premium, not corporate.' That's the creative direction. Let's see how canvas-design interprets it."

---

### Step 2 — Invoke canvas-design (4:30–5:30) | approx 60 seconds

**Action:** Switch to Claude Code. Click into the input field. Pause 1 second, then type the following prompt at normal reading speed:

```
Use canvas-design to create an 18x24 inch print-ready poster for Signal 2025
using the attached event brief. Output as a self-contained HTML/CSS file.
Bold typographic style — premium, not corporate.
```

**Action:** Attach or reference `conference-brief.md` in the message if the Claude Code UI supports file attachment. If not, paste the brief contents inline after the prompt.

**Action:** Hit enter.

**Say (while prompt sends):**
"I'm not opening Figma. I'm not picking fonts. I'm giving canvas-design the brief and the style direction — and Claude handles the rest."

**Wait for:** The canvas-design skill banner to appear at the top of the Claude Code output. It should look something like `[canvas-design skill active]` or similar.

**Say (when banner appears):**
"There's the skill activating. Claude is now working in design mode, not text mode."

**Wait for:** HTML/CSS output to finish streaming. Do not fast-forward this — let it stream at its natural speed. While it streams, say:

**Say:**
"This is about two hundred lines of production-quality HTML and CSS — grid layout, custom type sizing, print media queries, color variables. All generated from that brief."

---

### Step 3 — First render: the aha moment (5:30–6:30) | approx 60 seconds

**Action:** When output finishes, locate the generated HTML file. It will typically be in the current directory. Open it in Chrome: right-click the file > Open With > Chrome (or drag to Chrome).

**Action:** Chrome shows the poster. Let it sit full-screen for 4 full seconds before saying anything.

**Say:**
"There it is."

**Action:** Scroll the poster slowly in the browser — top to bottom over about 6 seconds.

**Say:**
"SIGNAL 2025 in condensed capitals. Speaker names in a typographic grid. Event details anchored to the bottom. Deep navy background, electric blue accents — exactly what the brief specified."

**Action:** Zoom in on the speaker section specifically.

**Say:**
"The font hierarchy, the tracking on the headline, the proportion between the header and the speaker block — these are actual design decisions. Canvas-design made them. The brief said premium, not corporate — and this is what that means in pixels."

---

### Step 4 — Inspect the output (6:30–7:15) | approx 45 seconds

**Action:** Switch back to VS Code. Open the generated HTML file. Scroll through the CSS section.

**Say:**
"Let's look under the hood for thirty seconds."

**Action:** Scroll to the `@page` CSS rule and pause.

**Say:**
"Here's the print setup — `@page` with `size: 18in 24in`. That tells the browser the exact physical dimensions when printing. Everything else — the grid, the type scale, the color system — is in CSS custom properties, so it's easy to override."

**Action:** Scroll to the `@media print` block and pause on it briefly.

**Say:**
"The print media query removes anything screen-specific. What you print is exactly what you see. Open Chrome's print dialog, set destination to Save as PDF, no scaling — and you have a vector PDF for the print shop."

---

### Step 5 — Iterate: brutalist style (7:15–8:30) | approx 75 seconds

**Action:** Switch back to Claude Code. Type the following prompt:

```
Revise the poster to a bold brutalist typographic style.
Increase contrast dramatically — near-black background, high-voltage yellow
as the accent instead of electric blue. Make the type bigger and rawer.
Reduce visual polish — this should feel like a zine, not a conference brochure.
```

**Action:** Hit enter.

**Say (while it processes):**
"Same event, same brief, completely different creative direction. Brutalist design — high contrast, oversized type, deliberate roughness. Let's see how canvas-design handles the shift."

**Action:** When the revised HTML file is ready, open it in Chrome. Split-screen Chrome if possible: Version 1 on the left, Version 2 on the right. If split-screen is difficult, do a quick cut back and forth.

**Say:**
"There's the contrast. Left: polished conference branding. Right: brutal editorial impact. Two design directions, two minutes, same brief. Neither required me to open a design tool."

---

### Step 6 — Export to PDF and close (8:30–9:30) | approx 60 seconds

**Action:** Focus Chrome on Version 1 (the premium navy version). Open Chrome's print dialog: Cmd+P (Mac) or Ctrl+P (Windows).

**Say:**
"Final step — validate the print output."

**Action:** In the print dialog, set:
- Destination: Save as PDF
- Paper size: Custom (18 x 24 inches) — or confirm it pre-populates from the CSS
- Scale: 100% (no scaling)
- Margins: None

**Say:**
"Paper size is already set from the CSS — no adjustments needed. Scale at one hundred percent, margins none."

**Action:** Click Save. Show the file saving to `~/demo-ep08/signal-2025-poster-v1.pdf`. Do the same for Version 2.

**Action:** Open the file manager. Show both PDF files and both HTML files sitting in the directory.

**Say:**
"Two poster designs, two PDF exports. Full brief to finished files — under eight minutes on the clock. That goes straight to a print shop."

**Action:** Pause 2 seconds on the file manager view, then cut back to the poster in Chrome.

---

## Troubleshooting

**Canvas-design skill does not activate:**
- Verify installation: `ls ~/.claude/skills/canvas-design/SKILL.md`
- Re-install if missing: `npx @smithery/cli@latest skill add anthropics/canvas-design`
- Try rephrasing the prompt to explicitly say "use canvas-design"

**HTML output opens but poster looks broken in browser:**
- Try Chrome specifically (Firefox and Safari may render print CSS differently)
- Check if the file saved completely — look for the closing `</html>` tag
- If fonts are missing, the CSS font stack should degrade gracefully — verify the fallback renders acceptably

**Print dialog does not show 18x24 paper size:**
- This is expected if the OS doesn't have a custom paper size configured
- In Chrome's print dialog, choose "More settings" > "Paper size" > "Custom" > enter 18 x 24 inches
- Alternatively, export at any size and let the print shop scale to 18x24 — vector output will not degrade

**Iteration prompt does not change the style significantly:**
- Be more directive: specify exact colors (hex values help), explicit type size instructions ("make the headline 40% larger"), and reference style examples ("like a 1970s concert poster")
- canvas-design responds better to specific visual vocabulary than general aesthetic words alone
