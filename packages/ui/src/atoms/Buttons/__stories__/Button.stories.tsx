import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { Icon } from "../../Icons";

const meta: Meta<typeof Button> = {
  title: "Atoms/Buttons/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "gold", "dark", "ghost", "ghost-dark"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Execution Diagnostic",
    variant: "primary",
    size: "md",
  },
};

export const SovereignGold: Story = {
  args: {
    children: "Verify Your Baseline",
    variant: "gold",
    size: "lg",
  },
};

export const WithIcons: Story = {
  args: {
    children: "Explore Offerings",
    variant: "primary",
    size: "md",
    rightIcon: <Icon name="arrow-right" size={16} />,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
      <Button variant="primary">Primary Cobalt</Button>
      <Button variant="secondary">Secondary Soft</Button>
      <Button variant="gold">Sovereign Gold</Button>
      <Button variant="dark">Obsidian Dark</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
};
