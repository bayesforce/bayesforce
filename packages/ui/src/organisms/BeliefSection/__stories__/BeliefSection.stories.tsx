import type { Meta, StoryObj } from "@storybook/react";
import { BeliefSection } from "../BeliefSection";

const meta: Meta<typeof BeliefSection> = {
  title: "Organisms/BeliefSection",
  component: BeliefSection,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof BeliefSection>;

export const Default: Story = {};
