# Episode B04: pptx — Turn a Case Study Into a Sales Presentation

**Series:** B — Documents & Files
**Skill:** `anthropics/pptx`
**Skill URL:** https://smithery.ai/skills/anthropics/pptx
**Installs:** 718
**Target Duration:** 12 minutes
**Script Word Count:** ~1,800 words narrated

---

## COLD OPEN [0:00–0:30]

**[SCREEN: Slack message thread. An account executive has sent a message to their team at 4:47 PM: "Customer dinner tomorrow at 6. Prospect asked if we have a case study deck. We have the write-up but nothing in slides. Anyone?"]**

NARRATOR: "This is a real scenario. The case study exists. It's a Google Doc, or a PDF on the website, or a Word file someone emailed around six months ago. But slides? Formatted, on-brand, with a chart for the metrics and a dark theme version because the client dinner is at a restaurant with dim lighting? That's a couple of hours of work. Or it's one prompt."

**[SCREEN: Terminal opens. Clean workspace.]**

---

## INTRO [0:30–1:30]

**[SCREEN: Title card — "Episode B04: pptx — Case Study to Sales Presentation"]**

NARRATOR: "Welcome back. I'm Denis. This is the Anthropic Skills Showcase — each episode, one skill from Smithery's catalog of Anthropic skills on a problem that actually comes up in the work."

