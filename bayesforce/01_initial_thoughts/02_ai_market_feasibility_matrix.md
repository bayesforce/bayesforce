# AI Market Feasibility & Opportunity Matrix

> **A Structured Decision Scaffold for Evaluating 67 AI Sub-Segments Across 2,603 Companies**  
> **Purpose:** Systematically assess where to build, what to avoid, and where high-probability startup opportunities exist based on founder strengths, capital efficiency, and structural moats.  
> **Parent Directory:** [Bayesforce Initial Thoughts](README.md) | [Bayesforce Hub](../README.md) | [Master Hub](../../README.md)

---

## I. Strategic Decision Framework

Before evaluating individual sub-segments, every market is assessed across six structural dimensions. This framework provides an objective rubric before applying personal founder preferences:

| Evaluation Dimension | Core Question | High Feasibility Signal (Green) | Low Feasibility Signal (Red) |
| :--- | :--- | :--- | :--- |
| **1. GTM & Distribution Velocity** | *How fast and cheap is it to acquire the first 10 paying customers?* | Direct access to mid-market buyers (COO, CFO, Head of Ops); sales cycle < 30 days. | Multi-stakeholder enterprise RFP cycles (> 6-12 months); heavy compliance gates (FedRAMP, HIPAA). |
| **2. Capital & Compute Intensity** | *How much upfront capital is required before proving unit value?* | High gross margins (>75%); uses standard foundation APIs and software orchestration. | Requires custom silicon, training frontier models from scratch, or heavy hardware robotics capex. |
| **3. Foundation Model Threat** | *Will OpenAI, Anthropic, or Google absorb this feature in their next release?* | Deep workflow integration, proprietary private data loops, human-in-the-loop operational trust. | Thin wrapper over generic prompt completion, single-button text/image generators, basic summarizers. |
| **4. Willingness to Pay & Budget** | *Is the problem tied directly to revenue or measurable payroll waste?* | Budget already exists for manual labor / analysts; clear ROI (e.g. 5x faster cycle time, leakage recovery). | "Nice-to-have" tool with ambiguous ROI; consumer prosumer market with high churn. |
| **5. Operational Complexity Moat** | *Is the domain messy enough that generic software has failed for decades?* | Complex legacy handoffs, unstandardized documents (PDFs, scans, ERP silos), high-friction coordination. | Clean, standardized APIs where horizontal incumbents (GitHub, Figma, Notion) already dominate. |
| **6. Founder / Bayesforce Alignment** | *Does this play to our core strengths (systems engineering, operations, Bayesian updating)?* | High alignment with operational transformation, agentic systems, and measurable business leverage. | Pure deep-tech physics/chemistry research requiring PhD wet-lab or semiconductor fab expertise. |

---

## II. Scoring & Status Legend

- **Score (`/10`):** Composite rating measuring attractiveness and feasibility (10 = Exceptional Opportunity, 1 = Prohibitive / Impractical).
- **Status Categories:**
  - `[SHORTLIST]` — Primary candidate for deep-dive validation and customer discovery.
  - `[CONSIDER]` — Viable opportunity; conditional on specific domain expertise or distribution edge.
  - `[MONITOR]` — Interesting market, but high incumbent risk or timing uncertainty.
  - `[EXCLUDE]` — Structurally unviable for a lean, high-velocity founding team (e.g., custom silicon fabs, frontier model training).
  - `[TBD]` — Placeholder ready for founder constraint evaluation.

---

## III. Master AI Market Feasibility Scaffold

The table below catalogs all **67 sub-segments** across all **5 L1 domains** and **22 L2 segments**. Each sub-segment links directly to its complete YC company registry in the Market Understanding library for empirical reference.

