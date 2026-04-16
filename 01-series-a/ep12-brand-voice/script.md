# Episode 12: brand-voice — Reverse-Engineer Your Brand Voice in Minutes

**Series:** A — Design & Creative | **Skill:** anthropics/brand-voice | **Duration:** ~12 min
**Skill URL:** https://smithery.ai/skills/anthropics/brand-voice
**Install:** `npx @smithery/cli@latest skill add anthropics/brand-voice`
**Target Audience:** Founders, brand strategists, marketing leads, anyone launching or rebranding
**Use Case:** Feed 5 copy samples from Luma (fictional fintech startup) into the skill, watch it produce a complete brand voice guide with personality pillars, vocabulary lists, a do/don't matrix, and a scoring rubric

---

## COLD OPEN [0:00–0:30]

**[SCREEN: Show the finished brand voice guide — full-screen, dark mode, structured document with sections: Personality Pillars, Tone Descriptors, Vocabulary, Do/Don't Matrix, Scoring Rubric]**

NARRATOR: "That document right there — personality pillars, tone descriptors, a vocabulary list your whole team can actually use, and a rubric for scoring new copy — that's a brand voice guide. The kind agencies charge fifteen thousand dollars to produce. We generated it in under four minutes. From five sentences."

**[SCREEN: Quick cut — the 5 raw copy samples, plain text, no formatting]**

NARRATOR: "Five pieces of copy in. Complete brand voice system out. Stick around — I'll show you exactly how."

**[ANIMATION: 3-second channel title card — dark background, orange accent, "Anthropic Skills Showcase"]**

---

## INTRO [0:30–1:30]

**[ANIMATION: 5-second branded intro sequence]**

NARRATOR: "Welcome back to Anthropic Skills Showcase. I'm Denis, and today we're covering brand-voice — skill number twelve in Series A: Design and Creative."

**[SCREEN: Smithery.ai skill page for brand-voice, scroll slowly from top]**

NARRATOR: "The pitch for this skill is simple: you give it examples of your existing copy, and it reverse-engineers the underlying voice system. Not just 'you sound friendly' — actual structure. Personality pillars. Vocabulary. Rules your content team can follow without asking you every time."

**[B-ROLL: Someone staring at a blank Google Doc titled 'Brand Voice Guidelines — DRAFT v4']**

NARRATOR: "Here's the before state. You've written something — a homepage, some emails, a few social posts — and it feels right. But you've never written down why it feels right. So when you hire a freelancer, or a second content hire, or an agency, the voice drifts. Every version sounds slightly different and you can't articulate what's wrong."

**[SCREEN: Browser tab — a brand voice brief from a real agency, blurred out except for the price: $12,000–$18,000]**

NARRATOR: "The traditional fix is hiring a brand strategist. The brief they produce is genuinely valuable. But it's expensive, it takes weeks, and it's only as good as your ability to brief them on what your voice actually is."

**[B-ROLL: Someone copying and pasting text into Claude Code]**

NARRATOR: "This skill short-circuits all of that. You don't need to articulate your brand voice — you just need examples of it. Claude finds the pattern. Let me show you."

---

## SKILL DEEP DIVE [1:30–3:30]

**[SCREEN: Terminal, dark mode, large font, cursor blinking]**

NARRATOR: "One command to install."

**[SCREEN: Slowly type the install command, character by character]**

```
npx @smithery/cli@latest skill add anthropics/brand-voice
```

**[SCREEN: Installation output scrolling, green checkmark at the end]**

NARRATOR: "That's it. The skill is now available in every Claude Code session — no project-specific setup, no config files. Once installed, it persists globally."

**[SCREEN: Open the SKILL.md file for brand-voice — scroll from the top]**

NARRATOR: "Let's look at what we just installed. Every Anthropic skill ships with a SKILL.md — it's the instructions Claude reads to understand what the skill does, how to trigger it, and what the expected outputs look like."

**[SCREEN: Highlight the 'triggers' section of SKILL.md]**

NARRATOR: "The triggers are what I want you to notice here. The skill activates when you say things like 'analyze my brand voice,' 'document our tone of voice,' or 'build a brand voice guide from these examples.' Claude sees those phrases, loads the skill, and shifts into brand strategist mode."

**[SCREEN: Highlight the 'outputs' section — show the list: personality pillars, tone descriptors, vocabulary, do/don't matrix, scoring rubric]**

NARRATOR: "The output structure is opinionated, and that's a feature. You get five things every time: personality pillars, tone descriptors, vocabulary lists, a do/don't matrix with examples, and a scoring rubric. That's not random — that's the structure that brand strategists actually use. Whoever built this skill did the thinking so you don't have to."

**[SCREEN: Scroll past the configuration section — show that no API keys or external services are needed]**

NARRATOR: "No API keys, no webhooks, nothing external. The skill runs entirely through Claude. The only thing it needs is copy."

**[ANIMATION: Diagram — 5 copy samples flowing into Claude, structured brand voice guide flowing out. Simple, clean, dark background with orange arrows]**

NARRATOR: "The mental model is: Claude reads your examples, identifies the latent patterns in vocabulary, sentence structure, humor level, formality, and what topics you lean into versus avoid — then it codifies those patterns into a document a human can actually use."

---

## LIVE DEMO [3:30–9:30]

**[SCREEN: Full screen recording begins. Claude Code open in dark mode, terminal on left, file explorer on right. Clean workspace, no notifications.]**

NARRATOR: "Let's build something real. Our fictional company is Luma — expense management software for remote teams. They're Series A, about eighteen months post-launch. They have a voice — it's in their copy — but they've never documented it."

### Step 1 — Show the input [3:30–4:30]

**[SCREEN: Open use-case/input/copy-samples.md in VS Code. Scroll slowly through all 5 samples.]**

NARRATOR: "Here are the five copy samples we're working with. A website hero section. An email subject line. A tweet. A product feature tooltip. And a 404 error message."

**[SCREEN: Pause on the hero headline — 'Expenses that don't make you groan.']**

NARRATOR: "Even in that first line, there's something. 'Don't make you groan' — that's a brand making a promise in the negative. Not 'expense management made easy.' Not 'effortless expenses.' They're acknowledging the category is painful. That's a voice choice."

**[SCREEN: Scroll to the tweet — 'Expense reports are a form of punishment invented by people who hated their finance team. We fixed that. Quietly.']**

NARRATOR: "And that tweet. Dry. A little dark. Then 'quietly' as its own sentence. That's a word count choice, a rhythm choice, a personality choice. Five samples, and I'm already seeing a pattern. Let's see what the skill sees."

### Step 2 — Invoke the skill [4:30–5:30]

**[SCREEN: Switch to Claude Code chat. Paste the copy samples into the input, then type the prompt below.]**

NARRATOR: "I'm going to paste in all five samples and give the skill a clean brief."

**[SCREEN: Type the prompt:]**

```
Use the brand-voice skill to analyze these 5 copy samples from Luma,
a B2B fintech startup doing expense management for remote teams.
Reverse-engineer their brand voice and produce a complete brand voice guide
with personality pillars, tone descriptors, vocabulary, a do/don't matrix,
and a scoring rubric.
```

**[SCREEN: Hit enter. Watch the skill activation banner appear at the top of the Claude Code UI.]**

NARRATOR: "There it is — the brand-voice skill banner. Claude has loaded the skill instructions and is now operating as a brand strategist, not just a general assistant. Notice the output format shifts immediately."

### Step 3 — Watch the skill work [5:30–7:00]

**[SCREEN: Claude Code streaming the analysis in real time. Show the output building section by section.]**

NARRATOR: "Watch how it structures the analysis. It doesn't just describe what it reads — it makes inferences. It's not saying 'this tweet is casual.' It's saying this brand uses self-deprecating category humor to build trust without using the word trust. That's a different level of synthesis."

**[SCREEN: Pause on the personality pillars section as it streams in.]**

NARRATOR: "The personality pillars are the core. These are the three to four adjective pairs that define the voice — not just one word, but a tension. 'Confident but not boastful.' 'Dry but not cold.' 'Direct but not blunt.' Each pillar has a definition and a quote from the samples that illustrates it. This is the section brand strategists charge the most for — and it's coming out of five sentences."

**[SCREEN: Scroll through the vocabulary section — preferred words, phrases to avoid, example substitutions.]**

NARRATOR: "The vocabulary section is where this gets immediately useful for a content team. Preferred words — 'quietly,' 'already done,' 'your team.' Words to avoid — 'leverage,' 'seamlessly,' 'robust.' And why. Each item has a rationale. You can paste this directly into a Notion style guide."

### Step 4 — Review the full output [7:00–8:00]

**[SCREEN: Scroll through the complete brand voice guide — all five sections fully rendered.]**

NARRATOR: "Let's look at the full output. We have: three personality pillars with quotes. A tone descriptor set — six adjectives ranked by prominence in the samples. A vocabulary list — twelve preferred terms, eight to avoid. And then the do/don't matrix."

**[SCREEN: Zoom into the do/don't matrix — side-by-side comparisons of real and rewritten copy.]**

NARRATOR: "This is the aha moment. The do/don't matrix doesn't give you abstract rules — it gives you rewrites. Here's a sentence that sounds wrong for Luma. Here's the same sentence written in Luma's voice. You can train a new writer with this in twenty minutes."

**[SCREEN: Scroll to the scoring rubric at the bottom — a 1–5 scale with criteria and example sentences at each level.]**

NARRATOR: "And finally, the scoring rubric. One to five, with criteria for each level and an example sentence. This is what you use in content review. Does this draft sound like a two or a four? That's a conversation your whole team can have because the scale is explicit."

### Step 5 — Iterate [8:00–9:00]

**[SCREEN: Type the refinement request in Claude Code.]**

NARRATOR: "Now here's where we take it one step further. Luma communicates very differently in two specific contexts — social media, where they can be a little sharp, versus error states, where someone's frustrated and needs reassurance. The skill gave us a unified voice. Let's ask it to split those two contexts."

**[SCREEN: Type:]**

```
Great. Now add a section that splits the voice into two registers:
"How we sound on social" versus "How we sound in error states."
For each, give a tone summary, two vocabulary notes, and a short example sentence.
```

**[SCREEN: Watch the skill add the new section, streaming in real time.]**

NARRATOR: "Social voice: sharper, shorter sentences, permission to be a little provocative. Error state voice: warmer, more reassuring, still dry but never flippant — because someone's frustrated and they need to know the product has their back. Same underlying personality, different register for the context. That's sophisticated brand thinking."

**[SCREEN: Show the two new subsections side by side in the output.]**

NARRATOR: "And look at the example sentences. The social version could be a tweet right now. The error state version sounds exactly like the 404 page we fed in — which is exactly what you want. The skill learned the register from the sample."

### Step 6 — Final result [9:00–9:30]

**[SCREEN: Scroll the complete, final brand voice guide from top to bottom in one smooth scroll. Full screen, dark mode, clean.]**

NARRATOR: "Here's the complete document. Personality pillars. Tone descriptors. Vocabulary. Do/don't matrix. Scoring rubric. Social register. Error state register. A complete brand voice system — from five samples, in under four minutes. This is what you hand to your content team, your freelancers, your agency — and the voice stays consistent."

---

## RESULTS + VARIATIONS [9:30–11:00]

**[SCREEN: Split view — the 5 raw samples on the left, the complete brand voice guide on the right.]**

NARRATOR: "Let's zoom out. We started with five pieces of copy — a homepage line, a subject line, a tweet, a tooltip, and a 404 message. We ended with a structured brand voice guide that a team of ten could use tomorrow. The skill didn't invent anything — it found what was already there."

**[B-ROLL: Quick cuts — a Notion page, a Figma file, a Slack channel with a pinned link]**

NARRATOR: "The output drops directly into your preferred tool. Notion, Confluence, a shared Google Doc, a Figma style guide — wherever your team keeps standards. No reformatting needed."

**[SCREEN: New Claude Code session — show a different prompt being typed]**

NARRATOR: "Three other use cases worth knowing about. First: you're rebranding. You've got old copy that captured the original voice and new copy that's drifted. Feed both to the skill and ask it to document what changed — you get a before/after voice analysis that makes the rebrand conversation concrete."

**[ANIMATION: Text card — "Use Case 2: Pre-hire content brief" on dark background, orange accent]**

NARRATOR: "Second: pre-hire content brief. Before you bring on a content writer or agency, feed the skill your best five pieces of copy and give them the output as their onboarding doc. You've just saved yourself three rounds of feedback and a phone call."

**[ANIMATION: Text card — "Use Case 3: Acquisition voice audit" on dark background, orange accent]**

NARRATOR: "Third: acquisition voice audit. If you're acquiring a company, or merging teams, you can run both companies' copy through the skill and get a structured comparison. Where do the voices align? Where do they conflict? What's the integration path? Brand strategy from day one."

---

## WRAP-UP + CTA [11:00–12:00]

**[SCREEN: The final brand voice guide document, held steady. Pull back slowly.]**

NARRATOR: "Brand voice is one of those things every company knows they need and almost nobody actually documents. The skill removes the main barrier — you don't have to know how to articulate your voice before you can codify it. You just need examples of it in the wild."

**[SCREEN: Terminal — show the install command one more time, large font, centered]**

```
npx @smithery/cli@latest skill add anthropics/brand-voice
```

NARRATOR: "One command. The skill is yours. If you've got any copy that captures who you are — a homepage, a few emails, anything — you can have a brand voice guide before the end of today."

**[SCREEN: Browser — Smithery.ai skill page for brand-voice, URL visible in address bar]**

NARRATOR: "Skill link is in the description — smithery.ai/skills/anthropics/brand-voice. The full sample files and output from this episode are on GitHub."

**[B-ROLL: GitHub repo page — agentfactory/anthropic-skills-showcase, scroll to the ep12 folder]**

NARRATOR: "If this was useful, subscribe — we cover one Anthropic skill per episode. Every episode comes with the full input files and script so you can follow along at your own pace."

**[SCREEN: Text card — "Next: Episode 13 — brand-guidelines" on dark background]**

NARRATOR: "Next episode: brand-guidelines. We take a single logo file and use the skill to build a complete visual brand identity system — color palette, typography scale, spacing rules, component patterns. If brand-voice is the personality, brand-guidelines is the physical form. See you then."

**[ANIMATION: 10-second end card — channel name, subscribe button, two video thumbnails (ep11 on left, ep13 preview on right), GitHub and Smithery links at the bottom]**

---

## Word Count: ~1,810 words narration
