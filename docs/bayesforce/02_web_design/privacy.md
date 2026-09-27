# Page Specification: Privacy Policy (`/privacy`)

> **Route:** `/privacy`  
> **Parent Hub:** [Web Design System](README.md)  
> **Type:** Legal & Data Governance Policy

---

## 1. Page Metadata & Overview

- **Page Title:** `Privacy Policy — Enterprise Data Governance | Bayesforce`
- **Meta Description:** `Bayesforce's enterprise data privacy policy: zero customer data training, strict SOC2 compliance, encrypted data pipelines, and isolated infrastructure.`
- **Visual Theme:** Clean, high-legibility Surface Light layout (`max-w-4xl`) with Obsidian Dark header.

---

## 2. Core Policy Commitments & Structure

1. **Zero Model Training on Customer Data:** Customer data, workflow documents, and telemetry are NEVER used to train shared public or foundation models.
2. **Infrastructure Isolation:** All enterprise coworkers and pipelines execute inside single-tenant VPCs or dedicated customer cloud accounts (AWS/GCP/Azure).
3. **Data Encryption:** Strict AES-256 encryption at rest and TLS 1.3 encryption in transit for all pipelines and vector embeddings.
4. **Data Retention & Deletion:** Customer data is retained strictly for the duration of the operational task or according to customer retention policies, with deterministic purge triggers.
5. **Subprocessors & Third-Party APIs:** Explicit list of approved enterprise model providers and infrastructure partners with zero-data-retention (ZDR) agreements.
