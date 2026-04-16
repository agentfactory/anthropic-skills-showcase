# Demo Walkthrough — Episode B01: docx

**For:** Denis (presenter)
**Purpose:** Step-by-step rehearsal guide for the live demo section (3:30–9:30)
**Total demo time:** ~6 minutes

---

## Before You Hit Record

- [ ] Skill installed: `npx @smithery/cli@latest skill add anthropics/docx`
- [ ] Input file ready: `use-case/input/project-kickoff-brief.md` open in your text editor (VS Code recommended)
- [ ] Terminal open, dark mode, font size 16pt minimum
- [ ] Microsoft Word installed and available (for opening the output .docx)
- [ ] File explorer pane open in your working directory
- [ ] Browser tab open to `https://smithery.ai/skills/anthropics/docx` (for the skill page cutaway)

---

## Step 1: Review the Input File [3:30–4:30]

**What to do:**
1. Open `use-case/input/project-kickoff-brief.md` in VS Code
2. Scroll slowly from top to bottom — let viewers read the structure
3. Point out (by hovering cursor near) the key elements:
   - The `#` heading at the top
   - The `##` section headings
   - The pipe-character table (deliverables section)
   - The bullet-point stakeholder list
4. Close the file or minimize it

**What to say:** Follow script — "Here is our input. This is a realistic project kickoff brief..."

**Expected screen state:** Full-screen VS Code with the Markdown file visible. Dark theme. No distractions.

**Timing note:** Take the full minute here. Let viewers absorb what "before" looks like. The contrast with the output matters.

---

## Step 2: Invoke the Skill [4:30–5:30]

**What to do:**
1. Open Claude Code in your terminal (or Claude chat interface — use whichever you'll actually be screencasting)
2. Type the following prompt exactly (copy-paste is fine off-camera, type it on-camera):

```
Using the project kickoff brief in project-kickoff-brief.md, generate a professional
Word report. Apply heading styles H1 through H3, insert an auto-generated table of
contents after the title, format the deliverables section as a styled Word table with
alternating row shading, put the project objectives in an executive summary callout
box at the top, and add a footer with the client name and today's date.
Output as kickoff-report.docx.
```

3. Hit Enter. Do not cut away — let the processing run on screen.

**What to say:** Follow script narration while the prompt is being typed.

**Expected screen state:** Claude terminal with prompt visible. Progress streaming visible after Enter.

**If something goes wrong:** If Claude asks for clarification, just answer naturally. If the skill fails, have a pre-run output file (`kickoff-report-BACKUP.docx`) ready to open as a cut-away. Do not mention the backup on camera.

---

## Step 3: Watch the Process [5:30–7:00]

**What to do:**
1. Stay on the terminal screen — let the processing output stream
2. Point out (with cursor movement, not spoken) the stages: parsing, structure analysis, document generation
3. When the file write completes and `kickoff-report.docx` appears in the file explorer, note the file size

**What to say:** Follow script — "Watch what Claude does here..."

**Expected terminal output:** You'll see Claude reasoning about the document structure, then library calls to `python-docx`, then a success message with the output file path.

**Expected timing:** Processing takes 8–15 seconds. This is fine on camera — don't rush it. The wait is part of the story.

**File to look for in explorer:** `kickoff-report.docx` — it will appear in whatever directory you ran Claude from. Make sure that directory is visible in your file explorer pane before you start.

---

## Step 4: Review the Output [7:00–8:00]

**What to do:**
1. Double-click `kickoff-report.docx` to open in Microsoft Word
2. Maximize Word — fill the screen
3. Scroll from top to bottom in this order, pausing briefly on each:
   - Title and document heading (H1 — "Project Kickoff Brief: Meridian Group Digital Transformation")
   - Table of contents (auto-generated, clickable entries visible)
   - Executive summary callout box (bordered, light fill, project objectives inside)
   - Deliverables table (alternating row shading, bold header)
   - Footer (visible at bottom of page — "Client: Meridian Group | Prepared: April 2026")
4. Do NOT click around inside Word — just scroll. Clicking around invites unexpected behavior.

**What to say:** Follow script narration for each element as it comes into view.

**What good output looks like:**
- H1: Bold, larger font, Anthropic's default heading style or Word "Heading 1" style
- TOC: Multi-line, each section name with a tab leader to page number
- Executive summary box: Visible border, slightly off-white or light blue background fill
- Deliverables table: Striped rows (alternating white/light gray), bold header row, no overflow
- Footer: Small, right-aligned or centered, "Client: Meridian Group | Prepared: April 2026"

---

## Step 5: Iterate [8:00–9:00]

**What to do:**
1. Go back to the Claude terminal
2. Type the follow-up prompt:

```
Change the H1 heading color to #1B4F8A and the H2 color to #2E6DB4.
Also add a cover page before the TOC with the document title, client name,
and a prepared-by line.
```

3. Hit Enter. Let it process.
4. Open `kickoff-report-v2.docx` when it appears

**What to say:** Follow script narration.

**Expected output:** `kickoff-report-v2.docx` with:
- A cover page (page 1): title "Project Kickoff Report", "Client: Meridian Group", "Prepared by: [Author]"
- Page 2: TOC (now on its own page after the cover)
- H1 headings in deep blue (#1B4F8A)
- H2 headings in lighter blue (#2E6DB4)
- All other content identical to v1

**Timing note:** This step takes about 10 seconds. Stay on-camera during the processing.

---

## Step 6: Final Result [9:00–9:30]

**What to do:**
1. Set up a side-by-side: VS Code with `project-kickoff-brief.md` on the left, Word with `kickoff-report-v2.docx` on the right
2. Take 20 seconds to show both together — let the comparison speak
3. Switch to the file explorer — show both files with timestamps visible

**What to say:** Follow script — "Same content. Left is what you start with. Right is what you deliver..."

**Setup tip:** On Windows, use Win+Left and Win+Right to snap windows to half-screen. On Mac, use Split View. Do this before you hit record on this step — snapping windows on camera looks clumsy.

---

## Common Issues and Fixes

| Issue | Fix |
|-------|-----|
| Skill not found | Re-run: `npx @smithery/cli@latest skill add anthropics/docx` |
| Output file not opening in Word | Verify file extension is `.docx`, not `.doc` or `.md` |
| TOC not showing | In Word: References > Update Table (this is normal — Word requires a manual first update) |
| Heading colors not applied | Check that you specified hex codes with the `#` prefix in your prompt |
| Processing takes >30 seconds | Normal for longer documents — wait it out |

---

## Timing Reference

| Segment | Start | End | Duration |
|---------|-------|-----|----------|
| Review input | 3:30 | 4:30 | 1:00 |
| Invoke skill | 4:30 | 5:30 | 1:00 |
| Watch process | 5:30 | 7:00 | 1:30 |
| Review output | 7:00 | 8:00 | 1:00 |
| Iterate | 8:00 | 9:00 | 1:00 |
| Final result | 9:00 | 9:30 | 0:30 |
| **Total** | **3:30** | **9:30** | **6:00** |
