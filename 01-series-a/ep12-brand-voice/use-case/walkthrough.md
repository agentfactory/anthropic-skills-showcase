# Demo walkthrough — Luma brand voice guide

Rehearsal script for Denis's live screen recording. Target duration: **6:00** (fits the 3:30–9:30 demo slot). Keep terminal font at 18pt+, dark mode, Claude Code full-screen with VS Code visible in a split or alt-tab away.

---

## Pre-flight checklist (complete before recording starts)

1. Install confirmed: run `ls ~/.claude/skills/brand-voice/SKILL.md` — expect a file, not an error
2. Open `use-case/input/copy-samples.md` in VS Code — scroll through once to familiarize yourself
3. Launch Claude Code in a fresh session in the `ep12-brand-voice/` directory — no existing chat history visible
4. VS Code on left half, Claude Code on right half (or two monitors: VS Code on secondary, Claude Code on primary)
5. Close email, Slack, Discord, and any browser tabs with notifications
6. Turn on Do Not Disturb — system-wide
7. Increase font sizes: terminal 18pt minimum, VS Code 16pt minimum
8. Confirm dark mode is active in both VS Code and Claude Code
9. Run a dry-run invocation first (off-camera) to see roughly how long the skill takes — it varies from 45 to 90 seconds depending on copy length

---

## Recording — step by step

### Step 1 — Show the input (3:30–4:30) • ~60s

**Action:** Switch to VS Code. Open `use-case/input/copy-samples.md`. Scroll from the top slowly.

**Say:**
"Here are the five copy samples we're working with. A website hero, an email subject line, a tweet, a product feature tooltip, and a 404 error message. Company is called Luma — expense management for remote teams."

**Pause on Sample 1 — the hero:**
"Even in the first line — 'Expenses that don't make you groan' — you can feel a personality. They're not claiming easy. They're acknowledging pain. That's a brand choice."

**Scroll to Sample 3 — the tweet:**
"And that tweet. Dry wit, short sentences, 'quietly' as its own line. Someone made real decisions here. Let's see if the skill can find the system behind them."

**Timing note:** Keep this step at 60 seconds max. Don't read every sample aloud — let the viewer read. Your job is to highlight two details and create anticipation.

---

### Step 2 — Invoke the skill (4:30–5:30) • ~60s

**Action:** Switch to Claude Code. Paste the full content of `use-case/input/copy-samples.md` directly into the chat input. Then add the following prompt on a new line:

```
Use the brand-voice skill to analyze these 5 copy samples from Luma,
a B2B fintech startup doing expense management for remote teams.
Reverse-engineer their brand voice and produce a complete brand voice guide
with personality pillars, tone descriptors, vocabulary, a do/don't matrix,
and a scoring rubric.
```

**Say (while typing):**
"I'm not writing a prompt about brand voice theory — I'm just giving Claude the raw material and asking for the structure. The skill handles the methodology."

**Action:** Hit Enter.

**Say (as the banner appears):**
"There's the brand-voice banner. Claude has loaded the skill. You'll notice the response format changes immediately — it's not conversational from here on, it's structured document mode."

**Timing note:** The paste + typing takes about 20 seconds. The skill activation banner should appear within 2–3 seconds of sending. If it doesn't appear, see Troubleshooting below.

---

### Step 3 — Watch the skill work (5:30–7:00) • ~90s

**Action:** Let the output stream. Do not type anything. Move the cursor out of the way. Watch the sections appear.

**Say (as personality pillars stream in):**
"Watch the personality pillars section. It's not giving us one-word adjectives — it's giving us tensions. 'Confident but not boastful.' That's actionable. A new writer can calibrate against that."

**Say (as vocabulary section streams):**
"The vocabulary section is the one content teams use daily. Preferred words, words to avoid, and — importantly — the reason for each. 'Quietly' is preferred because it implies competence without announcement. 'Seamlessly' is to avoid because it's industry filler. That reasoning is what makes the guide usable."

**Action:** As the do/don't matrix streams in, slow your narration and let the viewer read it.

