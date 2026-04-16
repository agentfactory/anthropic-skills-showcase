# Episode B05: doc-coauthoring — From Rough Notes to a Real Spec

**Series:** B — Documents & Files
**Skill:** `anthropics/doc-coauthoring`
**Skill URL:** https://smithery.ai/skills/anthropics/doc-coauthoring
**Installs:** 101
**Target Audience:** Engineers, tech leads, product managers writing technical specifications
**Estimated runtime:** 12:00
**Word count target:** ~1,800 words narration

---

## COLD OPEN [0:00–0:30]

**[SCREEN: A markdown file open in VS Code — dense bullet points, inconsistent indentation, a few TODO comments, a stray "ask Matt about this" note at the bottom]**

NARRATOR: "This is a technical spec. Or rather — this is what a technical spec looks like before anyone has had time to actually write it. Bullet points from a whiteboard session. Some requirements jotted down after a standup. A few notes about error codes that someone Slacked over. And a real deadline attached to something that still reads like a brain dump."

**[SCREEN: Cursor highlights the mess — we see headers like "webhook stuff", "requirements maybe?", a half-formed JSON blob]**

NARRATOR: "Today we fix that. Not by spending two hours manually restructuring it — but by using the `doc-coauthoring` skill from Anthropic on Smithery. Let's get into it."

---

## INTRO [0:30–1:30]

**[SCREEN: Channel intro graphic / lower third — "Anthropic Skills Showcase / Series B: Documents & Files"]**

NARRATOR: "Welcome back to the Anthropic Skills Showcase. I'm Denis, and in this series we're working through the Documents and Files skills — real tools for the documents that actually show up in engineering and product work. Not demos with lorem ipsum — real use cases."

**[SCREEN: Series B episode list, ep05 highlighted]**

NARRATOR: "We've already covered DOCX, XLSX, PDF, and PPTX. This episode is different. Rather than generating a document from scratch, we're co-writing one. The `doc-coauthoring` skill is designed for the situation where you already have material — rough notes, bullet points, a partial draft — and you need it to become something structured and complete. Something another engineer could actually read and follow."

**[SCREEN: Smithery.ai page for doc-coauthoring — 101 installs visible]**

NARRATOR: "It has 101 installs on Smithery at the time of recording. Smaller number than some of the other skills in this series, but that tracks — this one is aimed at a specific workflow. The people who reach for it tend to be the ones who write a lot of specs. And once you try it, you'll understand why it lands."

---

## SKILL DEEP DIVE [1:30–3:30]

**[SCREEN: Smithery.ai skill detail page for doc-coauthoring]**

NARRATOR: "Let's look at what this skill actually does before we run the demo. The `doc-coauthoring` skill is built to work collaboratively on structured documents. That word 'collaboratively' is important. It's not a one-shot generator — it understands that technical documents get written in stages, with revision cycles, with parts that get added after the initial draft."

**[SCREEN: Skill description text highlighted — key phrases visible]**

NARRATOR: "The skill understands document conventions for technical writing — sections like overview, requirements broken into functional and non-functional, schema definitions, error handling, open questions. It knows these aren't just formatting choices — they're the structure that makes a spec usable. When you give it rough material, it reads the intent behind your notes, not just the words."

**[SCREEN: Terminal — install command being typed]**

NARRATOR: "Installation is one line. Once the skill is active in Claude, you reference your input material and give it direction — what kind of document, what sections you need, what level of formality. And then you iterate, which we'll see in the second half of the demo."

**[SCREEN: Terminal — install command completes]**

```
npx @smithery/cli@latest skill add anthropics/doc-coauthoring
```

NARRATOR: "The install takes a few seconds. After that, the skill is available in your Claude session and ready to work. Let's set up our input."

---

## LIVE DEMO [3:30–9:30]

### Step 1 — Review the Input [3:30–4:30]

**[SCREEN: VS Code with `rough-api-spec-notes.md` open — full file visible]**

NARRATOR: "Here's our starting material. I've got rough notes for a Webhook Events API — a new feature for a fictional platform called Helix. These notes came from a planning session: some requirements from the product side, some technical constraints I thought of, a partial JSON structure, a few questions that need answers before we can finalize anything."