| Level 1 Domain | Level 2 Segment | Level 3 Sub-Segment (Catalog Link) | YC Co. Count | Foundation Model Risk | Capital Intensity | Score (/10) | Status | Strategic Evaluation Notes |
| :--- | :--- | :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| **Enabling AI** (591) | **Compute & Silicon** (47) | [AI Accelerators & Semiconductors](../../learnings/01_market_understanding/01_ai/enabling_ai/compute_and_silicon/ai_accelerators_and_semiconductors.md) | 15 | Low (Deep Domain/Hardware) | High (Hardware/CapEx) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  |  | [Cloud, GPU & Distributed Compute](../../learnings/01_market_understanding/01_ai/enabling_ai/compute_and_silicon/cloud_gpu_and_distributed_compute.md) | 25 | Low (Deep Domain/Hardware) | High (Hardware/CapEx) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  |  | [Edge & Specialized Compute](../../learnings/01_market_understanding/01_ai/enabling_ai/compute_and_silicon/edge_and_specialized_compute.md) | 7 | Medium | High (Hardware/CapEx) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  | **Models & Training** (58) | [Foundation & Domain Models](../../learnings/01_market_understanding/01_ai/enabling_ai/models_and_training/foundation_and_domain_models.md) | 14 | Medium | High (Compute/R&D) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  |  | [Training, Fine-tuning & Optimization](../../learnings/01_market_understanding/01_ai/enabling_ai/models_and_training/training_fine_tuning_and_optimization.md) | 31 | Medium | Low (API/Software) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  |  | [AI Research & Reasoning Systems](../../learnings/01_market_understanding/01_ai/enabling_ai/models_and_training/ai_research_and_reasoning_systems.md) | 13 | Medium | High (Compute/R&D) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  | **Data & Context** (123) | [Data Acquisition & Labeling](../../learnings/01_market_understanding/01_ai/enabling_ai/data_and_context/data_acquisition_and_labeling.md) | 38 | Medium | Low (API/Software) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  |  | [Synthetic & Multimodal Data](../../learnings/01_market_understanding/01_ai/enabling_ai/data_and_context/synthetic_and_multimodal_data.md) | 14 | Medium | Low (API/Software) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  |  | [Retrieval, Memory & Knowledge](../../learnings/01_market_understanding/01_ai/enabling_ai/data_and_context/retrieval_memory_and_knowledge.md) | 41 | Medium | Low (API/Software) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  |  | [Data Pipelines & Transformation](../../learnings/01_market_understanding/01_ai/enabling_ai/data_and_context/data_pipelines_and_transformation.md) | 30 | Medium | Low (API/Software) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  | **Build & Orchestrate** (227) | [Agent Frameworks & Orchestration](../../learnings/01_market_understanding/01_ai/enabling_ai/build_and_orchestrate/agent_frameworks_and_orchestration.md) | 70 | High (Platform Absorption) | Low (API/Software) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  |  | [AI App Builders & APIs](../../learnings/01_market_understanding/01_ai/enabling_ai/build_and_orchestrate/ai_app_builders_and_apis.md) | 90 | High (Platform Absorption) | Low (API/Software) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  |  | [Browser & Computer-Use Infrastructure](../../learnings/01_market_understanding/01_ai/enabling_ai/build_and_orchestrate/browser_and_computer_use_infrastructure.md) | 35 | Medium | Low (API/Software) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  |  | [Voice & Speech Infrastructure](../../learnings/01_market_understanding/01_ai/enabling_ai/build_and_orchestrate/voice_and_speech_infrastructure.md) | 32 | Medium | Low (API/Software) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  | **Deploy & Control** (136) | [Inference, Serving & MLOps](../../learnings/01_market_understanding/01_ai/enabling_ai/deploy_and_control/inference_serving_and_mlops.md) | 22 | Medium | Low (API/Software) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  |  | [Evaluation, Observability & FinOps](../../learnings/01_market_understanding/01_ai/enabling_ai/deploy_and_control/evaluation_observability_and_finops.md) | 69 | Medium | Low (API/Software) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  |  | [AI Security, Safety & Governance](../../learnings/01_market_understanding/01_ai/enabling_ai/deploy_and_control/ai_security_safety_and_governance.md) | 45 | Medium | Low (API/Software) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
| **Horizontal Work** (803) | **Software Engineering & IT** (160) | [Coding, Build & Documentation](../../learnings/01_market_understanding/01_ai/horizontal_work/software_engineering_and_it/coding_build_and_documentation.md) | 76 | Medium | Low (API/Software) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  |  | [Testing, Quality & App Security](../../learnings/01_market_understanding/01_ai/horizontal_work/software_engineering_and_it/testing_quality_and_app_security.md) | 51 | Medium | Low (API/Software) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  |  | [DevOps, SRE & IT Operations](../../learnings/01_market_understanding/01_ai/horizontal_work/software_engineering_and_it/devops_sre_and_it_operations.md) | 33 | Medium | Low (API/Software) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  | **Revenue** (229) | [Sales & Prospecting](../../learnings/01_market_understanding/01_ai/horizontal_work/revenue/sales_and_prospecting.md) | 101 | Medium | Low (API/Software) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  |  | [Marketing, Advertising & Growth](../../learnings/01_market_understanding/01_ai/horizontal_work/revenue/marketing_advertising_and_growth.md) | 68 | Medium | Low (API/Software) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  |  | [Customer Support & Success](../../learnings/01_market_understanding/01_ai/horizontal_work/revenue/customer_support_and_success.md) | 60 | Medium | Low (API/Software) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  | **Knowledge & Creation** (141) | [Search, Research & Analytics](../../learnings/01_market_understanding/01_ai/horizontal_work/knowledge_and_creation/search_research_and_analytics.md) | 60 | Medium | Low (API/Software) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  |  | [Meetings, Documents & Collaboration](../../learnings/01_market_understanding/01_ai/horizontal_work/knowledge_and_creation/meetings_documents_and_collaboration.md) | 38 | High (Platform Absorption) | Low (API/Software) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  |  | [Content, Design & Media Production](../../learnings/01_market_understanding/01_ai/horizontal_work/knowledge_and_creation/content_design_and_media_production.md) | 43 | High (Platform Absorption) | Low (API/Software) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  | **Business Operations** (273) | [Finance, Accounting & Procurement](../../learnings/01_market_understanding/01_ai/horizontal_work/business_operations/finance_accounting_and_procurement.md) | 73 | Medium | Low (API/Software) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  |  | [Legal, Compliance & Risk](../../learnings/01_market_understanding/01_ai/horizontal_work/business_operations/legal_compliance_and_risk.md) | 67 | Medium | Low (API/Software) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  |  | [HR, Recruiting & Workforce](../../learnings/01_market_understanding/01_ai/horizontal_work/business_operations/hr_recruiting_and_workforce.md) | 52 | Medium | Low (API/Software) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  |  | [General Workflow & Back Office](../../learnings/01_market_understanding/01_ai/horizontal_work/business_operations/general_workflow_and_back_office.md) | 41 | Medium | Low (API/Software) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  |  | [Enterprise Agents & AI Coworkers](../../learnings/01_market_understanding/01_ai/horizontal_work/business_operations/enterprise_agents_and_ai_coworkers.md) | 40 | Medium | Low (API/Software) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
| **Vertical Intelligence** (935) | **Healthcare Delivery** (175) | [Clinical Care, Diagnostics & Documentation](../../learnings/01_market_understanding/01_ai/vertical_intelligence/healthcare_delivery/clinical_care_diagnostics_and_documentation.md) | 59 | Low (Deep Domain/Hardware) | Low (API/Software) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  |  | [Administration, RCM & Patient Access](../../learnings/01_market_understanding/01_ai/vertical_intelligence/healthcare_delivery/administration_rcm_and_patient_access.md) | 116 | Low (Deep Domain/Hardware) | Low (API/Software) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  | **Life Sciences** (89) | [Drug Discovery & Biological R&D](../../learnings/01_market_understanding/01_ai/vertical_intelligence/life_sciences/drug_discovery_and_biological_randd.md) | 50 | Low (Deep Domain/Hardware) | High (Compute/R&D) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  |  | [Labs, Trials & Biomanufacturing](../../learnings/01_market_understanding/01_ai/vertical_intelligence/life_sciences/labs_trials_and_biomanufacturing.md) | 39 | Medium | Low (API/Software) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  | **Financial Services & Insurance** (202) | [Banking, Lending, Payments & Investing](../../learnings/01_market_understanding/01_ai/vertical_intelligence/financial_services_and_insurance/banking_lending_payments_and_investing.md) | 129 | Medium | Low (API/Software) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  |  | [Insurance Distribution & Operations](../../learnings/01_market_understanding/01_ai/vertical_intelligence/financial_services_and_insurance/insurance_distribution_and_operations.md) | 45 | Medium | Low (API/Software) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  |  | [Fraud, Identity & Financial Compliance](../../learnings/01_market_understanding/01_ai/vertical_intelligence/financial_services_and_insurance/fraud_identity_and_financial_compliance.md) | 28 | Medium | Low (API/Software) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  | **Industrial & Natural World** (111) | [Manufacturing, Quality & Maintenance](../../learnings/01_market_understanding/01_ai/vertical_intelligence/industrial_and_natural_world/manufacturing_quality_and_maintenance.md) | 44 | Medium | Low (API/Software) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  |  | [Energy, Climate & Utilities](../../learnings/01_market_understanding/01_ai/vertical_intelligence/industrial_and_natural_world/energy_climate_and_utilities.md) | 30 | Medium | Low (API/Software) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  |  | [Agriculture & Food Systems](../../learnings/01_market_understanding/01_ai/vertical_intelligence/industrial_and_natural_world/agriculture_and_food_systems.md) | 12 | Medium | Low (API/Software) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  |  | [Materials & Scientific Engineering](../../learnings/01_market_understanding/01_ai/vertical_intelligence/industrial_and_natural_world/materials_and_scientific_engineering.md) | 25 | Low (Deep Domain/Hardware) | High (Compute/R&D) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  | **Built World** (97) | [Construction & Field Operations](../../learnings/01_market_understanding/01_ai/vertical_intelligence/built_world/construction_and_field_operations.md) | 54 | Low (Deep Domain/Hardware) | Low (API/Software) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  |  | [Real Estate, Architecture & Property](../../learnings/01_market_understanding/01_ai/vertical_intelligence/built_world/real_estate_architecture_and_property.md) | 43 | Medium | Low (API/Software) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  | **Movement & Commerce** (167) | [Logistics, Supply Chain & Fleet](../../learnings/01_market_understanding/01_ai/vertical_intelligence/movement_and_commerce/logistics_supply_chain_and_fleet.md) | 59 | Medium | Low (API/Software) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  |  | [Automotive & Mobility Services](../../learnings/01_market_understanding/01_ai/vertical_intelligence/movement_and_commerce/automotive_and_mobility_services.md) | 15 | Medium | Low (API/Software) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  |  | [Retail & E-commerce Operations](../../learnings/01_market_understanding/01_ai/vertical_intelligence/movement_and_commerce/retail_and_e_commerce_operations.md) | 59 | Medium | Low (API/Software) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  |  | [Restaurants, Hospitality & Travel](../../learnings/01_market_understanding/01_ai/vertical_intelligence/movement_and_commerce/restaurants_hospitality_and_travel.md) | 34 | Medium | Low (API/Software) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  | **Public Sector** (34) | [Government & Public Administration](../../learnings/01_market_understanding/01_ai/vertical_intelligence/public_sector/government_and_public_administration.md) | 18 | Medium | Low (API/Software) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  |  | [Defense, Aerospace & Public Safety](../../learnings/01_market_understanding/01_ai/vertical_intelligence/public_sector/defense_aerospace_and_public_safety.md) | 16 | Medium | Low (API/Software) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  | **Education & Training** (30) | [Institutional Learning & Teaching](../../learnings/01_market_understanding/01_ai/vertical_intelligence/education_and_training/institutional_learning_and_teaching.md) | 22 | Medium | Low (API/Software) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  |  | [Workforce & Skills Training](../../learnings/01_market_understanding/01_ai/vertical_intelligence/education_and_training/workforce_and_skills_training.md) | 8 | Medium | Low (API/Software) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  | **Media & Entertainment** (30) | [Media, Creator & Entertainment Operations](../../learnings/01_market_understanding/01_ai/vertical_intelligence/media_and_entertainment/media_creator_and_entertainment_operations.md) | 18 | Medium | Low (API/Software) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  |  | [Gaming & Sports Industry Tools](../../learnings/01_market_understanding/01_ai/vertical_intelligence/media_and_entertainment/gaming_and_sports_industry_tools.md) | 12 | Medium | Low (API/Software) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
| **Personal AI** (206) | **Assist & Discover** (33) | [Personal Assistants & Search](../../learnings/01_market_understanding/01_ai/personal_ai/assist_and_discover/personal_assistants_and_search.md) | 33 | High (Platform Absorption) | Low (Software/B2C) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  | **Create & Produce** (32) | [Personal Creation & Productivity](../../learnings/01_market_understanding/01_ai/personal_ai/create_and_produce/personal_creation_and_productivity.md) | 32 | Medium | Low (Software/B2C) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  | **Learn & Advance** (29) | [Learning, Tutoring & Career](../../learnings/01_market_understanding/01_ai/personal_ai/learn_and_advance/learning_tutoring_and_career.md) | 29 | Medium | Low (Software/B2C) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  | **Health & Wellbeing** (38) | [Personal Health, Fitness & Wellness](../../learnings/01_market_understanding/01_ai/personal_ai/health_and_wellbeing/personal_health_fitness_and_wellness.md) | 38 | Medium | Low (Software/B2C) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  | **Relate & Belong** (13) | [Social, Companionship & Communication](../../learnings/01_market_understanding/01_ai/personal_ai/relate_and_belong/social_companionship_and_communication.md) | 13 | Medium | Low (Software/B2C) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  | **Play & Experience** (22) | [Games & Entertainment](../../learnings/01_market_understanding/01_ai/personal_ai/play_and_experience/games_and_entertainment.md) | 22 | Medium | Low (Software/B2C) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  | **Manage Life** (39) | [Personal Finance, Shopping & Home](../../learnings/01_market_understanding/01_ai/personal_ai/manage_life/personal_finance_shopping_and_home.md) | 39 | Medium | Low (Software/B2C) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
| **Embodied AI** (68) | **Robotics Platforms** (14) | [General Robotics & Enabling Hardware](../../learnings/01_market_understanding/01_ai/embodied_ai/robotics_platforms/general_robotics_and_enabling_hardware.md) | 14 | Medium | High (Hardware/CapEx) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  | **Industrial Autonomy** (28) | [Industrial, Warehouse & Field Robots](../../learnings/01_market_understanding/01_ai/embodied_ai/industrial_autonomy/industrial_warehouse_and_field_robots.md) | 28 | Medium | High (Hardware/CapEx) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  | **Autonomous Mobility** (8) | [Vehicles, Drones & Navigation](../../learnings/01_market_understanding/01_ai/embodied_ai/autonomous_mobility/vehicles_drones_and_navigation.md) | 8 | Medium | High (Hardware/CapEx) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  | **Medical & Care Robotics** (6) | [Medical, Surgical & Care Robots](../../learnings/01_market_understanding/01_ai/embodied_ai/medical_and_care_robotics/medical_surgical_and_care_robots.md) | 6 | Medium | High (Hardware/CapEx) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  | **Defense & Space Autonomy** (8) | [Defense, Aerospace & Space Systems](../../learnings/01_market_understanding/01_ai/embodied_ai/defense_and_space_autonomy/defense_aerospace_and_space_systems.md) | 8 | Medium | High (Hardware/CapEx) | `[TBD]` | `[TBD]` | *Pending founder inputs* |
|  | **Consumer Robotics** (4) | [Home & Consumer Robots](../../learnings/01_market_understanding/01_ai/embodied_ai/consumer_robotics/home_and_consumer_robots.md) | 4 | Medium | High (Hardware/CapEx) | `[TBD]` | `[TBD]` | *Pending founder inputs* |

