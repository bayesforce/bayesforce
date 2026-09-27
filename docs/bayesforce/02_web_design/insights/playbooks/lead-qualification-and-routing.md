# Playbook: Inbound Lead Qualification & Routing

> **Route:** `/insights/playbooks/lead-qualification-and-routing`  
> **Parent Hub:** [Playbooks Hub](README.md) | [Insights Hub](../index.md)  
> **Business Function:** [Revenue Operations](../../workflows/revenue-operations.md)  
> **Related Capability:** [AI Coworkers](../../capabilities/ai-coworkers.md)

---

## 1. Page Metadata & Executive Overview

- **Page Title:** `Playbook: Engineering Inbound Lead Qualification & Routing | Bayesforce`
- **Headline (H1):** *Engineering Autonomous Inbound Lead Qualification, Enrichment, and Rep Assignment.*
- **Summary:** A comprehensive architectural blueprint for ingesting form submissions, enriching corporate data in real time, scoring ICP fit, and assigning qualified prospects to account executives in under 60 seconds.
- **Estimated Operational Delta:** Lead-to-meeting scheduling speed improved from 8 hours to under 2 minutes; SDR research time reduced by 75%.

---

## 2. Playbook Engineering Blueprint

### Step 1: Real-Time Ingestion
- Webhook trigger on demo form submission or contact request.
- Parse corporate email domain and prospect name.

### Step 2: Multi-Source Context Enrichment
- Query Clearbit / Apollo / LinkedIn for firmographic data: employee count, annual revenue, industry vertical, headquarters location.
- Scan company website and job boards for active technologies (e.g. ERP used, CRM used).

### Step 3: ICP Fit Scoring & Intent Reasoning
- Evaluate enriched parameters against Ideal Customer Profile (ICP) rules:
  - *Tier 1:* > 250 employees, target geography, qualified decision-maker title.
  - *Tier 2:* 50–250 employees, matching industry criteria.
  - *Tier 3 / Disqualified:* Non-corporate domain, out-of-market.

### Step 4: CRM Hygiene & Deduplication
- Query Salesforce / HubSpot for existing account records, open opportunities, or active rep assignments to prevent duplicate outreach.
- Auto-create/update contact and lead records with enriched metadata fields.

### Step 5: Routing & Calendar Dispatch
- If Tier 1: Match territory routing rules, determine available Account Executive, generate personalized scheduling link, and send immediate response email.
- Send real-time Slack briefing packet to the assigned AE containing company background, pain point summary, and recommended talk tracks.

---

## 3. Related Resources

- Business Function: [Revenue Operations](../../workflows/revenue-operations.md)
- Capability: [AI Coworkers](../../capabilities/ai-coworkers.md)
- [Talk to Bayesforce](../../talk.md) to evaluate your RevOps funnel.
