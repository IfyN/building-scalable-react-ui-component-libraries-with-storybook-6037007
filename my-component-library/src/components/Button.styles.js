import styled, { css } from "styled-components";
import { themeToken } from "../themeToken";

const variantStyles = {
  primary: css`
    background-color: ${themeToken.colors.button.primaryBg};
    color: ${themeToken.colors.button.primaryText};
    border: none;
    &:hover:enabled {
      background-color: ${themeToken.colors.button.primaryHover};
    }
  `,
  secondary: css`
    background-color: ${themeToken.colors.button.secondaryBg};
    color: ${themeToken.colors.button.secondaryText};
    border: none;
    &:hover:enabled {
      background-color: ${themeToken.colors.button.secondaryHover};
    }
  `,
  outline: css`
    background-color: ${themeToken.colors.button.outlineBg};
    color: ${themeToken.colors.button.outlineText};
    border: 2px solid ${themeToken.colors.button.outlineBorder};
    &:hover:enabled {
      background-color: ${themeToken.colors.button.outlineHover};
    }
  `,
  ghost: css`
    background-color: transparent;
    color: ${themeToken.colors.button.outlineText};
    border: none;
    &:hover:enabled {
      background-color: ${themeToken.colors.gray100};
    }
  `,
};

const sizeStyles = {
  sm: css`
    padding: ${themeToken.spacing.xs} ${themeToken.spacing.sm};
    font-size: ${themeToken.fontSize.sm};
    border-radius: ${themeToken.borderRadius.sm};
  `,
  md: css`
    padding: ${themeToken.spacing.sm} ${themeToken.spacing.md};
    font-size: ${themeToken.fontSize.md};
    border-radius: ${themeToken.borderRadius.md};
  `,
  lg: css`
    padding: ${themeToken.spacing.md} ${themeToken.spacing.lg};
    font-size: ${themeToken.fontSize.lg};
    border-radius: ${themeToken.borderRadius.lg};
  `,
};


export const StyledButton = styled.button`
  transition: background-color 0.2s;
  cursor: pointer;
  ${(props) => variantStyles[props.$variant || "primary"]}
  ${(props) => sizeStyles[props.$size || "md"]}
`;