# Bayesforce Website Architecture & Route Blueprint

> **Companion to:** *What Bayesforce Does: Strategy, Capabilities & Delivery Model*  
> **Serial Position:** Document 01 of 03 in `02_design_principles/`  
> **Parent Hub:** [Design Principles & Visual System](README.md) | [Bayesforce Hub](../README.md)  
> **Next in Series:** [`02_design_principles.md`](02_design_principles.md) → [`03_page_designs_and_specifications.md`](03_page_designs_and_specifications.md)

---

## 1. Website Architecture in One View

The website should mirror the way Bayesforce itself thinks about the business.

Bayesforce is an AI capability engineering firm. The workflow is the unit of engagement, while capabilities are the engineering layers that make a workflow capable of operating reliably in production.

Therefore, the website should not be organized as a generic list of "AI services."

Instead, it has three major information dimensions:

```
                      BAYESFORCE
                          │
          ┌───────────────┼────────────────┐
          ↓               ↓                ↓
    CAPABILITIES       WORKFLOWS        INSIGHTS
    What we build      Where it works   What we know
          │               │                │
          │               ↓                │
          │        Business Function       │
          │               │                │
          │               ↓                │
          └─────────► Specific Workflow ◄──┘
                           │
                  ┌────────┼────────┐
                  ↓        ↓        ↓
              Playbook    Guide   Case Study
                           │
                           ↓
                   TALK TO BAYESFORCE
```

> **Strict Route Constraint:** We do not have routes for specific workflows. Inside `/workflows`, there is strictly **one page per business function** (8 routes total). Specific workflows are featured directly on their respective business-function page as candidate solutions, and any deep implementation guide routes directly to the corresponding Playbook under `/insights/playbooks/[slug]`.

Supporting & Conversion Destinations:
- `/about`
- `/talk` (Primary workflow-discovery conversion destination)
- `/careers` (Footer open-intent hiring page)

*(There is deliberately no generic `/contact` page; commercial inquiries flow directly into workflow discovery via `/talk`.)*

> **The central idea:** Capabilities tell people what Bayesforce can engineer. Workflows tell people where that capability creates value. Insights demonstrate that Bayesforce understands the work deeply.

---

## 2. Primary Navigation

The main navigation remains deliberately focused and restrained:

```
BAYESFORCE                        Capabilities ▼   Workflows ▼   Insights ▼   About   [Talk to Bayesforce]
```

The Bayesforce logo always links to `/`.

The navigation does not expose every single route directly in the top bar. The dropdowns act as the first layer of information architecture.

### Navigation Structure

```
Capabilities
├── AI Data Engineering
├── AI Coworkers
├── AI Trust & Governance
└── AI Enablement

Workflows
├── Revenue Operations
├── Customer Operations
├── Finance Operations
├── Procurement & Vendor Operations
├── Business Operations
├── Technology Operations
├── Legal, Risk & Compliance Operations
└── People Operations

Insights
├── Case Studies
├── Playbooks
├── Guides
└── Reports

About
└── About Bayesforce

Talk to Bayesforce
└── /talk
```

*Careers, privacy, terms, and direct contact details do not occupy primary-header real estate; they sit in the global footer.*

---

## 3. Route Tree

The public website utilizes the following complete route hierarchy:

```
/
│
├── capabilities/
│   ├── ai-data-engineering
│   ├── ai-coworkers
│   ├── ai-trust-governance
│   └── ai-enablement
│
├── workflows/
│   ├── revenue-operations
│   ├── customer-operations
│   ├── finance-operations
│   ├── procurement-vendor-operations
│   ├── business-operations
│   ├── technology-operations
│   ├── legal-risk-compliance-operations
│   └── people-operations
│
├── insights/
│   ├── case-studies/
│   │   └── [slug]
│   │
│   ├── playbooks/
│   │   └── [slug]
│   │
│   ├── guides/
│   │   └── [slug]
│   │
│   └── reports/
│       └── [slug]
│
├── about/
├── talk/
├── careers/
├── search/
├── privacy/
└── terms/
```

> **Intentional Design Decision:** There is deliberately no generic `/services` page and no generic `/industries` page.

---

## 4. Homepage — `/`

