# Episode 01: skill-creator — Build Your Own Claude Skill in 10 Minutes

**Series:** A — Design & Creative | **Skill:** anthropics/skill-creator | **Duration:** ~12 min
**Skill URL:** https://smithery.ai/skills/anthropics/skill-creator
**Install:** `npx @smithery/cli@latest skill add anthropics/skill-creator`
**Target Audience:** Anyone who uses Claude and wants to extend it with their own workflows
**Use Case:** Build a `meeting-notes-formatter` skill that turns raw meeting transcripts into structured summary + action items + decisions.

---

## COLD OPEN [0:00–0:30]

**[SCREEN: Split-screen — left: messy raw meeting transcript scrolling; right: clean formatted markdown with Summary / Action Items / Decisions sections]**

NARRATOR: What if every meeting transcript you ever pasted into Claude came back perfectly structured — summary, action items, decisions — every single time, without you writing the prompt?

**[SCREEN: Quick montage — 3 clips, 3 seconds each]**
- Clip 1: Typing `/meeting-notes` in Claude Code
- Clip 2: Claude auto-loading the new skill
- Clip 3: Finished markdown file opening in VS Code

NARRATOR: In the next twelve minutes, I'll build that skill from scratch — and you'll know how to build your own. Let's go.

**[ANIMATION: Orange line wipe transition]**

---

## INTRO [0:30–1:30]

**[ANIMATION: 5-sec channel intro — "Anthropic Skills Showcase" logo reveal on dark background, orange accent]**

NARRATOR: Welcome to the Anthropic Skills Showcase. I'm walking through all 95 official skills on Smithery, one episode at a time, and today we're starting with the most important one: **skill-creator** — the skill that teaches Claude how to build new skills.

**[SCREEN: Smithery.ai skill-creator page scrolls slowly — highlight install count: 1,113]**

NARRATOR: Over eleven hundred people have installed this one, and there's a reason. Skills are the new plug-ins for Claude. Instead of re-explaining the same workflow every time you open a session, you encode it once, and Claude automatically loads it when the moment is right.

**[B-ROLL: Fast cuts — someone pasting the same prompt three times into a chat window, visibly frustrated]**

NARRATOR: If you've ever pasted the same formatting prompt more than twice, you've already outgrown prompts. You need a skill.

**[ANIMATION: Orange line wipe]**

---

## SKILL DEEP DIVE [1:30–3:30]

**[SCREEN: Terminal, dark mode, big font]**

NARRATOR: One command to install:

**[SCREEN: Typewriter effect]** `npx @smithery/cli@latest skill add anthropics/skill-creator`

NARRATOR: That drops a `skill-creator/` folder into your `.claude/skills/` directory. Let's look at what's inside.

**[SCREEN: VS Code file tree — `.claude/skills/skill-creator/SKILL.md` opens]**

NARRATOR: Every skill is just one file — `SKILL.md` — with a YAML frontmatter block and markdown instructions. The frontmatter is how Claude decides *when* to trigger the skill. The markdown is *what* Claude does once triggered.

**[SCREEN: Highlight frontmatter — `name:` and `description:` fields]**

NARRATOR: Two required fields. The `description` is the most important string you'll write — it's Claude's trigger logic. Write it badly, and your skill never fires. Write it well, and Claude reaches for it automatically.

