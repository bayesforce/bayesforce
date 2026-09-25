import type { Meta, StoryObj } from "@storybook/react";
import { DistributionSection } from "../DistributionSection";

const meta: Meta<typeof DistributionSection> = {
  title: "Organisms/DistributionSection",
  component: DistributionSection,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof DistributionSection>;

export const Default: Story = {};
