"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/ui";
import styles from "./PipelineContinuumSection.module.css";

interface StageProofPoint {
  title: string;
  desc: string;
}

interface PipelineStage {
  id: string;
  stepNum: string;
  name: string;
  question: string;
  headline: string;
  copy: string;
  vocabulary: string[];
  proofPoints: StageProofPoint[];
  securityInvariant: string;
  securityDesc: string;
  ctaLabel: string;
}

const STAGES: PipelineStage[] = [
  {
    id: "connect",
    stepNum: "01",
    name: "CONNECT",
    question: "Can you work with the systems we already have?",
    headline: "Bring the systems that run the business into the flow.",
    copy: "Your data already lives across enterprise applications, databases, files, APIs, and operational systems. Bring those sources into a connected data flow without requiring the business to rebuild its existing state.",
    vocabulary: [
      "zero-replatforming",
      "universal connectors",
      "network peering",
      "OAuth / IAM read-only scopes",
      "schema introspection",
      "credential vaults",
    ],
    proofPoints: [
      {
        title: "Zero Replatforming Required",
        desc: "Connect natively to existing SAP, NetSuite, Salesforce, and cloud databases without forcing migration or workflow downtime.",
      },
      {
        title: "Universal Connector Breadth",
        desc: "Pre-built and custom adapter support across modern cloud SaaS, relational databases, legacy on-prem systems, and file stores.",
      },
      {
        title: "Non-Invasive Network & Auth Peering",
        desc: "Connect via secure OAuth, IAM roles, SSH tunneling, or VPC peering with read-only least-privilege scoping.",
      },
      {
        title: "Automated Schema & Endpoint Discovery",
        desc: "Introspect table structures, object definitions, and API endpoints automatically to map the enterprise data footprint.",
      },
    ],
    securityInvariant: "Access Control, Scoped RBAC & Lineage Initiation",
    securityDesc: "Scoped least-privilege tokens, encrypted credential vaults, and PrivateLink network boundaries establish an immutable origin audit trail.",
    ctaLabel: "Evaluate Integration Feasibility",
  },
  {
    id: "ingest",
    stepNum: "02",
    name: "INGEST",
    question: "Can you move data continuously and reliably, not just connect to it?",
    headline: "Move data reliably at the speed the business requires.",
    copy: "Data arrives through different patterns on different schedules. Match ingestion to the workload: batch, change capture, streaming, events, files, and APIs, so downstream systems receive the information they need.",
    vocabulary: [
      "batch ingestion",
      "change data capture (CDC)",
      "streaming",
      "event-driven ingestion",
      "backpressure throttling",
      "rate limit (HTTP 429) buffers",
    ],
    proofPoints: [
      {
        title: "Dual-Speed Ingestion Fabric",
        desc: "Simultaneously handle real-time event streams (Kafka, webhooks) and heavy transactional batch runs without cross-pipeline contention.",
      },
      {
        title: "Change Data Capture (CDC)",
        desc: "Extract low-latency incremental database updates directly from transaction logs without querying pressure on production databases.",
      },
      {
        title: "Automated Backpressure & Throttling",
        desc: "Dynamic rate-limit governance and buffer queues prevent API rate-limit exhaustion (HTTP 429) across third-party SaaS platforms.",
      },
      {
        title: "Resilient Retry & Dead-Letter Routing",
        desc: "Transient network faults trigger exponential backoff retries, while corrupted payloads divert to monitored dead-letter queues without stalling the pipeline.",
      },
    ],
    securityInvariant: "Data Freshness, Backpressure Regulation & Zero-Drop Telemetry",
    securityDesc: "Real-time SLA monitoring on sync latency, automated backpressure throttling, and zero-drop buffers ensure pipelines remain resilient under sudden traffic spikes.",
    ctaLabel: "Review Ingestion Protocols",
  },
  {
    id: "transform",
    stepNum: "03",
    name: "TRANSFORM",
    question: "Can you turn our raw, inconsistent data into something the business and AI can trust?",
    headline: "Turn raw enterprise data into data the business can trust.",
    copy: "Raw records are rarely ready for downstream AI or analytics. We transform, normalize, enrich, reconcile, validate, and structure the data so systems can work from a single consistent representation.",
    vocabulary: [
      "ETL / ELT",
      "canonical schema normalization",
      "entity resolution",
      "mathematical reconciliation",
      "data contracts",
      "golden record",
    ],
    proofPoints: [
      {
        title: "Canonical Schema Normalization",
        desc: "Map disparate source schemas into standardized enterprise entity contracts with deterministic type coercion.",
      },
      {
        title: "Entity Resolution & Golden Records",
        desc: "Cross-system record linkage resolves duplicate customer, vendor, and product entities across CRM and ERP.",
      },
      {
        title: "Mathematical Multi-Way Reconciliation",
        desc: "Deterministic verification engines cross-validate totals, tax calculations, and foreign keys across multiple independent documents and ledgers.",
      },
      {
        title: "Automated Exception Triage",
        desc: "Corrupted records and contract violations are programmatically diverted to structured exception paths with actionable annotations.",
      },
    ],
    securityInvariant: "Quality Gates, Schema Assertions & Segregated Exception Logs",
    securityDesc: "Automated pre-ingestion schema assertions, data contract unit tests, and segregated exception queues prevent malformed records from polluting downstream datasets.",
    ctaLabel: "See Transformation Standards",
  },
  {
    id: "architect",
    stepNum: "04",
    name: "ARCHITECT",
    question: "Where does this actually run? Do I need to adopt your preferred stack?",
    headline: "Your architecture, your cloud.",
    copy: "Design the data platform around the environment your organization operates across public cloud, existing platforms, and hybrid architectures, rather than forcing a proprietary infrastructure model.",
    vocabulary: [
      "multi-cloud optionality",
      "customer VPC tenancy",
      "Terraform IaC",
      "open-source orchestration",
      "zero vendor lock-in",
      "customer KMS keys",
    ],
    proofPoints: [
      {
        title: "Native Multi-Cloud Support",
        desc: "Purpose-built deployment templates and infrastructure-as-code for AWS, Microsoft Azure, Google Cloud Platform, and hybrid on-prem.",
      },
      {
        title: "Single-Tenant Customer VPC",
        desc: "All infrastructure executes within your private cloud tenancy, honoring your corporate network perimeter, security policies, and IAM roles.",
      },
      {
        title: "Open-Source Orchestration",
        desc: "Workflows orchestrated via industry-standard engines (Airflow, Dagster, Temporal) with zero proprietary black-box dependencies.",
      },
      {
        title: "Zero Vendor Lock-In",
        desc: "Data and transformation logic are stored in open formats, ensuring you retain total platform portability and intellectual property ownership.",
      },
    ],
    securityInvariant: "Customer VPC Isolation, Tenancy Security & Customer KMS",
    securityDesc: "Single-tenant execution within customer VPC boundaries, enterprise RBAC enforcement, AES-256 encryption at rest, TLS 1.3 in transit, and customer-managed KMS key management.",
    ctaLabel: "Explore Cloud Architecture",
  },
  {
    id: "store",
    stepNum: "05",
    name: "STORE",
    question: "Where does the data land so it is fast, durable, and cost-effective?",
    headline: "Put every workload on the right data foundation.",
    copy: "Pair every data asset with the appropriate storage engine for performance and cost. Leverage modern open lakehouses, high-performance warehouses, and operational stores designed for scalable enterprise access.",
    vocabulary: [
      "open lakehouse (Apache Iceberg)",
      "analytical warehouses (Snowflake, BigQuery)",
      "operational stores (PostgreSQL, Redis)",
      "lifecycle tiering",
      "ACID transactions",
    ],
    proofPoints: [
      {
        title: "Modern Open Lakehouse Formats",
        desc: "Native support for Apache Iceberg and Delta Lake, enabling ACID transactions and multi-engine query capabilities over object storage.",
      },
      {
        title: "Enterprise Cloud Warehouses",
        desc: "Direct synchronization into high-speed analytical engines including Snowflake, Google BigQuery, and Databricks.",
      },
      {
        title: "High-Speed Operational Caches",
        desc: "Hot operational data indexed in Postgres, Redis, or DynamoDB for millisecond-level lookups by production services.",
      },
      {
        title: "Lifecycle Tiering & Cost Control",
        desc: "Automated archival policies transition historical partitions into low-cost cold storage without breaking analytical lineage.",
      },
    ],
    securityInvariant: "Lineage, Immutable Append Logs & Point-in-Time Recovery",
    securityDesc: "Append-only transaction logs with cryptographic checksums, automated point-in-time recovery, and strict access boundaries ensure data durability and regulatory auditability.",
    ctaLabel: "Benchmark Storage Architectures",
  },
  {
    id: "serve",
    stepNum: "06",
    name: "SERVE",
    question: "How do downstream tools and teams actually consume this data?",
    headline: "Data becomes useful when the right systems can consume it.",
    copy: "Engineering does not end at storage. Deliver data directly to the interfaces and tools where work happens: enterprise applications, analytical dashboards, and downstream AI systems.",
    vocabulary: [
      "operational data APIs",
      "semantic BI endpoints (Power BI, Tableau)",
      "REST and GraphQL services",
      "sub-50ms lookups",
      "event webhook dispatch",
    ],
    proofPoints: [
      {
        title: "Operational Data APIs",
        desc: "High-throughput, authenticated REST and GraphQL endpoints delivering structured data directly to internal enterprise software.",
      },
      {
        title: "Semantic BI Endpoints",
        desc: "Unified semantic models exposing consistent metrics directly to Power BI, Tableau, Looker, and spreadsheet tools.",
      },
      {
        title: "Sub-Second Operational Lookups",
        desc: "In-memory caching and optimized read replicas ensure frontline applications access fresh records in under 50 milliseconds.",
      },
      {
        title: "Event Egress & Webhook Dispatch",
        desc: "Automated event triggers dispatch notifications and state changes to downstream SaaS tools whenever records update.",
      },
    ],
    securityInvariant: "Observability, Latency Budgets & Query Circuit Breakers",
    securityDesc: "Sub-50ms query latency watermarks, circuit breakers, and automated API uptime monitoring ensure mission-critical applications never face silent timeouts.",
    ctaLabel: "Review Consumption Endpoints",
  },
  {
    id: "context",
    stepNum: "07",
    name: "CONTEXT",
    question: "How does AI actually understand and reason over the information we've engineered?",
    headline: "And then we make the data meaningful to AI.",
    copy: "Structured enterprise data is only part of what AI requires. Turn documents, relationships, history, policies, and operational knowledge into retrievable context that downstream AI systems can use with precision.",
    vocabulary: [
      "context engineering",
      "organizational memory (second brain)",
      "hybrid semantic & relational retrieval",
      "multi-modal document understanding",
      "deterministic pre-validation",
      "100% source grounding",
    ],
    proofPoints: [
      {
        title: "Hybrid Semantic & Relational Retrieval",
        desc: "Combines dense vector embeddings, BM25 keyword search, and relational knowledge graphs to resolve queries with factual precision.",
      },
      {
        title: "Multi-Modal Document Understanding",
        desc: "Layout-aware parsing extracts line-item coordinates, tables, and clauses from PDFs, invoices, and contracts into structured schemas.",
      },
      {
        title: "Organizational Memory (Second Brain)",
        desc: "Connects transactions to their historical context—linking active invoices with past vendor contracts, emails, and payment records.",
      },
      {
        title: "Deterministic Pre-Validation",
        desc: "All numerical figures and entity references are programmatically asserted before prompt injection to eliminate hallucination.",
      },
    ],
    securityInvariant: "Traceability, Citation Lineage & Zero Drift Assertions",
    securityDesc: "100% source-grounded prompt citations linking AI outputs directly to original raw records and documents; prompt assertions reject ungrounded model hallucinations.",
    ctaLabel: "Explore Context Engineering",
  },
];

