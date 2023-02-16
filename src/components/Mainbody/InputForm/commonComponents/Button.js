import React, { useContext } from "react";
import PropTypes from "prop-types";
import MainBodyContext from "../../MainBodyContext.js";

export default function Button({ buttonName, bgColor, hoverColor, onClick }) {
  const { stateExperience } = useContext(MainBodyContext);

  const handleClick = () => {
    onClick(stateExperience);
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
};
