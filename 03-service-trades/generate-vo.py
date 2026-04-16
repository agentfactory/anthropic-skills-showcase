#!/usr/bin/env python3
"""
ElevenLabs voiceover generator for Service Trades episodes.

Reads an episode's script.md, validates the narration with Claude,
then sends each section to ElevenLabs and saves MP3 stems.

No npm. No npx. Just Python.

Usage:
    python generate-vo.py --episode ep02-xlsx-job-costing
    python generate-vo.py --episode ep02-xlsx-job-costing --section cold-open
    python generate-vo.py --episode ep02-xlsx-job-costing --skip-validation

API keys — add a .env file next to this script:
    ELEVENLABS_API_KEY=sk_...
    ELEVENLABS_VOICE_ID=<voice id from elevenlabs.io>
    ELEVENLABS_MODEL_ID=eleven_turbo_v2_5   (optional, this is the default)
    ANTHROPIC_API_KEY=sk-ant-...            (optional, used for script validation)

Install deps (one-time):
    pip install requests
"""

import os
import sys
import re
import argparse
from pathlib import Path

try:
    import requests
except ImportError:
    sys.exit("Missing dependency: run  pip install requests  then try again.")


# ---------------------------------------------------------------------------
# Config
# ---------------------------------------------------------------------------

def load_env(path: Path):
    if not path.exists():
        return
    for line in path.read_text(encoding="utf-8").splitlines():
        m = re.match(r"^([^#=\s][^=]*)=(.*)$", line)
        if m:
            os.environ.setdefault(m.group(1).strip(), m.group(2).strip())


load_env(Path(__file__).parent / ".env")

ELEVENLABS_API_KEY = os.environ.get("ELEVENLABS_API_KEY")
ELEVENLABS_VOICE_ID = os.environ.get("ELEVENLABS_VOICE_ID")
MODEL_ID = os.environ.get("ELEVENLABS_MODEL_ID", "eleven_turbo_v2_5")
ANTHROPIC_API_KEY = os.environ.get("ANTHROPIC_API_KEY")

SECTION_MAP = {
    "COLD OPEN":           "01-cold-open",
    "INTRO":               "02-intro",
    "SKILL DEEP DIVE":     "03-deep-dive",
    "LIVE DEMO":           "04-live-demo",
    "RESULTS + VARIATIONS":"05-results",
    "WRAP-UP":             "06-wrap-up",
}


# ---------------------------------------------------------------------------
# Script parsing
# ---------------------------------------------------------------------------

def parse_script(md: str) -> list[dict]:
    sections = []
    current = None

    for line in md.splitlines():
        m = re.match(r"^##\s+([A-Z][A-Z +\-]+)\s*\[", line)
        if m:
            if current:
                sections.append(current)
            name = m.group(1).strip()
            slug = SECTION_MAP.get(name)
            current = {"section": name, "slug": slug, "text": ""} if slug else None
            continue
        if current is not None:
            current["text"] += line + "\n"

    if current:
        sections.append(current)

    return [
        {**s, "text": clean_narration(s["text"])}
        for s in sections
        if s["slug"]
    ]


def clean_narration(raw: str) -> str:
    text = raw
    # Drop full visual-cue lines: **[SCREEN: ...]** or [B-ROLL: ...]
    text = re.sub(r"^\s*\*\*\[[^\]]+\]\*\*\s*$", "", text, flags=re.MULTILINE)
    text = re.sub(r"^\s*\[[^\]]+\]\s*$", "", text, flags=re.MULTILINE)
    # Strip NARRATOR: prefix
    text = re.sub(r"^NARRATOR:\s*", "", text, flags=re.MULTILINE)
    # Drop step subheaders (### Step 1 — ...)
    text = re.sub(r"^###\s.*$", "", text, flags=re.MULTILINE)
    # Drop inline cues mid-sentence
    text = re.sub(r"\*\*\[[^\]]+\]\*\*", "", text)
    text = re.sub(r"\[[^\]]+\]", "", text)
    # Drop stage directions (Action: / Say: / Wait for:)
    text = re.sub(
        r"^\s*\*\*(Action|Say|Wait for):\*\*.*$", "", text,
        flags=re.MULTILINE | re.IGNORECASE,
    )
    # Collapse excess blank lines
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


# ---------------------------------------------------------------------------
# Script validation via Claude
# ---------------------------------------------------------------------------

