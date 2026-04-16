# Live Demo Walkthrough — Episode 11: applying-brand-guidelines
## Denis's Rehearsal Guide | 6-Minute Demo Block (3:30–9:30)

---

## Preflight Checklist

Run through this before recording. Every item must be green.

- [ ] Skill installed and confirmed in Claude interface: `npx @smithery/cli@latest skill add anthropics/applying-brand-guidelines`
- [ ] Claude interface open in dark mode (Settings > Appearance > Dark)
- [ ] `use-case/input/brand-guidelines-summary.md` open in a text editor (not IDE — plain and readable)
- [ ] Font size in terminal: 16pt minimum (viewers on small screens)
- [ ] Do Not Disturb ON — all notifications silenced
- [ ] Clean desktop — no stray windows, no personal files visible
- [ ] Browser history cleared in any visible browser tabs
- [ ] Screen resolution: 1920x1080 or higher
- [ ] Recording software armed and tested (30-second test pass done)
- [ ] Water nearby — you're talking for 6 minutes straight

---

## Demo Flow — Step by Step

### Step 1: Open the Brand Guidelines [3:30–4:30]

**Action:** Switch to your text editor showing `brand-guidelines-summary.md`. Scroll through it slowly — give viewers time to read.

**What to say:**
> "I've got a fictional DTC wellness brand called Verdant — think supplements, functional teas, that kind of space. Their brand guide is a one-page summary I've prepared ahead of time. Let me walk you through it."

**Pause at each section:**
- Tone pillars (warm, direct, never preachy) — say them out loud
- Vocabulary rules — read "nourish not consume", "avoid synergy and holistic"
- Punctuation — call out the exclamation mark cap explicitly (it pays off in Step 3)
- Personality pillars — "grounded, curious, quietly confident"

**Then scroll to the three off-brand samples at the bottom:**
> "And here are the three pieces the team submitted. The blog intro reads like an academic abstract — passive voice, no warmth. The social post is the opposite: five exclamation marks, all-caps. And the product headline is just... bland. Generic. Every competitor in the space could say the same thing."

**Timing note:** Keep this step to 60 seconds. Don't get too deep in the weeds on the brand guide — the rewrite will illustrate the rules better than narrating them will.

---

### Step 2: Build the Prompt [4:30–5:30]

**Action:** Switch to Claude. Open a new conversation. Start typing — type slowly enough that viewers can follow.