The homepage is not supposed to contain every piece of information on the website.

Its job is to establish the Bayesforce worldview quickly, explain the category, show how Bayesforce works, give visitors clear paths into workflows and capabilities, provide proof, and create an intuitive path to a conversation.

### Information Sequence

```
1. Bayesforce Proposition (Hero)
        ↓
2. Operational Drag / Problem Framing
        ↓
3. What Bayesforce Does (The Category)
        ↓
4. The Capability Architecture
        ↓
5. Where Bayesforce Applies It (Workflows)
        ↓
6. How a Workflow Is Engineered (11-Stage Delivery Model)
        ↓
7. Proof of Work (Case Studies & Deltas)
        ↓
8. Insights / Thinking (Playbooks, Guides, Reports)
        ↓
9. Talk to Bayesforce (Conversion)
```

### 4.1 Hero
The hero communicates the core idea rather than listing services. It connects:
$$\text{Operational Drag} \longrightarrow \text{AI Engineered into Workflows} \longrightarrow \text{More Organizational Capacity}$$

The underlying brand promise is:
> **Make More Happen.**

Operational drag is framed as the capacity consumed by information chasing, reconciliation, disconnected systems, waiting decisions, and unnecessary handoffs. The homepage introduces this idea without requiring the visitor to study the entire methodology first.

- **Primary CTA:** `Talk to Bayesforce` → `/talk`
- **Secondary CTA:** `Explore Workflows` → `/workflows/revenue-operations` (or selected proof)

### 4.2 What Bayesforce Does
This section makes the company category explicit:
> **Bayesforce is an AI capability engineering firm.**

Then explains the simple execution model:
```
Find High-Friction Workflow
        ↓
Connect Data and Systems
        ↓
Provide Enterprise Context
        ↓
Engineer AI into the Workflow
        ↓
Add Controls and Human Review
        ↓
Measure the Operational Delta
```
This is the bridge between the brand story and concrete technical capabilities.

### 4.3 Capabilities Preview
Presents the four capabilities not as a sequential pipeline, but as four complementary engineering layers surrounding a workflow:

```
                    BAYESFORCE
                        │
                 OPERATIONAL WORKFLOW
                        │
        ┌───────────────┼────────────────┐
        │               │                │
        ↓               ↓                ↓
   DATA & CONTEXT   AI EXECUTION   TRUST & CONTROL
   (Data Eng)       (Coworkers)    (Governance)
        │               │                │
        └───────────────┼────────────────┘
                        ↓
                  AI ENABLEMENT
             / capability transfer /
```

- **Data and Context (AI Data Engineering):** Connects source systems and assembles organizational memory so models have the facts.
- **AI Execution (AI Coworkers):** Executes multi-step operational tasks directly through the customer's existing tools.
- **Trust & Control (AI Trust & Governance):** Provides evaluations, observability, cost tracking, and security controls for production reliability.
- **Capability Transfer (AI Enablement):** Equips the client's internal team to operate, govern, and improve the capability long-term.

*Each capability card links directly to its dedicated route.*

### 4.4 Workflow Preview
Shifts from *"What we build"* to *"Where it works"*. Displays the major operational functions in the standard taxonomy order:
- Revenue Operations
- Customer Operations
- Finance Operations
- Procurement & Vendor Operations
- Business Operations
- Technology Operations
- Legal, Risk & Compliance Operations
- People Operations

*The ordering represents an initial commercial hypothesis informed by workflow economics, friction, and repeatability. Each function card links to its overview page.*

> **UI Presentation Rule:** In the UI, do **not** display numbers `01–08`. The functions appear in this order for commercial coherence, but visitors should not feel that Bayesforce is declaring a rigid numerical hierarchy of organizational importance.

### 4.5 How We Engineer Workflows
Presents the 11-stage delivery lifecycle as a **compressed, glanceable visual signal of engineering rigor**, rather than an exhaustive operational guide:
$$\text{Trigger} \rightarrow \text{Ingest} \rightarrow \text{Understand} \rightarrow \text{Context} \rightarrow \text{Validate} \rightarrow \text{Reason} \rightarrow \text{Execute} \rightarrow \text{Output} \rightarrow \text{Review} \rightarrow \text{Record} \rightarrow \text{Measure}$$

