import type { Meta, StoryObj } from "@storybook/react";
import { within, expect, userEvent } from "@storybook/test";
import { CheckpointList } from "./CheckpointList";
import { customWidthDecorator } from "../../../.storybook/customWidthDecorator";

const meta: Meta<typeof CheckpointList> = {
  component: CheckpointList,
  decorators: [customWidthDecorator(300)],
};

export default meta;
type Story = StoryObj<typeof CheckpointList>;

export const Default: Story = {
  args: {
    checkpoints: [
      {
        statusDetails: "Checkpoint 1",
        eventTimestamp: "Timestamp 1",
        status: "Status 1",
        countryIso3: "Country Iso 1",
        city: "City 1",
        statusKey: "inTransit",
      },
      {
        statusDetails: "Checkpoint 2",
        eventTimestamp: "Timestamp 2",
        status: "Status 2",
        countryIso3: "Country Iso 2",
        city: "City 2",
        statusKey: "inTransit",
      },
      {
        statusDetails: "Checkpoint 3",
        eventTimestamp: "Timestamp 3",
        status: "Status 3",
        countryIso3: "Country Iso 3",
        city: "City 3",
        statusKey: "inTransit",
      },
      {
        statusDetails: "Checkpoint 4",
        eventTimestamp: "Timestamp 4",
        status: "Status 4",
        countryIso3: "Country Iso 4",
        city: "City 4",
        statusKey: "inTransit",
      },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    expect(await canvas.findByText("Status 1")).toBeInTheDocument();
    expect(await canvas.queryByText("Status 4")).not.toBeInTheDocument();

    await userEvent.click(canvas.getByRole("button", { name: "more" }));
    expect(await canvas.findByText("Status 4")).toBeInTheDocument();
    expect(
      await canvas.getByRole("button", { name: "less" })
    ).toBeInTheDocument();
  },
};