**[SCREEN: Scroll to the "Core Principles" section of skill-creator's SKILL.md]**

NARRATOR: skill-creator has three rules worth internalizing. One: be concise — the context window is a public good. Two: match degrees of freedom to the task — rigid scripts for fragile operations, loose prose for flexible ones. Three: every skill should solve a repeatable problem, not a one-off.

**[ANIMATION: Workflow diagram slides in — three boxes: "Problem you repeat" → "SKILL.md" → "Claude auto-loads it"]**

NARRATOR: That's the whole model. Now let's build one.

**[ANIMATION: Orange line wipe]**

---

## LIVE DEMO [3:30–9:30]

**[SCREEN: Full-screen recording begins — dark-mode terminal + VS Code side by side]**

### Step 1 — Set up the input [3:30–4:30]
NARRATOR: I've got a raw meeting transcript — about 400 words, totally unstructured, the way Otter or Fathom spits them out. This is going to be our test case.

**[SCREEN: Open `use-case/input/raw-meeting-notes.txt` — scroll through. Show the mess: no speaker labels, no sections, rambling.]**

NARRATOR: By the end of this demo, pasting any transcript like this into Claude should produce a clean markdown file — same structure, every time.

### Step 2 — Invoke skill-creator [4:30–5:30]
**[SCREEN: Claude Code session. Type the prompt.]**

NARRATOR: I open Claude Code in an empty directory and just ask:

**[SCREEN: Typewriter]** `Use skill-creator to build me a skill called meeting-notes-formatter that takes raw meeting transcripts and outputs a markdown file with three sections: Summary, Action Items, and Decisions.`

NARRATOR: skill-creator activates automatically — see that banner at the top? That's Claude loading the skill's guidance into context.

**[SCREEN: Zoom callout with orange border on the "skill-creator" activation banner]**

### Step 3 — Watch it work [5:30–7:00]
**[SCREEN: Claude's response streams in — it's asking clarifying questions]**

NARRATOR: Notice what's happening — it's not just writing a file. It's asking me the right questions. "Should action items include owners and due dates?" "Should decisions capture the rationale or just the outcome?" This is skill-creator's personality: it refuses to guess when guessing would make the skill worse.

**[SCREEN: Denis answers — owners yes, due dates if mentioned, decisions capture rationale]**

**[SCREEN: Claude now writes `meeting-notes-formatter/SKILL.md` — typewriter effect]**

NARRATOR: There's the file. Look at the description — notice how specific it is. It names the triggers: "raw transcript," "meeting notes," "Otter, Fathom, or Zoom export." That's not decoration — that's the classifier Claude uses to decide whether to load this skill.

### Step 4 — Review the output [7:00–8:00]
**[SCREEN: Open the generated SKILL.md in VS Code, scroll through]**

NARRATOR: The frontmatter, the instructions, a concrete example. Under 60 lines. No fluff.

**[SCREEN: Run the new skill — paste the raw transcript into a fresh Claude Code session]**

NARRATOR: Now the real test — paste the raw transcript, hit enter, and see what comes out.

**[SCREEN: Claude auto-loads `meeting-notes-formatter`, produces structured markdown]**

NARRATOR: Three sections, owners on every action item, rationale on every decision. First try.

### Step 5 — Iterate [8:00–9:00]
**[SCREEN: Denis adds a follow-up prompt]**

NARRATOR: One refinement — I want decisions grouped by topic when there's more than three.

**[SCREEN: Typewriter]** `Update the meeting-notes-formatter skill: when there are more than three decisions, group them by topic under bold subheadings.`

**[SCREEN: Claude edits the SKILL.md, re-runs on the same transcript]**

NARRATOR: Done. This is the part most people miss — skills are living documents. You refine them the same way you refine code.

### Step 6 — Final result [9:00–9:30]
**[SCREEN: Before/after of the transcript → formatted output]**

NARRATOR: Four minutes of work, and now every meeting transcript I ever drop into Claude comes back structured. That's the compounding value of skills.

**[ANIMATION: Orange line wipe]**

---

## RESULTS + VARIATIONS [9:30–11:00]

**[SCREEN: Before/after split — raw 400-word transcript vs. clean 3-section markdown]**

NARRATOR: What we built in one sitting: a reusable, auto-triggering skill that replaces a prompt you'd otherwise paste a hundred times this year.

**[SCREEN: Three use-case cards animate in sequentially — orange accents]**

NARRATOR: And skill-creator is useful far beyond meeting notes. Three other things I'd build with it next:

1. **A weekly-update generator** — pulls highlights from your commit log and emits the Friday-update email.
2. **A company-specific style guide** — encodes your brand voice so every draft comes back on-brand.
3. **A code review skill** — bakes in your team's conventions so Claude catches the stuff your linter can't.

NARRATOR: Anywhere you've typed the same prompt more than twice, there's a skill waiting to be created.

**[ANIMATION: Orange line wipe]**

---

## WRAP-UP [11:00–12:00]

**[SCREEN: End card begins animating in]**

NARRATOR: Recap: skill-creator is the meta-skill — the one that builds all the others. You install it once with `npx @smithery/cli@latest skill add anthropics/skill-creator`, then use it to encode any workflow you repeat.

**[SCREEN: Lower third — "Install: npx @smithery/cli@latest skill add anthropics/skill-creator" with orange bg]**

NARRATOR: Link to the skill, the install command, and the full demo repo — all in the description below. If this saved you time, hit subscribe — we're going through all 95 skills on this channel.

**[SCREEN: "Next up" card — "Episode 02: pdf" with preview thumbnail]**

NARRATOR: Next episode, we take the `pdf` skill and merge five quarterly reports into one watermarked deliverable in under five minutes. See you there.

**[ANIMATION: 10-sec end card — logo, subscribe button, social links]**

---

## Word count: ~1,780 words (target ~150 wpm → 11:52 narration)
