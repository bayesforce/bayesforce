# Insights Hub Specification: Insights Library (`/insights`)

> **Route:** `/insights`  
> **Parent Hub:** [Web Design System](../README.md)  
> **Type:** Knowledge & Proof Library Overview

---

## 1. Page Metadata & Overview

- **Page Title:** `Insights — Case Studies, Playbooks, Guides & Reports | Bayesforce`
- **Meta Description:** `Explore BayesForce's library of empirical case studies, workflow engineering playbooks, technical guides, and market research on enterprise AI operations.`
- **Visual Rhythms:** Obsidian Dark Hero with featured publication spotlight, followed by multi-dimensional filterable knowledge grid on Surface Light.
- **Conversion CTA:** `Talk to Bayesforce` → `/talk`

---

## 2. Information Architecture & Wireframe Flow

```
┌─────────────────────────────────────────────────────────────┐
│ 1. Hero: The Bayesforce Knowledge Engine (Obsidian Dark)    │
│    Eyebrow: "INSIGHTS & KNOWLEDGE"                          │
│    H1: "Engineering insights from the operational frontier."│
│    Featured Flagship Insight Spotlight Card                 │
├─────────────────────────────────────────────────────────────┤
│ 2. Category Filter & Multi-Dimensional Navigation           │
│    Tabs: [All] [Case Studies] [Playbooks] [Guides] [Reports]│
│    Dropdown Filters: Business Function · Capability · Topic │
├─────────────────────────────────────────────────────────────┤
│ 3. Four Core Knowledge Streams (Surface Light Grid)         │
│    - Case Studies: Empirical proof of operational deltas    │
│    - Playbooks: Step-by-step workflow engineering guides    │
│    - Guides: Technical deep dives on evals, memory & cost   │
│    - Reports: Enterprise benchmarks and market analysis     │
├─────────────────────────────────────────────────────────────┤
│ 4. Search & Tag Index (Surface Light)                       │
│    Fast full-text search with instant autocomplete          │
├─────────────────────────────────────────────────────────────┤
│ 5. Newsletter / Research Subscription Block (Surface Light) │
│    "Get monthly operational AI engineering teardowns."      │
├─────────────────────────────────────────────────────────────┤
│ 6. Conversion Action Block (Obsidian Dark)                  │
│    "Ready to engineer your workflow?"                       │
│    [Talk to Bayesforce]                                     │
└─────────────────────────────────────────────────────────────┘
```

---

## 3. Four Core Content Pillars

| Pillar | Focus | Primary Question Answered | Target Audience |
| :--- | :--- | :--- | :--- |
| **[Case Studies](case-studies/README.md)** | Empirical Proof | *"Did Bayesforce actually change a production workflow?"* | Buyers, CFOs, VPs of Ops |
| **[Playbooks](playbooks/README.md)** | Workflow Blueprints | *"How should this specific workflow be engineered?"* | Ops Directors, Process Owners |
| **[Guides](guides/README.md)** | Technical Depth | *"How do you solve production AI problems (evals, memory)?"* | CTOs, VP Eng, AI Architects |
| **[Reports](reports/README.md)** | Market Worldview | *"What is Bayesforce observing across enterprise operations?"* | Executives, Founders, Investors |

---

## 4. Content Decision Checklist

- [ ] Select the flagship publication featured in the hero card.
- [ ] Determine primary filtering taxonomy tags.
- [ ] Set up newsletter subscription intake endpoint.
