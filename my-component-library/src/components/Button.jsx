import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./Button.styles";

export default function Button ({label, variant = "Primary", onClick, ...props}){
  return (
    <StyledButton $variant={variant} onClick={onClick} {...props}>
    {label}
  </StyledButton>

)}

Button.PropTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary"]),
  onClick: PropTypes.func,
}