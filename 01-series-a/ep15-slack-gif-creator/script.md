# Episode 15 Script — slack-gif-creator
# Series A Finale | ~12 minutes | ~1,800 words

---

## [0:00-0:30] COLD OPEN

[SCREEN: Three animated GIFs playing side by side in a Slack custom emoji manager — confetti raining in teal and green with "SHIPPED" appearing at the end, a pair of amber eyes slowly blinking then cutting sideways, and a calendar icon pulsing with an orange ring as clock hands spin to five]

[ANIMATION: Slow zoom into the confetti GIF as it loops — the colors are rich, the motion is smooth, it looks professional]

Voiceover:
Three custom Slack reactions. Confetti that pops when your team ships. Side-eye for the PR that's been sitting for four days. A pulsing clock for "meeting in five."

[SCREEN: GIFs drop into a Slack channel one by one — teammates start reacting with them immediately]

These didn't come from a designer. They came from one skill and three sentences of description. Let me show you how.

---

## [0:30-1:30] INTRO

[ANIMATION: Branded intro — dark background, orange wordmark fades in: "Anthropic Skills Showcase"]

[B-ROLL: Split screen — left side shows a designer in Figma, right side shows a terminal prompt]

Welcome back. I'm Denis, and this is the Anthropic Skills Showcase — where we install one skill and build something real in twelve minutes.

[SCREEN: Smithery.ai skill page for slack-gif-creator]

Episode 15. The skill is `slack-gif-creator` by Anthropic. Forty-four installs, and after this video, that number is going to climb.

This skill generates custom animated GIFs designed for Slack — the right dimensions, the right file size, looping, ready to drop straight into your workspace emoji library.

[B-ROLL: Slack workspace with default emoji set — yellow faces, hearts, the usual suspects]

Here's the before state. You want a custom reaction for your team. Maybe something that says "deployed" better than a rocket emoji. Your options right now: buy a pack on Etsy, commission a designer, learn After Effects, or spend forty minutes in Photoshop. None of those are great if you just need something done.

[SCREEN: Terminal window, clean dark background]

With `slack-gif-creator`, you describe what you want, and the skill generates an HTML canvas animation that you can preview instantly and export to GIF. No design background needed. No tools to install beyond the skill itself.

This is the final episode of Series A — Design and Creative. Fifteen episodes, fifteen skills that turn anyone into a capable creative. We're going out with something your team will actually use every single day.

---

## [1:30-3:30] SKILL DEEP DIVE

[SCREEN: Terminal, cursor blinking]

Let's install it. One command.

```
npx @smithery/cli@latest skill add anthropics/slack-gif-creator
```

[SCREEN: Terminal output — installation progress, packages resolving, completion confirmation]

[B-ROLL: Terminal scrolling, then a clean "Done" indicator]

That's it. The skill is now part of your Claude Code environment. Whenever you describe a GIF in a conversation with Claude, this skill knows how to generate it.

[SCREEN: SKILL.md file opening — clean markdown rendered in a dark editor]

Let's look at what's inside the skill. The SKILL.md is the instruction set that tells Claude how to behave when this skill is active.

[SCREEN: Scroll through SKILL.md — highlight sections as mentioned]

A few things stand out.

First, the output format. The skill generates HTML canvas animations — not a static image, but actual JavaScript that draws and animates frame by frame. This matters because you can preview it live in any browser before you commit to a GIF export.

Second, the spec enforcement. The skill automatically targets Slack's custom emoji requirements — 128 by 128 pixels, looping, and keeping the file under two megabytes. You don't have to think about those constraints. They're baked in.

Third, the description interface. You describe what you want in plain language. The skill translates that into canvas drawing commands — shapes, motion paths, color fills, timing. It handles the technical layer so you can stay in the creative layer.

[SCREEN: Skill page on Smithery.ai — configuration panel]

There are a few optional configuration flags. You can specify frame count, frame duration in milliseconds, background transparency, and color palette hints. For most use cases the defaults are solid — but for this demo I want exact control over a couple of the GIFs, so we'll use those parameters directly.

[B-ROLL: Close-up of "128x128" spec text on the Smithery page]

128 by 128 is a very specific canvas. There's no room for complexity. The skill knows this, and its output reflects it — the animations it generates are clean and iconographic rather than trying to cram in detail.

Alright. Let's build the three GIFs.

---

## [3:30-9:30] LIVE DEMO

