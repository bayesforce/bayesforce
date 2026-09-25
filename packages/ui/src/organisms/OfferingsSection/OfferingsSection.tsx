import React from "react";
import { Heading, Text, Kicker } from "../../atoms/Typography";
import { Icon } from "../../atoms/Icons";
import { Button } from "../../atoms/Buttons";
import { OfferingCard } from "../../molecules/OfferingCard";
import { GridCanvas } from "../../atoms/Display";
import "./OfferingsSection.css";

export const OfferingsSection: React.FC<{
  onBookSprint?: () => void;
  className?: string;
}> = ({ onBookSprint, className = "" }) => {
  return (
    <section id="offerings" className={["bf-offerings-section", className].filter(Boolean).join(" ")}>
      <GridCanvas variant="dots-dark" />
      <div className="bf-offerings-section__inner">
        {/* Section Header */}
        <div className="bf-offerings-section__header">
          <Kicker variant="dark" icon={<Icon name="layers" size={16} />}>
            03. Productized Staircase
          </Kicker>
          <Heading level="h1" dark className="mb-4">
            A Staircase of Value, Not Disconnected AI Experiments
          </Heading>
          <Text variant="lead" dark>
            Each offering solves a consequential layer of the organizational problem. You begin with one measurable result, establish context, build an operating rhythm, and introduce autonomy safely.
          </Text>
        </div>

        {/* Offerings Grid */}
        <div className="bf-offerings-grid">
          {/* Step 1 */}
          <OfferingCard
            step="Stage 01 // Entry Sprint"
            title="Execution Diagnostic & Automation Sprint"
            description="Fixed-scope paid 2-4 week engagement targeting one painful recurring workflow (operating review, invoice exceptions, handoffs, or capacity backlog)."
            deliverables={[
              "Current process & friction bottleneck mapping",
              "Baseline measurement for cycle time & error cost",
              "One working decision view or human-approved automation",
              "90-Day quantified architectural recommendation",
            ]}
            outcome="Measurable delta delivered in weeks, establishing ground truth before full rollout."
            badgeText="Paid Entry Sprint"
            badgeVariant="gold"
            isFeatured={true}
            dark={true}
          />

          {/* Step 2 */}
          <OfferingCard
            step="Stage 02 // Foundation"
            title="BayesForce Intelligence"
            description="The governed context layer connecting documents, meetings, ERP, CRM, spreadsheets, and team knowledge into an traceable organizational truth."
            deliverables={[
              "Unified entity & metric definition model",
              "Cross-system data & communication resolvers",
              "Source-attributed reasoning & evidence graph",
              "Zero hallucination operating memory",
            ]}
            outcome="Teams and agents act without reconstructing context or reconciling conflicting numbers."
            badgeText="Context Layer"
            badgeVariant="cobalt"
            dark={true}
          />

          {/* Step 3 */}
          <OfferingCard
            step="Stage 03 // Rhythm"
            title="BayesForce Analytics Engine"
            description="Turns connected operating data into a weekly/monthly management cadence answering what changed, why, what is at risk, and who owns the action."
            deliverables={[
              "Automated management review preparation",
              "Root-cause anomaly & margin leak detection",
              "Action assignment with completion verification",
              "Historical decision ledger & institutional memory",
            ]}
            outcome="Saves 80% of reporting preparation time while catching operational risks early."
            badgeText="Cadence Engine"
            badgeVariant="slate"
            dark={true}
          />

          {/* Step 4 */}
          <OfferingCard
            step="Stage 04 // Autonomy"
            title="BayesForce Workflow Agents"
            description="End-to-end agentic execution for defined business processes from intake to completion with strict audit trails and human approvals."
            deliverables={[
              "Quote-to-proposal & approval routing agents",
              "Project status collection & reconciliation agents",
              "Invoice exception & mismatch resolution",
              "Human-in-the-loop escalation guardrails",
            ]}
            outcome="Reclaims hundreds of operational coordination hours per month."
            badgeText="Agent Execution"
            badgeVariant="cobalt"
            dark={true}
          />

          {/* Step 5 */}
          <OfferingCard
            step="Stage 05 // Expansion"
            title="BayesForce Revenue Ops"
            description="Connects demand signals, CRM truth, proposals, and delivery handoffs so commercial teams focus exclusively on high-conversion actions."
            deliverables={[
              "Automated pipeline hygiene & deal qualification",
              "Proposal generation from conversation context",
              "Won-deal to delivery handoff automation",
              "Real-time revenue risk escalation",
            ]}
            outcome="Shortens sales cycles and prevents deal-to-delivery revenue leakage."
            badgeText="RevOps Expansion"
            badgeVariant="slate"
            dark={true}
          />

          {/* Step 6 */}
          <OfferingCard
            step="Stage 06 // Expansion"
            title="BayesForce Customer Ops"
            description="Unifies tickets, calls, chats, and product context to eliminate service overhead while feeding live customer signals back to leadership."
            deliverables={[
              "Intelligent ticket triage & context-rich drafts",
              "Automated routine resolution with safety bounds",
              "Renewal & escalation risk early warnings",
              "Support-to-product insight synthesis",
            ]}
            outcome="Dramatically lowers ticket backlog and boosts first-contact resolution."
            badgeText="Service Ops"
            badgeVariant="slate"
            dark={true}
          />
        </div>

        {/* Managed Improvement Banner */}
        <div className="bf-offerings-staircase-banner">
          <div>
            <span className="text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
              Stage 07 // Compounding Advantage
            </span>
            <h4 className="text-xl font-bold text-white mt-1">Deployment & Managed Improvement</h4>
            <p className="text-slate-400 text-sm max-w-2xl mt-1">
              Quarterly value reviews, workflow optimization, and model upgrades ensure your organization continuously absorbs new AI capabilities without breaking existing systems.
            </p>
          </div>
          <Button
            variant="gold"
            size="md"
            onClick={onBookSprint}
            as="a"
            href="#diagnostic"
            rightIcon={<Icon name="arrow-right" size={16} />}
          >
            Start With Stage 01 Sprint
          </Button>
        </div>
      </div>
    </section>
  );
};