The homepage answers *"Why should I care about Bayesforce?"* and demonstrates that we engineer complete production capabilities; the full, stage-by-stage engineering mechanics belong on `/about`, capability deep dives, technical Guides, and dedicated delivery documentation.

### 4.6 Proof
Surfaces selected case studies and verifiable deltas:
$$\text{Claim} \longrightarrow \text{Evidence} \longrightarrow \text{Case Study}$$

Emphasizes empirical deltas aligned with the *Prove the Delta* principle:
- Processing time reduction
- Throughput increase
- Error rate reduction
- Human intervention decrease
- Cost savings
- Capacity unlocked

### 4.7 Insights Preview
Displays a curated selection of recent and strategically important content across:
- Case Studies
- Playbooks
- Guides
- Reports

Makes the library feel like an authentic extension of Bayesforce's technical thinking, not a generic marketing blog.

### 4.8 Final CTA
Ends with a workflow-oriented prompt:
> **Have a workflow worth fixing?**  
> `[Talk to Bayesforce]`

Leads directly into a conversation about the visitor's specific operational workflow.

---

## 5. Capabilities Architecture

- **Navigation Label:** `Capabilities`
- Preferable to "What We Do" or "What We Build" because the four capabilities form a unified engineering architecture.
- There is no requirement for an empty top-level `/capabilities` landing page in v1; the navigation dropdown serves as the top-level discovery layer.
- Each capability possesses its own dedicated deep-dive route.

---

## 6. Capability Page — AI Data Engineering

- **Route:** `/capabilities/ai-data-engineering`
- **Purpose:** Explain how Bayesforce connects enterprise systems, data, documents, and institutional knowledge so AI systems can operate with accurate context.

### Conceptual Hierarchy

```
AI Data Engineering
│
├── Data Pipelines
│   ├── Source System Integration
│   ├── Pipeline Engineering
│   ├── Data Quality & Reconciliation
│   └── AI-Ready Datasets
│
└── Context Engineering
    ├── Document Understanding
    ├── Semantic / Contextual Retrieval
    ├── Organizational Memory
    └── Structured Context Feeding
```

- Demonstrates that data engineering is foundational infrastructure for downstream workflow execution, not an isolated back-office service.
- **Key Bridge:** Prominently links to workflows requiring deep context (e.g., invoice reconciliation, contract triage) and relevant technical guides.

---

## 7. Capability Page — AI Coworkers

- **Route:** `/capabilities/ai-coworkers`
- **Purpose:** Explain how Bayesforce builds digital coworkers that execute multi-step operational work through the tools employees already use.

### Conceptual Hierarchy

```
AI Coworkers
│
├── Multi-System Tool Orchestration
├── Context-Aware Reasoning
├── Human-in-the-Loop Collaboration
└── Resilient Execution & Error Handling
```

- Clarifies that coworkers are **not standalone chat bubbles**. They operate directly through:
  - Slack & Microsoft Teams
  - CRMs (Salesforce, HubSpot)
  - ERPs (SAP, NetSuite)
  - Email & Ticketing (Zendesk, Jira, ServiceNow)
  - Databases, APIs & Internal Tools
- Naturally routes visitors into the high-frequency operational workflows where coworkers execute work.

---

## 8. Capability Page — AI Trust & Governance

- **Route:** `/capabilities/ai-trust-governance`
- **Purpose:** Explain how Bayesforce makes AI systems observable, measurable, cost-aware, secure, and controllable enough to operate in production.

### Conceptual Hierarchy

```
AI Trust & Governance
│
├── AI Evaluations (Evals & Benchmarks)
├── AI Observability (Tracing & Monitoring)
├── AI FinOps (Cost Optimization & Unit Economics)
└── AI Safety & Governance (Compliance, Permissions, Red-Teaming)
```

- Serves as a primary enterprise credibility pillar, clearly distinguishing production engineering from prototype demos.
- Directly links to relevant case studies, governance guides, and research reports.

---

## 9. Capability Page — AI Enablement

- **Route:** `/capabilities/ai-enablement`
- **Purpose:** Explain how Bayesforce transfers the capability to organizations that want to build, operate, govern, and improve AI systems internally.

