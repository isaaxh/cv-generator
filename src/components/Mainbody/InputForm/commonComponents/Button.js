import React from "react";
import PropTypes from "prop-types";

export default function Button({ buttonName, bgColor, hoverColor }) {
  return (
    <button
      className={`${bgColor} ${hoverColor} text-white px-3 py-2 mb-2 rounded`}
    >
      {buttonName}
    </button>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string,
  bgColor: PropTypes.string,
  hoverColor: PropTypes.string,
};
