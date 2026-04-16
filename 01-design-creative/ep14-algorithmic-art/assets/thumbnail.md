# Thumbnail concept — Ep 14 algorithmic-art

**Dimensions:** 1280×720, <2 MB, JPG/PNG
**Style anchor:** Dark-mode brand palette, high-contrast headline, three live-art previews in rule-of-thirds layout.

## Layout (rule-of-thirds, portrait-left / art-right)

```
┌─────────────────────────────────────────────────────────────────────┐
│  BACKGROUND: #141413                                                │
│                                                                     │
│  LEFT THIRD                     CENTER + RIGHT TWO-THIRDS           │
│  ┌─────────────────────┐        ┌───────────────────────────────┐   │
│  │                     │        │  THREE ART PREVIEWS (stacked) │   │
│  │  GENERATE           │        │  ┌───────────────────────┐    │   │
│  │  LIVING ART         │        │  │  Flow Field preview   │    │   │
│  │  FROM A BRIEF       │        │  │  (earth tones, curved │    │   │
│  │                     │        │  │  vectors animating)   │    │   │
│  │  [orange underline] │        │  └───────────────────────┘    │   │
│  │                     │        │  ┌───────────────────────┐    │   │
│  │  EP 14              │        │  │  Recursive Tree       │    │   │
│  │  algorithmic-art    │        │  │  (spring green        │    │   │
│  │                     │        │  │  fractal, dark bg)    │    │   │
│  │  NO DEPENDENCIES    │        │  └───────────────────────┘    │   │
│  │  RUNS IN BROWSER    │        │  ┌───────────────────────┐    │   │
│  │  [small badge,      │        │  │  Particle Drift       │    │   │
│  │   green text,       │        │  │  (white/orange dots   │    │   │
│  │   dark pill bg]     │        │  │  on black)            │    │   │
│  └─────────────────────┘        │  └───────────────────────┘    │   │
│                                 └───────────────────────────────┘   │
│                                                                     │
│  BOTTOM STRIP: thin #d97757 orange line, full width, 4px height     │
└─────────────────────────────────────────────────────────────────────┘
```

## Elements

- **Background:** `#141413` (Anthropic dark). Subtle orange `#d97757` radial glow behind the art previews at 12% opacity, suggesting the pieces are lit from within.

- **Main headline:** "GENERATE LIVING ART FROM A BRIEF" — Poppins Black, 96pt, color `#faf9f5`, tight leading. Break as shown: three lines, left-aligned.

- **Orange underline accent:** 8px bar, 200px wide, `#d97757`, immediately below the headline.

- **Episode tag:** "EP 14 · algorithmic-art" — Poppins Medium, 36pt, color `#d97757`, below underline.

- **Capability badge:** Small dark pill shape, `#1e1e1c` background, 1px `#788c5d` (brand green) border. Text: "NO DEPS · RUNS IN BROWSER" — Poppins SemiBold, 22pt, `#788c5d`. Positioned below the episode tag with 16px margin.

- **Art previews (right two-thirds):** Three cropped screenshots stacked vertically with 8px gaps, each with a 1px `#d97757` orange border. Each preview is ~320×140px at thumbnail scale. Arrange:
  - Top: Flow Field (the earth-tone curved vectors — the most visually rich)
  - Middle: Recursive Tree (spring-green branching structure)
  - Bottom: Particle Drift (white/orange dots scattered on black — most distinctive silhouette)

- **Preview glow:** Each art preview has a very subtle orange outer glow (2px blur, 8% opacity) to reinforce the "luminous code" feel.

- **Bottom accent strip:** 4px solid `#d97757` line at the very bottom edge, full width. Matches the ep01 brand treatment.

## Color usage
| Element | Color | Usage |
|---------|-------|-------|
| Background | `#141413` | Canvas |
| Headline | `#faf9f5` | Primary text |
| Accent / borders | `#d97757` | Orange — energy, highlight |
| Episode tag | `#d97757` | Orange |
| Badge text + border | `#788c5d` | Green — technical credibility |
| Art preview borders | `#d97757` | Orange frame on each piece |

## What to avoid
- No gradients on the background (it kills the dark-mode feel).
- No generic "AI brain" imagery, glowing hands, neural network diagrams.
- No more than 3 text elements in the left column.
- Do not use screenshots of text — all three previews should be purely visual (the art itself, no code visible).
- No shocked or exaggerated facial expression — there is no presenter face on this thumbnail; the three art pieces are the visual hook.
- Do not crop the flow field at a moment when the vectors look like static noise — capture a frame where the curves are clearly flowing.

## Production
- Build in Figma at 2× (2560×1440), export at 1× for upload.
- For the art previews: take a screenshot of each piece at the most visually compelling moment. The flow field looks best after 3–4 seconds of animation. The tree looks best just after it finishes drawing. The particle system looks best with the cursor mid-canvas and particles scattered in an arc.
- Alternate: render the layout in Remotion at 1280×720 and export a still frame — reuse brand constants for color consistency across all episode thumbnails.
- The three previews should be real screenshots from the demo, not mockups — this reinforces authenticity.
