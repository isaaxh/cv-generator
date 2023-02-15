import React from "react";
import PropTypes from "prop-types";

export default function Input({ placeholder, inputType, inputName, onChange }) {
  const handleChange = (e) => {
    onChange(e.target.dataset.name, e.target.value);
  };

  return (
    <input
      className='px-3 py-1 mb-2 rounded'
      type={inputType}
      placeholder={placeholder}
      onChange={handleChange}
      data-name={inputName}
    />
  );
}

Input.propTypes = {
  inputType: PropTypes.string,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
  inputName: PropTypes.string,
  onChange: PropTypes.func,
};
