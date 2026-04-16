# Thumbnail Concept: Episode B05 — doc-coauthoring

## Hook Text

Primary: "messy notes -> real spec"
Secondary: "doc-coauthoring skill"
Episode badge: "B05"

## Concept

A split-panel image. Left side shows a dense, messy markdown document — dark background, code editor look, bullet points in varying indentation, a stray comment visible ("ask Matt about this"), text is slightly blurred/chaotic. Right side shows the same content transformed: a clean, structured spec document with visible section headers (Overview, Requirements, API Schema), consistent formatting, clear hierarchy. A bold arrow or dividing line between them.

The "before" side should feel slightly uncomfortable — intentionally busy. The "after" side should feel calm and organized.

## Visual Layout (ASCII)

```
+------------------------------------------+
|  [B05]         doc-coauthoring           |
|                                          |
|  +------------------+------------------+ |
|  |  # webhook stuff |  # Webhook API   | |
|  |  - payment stuff |  ## Overview     | |
|  |  - TODO ask Matt |  ## Requirements | |
|  |  - retry? idk    |    1. The sys..  | |
|  |  - schema ideas  |    2. Payload..  | |
|  |    {  "id": ..   |  ## API Schema   | |
|  |  - open questions|  ## Error Han..  | |
|  |  [CHAOS]         |  [STRUCTURED]    | |
|  +--------  ->  ----+------------------+ |
|                                          |
|      messy notes  ->  real spec          |
+------------------------------------------+
```

## Color Palette

- Background: `#141413` (Anthropic dark)
- Left panel (before): `#1e1d1b` with muted text at `#6b6860`
- Right panel (after): `#1e1d1b` with bright text at `#faf9f5`
- Arrow / divider: `#d97757` (Anthropic orange accent)
- "B05" badge: `#6a9bcc` (blue accent) with white text
- Hook text ("messy notes -> real spec"): `#faf9f5` white, bold
- Secondary text: `#d97757` orange

## Typography

- Hook text: Inter or similar sans-serif, bold, 72–80pt
- Episode badge: Mono font, medium weight
- Panel labels ("CHAOS" / "STRUCTURED"): Small caps, 24pt, subtle

## Notes for Designer

- The arrow between panels is the focal point — make it prominent
- The left panel text doesn't need to be fully readable — it should look messy at a glance
- The right panel section headers should be readable even at thumbnail size (mobile)
- Keep the background dark — this is a technical/engineering audience, dark mode aesthetic fits
- Test at 320x180px (mobile YouTube) to ensure the split panels remain legible
- Avoid stock photo faces or illustrations — keep it code/document aesthetic
