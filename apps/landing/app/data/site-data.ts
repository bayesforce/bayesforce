export interface CapabilityItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  positioning: string;
  tagline: string;
  kicker: string;
  icon: string;
  summary: string;
  problemStatement: string;
  bayesforceApproach: string;
  keyPillars: {
    title: string;
    description: string;
    details: string[];
  }[];
  architectureHighlights: {
    layer: string;
    tech: string;
    purpose: string;
  }[];
  operationalMetrics: {
    label: string;
    value: string;
    delta: string;
    context: string;
  }[];
  targetAudience: string[];
  relatedWorkflows: string[]; // slugs of workflows
  relatedInsights: string[];  // slugs of case studies/playbooks/reports/guides
  ctaText?: string;
  ctaHref?: string;
}

export interface WorkflowItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  kicker: string;
  icon: string;
  heroHeadline: string;
  summary: string;
  whatHappens: string;
  whereMachineryAccumulates: string[];
  representativeWorkflows: {
    name: string;
    description: string;
    mode: "Deterministic" | "Probabilistic AI" | "Human Review Gate";
  }[];
  approach: string;
  relevantCapabilities: string[];
  relevantSystems: string[];
  humanVsAi: {
    deterministicTasks: string[];
    probabilisticAiTasks: string[];
    humanResponsibility: string[];
  };
  operationalBottleneck: string;
  bayesforceSolution: string;
  executionFlow: {
    stepNumber: number;
    phase: string;
    action: string;
    governance: string;
    outcome: string;
  }[];
  beforeVsAfter: {
    dimension: string;
    traditional: string;
    bayesforce: string;
  }[];
  hardMetrics: {
    metric: string;
    benchmark: string;
    achieved: string;
  }[];
  applicableCapabilities: string[]; // slugs of capabilities
  relatedInsights: string[];       // slugs of case studies/playbooks
}

export type InsightType = "case-studies" | "playbooks" | "reports" | "guides";

export interface InsightItem {
  slug: string;
  type: InsightType;
  typeLabel: string;
  title: string;
  kicker: string;
  subtitle: string;
  readTime: string;
  publishedDate: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  summary: string;
  tags: string[];
  metricsDelta?: {
    label: string;
    value: string;
  }[];
  contentSections: {
    heading: string;
    lead?: string;
    paragraphs: string[];
    callout?: {
      type: "tip" | "warning" | "highlight" | "quote";
      text: string;
    };
    codeBlock?: {
      language: string;
      code: string;
      caption?: string;
    };
    tableData?: {
      headers: string[];
      rows: string[][];
    };
  }[];
  relatedCapabilities: string[];
  relatedWorkflows: string[];
  relatedInsights?: string[];
}

export interface CareerRole {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  summary: string;
  whatYouWillBuild: string[];
  requirements: string[];
  niceToHave: string[];
}

/* ==========================================================================
   1. CAPABILITIES (WHAT WE BUILD - 4 CORE PILLARS)
   ========================================================================== */

export const CAPABILITIES: CapabilityItem[] = [
  {
    id: "ai-data-engineering",
    slug: "ai-data-engineering",
    title: "AI Data Engineering: The Reliable Information Layer for Enterprise AI",
    shortTitle: "AI Data Engineering",
    positioning: "Give AI the data it needs to work.",
    tagline: "Engineering the foundation so AI models have clean, validated, real-time access to organizational truth.",
    kicker: "Capability Pillar 01",
    icon: "database",
    summary:
      "AI becomes valuable only when it can access the right information without hallucinations or stale context. Bayesforce engineers the information layer required for AI-enabled workflows: connecting enterprise source systems, building robust data pipelines, extracting structured facts from messy documents, reconciling cross-system discrepancies, and generating AI-ready datasets.",
    problemStatement:
      "Organizations already possess vast amounts of data across CRMs, ERPs, databases, helpdesks, HR systems, document repositories, and emails. Yet this data is fragmented, unstructured, messy, and constantly shifting. Standard vector databases lack layout topology and real-time synchronization, causing AI models to hallucinate or miss critical operational context.",
    bayesforceApproach:
      "We build workflow-specific AI data engineering pipelines rather than generic infrastructure for its own sake. We design deterministic extractors, layout-aware multi-modal document parsers, automated cross-system reconciliation, and event-driven data flows that keep AI systems synchronized with real-time systems of record.",
    keyPillars: [
      {
        title: "Enterprise Source Systems & Integrations",
        description:
          "Reliable, bi-directional connectors into CRM, ERP, databases, helpdesks, HR systems, document repositories, internal applications, and APIs.",
        details: [
          "Native API and event-stream ingestion across Salesforce, NetSuite, SAP, Zendesk, Jira, and PostgreSQL",
          "Secure credential management and least-privilege enterprise read/write scopes",
          "Resilient rate limiting, exponential backoff, and change data capture (CDC)",
        ],
      },
      {
        title: "AI Data Pipelines & Synchronization",
        description:
          "Event-driven data flows for ingestion, transformation, synchronization, and structured/unstructured processing tailored to specific workflows.",
        details: [
          "Sub-second event synchronization from core transactional databases to vector and knowledge stores",
          "Workflow-specific data flows that route context directly to the coworker that needs it",
          "Automated index invalidation and semantic cache maintenance when records update",
        ],
      },
      {
        title: "Extraction & Normalization",
        description:
          "Transforming messy multi-format documents, scanned PDFs, invoices, contracts, emails, and operational tables into reliable structured representations.",
        details: [
          "Layout-aware OCR and bounding-box tokenization preserving nested table hierarchies",
          "Deterministic schema validation with Pydantic and Zod data contracts",
          "Entity resolution across disparate naming formats and multi-currency standards",
        ],
      },
      {
        title: "Data Quality & Reconciliation",
        description:
          "Validation, deduplication, consistency checks, cross-system reconciliation, and automated exception detection.",
        details: [
          "Multi-system discrepancy detection comparing ERP ledgers, CRM pipeline stages, and banking statements",
          "Cryptographic record hashing to eliminate duplicate ingestion and conflicting transactions",
          "Automated exception flagging for human review before data enters AI memory",
        ],
      },
      {
        title: "AI-Ready Datasets",
        description:
          "Preparing data specifically for operational AI workflows rather than building generic enterprise data warehouses for their own sake.",
        details: [
          "Hierarchical parent-child chunking preserving legal and financial document topology",
          "Hybrid sparse (BM25) and dense semantic embeddings with reciprocal rank fusion (RRF)",
          "Audit-grade data lineage tracking every embedded token back to its source system and timestamp",
        ],
      },
    ],
    architectureHighlights: [
      {
        layer: "Source Integration Layer",
        tech: "Postgres CDC, Webhook Listeners, OAuth2 Connectors, Apache Arrow",
        purpose: "Ingest structured events and raw documents from CRM, ERP, and internal APIs.",
      },
      {
        layer: "Extraction & Normalization",
        tech: "Docling, LayoutLMv3, Pydantic Schema Contracts",
        purpose: "Extract tables, key-value pairs, and hierarchical text without loss of fidelity.",
      },
      {
        layer: "Memory & Hybrid Retrieval",
        tech: "Qdrant / Milvus + Neo4j GraphRAG + Redis Semantic Cache",
        purpose: "Sub-50ms hybrid retrieval combining dense vectors, BM25 keywords, and entity graphs.",
      },
    ],
    operationalMetrics: [
      {
        label: "Context Retrieval Accuracy",
        value: "99.4%",
        delta: "+36%",
        context: "Versus standard baseline RAG implementations",
      },
      {
        label: "Document Ingestion Speed",
        value: "500k pgs/day",
        delta: "14x",
        context: "High-throughput parallelized parsing pipeline",
      },
      {
        label: "Cross-System Sync Lag",
        value: "< 2.8s",
        delta: "-95%",
        context: "From system-of-record update to AI memory availability",
      },
    ],
    targetAudience: [
      "Chief Information Officers & Enterprise Architects",
      "VPs of Data Engineering & Infrastructure",
      "Operations leaders burdened by manual cross-system data reconciliation",
    ],
    relatedWorkflows: ["finance-and-accounting", "revenue-ops", "legal-risk-and-compliance", "technology-ops"],
    relatedInsights: ["enterprise-second-brain-architecture", "unstructured-document-parsing-at-scale", "tier-1-fintech-recon"],
    ctaText: "See workflows that depend on AI data engineering",
    ctaHref: "/workflows",
  },
  {
    id: "ai-coworkers",
    slug: "ai-coworkers",
    title: "AI Coworkers: Autonomous Systems That Operate Across the Work",
    shortTitle: "AI Coworkers",
    positioning: "AI systems that operate across the work.",
    tagline: "Autonomous digital coworkers that understand context, execute tools, coordinate deterministic and AI steps, and update systems of record.",
    kicker: "Capability Pillar 02",
    icon: "users",
    summary:
      "An AI coworker is not merely a chatbot or copilot. It can understand organizational context, reason over complex information, use tools and APIs, coordinate deterministic and AI-driven steps, and produce verified actions within clearly defined boundaries. The objective is sensible automation, not maximum autonomy.",
    problemStatement:
      "Stateless conversational chatbots cannot do real work. They hallucinate API calls, lose task context over multi-step workflows, lack authorization boundaries, and fail when encountering real-world enterprise edge cases.",
    bayesforceApproach:
      "We design and deploy stateful, governed AI coworkers. Each coworker operates within defined boundaries: executing deterministic routines where rules are fixed, probabilistic AI reasoning where ambiguity exists, and human-in-the-loop gates where high-stakes judgment is required.",
    keyPillars: [
      {
        title: "Multi-Agent Workflow Orchestration",
        description:
          "Hierarchical supervisor-worker architectures that break massive operational workflows into discrete, verifiable subtasks.",
        details: [
          "State machines with deterministic recovery checkpoints and rollback logic",
          "Specialized agent roles for intake, context retrieval, synthesis, drafting, and audit",
          "Asynchronous queue processing with rate limit and failure resilience",
        ],
      },
      {
        title: "Sandboxed Tool & API Execution",
        description:
          "Secure execution environments where agents safely interact with Salesforce, SAP, Jira, Slack, email, and databases.",
        details: [
          "Granular role-based tool authorization and cryptographic execution scopes",
          "Dry-run simulation and diff verification before committing database mutations",
          "Automatic idempotency keys to prevent duplicate actions across external systems",
        ],
      },
      {
        title: "Sensible Automation & Human Approval Gates",
        description:
          "Configurable confidence thresholds that require human confirmation for consequential actions until statistical trust is proven.",
        details: [
          "Interactive Slack, Teams, and web review cards showing complete context and diffs",
          "One-click human approval, modification, or rejection with learning feedback loops",
          "Comprehensive decision audit trails for internal risk and compliance reviews",
        ],
      },
      {
        title: "Systems-of-Record Updates & Outcome Measurement",
        description:
          "Writing back verified state to enterprise databases and continuously measuring operational cycle times and error rates.",
        details: [
          "Automatic updates to CRM fields, ERP ledgers, Jira tickets, and customer records",
          "Real-time tracking of task cycle time, throughput, exception rates, and manual intervention",
          "Continuous system improvement driven by operator feedback and edge-case cataloging",
        ],
      },
    ],
    architectureHighlights: [
      {
        layer: "Agent Runtime & State Engine",
        tech: "LangGraph / Custom Cyclic State Machines (Python/TypeScript)",
        purpose: "Stateful graph execution with persistent checkpoints and rollback support.",
      },
      {
        layer: "Tool Execution Sandbox",
        tech: "eBPF-Isolated MicroVMs + OAuth2 API Proxy",
        purpose: "Safely execute tool calls, database queries, and external webhook mutations.",
      },
      {
        layer: "Human Review Interface",
        tech: "Interactive Slack/Teams Blocks + Web Review Console",
        purpose: "1-click human approvals, diff inspections, and exception handoffs.",
      },
    ],
    operationalMetrics: [
      {
        label: "Routine Task Automation",
        value: "86.2%",
        delta: "+64%",
        context: "Repetitive operational handoffs carried autonomously",
      },
      {
        label: "Average Task Cycle Time",
        value: "38 sec",
        delta: "-97%",
        context: "From trigger arrival to verified execution packet",
      },
      {
        label: "False Positive Actions",
        value: "0.0%",
        delta: "Zero Breaches",
        context: "All ambiguous edge cases escalated to human review",
      },
    ],
    targetAudience: [
      "Chief Operating Officers seeking scalable operating capacity",
      "Heads of Shared Services & Business Operations",
      "Functional VPs across Revenue, Finance, Customer Ops, and Legal",
    ],
    relatedWorkflows: ["revenue-ops", "customer-ops", "finance-and-accounting", "procurement-and-supply", "business-ops"],
    relatedInsights: ["human-in-the-loop-escalation-design", "midmarket-b2b-saas-revops", "the-unit-economics-of-digital-labor"],
    ctaText: "Explore workflows",
    ctaHref: "/workflows",
  },
  {
    id: "ai-trust-and-governance",
    slug: "ai-trust-and-governance",
    title: "AI Trust & Governance: Making AI Work Beyond the Demo",
    shortTitle: "AI Trust & Governance",
    positioning: "AI should work beyond the demo.",
    tagline: "Rigorous evaluations, observability, FinOps controls, and safety governance for production AI systems.",
    kicker: "Capability Pillar 03",
    icon: "shield-check",
    summary:
      "Enterprise AI cannot rely on demo enthusiasm. Production AI needs to be measurable, observable, controllable, secure, and economically viable. Bayesforce implements workflow-specific evaluations, full tool-call tracing, token FinOps, access controls, agent boundaries, prompt leakage defenses, and compliance audit trails.",
    problemStatement:
      "Organizations hesitate to move AI from prototype to production because of unmeasurable hallucinations, unpredictable prompt drift, prompt injection vulnerabilities, data leakage risks, runaway token costs, and the absence of verifiable audit logs required by risk and compliance committees.",
    bayesforceApproach:
      "We apply rigorous statistical evaluation harnesses and enterprise governance layers. Every agent step, tool call, and retrieval query is benchmarked against continuous golden evaluation suites, bounded by permission sandboxes, monitored for cost, and logged in immutable audit trails.",
    keyPillars: [
      {
        title: "Evals & Quality Engineering",
        description:
          "Workflow-specific evaluations, task correctness benchmarks, agent metrics, regression test suites, and outcome-based quality measurement.",
        details: [
          "Workflow-tailored evaluation harnesses scoring factual precision, semantic consistency, and tool correctness",
          "Golden dataset curation with synthetic adversarial edge cases and domain test sets",
          "Automated CI/CD regression gates blocking prompt or model changes that cause performance degradation",
        ],
      },
      {
        title: "AI Observability & Tracing",
        description:
          "End-to-end execution traces, tool-call sequences, failure monitoring, latency tracking, production behavior analysis, and debugging.",
        details: [
          "Full distributed tracing for every agent thought, tool execution, and database interaction",
          "Real-time failure detection, alert routing, and anomaly monitoring for degrading models",
          "Interactive replay debugging allowing engineers to step through production failures",
        ],
      },
      {
        title: "AI FinOps & Cost Governance",
        description:
          "Token monitoring, workflow-level cost attribution, model usage analytics, intelligent model routing, and cost optimization.",
        details: [
          "Granular token spend tracking attributed to specific departments, workflows, and business outcomes",
          "Intelligent semantic caching reducing redundant LLM inference calls by up to 60%",
          "Dynamic model tiering routing routine classification to fast local models and complex reasoning to frontier models",
        ],
      },
      {
        title: "AI Safety, Security & Governance",
        description:
          "Permissions, access controls, agent boundaries, data protection, prompt/data leakage controls, security testing, policy enforcement, and audit trails.",
        details: [
          "Multi-layered firewalls protecting against direct and indirect prompt injection and data extraction",
          "Role-based access control (RBAC) ensuring agents access only data the requesting user is authorized to see",
          "Immutable cryptographic audit trails for SOC2, ISO27001, and regulatory compliance reviews",
        ],
      },
    ],
    architectureHighlights: [
      {
        layer: "Evaluation & Benchmarking",
        tech: "Ragas, DeepEval, Custom Bayesian Scorer, Pytest CI/CD",
        purpose: "Continuous statistical regression testing of prompt accuracy and tool correctness.",
      },
      {
        layer: "Observability & Tracing",
        tech: "OpenTelemetry + Langfuse / Arize Phoenix",
        purpose: "Distributed tool-call tracing, latency analysis, and failure alerts.",
      },
      {
        layer: "Security & FinOps Gateway",
        tech: "NeMo Guardrails + Semantic Cache + LiteLLM Proxy",
        purpose: "Prompt injection filtering, PII masking, token rate limiting, and model routing.",
      },
    ],
    operationalMetrics: [
      {
        label: "Prompt Injection Defense",
        value: "99.96%",
        delta: "Zero Breaches",
        context: "Tested against 25,000+ adversarial prompt payloads",
      },
      {
        label: "Hallucination Rate",
        value: "< 0.3%",
        delta: "-93%",
        context: "Strict grounding against verified source documents",
      },
      {
        label: "Inference Cost Optimization",
        value: "58.4%",
        delta: "Cost Savings",
        context: "Via prompt caching, compression, and smart model routing",
      },
    ],
    targetAudience: [
      "Chief Information Security Officers (CISOs) & Risk Officers",
      "Chief Compliance Officers & General Counsel",
      "Enterprise AI Program Directors demanding production reliability",
    ],
    relatedWorkflows: ["legal-risk-and-compliance", "finance-and-accounting", "technology-ops"],
    relatedInsights: ["statistical-evaluation-harness", "prompt-injection-red-teaming-guide", "statistical-trust-in-mission-critical-ai"],
    ctaText: "Build AI that can operate in production",
    ctaHref: "/contact",
  },
  {
    id: "ai-capability",
    slug: "ai-capability",
    title: "AI Capability: Transferring the Methods to Build and Operate In-House",
    shortTitle: "AI Capability",
    positioning: "Build the capability to do it yourself.",
    tagline: "Transferring the methods, practices, and knowledge teams need to design, implement, and operate AI-enabled work themselves.",
    kicker: "Capability Pillar 04",
    icon: "sparkles",
    summary:
      "Not every organization wants Bayesforce to build and operate every AI capability for them. We also transfer the methods, practices, and engineering knowledge teams need to identify, design, implement, operate, and continuously improve AI-enabled work themselves.",
    problemStatement:
      "Most corporate AI training consists of superficial slide decks, generic prompt tips, or vendor-locked certifications that leave internal teams unable to design, evaluate, or maintain real production systems, locking companies into expensive perpetual agency retainers.",
    bayesforceApproach:
      "We transfer production engineering blueprints, evaluation frameworks, and operational playbooks directly into your team's day-to-day workflow. We pair with your engineers on real systems and train functional leaders to redesign work around digital labor.",
    keyPillars: [
      {
        title: "Enterprise AI Literacy",
        description:
          "Foundational understanding of AI capabilities, limitations, responsible use, practical adoption, and AI-enabled work.",
        details: [
          "Demystifying foundation models, probabilistic reasoning, and deterministic constraints for broad organizational literacy",
          "Understanding where AI excels (extraction, synthesis, triage) and where it fails (unbounded math, absolute certainty)",
          "Responsible AI guidelines, data privacy hygiene, and ethical operational boundaries",
        ],
      },
      {
        title: "AI Capability for Leaders & Managers",
        description:
          "Teaching leaders to identify opportunities, evaluate workflows, redesign work, understand AI economics, establish governance, and measure outcomes.",
        details: [
          "Workflow triage frameworks to calculate the cost of manual machinery and prioritize high-ROI opportunities",
          "Unit economics of digital labor: modeling compute costs vs. recovered employee judgment hours",
          "Designing organizational structures, human-in-the-loop policies, and accountability metrics for AI-enabled teams",
        ],
      },
      {
        title: "Workflow-Specific AI Training",
        description:
          "Training teams around the actual workflows they operate: workflow redesign, AI implementation, agent operation, evaluation, and human review.",
        details: [
          "Hands-on workflow redesign mapping inputs, context retrieval, decision rules, and action outputs",
          "Operating and supervising AI coworkers: mastering one-click review, exception handling, and edge-case tagging",
          "Continuous feedback loops and knowledge transfer enabling teams to update prompt contracts and evaluation suites",
        ],
      },
      {
        title: "Delivery Formats & Capability Measurement",
        description:
          "Workshops, executive sessions, technical bootcamps, custom corporate programs, and train-the-trainer AI champions with measurable capability outcomes.",
        details: [
          "1-day executive alignment workshops, multi-week engineering bootcamps, and train-the-trainer programs",
          "Capability measurement based on tangible working prototypes and workflow deployments rather than mere attendance",
          "Comprehensive documentation, standard operating procedures (SOPs), and architectural runbooks delivered to client repos",
        ],
      },
    ],
    architectureHighlights: [
      {
        layer: "Applied Curriculum Repository",
        tech: "Interactive Codebases + Real Enterprise Workflow Sandboxes",
        purpose: "Hands-on implementation of production agent architectures.",
      },
      {
        layer: "Co-Engineering Sprints",
        tech: "Client Git Repositories & Internal Staging Environments",
        purpose: "Collaborative pair programming on client-specific production workflows.",
      },
      {
        layer: "Operational Playbooks",
        tech: "SOPs, Evaluation Suites, and Runbooks",
        purpose: "Reusable intellectual property for independent in-house operation.",
      },
    ],
    operationalMetrics: [
      {
        label: "Internal Team Sovereignty",
        value: "100%",
        delta: "Zero Lock-In",
        context: "Client teams independently operate, evaluate, and extend systems",
      },
      {
        label: "Time to First Internal Prototype",
        value: "8 Days",
        delta: "-85%",
        context: "From training kickoff to working internal workflow agent",
      },
      {
        label: "Capability Retention",
        value: "96.2%",
        delta: "Measurable Mastery",
        context: "Measured through successful deployment of new internal workflows",
      },
    ],
    targetAudience: [
      "Chief Executive Officers & Board Members driving AI transformation",
      "Chief Technology Officers & VPs of Engineering upskilling talent",
      "Heads of Learning & Development, Human Resources, and Strategy",
    ],
    relatedWorkflows: ["business-ops", "technology-ops", "people-ops"],
    relatedInsights: ["state-of-enterprise-agent-readiness-2026", "the-unit-economics-of-digital-labor"],
    ctaText: "Build AI capability in-house",
    ctaHref: "/contact",
  },
];