export const PipelineContinuumSection: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const [selectedCloud, setSelectedCloud] = useState<"aws" | "azure" | "gcp">("aws");
  const stageRefs = useRef<(HTMLDivElement | null)[]>([]);

  const activeStage = STAGES[activeStageIndex];

  // Observe scroll position to automatically update active stage as user scrolls
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const centerTrigger = scrollY + windowHeight * 0.45;

      stageRefs.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const bottom = top + rect.height;

        if (centerTrigger >= top && centerTrigger <= bottom) {
          setActiveStageIndex(idx);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToStage = (index: number) => {
    setActiveStageIndex(index);
    const target = stageRefs.current[index];
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section id="pipeline" className={styles.section} aria-labelledby="pipeline-overview-title">
      <div className={styles.inner}>
        {/* Macro Architecture Blueprint Banner (Section 3.1) */}
        <header className={styles.macroHeader}>
          <div className={styles.macroEyebrow}>
            <span>Section 3 · The 7-Stage Engineering Continuum</span>
          </div>

          <h2 id="pipeline-overview-title" className={styles.macroHeadline}>
            The Seven-Stage Enterprise Data Architecture
          </h2>

          <p className={styles.macroSub}>
            Flanked by a continuous Security & Reliability Rail, BayesForce approaches enterprise data
            not as a patchwork of disconnected scripts, but as an integrated, multi-tier engineering discipline.
          </p>

          {/* Quick Stage Navigation Bar */}
          <div className={styles.stageTabsBar} role="tablist" aria-label="Pipeline Stages">
            {STAGES.map((st, i) => (
              <button
                key={st.id}
                type="button"
                role="tab"
                aria-selected={activeStageIndex === i}
                className={`${styles.stageTab} ${activeStageIndex === i ? styles.stageTabActive : ""}`}
                onClick={() => scrollToStage(i)}
              >
                <span className={styles.stageTabNum}>{st.stepNum}</span>
                <span className={styles.stageTabName}>{st.name}</span>
              </button>
            ))}
          </div>
        </header>

        {/* Dual-Pane Layout Standard (Section 3.2) */}
        <div className={styles.dualPaneContainer}>
          {/* LEFT PANE: Sticky Narrative Column (45%) */}
          <div className={styles.leftPane}>
            <div className={styles.stickyNarrative}>
              <div className={styles.stageBadge}>
                <span className={styles.stageTag}>
                  STAGE {activeStage.stepNum} · {activeStage.name}
                </span>
                <span className={styles.stageIndexPill}>
                  {activeStageIndex + 1} of 7
                </span>
              </div>

              <div className={styles.questionBlock}>
                <span className={styles.questionQuote}>&ldquo;</span>
                <p className={styles.questionText}>{activeStage.question}</p>
              </div>

              <h3 className={styles.stageHeadline}>{activeStage.headline}</h3>

              <p className={styles.stageCopy}>{activeStage.copy}</p>

              {/* Technical Vocabulary */}
              <div className={styles.vocabCluster}>
                <span className={styles.vocabLabel}>Core Vocabulary:</span>
                <div className={styles.vocabChips}>
                  {activeStage.vocabulary.map((term) => (
                    <span key={term} className={styles.vocabChip}>
                      {term}
                    </span>
                  ))}
                </div>
              </div>

              {/* 4 Proof Points */}
              <div className={styles.proofGrid}>
                {activeStage.proofPoints.map((point, idx) => (
                  <div key={point.title} className={styles.proofCard}>
                    <div className={styles.proofIndex}>0{idx + 1}</div>
                    <div>
                      <strong className={styles.proofTitle}>{point.title}</strong>
                      <p className={styles.proofDesc}>{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Security & Reliability Invariant */}
              <div className={styles.securityRailBlock}>
                <div className={styles.securityHeader}>
                  <Icon name="shield" size={15} />
                  <span>Security & Reliability Guarantee</span>
                </div>
                <strong className={styles.invariantName}>
                  {activeStage.securityInvariant}
                </strong>
                <p className={styles.invariantDesc}>{activeStage.securityDesc}</p>
              </div>

              {/* Contextual CTA */}
              <div className={styles.ctaWrapper}>
                <Link href="/talk" className={styles.stageCtaBtn}>
                  <span>{activeStage.ctaLabel}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT PANE: Granular Stage Visuals (55%) */}
          <div className={styles.rightPane}>
            {STAGES.map((st, i) => (
              <div
                key={st.id}
                ref={(el) => {
                  stageRefs.current[i] = el;
                }}
                className={`${styles.stageVisualCard} ${activeStageIndex === i ? styles.stageVisualActive : ""}`}
              >
                {/* Visual Header */}
                <div className={styles.visualCardHeader}>
                  <div className={styles.visualHeaderLeft}>
                    <span className={styles.visualStepBadge}>STAGE {st.stepNum}</span>
                    <span className={styles.visualStepTitle}>{st.name} ENGINE</span>
                  </div>
                  <div className={styles.visualStatus}>
                    <span className={styles.statusDot} />
                    <span>ACTIVE_TELEMETRY</span>
                  </div>
                </div>

                {/* Stage-Specific Graphic Renderings */}
                <div className={styles.visualCanvasContent}>
                  {st.id === "connect" && <Stage01ConnectGraphic />}
                  {st.id === "ingest" && <Stage02IngestGraphic />}
                  {st.id === "transform" && <Stage03TransformGraphic />}
                  {st.id === "architect" && (
                    <Stage04ArchitectGraphic
                      selectedCloud={selectedCloud}
                      onSelectCloud={setSelectedCloud}
                    />
                  )}
                  {st.id === "store" && <Stage05StoreGraphic />}
                  {st.id === "serve" && <Stage06ServeGraphic />}
                  {st.id === "context" && <Stage07ContextGraphic />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── STAGE 01: CONNECT VISUAL GRAPHIC ─────────────────────────────────────── */
const Stage01ConnectGraphic: React.FC = () => {
  const sources = [
    { name: "SAP ERP", logo: "/logos/sap.svg" },
    { name: "Salesforce", logo: "/logos/salesforce.svg" },
    { name: "PostgreSQL", logo: "/logos/postgresql.svg" },
    { name: "Contracts (PDF)", logo: "/logos/pdf.svg" },
  ];

  return (
    <div className={styles.connectGraphic}>
      <div className={styles.connectTopTier}>
        {sources.map((src) => (
          <div key={src.name} className={styles.connectSourceBadge}>
            <div className={styles.connectLogoWrapper}>
              <Image src={src.logo} alt={src.name} width={26} height={26} unoptimized />
            </div>
            <span className={styles.connectSourceName}>{src.name}</span>
          </div>
        ))}
      </div>

      {/* Downward connecting conduits */}
      <div className={styles.conduitsWrapper}>
        <svg viewBox="0 0 500 120" className={styles.conduitSvg} preserveAspectRatio="none">
          <path d="M 60 0 L 60 60 Q 60 90 250 90" className={styles.conduitLine} />
          <path d="M 185 0 L 185 50 Q 185 90 250 90" className={styles.conduitLine} />
          <path d="M 315 0 L 315 50 Q 315 90 250 90" className={styles.conduitLine} />
          <path d="M 440 0 L 440 60 Q 440 90 250 90" className={styles.conduitLine} />
          <circle cx="250" cy="90" r="4" fill="#013EFA" />
        </svg>
      </div>

      {/* Downward Gateway */}
      <div className={styles.gatewayBox}>
        <div className={styles.gatewayHeader}>
          <Icon name="check-circle" size={16} />
          <span>UNIVERSAL INGESTION GATEWAY</span>
        </div>
        <p className={styles.gatewayDetails}>
          OAuth 2.0 / PrivateLink Peered • Zero Replatforming Required
        </p>
      </div>
    </div>
  );
};

/* ─── STAGE 02: INGEST VISUAL GRAPHIC ──────────────────────────────────────── */
const Stage02IngestGraphic: React.FC = () => (
  <div className={styles.ingestGraphic}>
    <div className={styles.dualFlowSplit}>
      {/* Flow 1: Real-Time Stream */}
      <div className={styles.flowColumn}>
        <div className={styles.flowPillRealtime}>
          <span className={styles.flowDot} />
          <span>Real-Time Stream (CDC & Events)</span>
        </div>
        <div className={styles.flowStreamBox}>
          <div className={styles.streamLineRealtime} />
          <span className={styles.streamMetric}>Kafka / Webhooks • &lt; 200ms Latency</span>
        </div>
      </div>

      {/* Flow 2: Batch Scheduled */}
      <div className={styles.flowColumn}>
        <div className={styles.flowPillBatch}>
          <Icon name="clock" size={12} />
          <span>Governed Batch Ingestion</span>
        </div>
        <div className={styles.flowStreamBox}>
          <div className={styles.streamLineBatch} />
          <span className={styles.streamMetric}>Scheduled ERP & DB Syncs • Rate Throttled</span>
        </div>
      </div>
    </div>

    {/* Ingestion Bus */}
    <div className={styles.busGateway}>
      <Icon name="activity" size={16} />
      <span>CENTRALIZED BACKPRESSURE BUFFER & INGESTION BUS</span>
    </div>
  </div>
);

/* ─── STAGE 03: TRANSFORM VISUAL GRAPHIC ──────────────────────────────────── */
const Stage03TransformGraphic: React.FC = () => (
  <div className={styles.transformGraphic}>
    <div className={styles.transformHeader}>
      <span className={styles.transTag}>RAW ENTITY DISCREPANCY</span>
      <span className={styles.transArrow}>↓</span>
    </div>

    <div className={styles.entityComparison}>
      <div className={styles.mismatchedCard}>
        <strong className={styles.mismatchedTitle}>Salesforce Record</strong>
        <span>Account: &quot;Acme Corp LLC&quot;</span>
        <span>TaxID: Missing</span>
        <span>Country: &quot;USA&quot;</span>
      </div>

      <div className={styles.mergeIconWrapper}>
        <Icon name="git-merge" size={18} />
      </div>

      <div className={styles.mismatchedCard}>
        <strong className={styles.mismatchedTitle}>SAP Ledger Record</strong>
        <span>Vendor: &quot;Acme Corporation&quot;</span>
        <span>TaxID: &quot;88-29104&quot;</span>
        <span>Country: &quot;US&quot;</span>
      </div>
    </div>

    {/* Golden Record Output */}
    <div className={styles.goldenRecordBox}>
      <div className={styles.goldenBadge}>
        <Icon name="check-circle" size={14} />
        <span>RECONCILED GOLDEN ENTITY</span>
      </div>
      <div className={styles.goldenContent}>
        <span>Entity: <strong>Acme Corporation (Golden ID: #ENT-9014)</strong></span>
        <span>Validated Tax ID: <strong>88-29104</strong> • Golden Country: <strong>US</strong></span>
      </div>
    </div>

    {/* Exception Diversion */}
    <div className={styles.exceptionPath}>
      <Icon name="alert-triangle" size={13} />
      <span>Malformed / Contract Violations Diverted to Monitored Exception Queue</span>
    </div>
  </div>
);

/* ─── STAGE 04: ARCHITECT (MULTI-CLOUD) GRAPHIC ───────────────────────────── */
interface Stage04Props {
  selectedCloud: "aws" | "azure" | "gcp";
  onSelectCloud: (c: "aws" | "azure" | "gcp") => void;
}

const Stage04ArchitectGraphic: React.FC<Stage04Props> = ({ selectedCloud, onSelectCloud }) => {
  const cloudData = {
    aws: {
      storage: "Amazon S3 Lakehouse",
      compute: "AWS Glue & EMR Serverless",
      warehouse: "Amazon Redshift / Athena",
      orchestrator: "MWAA (Managed Airflow)",
    },
    azure: {
      storage: "Azure Data Lake Gen2",
      compute: "Azure Synapse Spark",
      warehouse: "Synapse Dedicated Pools",
      orchestrator: "Azure Data Factory",
    },
    gcp: {
      storage: "Google Cloud Storage",
      compute: "Dataproc Serverless",
      warehouse: "Google BigQuery",
      orchestrator: "Cloud Composer (Airflow)",
    },
  }[selectedCloud];

  return (
    <div className={styles.architectGraphic}>
      {/* Cloud Switcher */}
      <div className={styles.cloudSwitcher}>
        <button
          type="button"
          className={`${styles.cloudBtn} ${selectedCloud === "aws" ? styles.cloudBtnActive : ""}`}
          onClick={() => onSelectCloud("aws")}
        >
          AWS
        </button>
        <button
          type="button"
          className={`${styles.cloudBtn} ${selectedCloud === "azure" ? styles.cloudBtnActive : ""}`}
          onClick={() => onSelectCloud("azure")}
        >
          Microsoft Azure
        </button>
        <button
          type="button"
          className={`${styles.cloudBtn} ${selectedCloud === "gcp" ? styles.cloudBtnActive : ""}`}
          onClick={() => onSelectCloud("gcp")}
        >
          Google Cloud (GCP)
        </button>
      </div>

      {/* Cloud Node Topology */}
      <div className={styles.cloudTopologyGrid}>
        <div className={styles.cloudNode}>
          <span className={styles.cloudNodeLabel}>Object Storage</span>
          <strong className={styles.cloudNodeVal}>{cloudData.storage}</strong>
        </div>
        <div className={styles.cloudNode}>
          <span className={styles.cloudNodeLabel}>Distributed Compute</span>
          <strong className={styles.cloudNodeVal}>{cloudData.compute}</strong>
        </div>
        <div className={styles.cloudNode}>
          <span className={styles.cloudNodeLabel}>Analytical Warehouse</span>
          <strong className={styles.cloudNodeVal}>{cloudData.warehouse}</strong>
        </div>
        <div className={styles.cloudNode}>
          <span className={styles.cloudNodeLabel}>Workflow Engine</span>
          <strong className={styles.cloudNodeVal}>{cloudData.orchestrator}</strong>
        </div>
      </div>

      <div className={styles.vpcIsolationTag}>
        <Icon name="lock" size={14} />
        <span>Deployed 100% inside your Customer VPC tenancy with Customer KMS keys</span>
      </div>
    </div>
  );
};

/* ─── STAGE 05: STORE VISUAL GRAPHIC ──────────────────────────────────────── */
const Stage05StoreGraphic: React.FC = () => (
  <div className={styles.storeGraphic}>
    <div className={styles.storeTiersGrid}>
      <div className={styles.storeTierCard}>
        <Icon name="database" size={20} className={styles.storeIcon} />
        <strong className={styles.storeTierTitle}>Open Lakehouse</strong>
        <span className={styles.storeTierSub}>Apache Iceberg / Delta</span>
        <p className={styles.storeTierDetail}>
          ACID transactions, time travel, multi-engine open table standard.
        </p>
      </div>

      <div className={styles.storeTierCard}>
        <Icon name="layers" size={20} className={styles.storeIcon} />
        <strong className={styles.storeTierTitle}>Cloud Warehouse</strong>
        <span className={styles.storeTierSub}>Snowflake / BigQuery</span>
        <p className={styles.storeTierDetail}>
          High-concurrency analytical queries and executive dashboard models.
        </p>
      </div>

      <div className={styles.storeTierCard}>
        <Icon name="zap" size={20} className={styles.storeIcon} />
        <strong className={styles.storeTierTitle}>Operational Store</strong>
        <span className={styles.storeTierSub}>PostgreSQL / Redis</span>
        <p className={styles.storeTierDetail}>
          Sub-50ms operational lookups for frontend apps and AI coworkers.
        </p>
      </div>
    </div>
  </div>
);

/* ─── STAGE 06: SERVE VISUAL GRAPHIC ──────────────────────────────────────── */
const Stage06ServeGraphic: React.FC = () => (
  <div className={styles.serveGraphic}>
    <div className={styles.serveDestinations}>
      <div className={styles.serveDest}>
        <span className={styles.serveDestTag}>ANALYTICS & BI</span>
        <strong className={styles.serveDestTitle}>Semantic BI Models</strong>
        <p className={styles.serveDestDesc}>Power BI, Tableau, and Looker semantic models.</p>
        <span className={styles.serveLatency}>Freshness: 1m</span>
      </div>

      <div className={styles.serveDest}>
        <span className={styles.serveDestTag}>ENTERPRISE APPS</span>
        <strong className={styles.serveDestTitle}>REST & GraphQL APIs</strong>
        <p className={styles.serveDestDesc}>High-throughput JSON endpoints for production apps.</p>
        <span className={styles.serveLatency}>Latency: &lt; 40ms</span>
      </div>

      <div className={styles.serveDest}>
        <span className={styles.serveDestTag}>AI COWORKERS</span>
        <strong className={styles.serveDestTitle}>AI-Ready Context Sets</strong>
        <p className={styles.serveDestDesc}>Grounded feeds with relational facts and embeddings.</p>
        <span className={styles.serveLatency}>Precision: 100% Grounded</span>
      </div>
    </div>
  </div>
);

/* ─── STAGE 07: CONTEXT VISUAL GRAPHIC ────────────────────────────────────── */
const Stage07ContextGraphic: React.FC = () => (
  <div className={styles.contextGraphic}>
    <div className={styles.illustrativeBanner}>
      <span className={styles.illustrativePill}>Illustrative Engineering Example</span>
      <span className={styles.illustrativeTitle}>AP Exception Context Assembly</span>
    </div>

    <div className={styles.contextAssemblyGrid}>
      <div className={styles.contextNode}>
        <span className={styles.contextType}>Ingested Document</span>
        <strong>Invoice #INV-8821 PDF</strong>
        <span>Line items, totals & tax</span>
      </div>

      <div className={styles.contextNode}>
        <span className={styles.contextType}>ERP Transaction</span>
        <strong>NetSuite PO #9410</strong>
        <span>Approved line amounts</span>
      </div>

      <div className={styles.contextNode}>
        <span className={styles.contextType}>Commercial Contract</span>
        <strong>Master Service Agreement</strong>
        <span>Freight variance tolerance: ±5%</span>
      </div>

      <div className={styles.contextNode}>
        <span className={styles.contextType}>Communication</span>
        <strong>Vendor Email Thread</strong>
        <span>Emergency expediting confirmed</span>
      </div>
    </div>

    {/* AI Injection Result */}
    <div className={styles.aiInjectionBox}>
      <div className={styles.aiInjectionTop}>
        <Icon name="check-circle" size={15} />
        <span>Grounded Organizational Memory Packet Assembled</span>
      </div>
      <p className={styles.aiInjectionText}>
        AI Coworker approves $450 variance: within contractual ±5% tolerance and confirmed via vendor correspondence.
        Zero hallucinations. 100% cited.
      </p>
    </div>
  </div>
);
