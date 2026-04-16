# Episode Script Template

> Copy this file for each new episode. Replace all [bracketed] placeholders.
> **Quality benchmark:** Series C ep01 — `03-service-trades/ep01-docx-roofing-quote/script.md`

---

## Episode [##]: [skill-name] — [Catchy Subtitle]

**Series:** [Letter] — [Audience Name] | **Skill:** anthropics/[skill-name] | **Duration:** ~12 min
**Skill URL:** https://smithery.ai/skills/anthropics/[skill-name]
**Install:** `npx @smithery/cli@latest skill add anthropics/[skill-name]`
**Target Audience:** [Specific professional role — e.g., "Home services contractors — roofers, landscapers, painters"]
**Use Case:** [One sentence: input → output, with specifics — e.g., "Inspection notes typed on a phone → professional roofing estimate in Word, ready to email, in 4 minutes"]

---

## COLD OPEN [0:00–0:30]

> **Goal:** Show the finished output first. Be specific — real company names, real document structure, real numbers. The viewer should immediately understand what they're about to learn how to make.

**[SCREEN: [Describe the finished output in detail — document title, sections visible, key numbers, formatting. Not "a Word document opens" but "Ridge Pro Roofing LLC header, quote QT-2026-0847, April 16, 30-day expiration, materials table, bold total $8,200"]]**

NARRATOR: [One sentence: what this is and how fast it was made. E.g., "This is a roofing estimate. Professional. Itemized. Ready to email. It took 4 minutes to produce."]

**[SCREEN: [Hard cut to the raw input — phone notes, messy CSV, rough email — the real starting material this audience uses. Not a cleaned-up version.]]**

NARRATOR: [One sentence: what went in. E.g., "This is what went in."]

**[SCREEN: [Back to the finished output, slow scroll]]**

NARRATOR: [One sentence: the competitive or business hook. E.g., "The homeowner has two other quotes coming in. This one lands in their inbox first. That is the docx skill. Let's break it down."]

**[ANIMATION: Orange line wipe]**

---

## INTRO [0:30–1:30]

> **Goal:** Establish the series, the audience, and the cost of the "before" state. Quantify the pain — time, money, missed opportunities. The viewer should feel seen by the end of this section.

**[ANIMATION: 5-sec channel intro — "Anthropic Skills Showcase" logo reveal, orange accent bar]**

NARRATOR: [Welcome + series context. Who is this series for? What makes this series different from the others? E.g., "Welcome to Series C. Series A was design and creative. Series B was documents for office workers. Series C is different. This series is built for the people running businesses on job sites, in client homes, out of a truck."]

**[B-ROLL: [2-3 clips showing this audience doing their actual work — not stock-photo generic, but the specific reality of their job. E.g., "Contractor finishing a roof inspection — walking the perimeter, checking flashing, taking photos on a phone."]]**

