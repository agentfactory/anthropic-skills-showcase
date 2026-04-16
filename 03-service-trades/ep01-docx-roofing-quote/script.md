# Episode C01: docx — Quote Out the Door Before Your Competitor Does

**Series:** C — Service Trades | **Folder:** `03-service-trades/` | **Skill:** anthropics/docx | **Duration:** ~12 min
**Skill URL:** https://smithery.ai/skills/anthropics/docx
**Install:** `npx @smithery/cli@latest skill add anthropics/docx`
**Target Audience:** Home services contractors — roofers, landscapers, painters, plumbers, electricians
**Use Case:** Inspection notes typed on a phone → professional roofing estimate in Word, ready to email, in 4 minutes

---

## COLD OPEN [0:00–0:30]

**[SCREEN: Full-width view of a finished Word document — "Ridge Pro Roofing LLC" company header, license number, contact info. Below it: Quote QT-2026-0847, dated April 16, valid 30 days. Customer block: Dave & Lisa Johnson, 123 Oak St. A clean scope of work list. A materials table with GAF Timberline HDZ, 28 squares, line totals. A pricing table with subtotal $8,320, promotional adjustment -$120, quoted total $8,200 in bold. Deposit due: $3,280. Balance on completion: $4,920. Warranty section. Signature lines at the bottom.]**

NARRATOR: This is a roofing estimate. Professional. Itemized. Ready to email. It took 4 minutes to produce.

**[SCREEN: Hard cut to — a phone Notes app showing raw inspection shorthand. "28sq, 3-tab over arch, 2 layers full T/O, ice & water all valleys, GAF HDZ charcoal, 2 pipe boots, re-flash chimney, $8200 flat, 40% deposit." Raw, abbreviated, the way contractors actually write.]**

NARRATOR: This is what went in.

**[SCREEN: The finished Word document again — this time slow scroll from top to bottom, all sections visible in sequence]**

NARRATOR: The homeowner has two other quotes coming in. This one lands in their inbox first. That is the docx skill. Let's break it down.

**[ANIMATION: Orange line wipe]**

---

## INTRO [0:30–1:30]

**[ANIMATION: 5-sec channel intro — "Anthropic Skills Showcase" logo reveal, orange accent bar sweeps in on dark background]**

NARRATOR: Welcome to Series C. I'm Denis. Series A was design and creative. Series B was documents for office workers. Series C is different. This series is built for the people running businesses on job sites, in client homes, out of a truck. Roofers. Landscapers. Plumbers. Electricians. Painters. The service trades.

**[B-ROLL: Contractor finishing a roof inspection — walking the perimeter, checking flashing, taking photos on a phone. Practical, real-world footage.]**

NARRATOR: These are businesses where every hour not working is money not made. Where a 45-minute formatting session in Word is 45 minutes you weren't on a job. Where the quote you send tonight is competing against two others the homeowner got today.

**[SCREEN: Smithery.ai anthropics/docx skill page — install count 623 highlighted in orange]**

NARRATOR: We're starting with `docx`. The same skill we covered in Series B, but a completely different use case — because the skill adapts to what your business actually does. Six hundred installs and counting. Today you'll understand exactly why.

**[B-ROLL: Contractor hunched over a laptop at a kitchen table in work clothes, 9pm, trying to format a Word document — resizing columns, chasing consistent fonts, copying from an old quote. Clock visible showing 9:47pm.]**

NARRATOR: Here is the real cost of the old way. You finish the inspection at 2pm. Drive back. Eat. Then at 9pm you're digging through old quotes to find the one that looked right, pasting in the new customer's name, trying to get the table columns to stop breaking, wondering why the total isn't matching. An hour later you've got something that's close enough and you send it.

**[SCREEN: Simple math graphic, dark background, orange numbers]**

NARRATOR: Three quotes a week. Forty-five minutes each. That's two and a quarter hours — every week — just on formatting. At fifty dollars an hour for your time, that's over five thousand dollars a year you're spending on paperwork. Not the paperwork itself. The formatting.

**[ANIMATION: Orange line wipe]**

---

## SKILL DEEP DIVE [1:30–3:30]

**[SCREEN: Terminal — dark mode, large font, clean]**

NARRATOR: One command to install the skill:

**[SCREEN: Typewriter animation]**

`npx @smithery/cli@latest skill add anthropics/docx`

**[SCREEN: Terminal output — skill installs, confirmation message appears]**

