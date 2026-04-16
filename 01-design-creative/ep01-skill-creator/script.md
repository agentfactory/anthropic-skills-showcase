# Episode 01: skill-creator — Teach Claude to Remember How You Work

**Series:** A — Design & Creative | **Folder:** `01-design-creative/` | **Skill:** anthropics/skill-creator | **Duration:** ~12 min
**Skill URL:** https://smithery.ai/skills/anthropics/skill-creator
**Target Audience:** Small and medium business owners and their teams — no tech experience needed
**Use Case:** Build a meeting-notes-formatter that turns any messy transcript into a clean summary, action items, and decisions — automatically, every time.

---

## COLD OPEN [0:00–0:30]

**[SCREEN: Split-screen — left: a wall of unstructured text scrolling, the way a meeting recording tool spits it out — no sections, no names, just run-on sentences; right: the same meeting, clean and organized — Summary at the top, then Action Items with owner names, then Decisions with context]**

NARRATOR: What if every time you dropped a messy meeting transcript into Claude, it came back perfectly organized — summary, action items, who's doing what — every single time, automatically, without you having to explain anything?

**[SCREEN: Quick montage — 3 clips, 3 seconds each — Clip 1: Someone typing a simple message into Claude's chat window · Clip 2: Claude instantly recognizing the transcript and organizing it · Clip 3: The clean output on screen, ready to send to the team]**

NARRATOR: That's what a skill does. In the next twelve minutes, I'll build one from scratch — and you'll know how to build your own. Let's go.

**[ANIMATION: Orange line wipe transition]**

---

## INTRO [0:30–1:30]

**[ANIMATION: 5-sec channel intro — "Anthropic Skills Showcase" logo reveal on dark background, orange accent]**

NARRATOR: Welcome to the Anthropic Skills Showcase. I'm going through all 95 official Claude skills, one at a time, and today we're starting with the most important one — skill-creator. This is the skill that lets you teach Claude new tricks.

**[SCREEN: Smithery.ai skill-creator page scrolls slowly — highlight install count: 1,113]**

NARRATOR: Over eleven hundred people have already installed this one. And once you understand what it does, that number makes complete sense.

Here's the basic idea. Right now, if you want Claude to format your meeting notes a certain way, you have to explain it every single time you open a new conversation. Every time. Same instructions, over and over.

**[B-ROLL: Someone typing the same long paragraph of instructions into Claude — clearly doing this for the third time, visibly frustrated]**

NARRATOR: Skills fix that. A skill is a set of standing instructions you give Claude once. From that point on, Claude remembers how you like things done and just does it — no re-explaining required.

Think of it like training a new employee. You walk through the process together once, you write it down, and after that they just know. You don't explain it again every morning.

**[ANIMATION: Simple two-box diagram — "Explain it once" → arrow → "Claude does it right every time after that"]**

NARRATOR: skill-creator is the tool that helps you write those instructions properly, so Claude gets it right. Let's see how it works.

**[ANIMATION: Orange line wipe]**

---

## SKILL DEEP DIVE [1:30–3:00]

**[SCREEN: Browser opens to smithery.ai/skills/anthropics/skill-creator]**

NARRATOR: First, we add this skill to Claude. Head to Smithery — that's the official directory for Claude skills, think of it like an app store — and find skill-creator.

**[SCREEN: Cursor moves to the "Add to Claude" button on the Smithery skill page]**

NARRATOR: Click "Add to Claude." That's it. No passwords, no technical setup, no copying and pasting mysterious text. Smithery talks directly to your Claude Desktop App and handles everything.

**[SCREEN: Claude Desktop App comes to the foreground — a simple confirmation message appears]**

NARRATOR: Claude confirms the skill is installed. From this moment on, whenever you ask Claude to help you build a new skill, it knows exactly what to do.

**[SCREEN: Simple diagram — "Before" column: person re-typing the same instructions into Claude every day; "After" column: person types once and Claude just handles it going forward]**

NARRATOR: So what is a skill, really? It's just a plain English description of a process. You give it a name, you describe what it's for, and you explain what you want Claude to do. That's it. No coding. Nothing technical you need to worry about — skill-creator handles the behind-the-scenes stuff automatically.

The one thing that makes a skill work well is being specific about *when* to use it. The clearer you are — "use this when someone pastes in meeting notes from Otter or Zoom" — the better Claude gets at recognizing the situation and handling it without being asked.

**[ANIMATION: Three-box diagram — "You describe the situation" → "Claude recognizes it" → "Claude handles it automatically"]**

NARRATOR: That's the whole idea. Now let's build one.

**[ANIMATION: Orange line wipe]**

---

## LIVE DEMO [3:00–9:30]

**[SCREEN: Claude Desktop App, full screen]**

### Step 1 — Show the problem [3:00–4:00]

**[SCREEN: A raw meeting transcript open in a basic text window — scrolling through it. It's a wall of text with no structure, no speaker labels, no sections. Just sentences running into each other the way recording tools produce them.]**

NARRATOR: Here's what we're working with. This is a real meeting transcript — the kind that comes out of a recording tool like Otter or Fathom, or even just from someone's hand-typed notes during a call. It's a mess. Nobody wants to read this. Nobody's going to follow up on anything buried in here.

**[SCREEN: Pause on a particularly chaotic section of the transcript]**

NARRATOR: By the end of this demo, every time anyone on your team drops a transcript like this into Claude, it's going to come back organized — a clean summary at the top, action items with names attached, and the key decisions with the reasoning behind them. Same output, every time, automatically.

### Step 2 — Ask Claude to build the skill [4:00–5:00]

**[SCREEN: Claude Desktop App chat window — start a fresh conversation]**

NARRATOR: I open Claude and I just... talk to it. No special commands. No technical language. I just describe the problem I have and the result I want.

**[SCREEN: The following message types out, word by word:]**

> I want to build a skill for dealing with messy meeting notes. Every time someone pastes in a raw transcript from a meeting recording, I want Claude to automatically organize it into three sections: a short summary of what was discussed, a list of action items with who's responsible for each one, and a list of the decisions that were made. Can you help me build that?

NARRATOR: That's it. Plain English. I'm not doing anything technical — I'm just describing a problem I have, the way I'd describe it to anyone.

### Step 3 — Claude asks the right questions [5:00–6:30]

**[SCREEN: Claude's response appears — it's asking a few clarifying questions before building anything]**

NARRATOR: Here's what's worth paying attention to. Claude doesn't just guess and start building. It asks me a few questions first — because the skill is only as good as the details behind it.

**[SCREEN: Zoom in on Claude's questions, orange callout box around them]**

NARRATOR: "Should action items include who's responsible and when it's due, or just what needs to get done?" "For decisions — do you want just what was decided, or also why the team went that way?" These are exactly the questions you'd want to think through before teaching anyone this process.

**[SCREEN: Denis typing answers in the chat]**

NARRATOR: I answer: yes, I want a name on every action item, and a due date if one came up in the meeting. For decisions, I want both what was decided and the reason — because two weeks later, nobody remembers why a call was made.

**[SCREEN: Claude acknowledges the answers and prepares to build]**

NARRATOR: Now watch what happens.

### Step 4 — The skill gets created [6:30–7:30]

**[SCREEN: Claude switches into Cowork mode. The right-side panel shows Claude actively building the skill — writing out the instructions, describing when to use it, adding an example of input and output.]**

NARRATOR: Claude builds the skill. You can watch it work in the Cowork panel — it's writing out the instructions based on exactly what you told it. You don't need to read any of this or understand it. You just need to know it's been built correctly, according to what you said you wanted.

**[SCREEN: Cowork activity completes — a confirmation appears that the skill has been saved]**

NARRATOR: Done. The skill exists now. Claude knows this process. Let's test it.

### Step 5 — Test the skill [7:30–8:30]

**[SCREEN: New conversation in Claude Desktop App — paste the raw transcript in with no other instructions]**

NARRATOR: New conversation. I paste in the messy transcript — exactly as it came out of the recording tool. No instructions. No explanation. I just paste it in and hit enter.

**[SCREEN: Claude's response streams in — three clean sections appear: Summary, then Action Items, then Decisions]**

NARRATOR: There it is.

**[SCREEN: Slow scroll through the output — orange highlight boxes appear around each section as the narrator describes it]**

NARRATOR: Summary at the top — four sentences, the things that actually matter. Action items, each one with a name and a date where one came up. Decisions, each one with the reasoning behind it. First try. No instructions needed.

NARRATOR: That took about four minutes to set up. And now every meeting transcript anyone on your team drops into Claude is going to come out exactly like this.

### Step 6 — Adjust it [8:30–9:30]

**[SCREEN: Denis typing a follow-up message in the same conversation]**

NARRATOR: One more thing. Say I want a small change — when there are more than three decisions, I want them grouped by topic with a bold heading for each group. I just ask.

**[SCREEN: The following message types out:]**

> Can you update the meeting notes skill? When there are more than three decisions, group them by topic with a bold heading for each group.

**[SCREEN: Claude confirms the update and applies it]**

NARRATOR: Updated. Skills aren't set in stone — you refine them the same way you'd refine any process at work. Something's not quite right, you adjust it, and it gets better.

**[ANIMATION: Orange line wipe]**

---

## RESULTS + VARIATIONS [9:30–11:00]

**[SCREEN: Before/after side by side — raw wall of text on the left, the clean organized output on the right]**

NARRATOR: What we just built: a skill that turns any messy meeting transcript into something your team can actually act on. Set up once. Works every time after that.

**[SCREEN: Three use-case cards animate in sequentially — orange accents]**

NARRATOR: And skill-creator isn't only useful for meeting notes. Any process you find yourself explaining to Claude more than twice is worth turning into a skill. Here are three I'd build next:

**[SCREEN: Card 1 slides in]**

NARRATOR: A customer follow-up writer. Paste in your rough notes from a sales call or a service visit — what was discussed, what they need, what comes next — and Claude writes the follow-up email in your voice. Same tone, same structure, every time.

**[SCREEN: Card 2 slides in]**

NARRATOR: A job posting formatter. Give Claude a bullet list of what you need from a new hire and it builds a clean, professional job listing. Consistent every time you're hiring, no matter who writes the first draft.

**[SCREEN: Card 3 slides in]**

NARRATOR: A weekly team update skill. Drop in your rough notes from the week and Claude turns them into the clear, readable update your team — or your manager — actually wants to receive. No more spending Friday afternoon writing it up from scratch.

**[SCREEN: Text fades in over a dark background:]** "Explained it to Claude twice? That's a skill waiting to be built."

NARRATOR: That's the rule of thumb. Anywhere you've typed the same explanation into Claude more than once, there's a skill that should exist instead.

**[ANIMATION: Orange line wipe]**

---

## WRAP-UP [11:00–12:00]

**[SCREEN: End card begins animating in]**

NARRATOR: Quick recap. skill-creator is the tool that teaches Claude how to remember your processes. You describe what you need in plain English, Claude asks the right clarifying questions, and it builds the skill for you. No technical experience needed. No setup beyond clicking one button.

**[SCREEN: Lower third — "Get it at smithery.ai — link in description" with orange background]**

NARRATOR: Install link is in the description. If this was useful, subscribe — we're going through all 95 skills on this channel, and every episode is built around a real business problem, not a made-up example.

**[SCREEN: "Next up" card — "Episode 02: pdf — Combine, Watermark, and Deliver Documents Like a Pro" with preview thumbnail]**

NARRATOR: Next episode: the pdf skill. We take three separate documents — a contract, a statement of work, and a welcome letter — and turn them into one professional client package with a cover page, clickable sections, and a draft watermark, all in about five minutes. That one's for anyone who sends documents to clients. See you there.

**[ANIMATION: 10-sec end card — logo, subscribe button, social links]**

---

## Word count: ~1,810 words (target ~150 wpm → ~12 min narration)