NARRATOR: [The real cost of the old way — specific to this audience's pain. Show the scenario, then quantify it. E.g., "Here is the real cost of the old way. You finish the inspection at 2pm. Drive back. Eat. Then at 9pm you're digging through old quotes..." → "Three quotes a week. Forty-five minutes each. That's over five thousand dollars a year you're spending on formatting."]

**[SCREEN: [Smithery.ai skill page — install count highlighted in orange]]**

NARRATOR: [Introduce the skill with install count. One sentence on why this skill is relevant to this audience. E.g., "We're starting with docx. The same skill we covered in Series B, but a completely different use case — because the skill adapts to what your business actually does."]

**[ANIMATION: Orange line wipe]**

---

## SKILL DEEP DIVE [1:30–3:30]

> **Goal:** Install + the 2-3 capabilities most relevant to this episode's use case. Don't list everything — only what the demo will use. Keep it tight so the demo arrives fast.

**[SCREEN: Terminal — dark mode, large font]**

NARRATOR: One command to install the skill:

**[SCREEN: Typewriter animation]**

`npx @smithery/cli@latest skill add anthropics/[skill-name]`

**[SCREEN: Terminal output — skill installs, confirmation message appears]**

NARRATOR: [One sentence: what gets installed and where. No dependencies, no config. E.g., "That drops a single SKILL.md file into your .claude/skills/ directory. No dependencies to manage."]

**[SCREEN: VS Code — .claude/skills/[skill-name]/SKILL.md opens]**

NARRATOR: [Explain what SKILL.md is in plain English — a plain text instruction set, not code. One sentence. Then explain how triggers work.]

**[SCREEN: Cursor highlights the triggers block — orange glow]**

NARRATOR: [Read 2-3 triggers in plain English. Make clear they're natural language, not commands.]

**[SCREEN: Scroll through SKILL.md — stop at the 2-3 capabilities that matter for this demo]**

NARRATOR: For [this audience's use case], [N] capabilities matter most.

**[SCREEN: Highlight capability 1]**

NARRATOR: First: **[capability name]**. [One sentence on what it does and why it matters for this audience specifically. Use this audience's vocabulary.]

**[SCREEN: Highlight capability 2]**

NARRATOR: Second: **[capability name]**. [Same — specific to this audience's workflow.]

**[SCREEN: [Optional: highlight capability 3 if critical]]**

NARRATOR: [These work together in a single pass. One prompt in, one output file. Let's do it live.]

**[ANIMATION: Orange line wipe]**

---

## LIVE DEMO [3:30–9:30]

> **Goal:** Show the full workflow with real, messy input from this audience's actual world. Narrate the translation — not just what happened, but what the skill understood. Show one iteration step. The viewer should be able to reproduce this tomorrow morning.

### Step 1 — Review the Input [3:30–4:30]

**[SCREEN: [The raw input file open in a text editor — phone shorthand, messy CSV, rough notes — however this audience actually captures information on the job]]**

NARRATOR: [Describe the input as this audience would recognize it. Use their language — abbreviations, job-site jargon, the way they actually write. E.g., "This is Mike's inspection notes. He typed these on his phone while he was walking the Johnson roof. '3-tab over architectural — 2 layers total, full tear off.' Real abbreviations from a real job site."]

**[SCREEN: [Scroll through the full input at reading pace]]**

NARRATOR: [Note what's present but hidden — everything is in there, it just doesn't look like a professional document yet.]

---

### Step 2 — Invoke the Skill [4:30–5:30]

**[SCREEN: [Claude terminal / desktop app — dark mode, cursor ready]]**

NARRATOR: [Brief setup sentence. Confirm skill is installed, no activation needed.]

**[SCREEN: Typing animation — prompt appearing character by character]**

NARRATOR: My prompt: "[Full prompt, read aloud as it types. Be specific — document sections, field names, structure. Show that describing a document in English is the only skill required. E.g., "Using my inspection notes in inspection-notes.md, generate a professional roofing estimate as a Word document. Structure it as: company header with Ridge Pro Roofing LLC, license, phone, and email..."]"

**[SCREEN: Enter pressed. Processing indicator visible.]**

NARRATOR: [Normalize the prompt length — it reads like English, not code. Anyone can write a prompt like this.]

---

### Step 3 — Watch the Process [5:30–7:00]

**[SCREEN: [Claude's response streaming — show the reasoning/translation happening]]**

NARRATOR: [Narrate the translation — pick 2-3 specific moments where the skill converts raw input into professional output. Name the input shorthand, name the output language. E.g., "'3-tab over architectural — 2 layers total, full tear off' becomes 'Complete removal of existing two-layer asphalt shingle system including tear-off, disposal, and haul-away.' Same fact. Different language."]

**[SCREEN: [Show another translation happening — materials, pricing, structure]]**

NARRATOR: [Second translation moment. Again: specific input phrase → specific output phrase.]

**[SCREEN: [Output file appears in directory with file size and timestamp]]**

NARRATOR: [File size + time. Make it feel fast. E.g., "File written. Forty-seven kilobytes. That took sixteen seconds."]

---

### Step 4 — Review the Output [7:00–8:00]

**[SCREEN: [Output file opens — full document view at 100% zoom]]**

NARRATOR: Let's open it.

**[SCREEN: [Scroll to first section of document — describe exactly what's visible]]**

NARRATOR: [Walk through each section of the document. Name specific fields, values, formatting choices. This is where the viewer sees the full output for the first time — make it count. Point out details that matter to this audience.]

**[SCREEN: [Continue scrolling — table, pricing, signature block]]**

NARRATOR: [Continue walkthrough. Point out 1-2 things that build credibility or competitive advantage for this audience. E.g., "That level of transparency in the materials table is a sales advantage. Most quotes don't have it."]

---

### Step 5 — Iterate [8:00–9:00]

**[SCREEN: Back to Claude terminal]**

NARRATOR: [Brief setup — one thing the user wants to change. Make it realistic: "Mike wants one adjustment."]

**[SCREEN: Follow-up prompt typed]**

"[Specific refinement request — one structural change and one formatting detail. E.g., "Add a two-sentence About Ridge Pro Roofing paragraph after the company header — professional tone, mention 12 years serving the Phoenix metro, licensed and insured. Also make the Quoted Total row in the pricing table bold."]"

**[SCREEN: Processing — fast. New file written.]**

NARRATOR: [Time it took — make it feel immediate.]

**[SCREEN: [Updated document — show the specific changes]]**

NARRATOR: [Explain why the change matters to the business outcome, not just as a formatting preference. E.g., "Two sentences that build trust before the homeowner gets to the price."]

---

### Step 6 — Final Result [9:00–9:30]

**[SCREEN: Side-by-side — left: raw input, right: finished document]]**

NARRATOR: [Left side: describe what the user had. Right side: describe what they send. Emphasize time elapsed. E.g., "Left side: what Mike typed on his phone at 2pm on a roof. Right side: what lands in the Johnsons' inbox at 2:22pm."]

**[SCREEN: [File timestamps visible — created time of input vs. output]]**

NARRATOR: [Time from raw input to finished output. Most of that was [realistic delay — driving, opening laptop].]

**[ANIMATION: Orange line wipe]**

---

## RESULTS + VARIATIONS [9:30–11:00]

> **Goal:** Show 3 other documents this audience would actually use. Keep them specific — not "you could also make a report" but the exact document type, what would go in, what it would be used for. Quick demo clips of each where available.

**[SCREEN: "[What else can you do with [skill]?" title card, dark background, orange accent]]**

NARRATOR: The [use case] is one document. Here are three more that take the same skill and the same kind of notes in different directions.

**[SCREEN: Terminal — new prompt for variation 1]**

NARRATOR: Variation one: **[document type]**. [Specific scenario from this audience's world. Give exact prompt or describe it specifically. Show the output.] [Why it matters to this audience's business — what problem it solves.]

**[SCREEN: [Variation 1 output document — quick scroll]]**

**[SCREEN: Terminal — new prompt for variation 2]**

NARRATOR: Variation two: **[document type]**. [Same format — specific scenario, output, business relevance.]

**[SCREEN: [Variation 2 output]]**

**[SCREEN: Terminal — new prompt for variation 3]**

NARRATOR: Variation three: **[document type]**. [Same format.]

**[SCREEN: [Variation 3 output]]**

**[SCREEN: All three variation documents shown side-by-side as thumbnails]]**

NARRATOR: Same skill. Same [type of input]. Three different documents. None of them required a formatting session. None of them required finding a template.

**[ANIMATION: Orange line wipe]**

---

## WRAP-UP [11:00–12:00]

> **Goal:** Honest one-paragraph summary. Don't oversell. Install command. Tease next episode concretely.

**[SCREEN: [The main output document, scrolling slowly one final time]]**

NARRATOR: [Honest summary of what the skill does and doesn't do. Ground it in this audience's reality. E.g., "The docx skill does not make you a better roofer. You already know how to do the work. What it does is make sure the paperwork matches the quality of the work. Because the homeowner signs based on what they read."]

**[SCREEN: [Comparison — this episode's output vs. the old way or a worse version]]**

NARRATOR: [One sentence: the business case. E.g., "Same job. Same price. Different impression."]

**[SCREEN: Terminal install command, large text on dark background]**

NARRATOR: Install it:

**[SCREEN: Typewriter animation]**

`npx @smithery/cli@latest skill add anthropics/[skill-name]`

**[SCREEN: Smithery.ai skill page]]**

NARRATOR: Full documentation at the link in the description. Every capability, every option, more examples.

**[SCREEN: Next episode thumbnail preview]]**

NARRATOR: Next episode: `[skill-name]`. [One sentence: what the use case will be, who it's for, what they'll be able to make. Specific enough that someone in the audience thinks "I need that." E.g., "We're building a booking tracker and expense sheet for a service business — from a plain text list of jobs and costs. One prompt, a fully-formatted workbook with weekly totals, a running profit column, and a chart that shows you where your money is going."]

**[ANIMATION: Channel outro — "Anthropic Skills Showcase" logo, subscribe prompt, dark background with orange accent]**

NARRATOR: I'm Denis. See you on the next one.

---

*Word count target: ~1,800 words narration (~150 wpm = ~12 min)*

---

## Quality Checklist (Complete Before Submitting)

- [ ] Cold Open shows the finished output with specific, real-looking details
- [ ] Business impact is quantified (time, money, competitive advantage)
- [ ] Audience language is vertical-specific (their jargon, their workflow)
- [ ] Input materials are genuinely messy (not cleaned up)
- [ ] Step 3 narrates at least 2 specific translation moments (input phrase → output phrase)
- [ ] Iteration step (Step 5) shows a realistic, small change
- [ ] 3 variations are specific to this audience's actual document needs
- [ ] Wrap-up is honest about what the skill does AND doesn't do
- [ ] Install command appears in both Skill Deep Dive and Wrap-Up
- [ ] Next episode tease is specific enough to be compelling
- [ ] VO section headings match exactly: `## COLD OPEN [0:00–0:30]`, `## INTRO [0:30–1:30]`, `## SKILL DEEP DIVE [1:30–3:30]`, `## LIVE DEMO [3:30–9:30]`, `## RESULTS + VARIATIONS [9:30–11:00]`, `## WRAP-UP [11:00–12:00]`