**The prompt to use (type this, don't paste):**

```
Here is the Verdant brand voice guide:

[paste brand-guidelines-summary.md content — tone, vocabulary, punctuation, personality sections only, NOT the off-brand samples]

Below are three pieces of copy submitted by team members. Please rewrite each one to match the Verdant brand voice guide. For each piece, provide:
1. The rewritten copy
2. A short annotation (2–4 bullet points) explaining the key changes made and which brand rule each change addresses

---
PIECE 1 — Blog intro:
[paste the blog intro sample]

---
PIECE 2 — Social post:
[paste the social post sample]

---
PIECE 3 — Product headline:
[paste the product headline sample]
```

**What to say while typing:**
> "The structure here matters. I'm giving Claude the brand context once, at the top, and then asking it to apply that same lens to all three pieces. I'm also asking for annotations — those are what make this useful for training writers, not just fixing copy."

**Before sending:**
> "One prompt. Three pieces. Let's see what comes back."

---

### Step 3: Watch It Process [5:30–7:00]

**Action:** Hit send. Let the response stream. Do NOT click away or fast-forward. Let viewers see it generate in real time.

**What to say as it streams (improvise around these beats):**

As the blog intro rewrites:
> "Notice the structural change here — it's not just softening the language, it's switching from passive to active voice. 'It is widely acknowledged' becomes a direct statement. That's the brand pillar at work — direct."

As the social post rewrites:
> "The social post is the interesting one. It's stripping the all-caps and most of the exclamation marks — remember, Verdant caps those at one per page — but watch what happens to the vocabulary. 'Level up' and 'wellness journey' both go. They were on the avoid list."

As the headline rewrites:
> "And the headline — this is the moment. Watch this."

**Wait for it to appear, then say:**
> "'Made to nourish what daily life depletes.' That's the rewrite. Same product. Completely different feeling. Uses the approved word 'nourish', it's direct, confident without being loud. That's what on-brand actually looks like."

**Pause for two full seconds after saying this. Let it land.**

---

### Step 4: Review the Annotations [7:00–8:00]

**Action:** Scroll to the annotation section of the response. Read two or three bullet points from the annotations out loud — don't rush.

**What to say:**
> "Now the annotations. This is what I'd send back to the writers. For the blog intro: [read annotation]. For the social post — this is instructive — [read annotation about exclamation marks and banned vocabulary]. The skill isn't just making the edit; it's naming the rule. That's what makes it a training tool, not just a fix."

**Tip:** If any annotation is longer than expected, read the first two bullets and paraphrase the rest. Keep moving.

---

### Step 5: Iterate — Tighten the Social Post [8:00–9:00]

**Action:** Open a follow-up message in the same conversation thread.

**The follow-up prompt (type this):**
```
The rewritten social post is good. Give me 3 alternative opening lines for it — warmer and more product-specific, still following Verdant's brand voice.
```

**What to say while typing:**
> "The rewrite is solid, but the opening line of the social post still feels a bit flat to me. Let me ask for some alternatives — I want it warmer, more specific to what this product actually does."

**When the three options appear:**
> "Three options. I'd go with the second one — [read it out]. Opens with a verb, names a specific benefit without overstating it. That's the one."

**Tip:** If you don't love option two on the day, you can pick whichever one genuinely resonates. Just say "I'd go with this one" and explain why briefly. Keep it authentic.

---

### Step 6: Final Result [9:00–9:30]

**Action:** You don't need to assemble a final document live — just scroll back through the full response so viewers can see all three rewritten pieces together.

**What to say:**
> "Three pieces. One brand voice. One pass. The blog intro: warm and direct. The social post: grounded, no hype, specific. The headline: 'Made to nourish what daily life depletes.' That's the whole workflow."

**Then transition to results section:**
> "Let me show you the before-and-after side by side, and then we'll look at a few other ways to put this skill to work."

---

## Timing Guide

| Step | Target Time | Hard Limit |
|------|-------------|------------|
| Step 1 — Brand guide walkthrough | 60 sec | 75 sec |
| Step 2 — Build the prompt | 60 sec | 75 sec |
| Step 3 — Watch it process | 90 sec | 100 sec |
| Step 4 — Review annotations | 60 sec | 70 sec |
| Step 5 — Iterate | 60 sec | 70 sec |
| Step 6 — Final result | 30 sec | 40 sec |
| **Total** | **6:00** | **6:50** |

---

## Troubleshooting

**Problem:** Claude generates generic rewrites without following the brand rules closely.
**Fix:** The brand guide section of the prompt needs to be clearly labelled. Make sure there's a blank line and a header before the copy samples. Try adding "Apply these rules strictly:" before the rules section.

**Problem:** Annotations are missing or too short.
**Fix:** In the prompt, change "a short annotation" to "a detailed annotation with a specific brand rule citation for each change."

**Problem:** The headline rewrite is weak.
**Fix:** Add a note to the prompt: "For the product headline, the rewrite should be concrete and specific to the product's core benefit — avoid abstract language."

**Problem:** Response is very long and hard to navigate on screen.
**Fix:** Ask Claude to format the output with clear headers (## Piece 1, ## Piece 2, ## Piece 3) so it's easy to scroll and highlight during recording.

**Problem:** Demo runs over time.
**Fix:** Skip reading annotations in full — just name what the annotation section is and say "I'll link the full output in the description." Never cut Step 3 — the aha moment must land.
