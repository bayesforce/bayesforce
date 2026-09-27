# Page Specification: Global Search (`/search`)

> **Route:** `/search`  
> **Parent Hub:** [Web Design System](README.md)  
> **Type:** Relational Knowledge & Workflow Search Index

---

## 1. Page Metadata & Overview

- **Page Title:** `Search — Bayesforce Knowledge, Workflows & Capabilities`
- **Meta Description:** `Search across Bayesforce capabilities, business functions, operational playbooks, technical guides, case studies, and research reports.`
- **Visual Theme:** Focused Obsidian Dark search bar with real-time multi-dimensional result grouping on Surface Light.

---

## 2. Wireframe Flow & Component Details

```
┌─────────────────────────────────────────────────────────────┐
│ 1. Search Hero & Input (Obsidian Dark)                      │
│    Large search bar with instant keyboard shortcut (Cmd+K)  │
│    Suggested search chips (e.g. "Invoice Matching",         │
│    "Context Engineering", "Vendor Onboarding", "Evals")     │
├─────────────────────────────────────────────────────────────┤
│ 2. Real-Time Result Categorization (Surface Light)          │
│    - Capabilities (4 items)                                 │
│    - Workflows (8 business functions + candidate workflows) │
│    - Playbooks & Implementation Blueprints                  │
│    - Technical Guides & Evals                               │
│    - Empirical Case Studies                                 │
│    - Research Reports                                       │
├─────────────────────────────────────────────────────────────┤
│ 3. Empty State / No Results Fallback                        │
│    "Can't find the workflow you're looking for?"            │
│    [Talk to Bayesforce]                                     │
└─────────────────────────────────────────────────────────────┘
```

---

## 3. Search Indexing Requirements

All published Markdown files in `docs/bayesforce/02_web_design/` should expose searchable metadata tags:
- `title`, `route`, `category`, `business_function`, `capabilities`, `tools`, `summary`, `keywords`.