NARRATOR: That drops a single `SKILL.md` file into your `.claude/skills/` directory. No dependencies to manage. No configuration files. No account setup beyond Claude Code itself.

**[SCREEN: VS Code — `.claude/skills/docx/SKILL.md` opens. YAML frontmatter visible at top.]**

NARRATOR: This is the entire skill. One Markdown file. The frontmatter at the top tells Claude when to activate it automatically. The body tells Claude exactly how to build the document.

**[SCREEN: Cursor highlights the `triggers` block — orange glow]**

NARRATOR: The triggers are plain English phrases: "create a Word document," "generate a quote," "turn this into a docx," "write up an estimate." You don't need a slash command. You don't need special syntax. You describe what you want and the skill activates.

**[SCREEN: Scroll through SKILL.md — capability sections become visible]**

NARRATOR: For our purposes today, three capabilities matter most.

**[SCREEN: Highlight the document structure capability]**

NARRATOR: First: **document structure**. Headers, section breaks, numbered lists, table of contents if you want one. All using real Word styles — not bold text at a bigger font size, not manually formatted paragraphs. Actual H1, H2, H3 styles that behave correctly in Word.

**[SCREEN: Highlight the tables capability]**

NARRATOR: Second: **tables**. Formatted with header rows, alternating shading, proper column widths. A materials table that looks like it came from a professional quoting system — not a pasted spreadsheet.

**[SCREEN: Highlight the headers/footers capability]**

NARRATOR: Third: **headers, footers, and document metadata**. Your company name, license number, quote number, date — all set once per prompt, applied consistently throughout. Every page has your contact information. Every page looks like your document.

**[SCREEN: All three capability icons visible together]**

NARRATOR: These work together in a single pass. One prompt in, one `.docx` file out. Let's do it live.

**[ANIMATION: Orange line wipe]**

---

## LIVE DEMO [3:30–9:30]

### Step 1 — Review the Input [3:30–4:30]

**[SCREEN: Text editor — `inspection-notes.md` fills the screen. Phone-shorthand style: "johnson job - 123 oak st - april 16", "28 squares estimated", "3-tab over architectural - 2 layers total, full tear off", "GAF timberline HDZ - color: charcoal", "materials: ~$3,800", etc.]**

NARRATOR: This is Mike's inspection notes. He typed these on his phone while he was walking the Johnson roof. This is the real input — not a cleaned-up version, not a structured form. The shorthand a contractor actually uses: "3-tab over arch," "full T/O," "pipe boots," "step + counter flash." Real abbreviations from a real job site.

**[SCREEN: Scroll through the full file at reading pace]**

NARRATOR: Everything is here: the scope, the materials spec, the pricing, payment terms, the warranty, even a note about the referral program. It just looks like a grocery list. The skill's job is to turn that grocery list into a document a homeowner trusts.

---

### Step 2 — Invoke the Skill [4:30–5:30]

**[SCREEN: Claude Code terminal — dark mode, cursor ready]**

NARRATOR: I'll open a Claude session. Docx skill is installed, so nothing special to activate it. I'll just describe the document I want.

**[SCREEN: Typing animation — prompt appearing character by character, at reading pace]**

NARRATOR: My prompt: "Using my inspection notes in inspection-notes.md, generate a professional roofing estimate as a Word document. Structure it as: company header with Ridge Pro Roofing LLC, license, phone, and email. Quote number QT-2026-0847, dated April 16 2026, valid 30 days. Customer info block for the Johnsons at 123 Oak St. Scope of Work as a numbered list — one trade item per line, written in professional language. Materials table with five columns: Item, Specification, Quantity, Unit Price, and Line Total. Pricing summary with base labor, base materials, OSB contingency noted as billed-at-actual, subtotal, promotional adjustment, quoted total in bold, deposit due at 40%, and balance due on completion. Optional add-ons section with gutter replacement and permit pull, clearly marked optional. Warranty section as a three-row table. Payment terms paragraph. Referral program note. Signature block for both parties. Output as johnson-quote-QT-2026-0847.docx."

**[SCREEN: Enter pressed. Processing indicator visible.]**

NARRATOR: That prompt is long but it reads like English. I'm not writing code. I'm describing a document the same way I'd describe it to an assistant. That's the only skill required on your end.

---

### Step 3 — Watch the Process [5:30–7:00]

