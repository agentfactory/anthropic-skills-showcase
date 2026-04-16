# Thumbnail Concept — Episode 08: canvas-design

## Concept

The thumbnail shows the transformation: a plain text brief on the left, a stunning conference poster on the right — split cleanly down the center with a bright orange divider line. The viewer immediately understands the value proposition without reading a single word.

---

## Rule-of-Thirds Layout

```
+---------------------------+---+---------------------------+
|                           | | |                           |
|   PLAIN TEXT              | | |   ░░░░░░░░░░░░░░░░░░░   |
|   "Event brief:           | | |   ░                   ░   |
|    Signal 2025            | | |   ░   SIGNAL 2025     ░   |
|    Nov 14-15              | | |   ░   ═══════════     ░   |
|    Speakers:..."          | | |   ░                   ░   |
|                           | | |   ░  Priya Nambiar    ░   |
|   [dark bg, muted text]   |█| |   ░  Marcus Diallo    ░   |
|                           |█| |   ░  Yuki Tanaka      ░   |
+------ 1/3 ----------------+█+---   ░  Leila Osei...   ░   |
|                           |█| |   ░                   ░   |
|   EP 08                   |█| |   ░  Nov 14-15, 2025  ░   |
|   CANVAS-DESIGN           | | |   ░  San Francisco    ░   |
|                           | | |   ░░░░░░░░░░░░░░░░░░░   |
+------ 2/3 ---------------+---+---------------------------+
|   [bottom strip: dark bar]                               |
|   ANTHROPIC SKILLS SHOWCASE — episode number            |
+----------------------------------------------------------+
```

**Grid:** 1280 x 720px (standard YouTube thumbnail)
**Safe zone:** 100px inset from all edges for text legibility on mobile

---

## Left Panel (0–540px)

- Background: Dark `#141413`
- Content: A block of "plain text" — the brief as it would appear in a code editor or notes app. Use a monospace font (Courier, Fira Code, or JetBrains Mono). Muted gray color: `#888880`
- The text should be slightly blurred or de-saturated to signal "input / before"
- Optional: subtle VS Code line numbers on the left edge of the text block
- Label at bottom-left: "EP 08" in small Poppins Medium, `#d97757` orange; below it "CANVAS-DESIGN" in Poppins Bold, white, 18pt

## Center Divider (540–560px)

- Solid vertical bar: `#d97757` (brand orange), full height, 20px wide
- The visual "cut" — reinforces before/after

## Right Panel (560–1280px)

- Background: Deep navy `#0B1120` — matches the Signal 2025 poster brand
- Content: The rendered Signal 2025 poster, scaled to fill the panel without cropping key information
- Must be legible enough to read "SIGNAL 2025" and at least 2 speaker names
- Apply a subtle inner glow or thin blue border `#2D7FEA` around the poster to make it "pop" from the background
- The poster should appear to float slightly — 4px drop shadow at 20% opacity

---

## Typography

| Element | Font | Size | Color | Weight |
|---|---|---|---|---|
| "EP 08" | Poppins | 14pt | `#d97757` | Medium |
| "CANVAS-DESIGN" | Poppins | 18pt | `#FFFFFF` | Bold |
| Bottom strip text | Poppins | 11pt | `#888880` | Regular |

No title text overlaid on top of the poster panel — let the poster speak for itself.

---

## Color Use

| Role | Hex | Where |
|---|---|---|
| Dark background | `#141413` | Left panel, bottom strip |
| Navy poster bg | `#0B1120` | Right panel |
| Orange divider | `#d97757` | Center bar, "EP 08" label |
| Electric blue accent | `#2D7FEA` | Poster inner glow |
| White | `#FFFFFF` | "CANVAS-DESIGN" label |
| Muted gray | `#888880` | Left panel text, bottom strip |

---

## What to Avoid

- Putting a photo of a person in the thumbnail (not the format for this series)
- Animated or "wow" emoji (off-brand)
- Red circles or arrows (clickbait aesthetic, not aligned with the channel)
- Oversaturated gradients — the "AI aesthetic" is specifically what the Signal 2025 brief tells us to avoid; the thumbnail should reflect that same sensibility
- Crowding the poster panel with overlay text — the poster is the hero, let it be readable

---

## Production Notes

- Render at 2x (2560 x 1440px), export as JPG at 90% quality for YouTube upload
- Keep the Signal 2025 poster version consistent with what appears in the actual episode to avoid confusion
- The left panel text content should be clearly from the conference-brief.md — viewers who pause the video should recognize it
- Consider a very subtle vignette on the left panel edges to keep focus on the center divider and right panel
