# Thumbnail Concept: Episode B06 — internal-comms

## Hook Text

Primary: "1 update. 3 audiences."
Secondary: "internal-comms skill"
Episode badge: "B06"
Series note: "Series B Finale"

## Concept

Three panels arranged side by side, each representing one audience and output type. Each panel has a distinctive visual treatment that signals its format:

- Left panel: Leadership memo — formal document look, clean serif-style header, "MEMO" visible at top, dark background with a faint letterhead feel.
- Center panel: Slack message — clearly Slack UI framing, bold username, emoji-free, casual paragraph text, timestamp visible.
- Right panel: Customer-facing email — email client chrome at top (To: / Subject: visible), professional formatting.

Above all three panels: the single source — a small, compressed view of bullet points feeding into an arrow that splits into three directions.

The overall composition reads as: one input, three outputs. The split-arrow diagram is the central visual metaphor.

## Visual Layout (ASCII)

```
+--------------------------------------------------+
|  [B06]  SERIES B FINALE    internal-comms        |
|                                                  |
|          [bullet points]                         |
|                  |                               |
|           -------+-------                        |
|          /       |       \                       |
|   +------+  +--------+  +-------+               |
|   | MEMO |  |  Slack |  | Email |               |
|   |      |  | @denis |  | To:   |               |
|   | Biz  |  | "hey   |  | Dear  |               |
|   | ctx  |  |  team" |  | team, |               |
|   +------+  +--------+  +-------+               |
|                                                  |
|         1 update.  3 audiences.                  |
+--------------------------------------------------+
```

## Color Palette

- Background: `#141413` (Anthropic dark)
- Central input box: `#1e1d1b` with subtle orange border `#d97757`
- Left panel (memo): `#faf9f5` light background with `#141413` text — formal, document feel
- Center panel (Slack): `#1e1d1b` with slight purple tint — Slack dark mode look, text `#faf9f5`
- Right panel (email): `#faf9f5` light background — email client feel
- Split arrow: `#d97757` (Anthropic orange accent)
- "B06" badge: `#6a9bcc` (blue accent) with white text
- "Series B Finale" badge: subtle `#d97757` outline, no fill
- Hook text: `#faf9f5` white, bold, prominent

## Typography

- Hook text ("1 update. 3 audiences."): Inter bold, 68–76pt — the period after "1 update" is intentional, adds weight
- Episode / series badge: Mono font
- Panel labels ("MEMO", "Slack", "Email"): Small caps or tag style, 20–24pt
- Panel content text: deliberately small — it just needs to look like formatted text, not be readable

## Notes for Designer

- The three-panel split is the entire story — make it clear at a glance
- The panels should feel like genuinely different formats, not just three boxes with different headers
- The arrow split from the input is critical — it should visually communicate "one becomes three"
- Test at small sizes: the "1 update. 3 audiences." hook text needs to be readable at 320x180px
- The "Series B Finale" badge is a nice touch if space allows — adds context for series followers
- Avoid using actual Slack, Gmail, or Google Docs branding — suggest the format, don't replicate it exactly
- Dark background is the right call — keeps visual consistency with rest of Series B
