import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../Badge";
import { Icon } from "../../Icons";

const meta: Meta<typeof Badge> = {
  title: "Atoms/Badges/Badge",
  component: Badge,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const CobaltWithDot: Story = {
  args: {
    children: "Precision AI For Modern Operations",
    variant: "cobalt",
    withDot: true,
  },
};

export const GoldHeritage: Story = {
  args: {
    children: "Thomas Bayes Heritage",
    variant: "gold",
    icon: <Icon name="sparkles" size={14} />,
  },
};

export const AllBadges: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", alignItems: "center" }}>
      <Badge variant="cobalt" withDot>Cobalt</Badge>
      <Badge variant="gold">Sovereign Gold</Badge>
      <Badge variant="slate">Slate Token</Badge>
      <Badge variant="dark">Obsidian Dark</Badge>
      <Badge variant="success">Outcome Verified</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
};
