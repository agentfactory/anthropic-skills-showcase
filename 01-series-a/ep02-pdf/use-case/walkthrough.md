# Demo walkthrough — pdf (merge + watermark + extract)

Rehearsal script for Denis's live screen recording. Target duration: **6:00** (fits the 3:30–9:30 demo slot). Keep terminal font at 16pt+, dark mode, file explorer pinned to the right panel.

---

## Preflight checklist (complete before hitting record)

1. Create the working directory: `mkdir ~/demo-ep02 && cd ~/demo-ep02`
2. Create subdirectories: `mkdir -p use-case/input use-case/output`
3. Confirm the pdf skill is installed: `ls ~/.claude/skills/pdf/SKILL.md`
4. Copy the 5 mock PDFs into `use-case/input/`:
   - `meridian-q1-2024.pdf`
   - `meridian-q2-2024.pdf`
   - `meridian-q3-2024.pdf`
   - `meridian-q4-2024.pdf`
   - `meridian-annual-summary-2024.pdf`
5. Open the file explorer to `use-case/input/` — visible but not in focus
6. Close all browser tabs showing source PDFs (no spoilers)
7. Claude Code launched in `~/demo-ep02`, empty session
8. Turn off notifications, enable Do Not Disturb
9. Verify terminal background is `#141413`, font color `#faf9f5`

---

## Recording — step by step

### Step 1 — Show the inputs (3:30–4:15) • ~45s

**Action:** Click into the file explorer panel. Single-click `meridian-q1-2024.pdf` to preview it. Let the preview dwell on the cover page for 3 seconds, then slowly scroll to page 4 where a table is visible. Close the preview.

**Say:** "Here's what we're starting with — five quarterly PDF reports from Meridian SaaS. Q1 through Q4 and the annual summary. Eighty-four pages total, five different authors, five different formatting styles. This is exactly what lands in your inbox before a board review."

**Action:** Click on `meridian-annual-summary-2024.pdf` to briefly preview it. Show a different table layout. Close it.

**Say:** "Each one has its own table structure. The annual summary has six tables alone. We're going to pull all of them out in one go."

---

### Step 2 — Write the single-prompt (4:15–5:00) • ~45s

**Action:** Switch focus to Claude Code. The session is empty. Start typing slowly enough for the typewriter to be visible.

**Type exactly:**
```
Using the pdf skill, do the following with the 5 files in use-case/input/:
1. Merge them in order: Q1, Q2, Q3, Q4, then Annual Summary
2. Add a diagonal "CONFIDENTIAL" watermark to every page — grey, 40% opacity, rotated 45 degrees
3. Extract all tables from all pages and output them as structured markdown
Save the merged PDF as use-case/output/meridian-2024-master.pdf and the tables as use-case/output/tables.md
```

**Say (while typing):** "One prompt. Three operations in sequence. I'm telling it the file order, the watermark parameters, and the output destinations. That's all the context it needs."

**Action:** Hit Enter. Pause for the pdf skill banner to appear.

**Say:** "There's the activation — pdf skill is live."

**Point to:** the skill activation banner at the top of the Claude Code UI with your cursor.

---

### Step 3 — Merge phase (5:00–6:15) • ~75s

**Action:** Watch the terminal output stream. Do not type — let it run.

**Say:** "First operation — the merge. It's not just concatenating the files. Watch the log..."

**Wait for:** a log entry mentioning "table of contents" or "bookmarks" — this is the aha moment callout.

**Say:** "There — table of contents. This is the part that surprises people. The skill doesn't just stack the PDFs. It builds section bookmarks so the merged document is actually navigable. Q1 gets its own bookmark, Q2 gets its own bookmark. You click, you jump. That's 20 minutes in Acrobat, automated."

**Action:** If the merged PDF preview is accessible, click to open it briefly. Show the sidebar bookmark panel. Close it.

---

### Step 4 — Watermark phase (6:15–7:15) • ~60s