**[SCREEN: Claude's response streaming in — reasoning visible as it works through the document structure]**

NARRATOR: Watch what's happening here. Claude is reading Mike's shorthand and translating it. "3-tab over architectural — 2 layers total, full tear off" becomes "Complete removal of existing two-layer asphalt shingle system including tear-off, disposal, and haul-away." That's the same fact. That's the language a homeowner reads and thinks: this contractor knows what they're doing.

**[SCREEN: Processing continues — materials being parsed]**

NARRATOR: The materials section: "GAF Timberline HDZ, charcoal, 28 squares" gets expanded to the full product name, color specification, quantity, and the supplier's warranty reference. Mike didn't type any of that — the skill knows what GAF Timberline HDZ is and fills in the professional description.

**[SCREEN: Pricing math visible being resolved — $3,800 + $4,100 = $7,900 base, plus $420 OSB = $8,320, quoted at $8,200]**

NARRATOR: And the pricing. Mike's notes say "quoting $8,200 flat — be competitive." The skill sees the actual total is $8,320 and Mike wants to quote $8,200. It books that as a promotional adjustment: negative $120. The math is transparent. A homeowner can follow it. Nothing looks padded, nothing looks hidden.

**[SCREEN: File system — `johnson-quote-QT-2026-0847.docx` appears in directory, 47KB]**

NARRATOR: File written. Forty-seven kilobytes. That took sixteen seconds.

---

### Step 4 — Review the Output [7:00–8:00]

**[SCREEN: Word document opens — full page view, zoom 100%]**

NARRATOR: Let's open it.

**[SCREEN: Top of document — "Ridge Pro Roofing LLC" in bold, license number ROC-291847, mike@ridgepro.com, 555-0192. Below: "ROOFING ESTIMATE" as a large heading. Quote number, date, expiration date as a clean three-column line. Customer block below that.]**

NARRATOR: Company header. Quote number. Thirty-day expiration — which matters because materials prices move, and now that's documented in writing. Customer block with the Johnsons' address.

**[SCREEN: Scroll to Scope of Work — numbered list, 11 items, professional language throughout]**

NARRATOR: Scope of work. Eleven line items. Each one clear. Item six: "Install ice and water shield membrane in all three roof valleys and three linear feet up from the eave edge along the full roof perimeter." That is not what Mike typed. That is what Mike meant — in language that tells a homeowner exactly what they're paying for.

**[SCREEN: Scroll to materials table — five columns, alternating row shading, GAF Timberline HDZ on its own row with brand, color, quantity, price]**

NARRATOR: Materials table. Every item from the scope has its own row — shingles, underlayment, ridge vent, drip edge, pipe boots, chimney flashing materials. The homeowner can see exactly what's going on this roof. That level of transparency is a sales advantage. Most quotes don't have it.

**[SCREEN: Scroll to pricing table — subtotal $8,320, promotional adjustment -$120, bold quoted total $8,200, then deposit and balance]**

NARRATOR: Pricing. Subtotal $8,320. Promotional adjustment minus $120 — Mike's competitive discount, documented. Quoted total $8,200 in bold. Deposit due on signing: $3,280. Balance due on completion: $4,920. No ambiguity. No rounding that the homeowner has to check.

**[SCREEN: Scroll to optional add-ons, warranty table, signature block]**

NARRATOR: Optional add-ons clearly separated — gutters and permit pull with their prices, explicitly optional. Warranty table: 50-year shingle, lifetime ridge, 5-year workmanship. And at the bottom, signature lines for both parties with a date field. This is a binding document.

---

### Step 5 — Iterate [8:00–9:00]

**[SCREEN: Back to Claude terminal]**

NARRATOR: Mike wants one adjustment. He wants a short "About" section so new customers know who they're dealing with. Follow-up prompt:

**[SCREEN: Prompt typed]**

"Add a two-sentence About Ridge Pro Roofing paragraph after the company header — professional tone, mention 12 years serving the Phoenix metro, licensed and insured. Also make the Quoted Total row in the pricing table bold and increase the font size to 12pt so it stands out clearly."

**[SCREEN: Processing — 9 seconds — new file written]**

NARRATOR: Nine seconds. Let's open the updated version.

**[SCREEN: Word document v2 — "About Ridge Pro Roofing" paragraph visible under header, two clean sentences. Scroll to pricing table — Quoted Total row is now visually dominant, bold, slightly larger]**

NARRATOR: About section added. Two sentences that build trust before the homeowner gets to the price. And the total now reads immediately — the homeowner's eye goes straight to $8,200 without having to scan the table. Small changes. Real difference in how this document lands.

---

### Step 6 — Final Result [9:00–9:30]

**[SCREEN: Side-by-side — left: inspection-notes.md in plain text, right: finished Word document open in Word]**

NARRATOR: Left side: what Mike typed on his phone at 2pm on a roof. Right side: what lands in the Johnsons' inbox at 2:22pm. Before the other two quotes even get sent.

**[SCREEN: File timestamps — inspection-notes.md created 2:05pm, johnson-quote-QT-2026-0847.docx created 2:18pm]**

NARRATOR: Eighteen minutes after getting off the roof. Most of that was driving back and opening the laptop.

**[ANIMATION: Orange line wipe]**

---

## RESULTS + VARIATIONS [9:30–11:00]

**[SCREEN: "What else can you do with docx?" title card, dark background, orange accent]**

NARRATOR: The roofing quote is one document. Here are three more that take the same skill and the same notes in different directions.

**[SCREEN: Terminal — new prompt for a change order]**

NARRATOR: Variation one: **change order**. The Johnsons said yes. They also want to add the gutter replacement and have Ridge Pro pull the permit. I'll prompt: "Using the approved Johnson quote as the base, generate a change order. Work added: gutter replacement $680, permit pull $180. Change order number CO-2026-0847-01. Reference the original quote number. New contract total $9,060."

**[SCREEN: Change order document opens — clean, one-page, references original quote, itemizes additions, new total visible, signature block for both parties]**

NARRATOR: Change order. One page. References the original quote. Both parties sign. The paper trail is built before the job starts. No handshake-deal ambiguity later.

**[SCREEN: Terminal — new prompt for a subcontractor scope]**

NARRATOR: Variation two: **subcontractor scope of work**. Mike subs out the chimney flashing to a masonry crew. He needs a document that tells them exactly what to do, who supplies what, and when they get paid.

**[SCREEN: Subcontractor SOW document — scope paragraph, materials responsibility table, completion deadline, payment net-14. One page, clear.]**

NARRATOR: Scope of work document for the sub. Not a contract — just the scope, the materials split, the deadline, and payment terms. The kind of document that prevents the conversation at the end of the job where someone didn't know what they were supposed to do.

**[SCREEN: Terminal — new prompt for a maintenance agreement]**

NARRATOR: Variation three: **annual maintenance agreement**. Before Mike leaves the Johnson job, he wants to offer a recurring maintenance plan. Two visits a year, minor repairs included up to $200, auto-renews.

**[SCREEN: Maintenance agreement document — one page, Ridge Pro header, plan details, pricing $349/year, cancellation terms, signature block]**

NARRATOR: One-page agreement. Signed on the spot if the homeowner says yes. Now Mike has a recurring revenue customer, not a one-time job.

**[SCREEN: All three variation documents shown side-by-side as thumbnails]**

NARRATOR: Same skill. Same inspection notes. Three different documents. None of them required a formatting session. None of them required finding a template.

**[ANIMATION: Orange line wipe]**

---

## WRAP-UP [11:00–12:00]

**[SCREEN: The finished Johnson quote document, scrolling slowly one final time]**

NARRATOR: Here's the honest summary. The docx skill does not make you a better roofer. You already know how to do the work. What it does is make sure the paperwork matches the quality of the work. Because the homeowner signs based on what they read. And what they read is this document.

**[SCREEN: The competitor's quote — imagined, shown as a basic Word document with inconsistent formatting, no itemized materials, just a lump sum at the bottom]**

NARRATOR: Compare that to a quote that's a lump sum with two line items and a font that changes halfway through. Same job. Same price. Different impression.

**[SCREEN: Terminal install command, large text on dark background]**

NARRATOR: Install it:

**[SCREEN: Typewriter animation]**

`npx @smithery/cli@latest skill add anthropics/docx`

**[SCREEN: Smithery.ai anthropics/docx page]**

NARRATOR: Full documentation at the link in the description. Every capability, every option, more examples across different document types.

**[SCREEN: Episode C02 thumbnail preview — Excel workbook with a booking calendar and expense tracker visible]**

NARRATOR: Next episode: `xlsx`. We're building a booking tracker and expense sheet for a service business — from a plain text list of jobs and costs. One prompt, a fully-formatted workbook with weekly totals, a running profit column, and a chart that shows you where your money is going. That is Episode C02.

**[ANIMATION: Channel outro — "Anthropic Skills Showcase" logo, subscribe prompt, dark background with orange accent]**

NARRATOR: I'm Denis. See you on the next one.

---

*End of script. Total estimated narration: ~1,850 words at 150 wpm ≈ 12:20.*