### Conceptual Hierarchy

```
AI Enablement
│
├── Enterprise AI Literacy
├── Leader / Manager Enablement
├── Workflow-Specific Technical Training
└── Capability Transfer
```

### The 4-Step Capability Transfer Model
```
Understand Workflow ──► Implement & Co-Engineer ──► Train & Transfer Knowledge ──► Measure Capability Delta
```

- Emphasizes that enablement is not generic corporate training; it is tied directly to actual operational workflows and co-engineered codebases.

---

## 10. Workflows Architecture

- **Navigation Label:** `Workflows`
- **Core Information Model Rule:**
  > **"Business Functions are navigational entities. Workflows are relational entities. Playbooks are the deep-content representation of workflows."**
- **Strict Route Model (One Page Per Business Function):** Inside `/workflows`, there are **no standalone routes for specific workflows** (e.g., there is no `/workflows/invoice-exception-handling` or `/workflows/lead-qualification`). Instead, there is strictly **one page per business function** (8 routes total). Each business-function page showcases the representative workflows for that area. When a visitor wants to explore the detailed mechanics of how a specific workflow is engineered, they are routed to its dedicated **Playbook** under `/insights/playbooks/[slug]`.
- The dropdown exposes eight business-function pages in standard commercial hypothesis order:
  - Revenue Operations
  - Customer Operations
  - Finance Operations
  - Procurement & Vendor Operations
  - Business Operations
  - Technology Operations
  - Legal, Risk & Compliance Operations
  - People Operations

---

## 11. Why Every Function Ends in "Operations"

The taxonomy is deliberately standardized:
- Revenue Operations
- Customer Operations
- Finance Operations
- Procurement & Vendor Operations
- Business Operations
- Technology Operations
- Legal, Risk & Compliance Operations
- People Operations

This gives the entire taxonomy an **operations-heavy character** and reinforces our positioning around organizational machinery:
$$\text{Information} \cdot \text{Systems} \cdot \text{Handoffs} \cdot \text{Decisions} \cdot \text{Approvals} \cdot \text{Exceptions} \cdot \text{Execution} \cdot \text{Records} \cdot \text{Measurement}$$

These are not 8 separate products—they are areas where the same underlying workflow-engineering capabilities are applied.

---

## 12. Function Page — General Structure

Every `/workflows/[business-function]` page follows a consistent 9-part information architecture:

```
1. Function Overview
        ↓
2. Where Operational Drag Appears
        ↓
3. Representative Workflows
        ↓
4. How Bayesforce Applies AI
        ↓
5. Relevant Capabilities
        ↓
6. Relevant Playbooks
        ↓
7. Relevant Case Studies
        ↓
8. Relevant Guides / Reports
        ↓
9. Talk to Bayesforce
```

---

## 13. Example Walkthrough: Procurement & Vendor Operations

- **Route:** `/workflows/procurement-vendor-operations`
- **Representative Workflows:**
  - Purchase Request & Policy Verification
  - Vendor Onboarding
  - Credential & Document Verification
  - Quote Comparison
  - Contract-to-PO Validation
  - Vendor Compliance
- **Content Strategy:** The function page provides the operational landscape and introduces candidate workflows. Visitors seeking implementation mechanics are routed directly into the corresponding Playbook:
  $$\text{Procurement \& Vendor Operations} \longrightarrow \text{Vendor Onboarding} \longrightarrow \text{`/insights/playbooks/vendor-onboarding`}$$
- This design prevents the site from requiring hundreds of shallow workflow pages on day one.

---

## 14. The Other Function Pages

### Revenue Operations
- **Route:** `/workflows/revenue-operations`
- **Candidate Workflows:** Lead Qualification & Routing, Account/CRM Enrichment, CRM Hygiene, Pipeline Inspection, Sales Follow-Up Orchestration, Account Research & Briefing.

### Customer Operations
- **Route:** `/workflows/customer-operations`
- **Candidate Workflows:** Context-Driven Ticket Investigation, Tier-1 Resolution, Customer History Reconstruction, Cross-Team Service Checks, Escalation Packet Preparation, Customer Onboarding Coordination.

