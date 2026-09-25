import React from "react";
import { Heading, Text, Kicker } from "../../atoms/Typography";
import { Icon } from "../../atoms/Icons";
import { DistributionCard } from "../../molecules/DistributionCard";
import "./DistributionSection.css";

export const DistributionSection: React.FC<{
  className?: string;
}> = ({
  className = "",
}) => {
  return (
    <section id="distribution" className={["bf-distribution-section", className].filter(Boolean).join(" ")}>
      <div className="bf-distribution-section__inner">
        {/* Header */}
        <div className="bf-distribution-section__header">
          <Kicker variant="gold" icon={<Icon name="trending-up" size={18} />}>
            04. The Mathematics of Leverage
          </Kicker>
          <Heading level="h1" className="mb-4">
            The Three Distributions Every Business Lives Inside
          </Heading>
          <Text variant="lead">
            The same team, with the same effort, will produce radically different outcomes depending on which distribution they operate in. BayesForce unlocks compounding log-normal and power-law leverage for modern operations.
          </Text>
        </div>

        {/* 3 Distributions Cards */}
        <div className="bf-distribution-grid">
          <DistributionCard
            name="Normal Distribution"
            shape="Symmetric Bell Curve (Mean = Median)"
            badge="Linear & Capacity Bound"
            badgeVariant="slate"
            metrics={[
              { label: "Example Businesses", value: "Restaurants, airlines, legacy hourly agencies" },
              { label: "Core Constraint", value: "Physical seats, billable hours, headcount" },
              { label: "Marginal Cost", value: "Constant per additional unit produced" },
              { label: "Winning Strategy", value: "Cost control, throughput, zero variance" },
              { label: "Common Failure", value: "Operational collapse under volume spikes" },
            ]}
          />

          <DistributionCard
            name="Log-Normal Distribution"
            shape="Right-Skewed Long Tail (Mean > Median)"
            badge="Compounding Judgment"
            badgeVariant="cobalt"
            isActive={true}
            metrics={[
              { label: "Example Businesses", value: "BayesForce, elite consultancies, studios" },
              { label: "Core Constraint", value: "Executive judgment & delivery excellence" },
              { label: "Marginal Cost", value: "Decreases rapidly with reusable AI systems" },
              { label: "Winning Strategy", value: "Compounding judgment, workflow reusability" },
              { label: "Common Failure", value: "Spreading thin across generic low-value work" },
            ]}
          />

          <DistributionCard
            name="Power-Law Distribution"
            shape="Extreme Skew (Top 1% dominates)"
            badge="Unbounded Scale"
            badgeVariant="gold"
            metrics={[
              { label: "Example Businesses", value: "AI models, platforms, foundational IP" },
              { label: "Core Constraint", value: "Distribution access, network density, capital" },
              { label: "Marginal Cost", value: "Approaches zero asymptotically" },
              { label: "Winning Strategy", value: "Speed of learning, capturing right-tail outliers" },
              { label: "Common Failure", value: "Caution, hedging, and mediocre iteration speed" },
            ]}
          />
        </div>

        {/* Universal Bayesian Truths Callout */}
        <div className="bf-distribution-callout">
          <div>
            <span className="bf-distribution-law-tag text-blue-600">
              Foundational Law #1
            </span>
            <h3 className="bf-distribution-law-title">
              Speed of Learning Compounds (The Bayesian Law)
            </h3>
            <p className="bf-distribution-law-desc">
              In every distribution, the operator who updates faster on real-world feedback pulls exponentially ahead. <em>We update our beliefs as new evidence arrives.</em> That is why we embed systems that measure operational truth in real-time.
            </p>
          </div>
          <div>
            <span className="bf-distribution-law-tag text-amber-600">
              Foundational Law #2
            </span>
            <h3 className="bf-distribution-law-title">
              Most Strategy Is Pure Execution
            </h3>
            <p className="bf-distribution-law-desc">
              A brilliant strategy executed slowly inside fragmented machinery loses to a focused plan executed obsessively. BayesForce builds the execution machinery so strategy turns into immediate action.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
