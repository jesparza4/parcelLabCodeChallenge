import type { Preview } from "@storybook/react";
import React from "react";
import { theme } from "../src/theme"
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../src/GlobalStyles"

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
       <GlobalStyles />
            <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