**Say (quietly, over the matrix rendering):**
"The do/don't matrix. Real sentence rewrites. Not abstract rules."

**Timing note:** This is your biggest buffer zone. If the skill takes 90 seconds to fully render, this step absorbs it naturally. Don't rush. The silence of watching it stream is compelling on camera.

---

### Step 4 — Review the full output (7:00–8:00) • ~60s

**Action:** Scroll the full brand voice guide from top to bottom slowly. One smooth scroll pass.

**Say:**
"Let's look at what we have. Three personality pillars with sample quotes. Six tone descriptors. Vocabulary list — twelve preferred, eight to avoid. Do/don't matrix with rewrites. And the scoring rubric at the bottom."

**Action:** Pause on the scoring rubric. Zoom in if possible.

**Say:**
"This rubric is what you use in content review. 'Does this sound like a three or a four?' Now that question has a shared answer for the whole team. You're not debating taste anymore — you're referencing a standard."

---

### Step 5 — Iterate and refine (8:00–9:00) • ~60s

**Action:** Scroll back to the bottom of the Claude Code chat. Type the refinement request:

```
Great. Now add a section that splits the voice into two registers:
"How we sound on social" versus "How we sound in error states."
For each, give a tone summary, two vocabulary notes, and a short example sentence.
```

**Say (while typing):**
"One refinement. Same brand, two different contexts — social and error states. They require different registers and I want the guide to call that out explicitly."

**Action:** Hit Enter. Let the new section stream in.

**Say (as it streams):**
"Social: sharper, shorter, more permission to provoke. Error states: same dry wit, but warmer — someone's frustrated and they need the product to feel reliable, not clever."

**Action:** When both subsections are fully rendered, pause and let the viewer read the two example sentences.

**Say:**
"The social example could go out as a tweet today. The error state example sounds exactly like the 404 page we fed in as a sample. The skill learned the register from the evidence. That's the loop closing."

---

### Step 6 — Final result (9:00–9:30) • ~30s

**Action:** Scroll the entire final document from top to bottom in one fluid pass. No commentary — let the document speak.

**Say (at the start of the scroll):**
"Here's the complete document. From five samples."

**Action:** When you reach the bottom, pause for 3 seconds.

**Say:**
"That's what you hand to your content team on day one."

**Action:** Split screen: `copy-samples.md` on left, the rendered brand voice guide on right. Hold for 5 seconds.

---

## What to save after recording

Copy these into `use-case/output/` (create folder if not present):
- The full Claude Code chat log or copy the rendered text output into `brand-voice-guide.md`
- A screenshot of the do/don't matrix (useful for thumbnails and social promotion)

---

## Troubleshooting

**Brand-voice banner doesn't appear:**
- Type `/skills` in Claude Code and confirm `brand-voice` is listed. If it's missing, re-run the install command in terminal: `npx @smithery/cli@latest skill add anthropics/brand-voice`
- Worst case: prefix your prompt with "Using the brand-voice skill, ..." — this forces activation without the banner.

**Output is shorter than expected (missing sections):**
- Scroll up — long outputs sometimes render above the visible window in Claude Code.
- If genuinely incomplete, type: "Please continue — I need the do/don't matrix and scoring rubric sections."

**Output is in prose format instead of structured document:**
- The skill should force structure. If it doesn't, type: "Format the output as a structured document with clear section headers for each of the five components."

**Step takes longer than 90 seconds:**
- Stay quiet. Let it stream. Silence is fine on camera — it communicates that real work is happening.
- If it goes past 2 minutes, say: "The longer the samples, the more the skill has to work with — this is normal for richer input."

**Iteration step produces unexpected output:**
- Accept what it produces and move on. Authenticity over script adherence. If the split is genuinely interesting, narrate what you see rather than what you expected.

---

## Retakes

If a take goes over 6:30 or has a major flub: restart from Step 1. Don't try to edit within a step — section timings in Resolve assume clean takes per step.

Clean takes are more important than perfect takes. A small verbal stumble is fine. A step that runs 90 seconds over ruins the timing of the entire edit.
