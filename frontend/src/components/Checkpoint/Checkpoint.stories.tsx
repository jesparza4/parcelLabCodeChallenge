import type { Meta, StoryObj } from "@storybook/react";
import { customWidthDecorator } from "../../../.storybook/customWidthDecorator";
import { Checkpoint } from "./Checkpoint";

const meta: Meta<typeof Checkpoint> = {
  component: Checkpoint,
  decorators: [customWidthDecorator(300)],
};

export default meta;

type Story = StoryObj<typeof Checkpoint>;

export const Default: Story = {
  args: {
    status: "Ready for collection",
    timestamp: "2023-01-07T20:02:30Z",
    location: "Munich",
    details:
      "Unfortunately, the goods could not be delivered. The goods are being forwarded to a pick-up location.",
  },
};