---

## IV. Domain-by-Domain Feasibility Scaffolds

### 1. Enabling AI (591 Companies)
- **Macro Nature:** Infrastructure sold to ML engineers, developers, and AI builders.
- **Structural Bottlenecks:** Fierce competition, rapid commoditization by frontier labs, high developer scrutiny, long technical validation cycles.
- **Evaluation Question:** *Do we have a differentiated hardware, data, or systems insight that frontier labs (OpenAI/Anthropic) will not ship natively within 6 months?*

| L2 Segment | L3 Sub-Segment | YC Cos | Key Moat Factor | Founder Evaluation Notes |
| :--- | :--- | :---: | :--- | :--- |
| **Compute & Silicon** | AI Accelerators & Semiconductors | 15 | Custom ASIC / Photonic IP | High capex, fab access required. |
| | Cloud, GPU & Distributed Compute | 25 | Cluster scheduling, hardware access | Margin compression, commodity compute. |
| | Edge & Specialized Compute | 7 | Ultra-low power hardware design | Silicon hardware engineering DNA required. |
| **Models & Training** | Foundation & Domain Models | 14 | Pre-training capital, proprietary data | Multi-million dollar compute budgets. |
| | Training, Fine-tuning & Optimization | 31 | Quantization & distillation IP | Threatened by standard API fine-tuning. |
| | AI Research & Reasoning Systems | 13 | Frontier RL/Cognition architecture | Deep research PhD talent requirement. |
| **Data & Context** | Data Acquisition & Labeling | 38 | Human-in-the-loop expert networks | Scale AI / crowdsourced network effects. |
| | Synthetic & Multimodal Data | 14 | Physics / procedural simulators | Niche domain simulation expertise. |
| | Retrieval, Memory & Knowledge | 41 | Vector/Graph indexing algorithms | High risk of foundation model context expansion. |
| | Data Pipelines & Transformation | 30 | Unstructured ETL integrations | Enterprise connectors and security compliance. |
| **Build & Orchestrate** | Agent Frameworks & Orchestration | 70 | Developer mindshare & ecosystem | Open-source ecosystem battle (LangChain, CrewAI). |
| | AI App Builders & APIs | 90 | Low-code UX & speed-to-deploy | High churn, crowded, platform risk. |
| | Browser & Computer-Use Infrastructure | 35 | Sandboxed VM & vision control | High technical barrier, legacy software TAM. |
| | Voice & Speech Infrastructure | 32 | Ultra-low latency STT/TTS models | Fast growing; voice telephony integrations. |
| **Deploy & Control** | Inference, Serving & MLOps | 22 | Latency/KV-cache optimization | Technical efficiency, gateway routing moats. |
| | Evaluation, Observability & FinOps | 69 | Regression suites & audit trails | Enterprise governance, testing budgets. |
| | AI Security, Safety & Governance | 45 | Prompt firewall & compliance audit | Regulatory compliance, enterprise security mandate. |

