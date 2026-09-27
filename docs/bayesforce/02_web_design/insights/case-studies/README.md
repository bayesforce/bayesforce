# Insights Category: Case Studies (`/insights/case-studies`)

> **Route:** `/insights/case-studies`  
> **Parent Hub:** [Insights Hub](../index.md) | [Web Design System](../../README.md)  
> **Core Role:** Empirical Proof & Measured Operational Deltas

---

## 1. Category Overview & Narrative Standard

Every Bayesforce case study adheres to an evidence-first structure. Rather than high-level marketing testimonials, our case studies are technical teardowns of the before-and-after state of high-friction operational workflows.

### Universal Case Study Narrative Flow

```
1. Customer & Operating Context
        ↓
2. Workflow Friction & Operational Drag
        ↓
3. Bayesforce Intervention & Capability Stack
        ↓
4. System & AI Architecture Diagram
        ↓
5. Human Review Boundaries & Governance Controls
        ↓
6. Measured Operational Delta (Quantitative Metrics)
        ↓
7. Lessons & Operational Takeaways
        ↓
8. Related Playbook & Talk CTA
```

---

## 2. Directory Index

- **[`invoice-exception-handling.md`](invoice-exception-handling.md)** (`/insights/case-studies/invoice-exception-handling`)  
  *How a mid-market manufacturing enterprise reduced AP invoice cycle times from 4.2 days to 18 minutes with 82% touchless reconciliation.*

- **[`vendor-onboarding-triage.md`](vendor-onboarding-triage.md)** (`/insights/case-studies/vendor-onboarding-triage`)  
  *How a global logistics company automated insurance certificate verification and compliance checks, compressing onboarding from 9 days to 2 hours.*

---

## 3. Required Metadata Schema for Case Studies

```yaml
type: Case Study
title: String
slug: String
client_profile:
  industry: String
  scale: String
  operating_stack: [List of Tools / ERPs]
business_function: String
workflow: String
capabilities_used: [List of Capabilities]
headline_delta:
  primary_metric: String
  before_value: String
  after_value: String
published_date: YYYY-MM-DD
```
