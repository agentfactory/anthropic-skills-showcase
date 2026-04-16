# Helix Platform — Product Update Brief
## Pricing Restructure + Smart Routing Launch

> Internal use only — do not share externally before March 1 announcement
> Owner: Denis (Product)
> Last updated: 2026-02-14

---

## What's changing

- **Starter tier is being retired.** As of March 1, 2026, the Starter plan ($29/mo) will no longer be available for new signups or renewals.
- **Pro tier becomes the entry-level plan.** The Pro plan ($79/mo) will be the lowest available tier. Existing Starter customers will be automatically migrated to Pro at no charge for the first 90 days, then billed at the standard Pro rate.
- **New feature: Smart Routing.** Smart Routing is a new capability that automatically routes customer requests to the most appropriate team member based on skills, availability, and conversation history. Available to Pro and above.
- **Enterprise tier pricing unchanged.** No changes to Enterprise contracts or features.

## Why we're doing this

- Starter plan economics have been unsustainable since Q3 2024 — average gross margin on Starter accounts is negative when infrastructure costs are included.
- Smart Routing requires compute resources that aren't viable at the Starter price point.
- This positions Helix competitively with Intercom and Zendesk's entry-level offerings.

## Who this affects

- Approximately 2,200 active Starter accounts will be migrated automatically.
- New signups from March 1 will land on Pro as the default.
- Sales team should update demo environments and pricing decks before March 1.
- Support team will need to handle inbound inquiries about the tier change starting ~Feb 25 (when email notifications go out to Starter customers).

## Migration details

- Automated migration job runs February 28, 2026 at 02:00 UTC.
- All Starter accounts move to Pro, full feature access unlocked.
- Billing resumes at Pro rate on June 1, 2026 (90-day grace period).
- Customers who downgraded from Pro to Starter in the last 12 months are flagged for personal outreach from the Customer Success team before February 25.

## What Smart Routing does

- Routes incoming conversations based on: agent skill tags, current queue depth, historical resolution rate for similar issues, customer tier.
- Reduces average first-response time (internal target: 22% improvement vs. current round-robin).
- No configuration required for accounts migrating from Starter — Smart Routing is enabled by default on Pro.
- Full admin controls (routing rules, overrides, opt-out) available in the Settings > Routing panel.

## Key dates

- Feb 14: Internal announcement and team briefing
- Feb 25: Customer email notifications go out (2,200 Starter customers)
- Feb 28, 02:00 UTC: Migration job runs
- Mar 1: Starter tier removed from pricing page, Pro becomes default entry point
- Jun 1: Grace period ends, Pro billing begins for migrated accounts
