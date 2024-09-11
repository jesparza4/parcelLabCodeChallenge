import styled, { css, RuleSet } from "styled-components";
import { FontSize, Palette } from "../../styled";

type Variant = "caption" | "body" | "title";
type FontWeight = "lighter" | "normal" | "bold";

interface TypographyProps {
  variant?: Variant;
  fontWeight?: FontWeight;
  color?: (palette: Palette) => string;
  fontSize?: FontSize;
}
export const Typography = styled.span<TypographyProps>`
  ${({ variant }) => {
    return defaultVariant[variant ?? "body"];
  }}

  font-weight: ${({ fontWeight }) => fontWeight && fontWeight};
  color: ${({ color, theme }) => color && color(theme.palette)};
  font-size: ${({ theme, fontSize }) => fontSize && theme.fontSize[fontSize]};
  letter-spacing: 0.5px;
  text-align: start;
`;

const bodyVariant = css`
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: regular;
  color: ${({ theme }) => theme.palette.common.black};
`;

const captionVariant = css`
  font-size: ${({ theme }) => theme.fontSize.xs};
  /* font-weight: lighter; */
  color: ${({ theme }) => theme.palette.gray[400]};
`;

const titleVariant = css`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: bold;
  color: ${({ theme }) => theme.palette.common.black};
`;

const defaultVariant: Record<Variant, RuleSet> = {
  body: bodyVariant,
  caption: captionVariant,
  title: titleVariant,
};
