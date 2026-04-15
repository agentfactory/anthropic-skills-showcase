# Anthropic Skills Showcase

> Complete directory of 95 Anthropic Skills from Smithery.ai — with YouTube episode scripts, use case demos, production guides, and agent instructions for creating video content.
>
> ## What Is This?
>
> This repository is the production hub for a YouTube series that demonstrates every official Anthropic skill available on [Smithery.ai](https://smithery.ai/skills?q=namespace%3Aanthropics). Each episode is a ~12-minute focused demo showing a real-world use case for one skill, from installation to finished output.
>
> ## Repository Structure
>
> ```
> anthropic-skills-showcase/
> ├── README.md                          # You are here
> ├── 00-production-guide/
> │   ├── MASTER-PRODUCTION-DOC.md       # Complete production bible
> │   ├── SKILL-DIRECTORY.md             # All 95 skills cataloged
> │   ├── script-template.md             # Episode script template
> │   ├── animation-guidelines.md        # Motion graphics standards
> │   ├── video-guidelines.md            # Recording/editing standards
> │   ├── broll-guidelines.md            # B-roll capture guide
> │   └── agent-instructions.md          # AI agent prompt templates
> ├── 01-series-a-design-creative/       # Episodes 1-8
> ├── 02-series-b-documents/             # Episodes 9-14
> ├── 03-series-c-data-analytics/        # Episodes 15-22
> ├── 04-series-d-sales-marketing/       # Episodes 23-34
> ├── 05-series-e-finance-accounting/    # Episodes 35-42
> ├── 06-series-f-legal-compliance/      # Episodes 43-48
> ├── 07-series-g-customer-support/      # Episodes 49-54
> ├── 08-series-h-product-management/    # Episodes 55-59
> ├── 09-series-i-developer-tools/       # Episodes 60-82
> ├── 10-series-j-science-healthcare/    # Episodes 83-89
> └── 11-series-k-productivity/          # Episodes 90-95
> ```
>
> ## Episode Series
>
> | Series | Theme | Episodes | Skills |
> |--------|-------|----------|--------|
> | A | Design & Creative | 8 | brand-guidelines, algorithmic-art, canvas-design, frontend-design, theme-factory, slack-gif-creator, applying-brand-guidelines, brand-voice |
> | B | Documents & Files | 6 | docx, xlsx, pdf, pptx, doc-coauthoring, internal-comms |
> | C | Data & Analytics | 8 | data-visualization, data-exploration, statistical-analysis, sql-queries, data-validation, data-context-extractor, interactive-dashboard-builder, instrument-data-to-allotrope |
> | D | Sales & Marketing | 12 | draft-outreach, content-creation, campaign-planning, competitive-analysis, competitive-intelligence, performance-analytics, daily-briefing, call-prep, account-research, create-an-asset, customer-research, executive-briefing |
> | E | Finance & Accounting | 8 | financial-statements, creating-financial-models, analyzing-financial-statements, variance-analysis, journal-entry-prep, close-management, reconciliation, audit-support |
> | F | Legal & Compliance | 6 | contract-review, legal-risk-assessment, nda-triage, compliance, canned-responses, meeting-briefing |
> | G | Customer Support | 6 | response-drafting, ticket-triage, escalation, knowledge-management, stakeholder-comms, source-management |
> | H | Product Management | 5 | user-research-synthesis, feature-spec, roadmap-management, metrics-tracking, search-strategy |
> | I | Developer Tools | 23 | web-artifacts-builder, skill-creator, skill-development, agent-identifier, agent-development, plugin-structure, plugin-settings, configured-agent, hook-development, command-development, command-name, rule-identifier, writing-hookify-rules, example-skill, claude-md-improver, claude-automation-recommender, mcp-builder, mcp-integration, claude-opus-4-5-migration, webapp-testing, playground, stripe-best-practices, cowork-plugin-customizer |
> | J | Science & Healthcare | 7 | scvi-tools, single-cell-rna-qc, nextflow-development, scientific-problem-selection, clinical-trial-protocol-skill, prior-auth-review-skill, fhir-developer-skill |
> | K | Productivity & Knowledge | 6 | knowledge-synthesis, memory-management, task-management, cookbook-audit, listener-creator, action-creator |
>
> ## Recommended First 10 Episodes
>
> 1. **skill-creator** (1,113 installs) — Create a custom skill from scratch
> 2. 2. **pdf** (895 installs) — Merge, split, watermark, OCR PDF files
>    3. 3. **creating-financial-models** (762 installs) — Build a DCF model for a SaaS startup
>       4. 4. **pptx** (718 installs) — Turn a product brief into a 10-slide investor deck
>          5. 5. **xlsx** (664 installs) — Clean messy data, add formulas, create charts
>             6. 6. **frontend-design** (488 installs) — Build a SaaS landing page from a prompt
>                7. 7. **competitive-analysis** (455 installs) — Analyze competitors in PM space
>                   8. 8. **canvas-design** (443 installs) — Create museum-quality poster art
>                      9. 9. **interactive-dashboard-builder** (419 installs) — Sales dashboard from CSV
>                         10. 10. **theme-factory** (406 installs) — Style a report with 3 different themes
>                            
>                             11. ## Quick Start
>                            
>                             12. ```bash
>                                 # Clone this repo
>                                 git clone https://github.com/agentfactory/anthropic-skills-showcase.git
>                                 cd anthropic-skills-showcase
>
>                                 # Install any Anthropic skill
>                                 npx @smithery/cli@latest skill add anthropics/<skill-name>
>
>                                 # Browse the skill directory
>                                 cat 00-production-guide/SKILL-DIRECTORY.md
>                                 ```
>
> ## Contributing
>
> See individual episode folders for scripts, use cases, and demo files. Each episode follows the template in `00-production-guide/script-template.md`.
>
> ## License
>
> MIT
