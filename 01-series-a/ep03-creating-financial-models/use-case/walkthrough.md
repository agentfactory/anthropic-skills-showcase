# Live Demo Walkthrough — Episode 03: creating-financial-models
## Denis's Rehearsal Script — Demo Block [3:30-9:30]

---

## Preflight Checklist

Run through this before hitting record. Do not skip.

- [ ] `creating-financial-models` skill is installed — verify with `ls .claude/skills/` or equivalent
- [ ] Claude Code is open in a clean, empty conversation (no prior context that might bleed in)
- [ ] Dark mode is active in Claude Code interface
- [ ] Screen resolution: 1920x1080
- [ ] Font size bumped up so viewers can read code — 16pt minimum in Claude Code
- [ ] `use-case/input/startup-brief.md` is open and ready to copy from
- [ ] Browser tab with Smithery skill page open in background (for the deep dive section)
- [ ] Do a dry run of the full demo at least once before recording — the model output will differ slightly each time, which is fine
- [ ] Have the follow-up iteration prompt pre-written somewhere you can copy-paste quickly
- [ ] Close all unrelated browser tabs, notifications off, Do Not Disturb on

---

## Step 1 — Set Up the Input [3:30-4:30]

**What you're doing:** Opening the startup-brief.md, showing it to the audience, then copying it.

**Actions:**
1. Switch to your code editor. Open `use-case/input/startup-brief.md`.
2. Pause. Let the camera read the brief for 5-7 seconds. Don't rush.
3. Say: *"Here's our input. One paragraph — this is the kind of brief a founder might write for their own records. Pricing model, target market, a few years of ARR history. Nothing fancy."*
4. Select all text in the brief (Cmd+A or Ctrl+A).
5. Copy to clipboard.
6. Say: *"We're going to paste this directly into Claude. No formatting, no structured template. Just plain text."*

**What to show on screen:** The startup-brief.md file open in full view. Text is readable. Highlight the ARR figures (180k, 620k, 1.4M) briefly with your cursor before copying.

---

## Step 2 — Invoke the Skill [4:30-5:30]

**What you're doing:** Pasting the brief into Claude and adding the model-building prompt.

**Actions:**
1. Switch to Claude Code conversation window.
2. Click into the message input field.
3. Paste the brief (Cmd+V / Ctrl+V).
4. Press Shift+Enter to add a new line (do NOT submit yet).
5. Type the following prompt — or copy-paste it if you have it ready:

```
Using this business description, build a complete DCF financial model for Loopline.
Include: 5-year revenue projections with growth rate assumptions, operating cost structure
(COGS, S&M, R&D, G&A), EBITDA bridge, WACC calculation with assumptions stated, terminal
value using exit multiple and perpetuity growth methods, and a final equity value range.
Document every assumption you make and flag any that are aggressive or uncertain.
```

6. Pause for 2 seconds before hitting Enter. Say: *"And we let it run."*
7. Submit.

**What to show on screen:** Full message visible — brief on top, prompt below. Viewer can read both before submission.

**Timing note:** If Claude pauses before generating, fill with: *"What's happening right now is the skill is parsing the business description, identifying the key financial inputs, and mapping those to a standard DCF structure."*

---

## Step 3 — Watch the Model Build [5:30-7:00]

**What you're doing:** Narrating the model as it streams in. This is the main event.

**Actions:**
1. As Claude streams, scroll slowly downward to keep up with the output. Don't race ahead.
2. When the Revenue Projections table appears — pause scrolling. Say: *"Look at what's coming out. It's picked up the historical ARR and used that to calibrate growth assumptions."* Point out the ARR figures with your cursor.
3. When the Cost Structure section populates — pause again. Say: *"Cost structure — SaaS industry benchmarks. S&M around 35 percent, R&D at 18, G&A at 10. These are calibrated to stage and sector."*
4. When the WACC section appears — STOP scrolling. Hold here for the aha moment.

**THE AHA MOMENT — hold here:**
- Slowly read out: *"Here's the aha moment — the WACC section. Weighted Average Cost of Capital."*
- Hover your cursor over the WACC figure (12.4% or whatever Claude produces).
- Say: *"This is normally where people copy a number from somewhere else or spend an hour arguing about beta. The skill has calculated WACC — and it's shown every input. Risk-free rate, equity risk premium, beta, cost of debt, capital structure. Every assumption is labeled. You can agree or disagree with each one. That's the right way to build a model."*
- Hold for 3 full seconds before scrolling.

