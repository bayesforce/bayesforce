import type { Meta, StoryObj } from "@storybook/react";
import { CSuiteSection } from "../CSuiteSection";

const meta: Meta<typeof CSuiteSection> = {
  title: "Organisms/CSuiteSection",
  component: CSuiteSection,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof CSuiteSection>;

export const Default: Story = {};
