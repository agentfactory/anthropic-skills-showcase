# Demo walkthrough — theme-factory (Three Themes on a Plain HTML Annual Report)

Rehearsal script for Denis's live screen recording. Target duration: **6:00** (fits the 3:30–9:30 demo slot).
Keep terminal and browser side by side — VS Code or terminal on the left, browser preview on the right.
Terminal font 16pt+, dark mode, browser at 1280px viewport width.

---

## Preflight checklist (complete before recording starts)

1. Install the skill if not already present:
   ```
   npx @smithery/cli@latest skill add anthropics/theme-factory
   ```
2. Confirm installation: `ls ~/.claude/skills/theme-factory/SKILL.md`
3. Copy the demo file into a clean working directory:
   ```
   mkdir ~/demo-ep10 && cp use-case/input/plain-report.html ~/demo-ep10/
   ```
4. Open `plain-report.html` in browser — confirm it looks raw and unstyled (browser defaults only)
5. Open Claude Code in `~/demo-ep10/` — new session, no context loaded
6. Have the browser preview tab ready but not yet visible on screen
7. Close email, Slack, notifications off, "Do Not Disturb" on
8. Screen resolution: 1920x1080. Record at 1080p. Do not record at 4K — Resolve timeline is set up for 1080.

---

## Recording — step by step

### Step 1 — Show the unstyled document (3:30–4:30) — ~60s

**Action:** Open `plain-report.html` in the browser. Scroll slowly from top to bottom.

**Say:** "This is our starting point — Meridian Analytics' annual report. Full semantic HTML: hero, executive summary, a revenue table, regional breakdown, four key metrics, a chart placeholder, the leadership section, full-year outlook, and footnotes. Everything a real annual report needs. And it looks exactly like 1996 — browser defaults, no layout, no CSS whatsoever. This is what theme-factory is designed to start from."

**Note:** Go slow here. The audience needs to register how bad the before state is — it makes the transformation more dramatic.

---

### Step 2 — Apply Theme 1: Corporate Minimal (4:30–5:30) — ~60s

**Action:** Switch to Claude Code. Type the following prompt exactly:

```
Apply a Corporate Minimal theme to plain-report.html. Think Goldman Sachs
annual report — restrained typography, navy and white, generous whitespace,
data tables with clean rules, no decorative elements.
```

**Say (while typing):** "Theme one — Corporate Minimal. I'm describing the aesthetic in plain English. No CSS spec, no Figma file, just a direction."

**Wait for:** theme-factory activation banner to appear in Claude Code. When it does:

**Say:** "There's the skill activation — it's now reading the document structure before writing any CSS."

**Wait for:** Claude finishes generating the stylesheet and writes it into the file.

**Action:** Refresh the browser. Pause 2 seconds on the result.

**Say:** "Navy header, constrained column width, hairline table rules. That looks like it went through a design team. Forty-five seconds."

---

### Step 3 — Apply Theme 2: Bold Editorial (5:30–6:30) — ~60s

**Action:** New prompt in Claude Code:

```
Now apply a Bold Editorial theme to the same HTML — think New York Times
or Bloomberg Businessweek feature. Large display type, high contrast,
generous section breaks, orange accent color, tables as data features
not data dumps.
```

**Say (while typing):** "Same file. Completely different aesthetic direction — editorial magazine versus finance report."

**Wait for:** Claude generates the theme and writes it.

**Action:** Refresh the browser.

**Say:** "Same content, different world. The metric cards with orange accents, chapter-style section headers, the running text set wider for longer reads. This is what Bloomberg would publish."

**Action:** Keep both themes visible mentally for Step 5 — you'll need to show them side by side.

---

### Step 4 — Apply Theme 3: Dark Tech (6:30–7:30) — ~60s

**Action:** New prompt in Claude Code:

```
Apply a Dark Tech theme to the same HTML — dark background (#0d1117),
monospace data presentation, cyan and green accents, tables as code-native
grids, metrics displayed as terminal-style readouts.
```

**Say (while typing):** "Theme three — where it gets interesting for the developer audience. Dark Tech. Think Stripe's API docs or a Vercel dashboard."

**Wait for:** Claude generates the theme.

**Action:** Refresh the browser. Let the Dark Tech design fully render before speaking.

**Say:** "The same semantic HTML, now looking like it belongs in a developer-facing product dashboard. The revenue table reads like a terminal output. The metrics have that monospace precision. The footnotes look like code comments."

---

### Step 5 — The three-way comparison (7:30–8:30) — ~60s

**Action:** Open three browser tabs with each themed version. Tile them horizontally (or use a screen split tool). Label each one with a simple annotation overlay if possible.

**Say:** "Here's the side-by-side. Look at the revenue section in all three. In Corporate Minimal — a formal table with hairline rules. In Bold Editorial — a data feature with a large label and accent bar. In Dark Tech — a terminal grid with monospace figures. Three brand personalities. One HTML file. This is what used to take a design team an afternoon per variant."

**Tip:** Slow down here. This is the aha moment. Let the audience sit with the three-way comparison for a full 3–4 seconds of silence before continuing.

---

### Step 6 — Iterate: refine the Dark Tech accent color (8:30–9:30) — ~60s

**Action:** Switch to Claude Code. Make sure the Dark Tech version is active in the browser. Type:

```
In the Dark Tech theme, change the primary accent from cyan to a warm
orange-amber (#e8a04a). Update the metric values, the table header row,
and the active section indicator to use this color instead.
```

**Say:** "One refinement — the cyan is a bit cool. I want to push it warmer. Watch what it does here — this is important."

**Wait for:** Claude makes the targeted edits.

**Say (while it edits):** "Notice it's doing a targeted variable update, not rewriting the whole stylesheet. It identified the three places the accent was defined and changed only those."

**Action:** Refresh the browser.

**Say:** "Warmer, more on-brand, done. Twenty seconds. Skills are living documents — refine them exactly like code."

**Action:** Show the final Dark Tech amber version full-screen for 3 seconds, then switch to the three-panel comparison for the closing shot.

---

## What to save after recording

Copy these into `use-case/output/`:
- `plain-report-corporate-minimal.html` — final themed version 1
- `plain-report-bold-editorial.html` — final themed version 2
- `plain-report-dark-tech.html` — final themed version 3 (with amber accents after iteration)

---

## Troubleshooting

- **theme-factory doesn't activate:** Type `/skills` in Claude Code to confirm it's listed. If absent, re-run the install command. As a fallback, prefix your prompt with "Using the theme-factory skill, ..."
- **CSS output has conflicts with browser defaults:** Add `*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }` as a reset before the generated styles. This is not usually needed but can occur with certain table layouts.
- **Browser preview doesn't show the style:** Check that Claude actually wrote a `<style>` block inside `<head>`. If it produced a separate `.css` file, add a `<link>` tag to `plain-report.html` manually — this is acceptable on camera and takes 5 seconds.
- **Three-way comparison is hard to show:** If tiling three browser windows is awkward, use three separate screenshots and paste them into a single browser tab with a comparison layout. Prepare this fallback before recording.
- **Claude asks clarifying questions before generating:** Answer briefly. For Corporate Minimal: "Navy and white, no decorative elements." For Bold Editorial: "Orange accents, large type, high contrast." For Dark Tech: "Dark background, monospace, cyan or amber accents." Keep answers under 10 words each.

## Retakes

If a take goes over 6:30 or has a significant error on camera: restart from Step 1. Don't edit within a step — section timings in Resolve assume clean takes per step. The theme-factory outputs are deterministic enough that re-running will produce visually equivalent results.
