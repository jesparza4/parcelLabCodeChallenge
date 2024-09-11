import "styled-components";
import { fontSize, palette } from "./theme";

type Palette = typeof palette;
type PaletteKeys = keyof Palette;

type StringOrNumberKey<T> = Extract<keyof T, string | number>;
type FontSize = keyof typeof fontSize;

export type PaletteColor = {
  [K in PaletteKeys]: `${K}[${StringOrNumberKey<Palette[K]>}]`;
}[PaletteKeys];

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: (index: number) => string;
    shadows: (index: number) => string;
    fontSize: {
      [Key in FontSize]: string;
    };
    palette: Palette;
    spacing: (index: number) => string;
  }
}
