# Live Demo Walkthrough — Episode 15
# slack-gif-creator | Timestamps: 3:30 to 9:30

This is Denis's rehearsal script for the 6-minute live demo segment.
Follow this step by step. Estimated time per step is noted — stay on pace.

---

## Preflight Checklist (Complete before recording)

- [ ] Skill installed: `npx @smithery/cli@latest skill add anthropics/slack-gif-creator`
- [ ] Claude Code terminal open in a fresh session
- [ ] Dark mode enabled on terminal and browser
- [ ] Font size bumped to 18px for readability on screen
- [ ] Browser open and ready for GIF preview (Chrome preferred)
- [ ] Slack workspace open with a test channel ready
- [ ] Slack custom emoji page bookmarked: Workspace Settings > Customize Workspace > Emoji
- [ ] gif-brief.md open in a side window for reference
- [ ] Screen recording software active, NOT yet recording
- [ ] Confirm three GIFs don't already exist in the test Slack workspace

---

## Step 1 — Context Setup [3:30-3:45] (~15 sec)

**Say:**
"I've got a brief here — three GIFs for a remote engineering team. Let's build them one at a time, starting with the biggest one: the deploy celebration."

**Do:**
- Show gif-brief.md briefly (3 seconds) so viewers can see it exists
- Switch back to the Claude Code terminal

---

## Step 2 — GIF 1: Deploy Party [3:45-5:20] (~1:35)

**Say:**
"Here's my prompt for the first GIF. I'm being specific about frame count, colors, and timing — the skill can handle vague descriptions too, but when I have a clear picture in my head, I give it the details."

**Type this prompt exactly:**
```
Create a 128x128 Slack GIF called "deploy-party". Confetti explosion — small rectangles in green #788c5d and teal #6a9bcc raining down from the top, with some rotating as they fall. After 18 frames of confetti the word "SHIPPED" appears in white Poppins-style bold text in the center, holding for 6 frames. 24 frames total at 60ms each. Loop forever.
```

**While Claude processes:**
"You can see it working through the frame logic — plotting particle positions, calculating rotation angles for each rectangle, handling the text rendering in frame 18."

**When browser preview opens:**
- Let it loop 3 full times before speaking
- Point at screen: "There it is. That's the aha moment for this skill — not a static image, not clip art. Actual motion design from a description."
- Let it loop 2 more times
- Say: "Green and teal from our brand palette. 'SHIPPED' appearing right when the confetti density peaks. Clean loop."

---

## Step 3 — GIF 2: PR Review (First Pass) [5:20-6:00] (~40 sec)

**Say:**
"Second GIF. The PR Review. This one should be subtle — the humor comes from timing, not from complexity."

**Type this prompt exactly:**
```
Create a 128x128 Slack GIF called "pr-review". Two large eyes centered on a warm dark background #2d1f0e. Eyes blink slowly twice, then on the third blink they don't close all the way — pupils shift hard to the right and hold. Warm amber iris color #c87533. No text. 20 frames at 80ms each. Loop.
```

**When preview loads:**
- Let it complete one full loop
- Say: "The eyes are right, the blink timing is good. But watch the end — the side-eye hold is too quick. By the time you register what you're looking at, it's already back to neutral. That's worth one iteration."

---

## Step 4 — GIF 2: PR Review (Refinement) [6:00-7:00] (~1:00)

**Say:**
"This is the kind of refinement that used to mean reopening your animation software and manually adjusting keyframes. Here it's one follow-up sentence."

**Type this prompt exactly:**
```
Update "pr-review": extend the side-eye hold from 2 frames to 6 frames, and add a very slight eyebrow raise on both eyes during the hold — just 2px upward shift on the brow arc. Keep everything else the same.
```

**When updated preview loads:**
- Let it loop twice
- Say: "There — the hold is long enough now. You get the blink, you get the side-eye, and then it lingers just long enough to be funny. The eyebrow raise adds maybe 2% more expression. That's all it needed."
- Pause for effect: "One sentence. Done."

---

## Step 5 — GIF 3: Meeting Alert [7:00-8:00] (~1:00)

**Say:**
"Last one. The meeting alert. I want this to feel like urgency without being aggressive about it."

**Type this prompt exactly:**
```
Create a 128x128 Slack GIF called "meeting-alert". A simple calendar icon centered on a dark background #141413. An orange ring #d97757 pulses outward from the calendar — three pulse rings, each fading as they expand. Inside the calendar icon, two clock hands rotate clockwise and land at the 5-minute position, then hold. 16 frames at 70ms each. Loop. Keep the design minimal — icon-weight strokes, not filled shapes.
```

**When preview loads:**
- Let it loop twice
- Say: "The rings are doing the work. They pulse outward at a rhythm that reads as 'time-sensitive' without being chaotic. Clock hands sweep to five minutes and hold — you read it instantly. That's the right level of urgency for 'meeting in five.'"

---

## Step 6 — Spec Check and Upload [8:00-9:30] (~1:30)

**Say:**
"Before we upload, let's confirm these are within Slack's limits."

**Do:**
- Show the exported file sizes for all three GIFs in the file explorer or terminal
- Read them out: "Deploy Party: [size]KB. PR Review: [size]KB. Meeting Alert: [size]KB. All well under two megabytes."

**Navigate to Slack:**
- Open Slack workspace settings
- Go to Customize Workspace > Emoji > Add Custom Emoji

**Say:**
"Uploading is just the standard Slack emoji flow. Pick the file, name it, done."

**Upload each GIF:**
- Upload deploy-party.gif, name it "deploy-party", confirm
- Upload pr-review.gif, name it "pr-review", confirm
- Upload meeting-alert.gif, name it "meeting-alert", confirm

**Say:**
"And now they're part of the workspace. Available to everyone."

**Switch to test Slack channel:**
- Type a message: "CI/CD pipeline just went green"
- React with :deploy-party: — pause as it appears in the reaction bar
- Say: "That's the whole workflow. Brief to Slack in about five minutes of active time."

---

## Troubleshooting

**If Claude generates broken canvas code:**
- Ask: "The preview isn't rendering correctly. Can you regenerate with simpler canvas drawing commands and debug the frame rendering?"

**If the GIF export is over 2MB:**
- Ask: "The file is too large for Slack. Can you reduce the color depth to 64 colors and lower the frame rate to 50ms per frame?"

**If the preview loop stutters:**
- This is usually a browser issue, not the GIF. Refresh the tab. The exported GIF will be smooth.

**If the Slack upload rejects the file:**
- Confirm the file is actually GIF format (not webm or mp4)
- Confirm dimensions are exactly 128×128px
- Try a different browser for the upload

**Timing safety buffer:**
- If you're running long, skip the spec-check narration and go straight to the upload
- If you're running short, linger on the confetti GIF loop during Step 2 — it's worth it
