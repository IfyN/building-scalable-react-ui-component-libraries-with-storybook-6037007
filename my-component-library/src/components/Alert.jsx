import React from "react";
import PropTypes from "prop-types";
import { StyledAlert } from "./Alert.styles";

export default function Alert({ message, type = "info", ...props }) {
  return (
    <StyledAlert $type={type} {...props}>
      {message}
    </StyledAlert>
  );
}

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["info", "success", "warning", "error"]),
};
