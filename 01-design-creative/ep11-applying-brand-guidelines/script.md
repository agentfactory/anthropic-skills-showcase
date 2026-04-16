# Episode 11: applying-brand-guidelines — One Skill, One Pass, One Consistent Voice

**Series:** A — Design & Creative
**Skill:** `anthropics/applying-brand-guidelines`
**Skill URL:** https://smithery.ai/skills/anthropics/applying-brand-guidelines
**Install:** `npx @smithery/cli@latest skill add anthropics/applying-brand-guidelines`
**Duration:** ~12 min | **~1,800 words narration**

---

## COLD OPEN [0:00–0:30]

**[SCREEN: Final output — three polished, on-brand copy blocks side by side, each with a subtle green checkmark in the top-right corner. Dark background, Verdant brand palette.]**

NARRATOR: "Three writers. Three completely different registers. One brand — and right now, none of these pieces sounds like it."

**[SCREEN: Quick before/after flash — raw off-brand text on the left, clean rewritten text on the right. Three pairs, two seconds each.]**

NARRATOR: "What if you could hand Claude a brand voice guide and three inconsistent copy samples — and get all of them back, unified, polished, and genuinely on-brand — in a single prompt? No rewrites. No back-and-forth. Just: done."

**[SCREEN: Terminal window, command ready to type.]**

NARRATOR: "That's exactly what we're building today. Let's go."

---

## INTRO [0:30–1:30]

**[ANIMATION: 5-second channel intro — Anthropic Skills Showcase wordmark on dark background, orange accent line sweeping left to right.]**

NARRATOR: "Welcome back to Anthropic Skills Showcase. I'm Denis, and this is the series where we take every skill on Smithery's Anthropic directory and show you — concretely — what it actually does for your work."

**[SCREEN: Smithery.ai page for anthropics/applying-brand-guidelines, scrolling slowly. Skill title and install count (352) visible.]**

NARRATOR: "Today: applying-brand-guidelines. The problem it solves is painfully familiar to anyone who manages a content team. You have a brand voice guide — maybe it lives in a Google Doc, maybe it's a PDF that nobody reads — and every piece of copy that comes back from writers, contractors, or other departments sounds slightly... different. Slightly off. Too formal. Too casual. Wrong vocabulary. Missing the em dash, using the wrong comma convention. Little things, but they add up, and they erode trust in the brand."

**[B-ROLL: Split screen — left side shows a chaotic Notion doc with tracked changes and conflicting comments; right side shows a clean, consistent brand document with clear rules.]**

NARRATOR: "Fixing it manually means a senior brand person reading every single piece and editing it line by line. At scale, that's a full-time job. This skill changes that equation completely."

---

## SKILL DEEP DIVE [1:30–3:30]

**[SCREEN: Terminal window, clean dark background, cursor blinking.]**

NARRATOR: "Install is one command:"

**[SCREEN: Type and execute the install command — large font, clear and centred.]**

```
npx @smithery/cli@latest skill add anthropics/applying-brand-guidelines
```

NARRATOR: "That's it. One line, and the skill is wired into your Claude environment. No API keys to configure, no webhooks to set up. You'll see a confirmation in the terminal and the skill appears in your Claude interface immediately."

**[SCREEN: SKILL.md file opens — scroll through it at reading pace, key sections highlighted with orange underline animation as mentioned.]**

NARRATOR: "Let's look at what this skill actually gives us. The SKILL.md is the instruction layer — it tells Claude exactly how to behave when you invoke this skill. Three things stand out."

**[SCREEN: Highlight the 'trigger' section.]**

NARRATOR: "First: the trigger. You activate the skill by including your brand guidelines and the copy you want rewritten in the same prompt. The skill recognises the structure and enters brand-alignment mode — it doesn't just rephrase, it audits each piece against the rules you've provided and rewrites with those constraints hard-baked in."

**[SCREEN: Highlight the 'features' section.]**

NARRATOR: "Second: what it actually checks. Tone and register — is this piece warm or cold, direct or hedge-y? Vocabulary — are we using approved words and avoiding banned ones? Punctuation conventions — Oxford comma, em dashes, exclamation mark limits. And personality pillars — does this copy feel like the brand, not just sound grammatically correct?"

**[SCREEN: Highlight the 'output format' section.]**

NARRATOR: "Third: the output format. It returns each rewritten piece cleanly labelled, with a short annotation explaining what changed and why. That annotation is gold for training writers — it's not just a correction, it's a lesson."