---

### 2. Horizontal Work (803 Companies)
- **Macro Nature:** Tools sold to universal corporate functions (Sales, Marketing, HR, Finance, IT, Operations).
- **Structural Bottlenecks:** Extreme sales crowding, low switching costs, high buyer fatigue from generic AI pitches.
- **Evaluation Question:** *Can we deliver measurable operational leverage (e.g. 3x output without headcount) rather than just an interface wrapper over an LLM?*

| L2 Segment | L3 Sub-Segment | YC Cos | Key Moat Factor | Founder Evaluation Notes |
| :--- | :--- | :---: | :--- | :--- |
| **Software Eng & IT** | Coding, Build & Documentation | 76 | IDE integration & repo-level context | Massive incumbents (Cursor, GitHub Copilot). |
| | Testing, Quality & App Security | 51 | Deterministic verification & CI/CD | High utility; measurable bug reduction. |
| | DevOps, SRE & IT Operations | 33 | Incident telemetry & auto-remediation | High trust barrier for autonomous write-access. |
| **Revenue** | Sales & Prospecting | 101 | Data freshness & deliverability | Heavily saturated; spam filters tightening. |
| | Marketing, Advertising & Growth | 68 | Creative quality & multi-channel ROI | Fast time-to-value; commoditized copy tools. |
| | Customer Support & Success | 60 | Resolution accuracy & voice/chat ops | High economic value; clear headcount offset. |
| **Knowledge & Creation** | Search, Research & Analytics | 60 | Enterprise permissioned indexing | High utility; Notion/Microsoft Copilot pressure. |
| | Meetings, Documents & Collaboration | 38 | Daily workflow habit & recording | Zoom/Teams/Otter native feature pressure. |
| | Content, Design & Media Production | 43 | High-fidelity generation & brand rules | Adobe/Canva/Midjourney competitive landscape. |
| **Business Operations** | Finance, Accounting & Procurement | 73 | Document extraction & ERP reconciliation | High ROI; clear CFO mandate and budget. |
| | Legal, Compliance & Risk | 67 | Hallucination-free drafting & audit | High willingness to pay; legal liability moats. |
| | HR, Recruiting & Workforce | 52 | Candidate screening & sourcing | Saturated sourcing; high applicant volume. |
| | General Workflow & Back Office | 41 | Cross-system RPA & exception handling | Direct fit for Bayesforce operating thesis. |
| | Enterprise Agents & AI Coworkers | 40 | Autonomous multi-step execution | High enterprise interest; reliability bottleneck. |