### Finance Operations
- **Route:** `/workflows/finance-operations`
- **Candidate Workflows:** Invoice Intake & Extraction, PO/Invoice Reconciliation, Invoice Exception Handling, Cash Application, Vendor Statement Reconciliation, AR Dispute Management, Collections Prioritization.

### Business Operations
- **Route:** `/workflows/business-operations`
- **Candidate Workflows:** Internal Request Desk, Email-to-Workflow, SOP Execution, Approval Routing, Cross-Team Handoff Coordination, Exception Management, Recurring Reporting & Decision Packs.

### Technology Operations
- **Route:** `/workflows/technology-operations`
- **Candidate Workflows:** IT Service Desk, Access Provisioning, Incident Intake & Context Triage, Operational Knowledge Resolution, Release-Readiness Evidence Workflows.
- *Boundary:* Focuses strictly on operational work around technology rather than general developer tooling.

### Legal, Risk & Compliance Operations
- **Route:** `/workflows/legal-risk-compliance-operations`
- **Candidate Workflows:** Contract Intake, Obligation Tracking, Vendor Compliance, Compliance Questionnaire Response, Audit Evidence Collection, Policy Compliance Checking.
- *Boundary:* Always explicitly designed with human approval boundaries for legal/regulatory sign-off.

### People Operations
- **Route:** `/workflows/people-operations`
- **Candidate Workflows:** Employee Onboarding & Offboarding, HR Service Operations, Policy Question Resolution, Credential Verification, Employee Lifecycle Administration.
- *Boundary:* Focuses on administrative service workflows rather than autonomous employment decisions (hiring, firing, compensation).

---

## 15. Insights Architecture

- **Navigation Label:** `Insights`
- Insights represents the knowledge layer of Bayesforce, not a casual blog.

```
Insights
│
├── Case Studies   ──► Proof (Did Bayesforce actually change a workflow?)
├── Playbooks      ──► Workflow Knowledge (How should this workflow be approached?)
├── Guides         ──► Technical Knowledge (How do you solve production AI problems?)
└── Reports        ──► Market Analysis & Worldview (What is Bayesforce observing?)
```

### Route Structure
- Overview: `/insights`
- Section Hubs: `/insights/case-studies`, `/insights/playbooks`, `/insights/guides`, `/insights/reports`
- Detail Items: `[slug]` under each corresponding hub.

---

## 16. Insights Landing Page — `/insights`

Organized as a structured knowledge library rather than a chronological blog stream:
- **Featured Insight:** High-impact case study or flagship report.
- **Section Strips:** Recent Case Studies, Playbooks, Guides, Reports.
- **Cross-Dimensional Filtering:**
  - Content Type
  - Business Function
  - Workflow
  - Capability
  - Topic / Tag

---

## 17. Case Studies — `/insights/case-studies`

The empirical proof layer. Every case study follows an evidence-first narrative:

```
Customer & Operating Context
        ↓
Workflow Friction & Operational Drag
        ↓
Bayesforce Intervention
        ↓
System & AI Architecture
        ↓
Controls & Human Review Boundaries
        ↓
Deployment & Transition
        ↓
Measured Delta (Quantitative Impact)
        ↓
Lessons & Operational Takeaways
```

*Example route:* `/insights/case-studies/invoice-exception-handling`

---

## 18. Playbooks — `/insights/playbooks`

The bridge between inbound search intent and Bayesforce's commercial offerings. Explains how a specific operational workflow should be engineered:

```
Workflow Definition
        ↓
Why It Creates Operational Drag
        ↓
Current-State Manual Pattern
        ↓
Where AI Adds Leverage
        ↓
Data & Enterprise Context Required
        ↓
Reasoning & Decision Points
        ↓
System Actions & Tool Calls
        ↓
Human Approval Boundaries
        ↓
Evals & Observability Architecture
        ↓
Target Metrics & Expected Delta
        ↓
Relevant Bayesforce Capabilities
        ↓
Related Case Study
        ↓
Talk to Bayesforce
```

*Examples:* `/insights/playbooks/vendor-onboarding`, `/insights/playbooks/invoice-exception-handling`, `/insights/playbooks/ticket-investigation`

