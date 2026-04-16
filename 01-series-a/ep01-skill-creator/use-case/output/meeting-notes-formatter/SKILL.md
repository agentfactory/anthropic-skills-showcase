---
name: meeting-notes-formatter
description: Transforms raw meeting transcripts (from Otter, Fathom, Zoom exports, or verbatim notes) into structured markdown with Summary, Action Items, and Decisions sections. Use whenever the user pastes unstructured meeting content, shares a transcript, or asks to "format meeting notes", "clean up these notes", or similar.
---

# Meeting Notes Formatter

Turns unstructured meeting transcripts into a consistent, scannable markdown document.

## When to trigger

Activate automatically when any of the following appear in user input:
- A block of meeting dialogue (500+ chars) without structure
- Content that looks like an Otter / Fathom / Zoom transcript export
- An explicit request: "format these meeting notes", "clean up this transcript", "turn this into notes"

## Output format

Always produce this exact structure:

```markdown
# Meeting Notes — [inferred topic or date]

## Summary
[3–5 sentence narrative of what was discussed and what the meeting concluded.]

## Action Items
- **[Owner]** — [action] — [due date if mentioned, else omit]

## Decisions
[If ≤3 decisions, flat bullet list. If >3, group by topic under bold subheadings.]
- **[Decision]** — [one-sentence rationale]
```

## Rules

1. **Owners**: use the name as spoken. If an action has no clear owner, label `[unassigned]` — never guess.
2. **Due dates**: include only if explicitly mentioned ("by Thursday", "next Monday", "Q2"). Do not infer.
3. **Decisions vs. discussions**: a decision requires an outcome. Ongoing debates without resolution belong in Summary, not Decisions.
4. **Rationale**: one sentence, capturing *why* the decision was made. Pull from the transcript — don't invent.
5. **Topic grouping**: trigger only when there are more than three decisions. Infer topics from context.
6. **Tone**: neutral, concise, third-person. Strip filler ("um", "yeah", "you know").

## Example

Input (raw transcript fragment):
> so jordan owns referrals expansion next monday if numbers hold... priya patch forward on the auth bug by thursday... rahul one pager on pricing by wednesday for leadership sync

Output:
```markdown
## Action Items
- **Jordan** — Expand referral program to full user base — next Monday (if metrics hold)
- **Priya** — Patch-forward fix for Safari mobile auth bug — Thursday
- **Rahul** — Prepare pricing one-pager for leadership sync — Wednesday
```
