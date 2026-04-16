# Episode B06: internal-comms — One Update, Three Audiences

**Series:** B — Documents & Files
**Skill:** `anthropics/internal-comms`
**Skill URL:** https://smithery.ai/skills/anthropics/internal-comms
**Installs:** 92
**Target Audience:** PMs, comms teams, team leads, anyone sending the same update to multiple audiences
**Estimated runtime:** 12:00
**Word count target:** ~1,800 words narration

---

## COLD OPEN [0:00–0:30]

**[SCREEN: Three email drafts open in split view — one formal, one casual, one very formal. All seem to be about the same thing but written completely differently. The subject lines are visible but the sender field shows the same name: Denis]**

NARRATOR: "Here's a scenario that I think is familiar to anyone who's worked in a product or engineering team. You have an update. Something shipped. A price changed. A feature launched. A policy is coming into effect. And you need to tell leadership about it, tell engineering about it, and tell the people talking to customers about it."

**[SCREEN: Cursor hovers over each draft in turn — highlighting the tonal difference]**

NARRATOR: "Same information. Three different audiences. Three documents that need to sound completely different from each other — because they are for completely different people with completely different contexts."

**[SCREEN: All three drafts get minimized. Terminal opens]**

NARRATOR: "Today we do all three in one prompt. This is the `internal-comms` skill from Anthropic on Smithery — and the way it handles audience differentiation is the thing you're going to remember from this episode."

---

## INTRO [0:30–1:30]

**[SCREEN: Channel intro / lower third — "Anthropic Skills Showcase / Series B: Documents & Files"]**

NARRATOR: "Welcome back. This is Episode B06 — the last episode of Series B. I'm Denis. We've spent the last five episodes working through the core document and file skills: DOCX, XLSX, PDF, PPTX, and last episode, doc-coauthoring for technical specs. This one is different from all of those."

**[SCREEN: Series B episode list — all six episodes visible, B06 highlighted]**

NARRATOR: "The other episodes in this series have been about transforming or structuring content within a document type. This one is about audience. The challenge it solves isn't formatting — it's the gap between what you know about an update and how it should be communicated to three different groups of people who care about it in three different ways."

**[SCREEN: Smithery.ai page for internal-comms — 92 installs visible]**

NARRATOR: "The `internal-comms` skill has 92 installs at the time of recording. Like doc-coauthoring last episode, this is a focused tool for a specific professional workflow. The people who install it tend to install it because they've experienced the pain it solves. Let's look at what that pain is before we run the demo."

---

## SKILL DEEP DIVE [1:30–3:30]

**[SCREEN: Smithery.ai skill page — detail view]**

NARRATOR: "The core problem the `internal-comms` skill addresses is this: most internal communication fails not because of bad information but because of audience mismatch. Leadership reads a message written for engineers and loses the business context. Engineering reads a message written for leadership and doesn't know what it means for their work. Customer-facing teams get a message that's technically accurate but gives them nothing useful to say to a customer who's confused."

**[SCREEN: Three audience profiles rendered as simple boxes — Leadership, Engineering, Customer-Facing]**

NARRATOR: "Each audience has a different set of questions they're trying to answer. Leadership wants to understand: what changed, why, what's the business impact, what do I need to know before the next board meeting. Engineering wants: what specifically changed, what broke, what do I need to do, where's the PR or the runbook. Customer-facing teams want: what did the customer experience change, what do they need to do, and what should I say when they call me about it."