def validate_section(section_name: str, text: str) -> tuple[bool, str]:
    """
    Sends a narration section to Claude and checks it is clean for voiceover.
    Returns (passed: bool, feedback: str).
    """
    if not ANTHROPIC_API_KEY:
        return True, "Skipped — no ANTHROPIC_API_KEY in .env"

    prompt = (
        f"You are reviewing a voiceover script section for a YouTube video about "
        f"business software for service industry owners.\n\n"
        f"Section: {section_name}\n\n"
        f"Script:\n---\n{text}\n---\n\n"
        f"Check for:\n"
        f"1. Stage directions or visual cues still present "
        f"(e.g. [SCREEN: ...], [B-ROLL: ...], Action:, Say:, Wait for:)\n"
        f"2. Markdown that would sound odd when spoken aloud "
        f"(## headers, **bold**, bullet dashes at the start of a sentence)\n"
        f"3. Incomplete sentences or obvious cut-offs\n"
        f"4. Anything robotic or confusing when read aloud\n\n"
        f"Reply with exactly one of:\n"
        f"PASS\n"
        f"or:\n"
        f"ISSUES FOUND:\n- [issue]\n- [issue]\n\n"
        f"Be brief."
    )

    resp = requests.post(
        "https://api.anthropic.com/v1/messages",
        headers={
            "x-api-key": ANTHROPIC_API_KEY,
            "anthropic-version": "2023-06-01",
            "content-type": "application/json",
        },
        json={
            "model": "claude-haiku-4-5-20251001",
            "max_tokens": 512,
            "messages": [{"role": "user", "content": prompt}],
        },
        timeout=30,
    )
    resp.raise_for_status()
    result = resp.json()["content"][0]["text"].strip()
    passed = result.upper().startswith("PASS")
    return passed, result


# ---------------------------------------------------------------------------
# ElevenLabs audio generation
# ---------------------------------------------------------------------------

def generate_audio(text: str, out_path: Path):
    resp = requests.post(
        f"https://api.elevenlabs.io/v1/text-to-speech/{ELEVENLABS_VOICE_ID}",
        headers={
            "xi-api-key": ELEVENLABS_API_KEY,
            "Content-Type": "application/json",
        },
        json={
            "text": text,
            "model_id": MODEL_ID,
            "output_format": "mp3_44100_128",
        },
        timeout=120,
    )
    resp.raise_for_status()
    out_path.write_bytes(resp.content)


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    parser = argparse.ArgumentParser(
        description="Validate a Service Trades episode script, then generate ElevenLabs MP3 stems."
    )
    parser.add_argument(
        "--episode", required=True,
        help="Episode folder name, e.g. ep02-xlsx-job-costing",
    )
    parser.add_argument(
        "--section",
        help="Only process this section slug, e.g. cold-open",
    )
    parser.add_argument(
        "--skip-validation", action="store_true",
        help="Skip Claude script validation and send directly to ElevenLabs",
    )
    args = parser.parse_args()

    # Guards
    if not ELEVENLABS_API_KEY:
        sys.exit("ELEVENLABS_API_KEY not set — add it to .env next to this script")
    if not ELEVENLABS_VOICE_ID:
        sys.exit("ELEVENLABS_VOICE_ID not set — add it to .env (find your voice ID at elevenlabs.io)")

    script_path = Path(__file__).parent / args.episode / "script.md"
    if not script_path.exists():
        sys.exit(f"script.md not found at: {script_path}")

    md = script_path.read_text(encoding="utf-8")
    sections = parse_script(md)

    if not sections:
        sys.exit("No sections found — make sure script.md uses ## SECTION NAME [timestamp] headers")

    # Filter to a single section if requested
    if args.section:
        sections = [s for s in sections if args.section in s["slug"]]
        if not sections:
            sys.exit(f"Section '{args.section}' not found. Available: {[s['slug'] for s in parse_script(md)]}")

    print(f"\nEpisode : {args.episode}")
    print(f"Sections: {len(sections)}")

    # --- Validation pass ---
    if not args.skip_validation:
        print("\nValidating script with Claude before sending to ElevenLabs...\n")
        all_pass = True

        for s in sections:
            passed, feedback = validate_section(s["section"], s["text"])
            status = "PASS" if passed else "FAIL"
            word_count = len(s["text"].split())
            print(f"  [{status}] {s['slug']}  ({s['section']})  {word_count} words")
            if not passed:
                all_pass = False
                for line in feedback.splitlines():
                    print(f"         {line}")

        if not all_pass:
            print()
            sys.exit(
                "Script validation failed. Fix the issues above, then re-run.\n"
                "To skip validation: add --skip-validation"
            )

        print("\nAll sections passed. Sending to ElevenLabs...\n")
    else:
        print("\nValidation skipped (--skip-validation). Sending to ElevenLabs...\n")

    # --- Audio generation pass ---
    out_dir = Path(__file__).parent / args.episode / "vo"
    out_dir.mkdir(parents=True, exist_ok=True)

    for s in sections:
        word_count = len(s["text"].split())
        print(f"Generating: {s['slug']}  ({s['section']})  {word_count} words")
        out_path = out_dir / f"{s['slug']}.mp3"
        generate_audio(s["text"], out_path)
        print(f"  Saved → {out_path}\n")

    print("Done. All stems saved to vo/")


if __name__ == "__main__":
    main()
