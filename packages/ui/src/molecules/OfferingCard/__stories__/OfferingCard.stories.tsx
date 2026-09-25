import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { OfferingCard } from "../OfferingCard";

const meta: Meta<typeof OfferingCard> = {
  title: "Molecules/OfferingCard",
  component: OfferingCard,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof OfferingCard>;

export const DiagnosticSprint: Story = {
  args: {
    step: "Stage 01 // Entry Sprint",
    title: "Execution Diagnostic & Automation Sprint",
    description: "Fixed-scope paid 2-4 week engagement targeting one painful recurring workflow.",
    deliverables: [
      "Current process & bottleneck mapping",
      "Baseline measurement for cycle time & error cost",
      "One working decision view or automation artifact",
      "90-Day quantified architectural recommendation",
    ],
    outcome: "Measurable delta delivered in weeks before full rollout.",
    badgeText: "Paid Entry Sprint",
    badgeVariant: "gold",
    isFeatured: true,
  },
};
