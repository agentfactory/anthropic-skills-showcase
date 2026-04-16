# Episode B04: pptx — Rehearsal Walkthrough
## Denis's Step-by-Step Demo Guide

**Use Case:** Customer Case Study to Sales Presentation
**Skill:** `anthropics/pptx`
**Estimated Demo Time:** 6 minutes (3:30 to 9:30 in the final video)

---

## Before You Start

Set up your workspace with the terminal on the left and a PowerPoint viewer on the right (or stacked). Have the viewer ready to open files — do not have anything open at the start.

Your directory structure should be clean before recording:

```
demo/
├── use-case/
│   └── input/
│       └── apex-case-study.md    (the source text)
└── output/                       (empty at start)
```

Install the skill before recording:
```
npx @smithery/cli@latest skill add anthropics/pptx
```

Confirm installation:
```
claude "list installed skills"
```

Have your prompt pre-written in a text file so you can paste it cleanly during the demo rather than typing 40+ lines live. Show yourself reviewing it before pasting — that reads as authentic preparation, not laziness.

---

## Step 1 — Review the Source Material (3:30–4:30)

1. Open `use-case/input/apex-case-study.md` in your editor.

2. Talk through it section by section. Keep this brief — about 60 seconds. You want the viewer to understand what the raw input looks like, not to read every word.

3. **Key things to call out:**
   - "This is plain text. No formatting, no slide structure."
   - "Here are the metrics." (Read two or three aloud: 73% reduction, 4.2% to 0.3% payroll error rate, 5.7x ROI.)
   - "And here's the testimonial quote." (Read it once.)
   - "Eight slides from this. Let's see what that looks like."

4. State the slide structure you're building before you run the prompt: title, challenge, solution, results with chart, testimonial, before/after, pricing/ROI, call to action. This primes the viewer to watch for each slide when you review the output.

**What to say:** "Here's the case study. 400 words. Plain text. Real metrics — 73% reduction in scheduling conflict time, 5.7x ROI in year one, a direct quote from the VP of People Operations. And I want eight slides out of this. Let's write the prompt."

---

## Step 2 — Write the Build Prompt (4:30–5:30)

1. Open Claude Code in the terminal.

2. Paste the build prompt from your prepared text file. Review it briefly on screen before submitting — scroll through it so the viewer can see the slide specifications.

3. The prompt specifies:
   - Source file path
   - Output file path
   - Theme: light, white background, navy text, teal accent
   - Exactly 8 slides with precise content specifications for each
   - Chart data for slide 4 (before/after metrics)
   - Specific quote text for slide 5

4. Hit enter.

**What to say while entering the prompt:** "I'm specifying the exact slide structure — not leaving it to Claude to decide how to organize the story, but telling it what goes on each slide. The source material has everything I need: the problem description for slide 2, the metrics for the chart on slide 4, the testimonial for slide 5. I'm just telling the skill how to structure it."

---

## Step 3 — Watch the Build (5:30–7:00)

1. Let the skill run. Expected time: 30–60 seconds.

2. While it's running, narrate what's happening:
   - "Generating slide one — the title slide."
   - "Challenge slide — two bullet points condensed from the problem description."
   - "Here's the chart generation for slide four — this is building an actual editable chart object, not an image."

3. Watch for the log line that indicates chart creation — point it out explicitly. This is a differentiator from "just generating an image of a chart."

4. When the file appears in the output directory, say: "Let's open it."

**What to say while it runs:** "Notice what's happening with the chart on slide four. The skill is building a grouped bar chart with the actual data table — before and after values for each of the three metrics. When the AE opens this in PowerPoint, that chart is editable. They can change a number. They can change the bar colors. It's not a screenshot."

---

## Step 4 — Review the Light Theme Output (7:00–8:00)

Open `output/apex-case-study-LIGHT.pptx` and navigate through each slide deliberately.

**Slide 1 (Title):**
Hold here for 3 seconds. "The headline does the job — 'How Apex Digital Recovered 10.5 Hours Per Week.' That's not a feature description, that's a result. A prospect reading that thinks: can we do that?"

**Slide 2 (Challenge):**
"Three bullets. Tight. No paragraph text on a slide. The skill understood that a challenge slide should be punchy."

**Slide 3 (Solution):**
Brief. Move on to slide 4.