[SCREEN: Claude Code terminal, fresh session, skill active]

[B-ROLL: Brief shot of the gif-brief.md file — three sections visible]

I have a brief here. Three GIFs for our remote engineering team. Let's take them one at a time.

### Step 1 — Deploy Party GIF

[SCREEN: Claude Code prompt being typed]

Here's my first prompt:

> Create a 128x128 Slack GIF called "deploy-party". Confetti explosion — small rectangles in green #788c5d and teal #6a9bcc raining down from the top, with some rotating as they fall. After 18 frames of confetti the word "SHIPPED" appears in white Poppins-style bold text in the center, holding for 6 frames. 24 frames total at 60ms each. Loop forever.

[SCREEN: Claude processes the request — streaming output visible]

[B-ROLL: Claude Code token stream, text flowing]

Claude is reading the brief, interpreting the motion paths, generating the canvas code. You can see it working through the logic — frame timing, particle positions, text rendering.

[SCREEN: Output — a browser tab opens with the animation playing]

[ANIMATION: The confetti GIF plays — this is the AHA MOMENT. Green and teal rectangles tumble from the top edge with slight rotations. Around frame 18, "SHIPPED" fades in centered, bold and clean. The loop restarts seamlessly.]

There it is.

[PAUSE for 3 full loops to play]

That's the moment. Running in the browser, looping, already looking like something you'd see in a design-forward Slack workspace. Not clip art — actual motion design from a plain-English description.

### Step 2 — PR Review GIF (with refinement)

[SCREEN: Claude Code, new prompt]

Next up, the PR Review eye. This one is intentionally subtle.

> Create a 128x128 Slack GIF called "pr-review". Two large eyes centered on a warm dark background #2d1f0e. Eyes blink slowly twice, then on the third blink they don't close all the way — pupils shift hard to the right and hold. Warm amber iris color #c87533. No text. 20 frames at 80ms each. Loop.

[SCREEN: Browser preview opens — eyes blink twice, then the side-eye hold]

Okay. I like the eyes, and the blink timing is good. But the side-eye hold feels too brief — it needs to linger longer for the joke to land. Let me refine.

[SCREEN: Refinement prompt typed]

> Update "pr-review": extend the side-eye hold from 2 frames to 6 frames, and add a very slight eyebrow raise on both eyes during the hold — just 2px upward shift on the brow arc. Keep everything else the same.

[SCREEN: Updated animation plays in the browser]

[ANIMATION: The eyes blink twice, then the pupils slide right and hold with a barely-perceptible brow lift for six frames before the loop resets]

That's the difference between "it works" and "it's funny." The extra hold frames give viewers time to register what they're seeing. The micro eyebrow raise adds just enough expression without overcomplicating the drawing. One iteration, plain language, done.

### Step 3 — Meeting Alert GIF

[SCREEN: Claude Code, third prompt]

Last one. The meeting alert. This one needs urgency without being annoying.

> Create a 128x128 Slack GIF called "meeting-alert". A simple calendar icon centered on a dark background #141413. An orange ring #d97757 pulses outward from the calendar — three pulse rings, each fading as they expand. Inside the calendar icon, two clock hands rotate clockwise and land at the 5-minute position, then hold. 16 frames at 70ms each. Loop. Keep the design minimal — icon-weight strokes, not filled shapes.

[SCREEN: Preview renders — the calendar sits centered, rings pulse outward in orange, clock hands sweep to :05 and pause before the loop resets]

[ANIMATION: The pulsing rings expand and fade in a rhythm that reads as "urgent but not alarming." The clock hand motion is smooth. The whole thing is readable at small size.]

Three GIFs. Under four minutes of prompting.

### Step 4 — Slack Sizing Check

[SCREEN: File size readout for each exported GIF]

Let's quickly confirm the specs before we upload. Each of these exports as a standard GIF. Slack requires: 128 by 128 pixels, under 2MB, GIF format.

Deploy Party: 128x128 — 340KB. PR Review: 128x128 — 180KB. Meeting Alert: 128x128 — 220KB.

[B-ROLL: All three well under the 2MB limit]

All three pass. The skill's defaults kept us in bounds without any manual optimization.

### Step 5 — Upload to Slack

[SCREEN: Slack workspace settings — Custom Emoji page]

Now let's actually add them. Slack Settings, then Customize, then Add Custom Emoji.

