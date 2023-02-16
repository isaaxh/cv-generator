import React from "react";
import PropTypes from "prop-types";

export default function Button({
  buttonName,
  bgColor,
  hoverColor,
  onClick,
  instanceObject,
  arrayName,
}) {
  const handleClick = () => {
    onClick(instanceObject, arrayName);
  };

  return (
    <button
      className={`${bgColor} ${hoverColor} text-white px-3 py-2 mb-2 rounded`}
      onClick={handleClick}
    >
      {buttonName}
    </button>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string,
  bgColor: PropTypes.string,
  hoverColor: PropTypes.string,
  onClick: PropTypes.func,
  instanceObject: PropTypes.object,
  arrayName: PropTypes.string,
};
