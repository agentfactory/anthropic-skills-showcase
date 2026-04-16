# Thumbnail Concept — Episode 15
# slack-gif-creator | Series A Finale

---

## Dimensions and Format

- Size: 1280 x 720px (YouTube standard)
- Format: PNG or JPG, under 2MB
- Color space: sRGB
- Safe zone: Keep critical elements inside 1120 x 580px (80px margin all sides)

---

## Layout — Rule of Thirds Grid

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  ┌─────────────────────┬───────────────────┬───────────────────┐   │
│  │                     │                   │                   │   │
│  │   [SERIES A         │  [THREE GIF       │  [TITLE TEXT]     │   │
│  │    FINALE BADGE]    │   PREVIEWS]       │                   │   │
│  │   top-left corner   │   center col      │  right col        │   │
│  │                     │                   │                   │   │
│  ├─────────────────────┼───────────────────┼───────────────────┤   │
│  │                     │                   │                   │   │
│  │   [EP NUMBER        │  [MAIN HERO:      │  [TITLE TEXT      │   │
│  │    "EP 15"]         │   confetti GIF    │   continued +     │   │
│  │                     │   large, center]  │   skill name]     │   │
│  │                     │                   │                   │   │
│  ├─────────────────────┼───────────────────┼───────────────────┤   │
│  │                     │                   │                   │   │
│  │   [INSTALL CMD      │  [SLACK EMOJI     │  [CHANNEL         │   │
│  │    pill at bottom]  │   strip mock]     │   BRANDING]       │   │
│  │                     │                   │                   │   │
│  └─────────────────────┴───────────────────┴───────────────────┘   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Zone-by-Zone Element Descriptions

### Top Left — Series A Finale Badge
- Badge shape: Rounded rectangle or ribbon
- Background: #d97757 (orange accent)
- Text: "SERIES A FINALE" in Poppins Bold, white, all caps, ~14px equivalent
- Secondary text below badge: "Design & Creative" in Lora italic, lighter weight
- This badge should feel like a "limited edition" sticker — slightly rotated 5-8 degrees counterclockwise adds energy

### Center Column (Hero) — Animated GIF Frames
- Show three distinct GIF stills arranged vertically or in a slight fan/stack
- GIF 1 (top, largest): A frame from the confetti burst — peak density moment with a few rectangles mid-rotation
- GIF 2 (middle): The side-eye moment — pupils hard right, one eyebrow slightly raised
- GIF 3 (bottom): The pulsing ring at max radius, clock at :05
- Each GIF still is shown in a rounded-square frame (like a Slack emoji preview)
- Subtle drop shadow beneath each frame: rgba(0,0,0,0.4)
- Optional: small Slack-style emoji label beneath each frame (:deploy-party: etc.)

### Right Column — Title Text
- Primary headline: "Custom Slack GIFs" in Poppins Bold, ~72-80px, color #faf9f5 (light)
- Secondary line: "with AI" in Poppins SemiBold, #d97757 (orange), slightly smaller
- Tertiary line: "slack-gif-creator" in Lora italic or monospace, #6a9bcc (blue), smaller still
- Spacing is generous — not crammed

### Bottom Strip — Install Command Pill
- Background pill: dark (#1f1e1d) with #d97757 orange border (1-2px)
- Text: `npx @smithery/cli@latest skill add anthropics/slack-gif-creator`
- Font: monospace (Courier New or similar), #faf9f5
- Keep this readable but it doesn't need to be the visual focus
- Small Smithery logo icon to the left of the text if available

### Background
- Base: #141413 (primary brand dark)
- Subtle texture: very faint diagonal grid or noise — adds depth without distraction
- Optional: faint orange glow (#d97757 at ~5% opacity) radiating from the center column

---

## Color Usage Summary

| Element | Color | Hex |
|---------|-------|-----|
| Background | Dark | #141413 |
| Primary text | Light | #faf9f5 |
| Accent / badge / highlights | Orange | #d97757 |
| Skill name / tech callouts | Blue | #6a9bcc |
| GIF confetti detail | Green | #788c5d |
| GIF confetti detail | Teal | #6a9bcc |
| GIF eye detail | Amber | #c87533 |

---

## Typography

| Use | Font | Weight | Style |
|-----|------|--------|-------|
| Primary headline | Poppins | Bold (700) | Normal |
| Secondary headline | Poppins | SemiBold (600) | Normal |
| Skill name | Lora | Regular (400) | Italic |
| Badge text | Poppins | Bold (700) | All caps |
| Install command | Monospace | Regular | Normal |

---

## Composition Principles

- **Visual hierarchy:** GIF stills should draw the eye first (center), then text (right), then badge (top-left)
- **Contrast:** All text must pass WCAG AA contrast on the dark background — test especially on the orange elements
- **Breathing room:** Leave whitespace around the GIF frames — don't crowd them with text or decorations
- **Motion suggestion:** Even though the thumbnail is static, the confetti still and the pulsing ring frame should imply animation. Choose frames at peak motion.
- **Size test:** Thumbnail should read clearly at 168x94px (YouTube search result size) — the three GIF stills should still be distinguishable

---

## What to Avoid

- No gradients that muddy the brand colors
- No white backgrounds — this is a dark-mode channel
- No stock photography or people — keep it tool/product focused
- No more than 4 font sizes — visual hierarchy requires restraint
- No emoji as design elements in the thumbnail itself (ironic given the episode topic — but emoji render poorly at thumbnail resolution)
- Do not center-align everything — the rule-of-thirds offset creates more dynamic tension
- Avoid yellow or red — they clash with the brand palette and don't encode well on YouTube's compression

---

## "SERIES A FINALE" Badge — Design Detail

This is the most unique element of this thumbnail versus the other Series A episodes. It signals closure and significance.

Suggested treatment:
- Orange (#d97757) filled rounded rectangle
- White text: "SERIES A FINALE" in Poppins Bold, 12-14px equivalent, all caps
- 5-8 degree counterclockwise rotation
- Position: upper-left, slightly overlapping the top edge of the leftmost GIF frame
- Optional: tiny checkmark icon or star before the text

This badge should feel earned — it's the fifteenth episode of a complete series. Make it feel like a season finale, not just another episode marker.
