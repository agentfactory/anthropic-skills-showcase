# DaVinci Resolve — Master Timeline Map (Ep 01)

Project settings: **1920×1080, 30 fps, linear time code**, master: ProRes 422 or H.264 1080p @ 20 Mbps.

## Bins
- `01-screen/` → `raw/screen-rec.mp4`
- `02-motion/` → everything in `remotion/out/` (intro, endcard, lowerthird, section-transition, keystroke-*)
- `03-vo/` → `vo/01-cold-open.mp3` … `vo/06-wrap-up.mp3`
- `04-music/` → chosen track, trimmed to 12:30

## Track layout

| Track | Contents |
|---|---|
| **V3** | Intro (00:00) · EndCard (11:00) |
| **V2** | Lower thirds, SectionTransition clips at each seam, keystroke pills overlaid on screen rec |
| **V1** | Screen recording (3:30–9:30) + cold-open cut-down + B-roll |
| **A1** | ElevenLabs VO stems, one per section |
| **A2** | Music bed at −20 dB LUFS, ducked under A1 |
| **A3** | Screen-rec original audio (muted unless a UI sound matters) |

## Shot list

| IN | OUT | Dur | V1 | V2 / V3 | A1 |
|---|---|---|---|---|---|
| 00:00 | 00:30 | 0:30 | Cold-open split-screen (cut from screen rec + output file) | — | `01-cold-open.mp3` |
| 00:30 | 00:35 | 0:05 | — | **V3:** `intro.mov` | continues |
| 00:35 | 01:30 | 0:55 | B-roll: Smithery page scroll + typing montage | LowerThird at 00:45 | `02-intro.mp3` |
| 01:30 | 01:31 | 0:01 | — | **V2:** `section-transition.mov` | — |
| 01:31 | 03:30 | 1:59 | Terminal install + VS Code SKILL.md walkthrough | Keystroke pill on install cmd | `03-deep-dive.mp3` |
| 03:30 | 03:31 | 0:01 | — | `section-transition.mov` | — |
| 03:31 | 09:30 | 5:59 | `screen-rec.mp4` (cut into 6 step segments matching walkthrough.md) | Keystroke pills on each typed command | `04-live-demo.mp3` |
| 09:30 | 09:31 | 0:01 | — | `section-transition.mov` | — |
| 09:31 | 11:00 | 1:29 | Before/after split + 3 variation cards | — | `05-results.mp3` |
| 11:00 | 11:10 | 0:10 | — | **V3:** `endcard.mov` | — |
| 11:10 | 12:00 | 0:50 | End-card held + outro beat | — | `06-wrap-up.mp3` |

## Sync checks
1. Place VO stems first, stretch visuals to match — VO is the timing spine.
2. Every `section-transition.mov` lands exactly on the section boundary; crossfade audio −3 dB across the seam.
3. Lower third `skill-creator / Denis` appears once around 00:45 for 4 s.
4. Any on-camera mistake under 0.5 s: jump cut. Over 0.5 s: retake.

## Audio finishing
- VO (A1): EQ hi-pass 80 Hz, de-ess, normalize to −14 LUFS integrated, −1 dBTP ceiling.
- Music (A2): sidechain-duck to A1 at −18 dB when VO is present.
- Master bus: limiter at −1 dBTP, target LUFS −14.

## Export
- Codec: H.264, 1920×1080, 30 fps, 20 Mbps target bitrate
- Audio: AAC 320 kbps stereo
- Filename: `ep01-skill-creator-final.mp4`
- Location: `../` (episode root)
