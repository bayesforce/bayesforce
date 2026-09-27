# Insights Category: Playbooks (`/insights/playbooks`)

> **Route:** `/insights/playbooks`  
> **Parent Hub:** [Insights Hub](../index.md) | [Web Design System](../../README.md)  
> **Core Role:** Concrete Workflow Engineering Blueprints & Implementation Guides

---

## 1. Category Overview & Strategic Purpose

Playbooks are the **deep-content representation of specific operational workflows**. While `/workflows/[function]` pages provide the high-level business landscape, Playbooks provide the comprehensive engineering architecture, decision rules, tool calls, and human-in-the-loop checkpoints required to build and deploy that workflow.

### The 12-Part Playbook Architecture Standard

```
1. Workflow Definition & Executive Summary
        ↓
2. Why It Creates Operational Drag (The Problem)
        ↓
3. Current-State Manual Pattern vs. AI-Engineered State
        ↓
4. Where AI Adds Leverage (Decomposition)
        ↓
5. Data & Enterprise Context Required (Sources & Schemas)
        ↓
6. Reasoning Loops & Decision Criteria
        ↓
7. System Actions & Tool Calls (API Schemas)
        ↓
8. Human Approval & Review Boundaries
        ↓
9. Evals, Guardrails & Observability Architecture
        ↓
10. Target Metrics & Expected Operational Delta
        ↓
11. Related Bayesforce Capabilities
        ↓
12. Empirical Case Study & Talk CTA
```

---

## 2. Directory Index

- **[`invoice-exception-handling.md`](invoice-exception-handling.md)** (`/insights/playbooks/invoice-exception-handling`)  
  *Engineering automated 3-way invoice matching, variance investigation, and AP ledger posting.*

- **[`lead-qualification-and-routing.md`](lead-qualification-and-routing.md)** (`/insights/playbooks/lead-qualification-and-routing`)  
  *Engineering autonomous inbound lead scoring, CRM enrichment, ICP evaluation, and sales rep routing.*

- **[`vendor-onboarding.md`](vendor-onboarding.md)** (`/insights/playbooks/vendor-onboarding`)  
  *Engineering autonomous supplier intake, insurance/COI extraction, sanctions screening, and ERP vendor provisioning.*

---

## 3. Required Metadata Schema for Playbooks

```yaml
type: Playbook
title: String
slug: String
business_function: String
primary_workflow: String
capabilities: [List of Capabilities]
tools_orchestrated: [List of Systems & APIs]
estimated_delta:
  time_reduction: String
  touchless_rate: String
author: BayesForce Engineering
published_date: YYYY-MM-DD
```
