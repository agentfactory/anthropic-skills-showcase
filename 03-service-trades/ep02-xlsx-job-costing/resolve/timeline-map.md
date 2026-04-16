# DaVinci Resolve — Master Timeline Map (Ep C02)

Project settings: **1920×1080, 30 fps, linear time code**, master: ProRes 422 or H.264 1080p @ 20 Mbps.

## Bins
- `01-screen/` → `raw/screen-rec.mp4` (Claude Code terminal + Excel workbook open)
- `02-broll/` → landscaping footage: truck loading at dawn, crew on site, contractor in truck cab with phone, lawn mower close-up
- `03-motion/` → everything in `remotion/out/` (intro, endcard, lowerthird, section-transition, keystroke-*)
- `04-vo/` → `vo/01-cold-open.mp3` … `vo/06-wrap-up.mp3`
- `05-music/` → chosen track, trimmed to 12:30

## Track layout

| Track | Contents |
|---|---|
| **V3** | Intro (00:00) · EndCard (11:00) |
| **V2** | Lower thirds, SectionTransition clips at each seam, keystroke pills overlaid on screen rec |
| **V1** | Screen recording (3:30–9:30) + cold-open split-screen + B-roll footage |
| **A1** | ElevenLabs VO stems, one per section |
| **A2** | Music bed at −20 dB LUFS, ducked under A1 |
| **A3** | Screen-rec original audio (muted unless a UI sound matters) |

## Shot list

| IN | OUT | Dur | V1 | V2 / V3 | A1 |
|---|---|---|---|---|---|
| 00:00 | 00:30 | 0:30 | **Split-screen cold open**: left = phone Notes app with April job log · right = finished Excel workbook scrolling (pre-recorded) | — | `01-cold-open.mp3` |
| 00:30 | 00:35 | 0:05 | — | **V3:** `intro.mov` | continues |
| 00:35 | 01:30 | 0:55 | **B-roll**: landscaper loading truck at dawn → crew on site → end of week in truck cab with phone | LowerThird "xlsx / Denis" at 00:45 for 4s | `02-intro.mp3` |
| 01:30 | 01:31 | 0:01 | — | **V2:** `section-transition.mov` | — |
| 01:31 | 03:30 | 1:59 | Terminal install command · VS Code SKILL.md walkthrough · scroll through three capability sections | Keystroke pill on install cmd | `03-deep-dive.mp3` |
| 03:30 | 03:31 | 0:01 | — | `section-transition.mov` | — |
| 03:31 | 09:30 | 5:59 | `screen-rec.mp4` — cut into 6 step segments per walkthrough.md | Keystroke pills on each typed prompt segment | `04-live-demo.mp3` |
| 09:30 | 09:31 | 0:01 | — | `section-transition.mov` | — |
| 09:31 | 11:00 | 1:29 | 3 variation workbooks (parts tracker · crew time sheet · annual summary) — quick screen rec clips | — | `05-results.mp3` |
| 11:00 | 11:10 | 0:10 | — | **V3:** `endcard.mov` | — |
| 11:10 | 12:00 | 0:50 | End-card held + outro beat | — | `06-wrap-up.mp3` |

## Screen recording segments (03:31–09:30)

| Segment | IN | OUT | What's on screen |
|---|---|---|---|
| Step 1 — Input review | 03:31 | 04:30 | Text editor: `april-jobs-notes.md` scrolling at reading pace — job lines first, then costs section |
| Step 2 — Invoke | 04:30 | 05:30 | Claude terminal: full prompt being typed character by character |
| Step 3 — Process | 05:30 | 07:00 | Claude response streaming — highlight Henderson parsing moment, then service category assignment |
| Step 4 — Review output | 07:00 | 08:00 | Excel open: Sheet 1 slow scroll → Sheet 2 chart → Sheet 3 outstanding tracker |
| Step 5 — Iterate | 08:00 | 09:00 | Claude terminal: Days Outstanding follow-up prompt + updated Sheet 3 |
| Step 6 — Final | 09:00 | 09:30 | Side-by-side: april-jobs-notes.md (left) · greenPro-april-2026.xlsx Sheet 1 (right) |

## B-roll shot list

| Shot | Description | Duration needed |
|---|---|---|
| BRoll-01 | Landscaper loading mowers and gas cans into truck before sunrise | 10s |
| BRoll-02 | Crew trimming and edging a residential property | 12s |
| BRoll-03 | Contractor in truck cab, phone in hand, typing notes | 8s |
| BRoll-04 | Close-up: hands on phone screen, notes app with job shorthand visible | 6s |
| BRoll-05 | Generic messy spreadsheet — unformatted Excel dump, overflowing columns | 8s (use screen rec) |

## Cold open specific cut (00:00–00:30)

Two-panel split with hard diagonal divide — record separately:
- **Left panel** (6s): Screen record of phone Notes app showing the April job log. Zoom to legible font.
- **Right panel** (10s): Slow scroll of the finished Excel workbook Sheet 1 — from header down through the jobs table to the summary row, then quick flash of the Sheet 2 bar chart.
- **Divider**: Animated orange diagonal line (Remotion or DaVinci Fusion).
- Hold split for remaining time, then cut to black → intro animation.

## Key visual moments to nail

1. **Step 3 — Henderson parsing moment**: When Claude resolves "half paid $250 bal $250 owed" into Status: PARTIAL + Amount Due: $250 — zoom callout on that output line (orange border per brand spec)
2. **Step 4 — Summary row**: Pause on Revenue $7,480 / Margin 71.9% — lower third or zoom callout to make the number legible
3. **Step 4 — Sheet 2 chart**: Let the chart animate in naturally if Excel animates it; otherwise zoom cut to the chart then back to the table

## Sync checks
1. Place VO stems first, stretch visuals to match — VO is the timing spine.
2. Every `section-transition.mov` lands exactly on the section boundary; crossfade audio −3 dB across the seam.
3. Lower third "xlsx / Denis" appears once around 00:45 for 4s.
4. Any on-camera mistake under 0.5s: jump cut. Over 0.5s: retake.
5. Step 3 (process watch): slow down or speed up screen rec to match VO timing — the "Henderson" parsing moment should hit at exactly that word in the narration.

## Audio finishing
- VO (A1): EQ hi-pass 80 Hz, de-ess, normalize to −14 LUFS integrated, −1 dBTP ceiling.
- Music (A2): sidechain-duck to A1 at −18 dB when VO is present.
- Master bus: limiter at −1 dBTP, target LUFS −14.

## Export
- Codec: H.264, 1920×1080, 30 fps, 20 Mbps target bitrate
- Audio: AAC 320 kbps stereo
- Filename: `ep-c02-xlsx-job-costing-final.mp4`
- Location: `../` (episode root)