---

## 19. Guides — `/insights/guides`

The deep technical knowledge layer demonstrating production engineering competence:
- Context engineering and enterprise memory
- Hybrid retrieval architectures
- Custom eval design and CI/CD regression suites
- Observability, tracing, and root-cause analysis
- Prompt injection defenses and tool-call security
- Model routing, caching, and token cost optimization
- ERP/CRM integration patterns

*Examples:* `/insights/guides/context-engineering`, `/insights/guides/enterprise-ai-evals`, `/insights/guides/production-agent-cost-optimization`

---

## 20. Reports — `/insights/reports`

Market-analysis and thought leadership demonstrating Bayesforce's ongoing study of enterprise AI operations:
- *State of Enterprise AI Operations*
- *AI Workflow Adoption & Drag Benchmarks*
- *Agent Reliability in Production*
- *Enterprise AI Unit Economics*

---

## 21. The Connected Knowledge Graph: Workflows ↔ Insights

Content and commercial routes form an interconnected web:

```
Search Engine
      │
      ├──► Playbook ──────────► Workflow ──────► Capability ─────► Case Study ─────► Talk
      │
      └──► Technical Guide ───► Capability ────► Workflow ───────► Playbook ───────► Talk
```

A visitor arriving from any entry point is always offered a natural, context-aware progression toward exploring workflows, capabilities, and initiating a conversation.

---

## 22. Relational Taxonomy Model

The central architectural spine connects:

```
             CAPABILITIES
                  ↕
BUSINESS FUNCTION ↔ WORKFLOW
                  ↕
              INSIGHTS
```

Every operational workflow is a first-class relational entity connected across three dimensions:
1. **Belongs to a Business Function** (Where it operates)
2. **Requires Bayesforce Capabilities** (What is engineered to make it run)
3. **Connects to Insights** (Playbook for how it works, Guide for technical execution, Case Study for empirical proof)

### Concrete Entity Relationship Example

```
Invoice Exception Handling (Operational Workflow)
├── Business Function: Finance Operations (/workflows/finance-operations)
├── Requires Capabilities:
│   ├── AI Data Engineering (Document parsing & ERP sync)
│   ├── AI Coworkers (Investigation & resolution engine)
│   └── AI Trust & Governance (Approval thresholds & audit trail)
├── Learn Mechanics:
│   ├── Playbook: Invoice Exception Handling (/insights/playbooks/invoice-exception-handling)
│   └── Guide: Document Understanding for Unstructured Invoices (/insights/guides/document-understanding)
└── See Empirical Proof:
    └── Case Study: Mid-Market AP Invoice Reconciliation (/insights/case-studies/invoice-exception-handling)
```

---

## 23. Content Metadata as a First-Class Concept

Every published insight possesses structured relational metadata:

```yaml
Insight:
  type: Playbook | Case Study | Guide | Report
  title: String
  slug: String
  summary: String
  business_functions: [List of Business Functions]
  workflows: [List of Workflows]
  capabilities: [List of Capabilities]
  topics: [List of Tags]
  related_insights: [Slugs of cross-referenced insights]
```

This structure powers automated cross-referencing and dynamic "Related Workflows", "Related Capabilities", and "Related Case Studies" modules.

---

## 24. About — `/about`

Not a vanity history page; it establishes Bayesforce's worldview, identity, and operating principles:

```
Bayesforce Identity
        ↓
Vision (Systems carry machinery; people carry ambition)
        ↓
Mission (Make organizations move as fast as the world around them)
        ↓
The Operational Drag Thesis
        ↓
Our 5 Operating Principles:
   1. Work Before Technology
   2. Make Technology Invisible
   3. Earn Autonomy
   4. Prove the Delta
   5. Design for Ownership
        ↓
How We Work (11-Stage Delivery Model Overview)
        ↓
Leadership / Team
        ↓
Talk to Bayesforce
```

---

## 25. Talk — `/talk`

- **Primary Destination:** `/talk` (Explicitly chosen over `/contact`).
- **Architectural Rationale:** Conventional `/contact` pages invite generic vendor inquiries ("What is your pricing? Please send a pitch deck."). `/talk` is designed as a structured **workflow-discovery experience**: identifying the business function, operational drag, source systems, and measurable targets.
- **Core Concept:** The entry point is a structured discovery conversation about an operational workflow rather than a passive contact inbox.