5. Continue scrolling to the Terminal Value section. Say: *"Terminal value — done two ways. Exit multiple and perpetuity growth. When both methods produce a similar range, that's a sign of internal consistency."*

**What to show on screen:** Slow scroll through each section as it builds. Cursor hovers over key figures. No rushing.

**If Claude produces slightly different numbers than the script:** That's fine — just narrate what you see. The structure will be consistent even if the exact figures vary.

---

## Step 4 — Review the Output [7:00-8:00]

**What you're doing:** Doing a review pass, narrating the key findings.

**Actions:**
1. Scroll back to the top of the model output.
2. Move through each section at a readable pace (about 10 seconds per section).
3. Narrate as you scroll:
   - Revenue projections: call out the CAGR and mention that growth rate steps down over time
   - EBITDA bridge: find the year EBITDA turns positive and call it out
   - Final equity value range: say the number clearly — pause, let it land
4. When you reach the assumptions flags section (uncertain/aggressive items), say: *"The skill called out the aggressive assumptions explicitly. That's intellectual honesty built into the model. A good analyst does this. Now Claude does it too."*

**What to show on screen:** Slow full scroll from top to bottom of the completed model.

**Pacing tip:** Don't rush this section. Viewers need time to read the numbers. If you're scrolling faster than they can read, slow down.

---

## Step 5 — Iterate: Conservative Scenario [8:00-9:00]

**What you're doing:** Sending a follow-up prompt to run a conservative scenario.

**Actions:**
1. Click into the new message input field at the bottom.
2. Type (or paste) the following prompt:

```
Run a conservative scenario: cap year-over-year growth at 40% starting in year 2,
increase churn assumption to 8% annually, and reduce NRR to 108%.
Show me the revised enterprise value range and flag which line items changed most.
```

3. Submit. Say: *"Conservative scenario — lower growth, higher churn, lower NRR."*
4. When the result comes back, scroll to the comparison table. Say: *"Enterprise value drops. The delta is mostly driven by revenue — churn and NRR compound out over five years in a way that really shows up in terminal value."*
5. Point to the three flagged drivers Claude identifies.

**What to show on screen:** The follow-up prompt typing, then the revised output. The comparison table if Claude produces one — hold on it for 5 seconds.

**If Claude doesn't produce a comparison table spontaneously:** Don't worry. Just narrate the revised number versus the original. The point is the iteration capability, not the exact format.

---

## Step 6 — Final Result [9:00-9:30]

**What you're doing:** Doing a final slow scroll to show the complete deliverable.

**Actions:**
1. Scroll to the very top of the conversation output.
2. Scroll slowly all the way to the bottom — show the entire model.
3. Say: *"This is the deliverable. Base case, conservative case, every assumption documented, WACC calculated, terminal value done two ways, equity value range produced. From one paragraph to a board-ready financial model in under three minutes."*
4. Pause on the final equity value range before scrolling away.

**What to show on screen:** Complete model from top to bottom, slow scroll. Both scenarios visible.

---

## Troubleshooting

**Claude doesn't trigger the financial model format:**
Try explicitly saying "Use the creating-financial-models skill to build a DCF" — occasionally the trigger phrase needs to be more explicit in a new conversation.

**Output is much shorter than expected / missing sections:**
The brief might have been cut off during paste. Check the conversation. If so, say: "Please also include the WACC calculation and terminal value" — Claude will add them.

**Numbers seem wildly off:**
This is rare but can happen if Claude misreads the ARR figures. Pause recording, start a new conversation, and re-paste. The historical ARR in the brief (180k, 620k, 1.4M) should anchor the projections clearly.

**Conservative scenario doesn't produce a comparison table:**
Acceptable. Narrate the two numbers side by side verbally: "Base case was X, conservative case is Y." The audience gets the point.

**Ran long and need to trim:**
The natural cut point is at the end of Step 4 (skip Step 5 if needed). The iteration is valuable but not essential — the aha moment is in Step 3.

---

## Timing Reference

| Step | Clock | Duration |
|------|-------|----------|
| 1 — Set Up Input | 3:30 | 1 min |
| 2 — Invoke Skill | 4:30 | 1 min |
| 3 — Watch Model Build | 5:30 | 1:30 |
| 4 — Review Output | 7:00 | 1 min |
| 5 — Iterate | 8:00 | 1 min |
| 6 — Final Result | 9:00 | 30 sec |
| **Total demo** | | **~6 min** |