**Slide 4 (Results + Chart):** [SPEND THE MOST TIME HERE]
"This is the proof slide. The bar chart — scheduling time from 14 hours to 3.5 hours per week, payroll errors from 4.2% to 0.3%, manual reconciliation from 100% to zero. And the ROI figure below the chart: 5.7x in year one."
Hold on the chart for 5–7 seconds. Let the viewer absorb the visual.
"When the prospect's CFO asks why this is in the budget, you show this slide."

**Slide 5 (Testimonial):**
"Full-bleed quote slide. Hold on this in a presentation for 20 seconds. Let the words land."

**Slide 6 (Before/After):**
"Two columns. Red on the left, green on the right. You don't need to read this slide — the color coding does the work."

**Slide 7 (Pricing/ROI):**
"$42,000 in. $240,000 back. Payback in 2.1 months. This is a simple table, not a wall of text."

**Slide 8 (CTA):**
Brief. "Three next steps. Contact info placeholder."

---

## Step 5 — Dark Theme Iteration (8:00–9:00)

1. Set up the scenario: "The account exec texts back. The dinner venue has low lighting and a projector. They want a dark version."

2. Paste the dark theme prompt. It specifies:
   - Input: the light theme PPTX
   - Output: a new dark theme PPTX
   - Dark navy background (#0f172a)
   - White primary text
   - Light gray secondary text
   - Lighter teal accent for dark background contrast
   - Chart color update for dark background

3. Run it. Expected time: 10–20 seconds. Say: "Fifteen seconds."

4. Open the dark theme file immediately when it appears.

**What to say:** "Same slides, same content, same chart. One more prompt. Dark navy background, white text, lighter teal accent. The chart colors update for the dark background. Two minutes total. The AE has both versions. They pick the one for the setting."

---

## Step 6 — Review the Dark Theme Output (9:00–9:30)

Navigate through the dark theme deck quickly — you've already shown the content, this review is about the theme change.

1. **Show slide 1** — dark navy, white headline. "Same structure."
2. **Show slide 4** — the chart. "Chart updated for dark background — lighter bar colors."
3. **Show slide 5** — the testimonial. "This one looks particularly good on dark."
4. **Confirm the main message:** "Same content. One prompt. Fifteen seconds."

**Payoff line:** "The account exec has what they need. Two files. One for the boardroom, one for the dinner venue."

---

## Timing Reference

| Segment | Start | End | Duration |
|---------|-------|-----|----------|
| Source material review | 3:30 | 4:30 | 1:00 |
| Write the build prompt | 4:30 | 5:30 | 1:00 |
| Watch the build | 5:30 | 7:00 | 1:30 |
| Review light theme | 7:00 | 8:00 | 1:00 |
| Dark theme iteration | 8:00 | 9:00 | 1:00 |
| Review dark theme | 9:00 | 9:30 | 0:30 |
| **Total demo** | **3:30** | **9:30** | **6:00** |

---

## If Something Goes Wrong

**Chart doesn't render or appears as placeholder:** The chart generation can fail if the data table format is ambiguous. Simplify the chart prompt to two metrics instead of three, and try again. Alternatively, describe the chart data in a more explicit tabular format in the prompt.

**Dark theme doesn't apply cleanly (text becomes unreadable):** The skill may not fully update all text elements when the background changes dramatically. If this happens, try a second pass: ask the skill to "fix any text elements that have low contrast against the dark background." Usually resolves in one iteration.

**Skill not found:** Run `npx @smithery/cli@latest skill add anthropics/pptx` again and wait for the confirmation message before retrying.

**File won't open in viewer:** Confirm you have a PPTX-compatible viewer installed. PowerPoint (Windows/Mac), Keynote (Mac, with PPTX import), LibreOffice Impress, or Google Slides (upload the file) all work. Avoid opening the file in a plain text editor — it will look like binary noise.

**Slide count mismatch:** If the output has more or fewer than 8 slides, re-examine the prompt for ambiguity. Make sure each slide is specified on its own numbered line with a clear headline and content description.

**The "before" column on slide 6 reads as confusing:** The before/after layout depends on the skill's interpretation of the source text. If the slide looks off, add explicit column content to the prompt: "Left column header: Before. Right column header: After. Left items: [list]. Right items: [list]."
