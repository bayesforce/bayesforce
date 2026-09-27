# Page Specification: Talk to Bayesforce (`/talk`)

> **Route:** `/talk`  
> **Parent Hub:** [Web Design System](README.md)  
> **Type:** Primary Workflow Diagnostic Intake & Commercial Conversion

---

## 1. Page Metadata & Architectural Rationale

- **Page Title:** `Talk to Bayesforce — Diagnostic Workflow Intake & Consultation`
- **Meta Description:** `Tell us about the high-friction workflows in your organization. Schedule a diagnostic evaluation with a Bayesforce capability engineer.`
- **Architectural Rationale:** We deliberately avoid a generic `/contact` inbox. `/talk` is engineered as a structured **workflow-discovery experience** to evaluate business functions, current tools, and operational drag.
- **Visual Rhythms:** Focused, distraction-free Obsidian Dark layout with step-by-step interactive intake card.

---

## 2. Information Architecture & Wireframe Flow

```
┌─────────────────────────────────────────────────────────────┐
│ 1. Header: Focused & Restrained                             │
│    BayesForce Logo · Direct Link Back to /                  │
├─────────────────────────────────────────────────────────────┤
│ 2. Hero & Purpose (Obsidian Dark)                           │
│    Eyebrow: "DIAGNOSTIC WORKFLOW INTAKE"                    │
│    H1: "Have a workflow worth fixing?"                      │
│    Subcopy: "Tell us about your operational friction and    │
│    let's evaluate the measurable delta AI can unlock."      │
├─────────────────────────────────────────────────────────────┤
│ 3. Progressive 5-Step Diagnostic Intake Card                │
│    Step 1: Business Function Selection                      │
│    Step 2: Specific Operational Workflow Name / Description │
│    Step 3: Core Systems & Tools Involved (ERPs, CRMs)       │
│    Step 4: Current Manual Friction & Team Pain Points       │
│    Step 5: Target Metrics & Contact / Scheduling Details    │
├─────────────────────────────────────────────────────────────┤
│ 4. Trust & Security Assurance Strip                         │
│    NDA Guaranteed · Enterprise Security · Zero Replatforming│
└─────────────────────────────────────────────────────────────┘
```

---

## 3. Step-by-Step Diagnostic Form Specification

### Step 1: Business Function Selection (Pill Selector)
- `Revenue Operations`
- `Customer Operations`
- `Finance Operations`
- `Procurement & Vendor Operations`
- `Business Operations`
- `Technology Operations`
- `Legal, Risk & Compliance`
- `People Operations`
- `Cross-Functional / Other`

### Step 2: Specific Workflow Details
- *Prompt:* "What specific operational workflow are you seeking to improve?"
- *Examples shown dynamically based on Step 1 selection* (e.g. if Finance: "AP invoice exception handling, 3-way matching, cash application").

### Step 3: Source Systems & Tools Involved (Multi-Select Tags + Text)
- Common tags: `NetSuite`, `SAP`, `Salesforce`, `HubSpot`, `Zendesk`, `Jira`, `Workday`, `Slack`, `Postgres / Snowflake`, `Custom Internal APIs`.

### Step 4: Current Manual State & Operational Drag
- *Textarea:* "Where do handoffs get stuck? How many hours/people are currently involved?"

### Step 5: Contact & Diagnostic Scheduling
- Work Email, Full Name, Company Name, Calendar Picker / Scheduling Link.

---

## 4. Content Decision Checklist

- [ ] Confirm direct calendar integration (e.g. Cal.com / SavvyCal / Calendly embedded iframe vs. custom booking endpoint).
- [ ] Connect form submission webhook to RevOps routing workflow.
- [ ] Finalize standard NDA confirmation text.
