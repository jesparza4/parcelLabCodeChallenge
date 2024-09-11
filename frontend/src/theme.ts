import { DefaultTheme } from "styled-components";

const spacing = [0, 4, 8, 12, 16, 20, 24, 32, 40, 46, 64];
const borderRadii = [4, 8, 12];
const shadow = [
  "rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px;",
  "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;",
];

export const palette = {
  primary: {
    500: "#1A2A74",
  },
  secondary: {
    500: "#FAFAFA",
  },
  gray: {
    100: "#FAFAFA",
    200: "#E6E6E6",
    400: "#9F9F9F",
    500: "#707070",
  },
  red: {
    500: "#D3163B",
  },
  common: {
    black: "#080808",
    white: "#FFFFFF",
  },
};

export const fontSize = {
  xs: "0.8rem",
  sm: "1rem",
  md: "1.5rem",
  lg: "2rem",
};

export const theme: DefaultTheme = {
  borderRadius: (index) => `${borderRadii[index]}px`,
  shadows: (index) => shadow[index],
  spacing: (index) => `${spacing[index]}px`,
  fontSize,
  palette,
};