**[SCREEN: Single bullet point list — the kind of raw update you'd write in a planning doc]**

NARRATOR: "The `internal-comms` skill takes a single source — a brief, a bullet point list, a short description of what changed — and generates each of these outputs calibrated for its audience. The same facts, completely different communication choices. Different register, different emphasis, different structure, different length."

**[SCREEN: Terminal — install command]**

```
npx @smithery/cli@latest skill add anthropics/internal-comms
```

NARRATOR: "Once installed, the skill is active in your Claude session. You give it the source brief and the three output formats you need. Let's run the demo."

---

## LIVE DEMO [3:30–9:30]

### Step 1 — Review the Input Brief [3:30–4:30]

**[SCREEN: VS Code with `product-update-brief.md` open]**

NARRATOR: "Here's our input. This is a product update brief for a fictional company called Helix. They're launching two things simultaneously: a new pricing structure that eliminates the legacy Starter tier and introduces a new Pro bundle, and a new feature called Smart Routing that comes with the Pro bundle."

**[SCREEN: Scroll through the brief — eight bullet points visible]**

NARRATOR: "The brief is eight bullet points. It has the facts: what's changing, when it takes effect, who it affects, what the migration path looks like for existing customers, and what the new capability does. It doesn't have the framing — that's what changes per audience."

NARRATOR: "Notice what's here and what isn't. There's no 'what this means for customers' — that's what the customer-facing team needs to add context to. There's no 'business rationale' written out — that's what leadership needs to understand why this happened. There's no 'what broke' — that's what engineering needs to know. The brief is a neutral source of facts. The skill's job is to translate those facts for each audience."

### Step 2 — Invoke the Skill [4:30–5:30]

**[SCREEN: Claude interface — Denis types the prompt]**

NARRATOR: "The prompt for this one is straightforward. I'm telling the skill exactly what I need: three outputs, one per audience, all from this brief."

**[SCREEN: Prompt being typed]**

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
[paste of product-update-brief.md]
```

**What to say:**
- "I'm specifying word counts per output — important for keeping each one tight."
- "The critical instruction: same facts, different framing. I want the information to be consistent across all three. Only tone, emphasis, and structure should vary."

### Step 3 — Watch the Three Outputs Generate [5:30–7:30]

**[SCREEN: Claude streaming — the all-hands memo appears first]**

NARRATOR: "Output one: the all-hands memo for leadership. Watch the opening. It doesn't start with 'Hey team' and it doesn't bury the lede. It opens with the strategic context — why we made this change, what it means for the business trajectory. The facts come after the framing."

**[SCREEN: Memo continues — business impact section visible]**

NARRATOR: "Leadership doesn't need to know that the migration script runs at two AM. They need to know that the pricing change positions Helix competitively and that the Pro bundle creates an upsell surface for the sales team. That's what's in this memo — and it's what isn't in the next two outputs."

**[SCREEN: Engineering Slack announcement appears]**

NARRATOR: "Output two: the Slack announcement for engineering. The register change is immediate. No formal greeting, no business rationale. It opens with what changed: 'Starter tier is going away. If you're in the backend webhook service, there are changes to the tier-check logic in the auth middleware.' That's what engineers need to know first."

**[SCREEN: Slack output — brief, formatted for readability in Slack, action items bolded]**

NARRATOR: "Length: about a hundred and eighty words. Formatted for Slack — bold text, no formal section headers, clear action items. This is what you'd actually post in Slack. You wouldn't adapt this from the leadership memo. They're genuinely different documents."

**[SCREEN: Customer-facing email appears]**

NARRATOR: "Output three: the email for customer-facing teams. Different again. This one is professional, warmer than the memo, but more formal than the Slack post. The emphasis is entirely different — it's on what customers will experience and what the teams should say when customers ask. It includes FAQ-style prompts: if a customer asks why their tier changed, here's the suggested framing."

**[SCREEN: All three outputs visible — side by side or sequential]**

NARRATOR: "Three documents. One prompt. One brief as the source of truth. The information is consistent — the pricing change dates, the migration path, the feature description — but each output is genuinely calibrated for its audience. This is what makes the skill useful."

### Step 4 — Highlight the Tone Contrast [7:30–8:30]

**[SCREEN: Specific line-by-line comparison — same fact expressed three ways]**

NARRATOR: "Let me show you the clearest example of the tone variation. The same fact: the Starter tier is being discontinued and existing customers will be migrated to Pro."

**[SCREEN: Memo excerpt highlighted]**

NARRATOR: "In the leadership memo: 'The retirement of the Starter tier consolidates our customer base onto the Pro tier, which carries a 47% higher average contract value and better aligns with our premium positioning for FY26.' Business context, revenue implication, strategic framing."

**[SCREEN: Slack excerpt highlighted]**

NARRATOR: "In the Slack announcement: 'Starter is gone as of March 1. Existing Starter customers auto-migrate to Pro. Migration job runs Feb 28 at 2:00 AM UTC. Check the runbook if you're on anything that reads tier from the auth service.' Technical, direct, action-oriented."

**[SCREEN: Customer-facing email excerpt highlighted]**

NARRATOR: "In the customer-facing email: 'Customers on our Starter plan will automatically transition to the Pro plan on March 1st at no action required on their part. If a customer reaches out with questions about this change, here's how we recommend framing it.' Empathetic, customer-focused, gives the team something to say."

NARRATOR: "Same fact. Three completely different sentences. That's the skill doing its job."

### Step 5 — Optional Quick Edit [8:30–9:30]

**[SCREEN: Denis types one more prompt]**

NARRATOR: "One more thing — let me show you that these outputs are starting points, not finished products. I want the engineering Slack post to also mention the on-call rotation for the migration night."

**[SCREEN: Prompt text]**

```
Revise the engineering Slack announcement to add a note at the end 
about the on-call rotation for the migration window (Feb 28 at 2:00 AM UTC). 
Keep the same tone and length.
```

**[SCREEN: Revised Slack post appears]**

NARRATOR: "Quick revision, stays in the same voice, adds the specific operational detail I needed. This is the iteration loop — the outputs aren't meant to be final on the first pass, but they're close enough that the iteration is fast."

---

## RESULTS + VARIATIONS [9:30–11:00]

**[SCREEN: Three final outputs visible — summary view]**

NARRATOR: "Let's recap what we produced. One source brief, eight bullet points, one prompt. Three outputs: a four-hundred-word leadership memo with strategic framing, a one-eighty-word Slack post with technical specifics and action items, and a four-hundred-word email for the customer-facing team focused on what customers experience and how to talk about it."

**[SCREEN: Time-saved comparison — text overlay]**

NARRATOR: "If you write these manually, the realistic time investment is forty-five minutes to an hour and a half — depending on how different your audiences are and how practiced you are at switching registers. The skill gets you to useful first drafts in under two minutes. You then spend your time editing and adding context-specific details, not building from scratch."

**[SCREEN: Other use case examples — text overlays]**

NARRATOR: "Other situations where this fits directly. An engineering incident post-mortem: leadership needs the executive summary, engineering needs the full timeline and action items, customers need a status page update that explains impact in non-technical terms. A policy change: HR framing, manager framing, individual contributor framing — same policy, three very different conversations. A product launch: the press release version, the internal sales enablement version, the engineering deploy checklist."

**[SCREEN: The one-to-many communication pattern illustrated]**

NARRATOR: "The pattern is the same each time. One canonical set of facts, multiple audiences, multiple required tones. The `internal-comms` skill handles the translation layer so you don't have to context-switch manually between three different communication modes under deadline pressure."

---

## WRAP-UP [11:00–12:00]

**[SCREEN: Terminal — install command]**

NARRATOR: "The `internal-comms` skill is on Smithery now. One install, ready in your Claude session."

```
npx @smithery/cli@latest skill add anthropics/internal-comms
```

**[SCREEN: Links — Smithery page, GitHub repo]**

NARRATOR: "Links in the description — the Smithery page for the skill and the GitHub repo for this series where the input files and walkthroughs live."

**[SCREEN: Series B complete marker — all six episodes listed]**

NARRATOR: "That's a wrap on Series B. We covered six skills: DOCX, XLSX, PDF, PPTX, doc-coauthoring, and now internal-comms. The through-line across the series has been the same idea — bring your content, the skill handles the structure and the format. You stay in your workflow; you stop fighting the document."

**[SCREEN: Series C preview card — "Data & Analytics"]**

NARRATOR: "Series C is Data and Analytics. We're moving from documents into data — charts, dashboards, analysis outputs, the kind of things that live in spreadsheets and notebooks and data exports. We start with the `data-visualization` skill: you bring a CSV, you describe what you want to show, and the skill produces a publication-ready chart. No code required, no charting library to configure."

**[SCREEN: data-visualization skill card on Smithery]**

NARRATOR: "Series C Episode 01. If the document series was useful to you, the data series is going to feel like a natural extension. Subscribe so you catch it when it drops. See you in Series C."

**[SCREEN: Endcard — subscribe button, Series B playlist, Series C teaser]**
