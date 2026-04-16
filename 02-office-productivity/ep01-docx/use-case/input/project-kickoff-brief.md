# Project Kickoff Brief — Meridian Group Digital Transformation

## Project Objectives

Transform Meridian Group's core client-facing operations by migrating three legacy systems to a unified cloud platform, reducing manual data entry by 70%, and enabling real-time reporting across all regional offices. Secondary objective: establish a data governance framework compliant with ISO 27001 by Q3 2026.

Key success metrics:
- System uptime post-migration: 99.5% or above
- End-user adoption rate: 80% within 60 days of go-live
- Manual reporting hours reduced from 12 hrs/week to under 2 hrs/week

## Scope

### In Scope
- Migration of CRM (Salesforce Classic → Salesforce Lightning)
- Migration of ERP (on-premise SAP → SAP S/4HANA Cloud)
- Integration of both systems via MuleSoft middleware
- User training program (8 departments, ~140 staff)
- Data cleansing and deduplication prior to migration
- Go-live support (4 weeks post-launch)

### Out of Scope
- HR system migration (deferred to Phase 2)
- Mobile app development
- Custom Salesforce development beyond standard Lightning configuration
- Third-party reporting tool integrations (to be reviewed post-go-live)

## Stakeholder List

- Sarah Okonkwo — Project Sponsor, CFO, Meridian Group
- James Teller — IT Director, Meridian Group (primary technical contact)
- Priya Chandran — Change Management Lead, Meridian Group
- Denis Laflamboise — Engagement Lead, consulting team
- Amara Diallo — Solution Architect, consulting team
- Wei Zhang — Data Migration Specialist, consulting team
- Rosa Herrera — Training Lead, consulting team

## Deliverables

| Deliverable | Owner | Due Date | Status |
|---|---|---|---|
| Current-state system audit | Wei Zhang | May 2, 2026 | Not started |
| Data governance framework draft | Amara Diallo | May 9, 2026 | Not started |
| CRM migration plan | Amara Diallo | May 16, 2026 | Not started |
| ERP migration plan | Wei Zhang | May 23, 2026 | Not started |
| Training curriculum — draft | Rosa Herrera | May 30, 2026 | Not started |
| UAT test plan | Amara Diallo | June 6, 2026 | Not started |
| Go-live readiness checklist | Denis Laflamboise | June 20, 2026 | Not started |
| Post-launch support runbook | Full team | July 4, 2026 | Not started |

## Timeline

- **Phase 1 — Discovery & Planning:** April 15 – May 9, 2026
- **Phase 2 — Design & Configuration:** May 10 – June 6, 2026
- **Phase 3 — UAT & Training:** June 7 – June 27, 2026
- **Phase 4 — Go-Live:** June 30, 2026
- **Phase 5 — Hypercare:** July 1 – July 31, 2026

## Risks and Flags

- **Data quality:** Initial audit of legacy CRM data shows ~18% duplicate records. Cleansing timeline may slip if data quality is worse than estimated. Mitigation: allocate additional 2 weeks buffer in Phase 1.
- **Stakeholder availability:** CFO travel schedule may limit executive sponsor availability during Phase 3. Mitigation: schedule key sign-offs 2 weeks ahead of deadline.
- **ERP vendor dependency:** SAP S/4HANA Cloud provisioning lead time is 3–5 business days. Order must be placed by April 22 to avoid delaying Phase 2.

## Communication Plan

Weekly status call: Fridays at 10:00 AM ET. Attendees: project sponsor, IT director, engagement lead.
Bi-weekly steering committee: First and third Monday of each month.
Issue log: Maintained in Jira, updated daily by engagement lead.
Status report: Distributed every Friday by 5:00 PM ET.
