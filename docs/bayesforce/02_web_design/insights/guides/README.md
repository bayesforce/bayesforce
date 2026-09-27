# Insights Category: Technical Guides (`/insights/guides`)

> **Route:** `/insights/guides`  
> **Parent Hub:** [Insights Hub](../index.md) | [Web Design System](../../README.md)  
> **Core Role:** Deep Technical Knowledge & Engineering Best Practices

---

## 1. Category Overview & Technical Rigor

Technical Guides demonstrate BayesForce's production engineering depth. Written for CTOs, AI Architects, and Engineering Leads, these guides address hard technical problems encountered when deploying autonomous AI systems into mission-critical operations.

### Core Topics Covered
- **Context Engineering & Enterprise Memory:** Beyond naive RAG; structured retrieval, hybrid search, and graph context.
- **AI Evals & CI/CD Regression Testing:** Designing golden datasets, LLM-as-a-judge rubrics, and continuous regression suites.
- **FinOps & Cost Optimization:** Token economics, caching hierarchies, and model routing architectures.
- **Security & Sandboxing:** Prompt injection mitigation, API permission scoping, and immutable audit trails.

---

## 2. Directory Index

- **[`context-engineering.md`](context-engineering.md)** (`/insights/guides/context-engineering`)  
  *Designing hybrid retrieval systems, organizational memory, and structured context injection for high-precision workflows.*

- **[`enterprise-ai-evals.md`](enterprise-ai-evals.md)** (`/insights/guides/enterprise-ai-evals`)  
  *Building automated eval suites, regression testing pipelines, and deterministic guardrails in production.*

- **[`production-agent-cost-optimization.md`](production-agent-cost-optimization.md)** (`/insights/guides/production-agent-cost-optimization`)  
  *Architecting intelligent model routing, prompt caching, and token budgeting to reduce inference costs by 60–80%.*

---

## 3. Required Metadata Schema for Guides

```yaml
type: Technical Guide
title: String
slug: String
primary_technical_domain: String
relevant_capabilities: [List of Capabilities]
prerequisites: [List of Systems / Frameworks]
author: BayesForce Engineering
published_date: YYYY-MM-DD
```