/* ==========================================================================
   2. WORKFLOWS (8 OPERATIONAL FAMILIES)
   ========================================================================== */

export const WORKFLOWS: WorkflowItem[] = [
  {
    id: "revenue-ops",
    slug: "revenue-ops",
    title: "Revenue Operations: High-Velocity Pipeline & Autonomous Commercial Intelligence",
    shortTitle: "Revenue Operations",
    category: "Commercial Systems",
    kicker: "Workflow Family 01",
    icon: "trending-up",
    heroHeadline: "Multiply selling hours by automating lead research, qualification, CRM hygiene, and meeting preparation.",
    summary:
      "Eliminate the administrative machinery that drags down sales teams. Bayesforce deploys revenue operations coworkers that handle lead research, multi-source enrichment, qualification scoring, routing, CRM hygiene, follow-up drafting, RFP response synthesis, pipeline operations, and renewal intelligence.",
    whatHappens:
      "Revenue operations is the commercial engine of the organization. It manages inbound and outbound lead flow, account enrichment, territory routing, CRM hygiene, sales meeting preparation, proposal/RFP drafting, pipeline forecasting, and renewal/upsell tracking across marketing, sales, and customer success.",
    whereMachineryAccumulates: [
      "Account Executives and SDRs spending 60%+ of their week researching prospects, updating CRM fields, and logging notes manually",
      "Inbound leads waiting hours or days for manual qualification and routing while buyer intent decays",
      "Sales reps spending hours before enterprise calls hunting through fragmented notes, LinkedIn profiles, and news filings",
      "Complex RFP/proposal questionnaires requiring weeks of copying past answers across scattered Word and Excel files",
      "Pipeline forecasts built on stale, incomplete CRM data rather than verified interaction evidence",
    ],
    representativeWorkflows: [
      { name: "Lead Research & Enrichment", description: "Aggregates corporate filings, hiring trends, tech stacks, and buyer signals into unified dossiers.", mode: "Probabilistic AI" },
      { name: "Lead Qualification & Routing", description: "Scores inbound accounts against ICP criteria and routes instantly to the right territory owner.", mode: "Deterministic" },
      { name: "CRM Operations & Hygiene", description: "Extracts key fields, next steps, and MEDDPICC criteria from call transcripts to keep CRM records updated.", mode: "Probabilistic AI" },
      { name: "Sales Follow-up & Meeting Prep", description: "Generates tailored executive briefings before calls and drafts contextual follow-up emails immediately after.", mode: "Probabilistic AI" },
      { name: "Proposal & RFP Support", description: "Extracts technical requirements from RFPs and drafts accurate responses grounded in verified product documentation.", mode: "Probabilistic AI" },
      { name: "Pipeline Operations & Forecasting", description: "Monitors deal momentum, flags stagnant opportunities, and tracks stage slippage risks.", mode: "Deterministic" },
      { name: "Renewal & Upsell Intelligence", description: "Tracks product usage trends and contract anniversary dates to prepare proactive account expansion briefs.", mode: "Probabilistic AI" },
      { name: "Marketing-to-Sales Handoffs", description: "Synthesizes intent signals and campaign touches into structured sales handoff packets.", mode: "Deterministic" },
    ],
    approach:
      "Bayesforce connects to your existing CRM, email, call recording, and enrichment tools. We layer intelligent ingestion and autonomous coworkers over these systems to handle lead research, CRM field synchronization, and proposal drafting, while keeping sales reps in full control of client communications and final deal commitments.",
    relevantCapabilities: ["ai-data-engineering", "ai-coworkers", "ai-trust-and-governance"],
    relevantSystems: ["Salesforce", "HubSpot", "Gong / Chorus", "Apollo / ZoomInfo", "Slack", "Google Workspace / Outlook", "Seismic / Highspot"],
    humanVsAi: {
      deterministicTasks: [
        "Territory assignment based on company size and geography rules",
        "CRM database schema validation and duplicate suppression",
        "Calendar event scheduling and webhook synchronization",
        "Pipeline stage transition validation rules",
      ],
      probabilisticAiTasks: [
        "Synthesizing 10-K filings, news, and executive bios into 1-page account briefs",
        "Extracting action items, objections, and buying criteria from call transcripts",
        "Drafting hyper-personalized email outreach tailored to persona pain points",
        "Matching RFP technical questions against verified product capability repositories",
      ],
      humanResponsibility: [
        "Executive relationship building and high-stakes commercial negotiations",
        "Pricing discounts and contract term approvals",
        "Final review and personal delivery of proposal communications",
        "Strategic judgment on territory structure and go-to-market priorities",
      ],
    },
    operationalBottleneck:
      "Sales reps spend over 25 hours per week on non-selling administrative tasks: searching for contact details, manually updating CRM fields, and assembling discovery decks.",
    bayesforceSolution:
      "Deploy a Revenue Operations Coworker that ingests buyer signals, populates CRM fields with 100% accuracy, drafts tailored meeting briefs, and flags deal slippage before quarter-end.",
    executionFlow: [
      {
        stepNumber: 1,
        phase: "Signal Ingestion",
        action: "Monitors inbound web forms, SEC filings, hiring changes, and intent platforms for target accounts.",
        governance: "De-duplication and suppression checks against existing CRM pipeline accounts.",
        outcome: "Verified high-intent account activation trigger.",
      },
      {
        stepNumber: 2,
        phase: "Context & Dossier Assembly",
        action: "Queries CRM history, past emails, support tickets, and external news into a structured 1-page brief.",
        governance: "PII masking and role-based data isolation.",
        outcome: "Structured discovery brief delivered to the account executive.",
      },
      {
        stepNumber: 3,
        phase: "Follow-up & RFP Drafting",
        action: "Drafts tailored email follow-ups from call transcripts and populates RFP answers from approved repositories.",
        governance: "Brand tone validation; rep review required before sending.",
        outcome: "Polished draft communication ready for 1-click rep approval.",
      },
      {
        stepNumber: 4,
        phase: "CRM Auto-Sync & Forecast Update",
        action: "Updates CRM opportunity fields, next step dates, and stage probabilities in Salesforce/HubSpot.",
        governance: "Deterministic validation against CRM field validation rules.",
        outcome: "Pristine CRM data hygiene with zero rep administrative overhead.",
      },
    ],
    beforeVsAfter: [
      {
        dimension: "Account Research Time",
        traditional: "45–60 minutes per enterprise target",
        bayesforce: "< 45 seconds automated dossier generation",
      },
      {
        dimension: "CRM Field Accuracy",
        traditional: "Fragmented, missing notes, outdated stages",
        bayesforce: "Real-time automated sync with 100% field completeness",
      },
      {
        dimension: "RFP Response Cycle",
        traditional: "10–14 business days across multiple teams",
        bayesforce: "24 hours for verified first-pass draft",
      },
    ],
    hardMetrics: [
      { metric: "AE Time Recovered for Selling", benchmark: "12 hrs/wk", achieved: "+24 hrs/rep/wk" },
      { metric: "Pipeline Creation Velocity", benchmark: "$1.4M / qtr", achieved: "$4.2M / qtr" },
      { metric: "Deal Slippage Early Warning", benchmark: "Late Quarter Surprise", achieved: "14 Days Prior Warning" },
    ],
    applicableCapabilities: ["ai-coworkers", "ai-data-engineering"],
    relatedInsights: ["midmarket-b2b-saas-revops", "human-in-the-loop-escalation-design"],
  },
  {
    id: "customer-ops",
    slug: "customer-ops",
    title: "Customer Operations: High-Precision Resolution Desks & Proactive Retention",
    shortTitle: "Customer Operations",
    category: "Service Excellence",
    kicker: "Workflow Family 02",
    icon: "users",
    heroHeadline: "Sub-minute resolution times with verified context retrieval and proactive customer health monitoring.",
    summary:
      "Elevate customer support and retention from cost center to brand differentiator. Bayesforce deploys customer operations coworkers that handle ticket intake, intelligent classification, customer history reconstruction, cross-system investigation, Tier-1 resolution, escalation packet preparation, customer onboarding, and health tracking.",
    whatHappens:
      "Customer operations manages customer satisfaction, support resolution, onboarding milestones, ongoing retention, and knowledge base maintenance. It handles incoming support tickets, live chats, onboarding workflows, bug escalations to engineering, and renewal health tracking.",
    whereMachineryAccumulates: [
      "Support agents toggling across 5+ disconnected tabs (helpdesk, database, billing portal, CRM, internal wiki) to understand a single customer issue",
      "Repetitive Tier-1 tickets (password resets, invoice copies, status inquiries) consuming 70% of support bandwidth",
      "Incomplete escalation tickets sent to Tier-2/engineering, leading to multi-day back-and-forth ping-pong",
      "Customer success managers discovering account dissatisfaction or declining usage only during renewal conversations",
      "Knowledge base articles becoming outdated and diverging from actual product functionality",
    ],
    representativeWorkflows: [
      { name: "Ticket Intake & Classification", description: "Categorizes incoming tickets by intent, sentiment, language, and customer tier.", mode: "Deterministic" },
      { name: "Customer History Reconstruction", description: "Assembles complete timeline of customer transactions, past tickets, and product telemetry.", mode: "Probabilistic AI" },
      { name: "Context Retrieval & Cross-System Checks", description: "Queries transactional databases, billing gateways, and user logs to isolate root cause.", mode: "Probabilistic AI" },
      { name: "Tier-1 Autonomous Resolution", description: "Executes verified policy-bounded solutions (documentation links, status lookups, credential resets).", mode: "Probabilistic AI" },
      { name: "Response Drafting & Human Review", description: "Drafts empathetic, context-aware responses with citations for complex inquiries.", mode: "Probabilistic AI" },
      { name: "Escalation Packet Preparation", description: "Compiles full diagnostic logs, reproduction steps, and system state for senior engineers.", mode: "Deterministic" },
      { name: "Customer Onboarding & Health", description: "Tracks onboarding milestone completion and flags accounts showing telemetry drop-offs.", mode: "Deterministic" },
      { name: "Knowledge Base Maintenance", description: "Identifies documentation gaps from recurring customer questions and drafts updated articles.", mode: "Probabilistic AI" },
    ],
    approach:
      "Bayesforce integrates with your existing helpdesk, CRM, and product telemetry databases. Our coworkers perform deep root-cause investigation across systems, resolve standard requests within strict policy boundaries, and prepare comprehensive escalation packets for human agents when human empathy or complex judgment is required.",
    relevantCapabilities: ["ai-coworkers", "ai-data-engineering", "ai-trust-and-governance"],
    relevantSystems: ["Zendesk", "Intercom", "Freshdesk", "Salesforce Service Cloud", "Stripe", "Jira", "Mixpanel / PostHog", "Confluence / Notion"],
    humanVsAi: {
      deterministicTasks: [
        "Routing VIP tickets based on SLA tier and enterprise contract terms",
        "Querying user account status, subscription level, and billing history",
        "Executing standard deterministic API calls (e.g. sending receipt copy)",
        "Logging ticket timestamps and updating status tags",
      ],
      probabilisticAiTasks: [
        "Classifying ambiguous natural language customer inquiries into precise problem categories",
        "Reconstructing customer emotional tone and summarizing multi-ticket complaint history",
        "Synthesizing technical documentation to draft step-by-step troubleshooting instructions",
        "Identifying recurring product friction trends across thousands of unstructured tickets",
      ],
      humanResponsibility: [
        "De-escalating angry enterprise executives and managing high-stakes client relationships",
        "Authorizing non-standard commercial refunds and SLA breach compensation",
        "Final approval on public-facing policy updates and legal dispute responses",
        "Strategic decisions regarding product roadmap priorities based on support trends",
      ],
    },
    operationalBottleneck:
      "Support agents spend 60% of their time hunting for user context across databases and billing portals, while customer complaints sit in queues for hours.",
    bayesforceSolution:
      "Implement an intelligent customer ops engine that resolves routine inquiries in seconds, prepares verified root-cause briefs for complex tickets, and alerts CSMs to churn signals.",
    executionFlow: [
      {
        stepNumber: 1,
        phase: "Intake & Triage",
        action: "Ingests ticket from Zendesk/Intercom, classifies intent, detects urgency, and extracts account ID.",
        governance: "VIP SLA check and emergency keyword detection.",
        outcome: "Categorized, prioritized ticket routed to appropriate workflow queue.",
      },
      {
        stepNumber: 2,
        phase: "Cross-System Investigation",
        action: "Queries transactional database, user activity logs, and billing history to diagnose the underlying issue.",
        governance: "Read-only access with strict customer data tenant isolation.",
        outcome: "Verified root-cause diagnosis attached internally to ticket.",
      },
      {
        stepNumber: 3,
        phase: "Resolution or Draft Preparation",
        action: "Executes verified standard action or drafts comprehensive response with citations for human review.",
        governance: "Actions involving financial refunds above $50 require 1-click human agent approval.",
        outcome: "Sub-minute resolution or 1-click verified draft for human agent.",
      },
      {
        stepNumber: 4,
        phase: "Telemetry & Bug Aggregation",
        action: "Tags recurring product issues and auto-drafts Jira engineering tickets with full reproduction steps.",
        governance: "De-duplication against existing engineering backlogs.",
        outcome: "Closed-loop feedback between customer operations and product engineering.",
      },
    ],
    beforeVsAfter: [
      {
        dimension: "First Response Time (FRT)",
        traditional: "4.2 hours average wait time",
        bayesforce: "< 15 seconds 24/7/365",
      },
      {
        dimension: "Tier-1 Resolution Rate",
        traditional: "28% first contact resolution",
        bayesforce: "74% autonomous resolution within policy bounds",
      },
      {
        dimension: "Escalation Back-and-Forth",
        traditional: "4.5 internal handoffs per complex ticket",
        bayesforce: "1 handoff with pre-compiled diagnostic packet",
      },
    ],
    hardMetrics: [
      { metric: "Customer CSAT Score", benchmark: "76% baseline", achieved: "94.8% post-deployment" },
      { metric: "Support Escalation Backlog", benchmark: "420 open tickets", achieved: "< 15 edge-case tickets" },
      { metric: "Proactive Churn Detection", benchmark: "Reactive post-mortem", achieved: "89% proactive intervention" },
    ],
    applicableCapabilities: ["ai-coworkers", "ai-data-engineering", "ai-trust-and-governance"],
    relatedInsights: ["the-unit-economics-of-digital-labor", "agentic-tool-use-and-sandboxing"],
  },
  {
    id: "finance-and-accounting",
    slug: "finance-and-accounting",
    title: "Finance & Accounting: 3-Way Reconciliation & Automated Ledger Integrity",
    shortTitle: "Finance & Accounting",
    category: "Fiscal Governance",
    kicker: "Workflow Family 03",
    icon: "scale",
    heroHeadline: "Close your books in 1.5 days with mathematical precision, 3-way matching, and audit-grade lineage.",
    summary:
      "Transform finance from month-end close panic to real-time ledger integrity. Bayesforce deploys financial coworkers that handle invoice intake, multi-modal extraction, PO matching, two-way and three-way reconciliation, exception handling, vendor reconciliation, collections prioritization, cash application, AR disputes, expense auditing, and month-end close coordination.",
    whatHappens:
      "Finance and accounting maintains the fiscal truth of the organization. It processes supplier invoices, reconciles purchase orders against warehouse receipts and bank statements, manages accounts payable (AP) and receivable (AR), audits employee expenses, coordinates month-end close, and generates statutory reporting packages.",
    whereMachineryAccumulates: [
      "Accounting teams spending 200+ hours every month manually matching line items between PDF vendor invoices, ERP purchase orders, and warehouse receipts",
      "Minor price variances, freight rounding differences, and tax discrepancies stalling invoice approvals for weeks",
      "Manual cash application matching incoming wire transfers and lockbox payments against open AR invoices",
      "Month-end close dragging out to 12–15 business days due to manual spreadsheet consolidation and cross-entity reconciliation",
      "Expense reports requiring human auditors to manually check receipts against corporate travel policies and VAT rules",
    ],
    representativeWorkflows: [
      { name: "Invoice Intake & Extraction", description: "Extracts header, line items, VAT numbers, and banking details from multi-page PDFs and scanned receipts.", mode: "Probabilistic AI" },
      { name: "2-Way & 3-Way PO Reconciliation", description: "Performs mathematical line-item matching across invoices, ERP purchase orders, and receiving slips.", mode: "Deterministic" },
      { name: "Invoice Exception Handling", description: "Identifies price variances, quantity discrepancies, and missing POs, routing disputes to vendors.", mode: "Probabilistic AI" },
      { name: "Vendor Statement Reconciliation", description: "Compares supplier monthly statements against internal AP ledgers to surface missing invoices.", mode: "Deterministic" },
      { name: "Cash Application & AR Matching", description: "Matches incoming bank remittances and wires against outstanding customer invoices in ERP.", mode: "Deterministic" },
      { name: "Collections Prioritization & AR Disputes", description: "Analyzes payment aging and customer communication history to prioritize collections outreach.", mode: "Probabilistic AI" },
      { name: "Expense Auditing & Compliance", description: "Audits employee travel and expense claims against policy thresholds and tax compliance rules.", mode: "Deterministic" },
      { name: "Month-End Close Coordination", description: "Orchestrates close checklists, verifies sub-ledger balances, and prepares consolidated reporting packages.", mode: "Deterministic" },
    ],
    approach:
      "Bayesforce integrates directly with your ERP (NetSuite, SAP, QuickBooks) and banking feeds. We apply layout-aware document extraction, mathematical matching engines, and strict tolerance guardrails to reconcile 90%+ of transactions autonomously, surfacing only verified discrepancies to financial controllers.",
    relevantCapabilities: ["ai-data-engineering", "ai-coworkers", "ai-trust-and-governance"],
    relevantSystems: ["NetSuite", "SAP", "QuickBooks", "Workday Financials", "Tipalti / Bill.com", "Coupa", "Stripe / Plaid", "Excel / Snowflake"],
    humanVsAi: {
      deterministicTasks: [
        "Mathematical two-way and three-way cross-table matching within tolerance thresholds",
        "Cryptographic duplicate invoice hashing (SHA-256) and bank account verification",
        "Posting balanced double-entry journal entries into ERP general ledgers",
        "Generating immutable audit logs with timestamped transaction lineages",
      ],
      probabilisticAiTasks: [
        "Parsing complex, distorted, multi-page PDF invoices with nested table structures",
        "Resolving entity name variations (e.g. 'Amazon Web Services Inc' vs 'AWS LLC') to master vendor records",
        "Drafting professional vendor inquiry emails regarding billing discrepancies and missing documentation",
        "Classifying unstructured expense memo descriptions into appropriate chart-of-accounts codes",
      ],
      humanResponsibility: [
        "Authorizing high-value capital expenditure payments above executive delegation thresholds",
        "Resolving strategic vendor commercial disputes and renegotiating payment terms",
        "Signing off on final month-end and quarterly financial statement disclosures",
        "Reviewing and defending audit workpapers during external statutory audits",
      ],
    },
    operationalBottleneck:
      "Finance teams spend 200+ hours every month manually matching line items between PDF vendor invoices, ERP purchase orders, and warehouse receipts, with costly billing errors slipping through.",
    bayesforceSolution:
      "Deploy an enterprise reconciliation agent that parses messy invoices, performs mathematical line-item matching against ERP records, flags discrepancies, and prepares audited journal entries for CFO approval.",
    executionFlow: [
      {
        stepNumber: 1,
        phase: "Invoice Document Ingestion",
        action: "Pulls incoming invoices from accounts payable inboxes, vendor portals, and EDI feeds.",
        governance: "Cryptographic SHA-256 duplicate invoice detection and virus scanning.",
        outcome: "Structured JSON schema containing all line items, tax IDs, and payment terms.",
      },
      {
        stepNumber: 2,
        phase: "3-Way Cross-System Reconciliation",
        action: "Performs fuzzy matching across ERP PO line items, receiving slips, and contracts.",
        governance: "Configurable tolerance thresholds (e.g., 0.5% freight variance).",
        outcome: "100% matched items or detailed mathematical exception report.",
      },
      {
        stepNumber: 3,
        phase: "Dispute & Resolution Drafting",
        action: "Identifies billing overcharges, missing POs, or quantity mismatches and drafts vendor inquiry emails.",
        governance: "Vendor communications held in AP lead approval queue.",
        outcome: "Automated vendor dispute communication with attached evidence.",
      },
      {
        stepNumber: 4,
        phase: "ERP Posting & Audit Trail",
        action: "Posts balanced double-entry accounting batches into SAP, NetSuite, or QuickBooks.",
        governance: "Full line-item audit trail with direct source PDF visual link.",
        outcome: "Pristine general ledger update ready for external auditor review.",
      },
    ],
    beforeVsAfter: [
      {
        dimension: "Month-End Close Duration",
        traditional: "12–15 business days of manual spreadsheet grind",
        bayesforce: "1.5 business days automated close",
      },
      {
        dimension: "Invoice Processing Cost",
        traditional: "$14.50 per invoice (labor + rework)",
        bayesforce: "$0.85 per invoice fully automated",
      },
      {
        dimension: "Duplicate Payment Leakage",
        traditional: "0.8% of gross annual procurement spend",
        bayesforce: "0.0% zero leakage with deterministic hashing",
      },
    ],
    hardMetrics: [
      { metric: "Invoices Reconciled Autonomously", benchmark: "22% OCR match", achieved: "93.4% precision match" },
      { metric: "Audit Compliance Readiness", benchmark: "4-week preparation", achieved: "Instant 1-click audit pull" },
      { metric: "Annual AP Labor Cost Savings", benchmark: "$380,000 / yr", achieved: "$295,000 net recovered" },
    ],
    applicableCapabilities: ["ai-data-engineering", "ai-coworkers", "ai-trust-and-governance"],
    relatedInsights: ["tier-1-fintech-recon", "unstructured-document-parsing-at-scale", "human-in-the-loop-escalation-design"],
  },
  {
    id: "procurement-and-supply",
    slug: "procurement-and-supply",
    title: "Procurement & Supply: Sourcing Governance & Automated RFQ Normalization",
    shortTitle: "Procurement & Supply",
    category: "Supply Chain",
    kicker: "Workflow Family 04",
    icon: "layers",
    heroHeadline: "Reduce sourcing cycles by 75% while securing lowest total cost of ownership and compliance.",
    summary:
      "Accelerate procurement velocity while enforcing institutional spending policies. Bayesforce deploys procurement coworkers that handle purchase request intake, policy verification, vendor lookup, quote comparison, approval packet assembly, PO creation, vendor onboarding, contract-to-PO validation, and contract-to-invoice validation.",
    whatHappens:
      "Procurement and supply operations manages organizational purchasing, supplier relationships, vendor compliance, and purchase order lifecycles. It processes employee purchase requisitions, compares competitive vendor quotes, verifies compliance with master service agreements, onboard new suppliers, and monitors vendor SLAs.",
    whereMachineryAccumulates: [
      "Purchase requests sitting in email inboxes for days waiting for category managers to verify budget codes and policy compliance",
      "Procurement teams manually transposing multi-page vendor quotes and rate cards into spreadsheets for comparison",
      "Off-contract rogue spend occurring because employees find official procurement tools too slow and cumbersome",
      "Vendor onboarding stalling due to repetitive compliance questionnaire collection, tax ID verification, and insurance certificate checks",
      "Discrepancies between negotiated contract pricing and actual purchase orders going unnoticed until invoices arrive",
    ],
    representativeWorkflows: [
      { name: "Purchase Request Intake & Policy Check", description: "Evaluates internal purchase requisitions against spending thresholds, approved catalogs, and delegation matrix.", mode: "Deterministic" },
      { name: "Vendor Lookup & Catalog Matching", description: "Identifies contracted preferred suppliers and checks for existing enterprise master service agreements.", mode: "Deterministic" },
      { name: "Quote & Proposal Comparison", description: "Extracts pricing, lead times, and SLA terms from multi-vendor bids into standardized comparative scorecards.", mode: "Probabilistic AI" },
      { name: "Approval Packet Assembly", description: "Compiles justification briefs, budget verification, and quote comparisons for executive sign-off.", mode: "Probabilistic AI" },
      { name: "Automated PO Creation", description: "Generates purchase orders in ERP aligned with negotiated vendor contract terms and accounts.", mode: "Deterministic" },
      { name: "Vendor Onboarding & Compliance", description: "Collects W-9/tax forms, banking details, and SOC2/insurance certificates with automated validation.", mode: "Probabilistic AI" },
      { name: "Contract-to-PO Validation", description: "Verifies that PO pricing and payment milestones strictly match signed master service agreements.", mode: "Deterministic" },
      { name: "Procurement Exception Handling", description: "Flags price inflation, unauthorized vendor substitutions, and lead-time delays to category leads.", mode: "Probabilistic AI" },
    ],
    approach:
      "Bayesforce layers over your ERP and procurement software (Coupa, SAP Ariba, NetSuite). We automate request verification, quote synthesis, and contract-to-PO checks, giving procurement teams complete visibility and control without manual administrative bottleneck.",
    relevantCapabilities: ["ai-data-engineering", "ai-coworkers", "ai-trust-and-governance"],
    relevantSystems: ["Coupa", "SAP Ariba", "NetSuite", "Zip", "Ironclad", "DocuSign", "Workday", "Jira Service Management"],
    humanVsAi: {
      deterministicTasks: [
        "Verifying spending delegation matrix limits based on requisition amount",
        "Checking vendor tax ID formatting and cryptographic banking validation",
        "PO number generation and general ledger account code assignment in ERP",
        "Validating line-item unit price parity between contract and PO",
      ],
      probabilisticAiTasks: [
        "Extracting complex pricing tiers, volume discount formulas, and shipping terms from vendor PDF quotes",
        "Synthesizing qualitative supplier proposals into objective technical capability comparison matrix",
        "Reviewing vendor insurance certificates and security questionnaires for policy gaps",
        "Drafting negotiation guidance notes highlighting pricing variances across vendor bids",
      ],
      humanResponsibility: [
        "Final category manager sign-off on strategic vendor selections and high-value contracts",
        "Direct commercial negotiations for enterprise rate cards and liability caps",
        "Managing supplier executive relationships and resolving critical delivery escalations",
        "Establishing organizational sustainability, diversity, and ESG procurement guidelines",
      ],
    },
    operationalBottleneck:
      "Sourcing teams take weeks to compare complex multi-vendor bids with disparate pricing structures, while supplier disruptions are discovered only after shipments fail to arrive.",
    bayesforceSolution:
      "Deploy an autonomous procurement engine that parses vendor bids into normalized comparative tables, models total cost of ownership (TCO), and continuously monitors supplier health indicators.",
    executionFlow: [
      {
        stepNumber: 1,
        phase: "Requisition Intake",
        action: "Translates internal department requests into standardized procurement specifications and checks budget.",
        governance: "Compliance verification against corporate spending authority matrix.",
        outcome: "Validated purchase requisition routed to category sourcing.",
      },
      {
        stepNumber: 2,
        phase: "Multi-Bid Normalization",
        action: "Ingests unstructured vendor proposals, quotes, and rate cards into unified comparative matrix.",
        governance: "Mathematical currency conversion and hidden fee detection.",
        outcome: "Apple-to-apples comparative scorecard ranking vendor proposals.",
      },
      {
        stepNumber: 3,
        phase: "Approval Packet Assembly",
        action: "Packages the recommended vendor proposal with budget authorization and contract terms for executive review.",
        governance: "Requires category manager sign-off based on spend authority matrix.",
        outcome: "1-click approval packet delivered to budget owner.",
      },
      {
        stepNumber: 4,
        phase: "PO Generation & Milestone Tracking",
        action: "Generates PO in ERP aligned with signed MSA terms and sets up milestone tracking alerts.",
        governance: "Deterministic validation against approved contract pricing.",
        outcome: "Dispatched PO with automated supplier milestone tracking.",
      },
    ],
    beforeVsAfter: [
      {
        dimension: "RFQ Evaluation Cycle",
        traditional: "3 to 4 weeks of manual spreadsheet modeling",
        bayesforce: "36 hours from bid submission to executive decision memo",
      },
      {
        dimension: "Contract Pricing Variance",
        traditional: "15–20% rate drift across regional business units",
        bayesforce: "Standardized enterprise pricing with zero rogue spend",
      },
      {
        dimension: "PO Generation Turnaround",
        traditional: "5 business days in procurement queue",
        bayesforce: "< 15 minutes upon approval",
      },
    ],
    hardMetrics: [
      { metric: "Direct Procurement Savings", benchmark: "3.2% negotiated", achieved: "8.7% average savings" },
      { metric: "Sourcing Cycle Time", benchmark: "28 days", achieved: "6.5 days" },
      { metric: "Contract Compliance Rate", benchmark: "74%", achieved: "99.1%" },
    ],
    applicableCapabilities: ["ai-data-engineering", "ai-coworkers"],
    relatedInsights: ["global-logistics-customs-triage", "enterprise-second-brain-architecture"],
  },
  {
    id: "people-ops",
    slug: "people-ops",
    title: "People Operations: High-Trust Talent Operations & Employee Lifecycle Support",
    shortTitle: "People Operations",
    category: "Human Capital",
    kicker: "Workflow Family 05",
    icon: "users",
    heroHeadline: "Scale recruiting and employee operations with strong governance and zero administrative drag.",
    summary:
      "Transform human resources from paperwork bottleneck to employee experience multiplier. Bayesforce deploys people ops coworkers that assist candidate research, screening support, interview scheduling, interview briefing, feedback consolidation, offer coordination, multi-system onboarding, employee helpdesk resolution, HR document operations, and policy Q&A.",
    whatHappens:
      "People operations manages talent acquisition, employee onboarding, benefits administration, HR document compliance, employee helpdesks, and lifecycle transitions. It handles candidate pipelines, interview coordination, offer approvals, workstation provisioning, and company policy guidance.",
    whereMachineryAccumulates: [
      "Recruiters spending 70% of their working hours searching for candidate profiles, screening resumes, and coordinating calendar slots across busy interviewers",
      "Interviewers arriving at candidate calls unprepared, asking overlapping questions without standardized evaluation rubrics",
      "Post-interview feedback scattered across Slack messages and email threads, delaying hiring decisions by weeks",
      "New hires waiting days after joining for email accounts, software credentials, and hardware access due to manual HR-to-IT handoffs",
      "HR generalists overwhelmed by hundreds of repetitive employee questions regarding healthcare benefits, leave policies, and expense rules",
    ],
    representativeWorkflows: [
      { name: "Candidate Research & Screening Support", description: "Synthesizes candidate experience against objective role rubrics with strict bias mitigation.", mode: "Probabilistic AI" },
      { name: "Interview Scheduling & Coordination", description: "Automates calendar coordination across multi-interviewer hiring panels and candidates.", mode: "Deterministic" },
      { name: "Interviewer Briefing Dossiers", description: "Compiles role-specific assessment rubrics and past interviewer feedback for upcoming interviewers.", mode: "Probabilistic AI" },
      { name: "Feedback Consolidation & Scorecards", description: "Aggregates interviewer feedback scorecards into structured decision packets for hiring managers.", mode: "Probabilistic AI" },
      { name: "Offer Coordination & Verification", description: "Drafts offer letters matching approved compensation bands and equity grant matrices.", mode: "Deterministic" },
      { name: "Multi-System Employee Onboarding", description: "Orchestrates account creation across HRIS, Slack, Google Workspace, GitHub, and payroll.", mode: "Deterministic" },
      { name: "Employee Helpdesk & Policy Q&A", description: "Provides instant, verified answers to employee questions on benefits, leave, and expenses from official handbooks.", mode: "Probabilistic AI" },
      { name: "HR Document Operations & Compliance", description: "Monitors I-9/visa verification, employment contract signatures, and mandatory compliance training.", mode: "Deterministic" },
    ],
    approach:
      "Bayesforce connects to your ATS (Greenhouse, Lever) and HRIS (Workday, BambooHR, Rippling). We automate administrative scheduling, document parsing, and policy Q&A while maintaining strict human review and governance for consequential employment decisions.",
    relevantCapabilities: ["ai-coworkers", "ai-data-engineering", "ai-capability"],
    relevantSystems: ["Greenhouse", "Lever", "Workday", "BambooHR", "Rippling", "Slack", "Google Workspace", "DocuSign"],
    humanVsAi: {
      deterministicTasks: [
        "Calendar slot matching and interview invitation dispatch",
        "Role-based provisioning of software accounts and identity credentials",
        "Checking compensation requests against approved HR salary band tables",
        "Tracking visa expiration dates and mandatory compliance training deadlines",
      ],
      probabilisticAiTasks: [
        "Extracting relevant technical and leadership skills from complex candidate portfolios",
        "Summarizing interviewer scorecard consensus and highlighting diverging evaluations",
        "Answering natural-language employee handbook inquiries with direct source citations",
        "Drafting customized onboarding welcome guides and training schedules",
      ],
      humanResponsibility: [
        "Final hiring decisions, candidate evaluations, and cultural alignment assessments",
        "Consequential employment determinations (promotions, compensation changes, terminations)",
        "Handling sensitive employee grievances, workplace conflicts, and personal hardship requests",
        "Setting organizational talent strategy, leadership principles, and culture standards",
      ],
    },
    operationalBottleneck:
      "Recruiters spend 70% of their time on administrative scheduling and resume parsing, while HR teams manually copy data across payroll, benefits, and IT systems.",
    bayesforceSolution:
      "Implement a governed People Operations engine that assists candidate screening, automates interview scheduling, orchestrates Day-1 onboarding, and answers policy questions 24/7.",
    executionFlow: [
      {
        stepNumber: 1,
        phase: "Candidate Screening & Briefing",
        action: "Assists screening against objective rubrics and prepares structured interviewer dossiers.",
        governance: "PII redaction and strict non-discrimination evaluation protocols.",
        outcome: "Ranked candidate shortlist with objective evidence citations.",
      },
      {
        stepNumber: 2,
        phase: "Autonomous Scheduling Loop",
        action: "Interacts with candidates and panel interviewers to confirm optimal multi-round interview slots.",
        governance: "Calendar conflict prevention and interviewer workload balancing.",
        outcome: "Fully scheduled interview loop with calendar invites and briefing packs.",
      },
      {
        stepNumber: 3,
        phase: "Scorecard Consolidation",
        action: "Aggregates interviewer feedback and compiles a structured decision memo for the hiring manager.",
        governance: "Flags missing scorecards and conflicting ratings.",
        outcome: "Consolidated decision memo ready for hiring committee review.",
      },
      {
        stepNumber: 4,
        phase: "Lifecycle Provisioning & Helpdesk",
        action: "Provisions Day-1 accounts upon offer acceptance and answers routine employee handbook questions.",
        governance: "Role-based access control and verified handbook citations.",
        outcome: "Frictionless Day-1 onboarding and 24/7 internal employee assistance.",
      },
    ],
    beforeVsAfter: [
      {
        dimension: "Resume Screening Time",
        traditional: "15 minutes per resume (25 hours per open role)",
        bayesforce: "< 10 seconds per candidate with objective scoring",
      },
      {
        dimension: "Interview Scheduling Delay",
        traditional: "3 to 5 days of email ping-pong per round",
        bayesforce: "< 2 hours fully coordinated calendar loop",
      },
      {
        dimension: "New Hire Provisioning Lag",
        traditional: "3 to 5 days of delayed IT tickets and missing logins",
        bayesforce: "100% automated provisioning completed 48 hours before Day 1",
      },
    ],
    hardMetrics: [
      { metric: "Time-to-Hire Acceleration", benchmark: "54 days average", achieved: "21 days" },
      { metric: "Candidate Experience NPS", benchmark: "71% NPS", achieved: "93% NPS" },
      { metric: "HR Admin Time Recovered", benchmark: "18 hrs/wk", achieved: "+28 hrs/person/wk" },
    ],
    applicableCapabilities: ["ai-coworkers", "ai-data-engineering", "ai-capability"],
    relatedInsights: ["the-unit-economics-of-digital-labor", "agentic-tool-use-and-sandboxing"],
  },
  {
    id: "legal-risk-and-compliance",
    slug: "legal-risk-and-compliance",
    title: "Legal, Risk & Compliance: Controlled Contract Triage & Evidence Assembly",
    shortTitle: "Legal, Risk & Compliance",
    category: "Risk Architecture",
    kicker: "Workflow Family 06",
    icon: "shield-check",
    heroHeadline: "Review routine commercial contracts in minutes with verified redlines, obligation tracking, and evidence collection.",
    summary:
      "Transform legal and compliance from organizational bottleneck to strategic risk shield. Bayesforce deploys legal and compliance coworkers that handle contract intake, contract triage, clause extraction, first-pass review, redline assistance, obligation tracking, vendor compliance, security questionnaire completion, audit evidence collection, policy compliance, and risk assessment packets.",
    whatHappens:
      "Legal, risk, and compliance protects the enterprise against legal exposure, regulatory penalties, and counterparty defaults. It reviews customer and vendor agreements, enforces contract playbooks, responds to third-party security questionnaires, tracks regulatory obligations, and collects evidence for audits.",
    whereMachineryAccumulates: [
      "In-house counsel buried in thousands of standard NDAs, MSAs, and vendor agreements, creating multi-week deal delays",
      "Sales deals stalled because legal teams manually compare standard indemnity and limitation of liability clauses against company playbooks",
      "Security and compliance officers spending weeks manually filling out 300-question vendor risk assessments",
      "Contract obligations (renewal deadlines, price adjustments, audit notices) lost inside static PDF folders",
      "Internal audit teams scrambling for weeks to collect access logs, policy sign-offs, and compliance evidence for SOC2/ISO audits",
    ],
    representativeWorkflows: [
      { name: "Contract Intake & Triage", description: "Classifies incoming agreements, checks governing law, and assigns priority based on deal size.", mode: "Deterministic" },
      { name: "Clause Extraction & Schema Mapping", description: "Extracts indemnification, liability caps, data privacy, and termination clauses into structured data.", mode: "Probabilistic AI" },
      { name: "First-Pass Review & Redline Assistance", description: "Compares third-party contracts against institutional legal playbooks and inserts approved fallback language.", mode: "Probabilistic AI" },
      { name: "Obligation Tracking & Calendar Alerts", description: "Extracts renewal windows, notice periods, and insurance requirements into automated compliance calendars.", mode: "Deterministic" },
      { name: "Compliance & Security Questionnaires", description: "Drafts precise answers to vendor security and privacy questionnaires from audited compliance repositories.", mode: "Probabilistic AI" },
      { name: "Vendor Compliance & Risk Scoring", description: "Monitors vendor SOC2 reports, GDPR adequacy, and financial risk indicators.", mode: "Probabilistic AI" },
      { name: "Audit Evidence Collection", description: "Automatically pulls access logs, change records, and approvals required for annual compliance audits.", mode: "Deterministic" },
      { name: "Risk Assessment Packets", description: "Synthesizes counterparty legal and operational risk factors into structured memos for General Counsel review.", mode: "Probabilistic AI" },
    ],
    approach:
      "Bayesforce emphasizes preparation, coordination, evidence collection, and controlled execution rather than replacing legal judgment. We connect to your contract repository and document workflows to provide verified first-pass clause analysis, redline drafts, and compliance evidence, leaving final legal counsel sign-off in the hands of qualified attorneys.",
    relevantCapabilities: ["ai-trust-and-governance", "ai-data-engineering", "ai-coworkers"],
    relevantSystems: ["Ironclad", "DocuSign CLM", "LinkSquares", "Jira", "OneTrust", "Vanta / Drata", "Google Drive / SharePoint", "Slack"],
    humanVsAi: {
      deterministicTasks: [
        "Contract metadata extraction (signatories, effective dates, contract value)",
        "Logging renewal deadlines and auto-renewal cancellation notice dates",
        "Exporting cryptographically verified access logs for SOC2 and ISO compliance audits",
        "Routing contracts above specific risk/value thresholds to specialized legal leads",
      ],
      probabilisticAiTasks: [
        "Identifying deviations in indemnification, intellectual property, and liability clauses against playbook rules",
        "Drafting initial track-changes redlines using approved corporate fallback clauses",
        "Synthesizing 200+ page regulatory rulings and corporate policies into executive summaries",
        "Matching incoming security questionnaire items to verified security documentation",
      ],
      humanResponsibility: [
        "Final legal judgment on non-standard liability exposures and commercial compromises",
        "Representing the organization in formal regulatory inquiries and litigation proceedings",
        "Authorizing exceptions to core organizational compliance and data privacy policies",
        "Strategic counseling to executive leadership on mergers, acquisitions, and IP ownership",
      ],
    },
    operationalBottleneck:
      "In-house legal teams are buried in thousands of routine NDAs, MSAs, and vendor security questionnaires, causing multi-week sales delays and missing critical renewal obligations.",
    bayesforceSolution:
      "Deploy a playbook-governed contract engineering system that performs precision clause extraction, automated redlining with standardized fallback language, and proactive obligation calendar tracking.",
    executionFlow: [
      {
        stepNumber: 1,
        phase: "Contract Intake & Parsing",
        action: "Ingests incoming counterparty agreement (.docx, PDF), extracts clauses, and identifies agreement type.",
        governance: "Confidential data isolation and attorney-client privilege protection.",
        outcome: "Structured JSON clause hierarchy mapped against corporate playbook.",
      },
      {
        stepNumber: 2,
        phase: "Playbook Deviation Analysis",
        action: "Compares liability, indemnification, IP, and payment terms against corporate standards.",
        governance: "Risk score calculated using deterministic legal rule matrix.",
        outcome: "Color-coded risk assessment highlighting non-negotiable red flags.",
      },
      {
        stepNumber: 3,
        phase: "Automated Redline Draft",
        action: "Inserts pre-approved company fallback language directly into track-changes Word document.",
        governance: "All redlines include explanatory comments citing corporate policy.",
        outcome: "Ready-to-send redlined contract draft for General Counsel review.",
      },
      {
        stepNumber: 4,
        phase: "Obligation Calendar & Audit Log",
        action: "Extracts termination notice deadlines, insurance requirements, and audit obligations into database.",
        governance: "Automated escalation triggers 60 days before critical renewal windows.",
        outcome: "Zero missed contract deadlines or compliance defaults.",
      },
    ],
    beforeVsAfter: [
      {
        dimension: "Standard MSA Review Turnaround",
        traditional: "7 to 10 business days in legal backlog",
        bayesforce: "< 20 minutes for fully redlined draft",
      },
      {
        dimension: "Security Questionnaire Turnaround",
        traditional: "2 to 3 weeks across security and sales engineering",
        bayesforce: "2 hours for verified first-pass draft",
      },
      {
        dimension: "Outside Counsel Routine Spend",
        traditional: "$450–$850/hr for routine vendor contract reviews",
        bayesforce: "82% reduction in external legal spend for standard agreements",
      },
    ],
    hardMetrics: [
      { metric: "Legal Review Cycle Acceleration", benchmark: "9 days", achieved: "1.2 days" },
      { metric: "Outside Counsel Spend Saved", benchmark: "$420,000 / yr", achieved: "$310,000 saved" },
      { metric: "Clause Compliance Precision", benchmark: "84% manual consistency", achieved: "99.8% playbook adherence" },
    ],
    applicableCapabilities: ["ai-trust-and-governance", "ai-data-engineering", "ai-coworkers"],
    relatedInsights: ["enterprise-legal-contract-redlining", "unstructured-document-parsing-at-scale", "prompt-injection-red-teaming-guide"],
  },
  {
    id: "business-ops",
    slug: "business-ops",
    title: "Business Operations: Cross-Silo Coordination & Operating SOP Execution",
    shortTitle: "Business Operations",
    category: "Execution Intelligence",
    kicker: "Workflow Family 07",
    icon: "activity",
    heroHeadline: "Unify internal request desks, email-to-workflow automation, cross-system reconciliation, and SOP compliance.",
    summary:
      "Eliminate the operational seams between organizational departments. Bayesforce deploys business operations coworkers that handle internal request desks, email-to-workflow routing, document operations, cross-system coordination, operational reconciliation, recurring operating reports, approval routing, exception management, SOP execution, SOP compliance, cross-team handoffs, internal research, and executive decision packets.",
    whatHappens:
      "Business operations is the nervous system of the organization. It manages internal shared service desks, coordinates cross-departmental projects, enforces standard operating procedures (SOPs), routes approvals, reconciles multi-system records, and generates operational reporting packages for executive leadership.",
    whereMachineryAccumulates: [
      "Internal requests sent via Slack, email, and hallway conversations falling through cracks without ownership or tracking",
      "Knowledge workers spending hours every week manually copying data between internal databases, spreadsheets, and project management tools",
      "Multi-department handoffs (e.g. Sales to Delivery to Invoicing) stalling because each team uses different software systems",
      "Standard Operating Procedures (SOPs) existing as static PDF documents that are rarely followed consistently in practice",
      "Executive leaders waiting weeks for analysts to manually assemble monthly operational review decks",
    ],
    representativeWorkflows: [
      { name: "Internal Request Desks", description: "Ingests internal requests from Slack/email, categorizes intent, extracts parameters, and triggers downstream workflows.", mode: "Deterministic" },
      { name: "Email-to-Workflow Conversion", description: "Parses unstructured emails and attachments into structured operational tasks with system-of-record updates.", mode: "Probabilistic AI" },
      { name: "Cross-System Coordination & Sync", description: "Maintains synchronization across project management tools, ERP records, and operational databases.", mode: "Deterministic" },
      { name: "Operational Reconciliation", description: "Identifies discrepancies between operational deliverables and billing milestones across systems.", mode: "Deterministic" },
      { name: "Recurring Operating Reports", description: "Aggregates real-time telemetry from multiple departments into standardized executive briefings.", mode: "Probabilistic AI" },
      { name: "Approval Routing & Escalation", description: "Routes internal approvals to authorized owners with complete context and escalation triggers.", mode: "Deterministic" },
      { name: "SOP Execution & Compliance", description: "Executes multi-step standard operating procedures deterministically, verifying each milestone.", mode: "Deterministic" },
      { name: "Decision Packet Assembly", description: "Gathers supporting data, historical precedent, and financial impact for major operational decisions.", mode: "Probabilistic AI" },
    ],
    approach:
      "Bayesforce acts as a system of action layered across your existing workplace tools (Slack, Jira, Asana, Google Workspace, databases). We automate routine cross-team handoffs, SOP enforcement, and reporting while ensuring every exception is routed to the responsible operating owner.",
    relevantCapabilities: ["ai-coworkers", "ai-data-engineering", "ai-capability"],
    relevantSystems: ["Slack / Microsoft Teams", "Jira / Asana / Monday", "Google Workspace / Office 365", "Notion / Confluence", "Postgres / Snowflake", "Zapier / Make"],
    humanVsAi: {
      deterministicTasks: [
        "Routing internal request tickets based on department ownership rules",
        "Executing multi-step database mutations and API webhooks upon trigger confirmation",
        "Checking task milestone completion against project management deadlines",
        "Formatting and scheduling recurring executive KPI summary emails",
      ],
      probabilisticAiTasks: [
        "Extracting actionable operational tasks and deadlines from unstructured executive emails",
        "Synthesizing cross-departmental narrative updates into executive summary memos",
        "Investigating root causes behind operational metric deviations across departments",
        "Drafting recommended mitigation options for operational bottlenecks",
      ],
      humanResponsibility: [
        "Strategic prioritization of competing organizational initiatives and capital budgets",
        "Resolving organizational authority disputes and cross-functional friction",
        "Authorizing fundamental changes to corporate standard operating procedures",
        "Evaluating employee performance and organizational structural design",
      ],
    },
    operationalBottleneck:
      "Executive leadership relies on rear-view monthly slide decks prepared by frantic analysts. By the time an operational breakdown is discussed in an executive committee, the quarterly damage is already done.",
    bayesforceSolution:
      "Build a real-time Execution Cadence Engine that reconciles data across CRM, ERP, Product, and Support systems, automatically detecting operational friction and routing intervention briefs to responsible owners.",
    executionFlow: [
      {
        stepNumber: 1,
        phase: "Cross-System Telemetry Ingestion",
        action: "Continuously monitors operational KPIs across sales pipelines, engineering sprints, inventory, and cash flow.",
        governance: "Role-based executive visibility controls.",
        outcome: "Unified real-time company operational state vector.",
      },
      {
        stepNumber: 2,
        phase: "Statistical Anomaly Detection",
        action: "Applies Bayesian statistical process control to detect abnormal variance in conversion, churn, or cycle times.",
        governance: "Filters seasonal noise and false positive alert fatigue.",
        outcome: "Validated high-priority operational deviation event.",
      },
      {
        stepNumber: 3,
        phase: "Multi-Hop Root Cause Diagnosis",
        action: "Queries underlying system logs and customer interactions to isolate the specific root cause behind the variance.",
        governance: "Cross-references past incident resolution playbooks.",
        outcome: "Diagnostic memo detailing what happened, why, and impact trajectory.",
      },
      {
        stepNumber: 4,
        phase: "Executive Action Routing",
        action: "Packages the diagnosis with 3 prioritized mitigation options and alerts the operational owner via Slack/email.",
        governance: "Includes clear decision deadline and expected outcome delta.",
        outcome: "Actionable decision prepared in 15 minutes instead of 2 weeks.",
      },
    ],
    beforeVsAfter: [
      {
        dimension: "Executive Briefing Preparation",
        traditional: "40 analyst hours every week pulling spreadsheets",
        bayesforce: "Automated daily real-time executive brief generation",
      },
      {
        dimension: "Operational Anomaly Discovery",
        traditional: "Discovered 30–45 days later at month-end close",
        bayesforce: "Detected within 4 hours of emergence",
      },
      {
        dimension: "Cross-Department Alignment",
        traditional: "Finger-pointing across disjointed dashboard numbers",
        bayesforce: "Single source of truth grounded in audited transaction logs",
      },
    ],
    hardMetrics: [
      { metric: "Operational Velocity Multiplier", benchmark: "Baseline 1.0x", achieved: "3.4x faster decision cycles" },
      { metric: "Executive Meeting Hours Saved", benchmark: "18 hrs/mo", achieved: "62 hrs/mo recovered" },
      { metric: "Quarterly Forecast Accuracy", benchmark: "72%", achieved: "94.8%" },
    ],
    applicableCapabilities: ["ai-coworkers", "ai-data-engineering", "ai-capability"],
    relatedInsights: ["state-of-enterprise-agent-readiness-2026", "statistical-trust-in-mission-critical-ai"],
  },
  {
    id: "technology-ops",
    slug: "technology-ops",
    title: "Technology Operations: Organizational IT Desks, Access Triage & Incident Resolution",
    shortTitle: "Technology Operations",
    category: "Infrastructure & IT Work",
    kicker: "Workflow Family 08",
    icon: "terminal",
    heroHeadline: "Accelerate organizational technology operations: IT service desks, access requests, incident triage, and release checks.",
    summary:
      "Technology operations is organizational work, not developer tooling. Bayesforce deploys technology operations coworkers that handle IT service desks, employee access requests, incident triage, IT knowledge resolution, QA regression coordination, E2E regression verification, release-readiness checks, application security testing triage, and product feedback synthesis.",
    whatHappens:
      "Technology operations ensures that the digital machinery of the enterprise runs securely and reliably. It manages internal IT service desks, provisions software access requests, coordinates production incident response, verifies release-readiness checklists, and triages security alerts.",
    whereMachineryAccumulates: [
      "Employees waiting hours or days for routine software access, VPN setups, and password resets from IT service desks",
      "IT and on-call engineers spending 40% of incident time manually gathering logs, stack traces, and commit histories",
      "Release managers manually chasing checklist approvals across QA, Security, and Engineering before production deployments",
      "Security teams overwhelmed by thousands of vulnerability scanner alerts that need triage against actual production exposure",
      "Product teams receiving scattered feedback across support tickets, customer calls, and app store reviews without structured aggregation",
    ],
    representativeWorkflows: [
      { name: "IT Service Desk & Knowledge Resolution", description: "Resolves routine employee IT tickets (software installs, network troubleshooting, hardware requests).", mode: "Probabilistic AI" },
      { name: "Access Requests & Least-Privilege Triage", description: "Evaluates software access requests against role-based entitlement matrices and provisions credentials.", mode: "Deterministic" },
      { name: "Incident Triage & Correlation", description: "Correlates alerts across Datadog, Sentry, and PagerDuty with recent git commits to diagnose root causes.", mode: "Probabilistic AI" },
      { name: "QA & E2E Regression Coordination", description: "Orchestrates test suite runs, identifies flaky test failures, and aggregates pass/fail reports.", mode: "Deterministic" },
      { name: "Release-Readiness Checks", description: "Verifies deployment checklists, changelog documentation, and rollback plans prior to release.", mode: "Deterministic" },
      { name: "Application Security Testing Triage", description: "Filters false positives from SAST/DAST security scans and prioritizes critical vulnerabilities.", mode: "Probabilistic AI" },
      { name: "Product Feedback Triage", description: "Synthesizes customer feature requests and bug reports across support tickets into structured backlog cards.", mode: "Probabilistic AI" },
      { name: "FinOps & Infrastructure Cost Tracking", description: "Monitors cloud and LLM token usage across services, alerting engineering leads to anomalous cost spikes.", mode: "Deterministic" },
    ],
    approach:
      "Bayesforce treats technology operations as organizational work. We integrate with your IT service desk (Jira Service Management, ServiceNow), observability platforms (Datadog, Sentry), and cloud providers to automate routine IT resolution, access provisioning, and incident triage with full auditability.",
    relevantCapabilities: ["ai-trust-and-governance", "ai-data-engineering", "ai-coworkers"],
    relevantSystems: ["Jira Service Management", "ServiceNow", "Okta / Azure AD", "Datadog / New Relic", "PagerDuty", "GitHub / GitLab", "AWS / GCP / Azure", "Slack"],
    humanVsAi: {
      deterministicTasks: [
        "Verifying employee manager approval for software license and privilege requests",
        "Executing automated identity provisioning webhooks via Okta or Azure AD",
        "Triggering CI/CD pipeline builds and recording regression test results",
        "Enforcing hard cloud spending budget thresholds and alerting engineering leads",
      ],
      probabilisticAiTasks: [
        "Troubleshooting employee software setup issues by analyzing error screenshots and system logs",
        "Synthesizing distributed stack traces, database latency spikes, and recent git commits during outages",
        "Deduplicating and prioritizing application security scanner findings based on actual exploitability",
        "Clustering unstructured user bug reports and customer feedback into distinct feature themes",
      ],
      humanResponsibility: [
        "Authorizing root or production database write access for high-privilege administrators",
        "Making critical architectural trade-offs during major production infrastructure redesigns",
        "Authorizing emergency deployment rollbacks or incident post-mortem retrospectives",
        "Setting corporate information security, data governance, and compliance policies",
      ],
    },
    operationalBottleneck:
      "IT and operations engineers spend 40% of their time firefighting repetitive service desk requests, access permissions, and manual release checklists.",
    bayesforceSolution:
      "Deploy an autonomous technology ops coworker that resolves IT tickets, automates access provisioning, correlates incident telemetry, and verifies release readiness.",
    executionFlow: [
      {
        stepNumber: 1,
        phase: "Telemetry & Ticket Ingestion",
        action: "Ingests IT requests from Slack/Jira or production alerts from Datadog/PagerDuty.",
        governance: "Smart deduplication preventing alert storms.",
        outcome: "Single consolidated incident timeline with correlated git commits.",
      },
      {
        stepNumber: 2,
        phase: "Root Cause & Access Triage",
        action: "Analyzes logs, error screenshots, and role matrices to determine solution or access eligibility.",
        governance: "Safe read-only inspection of observability logs.",
        outcome: "Incident triage brief with suggested resolution or verified access approval.",
      },
      {
        stepNumber: 3,
        phase: "Automated Execution & Verification",
        action: "Provisions verified access via Okta or runs automated regression verification for hotfixes.",
        governance: "Mandatory security policy compliance and least-privilege enforcement.",
        outcome: "Instant IT resolution or automated Pull Request ready for staff engineer review.",
      },
      {
        stepNumber: 4,
        phase: "FinOps & Cloud Monitoring",
        action: "Monitors real-time cloud and LLM API consumption, identifying idle resources and cost spikes.",
        governance: "Automatic budget alerts and non-disruptive rate-limiting.",
        outcome: "Continuous 35% to 60% reduction in cloud and token waste.",
      },
    ],
    beforeVsAfter: [
      {
        dimension: "IT Access Request Turnaround",
        traditional: "24–48 hours waiting in IT queue",
        bayesforce: "< 3 minutes with automated entitlement check",
      },
      {
        dimension: "Incident Triage (MTTR)",
        traditional: "48 minutes average incident downtime",
        bayesforce: "8.5 minutes with autonomous root-cause isolation",
      },
      {
        dimension: "Release Checklist Verification",
        traditional: "4 hours of manual verification across teams",
        bayesforce: "Instant automated release-readiness report",
      },
    ],
    hardMetrics: [
      { metric: "Incident MTTR Reduction", benchmark: "52 mins", achieved: "7.8 mins" },
      { metric: "IT Helpdesk Resolution Rate", benchmark: "32%", achieved: "81% autonomous resolution" },
      { metric: "Cloud & Token Cost Reduction", benchmark: "$84,000 / mo", achieved: "$36,000 / mo net spend" },
    ],
    applicableCapabilities: ["ai-trust-and-governance", "ai-data-engineering", "ai-coworkers"],
    relatedInsights: ["llm-finops-token-reduction", "agentic-tool-use-and-sandboxing", "statistical-evaluation-harness"],
  },
];