**Action:** The terminal is counting pages. Let it run while talking.

**Say:** "Watermark pass now — every page. Grey, 40% opacity, 45 degrees. Those parameters were in the prompt, so there's nothing to configure separately."

**Wait for:** the watermark phase to complete and trigger a preview or output message.

**Action:** Open the output PDF to page 12 or any middle page. Let the watermark be visible for 5 seconds.

**Say:** "That's the result — sits behind the content layer, visible enough to communicate confidentiality, transparent enough to still read the data underneath. You can tune the opacity to 20% or 60% with one parameter change in a follow-up prompt."

---

### Step 5 — Table extraction phase (7:15–8:30) • ~75s

**Action:** Terminal is showing table scan progress. Let it run.

**Say:** "Last operation — table extraction. This is the one that used to mean an afternoon with copy-paste."

**Wait for:** tables.md to start being written.

**Action:** Open `use-case/output/tables.md` in the VS Code editor pane. Scroll slowly.

**Say:** "Look at the output format — every table is clean markdown, and every table has a source label: file name, page number. When someone asks where a figure comes from, you have an answer in one second instead of one minute."

**Action:** Scroll through the first 3–4 tables in tables.md. Let the viewer see the column headers and rows are intact.

**Say:** "Twenty-three tables. All of them. Source-labeled. Ready to paste into any downstream tool."

---

### Step 6 — Refinement and final result (8:30–9:30) • ~60s

**Action:** Claude finishes. Both output files exist. Show the file explorer with `meridian-2024-master.pdf` and `tables.md` in `use-case/output/`.

**Say:** "Both outputs are ready. But I want one small refinement — I want the tables grouped by report section, not just in raw page order."

**Action:** In Claude Code, type:
```
Update tables.md: group the extracted tables by report section (Q1, Q2, Q3, Q4, Annual Summary) with a level-2 heading for each section.
```

**Wait for:** tables.md to update. Open it. Show the `## Q1 Report`, `## Q2 Report` structure.

**Say:** "Done. The first pass does the heavy lifting — merge, watermark, extract. The follow-up shapes the output exactly how you need it. Total time: under six minutes. That's the compounding power of a well-built skill."

**Action:** Close with a split-screen: left side shows the 5 original PDF icons, right side shows the single master PDF with the section bookmarks visible and tables.md alongside.

---

## Output artifacts to save after recording

Copy into `use-case/output/` for the repo:
- `meridian-2024-master.pdf` — the final merged + watermarked PDF
- `tables.md` — the extracted tables with section groupings

---

## Troubleshooting

**pdf skill doesn't auto-activate:**
Type `/skills` in Claude Code and confirm `pdf` is listed. If not, re-run the install command. If listed but not activating, prefix the prompt with: "Using the anthropics/pdf skill, ..."

**Merge order is wrong:**
The skill reads filenames alphabetically by default if not specified. The prompt explicitly states the order (`Q1, Q2, Q3, Q4, then Annual Summary`) — if it still gets it wrong, name the files with numeric prefixes: `01-meridian-q1.pdf`, `02-meridian-q2.pdf`, etc.

**Watermark opacity looks wrong on screen:**
40% opacity is correct for recording but may look lighter on export. If the client wants darker, 55% is still readable. Adjust in a follow-up prompt: `Update the watermark opacity to 55%.`

**Table extraction misses a table:**
Some low-quality PDFs use image-based tables (scanned). If extraction misses one, note it verbally on camera — authentic edge case, builds trust. Follow up with: `The table on page X may be image-based — attempt OCR extraction.`

**Run goes over 6:30:**
Cut Step 1 short — skip opening the annual summary preview. The Q1 preview alone sets the context.

## Retake policy

If a take goes over 6:30 or has a flubbed line in Steps 2–4 (the typed prompt section), restart from the top of that step. Steps 5 and 6 are safe to restart independently — they don't depend on live input.
