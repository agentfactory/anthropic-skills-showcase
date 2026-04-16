# Episode B03: pdf — Build a Complete Client Onboarding Package

**Series:** B — Documents & Files
**Skill:** `anthropics/pdf`
**Skill URL:** https://smithery.ai/skills/anthropics/pdf
**Installs:** 895
**Target Duration:** 12 minutes
**Script Word Count:** ~1,800 words narrated

---

## COLD OPEN [0:00–0:30]

**[SCREEN: Close-up of an email inbox. Three PDF attachments visible: "Service-Agreement-v3-FINAL.pdf", "SOW-Apex-Digital-Oct2024.pdf", "Welcome-Letter.pdf". A fourth email below shows the same three files renamed slightly differently.]**

NARRATOR: "Here's what client onboarding looks like at most agencies. Three separate PDFs. Sent in an email. Sometimes the wrong version. The client prints them out of order, signs the wrong page, and sends a photo of it back. You know this story. Let's tell a different one."

**[SCREEN: Terminal opens. Clean workspace.]**

---

## INTRO [0:30–1:30]

**[SCREEN: Title card — "Episode B03: pdf — Client Onboarding Package"]**

NARRATOR: "Welcome to the Anthropic Skills Showcase. I'm Denis. Each episode I take one skill from Smithery's catalog of Anthropic skills and show you what it actually does on a real problem, not a toy example."

