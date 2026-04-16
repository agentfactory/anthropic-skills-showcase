# GIF Brief — Episode 15 Demo
# Three custom Slack GIFs for a remote engineering team

---

## Slack Sizing Specification

| Parameter | Value | Notes |
|-----------|-------|-------|
| Dimensions | 128 x 128 pixels | Square, no exceptions |
| Max file size | 2MB | Slack hard limit for custom emoji |
| Format | GIF | Not webm, not mp4, not apng |
| Loop | Infinite | Slack emoji always loop |
| Frame rate | 60-80ms per frame recommended | Slower = smaller file |
| Color depth | 128-256 colors | Reduce to 64 for smaller files |

**Note on the skill's output:** The `slack-gif-creator` skill generates HTML canvas animations (JavaScript). These render in any browser and can be screen-captured or exported to GIF using browser tooling, a canvas-to-GIF library, or a screen recording tool. The canvas approach lets you preview and refine the animation before committing to a static GIF export.

---

## GIF 1 — Deploy Party

**File name:** `deploy-party.gif`
**Purpose:** Team reaction for successful deploys, CI/CD green lights, and shipped features
**Tone:** Celebratory, energetic, satisfying

**Visual description:**
- Dark background (transparent or #0f1b15)
- Small rectangular confetti pieces falling from the top edge — mix of square and slightly elongated rectangles
- Each piece rotates slightly as it falls, creating natural tumbling motion
- Colors: green (#788c5d) and teal (#6a9bcc) — matches Anthropic brand palette
- After 18 frames of confetti, the word "SHIPPED" appears centered in white, bold, Poppins-style font
- Text holds for the final 6 frames before loop restarts
- Confetti continues falling during the text hold

**Technical spec:**
- Frame count: 24
- Frame duration: 60ms each
- Total duration: ~1.44 seconds per loop
- Canvas size: 128x128px
- Color palette: green, teal, white, dark background

**Prompt to use:**
```
Create a 128x128 Slack GIF called "deploy-party". Confetti explosion — small rectangles in green #788c5d and teal #6a9bcc raining down from the top, with some rotating as they fall. After 18 frames of confetti the word "SHIPPED" appears in white Poppins-style bold text in the center, holding for 6 frames. 24 frames total at 60ms each. Loop forever.
```

---

## GIF 2 — PR Review

**File name:** `pr-review.gif`
**Purpose:** Team reaction for PRs awaiting review, gently passive-aggressive nudge
**Tone:** Dry, understated, funny — the humor comes from the hold, not the motion

**Visual description:**
- Warm dark background (#2d1f0e — dark amber/brown, not pure black)
- Two large eyes centered in the frame, taking up most of the canvas
- Warm amber iris (#c87533), dark pupil, white sclera with subtle warmth
- No text, no background elements, no decorations
- Motion sequence:
  - Blink 1: Eyes close and open slowly (3-4 frames each direction)
  - Pause: Eyes hold open, looking forward (2 frames)
  - Blink 2: Same slow blink, eyes open
  - Pause: 2 frames open
  - Partial blink: Eyes begin to close but stop halfway — pupils shift hard right
  - Side-eye hold: 6 frames with pupils far right and a 2px eyebrow raise
  - Loop restart

**Technical spec:**
- Frame count: 20
- Frame duration: 80ms each
- Total duration: ~1.6 seconds per loop
- The side-eye hold at 80ms x 6 frames = 480ms — long enough to register as intentional

**Prompt to use (first pass):**
```
Create a 128x128 Slack GIF called "pr-review". Two large eyes centered on a warm dark background #2d1f0e. Eyes blink slowly twice, then on the third blink they don't close all the way — pupils shift hard to the right and hold. Warm amber iris color #c87533. No text. 20 frames at 80ms each. Loop.
```

**Refinement prompt (if side-eye hold is too brief):**
```
Update "pr-review": extend the side-eye hold from 2 frames to 6 frames, and add a very slight eyebrow raise on both eyes during the hold — just 2px upward shift on the brow arc. Keep everything else the same.
```

---

## GIF 3 — Meeting Alert

**File name:** `meeting-alert.gif`
**Purpose:** Team reaction for "meeting starting soon" alerts, time-sensitive nudges
**Tone:** Urgent but professional — reads as "heads up" not "PANIC"

**Visual description:**
- Dark background (#141413 — primary brand dark)
- A simple calendar icon centered in the frame — icon-weight strokes, not filled shapes
  - Rectangle outline for the calendar body
  - Two small tabs at the top (calendar binding holes)
  - A horizontal line for the date area
  - Minimal — readable at 128px
- Three concentric orange rings (#d97757) pulse outward from the center of the calendar
  - Rings expand outward and fade as they grow
  - Staggered timing so all three are visible simultaneously at different radii
  - Pulsing rhythm: approximately one new ring every 5 frames
- Clock face visible inside the calendar icon:
  - Clock hands start at 12:00 position
  - Rotate clockwise over frames 1-12
  - Land at the :05 position (minute hand pointing to 1)
  - Hold for 4 frames before loop restarts
- Color palette: dark background, orange rings (#d97757), white/light icon strokes

**Technical spec:**
- Frame count: 16
- Frame duration: 70ms each
- Total duration: ~1.12 seconds per loop
- The clock rotation + hold communicates "5 minutes" without any text needed

**Prompt to use:**
```
Create a 128x128 Slack GIF called "meeting-alert". A simple calendar icon centered on a dark background #141413. An orange ring #d97757 pulses outward from the calendar — three pulse rings, each fading as they expand. Inside the calendar icon, two clock hands rotate clockwise and land at the 5-minute position, then hold. 16 frames at 70ms each. Loop. Keep the design minimal — icon-weight strokes, not filled shapes.
```

---

## Export Notes

The skill outputs HTML canvas animations. To convert to GIF:

1. **Screen capture method (simplest):** Open the preview in Chrome, use a browser extension like "GIF Scrubber" or "GIFV" to capture the canvas animation. Works well for 128x128 at these frame rates.

2. **Canvas export method:** If the skill outputs a standalone HTML file, open it and run `canvas.toDataURL('image/gif')` in the browser console — or use a canvas-to-gif library like `gif.js` to render each frame programmatically.

3. **Screen recording method:** Record the browser preview at exactly 128x128 canvas size using QuickTime or OBS, then convert the mp4 to GIF using FFmpeg:
   ```
   ffmpeg -i recording.mp4 -vf "fps=15,scale=128:128" -loop 0 output.gif
   ```

For this demo, the screen capture method is the most visual for viewers.
