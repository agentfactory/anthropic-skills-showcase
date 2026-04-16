# Thumbnail Concept — Episode B03: pdf

**Episode:** B03 — pdf — Build a Client Onboarding Package
**Series:** B — Documents & Files

---

## Hook Text

**Primary headline:** "3 PDFs → 1 Package"  
**Secondary text:** "Cover page. Bookmarks. Watermark. One prompt."  
**Badge/label:** "anthropics/pdf"

**Rationale:** The transformation hook (3 → 1) is concrete and immediately legible. The secondary text lists the features that differentiate this from a basic merge, priming the viewer to understand the value before they click.

---

## Visual Concept

The thumbnail is split into two halves — before and after — separated by a thin orange accent line.

**Left half (before):**
Three PDF document icons stacked at slight angles, like a loose pile. Each icon has a different color tag to distinguish them: dark blue (contract), slate gray (SOW), light gray (welcome letter). Below the stack, a small email icon suggesting how these would normally be sent. The pile looks slightly disorganized.

**Right half (after):**
A single clean PDF document icon, straight, professional. A thin bookmark ribbon is visible on the right edge of the document icon. A faint diagonal "DRAFT" text is visible across the document face at 40% opacity (gray, not red — easier to read at thumbnail size). The document looks authoritative and complete.

**Center:**
A large orange arrow (Anthropic orange, #d97757) pointing from left to right, spanning between the two halves. The skill badge "anthropics/pdf" sits just below the arrow in the Anthropic blue (#6a9bcc) on a dark pill background.

**Bottom strip:**
Dark background bar (#141413) with the episode identifier "B03" in orange and the series name "Documents & Files" in light text.

---

## Color Palette

| Element | Color | Hex |
|---------|-------|-----|
| Background | Anthropic dark | #141413 |
| Text (primary) | Anthropic light | #faf9f5 |
| Arrow / accent | Anthropic orange | #d97757 |
| Skill badge bg | Anthropic blue | #6a9bcc |
| PDF icon (before) | Slate | #6b7280 |
| PDF icon (after) | Deep blue | #1e3a5f |
| Dividing line | Anthropic orange | #d97757 |

---

## Typography

- **Headline "3 PDFs → 1 Package":** Bold, 72–80pt, white (#faf9f5), tight letter-spacing
- **Secondary text:** Regular weight, 36pt, light gray (#a1a1aa)
- **Badge text "anthropics/pdf":** Monospace, 28pt, white on blue

---

## ASCII Layout Diagram

```
+----------------------------------------------------------+
|                                                          |
|   3 PDFs -> 1 Package                                    |
|   Cover page. Bookmarks. Watermark. One prompt.          |
|                                                          |
|  +------------+    -->    +------------------+           |
|  | [PDF][PDF] |   [-->]   | [SINGLE PDF]     |           |
|  | [PDF]      |           | [Bookmarks] [DFT]|           |
|  |  @ email   |           |                  |           |
|  +------------+           +------------------+           |
|                                                          |
|  [anthropics/pdf]                                        |
|                                                          |
+--[B03]----[Documents & Files]----------------------------+
```

---

## Thumbnail Production Notes

- Render at 1280x720 (YouTube standard) with 2x assets at 2560x1440 for retina
- The DRAFT watermark on the right-side document should be legible at thumbnail size — use gray (#9ca3af) rather than red, which can bleed at small sizes
- The orange arrow should be the dominant eye-tracking element — ensure it has enough weight relative to the document icons
- A/B test against a version where the headline reads "One Prompt. One Package." to see which drives higher CTR
- Keep the left/right split clean — do not let elements from one side overlap into the other