[SCREEN: Upload Deploy Party GIF — name it "deploy-party", preview shows in the Slack emoji browser]

[SCREEN: Upload PR Review GIF — name it "pr-review"]

[SCREEN: Upload Meeting Alert GIF — name it "meeting-alert"]

[B-ROLL: All three appearing in the custom emoji list with their names]

### Step 6 — First Use in the Wild

[SCREEN: Slack channel — a message that says "CI/CD pipeline just went green"]

[SCREEN: Teammate reacts with :deploy-party: — confetti floods the reaction bar]

[SCREEN: A message that says "Hey has anyone looked at PR #447 yet?" — someone drops :pr-review:]

[B-ROLL: The side-eye loops twice in the reaction strip — small but unmistakable]

That's the workflow. Brief to upload in about five minutes of active time.

---

## [9:30-11:00] RESULTS + VARIATIONS

[SCREEN: All three GIFs displayed in a row on the dark background, each looping]

Let's look at what we made.

Three custom Slack GIFs. On-brand colors, proper Slack spec, looping cleanly. The Deploy Party reads as celebration. The PR Review reads as gentle social pressure. The Meeting Alert reads as professional urgency. Each one does exactly what a good Slack reaction should — communicate an emotion or status in under two seconds of animation.

[B-ROLL: Zoom in on each GIF playing at 2x size so viewers can appreciate the detail]

Now, three other places this skill changes your workflow.

[SCREEN: Text overlay — "Use Case 2: Onboarding Reactions"]

Remote onboarding. You want a set of reactions new teammates can use during their first week — "need help," "got it," "loving this." Describe the set once, generate five or six GIFs, upload them as a welcome kit. It creates a visual vocabulary for your workspace.

[SCREEN: Text overlay — "Use Case 3: Status Reactions"]

Status communication. Working deep focus, in a meeting, heads-down on a deadline. Instead of a status message, a custom animated reaction on your own messages that loops "do not disturb" in a visual way. Amber warning light, blinking slowly.

[SCREEN: Text overlay — "Use Case 4: Community Management"]

Community managers running Discord or Slack communities. Custom animated reactions for milestones — a subscriber count hitting a goal, a launch day, a community birthday. Branded, animated, unique to your space. No designer required.

[B-ROLL: Three quick clips representing each alternative — a welcome kit grid, a focus-mode status icon, a community celebration GIF]

The common thread is this: the skill removes the friction between "I wish we had a reaction for that" and "we have one." That friction is usually just the design barrier. This skill eliminates it.

---

## [11:00-12:00] WRAP-UP + CTA

[SCREEN: Clean dark background, orange accent line across the bottom]

[B-ROLL: All three GIFs looping gently in the lower third]

That's `slack-gif-creator`. You describe what you want, the skill handles the canvas code, the frame timing, the Slack spec. You review, refine in one pass if needed, and upload. Start to finish, less time than writing a Slack message about wanting better reactions.

And that wraps up Series A — Design and Creative.

[ANIMATION: Series A episode grid fades in — all 15 episode tiles arranged in a 5x3 grid, each with a small thumbnail]

Fifteen episodes. Canvas design. Theme systems. Brand guidelines. Algorithmic art. And now custom animated GIFs. We've covered the full creative surface area — the tools that let anyone produce design-quality output without a design background.

It's been a strong series. Thank you for watching every episode of it.

[SCREEN: Series B teaser card — "SERIES B: DOCUMENTS — Starting Next Episode"]

Series B starts next. Documents. If Series A was about making things look good, Series B is about making things read well.

Episode 16 is `docx`. We take a rough draft — the kind that lives in a Notes app or a janky Google Doc — and we turn it into a polished Word document. Proper heading hierarchy, consistent styles, a real table of contents. The kind of document you'd be comfortable sending to a client.

[SCREEN: Subscribe button animation, brand colors]

If you haven't subscribed yet, now's the time. Every episode is twelve minutes, one skill, one complete use case. No filler.

[SCREEN: Two links appear, styled in brand colors]

The skill is at:
**https://smithery.ai/skills/anthropics/slack-gif-creator**

All episode code and resources are on GitHub:
**https://github.com/agentfactory/anthropic-skills-showcase**

[SCREEN: End card — three tiles: Subscribe, Skill URL, GitHub]

[B-ROLL: Final shot of all three GIFs looping side by side, slowly fading to black]

See you in Series B.
