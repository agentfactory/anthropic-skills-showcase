# Thumbnail Concept — Episode B01: docx

## Hook Text

**Primary:** "Raw notes → polished Word doc"
**Secondary:** "In one prompt"

## Visual Concept

Split-screen composition. Left half shows a raw, unstyled Markdown file in a dark-mode text editor — plain black text, `#` symbols for headings, pipe characters for a table. Right half shows a professional Word document open in Microsoft Word — clean heading hierarchy, a visible table of contents, a formatted table with shaded rows, an executive summary box. A bold vertical divider line (orange, #d97757) separates the two halves. The `docx` skill badge/label appears in the bottom-right corner.

The overall feeling should be: before vs. after, stark contrast, immediately obvious what the skill does without reading any text.

## Color Palette

| Element | Color | Hex |
|---------|-------|-----|
| Background (dark side / left) | Anthropic dark | #141413 |
| Background (light side / right) | Anthropic off-white | #faf9f5 |
| Divider line | Anthropic orange | #d97757 |
| Hook text | Anthropic off-white | #faf9f5 |
| Skill badge | Anthropic blue | #6a9bcc |
| Word doc accent (heading color) | Deep blue | #1B4F8A |

## Typography

- Hook text: Bold sans-serif, ~72pt, white on dark background (left side)
- Secondary text: Regular sans-serif, ~36pt, dark on light background or orange bar
- Skill name badge: Monospace font (matches CLI aesthetic), white text on dark blue pill shape

## ASCII Layout Diagram

```
+----------------------------------+----------------------------------+
|                                  |                                  |
|  # Project Kickoff               |  [Word Document]                 |
|                                  |                                  |
|  ## Objectives                   |  PROJECT KICKOFF REPORT          |
|  text text text text             |  Meridian Group                  |
|                                  |                                  |
|  ## Scope                        |  TABLE OF CONTENTS               |
|  - item one                      |  1. Objectives ............. 2   |
|  - item two                      |  2. Scope .................. 3   |
|                                  |  3. Deliverables ........... 4   |
|  | Del  | Owner | Due  | Status ||                                  |
|  |------|-------|------|--------||  [Executive Summary Box]         |
|  | Aud  | Wei   | May2 | NS    ||  Transform Meridian's            |
|                                  |  operations by...                |
|                                  |                                  |
|  Raw notes →                     |  ← Polished Word doc             |
|                                  |                                  |
+================= | =============+==================================+
                   |
              [orange divider]
                                             [docx badge — bottom right]
```

## Production Notes

- Thumbnail should be 1280x720px (standard YouTube HD thumbnail)
- Left half: screenshot of VS Code with the actual `project-kickoff-brief.md` file, dark theme, slightly blurred or slightly darkened to let the hook text read clearly
- Right half: screenshot of the actual `kickoff-report-v2.docx` output in Microsoft Word, Word's white background is fine — do not alter
- Hook text ("Raw notes → polished Word doc") overlaid on the dark left side in bold white with a slight dark shadow for contrast
- Orange divider: 8px vertical line centered between the two halves
- Skill badge: bottom-right corner, pill-shaped badge with `anthropics/docx` in monospace white text on #6a9bcc blue background
- Do not use stock photos or illustrations — real screenshots only
