import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { CapacityCalculator } from "../CapacityCalculator";

const meta: Meta<typeof CapacityCalculator> = {
  title: "Molecules/CapacityCalculator",
  component: CapacityCalculator,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof CapacityCalculator>;

export const Default: Story = {
  render: () => (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "2rem" }}>
      <CapacityCalculator onBookAudit={() => alert("Diagnostic booked!")} />
    </div>
  ),
};
