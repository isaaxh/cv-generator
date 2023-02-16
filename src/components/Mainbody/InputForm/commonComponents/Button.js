import React from "react";
import PropTypes from "prop-types";

export default function Button({
  buttonName,
  bgColor,
  hoverColor,
  onClick,
  instanceAddObject,
  instanceDeleteObject,
  arrayName,
}) {
  const handleClick = (btnName) => {
    if (btnName === "Add") {
      onClick(instanceAddObject, arrayName);
    } else if (btnName === "Delete") {
      onClick(instanceDeleteObject.key, arrayName);
    } else {
      onClick();
    }
  };

  return (
    <button
      className={`${bgColor} ${hoverColor} text-white px-3 py-2 mb-2 rounded`}
      onClick={() => handleClick(buttonName)}
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
  instanceAddObject: PropTypes.object,
  instanceDeleteObject: PropTypes.object,
  arrayName: PropTypes.string,
};