---

### 3. Vertical Intelligence (935 Companies)
- **Macro Nature:** Industry-specific software deeply embedded in specialized vertical workflows.
- **Structural Bottlenecks:** Requires deep domain fluency, custom integrations, industry certifications, and relationship-driven sales.
- **Evaluation Question:** *Do we have access to domain specialists or an unfair distribution channel into an industry with high labor friction?*

| L2 Segment | L3 Sub-Segment | YC Cos | Key Moat Factor | Founder Evaluation Notes |
| :--- | :--- | :---: | :--- | :--- |
| **Healthcare Delivery** | Clinical Care, Diagnostics & Documentation | 59 | EHR integration & clinical trust | Epic/Cerner gates, HIPAA, clinical liability. |
| | Administration, RCM & Patient Access | 116 | Billing rules & insurer clearinghouses | Massive TAM, immediate cashflow impact. |
| **Life Sciences** | Drug Discovery & Biological R&D | 50 | Wet-lab validation & chemical data | Deep PhD wet-lab / biopharma relationships. |
| | Labs, Trials & Biomanufacturing | 39 | Clinical trial compliance & telemetry | FDA regulations, contract research orgs (CROs). |
| **Financial Services** | Banking, Lending, Payments & Investing | 129 | Underwriting algorithms & audit logs | Regulated capital, risk management mandates. |
| | Insurance Distribution & Operations | 45 | Actuarial models & claims vision | Complex policy language, carrier legacy systems. |
| | Fraud, Identity & Financial Compliance | 28 | Real-time graph analytics & AML | Mission-critical budget; zero-loss mandate. |
| **Industrial & Physical** | Manufacturing, Quality & Maintenance | 44 | Factory floor CV & sensor telemetry | Industrial hardware/camera setup, PLC controls. |
| | Energy, Climate & Utilities | 30 | Grid forecasting & carbon compliance | Regulated utilities, ESG compliance data. |
| | Agriculture & Food Systems | 12 | Satellite/drone data & farm logistics | Seasonal cycles, distributed rural buyers. |
| | Materials & Scientific Engineering | 25 | Physical simulation & patent IP | Deep materials science / physics expertise. |
| **Built World** | Construction & Field Operations | 54 | Plan takeoff CV & sub-contractor ops | High growth, massive non-digitized spend. |
| | Real Estate, Architecture & Property | 43 | Lease abstraction & CAD models | Brokerage/property manager relationships. |
| **Movement & Commerce** | Logistics, Supply Chain & Fleet | 59 | EDI/TMS legacy integration & brokers | High fragmentation, low-margin freight brokers. |
| | Automotive & Mobility Services | 15 | Dealership DMS & service telemetry | Fragmented auto dealer software ecosystems. |
| | Retail & E-commerce Operations | 59 | Dynamic pricing & catalog ops | Shopify ecosystem, high brand competition. |
| | Restaurants, Hospitality & Travel | 34 | Drive-thru voice & POS integrations | Toast/POS integrations, low restaurant margins. |
| **Public Sector** | Government & Public Administration | 18 | RFP compliance & citizen services | Long procurement cycles, civic budgets. |
| | Defense, Aerospace & Public Safety | 16 | Security clearances & dual-use tech | DoD / government contracting moats. |
| **Education & Training** | Institutional Learning & Teaching | 22 | School district procurement & SIS | Bureaucratic sales, limited school budgets. |
| | Workforce & Skills Training | 8 | Corporate L&D & employee simulation | Enterprise training budgets, measurable upsell. |
| **Media & Entertainment** | Media, Creator & Entertainment Ops | 18 | Production asset pipelines & rights | Studio relationships, copyright licensing. |
| | Gaming & Sports Industry Tools | 12 | Game engine plugins (Unity/Unreal) | Niche developer tooling, studio cycles. |

