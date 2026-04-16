# Demo walkthrough — Canopy brand guidelines

Rehearsal script for Denis's live screen recording. Target duration: **6:00** (fits the 3:30–9:30 demo slot). Keep terminal font at 16pt+, dark mode throughout, VS Code on the left, Claude Code panel on the right.

---

## Pre-flight checklist (complete before recording starts)

1. Fresh directory: `mkdir ~/demo-ep13 && cd ~/demo-ep13`
2. Confirm brand-guidelines is installed: `ls ~/.claude/skills/brand-guidelines/SKILL.md`
3. Copy the brief into position: `cp <path>/use-case/input/brand-brief.md ~/demo-ep13/brand-brief.md`
4. Open `brand-brief.md` in VS Code — keep it in a tab but not yet visible on screen
5. Claude Code launched in `~/demo-ep13`, empty session
6. Notifications off, "Do Not Disturb" on, Slack closed
7. VS Code theme: Dark+ or equivalent. Font: JetBrains Mono or similar monospace, 16pt minimum
8. Window layout: VS Code left half (file tree + editor), Claude Code right half

---

## Recording — step by step

### Step 1 — Show the input (3:30–4:30) — 60s

**Action:** Switch VS Code focus to `brand-brief.md`. Scroll through it slowly — take the full 60 seconds.

**Say:** "This is the entire input. The brand is called Canopy — a B2B climate-tech startup. Logo: an abstract tree formed by upward arrows, dark green on white. Three adjectives: purposeful, optimistic, grounded. Target audience: sustainability officers at mid-market companies. And one feel sentence: 'like a trusted expert who also happens to care deeply about the planet.' That's it. Nine lines. No hex codes. No font names. Nothing but signal."

**Wait for:** Nothing — just let the brief be visible. Pause on it for 3–4 seconds before moving.

---

### Step 2 — Invoke the skill (4:30–5:30) — 60s

**Action:** Switch focus to Claude Code. Type the following prompt slowly and deliberately:

```
Read brand-brief.md and use the brand-guidelines skill to generate
a complete visual brand guidelines document for Canopy.
Output it as brand-guidelines.md in this directory.
```

**Say (while typing):** "I'm not writing a prompt — I'm referencing the brief and asking Claude to apply the brand-guidelines skill. The skill is what turns a brief into a system."

**Wait for:** The brand-guidelines skill activation indicator to appear at the top of Claude Code.

**Say (pointing at the activation banner):** "There — the skill loaded. Claude now has the brand-guidelines framework in context alongside the brief."

---

### Step 3 — Watch Claude build the system (5:30–7:00) — 90s

**Action:** Let Claude stream its response. Narrate what's appearing as it renders. Do not type anything during this step.

**Say when the brief-restatement appears:** "Notice it's confirming its interpretation first — 'Canopy communicates environmental leadership without the visual clichés of the green movement.' It already knows what to avoid."

**Say when the color section renders:** "Here's the moment — the color palette. Forest green, Moss, a warm neutral, and a muted amber accent. Look at these greens — they're desaturated, deep. Not the neon green of a startup that just pivoted to sustainability. These say 'we've been doing this for a decade.' That's the word 'grounded' doing work."

**Say when the typography section renders:** "Poppins for headings, IBM Plex Serif for body. Geometric sans plus humanist serif. That pairing lands exactly on 'trusted expert who cares.' Three adjectives in, a type system out. That's the aha moment right there."

**Say as spacing, logo rules, and do/don't appear:** "The rest of the system follows — 8-point spacing scale, logo clear space rules, a do/don't panel that calls out specific misuse patterns, and an application mockup spec for a SaaS dashboard header."

**Wait for:** Claude finishes streaming. `brand-guidelines.md` is written to disk.

---

### Step 4 — Review the output (7:00–8:00) — 60s

**Action:** Switch to VS Code. Open `brand-guidelines.md`. Scroll through the full document at medium speed — about 30 seconds to scroll end to end.

**Say:** "Let's walk through what we got. Six sections, exactly what the skill targets. Every color has a name, a hex code, and a one-sentence rationale. Every type decision specifies weight, size range, and use case."

**Action:** Pause scrolling on the do/don't section.

**Say:** "What I like most is the specificity of the don'ts. It says 'do not pair the Canopy mark with imagery that centers individual consumer choices — this brand is B2B and systemic.' That came from the brief. The skill connected 'sustainability officers at mid-market companies' to 'don't look like a recycling campaign.' That's not generic brand advice. That's a real brand decision."

---

### Step 5 — Iterate: dark mode variant (8:00–9:00) — 60s

**Action:** Switch back to Claude Code. Type the follow-up prompt:

```
The product ships a dark-mode web app. Add a dark mode color section
to brand-guidelines.md with the same palette adapted for dark surfaces —
maintain the same brand feel and WCAG AA contrast minimums.
```

**Say (while typing):** "One iteration. The engineering team builds a dark-mode app. I want the palette adapted, not just inverted — and I want contrast ratios annotated."

**Wait for:** Claude streams the dark mode section and updates `brand-guidelines.md`.

**Say (as it streams):** "Watch what it does — it shifts Forest green to a lighter, more luminous variant for dark backgrounds. The warm neutral becomes the darkest surface. And it annotates every pairing with a contrast ratio. That saves you a Figma audit pass."

---

### Step 6 — Closing shot (9:00–9:30) — 30s

**Action:** Switch to VS Code. Scroll `brand-guidelines.md` from the top to the bottom — slowly, showing the full document including the new dark mode section at the end.

**Say:** "Nine lines of input. A complete visual system — light and dark — with documented decisions and real hex codes. Ready to hand to a developer, a designer, or a contractor. That's what the brand-guidelines skill does."

---

## What to capture in `output/`

After recording, copy these into `use-case/output/`:
- `brand-guidelines.md` — the complete generated guidelines document (final version, after dark mode iteration)

---

## Troubleshooting

- **Skill doesn't auto-activate:** Type `/skills` in Claude Code to confirm brand-guidelines is listed. If it's missing, re-run the install command. Worst case, prefix the prompt with "Using the brand-guidelines skill, ..."
- **Colors feel generic:** This is unlikely given the brief, but if it happens, add a follow-up: "The greens feel too bright — make them 20% less saturated to match the 'grounded' adjective." The skill handles targeted color refinements well.
- **Dark mode section doesn't include contrast ratios:** Add them manually in a follow-up: "Annotate each dark-mode color pairing with its WCAG AA contrast ratio." One extra prompt, 10 seconds.
- **Claude asks clarifying questions:** Answer them truthfully — authenticity over script adherence. Keep answers to one sentence each to stay under 6 minutes.
- **Document is too long to scroll in 30 seconds:** Increase scroll speed slightly. Don't skip sections — the viewer needs to see the full scope.

## Retakes

If a take runs over 6:30 or has a technical glitch mid-stream: restart from the top. Do not try to edit within a step — the section timings in Resolve assume clean, continuous takes per step.
