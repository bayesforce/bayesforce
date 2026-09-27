# BayesForce Web Design System & Architecture Specification

> **Canonical Brand Identity:** Cobalt Blue (`#013EFA`) × Obsidian Black (`#11151B`)  
> **Parent Hub:** [Bayesforce Hub](../README.md) | [Master Strategy Hub](../../README.md)  
> **Design Direction:** Precision AI Systems Engineering & Enterprise Operations

---

## 1. Brand Identity & Visual Philosophy

BayesForce is an **AI capability engineering firm**. The visual identity embodies:
- **Engineering depth & systems precision** (not a template or generic SaaS tool)
- **High-contrast authority** (Obsidian provides gravity; Cobalt provides intelligence; White space provides clarity)
- **Restrained energy** (smooth, deliberate micro-interactions without distracting flashiness)
- **Enterprise credibility** (crystal-clear typography, crisp borders, verifiable metrics)

### The Core Contrast Triad
$$\text{Obsidian Black (\#11151B)} \quad\longleftrightarrow\quad \text{Surface White (\#FFFFFF)} \quad\longleftrightarrow\quad \text{Cobalt Blue (\#013EFA)}$$

- **Obsidian Black (`#11151B`)**: Used for hero sections, high-impact dark cards, engineering diagrams, terminal viewports, and footers. Provides institutional weight and technical depth.
- **Surface White (`#FFFFFF` / `#F8FAFC`)**: Used for analytical sections, detailed documentation, case study breakdowns, and readable tables. Prevents visual fatigue.
- **Cobalt Blue (`#013EFA`)**: The **signal color**. Used for primary CTAs, active states, key data highlights, interactive node pulses, and the BayesForce mark. *Never used as ambient background wallpaper.*

---

## 2. Color Palette & Token System

### 2.1 Canonical Primary Colors

| Role | Token | Hex | RGB | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Brand Blue** | `--color-cobalt` | `#013EFA` | `rgb(1, 62, 250)` | Signal color: Logo, primary CTAs, active links, glow accents |
| **Primary Brand Dark** | `--color-obsidian` | `#11151B` | `rgb(17, 21, 27)` | Foundation: Hero backgrounds, dark sections, footers, authority |
| **Primary Surface** | `--color-surface` | `#FFFFFF` | `rgb(255, 255, 255)` | Clarity: Light backgrounds, clean readability |

### 2.2 Functional Extended Scale

```css
:root {
  /* Cobalt Scale */
  --cobalt-950: #001a70;
  --cobalt-900: #0029a8;
  --cobalt-700: #0036d9;
  --cobalt-500: #013efa; /* Canonical Brand Blue */
  --cobalt-400: #2463ff;
  --cobalt-300: #7db0ff;
  --cobalt-100: #e6eeff;
  --cobalt-50:  #f1f5ff;

  /* Obsidian Scale */
  --obsidian-950: #080b0f;
  --obsidian-900: #11151b; /* Canonical Brand Dark */
  --obsidian-850: #161b23;
  --obsidian-800: #1c222c;
  --obsidian-700: #242c38;
  --obsidian-600: #333f50;

  /* Neutral & Border Scale */
  --neutral-100: #f1f5f9;
  --neutral-200: #e2e8f0;
  --neutral-300: #cbd5e1;
  --neutral-400: #94a3b8;
  --neutral-500: #64748b;
  --neutral-700: #334155;
  --neutral-900: #0f172a;

  /* Dark Theme Borders & Glows */
  --border-dark: rgba(255, 255, 255, 0.08);
  --border-dark-hover: rgba(1, 62, 250, 0.4);
  --glow-cobalt: rgba(1, 62, 250, 0.15);
}
```

---

## 3. Typography Hierarchy

The typography pairs a characterful, geometric display font with a clean, high-legibility UI workhorse.

```
┌─────────────────────────────────────────────────────────────┐
│ DISPLAY / HEADINGS: Outfit                                  │
│ Modern geometric sans-serif with architectural precision     │
│ Weights: 400 (Regular), 500 (Medium), 600 (Semi), 700 (Bold)│
└─────────────────────────────────────────────────────────────┘
                              ▲
                              │ Pairing
                              ▼
┌─────────────────────────────────────────────────────────────┐
│ BODY / UI / TABLES: Inter                                   │
│ Industry-standard humanist sans-serif for reading comfort    │
│ Weights: 400 (Regular), 500 (Medium), 600 (SemiBold)        │
└─────────────────────────────────────────────────────────────┘
                              ▲
                              │ Pairing
                              ▼
┌─────────────────────────────────────────────────────────────┐
│ CODE / METRICS / EVALS: JetBrains Mono                      │
│ Monospace font for data schemas, stage tags, and evals      │
│ Weights: 400 (Regular), 500 (Medium)                        │
└─────────────────────────────────────────────────────────────┘
```

### Font Size & Application Scale

| Level | Size / Line-Height | Weight | Tracking | Font Family | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Display** | `56px – 72px / 1.1` | Bold (700) | `-0.03em` | Outfit | Homepage H1, major section anchors |
| **Page Title (H1)** | `40px – 48px / 1.15` | SemiBold (600) | `-0.025em` | Outfit | Capability, Workflow, & Insight titles |
| **Section Head (H2)**| `28px – 36px / 1.2` | SemiBold (600) | `-0.02em` | Outfit | Major section titles, bento headers |
| **Card Head (H3)** | `20px – 24px / 1.3` | Medium (500) | `-0.01em` | Outfit | Bento grid cards, playbook steps |
| **Eyebrow Badge** | `11px – 13px / 1.0` | SemiBold (600) | `+0.12em` | Outfit (Uppercase) | Category pills, capability tags |
| **Body Large** | `18px – 20px / 1.6` | Regular (400) | `-0.01em` | Inter | Hero sub-copy, lead paragraphs |
| **Body Regular** | `15px – 16px / 1.6` | Regular (400) | `0` | Inter | Standard body copy, card descriptions |
| **UI & Metadata** | `13px – 14px / 1.4` | Medium (500) | `0` | Inter | Navigation, table cells, timestamps |
| **Code & Evals** | `12px – 14px / 1.5` | Regular (400) | `0` | JetBrains Mono | Tool calls, metrics, JSON schemas |

---

## 4. Animation Stack & Interaction Libraries

To produce a responsive, state-of-the-art web experience, the frontend leverages a high-performance animation and interaction stack:

### 4.1 Recommended Libraries & Tooling

1. **GSAP & ScrollTrigger (`gsap`, `@gsap/react`, `gsap/ScrollTrigger`)** *(Primary Animation Engine)*
   - *Role:* High-performance timeline orchestration, scroll-driven triggers, staggered reveals, number count-ups, and interactive physics across all landing and feature sections.
   - *Client-Safe Setup:* Initialized in `@/lib/gsap` with automatic plugin registration (`gsap.registerPlugin(ScrollTrigger, useGSAP)`).
   - *Key Utilities & Components:*
     - `useGSAP`: Safe React hook scoping GSAP tweens and automatically killing animations on unmount.
     - `useScrollReveal`: ScrollTrigger hook for directional reveals (`up`, `down`, `left`, `right`) with custom stagger and ease curves.
     - `useCountUp`: Numeric interpolation for metrics, percentages, and benchmark stats.
     - `<GsapReveal>`: Declarative wrapper component for rapid section animations.

2. **Tailwind CSS 4 (`@tailwindcss/postcss`, `tailwindcss`)**
   - *Role:* Core utility styling engine, CSS variables integration, responsive layout grids, and hardware-accelerated CSS keyframe animations (pulses, radar sweeps, subtle gradients).

3. **Lucide React (`lucide-react`)**
   - *Role:* Crisp, stroke-based iconography (20px standard, stroke width 1.5px – 2.0px). Color-mapped directly to `--color-cobalt` and `--neutral-400`.

4. **Lenis (`@studio-freight/lenis` / `lenis`)**
   - *Role:* Fluid momentum scrolling across desktop viewports to give long-form Playbooks and deep-dive pages an executive feel.

5. **Canvas / SVG Micro-Interactions**
   - *Role:* Lightweight interactive nodes, workflow execution flow lines (animated dashed SVGs), and subtle glowing radial backdrops.

### 4.2 Motion Principles & Standards
- **Duration:** Micro-interactions (hover, focus, button clicks) must execute within **150ms–250ms**.
- **Page Transitions:** Section reveals and drawer expansions execute within **350ms–500ms** using cubic-bezier easing (`cubic-bezier(0.16, 1, 0.3, 1)`).
- **Restraint:** No gratuitous bouncing, floating or spinning. All motion must clarify system state (e.g. data flowing through a workflow pipeline).

---

## 5. Layout Architecture & Rhythms

### 5.1 Container Hierarchy
- **Standard Page Container:** `max-w-7xl` (`1280px`) with responsive padding (`px-4 sm:px-6 lg:px-8`).
- **Reading / Prose Container (Playbooks, Guides, Reports):** `max-w-4xl` (`896px`) centered for optimal reading length.
- **Narrow Form / Conversion Container (`/talk`):** `max-w-2xl` (`672px`) for focused, step-by-step diagnostic entry.

### 5.2 Alternating Contrast Rhythm
Pages avoid monochromatic monotony by alternating between deep obsidian surfaces and crisp light surfaces:

```
┌─────────────────────────────────────────────────────────────┐
│ 1. Obsidian Black Hero (#11151B)                           │
│    High-contrast H1, pill badge, glowing cobalt signal      │
├─────────────────────────────────────────────────────────────┤
│ 2. Surface Light Section (#FFFFFF / #F8FAFC)               │
│    Analytical grid, readable cards, operational drag proof  │
├─────────────────────────────────────────────────────────────┤
│ 3. Obsidian Black Architecture Section (#11151B)           │
│    Systems diagram, 11-stage delivery model, terminal view  │
├─────────────────────────────────────────────────────────────┤
│ 4. Surface Light Case Studies & Playbooks (#FFFFFF)        │
│    Structured tables, delta measurements, related insights  │
├─────────────────────────────────────────────────────────────┤
│ 5. Obsidian Black CTA & Master Footer (#11151B)            │
│    Diagnostic intake trigger, comprehensive sitemap         │
└─────────────────────────────────────────────────────────────┘
```

---

## 6. Directory & Route Hierarchy

The documentation is organized to mirror the exact route structure of the web application. Each file defines the blueprint, layout, wireframe flow, and content placeholders for that specific page.

```
docs/bayesforce/02_web_design/
├── README.md                                  # [Root System] Global Design System & Token Spec (This File)
├── home.md                                    # [/] Homepage Blueprint
│
├── capabilities/                              # [/capabilities/*] Capability Deep Dives
│   ├── ai-data-engineering.md                 # [/capabilities/ai-data-engineering]
│   ├── ai-coworkers.md                        # [/capabilities/ai-coworkers]
│   ├── ai-trust-governance.md                 # [/capabilities/ai-trust-governance]
│   └── ai-enablement.md                       # [/capabilities/ai-enablement]
│
├── workflows/                                 # [/workflows/*] 8 Business Function Operation Hubs
│   ├── revenue-operations.md                  # [/workflows/revenue-operations]
│   ├── customer-operations.md                 # [/workflows/customer-operations]
│   ├── finance-operations.md                  # [/workflows/finance-operations]
│   ├── procurement-vendor-operations.md       # [/workflows/procurement-vendor-operations]
│   ├── business-operations.md                 # [/workflows/business-operations]
│   ├── technology-operations.md               # [/workflows/technology-operations]
│   ├── legal-risk-compliance-operations.md    # [/workflows/legal-risk-compliance-operations]
│   └── people-operations.md                   # [/workflows/people-operations]
│
├── insights/                                  # [/insights/*] Connected Knowledge & Proof Library
│   ├── index.md                               # [/insights] Knowledge Library Hub
│   ├── case-studies/                          # [/insights/case-studies/*] Empirical Proof
│   │   ├── README.md                          # Case Studies Overview & Schema
│   │   ├── invoice-exception-handling.md      # Case Study: AP Invoice Exception Handling
│   │   └── vendor-onboarding-triage.md        # Case Study: Vendor Onboarding & Compliance Triage
│   ├── playbooks/                             # [/insights/playbooks/*] Workflow Engineering Blueprints
│   │   ├── README.md                          # Playbooks Overview & Schema
│   │   ├── invoice-exception-handling.md      # Playbook: Invoice Exception Handling
│   │   ├── lead-qualification-and-routing.md  # Playbook: Inbound Lead Qualification & Routing
│   │   └── vendor-onboarding.md               # Playbook: End-to-End Vendor Onboarding
│   ├── guides/                                # [/insights/guides/*] Technical Knowledge & Deep Dives
│   │   ├── README.md                          # Technical Guides Overview & Schema
│   │   ├── context-engineering.md             # Guide: Context Engineering & Organizational Memory
│   │   ├── enterprise-ai-evals.md             # Guide: Custom Evals & CI/CD Regression Testing
│   │   └── production-agent-cost-optimization.md # Guide: Token Cost Optimization & Routing
│   └── reports/                               # [/insights/reports/*] Market Research & Worldview
│       ├── README.md                          # Reports Overview & Schema
│       ├── state-of-enterprise-ai-operations.md  # Report: State of Enterprise AI Operations
│       └── ai-workflow-drag-benchmarks.md     # Report: AI Workflow Adoption & Drag Benchmarks
│
├── about.md                                   # [/about] Vision, Principles & Operating Model
├── careers.md                                 # [/careers] Open-Intent Hiring & Culture
├── talk.md                                    # [/talk] Diagnostic Intake & Workflow Discovery (Primary CTA)
├── search.md                                  # [/search] Global Relational Knowledge Search
├── privacy.md                                 # [/privacy] Enterprise Data Privacy Policy
└── terms.md                                   # [/terms] Terms of Service
```

---

## 7. Next Steps for Content Population

1. **Review Wireframe Structures:** Review the route files to verify section flows and component compositions.
2. **Refine Copy & Specifics:** Populate exact customer case studies, quantitative metrics, and technical code snippets within each page markdown.
3. **Frontend Implementation:** Scaffold the Next.js routes under `apps/landing/app/` following the exact specs defined in this hierarchy.