### Progressive Discovery Flow
```
Have a workflow worth fixing?
            ↓
1. What business function does it live in?
            ↓
2. What specific operational workflow are you seeking to improve?
            ↓
3. What source systems, tools, and databases are involved?
            ↓
4. What does the current manual process look like?
            ↓
5. What would meaningful improvement look like (speed, error rate, capacity)?
            ↓
Schedule Diagnostic Workflow Evaluation
```

---

## 26. Careers — `/careers`

- Positioned in the global footer rather than primary header navigation.
- Route: `/careers` (Single open-ended landing page; no individual `[role-slug]` job postings initially).
- **Hiring by Intent, Not Rigid Titles:** In the initial stages, Bayesforce does not hire by conventional corporate role titles. We hire builders based on curiosity, craftsmanship, and intent:
  > *"We are always open to hire exceptional talent. Go through the website, understand our worldview, and tell us what value you can bring to Bayesforce."*
- Features an open application / open-intent submission prompt rather than a static list of corporate job specs.

---

## 27. Search — `/search`

- Global search index capable of querying across all primary content types:
  - Capabilities
  - Business Functions & Workflows
  - Case Studies
  - Playbooks
  - Guides
  - Reports
- Returns multi-dimensional result cards grouped by relevance and entity type.

---

## 28. Footer Architecture

Provides complete secondary navigation:

```
BAYESFORCE
Systems should carry more of the machinery of an organization so its people can carry more of its ambition.

Capabilities                   Workflows                      Insights               Company            Legal
├── AI Data Engineering        ├── Revenue Operations         ├── Case Studies       ├── About          ├── Privacy Policy
├── AI Coworkers               ├── Customer Operations        ├── Playbooks          ├── Careers        └── Terms of Service
├── AI Trust & Governance      ├── Finance Operations         ├── Guides             └── Talk
└── AI Enablement              ├── Procurement & Vendor Ops   └── Reports
                               ├── Business Operations
                               ├── Technology Operations
                               ├── Legal, Risk & Compliance
                               └── People Operations

© Bayesforce. All rights reserved.
```

---

## 29. Recommended User Journeys

### Journey A: Executive / Founder with an Operational Problem
$$\text{Home} \longrightarrow \text{Workflows} \longrightarrow \text{Finance Operations} \longrightarrow \text{Invoice Reconciliation} \longrightarrow \text{Playbook} \longrightarrow \text{Case Study} \longrightarrow \text{Talk}$$

### Journey B: Operations Leader via Organic Search
$$\text{Google (Query: "vendor onboarding automation")} \longrightarrow \text{Playbook} \longrightarrow \text{Procurement Ops} \longrightarrow \text{Capabilities} \longrightarrow \text{Case Study} \longrightarrow \text{Talk}$$

### Journey C: Technical Leader via Organic Search
$$\text{Google (Query: "enterprise ai eval framework")} \longrightarrow \text{Technical Guide} \longrightarrow \text{AI Trust \& Governance} \longrightarrow \text{Relevant Workflow} \longrightarrow \text{Playbook} \longrightarrow \text{Talk}$$

### Journey D: Enterprise Buyer Evaluating Bayesforce
$$\text{Home} \longrightarrow \text{Capabilities} \longrightarrow \text{AI Coworkers} \longrightarrow \text{AI Trust \& Governance} \longrightarrow \text{Case Studies} \longrightarrow \text{Reports} \longrightarrow \text{About} \longrightarrow \text{Talk}$$

---

## 30. Public Information Architecture vs. Internal Taxonomy

| Concept | Classification | Treatment on Website |
| :--- | :--- | :--- |
| **Capabilities** | Public 1st-Class | Primary Header dropdown & 4 dedicated routes |
| **Business Functions** | Public 1st-Class | Workflows dropdown & 8 dedicated routes |
| **Operational Workflows** | Public 1st-Class | Section features on function pages & dedicated Playbooks |
| **Insights (4 Types)** | Public 1st-Class | Insights dropdown & dedicated hub routes |
| **Workflow Archetypes** | Internal Supporting | Editorial concept featured on About & methodology sections |
| **Feasibility Screen (8 Factors)**| Internal Supporting | Featured on methodology sections & intake diagnostic |
| **11-Stage Delivery Model** | Internal Supporting | Core visual module on Homepage & About page |
| **Portfolio Tiers (1, 2, 3)** | Internal Supporting | Guides navigation order and commercial prioritization |

