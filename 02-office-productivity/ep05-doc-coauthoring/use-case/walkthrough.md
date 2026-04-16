# Demo Walkthrough: doc-coauthoring — Webhook Events API Spec

**Episode:** B05
**Skill:** `anthropics/doc-coauthoring`
**Demo duration:** ~6 minutes of screen time (3:30–9:30)
**Rehearsal target:** Run this end-to-end at least twice before recording

---

## Pre-Demo Setup

1. Open `use-case/input/rough-api-spec-notes.md` in VS Code (or your editor of choice). Make sure the font size is at least 16pt — it needs to be readable when captured at 1080p.
2. Have Claude open in a browser tab, ready to accept input. Log in before you start recording.
3. Confirm the skill is installed by running a quick test prompt — if Claude acknowledges the doc-coauthoring skill, you're good.
4. Close unnecessary tabs and notifications. Turn on Do Not Disturb.

---

## Step 1 — Review the Input File [3:30–4:30]

**What to do:**
- Switch to VS Code. Show the file `rough-api-spec-notes.md` in full view.
- Scroll slowly through the file top to bottom. Let the audience read it.
- No need to narrate every line — just let the mess speak for itself.

**What to say (loose, not verbatim):**
- "This is what I actually have after a planning session. Requirements mixed with implementation notes. A partial JSON that's not quite a schema yet. An open questions section that's half-finished. And no overview at all."
- "This is the input. Let's see what the skill does with it."

**Timing tip:** Spend about 45 seconds here. Don't rush. The contrast between this and the output is what makes the demo land.

---

## Step 2 — Invoke the Skill [4:30–5:30]

**What to do:**
- Switch to Claude.
- Type (or paste) the following prompt. You can keep the input file open in a split screen so the audience sees you paste from it.

**Exact prompt to use:**

```
Using the doc-coauthoring skill, take my rough notes below and co-write 
them into a complete technical specification for the Webhook Events API. 

The spec should include these sections in order:
1. Overview
2. Functional Requirements
3. Non-Functional Requirements
4. API Schema
5. Error Handling
6. Open Questions

Keep the language precise and technical. This is an internal engineering spec, 
not a public doc. Preserve the intent of my notes — don't invent requirements 
I haven't implied, but do fill in standard patterns where I've been vague 
about things that are conventional in webhook APIs.

Here are my notes:
[paste the full contents of rough-api-spec-notes.md here]
```

**What to say while typing:**
- "I'm giving it the sections I need and their order."
- "The key constraint: don't invent requirements I haven't implied. I want the skill to work from my material, not fill in what it thinks a webhook API should look like."

---

## Step 3 — Watch the Output Stream [5:30–7:00]

**What to do:**
- Let Claude stream the response. Don't scroll ahead of it — let the audience see it build section by section.
- As each major section appears, call it out briefly.

**What to say (cue by section):**

When Overview appears:
- "The Overview — notice it synthesized this entirely. I never wrote an overview paragraph. It pulled together the intent from my scattered notes."

When Functional Requirements appears:
- "Requirements. Watch how it's applied consistent shall-language. Each one is a declarative statement about system behavior — that's RFC style, and it's the right call for a spec like this."

When API Schema appears:
- "The schema picks up the partial JSON from my notes and completes it. The missing fields are inferred from the requirements — it read across sections."

When Error Handling and Open Questions appear:
- "Error handling: my scattered notes become a proper table. Open Questions: it kept all of mine and added a note about what decision each one blocks."

**Expected output length:** Claude should produce around 800–1,000 words for the initial draft. If it produces significantly less, the prompt may need to be more specific about depth.

---

## Step 4 — Review the Output [7:00–8:00]

**What to do:**
- Scroll through the full output slowly.
- Point out two or three specific improvements — pick the most visible ones.

**What to point out:**
1. The Functional Requirements count: rough notes had ~12 bullet points, output should have 15–20 numbered requirements organized under subheadings.
2. One specific before/after: find a vague bullet in your notes and show the precise requirement it became.
3. The Open Questions section: the skill added context to each question about what decision it blocks.

**What to say:**
- "This is genuinely usable now. I could share this in Notion, walk through it in a spec review, put it in a PR."
- "But I want to show you the iteration loop — because that's where the skill earns its place."

---

## Step 5 — Iterate: Tighten Requirements [8:00–8:45]

**What to do:**
- Type the following prompt (do not start a new conversation — continue in the same thread):

```
The requirements section reads well overall, but some entries are still 
ambiguous — they describe intent rather than behavior. Please revise the 
Functional Requirements section to:
- Remove any vague terms like "should be able to" — replace with precise 
  behavioral statements
- Ensure each requirement is independently testable
- Add a priority label (P0/P1/P2) to each requirement
```

**What to say while typing:**
- "Staying in the same thread — the skill has context of the whole document."
- "I want the requirements independently testable. That's the standard that matters in a spec."

**Expected output:** The revised requirements section only — not the whole spec. It should be measurably more precise. A good before/after to highlight: "should be able to retry" becoming "shall retry with exponential backoff, up to five attempts, minimum 30s interval."

---

## Step 6 — Iterate: Add Security Appendix [8:45–9:30]

**What to do:**
- Type the following prompt in the same thread:

```
Please add a "Security Considerations" appendix after the Open Questions 
section. It should cover:
- Payload signing (HMAC-SHA256)
- Secret rotation
- HTTPS enforcement
- Replay attack prevention via timestamp validation
Keep it concise — this is an appendix, not a full security spec.
```

**What to say while typing:**
- "The security section wasn't in my original notes — but it belongs in any spec describing an outbound HTTP integration."

**Expected output:** A Security Considerations appendix, concise (200–350 words), with cross-references to the schema section for the signature header field.

**What to say on the output:**
- "Notice it cross-references the schema section for the signature header — it read the existing document and wrote in context. That's co-author behavior, not generator behavior."

---

## Potential Issues and Fallbacks

**If Claude doesn't invoke the skill explicitly:**
- The doc-coauthoring skill should be auto-detected from the task context. If output seems generic, add "Use the doc-coauthoring skill for this task" to the prompt.

**If the output is too short:**
- Add to the prompt: "Each requirements sub-section should have at least four numbered requirements. The API Schema should fully annotate each field."

**If the iteration prompt regenerates the whole document:**
- This is fine for recording — just note in narration: "It's given us the revised section. In practice you'd copy this back into your working doc."

**If Claude truncates the output:**
- Add: "Continue the spec — do not truncate any section" and it will resume.

---

## Timing Reference

| Segment | Clock | Duration |
|---------|-------|----------|
| Review input file | 3:30 | 1:00 |
| Type and submit prompt | 4:30 | 1:00 |
| Watch output stream | 5:30 | 1:30 |
| Review output | 7:00 | 1:00 |
| Iteration 1: requirements | 8:00 | 0:45 |
| Iteration 2: security appendix | 8:45 | 0:45 |
| **Total demo** | | **6:00** |
