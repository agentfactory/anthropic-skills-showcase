# Episode B03: pdf — Rehearsal Walkthrough
## Denis's Step-by-Step Demo Guide

**Use Case:** Client Onboarding Package Assembly
**Skill:** `anthropics/pdf`
**Estimated Demo Time:** 6 minutes (3:30 to 9:30 in the final video)

---

## Before You Start

Set up your workspace so the terminal and a PDF viewer are both visible on screen. Have the PDF viewer open but empty — you'll open files into it during the demo.

Your directory structure should look like this before recording:

```
demo/
├── contracts/
│   └── client-services-agreement.pdf    (14 pages)
├── projects/
│   └── apex-digital-sow.pdf             (22 pages)
├── templates/
│   └── welcome-letter-apex.pdf          (2 pages)
└── output/                              (empty at start)
```

Install the skill before recording so the install command runs cleanly without hanging:
```
npx @smithery/cli@latest skill add anthropics/pdf
```

Confirm it's installed:
```
claude "list installed skills"
```

---

## Step 1 — Show the Source Documents (3:30–4:30)

1. Open the `use-case/input/onboarding-source-docs.md` file in your editor.

2. Talk through each document briefly:
   - **Client Services Agreement** — 14 pages, contract boilerplate. Point out that it has its own internal page numbers starting at 1.
   - **Statement of Work** — 22 pages, project phases. Again, its own page numbering.
   - **Welcome Letter** — 2 pages. Short, personal, client-facing.

3. Verbalize the problem: "If I email these separately, the client gets three PDFs. They print them out of order. They can't find the payment schedule in the agreement. The SOW timeline is buried on page 12 of a 22-page file. We're going to fix all of that."

4. State the goal: one package, cover page, bookmarks, page numbers, DRAFT watermark.

**What to say:** "Here's what we're working with. Three PDFs. Fourteen pages, twenty-two pages, two pages. Thirty-eight pages total before we add the cover. Let's assemble them."

---

## Step 2 — Write the Assembly Prompt (4:30–5:30)

1. Open Claude Code in the terminal.

2. Type the following prompt (or paste it from a prepared file — show yourself typing it for authenticity, but have it ready):

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
   - "Cover Page" -> page 1
   - "Client Services Agreement" -> page 2
   - "Statement of Work" -> page 16
   - "Welcome Letter" -> page 39

4. Add sequential page numbers, bottom-center,
   starting from page 1 (cover page).

5. Stamp a diagonal DRAFT watermark on every page:
   - Text: "DRAFT"
   - Rotation: 45 degrees
   - Opacity: 40%
   - Color: red
```

3. Hit enter and let it run.

**Timing note:** The assembly should complete in 20–40 seconds. Keep talking during this time — describe what the skill is doing.

**What to say while it runs:** "The skill is working through these operations in sequence. First it generates the cover page from the metadata we passed. Then it merges the three source files with the cover page prepended. Then bookmarks, page numbers, watermark. Watch the output directory."

---

## Step 3 — Review the DRAFT Output (5:30–7:00)

When the command completes, the file `output/onboarding-package-DRAFT.pdf` should exist.

1. Open it in your PDF viewer.

2. **Show the cover page first.** Let it sit for 3–4 seconds. Point out: client name, agency name, project title, date.

3. **Open the bookmarks panel** (usually left sidebar in PDF viewers). Show that all four bookmarks are present: Cover Page, Client Services Agreement, Statement of Work, Welcome Letter.

4. **Click each bookmark** to demonstrate navigation. Don't rush — let the viewer see it working.

5. **Scroll to the bottom of a page** to show the sequential page number.

6. **Zoom into a content page** to show the DRAFT watermark. Point out: diagonal, visible but not overwhelming, 40% opacity.

**Expected output characteristics:**
- Total pages: 39 (1 cover + 14 agreement + 22 SOW + 2 welcome letter)
- Bookmarks: 4 entries in the navigation panel
- Page numbers: 1 through 39, bottom-center
- Watermark: red diagonal "DRAFT" text on every page

**What to say:** "Thirty seconds. Here's what we got: a 39-page document, cover page generated from the metadata we passed, bookmarks in the sidebar so the client can navigate without scrolling, sequential page numbers across all three source documents, and the DRAFT watermark on every page."

---

## Step 4 — The Approval Iteration (7:00–8:00)

1. Tell the story: "The account manager reviews this. One change — the SOW start date needs to move from November 1st to November 15th."

2. Open `projects/apex-digital-sow.pdf` and simulate making the edit (or just describe it). Save the updated file.

3. **Run the same prompt again** with the updated source file. The package rebuilds. No manual editing of the merged document.

4. Point out: "This is the key thing. We're not editing the merged PDF. We're regenerating it from the source files. The assembled document is always a clean output from whatever the current state of the sources is."

5. "Account manager approves. Time to remove the watermark."

---

## Step 5 — Remove the Watermark (8:00–9:00)

1. Type the following prompt:

```
Use the pdf skill to create the final version of the onboarding package.

Input: output/onboarding-package-DRAFT.pdf
Output: output/onboarding-package-FINAL.pdf

Remove the DRAFT watermark. All other content,
bookmarks, and page numbers should remain intact.
```

2. Run it. Should complete in 10–15 seconds.

3. Open `output/onboarding-package-FINAL.pdf`.

**What to say while it runs:** "One more command. Remove the watermark, produce the final file."

---

## Step 6 — Review the Final Output (9:00–9:30)

1. Open the final PDF.

2. Show the cover page — intact.

3. Click the bookmarks — still working.

4. Scroll to a content page — page numbers still present.

5. **Confirm the watermark is gone.** Let this be the visual payoff moment. Hold on a clean content page for 3–4 seconds.

**What to say:** "Cover page. Bookmarks. Page numbers. Watermark gone. This is the file that goes to the client."

---

## Timing Reference

| Segment | Start | End | Duration |
|---------|-------|-----|----------|
| Source document review | 3:30 | 4:30 | 1:00 |
| Writing the assembly prompt | 4:30 | 5:30 | 1:00 |
| Watching the assembly | 5:30 | 7:00 | 1:30 |
| Approval iteration | 7:00 | 8:00 | 1:00 |
| Remove watermark | 8:00 | 9:00 | 1:00 |
| Final review | 9:00 | 9:30 | 0:30 |
| **Total demo** | **3:30** | **9:30** | **6:00** |

---

## If Something Goes Wrong

**Skill not found:** Run `npx @smithery/cli@latest skill add anthropics/pdf` again and verify the confirmation message.

**File not found error:** Check that the source PDF paths in your prompt exactly match the actual file locations. The skill uses the paths you specify — there's no fuzzy matching.

**Cover page looks off:** The cover page generator uses a default layout. If you want to adjust the layout for the video, pass a `template` parameter pointing to a cover page template PDF. Otherwise, the default is clean enough for the demo.

**Watermark not removed cleanly:** This can happen if the watermark was applied as an image rather than text. Confirm the original watermark command used text mode (the `text: "DRAFT"` parameter, not `image:`).

**Bookmarks not showing in viewer:** Some PDF viewers hide the bookmark panel by default. Press F4 (Adobe Acrobat) or look for the sidebar toggle. Confirm you're using a viewer that supports PDF outlines — Preview on Mac and Adobe Reader both work well.
