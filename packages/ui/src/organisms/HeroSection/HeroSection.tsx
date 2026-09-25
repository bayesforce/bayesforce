import React from "react";
import { Badge } from "../../atoms/Badges";
import { Button } from "../../atoms/Buttons";
import { Heading, Text } from "../../atoms/Typography";
import { Icon } from "../../atoms/Icons";
import { StatsCard } from "../../molecules/StatsCard";
import { GridCanvas } from "../../atoms/Display";
import "./HeroSection.css";

export interface HeroSectionProps {
  onBookDiagnostic?: () => void;
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onBookDiagnostic,
  className = "",
}) => {
  return (
    <section className={["bf-hero", className].filter(Boolean).join(" ")}>
      <GridCanvas variant="dots" />
      <div className="bf-hero__inner">
        {/* Badges */}
        <div className="bf-hero__badge-row">
          <Badge variant="cobalt" withDot icon={<Icon name="sparkles" size={14} />}>
            Precision AI For Modern Operations
          </Badge>
          <Badge variant="gold">
            Thomas Bayes Heritage
          </Badge>
        </div>

        {/* Hero Title */}
        <Heading level="hero" gradient className="bf-hero__title">
          The greatest organizations amplify what people are capable of making happen.
        </Heading>

        {/* Subtitle */}
        <Text variant="lead" className="bf-hero__subtitle">
          BayesForce transforms organizations by embedding execution intelligence and AI agents into core workflows—carrying routine machinery so your capable people can carry your ambition.
        </Text>

        {/* Dual Actions */}
        <div className="bf-hero__actions">
          <Button
            variant="primary"
            size="lg"
            onClick={onBookDiagnostic}
            as="a"
            href="#diagnostic"
            rightIcon={<Icon name="arrow-right" size={18} />}
          >
            Start Execution Diagnostic Sprint
          </Button>
          <Button
            variant="outline"
            size="lg"
            as="a"
            href="#pillars"
            leftIcon={<Icon name="layers" size={18} />}
          >
            Explore Core Capabilities
          </Button>
        </div>

        {/* Stats Row */}
        <div className="bf-hero__stats-grid">
          <StatsCard
            value="10 → 40"
            label="Operational Capacity Leverage"
            description="Turn a 10-person operations team into the execution equivalent of 40."
            variant="cobalt"
          />
          <StatsCard
            value="2-4 Wks"
            label="Time to Proven Delta"
            description="Fixed-scope baseline to working automation artifact in weeks, not years."
            variant="gold"
          />
          <StatsCard
            value="100%"
            label="Client Source Code & IP"
            description="Full ownership of workflows, agents, and system logic. Zero black-box lock-in."
            variant="default"
          />
          <StatsCard
            value="Outcome"
            label="Billing Linked to Delta"
            description="We succeed only when your organization becomes permanently faster and leaner."
            variant="cobalt"
          />
        </div>

        {/* Interactive Operating Preview Chip */}
        <div className="bf-hero__card-preview">
          <div className="bf-hero__card-preview-bar">
            <div className="bf-hero__card-preview-title">
              <Icon name="bayes-logo" size={20} />
              <span>BayesForce Intelligence // Real-time Cross-System Resolution</span>
            </div>
            <div className="bf-hero__card-preview-dots">
              <span className="bf-hero__card-preview-dot" />
              <span className="bf-hero__card-preview-dot" />
              <span className="bf-hero__card-preview-dot" />
            </div>
          </div>
          <div className="bf-hero__preview-grid">
            <div className="bf-hero__preview-item">
              <div className="bf-hero__preview-item-kicker text-amber-400">01. SCATTERED FACTS → UNIFIED</div>
              <div className="bf-hero__preview-item-desc">Reconciled 14 spreadsheets, CRM pipeline updates & ERP invoices into verified ground truth.</div>
            </div>
            <div className="bf-hero__preview-item">
              <div className="bf-hero__preview-item-kicker text-blue-400">02. REASONING & ANOMALIES</div>
              <div className="bf-hero__preview-item-desc">Surfaced ₹42L margin leak across 3 active client delivery handoffs before month-end close.</div>
            </div>
            <div className="bf-hero__preview-item">
              <div className="bf-hero__preview-item-kicker text-emerald-400">03. HUMAN-APPROVED AGENT ACTION</div>
              <div className="bf-hero__preview-item-desc">Workflow Agent drafted corrective escalation, routed to COO, updated Jira & Slack owners.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