/* ==========================================================================
   3. INSIGHTS (CASE STUDIES, PLAYBOOKS, REPORTS, GUIDES)
   ========================================================================== */

export const INSIGHTS: InsightItem[] = [
  /* --- CASE STUDIES --- */
  {
    slug: "tier-1-fintech-recon",
    type: "case-studies",
    typeLabel: "Case Study",
    title: "Automating 3-Way Reconciliation for a $1.2B Transaction Volume FinTech",
    kicker: "Finance & Accounting Case Study",
    subtitle: "How Bayesforce eliminated a 14-day month-end close backlog and achieved 99.98% matching accuracy.",
    readTime: "8 min read",
    publishedDate: "January 2026",
    author: {
      name: "Sagar Udasi",
      role: "Principal Systems Architect, Bayesforce",
    },
    summary:
      "A high-growth fintech processing $1.2B in annual transaction volume was losing 350 hours per month in manual 3-way invoice and bank statement matching. Bayesforce deployed an autonomous financial reconciliation engine that reduced month-end close from 14 days to 18 hours.",
    tags: ["FinTech", "3-Way Matching", "Finance Ops", "Document Parsing", "Enterprise Agents"],
    metricsDelta: [
      { label: "Close Cycle Time", value: "14 Days → 18 Hours" },
      { label: "Matching Precision", value: "99.98%" },
      { label: "AP Hours Recovered", value: "350 hrs / month" },
      { label: "Leakage Prevented", value: "$1.4M / year" },
    ],
    contentSections: [
      {
        heading: "1. Problem: Drowning in Month-End Reconciliation",
        lead: "When transaction velocity outpaces administrative machinery, human burnout and financial leakage follow.",
        paragraphs: [
          "The client, a high-growth B2B payment processor handling over 180,000 merchant disbursements monthly, operated across 6 banking partners and 4 gateway providers. Each partner delivered settlement reports in disparate formats: nested CSVs, encrypted PDFs, and legacy SFTP batch files.",
          "A team of 14 financial analysts spent the first two weeks of every month manually copying transaction IDs, cross-referencing ledger entries in NetSuite, and tracking down pennies of rounding variance. Month-end close dragged out to 14 business days, leaving leadership without timely financial clarity.",
        ],
        callout: {
          type: "warning",
          text: "The financial team was operating at 120% capacity. Any further merchant growth directly required linear headcount additions, threatening unit economics.",
        },
      },
      {
        heading: "2. Existing Workflow & Systems Involved",
        lead: "Fragmented software tools without an intelligent execution layer.",
        paragraphs: [
          "Settlement data arrived via SFTP daily at 02:00 UTC. Invoices arrived via PDF in an accounts payable inbox. Financial analysts opened three monitors simultaneously: NetSuite ERP, bank portal statements, and an Excel macro file containing over 200,000 rows.",
          "Analysts manually searched for transaction IDs, verified fee calculations, flagged currency conversion rounding mismatches, and typed manual journal adjustments into NetSuite.",
        ],
      },
      {
        heading: "3. What Bayesforce Built",
        lead: "A hybrid deterministic-and-probabilistic financial reconciliation engine.",
        paragraphs: [
          "Bayesforce designed an automated reconciliation pipeline: Docling layout-aware extractors for multi-format bank statements, a deterministic mathematical matching engine with configurable tolerance rules (0.01% currency variance), and an AI coworker that generates audited journal entry drafts.",
        ],
        tableData: {
          headers: ["Layer", "Technology", "Operational Role"],
          rows: [
            ["Ingestion", "Secure SFTP Watcher + Apache Arrow", "Parallelized ingestion of 200k+ daily transactions in < 4s"],
            ["Extraction", "Docling + Pydantic Schema Contracts", "Deterministic table extraction with zero column misalignment"],
            ["Matching", "Mathematical Graph Matching Engine", "Line-item 3-way matching with currency conversion verification"],
            ["Audit", "PostgreSQL + Cryptographic SHA-256 Ledger", "Immutable audit trail with visual links to source bank files"],
          ],
        },
      },
      {
        heading: "4. What AI Handles vs. What Remains Human",
        lead: "Sensible automation boundaries rather than unconstrained autonomy.",
        paragraphs: [
          "The AI system parses incoming settlement files, matches 96% of line items deterministically, isolates anomalous variances, and prepares balanced journal entries. All exceptions exceeding $500 or involving unrecognized merchant IDs are routed to the Lead Controller with a pre-compiled decision packet.",
        ],
      },
      {
        heading: "5. Outcome & Implementation Lessons",
        lead: "Empirical operational delta achieved in 4 weeks.",
        paragraphs: [
          "Month-end close was compressed from 14 business days to 18 hours. The finance team recovered 350 hours per month to focus on treasury strategy and unit economics. Zero unauthorized transactions occurred across $1.2B in volume.",
          "Key Lesson: Never deploy purely probabilistic LLMs for financial calculations. Use deterministic mathematical engines for computation, and use AI models exclusively for document extraction, entity normalization, and human review packet assembly.",
        ],
      },
    ],
    relatedCapabilities: ["ai-data-engineering", "ai-coworkers", "ai-trust-and-governance"],
    relatedWorkflows: ["finance-and-accounting"],
  },
  {
    slug: "midmarket-b2b-saas-revops",
    type: "case-studies",
    typeLabel: "Case Study",
    title: "Tripling Outbound Pipeline Velocity for a Mid-Market Enterprise SaaS",
    kicker: "Revenue Operations Case Study",
    subtitle: "Deploying autonomous research and CRM hygiene coworkers to recover 24 sales hours per rep weekly.",
    readTime: "7 min read",
    publishedDate: "February 2026",
    author: {
      name: "Sagar Udasi",
      role: "Principal Systems Architect, Bayesforce",
    },
    summary:
      "A 45-person sales organization was losing 60% of rep time to manual account research and Salesforce data entry. Bayesforce deployed an autonomous Revenue Operations coworker that increased outbound pipeline from $1.4M to $4.2M per quarter.",
    tags: ["Revenue Operations", "Salesforce", "Lead Enrichment", "AI Coworkers", "B2B SaaS"],
    metricsDelta: [
      { label: "Quarterly Pipeline", value: "$1.4M → $4.2M" },
      { label: "Rep Research Time", value: "45m → 45s" },
      { label: "CRM Hygiene", value: "100% Field Completeness" },
      { label: "Meeting Conversion", value: "1.8% → 7.8%" },
    ],
    contentSections: [
      {
        heading: "1. Problem: Highly Paid Sellers Acting as Data Clerks",
        paragraphs: [
          "The client employed 25 Account Executives and 20 SDRs selling high-ACV enterprise software ($65k ARR). Reps were spending 24+ hours per week manually reading SEC 10-K filings, tracking executive job changes on LinkedIn, and copying notes into Salesforce.",
          "Because rep research was slow and exhausting, outbound sequences defaulted to generic templates, resulting in low meeting conversion rates (1.8%) and missed quarterly pipeline targets.",
        ],
      },
      {
        heading: "2. What Bayesforce Built",
        paragraphs: [
          "Bayesforce deployed an autonomous Revenue Operations Coworker integrated into Salesforce, Gong, and Slack. When an target account exhibits buying signals, the coworker assembles a 1-page intelligence brief, drafts hyper-tailored email sequences, and updates Salesforce fields automatically after every customer call.",
        ],
      },
      {
        heading: "3. Outcome & Lessons Learned",
        paragraphs: [
          "Outbound meeting booking conversion surged from 1.8% to 7.8%. Quarterly qualified pipeline tripled from $1.4M to $4.2M within 90 days. Rep turnover dropped to zero as administrative friction was eliminated.",
          "Key Lesson: Reps love AI when it works in their draft box and updates their CRM fields, but hate AI when it sends autonomous emails without their personal review.",
        ],
      },
    ],
    relatedCapabilities: ["ai-coworkers", "ai-data-engineering"],
    relatedWorkflows: ["revenue-ops"],
  },
  {
    slug: "enterprise-legal-contract-redlining",
    type: "case-studies",
    typeLabel: "Case Study",
    title: "Accelerating Commercial MSA Reviews from 9 Days to 20 Minutes",
    kicker: "Legal & Risk Case Study",
    subtitle: "Grounded clause redlining and obligation extraction for a high-growth logistics enterprise.",
    readTime: "6 min read",
    publishedDate: "March 2026",
    author: {
      name: "Sagar Udasi",
      role: "Principal Systems Architect, Bayesforce",
    },
    summary:
      "An enterprise logistics company with $400M revenue had an 80-contract legal backlog stalling quarterly sales deals. Bayesforce deployed a playbook-governed contract review coworker that compressed review cycles from 9 days to 20 minutes.",
    tags: ["Legal Ops", "Contract Redlining", "Risk & Compliance", "DocuSign", "Ironclad"],
    metricsDelta: [
      { label: "Review Turnaround", value: "9 Days → 20 Mins" },
      { label: "Outside Legal Spend", value: "-82% Saved" },
      { label: "Playbook Compliance", value: "99.8%" },
      { label: "Missed Renewals", value: "0 Defaults" },
    ],
    contentSections: [
      {
        heading: "1. Problem: Legal Backlog Stalling Revenue Growth",
        paragraphs: [
          "A 3-person in-house legal team was overwhelmed by 120+ vendor and customer MSAs monthly. Sales reps waited an average of 9 business days for first-pass redlines, causing quarterly revenue slippage.",
        ],
      },
      {
        heading: "2. What Bayesforce Built",
        paragraphs: [
          "We engineered a deterministic clause extraction pipeline that parses third-party Word and PDF agreements, compares indemnification and liability caps against corporate playbooks, inserts pre-approved fallback clauses with track changes, and logs renewal obligations into a structured compliance calendar.",
        ],
      },
      {
        heading: "3. Outcome & Human-in-the-Loop Governance",
        paragraphs: [
          "80% of routine MSAs were reviewed and redlined in under 20 minutes. General Counsel maintained 100% final sign-off authority, spending their time on strategic negotiations rather than repetitive clause proofreading.",
        ],
      },
    ],
    relatedCapabilities: ["ai-trust-and-governance", "ai-data-engineering", "ai-coworkers"],
    relatedWorkflows: ["legal-risk-and-compliance"],
  },

  /* --- PLAYBOOKS --- */
  {
    slug: "ai-workflow-design-playbook",
    type: "playbooks",
    typeLabel: "Engineering Playbook",
    title: "AI Workflow Design Playbook: Decomposing Enterprise Work into Governed Systems",
    kicker: "Architecture Blueprint",
    subtitle: "A systematic framework for identifying, mapping, and implementing AI-enabled workflows.",
    readTime: "12 min read",
    publishedDate: "February 2026",
    author: {
      name: "Sagar Udasi",
      role: "Principal Systems Architect, Bayesforce",
    },
    summary:
      "How Bayesforce analyzes complex organizational processes: decomposing workflows into deterministic tasks, probabilistic AI tasks, and human approval checkpoints.",
    tags: ["Workflow Design", "Agent Architecture", "State Machines", "Enterprise Engineering"],
    contentSections: [
      {
        heading: "1. The Universal Workflow Decomposition Model",
        lead: "Moving beyond monolithic prompts to discrete state machines.",
        paragraphs: [
          "Every operational workflow in an organization can be decomposed into 13 discrete stages: Trigger, Ingest, Understand, Retrieve Context, Check, Reason, Orchestrate, Execute, Generate, Human Review, Update System of Record, Measure, and Learn.",
          "The critical architectural failure in enterprise AI is treating the entire workflow as a single LLM prompt. Production systems require deterministic steps for validation, probabilistic AI for reasoning, and human checkpoints for consequential decisions.",
        ],
      },
      {
        heading: "2. The Sensible Automation Rubric",
        paragraphs: [
          "We evaluate every workflow step across three axes: Deterministic (fixed mathematical rules and database operations), Probabilistic AI (natural language extraction, synthesis, and anomaly triage), and Human Review (commercial commitments, ethics, and strategic trade-offs).",
          "The objective is sensible automation, not maximum autonomy.",
        ],
      },
    ],
    relatedCapabilities: ["ai-coworkers", "ai-data-engineering", "ai-trust-and-governance"],
    relatedWorkflows: ["business-ops", "finance-and-accounting", "revenue-ops"],
  },
  {
    slug: "finance-exception-automation-playbook",
    type: "playbooks",
    typeLabel: "Engineering Playbook",
    title: "Finance Exception Automation Playbook: Line-Item Reconciliation at Scale",
    kicker: "Financial Engineering Playbook",
    subtitle: "Architectural blueprint for building zero-loss 3-way invoice matching and ledger reconciliation engines.",
    readTime: "10 min read",
    publishedDate: "January 2026",
    author: {
      name: "Sagar Udasi",
      role: "Principal Systems Architect, Bayesforce",
    },
    summary:
      "Detailed architectural patterns for multi-modal financial extraction, layout-aware OCR, deterministic PO matching, and automated exception routing.",
    tags: ["Finance Ops", "Reconciliation", "ERP Integration", "Docling", "Pydantic"],
    contentSections: [
      {
        heading: "1. The Multi-Modal Invoice Ingestion Pattern",
        paragraphs: [
          "Financial invoices are notoriously messy: scanned receipts, nested tables, skewed borders, and multi-currency line items. We detail the exact pipeline combining layout tokenization, Pydantic data contracts, and cryptographic hashing.",
        ],
      },
      {
        heading: "2. Mathematical Matching Engine & Exception Rules",
        paragraphs: [
          "How to construct fuzzy matching algorithms that reconcile line items across purchase orders and receiving slips within strict mathematical tolerance bands.",
        ],
      },
    ],
    relatedCapabilities: ["ai-data-engineering", "ai-coworkers", "ai-trust-and-governance"],
    relatedWorkflows: ["finance-and-accounting", "procurement-and-supply"],
  },
  {
    slug: "human-in-the-loop-escalation-design",
    type: "playbooks",
    typeLabel: "Engineering Playbook",
    title: "Human-in-the-Loop AI Playbook: Designing Safe Enterprise Escalation Gates",
    kicker: "Governance Blueprint",
    subtitle: "How to engineer interactive Slack/Teams approval cards, diff inspections, and feedback loops.",
    readTime: "9 min read",
    publishedDate: "February 2026",
    author: {
      name: "Sagar Udasi",
      role: "Principal Systems Architect, Bayesforce",
    },
    summary:
      "A complete guide to designing human review interfaces that provide high-speed verification without operator fatigue.",
    tags: ["Human-in-the-loop", "Slack Bots", "Governance", "Auditability"],
    contentSections: [
      {
        heading: "1. The Psychology of Human Oversight",
        paragraphs: [
          "If a human reviewer is shown a wall of text, they default to rubber-stamping or ignoring the alert. Human-in-the-loop interfaces must present side-by-side diffs, confidence scores, and 1-click actions (Approve, Edit, Reject).",
        ],
      },
    ],
    relatedCapabilities: ["ai-coworkers", "ai-trust-and-governance"],
    relatedWorkflows: ["revenue-ops", "legal-risk-and-compliance", "customer-ops"],
  },
  {
    slug: "enterprise-ai-evaluation-playbook",
    type: "playbooks",
    typeLabel: "Engineering Playbook",
    title: "Enterprise AI Evaluation Playbook: Golden Datasets & Regression CI/CD",
    kicker: "Evaluation Blueprint",
    subtitle: "Building statistical benchmarking harnesses to measure task correctness and prevent prompt drift.",
    readTime: "11 min read",
    publishedDate: "March 2026",
    author: {
      name: "Sagar Udasi",
      role: "Principal Systems Architect, Bayesforce",
    },
    summary:
      "How Bayesforce builds automated regression test suites that block degrading model and prompt changes before production deployment.",
    tags: ["Evals", "Ragas", "CI/CD", "Regression Testing", "Statistical Inference"],
    contentSections: [
      {
        heading: "1. Golden Evaluation Datasets",
        paragraphs: [
          "Every operational workflow requires a curated golden dataset of at least 250 real-world edge cases with verified ground truth outputs. We outline synthetic perturbation methods and automated scoring metrics.",
        ],
      },
    ],
    relatedCapabilities: ["ai-trust-and-governance"],
    relatedWorkflows: ["technology-ops", "legal-risk-and-compliance"],
  },

  /* --- REPORTS --- */
  {
    slug: "state-of-enterprise-agent-readiness-2026",
    type: "reports",
    typeLabel: "Research Report",
    title: "State of AI Operations 2026: The Shift from Chatbots to Systems of Action",
    kicker: "Market Research Report",
    subtitle: "Empirical analysis across 140 mid-market enterprises navigating AI workflow implementation.",
    readTime: "14 min read",
    publishedDate: "January 2026",
    author: {
      name: "Sagar Udasi",
      role: "Principal Systems Architect, Bayesforce",
    },
    summary:
      "Our annual benchmark on enterprise AI adoption: why 78% of point-solution copilots fail to deliver ROI, and why organizations are rebuilding core workflows around integrated digital labor.",
    tags: ["Market Research", "Enterprise AI", "Macro Trends", "COO Agenda", "Productivity"],
    contentSections: [
      {
        heading: "1. Executive Summary: The Copilot Disillusionment",
        paragraphs: [
          "In 2024–2025, enterprises bought seat licenses for dozens of disparate AI copilots. The result was increased context switching, fragmented data, and negligible bottom-line operating leverage.",
          "In 2026, category-defining companies are adopting systems of action: layered across existing CRMs and ERPs to carry routine execution end-to-end.",
        ],
      },
      {
        heading: "2. The Unit Economics of AI-Native Operations",
        paragraphs: [
          "We analyze data from 140 organizations comparing the total cost of manual workflow machinery against the infrastructure cost of governed AI coworkers.",
        ],
      },
    ],
    relatedCapabilities: ["ai-coworkers", "ai-capability"],
    relatedWorkflows: ["business-ops", "revenue-ops"],
  },
  {
    slug: "the-unit-economics-of-digital-labor",
    type: "reports",
    typeLabel: "Research Report",
    title: "The Economics of AI Coworkers: Calculating the Cost of Manual Machinery",
    kicker: "Economic Analysis",
    subtitle: "A CFO framework for modeling token costs, cycle time acceleration, and employee judgment recovery.",
    readTime: "9 min read",
    publishedDate: "February 2026",
    author: {
      name: "Sagar Udasi",
      role: "Principal Systems Architect, Bayesforce",
    },
    summary:
      "A rigorous financial model for calculating the fully loaded cost of manual human integration layers versus governed autonomous systems.",
    tags: ["FinOps", "Unit Economics", "CFO Agenda", "ROI Modeling"],
    contentSections: [
      {
        heading: "1. The Hidden Cost of Human Integration Layers",
        paragraphs: [
          "When knowledge workers spend 35% of their time searching for files, reconciling spreadsheets, and updating databases, companies pay senior salaries for administrative machinery. We provide a downloadable ROI calculator.",
        ],
      },
    ],
    relatedCapabilities: ["ai-trust-and-governance", "ai-coworkers"],
    relatedWorkflows: ["finance-and-accounting", "revenue-ops", "customer-ops"],
  },
  {
    slug: "where-enterprise-ai-breaks-down",
    type: "reports",
    typeLabel: "Research Report",
    title: "Where Enterprise AI Projects Break Down: 7 Structural Failure Modes",
    kicker: "Implementation Research",
    subtitle: "Why 84% of enterprise GenAI pilots stall after the demo and how to engineer past them.",
    readTime: "11 min read",
    publishedDate: "March 2026",
    author: {
      name: "Sagar Udasi",
      role: "Principal Systems Architect, Bayesforce",
    },
    summary:
      "A post-mortem analysis of failed enterprise AI initiatives: missing data topology, stateless prompt chains, lack of tool sandboxes, and absence of regression evals.",
    tags: ["Failure Modes", "Production AI", "Architecture", "Engineering"],
    contentSections: [
      {
        heading: "1. The 7 Deadly Sins of Enterprise AI Deployment",
        paragraphs: [
          "From relying on naive chunking RAG to deploying un-sandboxed API mutations, we examine the technical traps that prevent AI from working in production.",
        ],
      },
    ],
    relatedCapabilities: ["ai-data-engineering", "ai-trust-and-governance"],
    relatedWorkflows: ["technology-ops", "business-ops"],
  },

  /* --- GUIDES --- */
  {
    slug: "how-to-identify-workflows-for-ai",
    type: "guides",
    typeLabel: "Practitioner Guide",
    title: "How to Identify Workflows Suitable for AI Automation",
    kicker: "Practitioner Guide",
    subtitle: "A 5-step evaluation matrix to identify high-ROI operational processes in your organization.",
    readTime: "8 min read",
    publishedDate: "January 2026",
    author: {
      name: "Sagar Udasi",
      role: "Principal Systems Architect, Bayesforce",
    },
    summary:
      "A practical guide for operational leaders to audit business workflows, measure manual drag, and select the highest-yield candidates for AI coworker deployment.",
    tags: ["Workflow Audit", "Process Mapping", "COO Guide", "Implementation"],
    contentSections: [
      {
        heading: "1. The High-Friction Operational Checklist",
        paragraphs: [
          "Look for workflows where information arrives in unstructured formats (PDFs, emails, tickets), requires multi-system lookups, follows repeatable business logic, and ends in a database update.",
        ],
      },
    ],
    relatedCapabilities: ["ai-coworkers", "ai-capability"],
    relatedWorkflows: ["business-ops", "finance-and-accounting"],
  },
  {
    slug: "how-to-build-evaluation-set",
    type: "guides",
    typeLabel: "Practitioner Guide",
    title: "How to Build an Evaluation Set for an AI Workflow",
    kicker: "Engineering Guide",
    subtitle: "Step-by-step methodology for curating golden test cases, synthetic perturbations, and pass/fail thresholds.",
    readTime: "10 min read",
    publishedDate: "February 2026",
    author: {
      name: "Sagar Udasi",
      role: "Principal Systems Architect, Bayesforce",
    },
    summary:
      "Practical instructions for data and software engineers on building rigorous evaluation datasets for production AI agents.",
    tags: ["Evals", "Golden Datasets", "Testing", "Quality Assurance"],
    contentSections: [
      {
        heading: "1. Curation of Real-World Edge Cases",
        paragraphs: [
          "How to extract historical exception logs from your ERP or CRM and construct an evaluation harness that tests precision, recall, and tool schema compliance.",
        ],
      },
    ],
    relatedCapabilities: ["ai-trust-and-governance"],
    relatedWorkflows: ["technology-ops", "legal-risk-and-compliance"],
  },
  {
    slug: "deterministic-vs-ai-agents",
    type: "guides",
    typeLabel: "Practitioner Guide",
    title: "How to Choose Between Deterministic Automation and AI Agents",
    kicker: "Architectural Guide",
    subtitle: "When to use code and SQL versus when to deploy probabilistic LLMs and multi-agent systems.",
    readTime: "7 min read",
    publishedDate: "March 2026",
    author: {
      name: "Sagar Udasi",
      role: "Principal Systems Architect, Bayesforce",
    },
    summary:
      "A decision framework for engineers and operators to avoid over-engineering with LLMs where simple code is faster, cheaper, and 100% reliable.",
    tags: ["Architecture", "Engineering", "LLM vs Code", "Best Practices"],
    contentSections: [
      {
        heading: "1. The Rule of Least Complexity",
        paragraphs: [
          "If a problem can be solved with a regex, SQL query, or API webhook, never use an LLM. Reserve probabilistic AI for unstructured natural language, multi-modal documents, and complex semantic reasoning.",
        ],
      },
    ],
    relatedCapabilities: ["ai-coworkers", "ai-data-engineering"],
    relatedWorkflows: ["technology-ops", "business-ops"],
  },
];