**[SCREEN: Scroll through the file — we see section headers like 'webhook stuff', bullet points, the draft JSON, stray comments]**

NARRATOR: "This is realistic. This is what you actually have after a planning meeting. Not a clean outline — a working document that accumulated things over a few days. The skill's job is to help me turn this into something I'd actually put in a pull request description or a Notion spec page."

NARRATOR: "Notice a few things that make this hard to just paste into a template: the requirements aren't separated into functional versus non-functional. The error handling notes are mixed in with the schema notes. There's an 'open questions' section but it's half-finished. And there's no overview at all — we jumped straight into details."

### Step 2 — Invoke the Skill [4:30–5:30]

**[SCREEN: Claude interface — Denis types the prompt]**

NARRATOR: "Now we invoke the skill. I'm going to give it the full contents of the notes file and a clear instruction about what I need."

**[SCREEN: Prompt being typed — text appears on screen]**

```
Using the doc-coauthoring skill, take my rough notes below and co-write 
them into a complete technical specification for the Webhook Events API. 

The spec should include these sections in order:
1. Overview
2. Functional Requirements
3. Non-Functional Requirements
4. API Schema
5. Error Handling
6. Open Questions

Keep the language precise and technical. This is an internal engineering spec, 
not a public doc. Preserve the intent of my notes — don't invent requirements 
I haven't implied, but do fill in standard patterns where I've been vague 
about things that are conventional in webhook APIs.

Here are my notes:
[paste of rough-api-spec-notes.md]
```

NARRATOR: "A few things worth noting about this prompt. I'm telling it the exact sections I want and the order. I'm setting the register — internal engineering spec, not public docs, that changes the tone. And I'm giving it an important constraint: don't invent requirements I haven't implied. I want it to work from my material, not fill in what it thinks a webhook API should have."

### Step 3 — Watch the Skill Work [5:30–7:00]

**[SCREEN: Claude processing — output streaming in section by section]**

NARRATOR: "The skill begins working through the document. Watch how it handles the Overview section first — it synthesizes from my scattered notes to write something I never wrote explicitly. It understands that an overview needs to answer: what is this, who uses it, why does it exist."

**[SCREEN: Functional Requirements section streaming in]**

NARRATOR: "The Functional Requirements section is where the skill does its most significant reorganization. My notes had requirements mixed in with implementation notes. The skill separates them, applies consistent shall-language — this is an RFC-style spec, so each requirement is a declarative statement about system behavior. That's the right call for this kind of document."

**[SCREEN: API Schema section — clean JSON structure appearing]**

NARRATOR: "The schema section picks up the partial JSON I had in my notes and completes it. It infers the missing fields from the requirements — if you've said the system shall deliver a payload with event type and timestamp, those fields appear in the schema. That's the 'co-author' behavior — it reads across sections."

**[SCREEN: Error Handling and Open Questions sections appear]**

NARRATOR: "Error Handling is clean — it pulls my scattered error code notes into a proper table. And Open Questions: it kept all of mine and added a note to each one about what decision it's blocking. That's genuinely useful."

### Step 4 — Review the Output [7:00–8:00]

**[SCREEN: Full spec visible — Denis scrolls through it slowly]**

NARRATOR: "Let's look at what we have. The spec is structured, consistent, readable. The requirements section alone went from twelve scattered bullet points to twenty-three numbered requirements organized under logical subheadings. The schema went from a partial JSON blob to a fully annotated definition with field descriptions."

**[SCREEN: Highlighting specific improvements — the overview paragraph, the shall-language in requirements]**

NARRATOR: "This is genuinely usable now. I could put this in a PR, share it in Notion, walk through it in a spec review meeting. But I want to show you the iteration loop — because that's where the skill really earns its place in the workflow."

### Step 5 — Iterate: Tighten the Requirements [8:00–8:45]

**[SCREEN: New prompt being typed]**

NARRATOR: "The requirements section is good, but some of the language is still a bit loose. Let me ask the skill to tighten it."

**[SCREEN: Prompt text]**

