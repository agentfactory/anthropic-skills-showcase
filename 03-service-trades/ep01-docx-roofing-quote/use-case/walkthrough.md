# Use Case Walkthrough — Episode C01: Roofing Quote

## Setup

1. Install the skill:
   ```
   npx @smithery/cli@latest skill add anthropics/docx
   ```

2. Open Claude Code with the input file ready:
   ```
   claude
   ```

3. The input file `inspection-notes.md` should be in the working directory.

---

## The Prompt

Paste this into Claude exactly as written during the demo:

```
Using my inspection notes in inspection-notes.md, generate a professional roofing estimate
as a Word document. Structure it as follows:

- Company header: Ridge Pro Roofing LLC, License ROC-291847, mike@ridgepro.com, 555-0192
- Quote number: QT-2026-0847, Date: April 16 2026, Valid for 30 days
- Customer info block: Dave & Lisa Johnson, 123 Oak St
- Scope of Work: itemized list, each line a separate deliverable
- Materials table: item, spec/brand, quantity, unit cost, line total
- Pricing summary table: base labor, base materials, OSB contingency (note: billed at actual),
  subtotal, deposit due (40%), balance due on completion
- Optional Add-On section: gutter replacement, permit pull — each as a separate line
  with price, clearly marked as optional
- Warranty section: three rows — shingles, ridge system, workmanship
- Payment terms paragraph: 40% deposit, 60% on completion, card surcharge note
- Referral program note: $200 off for each neighbor referred
- Signature block: customer signature, date, contractor signature, date

Output as: johnson-quote-QT-2026-0847.docx
```

---

## What to Highlight During Demo

**Step 3 — Watch the Process:**
- Point out that Claude is parsing the shorthand ("28 squares", "3-tab over architectural")
  and translating it into professional language
- The pricing math: $3,800 + $4,100 + $420 = $8,320, quoted at $8,200 flat — Claude
  should catch this and note it as a "promotional adjustment" or similar

**Step 4 — Review the Output:**
- Open in Word, zoom to 100%
- Scroll slowly: header → quote meta → customer block → scope list → materials table
- Pause on the materials table: GAF Timberline HDZ, Charcoal, 28 squares — exactly from notes
- Pause on pricing table: show the 40% deposit math ($3,280) auto-calculated
- Show the optional add-ons clearly separated from the base quote

**Step 5 — Iterate:**
Use this follow-up prompt:
```
Add a brief "About Ridge Pro Roofing" section after the header — 2 sentences, professional
tone, mention they've been serving the Phoenix area for 12 years. Also bold the total quote
amount ($8,200) in the pricing table so it stands out.
```

---

## Expected Output Quality

The finished `.docx` should look like it came from a professional roofing company:
- Clean company header (logo placeholder optional)
- Clearly separated sections with bold headings
- Scope of work as a numbered or bulleted list — one trade item per line
- Materials table with 5 columns: Item | Specification | Qty | Unit Price | Total
- Pricing table with subtotal, deposit, and balance clearly broken out
- Optional add-ons visually distinct (boxed or greyed)
- Warranty table: 3 rows, clean
- Signature block at the bottom with lines for both parties

---

## Variations to Show in Results Section

**Variation 1 — Change Order**
```
Using the approved johnson-quote as the base, generate a change order document.
The homeowner has approved adding the gutter replacement ($680) and permit pull ($180)
to the original contract. Change order number: CO-2026-0847-01.
```

**Variation 2 — Subcontractor Scope**
```
Generate a subcontractor scope of work document for the chimney flashing work only.
Sub company name: Desert Masonry LLC. Include scope, materials responsibility split,
completion deadline (within the 1.5 day job window), and payment terms (net 14).
```

**Variation 3 — Annual Maintenance Agreement**
```
Generate a 1-page annual roof maintenance agreement for the Johnson property.
Two visits per year: spring inspection + minor repairs up to $200 included, fall
gutter cleaning. Annual price: $349. Auto-renews unless cancelled 30 days prior.
```