/* ==========================================================================
   4. CAREERS (OPEN ROLES)
   ========================================================================== */

export const CAREER_ROLES: CareerRole[] = [
  {
    id: "principal-ai-systems-engineer",
    slug: "principal-ai-systems-engineer",
    title: "Principal AI Systems Engineer",
    department: "AI & Distributed Systems",
    location: "Mumbai / Pune / Hybrid",
    type: "Full-Time",
    experience: "5+ Years",
    summary:
      "Build high-throughput, stateful multi-agent systems, eBPF tool sandboxes, and hybrid vector/graph data fabrics for enterprise clients.",
    whatYouWillBuild: [
      "Stateful agent runtimes using LangGraph, Python, and TypeScript with deterministic checkpointing",
      "Multi-modal document parsing pipelines capable of processing 500k pages/day with sub-second latency",
      "eBPF-sandboxed execution microVMs for secure external API mutations and database updates",
      "Distributed tracing harnesses with OpenTelemetry, Langfuse, and custom Bayesian scoring engines",
    ],
    requirements: [
      "Deep production experience in Python, TypeScript, Rust, or Go building high-concurrency distributed systems",
      "Strong understanding of LLM architectures, context window tokenization, embedding spaces, and RAG topologies",
      "Experience with relational databases (PostgreSQL), vector stores (Qdrant/Milvus), and graph databases (Neo4j)",
      "High agency, extreme craft, and the ability to turn ambiguous enterprise operational chaos into clean code",
    ],
    niceToHave: [
      "Contributions to open-source agent frameworks, compilers, or database drivers",
      "Experience with change data capture (Debezium/Kafka) and enterprise ERP/CRM APIs",
    ],
  },
  {
    id: "lead-workflow-solutions-architect",
    slug: "lead-workflow-solutions-architect",
    title: "Lead Workflow & Solutions Architect",
    department: "Applied AI & Solutions",
    location: "Mumbai / Pune / Hybrid",
    type: "Full-Time",
    experience: "4+ Years",
    summary:
      "Lead technical engagements directly with enterprise COOs, CFOs, and VPs of Ops. Deconstruct messy business workflows into elegant systems of action.",
    whatYouWillBuild: [
      "Direct client engagement architecture: mapping 13-stage universal workflows across Finance, Revenue, and Legal ops",
      "Rapid prototyping of governed digital coworkers in client staging environments within 2–4 week sprints",
      "Standard Operating Procedure (SOP) blueprints and technical evaluation suites for client engineering teams",
      "Collaborative pair-programming and capability transfer workshops with client developers",
    ],
    requirements: [
      "Demonstrated experience designing enterprise software integrations across Salesforce, NetSuite, SAP, or Jira",
      "Strong technical literacy with the ability to write production Python/TypeScript code and inspect database schemas",
      "Exceptional written and verbal communication skills; comfortable presenting to C-suite operating executives",
      "Pragmatic engineering mindset prioritizing sensible automation and verifiable outcomes over theoretical hype",
    ],
    niceToHave: [
      "Past experience in high-growth B2B SaaS solutions engineering or boutique technical consulting",
      "Deep functional knowledge in accounting reconciliation, revenue operations, or legal contract workflows",
    ],
  },
  {
    id: "eval-safety-research-engineer",
    slug: "eval-safety-research-engineer",
    title: "AI Evaluation & Safety Research Engineer",
    department: "Trust & Governance",
    location: "Mumbai / Pune / Remote",
    type: "Full-Time",
    experience: "3+ Years",
    summary:
      "Develop statistical evaluation harnesses, continuous regression CI/CD suites, and prompt injection red-teaming firewalls.",
    whatYouWillBuild: [
      "Automated evaluation harnesses using Bayesian statistical scoring to measure factual correctness and drift",
      "Golden dataset generators synthesizing adversarial edge cases and domain-specific edge queries",
      "Active defense firewalls blocking direct and indirect prompt injections and PII leakage",
      "Token FinOps routing proxies optimizing enterprise model spend and latency",
    ],
    requirements: [
      "Strong background in statistics, probability theory, and machine learning benchmarking",
      "Proficiency in Python, PyTorch/Transformers, Pytest, and modern evaluation libraries (Ragas, DeepEval)",
      "Deep curiosity about LLM vulnerabilities, jailbreaks, prompt extraction, and security red-teaming",
      "Commitment to empirical evidence and rigorous scientific verification over marketing claims",
    ],
    niceToHave: [
      "Published research or CVEs in adversarial AI safety, prompt injection, or model interpretability",
      "Experience with regulatory compliance frameworks (SOC2, ISO27001, EU AI Act, HIPAA)",
    ],
  },
];