---

### 4. Personal AI (206 Companies)
- **Macro Nature:** Consumer products adopted and paid for by individuals for personal life, wellness, or entertainment.
- **Structural Bottlenecks:** High consumer churn, low willingness to pay, high customer acquisition cost (CAC), reliance on viral loops.
- **Evaluation Question:** *Is there a clear monetization mechanism beyond short-term novelty?*

| L2 Segment | L3 Sub-Segment | YC Cos | Key Moat Factor | Founder Evaluation Notes |
| :--- | :--- | :---: | :--- | :--- |
| **Assist & Discover** | Personal Assistants & Search | 33 | User habit & personal context graph | Direct competition with Apple/Google OS AI. |
| **Create & Produce** | Personal Creation & Productivity | 32 | Prosumer creative workflow UX | Freemium conversion, creative novelty risk. |
| **Learn & Advance** | Learning, Tutoring & Career | 29 | Adaptive pedagogical curriculum | Strong B2C willingness to pay for education. |
| **Health & Wellbeing** | Personal Health, Fitness & Wellness | 38 | Behavioral retention & personalization | Regulated health claims, high consumer churn. |
| **Relate & Belong** | Social, Companionship & Communication | 13 | Emotional attachment & avatars | Novelty fatigue, community moderation. |
| **Play & Experience** | Games & Entertainment | 22 | Interactive storytelling & immersion | Hit-driven entertainment economics. |
| **Manage Life** | Personal Finance, Shopping & Home | 39 | Consumer open banking integrations | High consumer trust requirement for money. |