**[ANIMATION: Simple flow diagram — Brand Guidelines Doc + Off-brand Copy → applying-brand-guidelines skill → On-brand Copy + Change Annotations. Orange arrows, dark background, green checkmark at the end.]**

NARRATOR: "The flow is straightforward: you bring your brand rules, you bring your copy, the skill handles the reconciliation. Let's see it in action."

---

## LIVE DEMO [3:30–9:30]

**[SCREEN: Full screen recording, dark mode Claude interface. Clean desktop. No notifications.]**

### Step 1 — Open the brand guidelines [3:30–4:30]

NARRATOR: "I've got a fictional DTC wellness brand called Verdant — think supplements, functional teas, that kind of space. Their brand guide is a one-page summary. Let me open it."

**[SCREEN: Open brand-guidelines-summary.md — scroll through it slowly. Key rules visible: tone pillars, vocabulary rules, punctuation conventions.]**

NARRATOR: "Warm, direct, never preachy. Those are their three tone pillars. On vocabulary: use 'nourish' not 'consume', avoid words like 'synergy' and 'holistic' — they feel borrowed from corporate wellness, not earned. Punctuation: em dashes are encouraged, Oxford comma is non-negotiable, and exclamation marks are capped at one per page. Personality: grounded, curious, quietly confident. That's the target."

**[SCREEN: Scroll to the three off-brand copy samples at the bottom of the file.]**

NARRATOR: "Now here are the three pieces that came in from the team. The blog intro reads like an academic abstract — passive voice, no warmth, 'it is widely acknowledged.' The social post is the opposite: five exclamation marks, 'LEVEL UP YOUR WELLNESS JOURNEY,' all-caps, pure hype. And the product headline is just... bland. 'Premium supplements for modern living.' Every competitor could say that."

### Step 2 — Build the prompt [4:30–5:30]

**[SCREEN: Claude prompt window, blank, cursor ready.]**

NARRATOR: "Now I build the prompt. The pattern here is simple: I paste the brand guidelines first, then I paste all three copy samples, clearly labelled. I tell the skill what I need — rewrite each piece to match the brand voice guide — and I ask for the change annotations."

**[SCREEN: Type the prompt slowly so viewers can read it. Use the actual prompt from walkthrough.md.]**

NARRATOR: "One thing worth noting: I'm not asking Claude to do three separate tasks. I'm giving it the brand context once, and asking it to apply that context to all three pieces in a single pass. That's deliberate — it means the same brand lens is applied consistently, not re-interpreted three times."

**[SCREEN: Hover over the send button — pause for one beat.]**

NARRATOR: "Let's send it."

### Step 3 — Watch it process [5:30–7:00]

**[SCREEN: Claude streaming response — text appearing in real time. Show the full output being generated.]**

NARRATOR: "Watch what comes back. It's working through each piece in order — blog intro first. Notice it's not just softening the language, it's making active structural choices. The passive 'it is widely acknowledged' becomes a direct statement in first-person plural — 'We've known for a long time' — which is exactly what Verdant's brand voice calls for."

**[SCREEN: Highlight the blog intro rewrite in the response.]**

NARRATOR: "The social post is the more interesting edit. It strips the all-caps and four of the five exclamation marks — keeping just one, right at the end, within the brand's limit. But it also replaces 'LEVEL UP' and 'wellness journey' — both are on the vocabulary avoid list — with language that feels earned rather than hype-y."

**[SCREEN: Highlight the social post rewrite.]**

NARRATOR: "And the product headline. This is the aha moment. 'Premium supplements for modern living' becomes — let me read this — 'Made to nourish what daily life depletes.' Same product. Completely different feeling. It uses the approved word 'nourish', it's direct, it's confident without being loud, and it's specific enough to feel true."

**[SCREEN: Zoom in on the headline comparison — before and after, side by side.]**

NARRATOR: "That right there. That's what brand consistency looks like when it's done well. Not just avoiding mistakes — actually saying something."

### Step 4 — Review the annotations [7:00–8:00]

**[SCREEN: Scroll to the annotation section of the response.]**

NARRATOR: "Now let's look at the change annotations, because this is what separates a good edit from a useful one. For the blog intro, it notes: 'Replaced passive constructions with active voice per tone pillar — direct. Removed hedge language: "widely acknowledged", "it has been suggested."' For the social post: 'Reduced exclamation marks from 5 to 1, per style rule. Removed banned vocabulary: "synergy", "wellness journey", "level up."'"

