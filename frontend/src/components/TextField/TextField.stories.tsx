import type { Meta, StoryObj } from '@storybook/react';
 
import { TextField } from './TextField';
 
const meta: Meta<typeof TextField> = {
  component: TextField,
};
 
export default meta;
type Story = StoryObj<typeof TextField>;
 
export const Default: Story = {
  args: {
    placeholder: "Placeholder",
    label: "Input label",
  },
};

export const Error: Story = {
  args: {
    ...Default.args,
    errorMessage: "This field has an error"
  }
};