```
The requirements section reads well overall, but some entries are still 
ambiguous — they describe intent rather than behavior. Please revise the 
Functional Requirements section to:
- Remove any vague terms like "should be able to" — replace with precise 
  behavioral statements
- Ensure each requirement is independently testable
- Add a priority label (P0/P1/P2) to each requirement
```

**[SCREEN: Revised requirements streaming in — before/after comparison visible]**

NARRATOR: "The revision comes back focused and measurable. The phrase 'the system should be able to retry failed deliveries' becomes 'the system shall retry failed webhook deliveries with exponential backoff, up to five attempts, with a minimum interval of thirty seconds between attempts.' That's a requirement you can actually test."

### Step 6 — Iterate: Add the Security Appendix [8:45–9:30]

**[SCREEN: Second iteration prompt being typed]**

NARRATOR: "One more pass. I realized after looking at the draft that we're missing a Security Considerations section. This wasn't in my original notes — but it belongs in any spec that's describing an outbound HTTP integration."

**[SCREEN: Prompt text]**

```
Please add a "Security Considerations" appendix after the Open Questions 
section. It should cover:
- Payload signing (HMAC-SHA256)
- Secret rotation
- HTTPS enforcement
- Replay attack prevention via timestamp validation
Keep it concise — this is an appendix, not a full security spec.
```

**[SCREEN: Security appendix appearing — clean, well-structured, cross-references to the schema section]**

NARRATOR: "The appendix slots in cleanly. Notice it cross-references the schema section for the signature header field — it read the existing document and wrote in context. That's the behavior you want from a co-author, not a generator."

---

## RESULTS + VARIATIONS [9:30–11:00]

**[SCREEN: Final spec document — full view, scrolling slowly]**

NARRATOR: "Here's the final document. We started with roughly three hundred and fifty words of rough notes. We ended with a structured specification of around twelve hundred words — organized, precise, with a security appendix that wasn't in the original outline. The whole session took about eight minutes from paste to final output."

**[SCREEN: Side-by-side — rough notes vs final spec]**

NARRATOR: "The skill didn't invent the spec. It structured and formalized what I already knew. That's the right role for a co-author. My intent is preserved, my constraints are respected, and the result is better than what I would have produced if I'd tried to structure it manually under deadline pressure."

**[SCREEN: Other use case examples — text overlays]**

NARRATOR: "A few other places this skill fits naturally. Engineering RFCs — you have a proposal, you need it formatted with motivation, alternatives considered, and a decision section. Architecture decision records — ADRs have a very specific structure, and the skill knows it. Product requirement documents — PRDs with user stories, acceptance criteria, out-of-scope notes. Runbooks — operational documentation that has to be both precise and followable under pressure."

**[SCREEN: The iterative loop diagram — notes to draft to iteration to final]**

NARRATOR: "The pattern is the same in each case: you bring the domain knowledge and the intent, the skill brings structure, consistency, and the ability to revise without losing coherence. The iteration loop is where the value compounds."

---

## WRAP-UP [11:00–12:00]

**[SCREEN: Terminal — install command one more time]**

NARRATOR: "The `doc-coauthoring` skill is available on Smithery now. One install command, works in your Claude session immediately."

```
npx @smithery/cli@latest skill add anthropics/doc-coauthoring
```

**[SCREEN: Links — Smithery page, GitHub repo]**

NARRATOR: "Links are in the description — the Smithery page for the skill, and the GitHub repo for this series where all the input files and walkthroughs live. If you're writing specs regularly and you find yourself staring at a Notion page full of bullet points wondering how to turn it into something structured — this is the skill to reach for."

**[SCREEN: Episode B06 preview — internal-comms skill card]**

NARRATOR: "Next episode is the last one in Series B. We're looking at `internal-comms` — a skill for the specific problem of communicating the same thing to different audiences. One product update, three outputs: an all-hands memo for leadership, a Slack post for the engineering team, and a formal email for customer-facing teams. All from one prompt. The tone variation across those three outputs is genuinely impressive. Episode B06, dropping next. See you there."

**[SCREEN: Endcard — channel subscribe, Series B playlist, Series C preview]**
