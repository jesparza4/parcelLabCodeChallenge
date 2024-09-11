import type { Meta, StoryObj } from "@storybook/react";
import { customWidthDecorator } from "../../../.storybook/customWidthDecorator";

import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  component: Card,
  decorators: [customWidthDecorator()],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: "Card title",
    children: <>Card</>,
  },
};