---

## 31. The Strategic Wedge Reflected in Navigation

The site reinforces our preferred land-and-expand trajectory:
$$\text{Specific Operational Workflow} \longrightarrow \text{Adjacent Workflows} \longrightarrow \text{Business Function} \longrightarrow \text{Cross-Functional Operations}$$

Every page persistently guides visitors from high-level positioning down to concrete workflow specifics.

---

## 32. The Website's Complete Information Hierarchy

```
LEVEL 0: Bayesforce Root (/)
│
├── LEVEL 1: Capabilities ("What We Engineer")
│   ├── /capabilities/ai-data-engineering
│   ├── /capabilities/ai-coworkers
│   ├── /capabilities/ai-trust-governance
│   └── /capabilities/ai-enablement
│
├── LEVEL 1: Workflows ("Where We Apply It")
│   ├── /workflows/revenue-operations
│   ├── /workflows/customer-operations
│   ├── /workflows/finance-operations
│   ├── /workflows/procurement-vendor-operations
│   ├── /workflows/business-operations
│   ├── /workflows/technology-operations
│   ├── /workflows/legal-risk-compliance-operations
│   └── /workflows/people-operations
│
├── LEVEL 1: Insights ("What We Know")
│   ├── /insights/case-studies/[slug]
│   ├── /insights/playbooks/[slug]
│   ├── /insights/guides/[slug]
│   └── /insights/reports/[slug]
│
├── LEVEL 1: Company & Conversion
│   ├── /about
│   └── /talk
│
└── LEVEL 2: Utility & Administration
    ├── /careers
    ├── /search
    ├── /privacy
    └── /terms
```

---

## 33. Complete Route Inventory

```
HOME
/

CAPABILITIES
├── /capabilities/ai-data-engineering
├── /capabilities/ai-coworkers
├── /capabilities/ai-trust-governance
└── /capabilities/ai-enablement

WORKFLOWS
├── /workflows/revenue-operations
├── /workflows/customer-operations
├── /workflows/finance-operations
├── /workflows/procurement-vendor-operations
├── /workflows/business-operations
├── /workflows/technology-operations
├── /workflows/legal-risk-compliance-operations
└── /workflows/people-operations

INSIGHTS
├── /insights
├── /insights/case-studies
│   └── /insights/case-studies/[slug]
├── /insights/playbooks
│   └── /insights/playbooks/[slug]
├── /insights/guides
│   └── /insights/guides/[slug]
└── /insights/reports
    └── /insights/reports/[slug]

COMPANY
├── /about
└── /careers

CONVERSION
└── /talk

UTILITY
├── /search
├── /privacy
└── /terms
```

---

## 34. Final Mental Model

The entire Bayesforce website operates as one connected, intelligent graph:

```
                      BAYESFORCE
                          │
          ┌───────────────┼────────────────┐
          ↓               ↓                ↓
    CAPABILITIES       WORKFLOWS        INSIGHTS
    What we build      Where it works   What we know
          │               │                │
          │               ↓                │
          │        Business Function       │
          │               │                │
          │               ↓                │
          └─────────► Specific Workflow ◄──┘
                           │
                  ┌────────┼────────┐
                  ↓        ↓        ↓
              Playbook    Guide   Case Study
                           │
                           ↓
                   TALK TO BAYESFORCE
```

The website is not a passive brochure. It is a live embodiment of the Bayesforce worldview:

> **Organizations contain operational drag.**  
> **Operational drag lives inside workflows.**  
> **Workflows can be engineered.**  
> **AI is one component of that engineering system.**  
> **Capabilities make the system possible.**  
> **Governance makes it trustworthy.**  
> **Evidence proves whether it worked.**  
> **Bayesforce's job is to make more of that work move forward.**
