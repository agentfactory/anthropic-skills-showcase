/**
 * ElevenLabs voiceover generator for Episode 01.
 *
 * Reads ../script.md, splits the narration at "## SECTION [timestamp]" headers,
 * strips visual cues ([SCREEN: …], [B-ROLL: …], [ANIMATION: …]) and stage
 * directions, then calls ElevenLabs once per section and writes MP3 stems.
 *
 * Usage:
 *   ELEVENLABS_API_KEY=sk_...  ELEVENLABS_VOICE_ID=xxxx  npx tsx generate-vo.ts
 *   # re-render one section only:
 *   npx tsx generate-vo.ts --section cold-open
 *
 * Sections produced (in order):
 *   01-cold-open.mp3, 02-intro.mp3, 03-deep-dive.mp3,
 *   04-live-demo.mp3, 05-results.mp3, 06-wrap-up.mp3
 */

import { ElevenLabsClient } from "@elevenlabs/elevenlabs-js";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const API_KEY = process.env.ELEVENLABS_API_KEY;
const VOICE_ID = process.env.ELEVENLABS_VOICE_ID;
const MODEL_ID = process.env.ELEVENLABS_MODEL_ID ?? "eleven_turbo_v2_5";

if (!API_KEY) throw new Error("ELEVENLABS_API_KEY not set");
if (!VOICE_ID) throw new Error("ELEVENLABS_VOICE_ID not set — pick one via `elevenlabs voices list`");

const SECTION_MAP: Record<string, string> = {
  "COLD OPEN": "01-cold-open",
  INTRO: "02-intro",
  "SKILL DEEP DIVE": "03-deep-dive",
  "LIVE DEMO": "04-live-demo",
  "RESULTS + VARIATIONS": "05-results",
  "WRAP-UP": "06-wrap-up",
};

function parseScript(md: string): Array<{ section: string; slug: string; text: string }> {
  const lines = md.split(/\r?\n/);
  const sections: Array<{ section: string; slug: string; text: string }> = [];
  let current: { section: string; slug: string; text: string } | null = null;

  for (const raw of lines) {
    const h = raw.match(/^##\s+([A-Z][A-Z +\-]+)\s*\[/);
    if (h) {
      if (current) sections.push(current);
      const name = h[1].trim();
      const slug = SECTION_MAP[name];
      current = slug ? { section: name, slug, text: "" } : null;
      continue;
    }
    if (!current) continue;
    current.text += raw + "\n";
  }
  if (current) sections.push(current);

  return sections.map((s) => ({ ...s, text: cleanNarration(s.text) }));
}

function cleanNarration(raw: string): string {
  return raw
    // Drop visual cue lines entirely
    .replace(/^\s*\*\*\[[^\]]+\]\*\*\s*$/gm, "")
    .replace(/^\s*\[[^\]]+\]\s*$/gm, "")
    // Keep NARRATOR: lines but strip the prefix
    .replace(/^NARRATOR:\s*/gm, "")
    // Drop step subheaders like "### Step 1 — ..."
    .replace(/^###\s.*$/gm, "")
    // Drop inline bracket cues mid-line e.g. "**[SCREEN: ...]**"
    .replace(/\*\*\[[^\]]+\]\*\*/g, "")
    .replace(/\[[^\]]+\]/g, "")
    // Drop stage directions like "**Action:**" / "**Say:**" / "**Wait for:**"
    .replace(/^\s*\*\*(Action|Say|Wait for):\*\*.*$/gim, "")
    // Collapse blank lines
    .replace(/\n{2,}/g, "\n\n")
    .trim();
}

async function main() {
  const sectionFilter = process.argv.find((a) => a.startsWith("--section"))?.split("=")[1]
    ?? (process.argv.includes("--section") ? process.argv[process.argv.indexOf("--section") + 1] : undefined);

  const scriptPath = resolve(__dirname, "../script.md");
  const md = readFileSync(scriptPath, "utf8");
  const sections = parseScript(md);

  const outDir = resolve(__dirname);
  mkdirSync(outDir, { recursive: true });

  const client = new ElevenLabsClient({ apiKey: API_KEY! });

  for (const s of sections) {
    if (sectionFilter && !s.slug.includes(sectionFilter)) continue;

    const wordCount = s.text.split(/\s+/).filter(Boolean).length;
    console.log(`▶ ${s.slug}  (${s.section})  ${wordCount} words`);

    const audioStream = await client.textToSpeech.convert(VOICE_ID!, {
      text: s.text,
      modelId: MODEL_ID,
      outputFormat: "mp3_44100_128",
    });

    const chunks: Buffer[] = [];
    for await (const chunk of audioStream) chunks.push(Buffer.from(chunk));
    const outPath = resolve(outDir, `${s.slug}.mp3`);
    writeFileSync(outPath, Buffer.concat(chunks));
    console.log(`   → ${outPath}`);
  }

  console.log("✓ All sections rendered.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