**[SCREEN: Browser opens to https://smithery.ai/skills/anthropics/pptx]**

NARRATOR: "Today's skill is 'anthropics/pptx' — 718 installs. We used this skill in Series A, episode four, where we built an investor deck from a product brief. That was a fundraising context: problem, solution, market size, traction, ask. The narrative structure of a pitch."

NARRATOR: "Today is different. This is sales. The audience is a prospect who's evaluating whether to buy. The format is a customer success story — eight slides that take them from 'here's a company that had your exact problem' to 'here's what they paid and what they got back.' And halfway through, we're going to ask for a dark theme version because that's what real sales workflows look like."

**[SCREEN: Show the case study source text]**

NARRATOR: "The raw material is a 400-word case study. Plain text. No formatting, no slide structure, just the story with metrics and a direct quote from the customer. That's what we're starting with. Let's see what the skill does with it."

---

## SKILL DEEP DIVE [1:30–3:30]

**[SCREEN: Terminal with the install command]**

NARRATOR: "Installation."

**[SCREEN: Type and run:]**
```
npx @smithery/cli@latest skill add anthropics/pptx
```

**[SCREEN: Confirmation output]**

NARRATOR: "The 'anthropics/pptx' skill gives Claude structured access to PowerPoint file operations. It can create presentations from scratch, edit existing decks, apply themes, add charts, format text, and manage layouts — all producing actual .pptx files that open natively in PowerPoint and Keynote."

**[SCREEN: Smithery skill page showing capability list]**

NARRATOR: "A few things that are worth knowing before we start. First, chart support. The skill can generate bar charts, line charts, and pie charts directly inside slides — not screenshots of charts, but actual editable PowerPoint chart objects with data tables. That's important for sales decks where someone will inevitably want to update the numbers."

NARRATOR: "Second, theme application. When you ask for a dark theme, the skill doesn't just change the background color. It adjusts text colors for contrast, modifies accent colors for the dark background, and preserves the overall layout. It's a real theme change, not a find-and-replace on background fills."

**[SCREEN: Quick layout diagram of the 8-slide structure]**

NARRATOR: "Third, slide layout intelligence. When you describe a 'before/after comparison slide', the skill knows that means a two-column layout with contrasting content. When you ask for a 'testimonial quote slide', it knows to use a large display quote with attribution. You're describing the purpose of the slide, and the skill translates that into appropriate layouts."

NARRATOR: "The last thing worth calling out is the output format. The file is a .pptx — fully editable. The account exec can open it, change a headline, add their name to the title slide, and send it. The skill produces a starting point, not a finished object you can't touch."

---

## LIVE DEMO [3:30–9:30]

### Step 1 — Review the Source Material [3:30–4:30]

**[SCREEN: Open use-case/input/apex-case-study.md in the editor]**

NARRATOR: "Here's the case study. Apex Digital, a workforce management SaaS company with 340 employees across three countries. They were using a patchwork of scheduling tools — three different systems — and their HR team was spending about 14 hours a week manually reconciling data between them."

**[SCREEN: Highlight the metrics section]**

NARRATOR: "The metrics are the core of the story. After implementing the platform: 73% reduction in time spent on scheduling conflicts. Payroll error rate dropped from 4.2% to 0.3%. HR admin time on scheduling cut from 14 hours per week to 3.5 hours. And the financial return: $240,000 in recovered productivity in the first year, against a $42,000 annual contract. That's a 5.7x ROI."

**[SCREEN: Highlight the testimonial quote]**

NARRATOR: "And there's a direct quote from the VP of People Operations: 'We went from managing three systems to managing one conversation. The time we've reclaimed goes directly back into the work that actually needs human judgment.' That's a slide by itself."

NARRATOR: "Eight slides. Title, challenge, solution, results with a chart, the testimonial, before/after comparison, pricing and ROI, and a call to action. Let's build it."

### Step 2 — Write the Build Prompt [4:30–5:30]

**[SCREEN: Claude Code prompt being typed]**

NARRATOR: "Here's the prompt."

**[SCREEN: Display prompt clearly:]**
```
Use the pptx skill to build a sales case study presentation.

Source material: use-case/input/apex-case-study.md
Output: output/apex-case-study-LIGHT.pptx
Theme: clean light theme — white backgrounds, dark navy text,
       teal accent color (#0d9488)

Build exactly 8 slides:

Slide 1 — Title slide:
  "How Apex Digital Recovered 10.5 Hours Per Week
   (and $240K in the First Year)"
  Subtitle: "A Customer Success Story"
  Small footer: company name and logo placeholder

Slide 2 — The Challenge:
  Headline: "Three Systems. Zero Visibility."
  3 bullet points covering the core problem
  (scheduling chaos, manual reconciliation, payroll errors)

Slide 3 — The Solution:
  Headline: "One Platform. Full Coverage."
  Brief description of what was deployed
  3 implementation highlights (without technical jargon)

Slide 4 — The Results (with chart):
  Headline: "The Numbers After 12 Months"
  Bar chart showing 3 metrics before and after:
  - Scheduling conflict resolution time: 14 hrs/week -> 3.5 hrs/week
  - Payroll error rate: 4.2% -> 0.3%
  - Manual data reconciliation: 100% -> eliminated
  Include the ROI figure prominently: 5.7x in year one

Slide 5 — Testimonial:
  Full-bleed quote slide
  Quote: "We went from managing three systems to managing one
          conversation. The time we've reclaimed goes directly
          back into the work that actually needs human judgment."
  Attribution: VP of People Operations, Apex Digital

Slide 6 — Before / After:
  Two-column layout
  Left column (BEFORE): 3 pain points with red indicators
  Right column (AFTER): 3 outcomes with green indicators

Slide 7 — Pricing & ROI:
  Headline: "The Investment"
  Annual contract: $42,000
  Year 1 recovered productivity: $240,000
  Net benefit: $198,000
  ROI: 5.7x
  Payback period: 2.1 months
  Simple table or visual — not a wall of text

Slide 8 — Call to Action:
  Headline: "Ready to run the numbers for your team?"
  3 next steps (book a discovery call, get a custom ROI estimate,
  see a live demo)
  Contact info placeholder
```

### Step 3 — Watch the Build [5:30–7:00]

**[SCREEN: Claude Code processing. Watch the skill invocation happen in the terminal.]**

NARRATOR: "You can see the skill working through the slides. Title slide generated. Challenge slide. Solution slide. Now the results slide — this is where the chart gets built."

**[SCREEN: Chart generation log entries appear]**

NARRATOR: "The chart is a grouped bar chart with three metric pairs — before and after for each of the three results. The skill is building the chart object with the actual data table, not embedding an image. When the account exec opens this in PowerPoint, that chart is editable."

**[SCREEN: File appears in output directory]**

NARRATOR: "Done. Let's open it."

### Step 4 — Review the Light Theme Output [7:00–8:00]

**[SCREEN: Open the PPTX in the viewer. Navigate through slides.]**

NARRATOR: "Slide one — title slide. Clean. The headline does the job: 'How Apex Digital Recovered 10.5 Hours Per Week.' That's what a sales deck title should do: make the prospect want to know if they can do the same thing."

**[SCREEN: Navigate to slide 2]**

NARRATOR: "Slide two — the challenge. 'Three systems, zero visibility.' Three bullets. This is tight — no paragraph text on a slide. The skill understood that a challenge slide should be punchy, not comprehensive."

**[SCREEN: Navigate to slide 4 — Results with chart]**

NARRATOR: "Slide four — this is the one. The bar chart with before and after bars for each metric. Scheduling time from 14 hours to 3.5 hours per week. Payroll error rate from 4.2% to 0.3%. And then the ROI number prominently below the chart: 5.7x in year one. This is the proof slide. When the prospect's CFO asks why this is in the budget, they show slide four."

**[SCREEN: Navigate to slide 5 — Testimonial]**

NARRATOR: "Slide five — the testimonial. Full-bleed, large display quote, teal accent mark. This is a slide you can hold on for 30 seconds while you let the words land."

**[SCREEN: Navigate to slide 6 — Before/after]**

NARRATOR: "Slide six — before and after. Two columns. Red indicators on the left, green on the right. The contrast is immediate. You don't have to read the slide to understand the message."

### Step 5 — Dark Theme Iteration [8:00–9:00]

**[SCREEN: New prompt being typed]**

NARRATOR: "The account exec texts back: 'Actually, can you do a dark version? The dinner venue has low lighting and a projector.' Here's how fast that iteration goes."

**[SCREEN: Display prompt:]**
```
Use the pptx skill to create a dark theme version of the
case study deck.

Input: output/apex-case-study-LIGHT.pptx
Output: output/apex-case-study-DARK.pptx

Apply a dark theme:
- Background: deep navy (#0f172a)
- Primary text: white (#ffffff)
- Secondary text: light gray (#cbd5e1)
- Accent color: teal (#2dd4bf) — lighter shade for dark bg contrast
- Chart: update bar colors for dark background visibility
- Keep all slide content, layout, and structure identical
```

**[SCREEN: Processing. File appears. Open it.]**

NARRATOR: "Fifteen seconds."

### Step 6 — Review the Dark Theme Output [9:00–9:30]

**[SCREEN: Open the dark theme PPTX. Scroll through slides.]**

NARRATOR: "Same eight slides. Same content. Same chart data. Dark navy background, white text, lighter teal accent. The chart bars are updated — lighter shades that pop against the dark background. The testimonial slide looks particularly good: white text on near-black, the quote has real visual weight."

NARRATOR: "Two files. One prompt each. The account exec has both versions in about two minutes. They pick the one that fits the setting."

---

## RESULTS + VARIATIONS [9:30–11:00]

**[SCREEN: Show both output files side by side]**

NARRATOR: "Let's talk about what else you can do with this skill in a sales and customer success context."

NARRATOR: "First: template injection. If your company has a branded PowerPoint template — specific fonts, a slide master with your logo, a color scheme locked to your brand guidelines — you can pass that template as a base and ask the skill to populate it with new content. The skill preserves the template's design while replacing the placeholder content."

NARRATOR: "Second: multi-customer batching. If you have five case studies in the same format and you need five separate decks, you can loop through them in a script. Same 8-slide structure, different customer data. Five decks in the time it used to take to build one."

NARRATOR: "Third: slide extraction. If you already have a 40-slide master sales deck and you want to pull just the case study slides into a standalone presentation, the skill can extract specific slide ranges from an existing file and save them as a new deck."

NARRATOR: "Fourth: metrics updates. When a customer's numbers change — when their year-two results come in — you don't rebuild the deck. You update the source text and regenerate. The chart data, the ROI figures, the ROI slide — they all update from the new source."

**[SCREEN: Show a list of other use cases]**

NARRATOR: "Beyond case studies: competitive comparison decks, QBR templates prepopulated with customer data, internal readout presentations built from a project brief, board update decks assembled from monthly KPI reports. Any scenario where you have structured information and need a slide-format deliverable on a deadline."

NARRATOR: "The common thread here is that the bottleneck has always been the formatting work, not the thinking. The thinking — knowing which metrics matter, structuring the before/after story, writing the right headline for slide two — that's what you bring. The skill handles the formatting."

---

## WRAP-UP [11:00–12:00]

**[SCREEN: Show both output PPTX files in the output directory]**

NARRATOR: "Here's what we built. An 8-slide sales case study presentation from a 400-word text file. Title, challenge, solution, results with an editable bar chart, testimonial, before/after, pricing and ROI, call to action. Light theme. Then a dark theme version in one more prompt, fifteen seconds later."

**[SCREEN: Show the install command]**

NARRATOR: "The skill is 'anthropics/pptx'. One command to install."

**[SCREEN: Display:]**
```
npx @smithery/cli@latest skill add anthropics/pptx
```

NARRATOR: "Link is in the description. If you're on a sales team, a customer success team, or you're an AE who's been manually building decks from case study write-ups — this is the one to try first."

NARRATOR: "That's Series B, episodes three and four. Next time we're looking at the next skill in the Documents and Files series. Subscribe so you don't miss it. See you in the next one."

**[SCREEN: End card with links]**

---

*End of script. Total narration: approximately 1,830 words.*
