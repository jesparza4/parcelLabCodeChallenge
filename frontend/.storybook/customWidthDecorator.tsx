import type { StoryFn } from "@storybook/react";
import React from "react";

export const customWidthDecorator =
  (width: number = 600) =>
  (Story: StoryFn) => (
    <div style={{ width }}>
      <Story />
    </div>
  );