**[SCREEN: Browser opens to https://smithery.ai/skills/anthropics/pdf]**

NARRATOR: "Today's skill is 'anthropics/pdf' — 895 installs and climbing. We used this skill in Series A, episode two, where we merged quarterly financial reports and added a confidential watermark. If you haven't watched that one, it's worth going back to. But today we're doing something different: client onboarding."

**[SCREEN: Split view showing the three source documents side by side]**

NARRATOR: "The scenario is this. Meridian Creative — a mid-size design agency — just signed a new client, Apex Digital. They have three documents ready: a client services agreement, a statement of work, and a branded welcome letter. The goal is to package them into a single professional document with a generated cover page, bookmarks, sequential page numbering, and a draft watermark — and then, once the account manager approves, remove the watermark and ship the final."

NARRATOR: "This is document assembly as a workflow, not a one-off task. Let's build it."

---

## SKILL DEEP DIVE [1:30–3:30]

**[SCREEN: Terminal with skill installation command]**

NARRATOR: "Installation is one command."

**[SCREEN: Type and run:]**
```
npx @smithery/cli@latest skill add anthropics/pdf
```

NARRATOR: "That's it. The skill is now available to Claude Code in your current session. No configuration file, no API keys to manage separately, no dependency install step."

**[SCREEN: Skill confirmation output in terminal]**

NARRATOR: "What does this skill actually do under the hood? It gives Claude structured access to PDF operations — merge, split, rotate, extract text, add watermarks, add page numbers, generate bookmarks, and create cover pages. These aren't prompt tricks where Claude describes what a PDF should look like. These are actual PDF manipulation operations executed against real files."

**[SCREEN: Smithery skill page showing capability list]**

NARRATOR: "A few things worth knowing before we start. First, the skill works with local file paths, so your source PDFs need to be on disk. Second, watermarks can be text or image, with configurable opacity, rotation, and color. Third, bookmarks — what the skill calls 'outlines' — can be added with arbitrary depth: top-level sections and nested subsections. And fourth, cover pages can be generated from a metadata object you pass in: client name, date, document title, your firm's name. The skill handles the layout."

**[SCREEN: Quick diagram of the merge operation flow]**

NARRATOR: "The merge operation is what ties everything together. You pass an ordered array of PDF paths, and the skill concatenates them while preserving the internal structure of each document. From there, you layer on the other operations: cover page first, then bookmarks, then page numbers, then watermark. Each operation is composable — you can do any subset of them in a single call or chain them."

**[SCREEN: Zoom into the bookmark structure]**

NARRATOR: "One thing I want to call out specifically: the bookmarks. In a merged document, without bookmarks, the client opens a 42-page PDF and has no idea where the agreement ends and the SOW begins. With bookmarks, the PDF navigation panel on the left shows 'Client Services Agreement — page 1', 'Statement of Work — page 15', 'Welcome Letter — page 38'. That's the difference between a professional deliverable and a document dump."

---

## LIVE DEMO [3:30–9:30]

### Step 1 — Review the Source Documents [3:30–4:30]

**[SCREEN: Open use-case/input/onboarding-source-docs.md in the editor]**

NARRATOR: "Here's what we're working with. Three PDFs. The first is the Meridian Creative Client Services Agreement — 14 pages, standard contract language, payment terms, IP assignment clauses. The second is the Statement of Work for the Apex Digital brand refresh project — 22 pages, project phases, deliverables, timelines, and budget. And the third is a two-page welcome letter from the account director, personal tone, outlines what happens next and who to contact."

**[SCREEN: Show the brief summary of each document's contents]**

NARRATOR: "In a real workflow, these three files would come from your contracts folder, your project management tool's export, and your letter template system. For the demo, we're describing them as realistic stand-ins."

NARRATOR: "The target output is called 'onboarding-package-DRAFT.pdf'. Here's what it needs: a cover page with the Meridian and Apex Digital names, the project title, and today's date. Bookmarks for each of the three documents. Page numbers starting at 1 from the cover page through to the end. And a diagonal 'DRAFT' watermark on every page at 40% opacity."

### Step 2 — Write the Assembly Prompt [4:30–5:30]

**[SCREEN: Claude Code prompt being typed]**

NARRATOR: "Here's the prompt I'm sending to Claude Code."

**[SCREEN: Display prompt clearly:]**
```
Use the pdf skill to assemble a client onboarding package.

Source files (in order):
- contracts/client-services-agreement.pdf
- projects/apex-digital-sow.pdf
- templates/welcome-letter-apex.pdf

Output: output/onboarding-package-DRAFT.pdf

Operations to apply:
1. Generate a cover page with:
   - Title: "Client Onboarding Package"
   - Client: "Apex Digital"
   - Prepared by: "Meridian Creative"
   - Date: October 15, 2024
   - Subtitle: "Brand Refresh Project"

2. Merge the three PDFs in the order listed, inserting
   the cover page first.

3. Add PDF bookmarks:
   - "Cover Page" → page 1
   - "Client Services Agreement" → page 2
   - "Statement of Work" → page 16
   - "Welcome Letter" → page 39

4. Add sequential page numbers, bottom-center,
   starting from page 1 (cover page).

5. Stamp a diagonal DRAFT watermark on every page:
   - Text: "DRAFT"
   - Rotation: 45 degrees
   - Opacity: 40%
   - Color: red
```

NARRATOR: "That's the full specification in one prompt. No intermediate steps. No asking Claude to do one thing, then another. The skill handles the whole pipeline."

### Step 3 — Watch the Assembly [5:30–7:00]

**[SCREEN: Claude Code processing. Show the skill invocation happening in the terminal. Watch logs appear.]**

NARRATOR: "You can see the skill working through the operations in sequence. Cover page generated. Merge complete — 38 pages from the three source PDFs, plus the one-page cover, total 39 pages. Bookmarks registered. Page numbers applied. Watermark stamped."

**[SCREEN: File appears in output directory]**

NARRATOR: "Thirty seconds. Forty-two page professional document, assembled from three separate files."

**[SCREEN: Open the PDF in the viewer. Show the cover page.]**

NARRATOR: "Here's the cover page. Clean layout — the Meridian Creative name in the header, the Apex Digital name as the client, the project title centered, the date in the footer. The skill generates this from the metadata you passed — you don't need to maintain a cover page template file."

**[SCREEN: Scroll through the document. Show bookmarks in the sidebar.]**

NARRATOR: "And here are the bookmarks. Click 'Statement of Work' — jumps directly to page 16. Click 'Welcome Letter' — page 39. This is what makes the document navigable. The client isn't hunting through 42 pages to find the SOW timeline."

**[SCREEN: Scroll through showing page numbers at the bottom of each page.]**

NARRATOR: "Page numbers running sequentially across all three source documents and the cover. This sounds obvious, but if you've ever merged PDFs manually, you know they come in with their own internal page numbering that doesn't match the merged document's actual pages. The skill renumbers the whole thing."

**[SCREEN: Zoom in on the DRAFT watermark on a page.]**

NARRATOR: "And the watermark. Diagonal, red, 40% opacity — present but not overwhelming. Visible enough that no one will print this and accidentally send it to a client before approval."

### Step 4 — The Approval Iteration [7:00–8:00]

**[SCREEN: Simulate the account manager reviewing the document]**

NARRATOR: "Here's where the workflow gets interesting. The account manager reviews the draft. They have one change: the SOW start date on page 18 needs to be updated from November 1st to November 15th. They make that edit in the source SOW file, save it, and now they need to rebuild the package."

**[SCREEN: New prompt being typed]**

NARRATOR: "Same command. Updated source file. The package rebuilds in 30 seconds. That's the composability of the skill — you're not hand-editing the merged PDF, you're regenerating it from the source files. The assembled document is always a clean output."

NARRATOR: "Account manager approves. Time to remove the watermark."

### Step 5 — Remove the Watermark [8:00–9:00]

**[SCREEN: New prompt being typed]**

NARRATOR: "Here's the final prompt."

**[SCREEN: Display prompt:]**
```
Use the pdf skill to create the final version of the onboarding package.

Input: output/onboarding-package-DRAFT.pdf
Output: output/onboarding-package-FINAL.pdf

Remove the DRAFT watermark. All other content,
bookmarks, and page numbers should remain intact.
```

**[SCREEN: Processing. File appears.]**

NARRATOR: "Done. Let's look at the final."

### Step 6 — Review the Final Output [9:00–9:30]

**[SCREEN: Open the final PDF. Scroll through it.]**

NARRATOR: "Cover page intact. Bookmarks intact. Page numbers intact. Watermark gone. This is the file that goes to the client. It looks like something a well-resourced agency produced — because it is, just in two minutes instead of forty-five."

---

## RESULTS + VARIATIONS [9:30–11:00]

**[SCREEN: Summary of the output]**

NARRATOR: "Let's talk about what else you can do with this skill in an onboarding context."

**[SCREEN: Show a list of variations]**

NARRATOR: "First: branded cover pages. If your firm has brand colors and a logo, you can pass those into the cover page generator. The skill accepts a logo image path and a hex color for the header bar. A two-minute change that makes the package look like it came from your design team."

NARRATOR: "Second: multi-section SOWs. If your SOW has phases — Discovery, Design, Development, Launch — you can create nested bookmarks. 'Statement of Work' at the top level, then 'Phase 1: Discovery' and 'Phase 2: Design' as sub-entries underneath. The skill supports multi-level bookmark hierarchies."

NARRATOR: "Third: version stamps instead of watermarks. Instead of the word 'DRAFT', you can stamp 'VERSION 1.2 — CONFIDENTIAL' or 'INTERNAL REVIEW ONLY — DO NOT DISTRIBUTE'. The text is a parameter you pass. Same visual treatment, different message."

NARRATOR: "Fourth: extraction. The skill can also extract text from any page range in the merged document. So after you've assembled the package, you can pull the payment terms section from the agreement, or the timeline table from the SOW, and use that as input for another system — a project management tool, a billing platform, whatever."

**[SCREEN: Show the skill's other common use cases]**

NARRATOR: "Beyond onboarding: proposal packages, audit report binders, legal discovery sets, HR onboarding documentation, client-facing project status reports. Any workflow where you're assembling multiple source documents into one professional deliverable is a candidate for this skill."

NARRATOR: "The common thread is that these are repeatable processes. You run this assembly workflow every time a new client signs. Automating it doesn't just save time — it eliminates the version control errors that happen when humans are copying files around."

---

## WRAP-UP [11:00–12:00]

**[SCREEN: Terminal. Show the two output files side by side.]**

NARRATOR: "Here's what we built in this episode. A 42-page client onboarding package assembled from three source PDFs with a generated cover page, working bookmarks, sequential page numbers, and a draft watermark — all from a single prompt. Then a second command to remove the watermark and produce the final. From three email attachments to a professional deliverable."

**[SCREEN: Show the install command]**

NARRATOR: "The skill is 'anthropics/pdf'. One command to install."

**[SCREEN: Display:]**
```
npx @smithery/cli@latest skill add anthropics/pdf
```

NARRATOR: "Link in the description. Series B is all documents and files — next up is Episode B04, where we take a customer case study in plain text and turn it into a polished sales presentation with a chart slide and a dark theme variation. That one's for the sales and customer success folks. See you there."

**[SCREEN: End card with links]**

---

*End of script. Total narration: approximately 1,820 words.*
