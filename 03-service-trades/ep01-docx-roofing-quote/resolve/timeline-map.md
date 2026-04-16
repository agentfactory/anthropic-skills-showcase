# DaVinci Resolve — Master Timeline Map (Ep C01)

Project settings: **1920×1080, 30 fps, linear time code**, master: ProRes 422 or H.264 1080p @ 20 Mbps.

## Bins
- `01-screen/` → `raw/screen-rec.mp4` (Claude Code terminal + Word document output)
- `02-broll/` → job site footage: contractor on roof, phone notes, truck cab, Word doc on laptop
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
| 00:00 | 00:30 | 0:30 | **Split-screen cold open**: left = phone Notes app with raw inspection shorthand · right = finished Word quote scrolling (pre-recorded) | — | `01-cold-open.mp3` |
| 00:30 | 00:35 | 0:05 | — | **V3:** `intro.mov` | continues |
| 00:35 | 01:30 | 0:55 | **B-roll**: contractor on roof (inspection) → back in truck → laptop open, Smithery page scrolling | LowerThird "docx / Denis" at 00:45 for 4s | `02-intro.mp3` |
| 01:30 | 01:31 | 0:01 | — | **V2:** `section-transition.mov` | — |
| 01:31 | 03:30 | 1:59 | Terminal install command · VS Code SKILL.md walkthrough · scroll through capability sections | Keystroke pill on install cmd | `03-deep-dive.mp3` |
| 03:30 | 03:31 | 0:01 | — | `section-transition.mov` | — |
| 03:31 | 09:30 | 5:59 | `screen-rec.mp4` — cut into 6 step segments per walkthrough.md | Keystroke pills on each typed prompt segment | `04-live-demo.mp3` |
| 09:30 | 09:31 | 0:01 | — | `section-transition.mov` | — |
| 09:31 | 11:00 | 1:29 | 3 variation cards (change order · sub SOW · maintenance agreement) — quick screen rec clips | — | `05-results.mp3` |
| 11:00 | 11:10 | 0:10 | — | **V3:** `endcard.mov` | — |
| 11:10 | 12:00 | 0:50 | End-card held + outro beat | — | `06-wrap-up.mp3` |

## Screen recording segments (Step 4 — 03:31–09:30)

| Segment | IN | OUT | What's on screen |
|---|---|---|---|
| Step 1 — Input review | 03:31 | 04:30 | Text editor: `inspection-notes.md` scrolling at reading pace |
| Step 2 — Invoke | 04:30 | 05:30 | Claude terminal: prompt being typed character by character |
| Step 3 — Process | 05:30 | 07:00 | Claude response streaming — reasoning visible, pricing math highlighted |
| Step 4 — Review output | 07:00 | 08:00 | Word document open: slow scroll header → scope → materials table → pricing → signature |
| Step 5 — Iterate | 08:00 | 09:00 | Claude terminal: follow-up prompt + v2 document opening |
| Step 6 — Final | 09:00 | 09:30 | Side-by-side: inspection-notes.md (left) · finished Word doc (right) |

## B-roll shot list

| Shot | Description | Duration needed |
|---|---|---|
| BRoll-01 | Contractor walking hip roof perimeter, checking flashing | 15s |
| BRoll-02 | Close-up: phone screen showing Notes app with shorthand | 8s |
| BRoll-03 | Contractor in truck cab, laptop open on passenger seat | 10s |
| BRoll-04 | Clock or watch showing late afternoon time | 5s |
| BRoll-05 | Generic competitor quote — messy Word doc, lump sum | 8s (use screen rec) |

## Cold open specific cut (00:00–00:30)

Two-panel split with hard diagonal divide — record these separately:
- **Left panel** (5s): Screen record of phone Notes app showing the raw inspection notes. Zoom to legible.
- **Right panel** (10s): Slow scroll of the finished Word document in Word — from Ridge Pro header down to signature line.
- **Middle**: Animated orange diagonal divider (Remotion or DaVinci Fusion).
- Hold split for remaining time, then cut to black → intro animation.

## Sync checks
1. Place VO stems first, stretch visuals to match — VO is the timing spine.
2. Every `section-transition.mov` lands exactly on the section boundary; crossfade audio −3 dB across the seam.
3. Lower third `docx / Denis` appears once around 00:45 for 4s.
4. Any on-camera mistake under 0.5s: jump cut. Over 0.5s: retake.
5. Step 3 (process watch): slow down or speed up screen rec to match VO timing — the "translate shorthand" moment should hit at exactly the word "translating" in the narration.

## Audio finishing
- VO (A1): EQ hi-pass 80 Hz, de-ess, normalize to −14 LUFS integrated, −1 dBTP ceiling.
- Music (A2): sidechain-duck to A1 at −18 dB when VO is present.
- Master bus: limiter at −1 dBTP, target LUFS −14.

## Export
- Codec: H.264, 1920×1080, 30 fps, 20 Mbps target bitrate
- Audio: AAC 320 kbps stereo
- Filename: `ep-c01-docx-roofing-quote-final.mp4`
- Location: `../` (episode root)
