# Demo walkthrough — meeting-notes-formatter

Rehearsal script for Denis's live screen recording. Target duration: **6:00** (fits the 3:30–9:30 demo slot). Keep terminal font at 16pt+, dark mode, VS Code on one side, Claude Code on the other.

## Pre-flight (do before recording starts)
1. Fresh directory: `mkdir ~/demo-ep01 && cd ~/demo-ep01`
2. Confirm skill-creator is installed: `ls ~/.claude/skills/skill-creator/SKILL.md`
3. Have `input/raw-meeting-notes.txt` open in a tab but not yet visible
4. Claude Code launched in `~/demo-ep01`, empty session
5. Close email, Slack, notifications off, "Do Not Disturb" on

---

## Recording — step by step

### Step 1 — Show the input (3:30–4:30) • ~60s
**Action:** Open `input/raw-meeting-notes.txt` in VS Code. Scroll through slowly.
**Say:** "Here's the input — a raw transcript from a product planning meeting. About 400 words. No speaker labels, no structure — straight out of Otter."

### Step 2 — Invoke skill-creator (4:30–5:30) • ~60s
**Action:** Switch to Claude Code. Type:
```
Use skill-creator to build me a skill called meeting-notes-formatter
that takes raw meeting transcripts and outputs a markdown file with
three sections: Summary, Action Items, and Decisions.
```
**Say:** "I'm not writing a prompt — I'm asking Claude to build a reusable skill. Notice the banner at the top when it activates."
**Wait for:** skill-creator banner appears in Claude Code UI.

### Step 3 — Answer the clarifying questions (5:30–7:00) • ~90s
Claude will ask three things. Answer:
1. **Owners on action items?** → "Yes, include owner if mentioned, else `[unassigned]`."
2. **Due dates?** → "Only if mentioned explicitly. Don't guess."
3. **Decisions capture rationale?** → "Yes — outcome + one-sentence rationale."

**Say (while it writes):** "This is the skill-creator personality — it won't guess when guessing would make the skill worse. That's why the skills it produces are reliable."

**Wait for:** `meeting-notes-formatter/SKILL.md` is written.

### Step 4 — Review the generated SKILL.md (7:00–8:00) • ~60s
**Action:** Open `meeting-notes-formatter/SKILL.md` in VS Code. Highlight the `description:` line.
**Say:** "Look at the description — it names the triggers explicitly: 'raw transcript,' 'meeting notes,' 'Otter or Fathom export.' That specificity is what makes Claude auto-load it at the right moment."

**Action:** Scroll to the end — show the example. Close the file.

### Step 5 — Test the skill (8:00–8:30) • ~30s
**Action:** Back in Claude Code, paste the raw transcript from `input/raw-meeting-notes.txt`. Hit enter.
**Wait for:** Claude auto-loads `meeting-notes-formatter`, produces structured markdown with Summary / Action Items / Decisions.
**Say:** "First try. Three sections, owners on every action item, rationale on every decision."

### Step 6 — Iterate (8:30–9:00) • ~30s
**Action:** Type:
```
Update the meeting-notes-formatter skill: when there are more than
three decisions, group them by topic under bold subheadings.
```
**Wait for:** Claude edits the SKILL.md, re-runs on the transcript, shows grouped output.
**Say:** "Skills are living documents — refine them like code."

### Step 7 — Closing shot (9:00–9:30) • ~30s
**Action:** Show the final formatted markdown full-screen, then split-screen with the raw input.
**Say:** "Four minutes of setup, and every meeting transcript I drop into Claude from now on comes back structured. That's the compound value of skills."

---

## What to capture in `output/`
After recording, copy these into `use-case/output/meeting-notes-formatter/`:
- `SKILL.md` (final version, after the iteration)
- `example-output.md` (the structured markdown produced on the transcript)

## Troubleshooting
- If skill-creator doesn't auto-activate: type `/skills` in Claude Code, confirm it's listed. Worst case, prefix with "Using the skill-creator skill, ..."
- If Claude asks different clarifying questions: follow them — authenticity over script adherence. Just keep answers short so the demo stays under 6 min.
- If the iteration step produces a conflict: accept the change and move on; don't debug on camera.

## Retakes
If a take goes over 6:30 or has a flubbed line: restart from the top. Don't edit within a step — section timings in Resolve assume clean takes per step.