---

### 5. Embodied AI (68 Companies)
- **Macro Nature:** Hardware robotics, autonomous vehicles, drones, and physical manipulation.
- **Structural Bottlenecks:** Physical prototyping costs, supply chain management, safety certifications, long deployment cycles.
- **Evaluation Question:** *Do we have the mechanical engineering, robotics lab, and capital to build physical hardware?*

| L2 Segment | L3 Sub-Segment | YC Cos | Key Moat Factor | Founder Evaluation Notes |
| :--- | :--- | :---: | :--- | :--- |
| **Robotics Platforms** | General Robotics & Enabling Hardware | 14 | VLA foundation models & robot OS | High research & capital intensity. |
| **Industrial Autonomy** | Industrial, Warehouse & Field Robots | 28 | Gripper hardware & warehouse SLAM | Clear ROI on labor substitution. |
| **Autonomous Mobility** | Vehicles, Drones & Navigation | 8 | Long-range safety & FAA/DOT permits | Stringent regulatory safety hurdles. |
| **Medical & Care** | Medical, Surgical & Care Robots | 6 | FDA Class II/III medical devices | 3-5 year clinical trial & regulatory path. |
| **Defense & Space** | Defense, Aerospace & Space Systems | 8 | ITAR compliance & defense primes | Government defense contracting. |
| **Consumer Robotics** | Home & Consumer Robots | 4 | Unit BOM cost & domestic safety | Difficult consumer hardware unit economics. |

