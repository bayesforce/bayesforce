import React from "react";
import { Heading, Text, Kicker } from "../../atoms/Typography";
import { Badge } from "../../atoms/Badges";
import { Icon } from "../../atoms/Icons";
import { PrincipleCard } from "../../molecules/PrincipleCard";
import "./BeliefSection.css";

export const BeliefSection: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <section id="belief" className={["bf-belief-section", className].filter(Boolean).join(" ")}>
      <div className="bf-belief-section__inner">
        {/* Section Header */}
        <div className="bf-belief-section__header">
          <Kicker variant="cobalt" icon={<Icon name="target" size={18} />}>
            01. Our Belief & Strategic Thesis
          </Kicker>
          <Heading level="h1" className="mb-4">
            Capable people inside systems that fail to multiply them.
          </Heading>
          <Text variant="lead">
            We built organizations because one person could never do enough alone. And then, somehow, we built organizations in which people spend much of their lives trying to get things done.
          </Text>
        </div>

        {/* Narrative Comparison */}
        <div className="bf-belief-section__grid-split">
          <div className="bf-belief-card-comparison">
            <div className="flex items-center gap-2">
              <Badge variant="slate">The Current Reality</Badge>
            </div>
            <h3 className="bf-belief-card-comparison__title">
              When the Amplifier Becomes the Obstacle
            </h3>
            <p className="bf-belief-card-comparison__text">
              The salesperson spends the morning updating the CRM. The researcher spends the afternoon digging for data to prove what she already knows. The operator waits for three teams, two approvals, and next week's meeting to fix a broken flow.
            </p>
            <p className="bf-belief-card-comparison__text">
              These are not incapable people. They are capable people operating organizational machinery instead of doing the consequential work.
            </p>
          </div>

          <div className="bf-belief-card-comparison bf-belief-card-comparison--highlight">
            <div className="flex items-center gap-2">
              <Badge variant="gold">The BayesForce Shift</Badge>
            </div>
            <h3 className="bf-belief-card-comparison__title text-blue-900">
              Systems That Carry the Machinery
            </h3>
            <p className="bf-belief-card-comparison__text">
              Now, for the first time, we can build systems that understand, reason, remember, coordinate, and act alongside us. Systems that do not merely store what an organization knows, but use it.
            </p>
            <p className="bf-belief-card-comparison__text font-bold text-blue-950">
              Not organizations without people. But organizations that make people capable of more.
            </p>
          </div>
        </div>

        {/* Mission & Principles */}
        <div id="principles" className="pt-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Kicker variant="gold" icon={<Icon name="scale" size={18} />}>
              Foundational Architecture
            </Kicker>
            <Heading level="h2">How We Redesign Modern Operations</Heading>
            <Text variant="body" className="mt-3">
              Four non-negotiable architectural principles that govern every BayesForce engagement.
            </Text>
          </div>

          <div className="bf-principles-grid">
            <PrincipleCard
              number="01"
              title="We improve the workflow before we ask people to change it"
              description="People should not have to relearn their jobs just because technology got better. We work with existing tools, habits, and operating rhythms, then quietly remove friction underneath them."
              takeaway="The best transformation feels less like change and more like things suddenly working."
            />
            <PrincipleCard
              number="02"
              title="We solve for the organization, not for the AI"
              description="The newest technology will always be tempting. But our job is not to put more AI into an organization. It is to make the organization more capable. Sometimes that requires an agent, sometimes removing a step altogether."
              takeaway="We use as much AI as the outcome deserves, and no more."
            />
            <PrincipleCard
              number="03"
              title="We build so every improvement makes the next one easier"
              description="AI will keep changing. The systems we build never force an organization to start over. Knowledge accumulates, infrastructure is reusable, and new capabilities strengthen what is already there."
              takeaway="An organization that becomes better at becoming better."
            />
            <PrincipleCard
              number="04"
              title="We make the technology disappear"
              description="The point of great technology is not to remind people that it is there. It is to make the work feel lighter, faster, and more natural. The intelligence fades into the operation until people simply notice what has become possible."
              takeaway="The best AI is the one people stop noticing because work simply happens."
            />
          </div>
        </div>
      </div>
    </section>
  );
};
