import type { Meta, StoryObj } from "@storybook/react";
import Article from "./Article";
import { customWidthDecorator } from "../../../.storybook/customWidthDecorator";

const meta: Meta<typeof Article> = {
  component: Article,
  decorators: [customWidthDecorator(300)],
} satisfies Meta<typeof Article>;

export default meta;

type Story = StoryObj<typeof Article>;

export const Default: Story = {
  args: {
    articleNo: "AB30M216",
    name: "Macbook Pro M2 Max 16inch",
    quantity: 1,
    price: 4199,
    imageUrl: "https://images.unsplash.com/photo-1639249227523-78502e9bb8b7",
  },
};
