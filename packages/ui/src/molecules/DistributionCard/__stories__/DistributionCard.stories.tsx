import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { DistributionCard } from "../DistributionCard";

const meta: Meta<typeof DistributionCard> = {
  title: "Molecules/DistributionCard",
  component: DistributionCard,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof DistributionCard>;

export const LogNormalCompounding: Story = {
  args: {
    name: "Log-Normal Distribution",
    shape: "Right-Skewed Long Tail (Mean > Median)",
    badge: "Compounding Judgment",
    badgeVariant: "cobalt",
    isActive: true,
    metrics: [
      { label: "Example Businesses", value: "BayesForce, elite consultancies, studios" },
      { label: "Core Constraint", value: "Executive judgment & delivery excellence" },
      { label: "Marginal Cost", value: "Decreases rapidly with reusable AI systems" },
      { label: "Winning Strategy", value: "Compounding judgment, workflow reusability" },
      { label: "Common Failure", value: "Spreading thin across generic low-value work" },
    ],
  },
};
