import type { Meta, StoryObj } from "@storybook/react";
import { PillarsSection } from "../PillarsSection";

const meta: Meta<typeof PillarsSection> = {
  title: "Organisms/PillarsSection",
  component: PillarsSection,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof PillarsSection>;

export const Default: Story = {};
