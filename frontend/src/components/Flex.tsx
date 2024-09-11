import styled from "styled-components";

type JustifyContent =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";
type AlignItems =
  | "stretch"
  | "flex-start"
  | "flex-end"
  | "center"
  | "baseline"
  | "auto";

export const Flex = styled.div<{
  direction?: "row" | "column";
  alignItems?: AlignItems;
  justifyContent?: JustifyContent;
  gap?: number;
  grow?: number;
  noFlexShrink?: boolean;
  flexWrap?: boolean;
}>`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  align-items: ${({ alignItems }) => alignItems || "flex-start"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  width: 100%;
  gap: ${({ theme, gap }) => theme.spacing(gap || 0)};
  flex-grow: ${({ grow }) => grow && grow};
  min-height: 0;
  flex-shrink: ${({ noFlexShrink }) => (noFlexShrink ? 0 : "unset")};
  flex-wrap: ${({ flexWrap }) => (flexWrap ? "wrap" : "no-wrap")};
`;
