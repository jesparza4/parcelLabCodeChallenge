import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Foo button",
    variant: "primary",
  },
  argTypes: {
    variant: {
      control: {
        options: ["primary", "secondary"],
        control: "select",
      },
    },
  },
};

export const Secondary: Story = {
  ...Primary,
  args: {
    children: "Foo button",
    variant: "secondary",
  },
};