---

## V. Founder Constraints & Shortlisting Worksheet

*This section will be populated based on the founder's specific constraints, technical/operating background, geographic focus, and capital expectations.*

### 1. Founder & Firm Profile Constraints
- **Team Background / Core DNA:** `[To be defined]`
- **Geographic Beachhead:** `[e.g., India Mid-Market / Global US Remote]`
- **Target Customer / Buyer Persona:** `[e.g., COO, CFO, Founder, Head of Operations]`
- **Initial Capital / Runway Constraints:** `[e.g., Lean / Bootstrap / Pre-Seed]`
- **Target Sales Velocity:** `[e.g., 2-4 week sales cycles]`

### 2. Elimination Filters (Instant Exclusions)
- [ ] **Exclude Hardware / CapEx Heavy:** Eliminates Embodied AI, AI Accelerators, Edge Compute.
- [ ] **Exclude Deep-Tech PhD R&D:** Eliminates Frontier Foundation Models, Drug Discovery, Quantum.
- [ ] **Exclude High-Churn B2C:** Eliminates Personal AI Entertainment, Social Avatars.
- [ ] **Exclude Bureaucratic Procurement (>9 mo):** Eliminates Government/Civic, K-12 School Districts.

### 3. Shortlist Summary Table (Top Ranked Sub-Segments)
*(Will be ranked and populated upon completing judgment scoring)*

| Rank | Domain | Segment | Sub-Segment | Feasibility Score (/10) | Core Thesis Rationale |
| :---: | :--- | :--- | :--- | :---: | :--- |
| 1 | `[TBD]` | `[TBD]` | `[TBD]` | `/10` | `[Rationale]` |
| 2 | `[TBD]` | `[TBD]` | `[TBD]` | `/10` | `[Rationale]` |
| 3 | `[TBD]` | `[TBD]` | `[TBD]` | `/10` | `[Rationale]` |
| 4 | `[TBD]` | `[TBD]` | `[TBD]` | `/10` | `[Rationale]` |
| 5 | `[TBD]` | `[TBD]` | `[TBD]` | `/10` | `[Rationale]` |
