# Demo walkthrough — Flowdesk Competitive Brief

Rehearsal script for Denis's live screen recording. Target duration: **6:00** (fits the 3:30–9:30 demo slot). Keep terminal font at 16pt+, dark mode, VS Code on one side, Claude Code on the other.

---

## Pre-flight checklist (complete before hitting record)

1. Fresh Claude Code session — no previous conversation in context
2. Confirm `competitive-analysis` skill is installed:
   ```
   ls ~/.claude/skills/competitive-analysis/SKILL.md
   ```
3. Open `use-case/input/competitor-research-prompt.md` in VS Code — visible but not fullscreen
4. Have a second VS Code pane ready (or split pane) for the output
5. Close email, Slack, Discord, notifications. "Do Not Disturb" on.
6. Screen resolution: 1920×1080 minimum. Font size 16pt in terminal, 14pt in VS Code.
7. Test that copy-paste from VS Code to Claude Code works cleanly (no formatting artifacts)
8. Have a stopwatch running — 6 min is tight if you get chatty

---

## Recording — step by step

### Step 1 — Show the input brief (3:30–4:30) • ~60s

**Action:** Switch to VS Code, open `use-case/input/competitor-research-prompt.md`. Scroll through slowly — top to bottom. Pause on the "Specific Questions" section.

**Say:**
"Here's the input. This is a research brief for Flowdesk — a fictional async project management startup. Twenty-nine dollars per seat per month. Three competitors: Asana, Monday.com, Linear. I've written out exactly what I want to know — positioning gaps, pricing comparison, feature whitespace, and ICP overlap. This is the kind of thing you might normally spend a morning building in a spreadsheet. Let's see what happens when we just give it to Claude."

### Step 2 — Paste the brief into Claude Code (4:30–5:30) • ~60s

**Action:** Select all content in competitor-research-prompt.md. Copy. Switch to Claude Code. Paste into the input field. Hit Enter.

**Say (while pasting):**
"I paste the full brief — no special command, no prefix. The skill activates on context."

**Wait for:** The competitive-analysis skill activation banner to appear at the top of the Claude Code session.

**Say (pointing at banner):**
"There it is. The skill loaded automatically. Claude is now running the structured competitive-analysis workflow."

**Timing note:** If the skill doesn't auto-activate within 5 seconds of submission, type: `Using the competitive-analysis skill, please proceed.` — then continue as scripted.

### Step 3 — First output streams in (5:30–7:00) • ~90s

**Wait for:** The full structured output to finish streaming. Do not narrate while it's still generating — let viewers watch it stream.

**Once complete, say:**
"The output is organized by competitor. Asana first — notice the weakness field: 'implementation complexity for teams under fifty people.' That's a sales handle."

**Action:** Scroll to Monday.com section. Pause on the ICP field and Differentiation Gap field.

**Say:**
"Monday.com. ICP is visual-first, non-technical teams. And the differentiation gap — 'async-native workflows, Monday.com assumes synchronous collaboration by default.' That's the lane Flowdesk is trying to own."

**Action:** Scroll to Linear section. Pause briefly on Pricing and Weakness.

**Say:**
"Linear. Developer-first, beloved by engineering. Weakness: limited adoption outside engineering. Gap: cross-functional async."

**Action:** Continue scrolling to bottom of output — the 3-column comparison table comes into view. Pause. Let it sit for 3 seconds.

**Say:**
"And then — this is the moment. Three gaps, side by side. Async-native. Cross-functional handoffs. Sub-fifty-person teams. Every cell in that last row is a sentence you can put in your pitch deck."

**Timing note:** This is the aha moment. Do not rush past it. Let the table breathe.

### Step 4 — Review output quality (7:00–7:45) • ~45s

**Action:** Scroll back to the top of the output. Slowly scroll through the Asana section again.

**Say:**
"What I like about this is the consistency. Every competitor entry follows the same schema. You can compare them cell by cell without your eyes jumping. That's what the skill enforces — not just smart output, but structured output."

### Step 5 — Ask for the battle card (7:45–9:00) • ~75s

**Action:** In Claude Code, type the following. Use typewriter mode or type slowly — viewers should see the exact prompt.

**Type:**
```
Based on this analysis, generate a one-page sales battle card for
Flowdesk. Format it as: top objection per competitor, Flowdesk's
best counter, and the single strongest differentiator to lead with.
```

**Hit Enter. Wait for output to stream.**

**Say (while it generates):**
"This is the refinement step. Same analysis, different artifact. The goal is something a sales rep can actually open ten minutes before a call."

**Once complete, scroll to Asana row. Pause on the "Lead Differentiator" cell.**

**Say:**
"That is a trainable, repeatable sentence. That's the difference between competitive research that lives in a doc and competitive intelligence that ships to the field."

### Step 6 — Final shot (9:00–9:30) • ~30s

**Action:** Arrange windows so both artifacts are visible simultaneously — brief on the left, battle card on the right. Or use VS Code split pane if you captured the output there.

**Say:**
"Six minutes from a blank session to two production-ready artifacts. The brief for the strategy team. The battle card for the field. One prompt, one refinement, done."

**Action:** Hold this view for 5 seconds before cutting.

---

## Output files to save after recording

Copy these into `use-case/output/` after the session:
- `competitive-brief-flowdesk.md` — the full structured competitor analysis output
- `battle-card-flowdesk.md` — the one-page sales battle card output

---

## Troubleshooting

**Skill doesn't activate automatically:**
Add prefix: `Using the competitive-analysis skill, analyze the following research brief:` — then paste the prompt. This forces the trigger without interrupting the demo flow.

**Output schema is inconsistent (e.g., missing Differentiation Gap for one competitor):**
After the output finishes, type: `Please reformat the [competitor] section to include a Differentiation Gap field, following the same schema as the other sections.` Stay calm, don't restart.

**Battle card comes back unformatted (prose instead of table/sections):**
Type: `Format this as a structured table with columns: Competitor | Top Objection | Counter | Lead Differentiator.` This is a reasonable live edit and reads well on camera.

**Output takes longer than 60 seconds to generate:**
Stay quiet and let it run. Don't narrate during generation — dead air here is better than talking over the output.

**Demo runs long (approaching 6:15):**
Skip the "output quality review" narration in Step 4 — go directly from Step 3 to Step 5.

---

## Retakes

If any take goes over 6:30 or has a major flub, restart from the top. Don't edit within steps — section timings in Resolve assume clean takes per step. Two takes maximum before taking a 10-minute break.