**[SCREEN: Highlight each annotation as mentioned.]**

NARRATOR: "This is genuinely useful if you're trying to train a team. You can send this back to the writer and say: here's what changed, here's why, here's the rule it was violating. The skill doesn't just fix — it teaches."

### Step 5 — Iterate: tighten the social post [8:00–9:00]

**[SCREEN: New prompt window, building a follow-up.]**

NARRATOR: "One more pass. The social post is better — but the opening line still feels a little flat to me. Let me ask Claude to give me three alternative opening lines that feel warmer and more specific to the product."

**[SCREEN: Type and send the follow-up prompt: "The rewritten social post is good. Give me 3 alternative opening lines that feel warmer and more product-specific, still following Verdant's brand voice."**]

**[SCREEN: Response streams — three options appear.]**

NARRATOR: "Three options. The second one is the one I'd use — it names a specific benefit without overstating it, and it opens with a verb, which is a small thing that makes a big difference for social. I'll drop that in."

### Step 6 — Final result [9:00–9:30]

**[SCREEN: Clean final output document — all three pieces assembled, polished, with the selected opening line from Step 5 applied to the social post.]**

NARRATOR: "Three pieces, one brand voice, one pass. The blog intro: warm and direct. The social post: specific and grounded, no hype. The headline: 'Made to nourish what daily life depletes.' Done."

---

## RESULTS + VARIATIONS [9:30–11:00]

**[SCREEN: Side-by-side before/after for all three pieces. Left column: raw copy with red strike-through on problem phrases. Right column: polished on-brand copy.]**

NARRATOR: "What we just did: took three pieces of copy from three different registers and brought them all into alignment with a single brand voice, without losing what each piece was trying to say. The blog still informs. The social post still converts. The headline still sells. They just all sound like Verdant now."

**[SCREEN: Verdant logo mock-up on dark background, brand colours — green, warm cream, dark brown.]**

NARRATOR: "A few other ways this skill earns its keep:"

**[ANIMATION: Three cards appear one at a time, left to right, each with an icon and use case description.]**

NARRATOR: "Onboarding new contractors. You can run their first three submissions through this skill before giving feedback — saves the back-and-forth, sets expectations clearly from day one."

NARRATOR: "Localisation review. If you have copy translated and then adapted for a new market, this skill can check that the adapted version still matches your global brand voice — not just the language, but the tone and personality."

NARRATOR: "Email subject line batteries. If you generate ten subject line variants and want to know which ones are actually on-brand before A/B testing, this gives you a fast, consistent filter. No gut feel, no committee. Just the rules."

**[B-ROLL: Clean montage — a content calendar on a screen, a Slack thread with copy feedback, an email client A/B test interface.]**

---

## WRAP-UP + CTA [11:00–12:00]

**[SCREEN: Simple dark background, Anthropic Skills Showcase branding, orange accent.]**

NARRATOR: "applying-brand-guidelines. One install. One prompt structure. Consistent brand voice across everything your team produces — blog, social, product copy, email — without making senior brand people the bottleneck."

**[SCREEN: Install command displayed large and centred.]**

```
npx @smithery/cli@latest skill add anthropics/applying-brand-guidelines
```

NARRATOR: "Install command and skill link are in the description. The Verdant brand guide and all three copy samples from today's demo are in the GitHub repo — link is also below — so you can run this yourself against your own brand guidelines straight away."

**[SCREEN: Show both links:]**
- https://smithery.ai/skills/anthropics/applying-brand-guidelines
- https://github.com/agentfactory/anthropic-skills-showcase

NARRATOR: "If this was useful, subscribe — we drop a new skill every week. And if you're on a content team and this solved an actual problem you have, drop a comment. I read them."

**[SCREEN: Next episode teaser card — dark background, title text appearing.]**

NARRATOR: "Next week: Episode 12 — brand-voice. If applying-brand-guidelines is the enforcement layer, brand-voice is the creation layer. We're going to build a complete brand voice document from scratch — tone pillars, vocabulary rules, personality guidelines, the lot — using nothing but a handful of example copy samples. No strategy consultant required. See you then."

**[ANIMATION: End card — 10 seconds. Subscribe button, channel name, last two episode thumbnails. Orange accent line.]**

---

*Word count: ~1,810 words | Estimated duration: 12 min 04 sec at 150 wpm*
