# Thumbnail concept — Ep 07 competitive-analysis

**Dimensions:** 1280×720, <2 MB, JPG/PNG
**Style anchor:** Dark-mode brand palette, high-contrast headline, one face, one data artifact

---

## Layout (rule-of-thirds)

```
┌───────────────────────────────────────────────────────────────────────┐
│  BACKGROUND: #141413                                                  │
│                                                                       │
│   LEFT THIRD (⅓ width)         CENTER (⅓ width)   RIGHT THIRD (⅓)   │
│   ┌──────────────────┐          ┌────────────────┐  ┌─────────────┐  │
│   │                  │          │  Mini 3-column │  │             │  │
│   │  Headline:       │          │  table visual  │  │  Presenter  │  │
│   │                  │          │  (simplified): │  │  (face,     │  │
│   │  MAP YOUR        │          │                │  │  3/4 angle, │  │
│   │  MARKET          │          │  Asana  │ Mon  │  │  looking    │  │
│   │  IN MINUTES      │          │  ─────────────  │  │  toward     │  │
│   │                  │          │  ✓    │  ✓   │  │  center)    │  │
│   │ [orange bar]     │          │  ✓    │  ✗   │  │             │  │
│   │                  │          │  GAP  │  GAP │  │             │  │
│   │ EP 07 ·          │          │  [orange glow  │  │             │  │
│   │ competitive-     │          │   on GAP row]  │  │             │  │
│   │ analysis         │          └────────────────┘  └─────────────┘  │
│   └──────────────────┘                                                │
│                                                                       │
│   Orange #d97757 glow behind presenter at 20% opacity (radial)       │
└───────────────────────────────────────────────────────────────────────┘
```

---

## Elements

**Background**
- Base fill: `#141413` (Anthropic dark)
- Subtle horizontal gradient: pure black at left edge, slightly warm at right (no more than 5% shift)
- Faint orange `#d97757` radial glow behind presenter at 18–22% opacity

**Main headline**
- "MAP YOUR MARKET IN MINUTES" — Poppins Black (900 weight), ~110 pt
- Color: `#faf9f5` (Anthropic light)
- Tight leading — three lines, no wider than the left third
- Subtle drop shadow at 8% opacity, 2px blur

**Orange accent bar**
- 8 px solid bar, `#d97757`, 240 px wide
- Sits between the headline and episode tag
- Left-aligned with headline

**Episode tag**
- "EP 07 · competitive-analysis" — Poppins Medium, 38 pt
- Color: `#d97757`
- Below orange bar, left-aligned

**Center data artifact**
- A simplified, stylized 3-column comparison table (not full detail — just 3–4 rows)
- Column headers: Asana | Monday | Linear
- Final row labeled "GAP" with orange fill on all three cells (`#d97757` at 30% opacity)
- Table border: `#6a9bcc` at 60% opacity (blue, subtle)
- Row dividers: thin 1px lines in `#faf9f5` at 15% opacity
- Font: Poppins Regular, 24 pt inside cells — must be legible at thumbnail size
- The "GAP" row cells should have a faint orange glow to draw the eye

**Presenter**
- Cut-out portrait, right third, 3/4 angle looking toward center
- Warm key light, subtle orange rim light on left shoulder
- No obvious background bleed — clean matte edge
- Expression: focused, slightly forward lean, not shocked or exaggerated

**Optional corner badge**
- Small orange pill, top-right corner, above presenter's head
- Text: "SERIES D" in `#faf9f5`, 26 pt Poppins SemiBold
- Pill background: `#d97757`, rounded corners 8px

---

## What to avoid

- No red arrows pointing at things
- No shocked or exaggerated facial expression
- No more than 3 distinct text elements (headline, episode tag, optional corner badge)
- No generic AI imagery (neural network graphics, glowing brains, digital particles)
- Do not make the comparison table too detailed — it should read as "data" not as actual content
- No gradients that look like synthwave or cyberpunk (that's a different vibe)
- The orange glow on the "GAP" row is an accent, not the dominant visual

---

## Production notes

- Build in Figma at 2× (2560×1440), export at 1× (1280×720) for upload
- Alternate: render in Remotion at 1280×720 and export a still frame — reuse brand constants for color consistency
- A/B test consideration: a version replacing "MAP YOUR MARKET" with "KNOW YOUR COMPETITION" — run both for 48 hours and keep the higher CTR
- The table artifact in the center is the key visual differentiator from other episodes — it signals "data" and "analysis" at a glance
