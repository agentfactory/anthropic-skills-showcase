# Demo Walkthrough: internal-comms — One Update, Three Audiences

**Episode:** B06
**Skill:** `anthropics/internal-comms`
**Demo duration:** ~6 minutes of screen time (3:30–9:30)
**Rehearsal target:** Run this end-to-end at least twice. The tone comparison segment (Step 4) needs to feel natural, not read off a script.

---

## Pre-Demo Setup

1. Open `use-case/input/product-update-brief.md` in VS Code (or your preferred editor). Font at 16pt minimum.
2. Have Claude open in a browser tab. Log in before you start recording.
3. Verify the internal-comms skill is active. Run a quick test prompt and confirm Claude acknowledges the skill.
4. Optional: pre-load a split-screen layout with the brief on the left and Claude on the right — makes the "paste and run" moment clean for editing.
5. Turn on Do Not Disturb. Close Slack and any notification sources.

---

## Step 1 — Review the Input Brief [3:30–4:30]

**What to do:**
- Switch to VS Code. Show `product-update-brief.md` in full view.
- Scroll through the file. Read the bullet points aloud or let them sit on screen for 3–4 seconds each.

**What to say:**
- "This is the brief. Eight bullet points. A pricing change and a feature launch, happening at the same time."
- "The facts are here: what's changing, when, who it affects, what the migration looks like."
- "What isn't here: how to frame this for leadership, what it means for the engineering team's backlog, or what customer support should say when a customer calls about their tier change."
- "That's what the skill adds — the audience layer."

**Timing tip:** About 45–60 seconds here. The brief is dense enough that the audience needs time to absorb it before you move on.

---

## Step 2 — Invoke the Skill [4:30–5:30]

**What to do:**
- Switch to Claude.
- Type (or paste) the following prompt. Copy the contents of the brief into the bottom.

**Exact prompt to use:**

```
Using the internal-comms skill, take the product update brief below and 
generate THREE distinct internal communication formats:

1. All-hands memo for leadership (CEO, VP-level) — formal, strategic framing, 
   business impact emphasis, 300-400 words

2. Slack channel announcement for the engineering team — casual, direct, 
   focused on what changed technically and what they need to do, 
   150-200 words, formatted for Slack (use ** for bold, no formal headers)

3. Formal email to customer-facing teams (sales, support, success) — 
   professional but warm, focused on what customers will experience and 
   how to talk about the change, 350-450 words

Use the same core facts for all three. The information should be consistent — 
only the tone, emphasis, and structure should vary.

Here is the brief:
[paste the full contents of product-update-brief.md here]
```

**What to say while typing:**
- "Three outputs, specified clearly: audience, register, and word count for each one."
- "The key constraint at the end: same facts, different framing. I don't want three versions of the truth — I want one truth communicated three ways."

---

## Step 3 — Watch the Outputs Generate [5:30–7:30]

**What to do:**
- Let Claude stream the response. Don't scroll ahead.
- As each output appears, briefly narrate what you're seeing.

**What to say for each output:**

All-hands memo (output 1):
- "The memo opens with the strategic context. It doesn't lead with the price — it leads with the business reason."
- "Leadership doesn't need to know the migration script runs at 2 AM. They need to know the revenue implication and the competitive positioning."

Engineering Slack post (output 2):
- "Watch the register shift. This one starts with what changed. No preamble."
- "Bold text, no formal headers, clear action items. This is genuinely Slack-native formatting."
- "Length: around 180 words. Exactly right for a Slack announcement."

Customer-facing email (output 3):
- "This one is professional but warmer. The emphasis shifts to what the customer experiences."
- "It gives the team something to say — there's suggested framing for when customers call about their tier change."

**Expected total output:** Three documents, approximately 900–1,050 words combined. Claude should generate them sequentially, clearly labeled.

**If Claude generates them without clear separation:** Ask it to "please regenerate with clear labels and a horizontal rule between each output" — this keeps the screen legible for recording.

---

## Step 4 — Highlight the Tone Contrast [7:30–8:30]

**This is the key segment of the episode.** Take your time here.

**What to do:**
- Scroll back through the outputs and find the section that describes the Starter tier being discontinued. It appears in all three outputs.
- Point to each one in sequence and read or paraphrase the key sentence.

**The three versions of the same fact (expected output — may vary slightly):**

Leadership memo version (paraphrase):
- Something like: "The retirement of the Starter tier consolidates our customer base onto the Pro tier, which carries a meaningfully higher average contract value and aligns with our premium market positioning going into FY26."

Engineering Slack version (paraphrase):
- Something like: "Starter is gone as of March 1. Existing Starter customers auto-migrate to Pro. Migration job runs Feb 28 at 2:00 AM UTC."

Customer-facing email version (paraphrase):
- Something like: "Customers on our Starter plan will automatically transition to the Pro plan on March 1st — no action required on their part. If a customer reaches out with questions, here's how we recommend framing the change."

**What to say:**
- "Same fact. Three completely different sentences. Business context for leadership, technical specifics for engineering, empathetic framing for the people talking to customers."
- "That translation — that's what takes time when you do this manually. And that's what the skill handles."

---

## Step 5 — Optional Iteration Pass [8:30–9:30]

**What to do:**
- Type one more prompt to show the revision loop:

```
Revise the engineering Slack announcement to add a note at the end 
about the on-call rotation for the migration window (Feb 28 at 2:00 AM UTC). 
Keep the same tone and length.
```

**What to say:**
- "These are starting points, not finished products. Here I'm adding an operational detail I forgot — the on-call rotation for the migration window."

**Expected output:** A revised Slack post, same tone, same length, with a final line about on-call. Claude should produce just the revised Slack post, not all three outputs again.

**If Claude regenerates all three:** That's fine for recording, just note: "It's given us all three again — in practice you'd just copy the updated Slack section."

---

## Potential Issues and Fallbacks

**If the outputs feel too similar in tone:**
- Check that the skill is properly installed and invoked. If it's running generic completion, the tone differentiation will be weaker.
- Add to the prompt: "The Slack announcement should feel like something a senior engineer would send to teammates, not a PR professional. The leadership memo should feel like a board update, not a team email."

**If any output is too short:**
- Ask Claude to "expand the [leadership memo / customer-facing email] to the full target word count, adding more detail on the business context / customer experience implications."

**If Claude asks for clarification instead of generating:**
- The skill may need more explicit instruction. Add: "Generate all three outputs now. Do not ask for additional information."

**If the outputs are separated poorly (hard to distinguish on screen):**
- Ask: "Please reformat with a clear `---` separator and a bold `## OUTPUT 1: Leadership Memo` label before each section."

---

## Timing Reference

| Segment | Clock | Duration |
|---------|-------|----------|
| Review input brief | 3:30 | 1:00 |
| Type and submit prompt | 4:30 | 1:00 |
| Watch three outputs generate | 5:30 | 2:00 |
| Tone contrast comparison | 7:30 | 1:00 |
| Optional iteration pass | 8:30 | 1:00 |
| **Total demo** | | **6:00** |

---

## Notes for Series Wrap-Up

This is the final demo in Series B. After the demo segment ends, the episode wraps with a brief recap of all six Series B skills and a clean transition into the Series C teaser. Make sure the endcard mentions:
- Series B complete (six episodes)
- Series C starting with `data-visualization`
- Subscribe CTA

The tone of the wrap-up should feel conclusive but forward-moving — not sad, not overly celebratory, just confident and transitioning.
