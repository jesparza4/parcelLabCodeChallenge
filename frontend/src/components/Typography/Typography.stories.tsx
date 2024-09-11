import type { Meta, StoryObj } from '@storybook/react';
 
import { Typography } from './Typography';
 
const meta: Meta<typeof Typography> = {
  component: Typography,
};
 
export default meta;
type Story = StoryObj<typeof Typography>;
 
export const Default: Story = {
  args: {
    children: "Typography",
    variant: "body"
  },
  argTypes: {
    variant: {
        options: ["caption", "body", "title"],
        control: "select"
    }
  }
};