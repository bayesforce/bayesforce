import type { Meta, StoryObj } from "@storybook/react";
import { AntiLegacySection } from "../AntiLegacySection";

const meta: Meta<typeof AntiLegacySection> = {
  title: "Organisms/AntiLegacySection",
  component: AntiLegacySection,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof AntiLegacySection>;

export const Default: Story = {};
