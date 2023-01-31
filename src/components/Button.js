import React, { Component } from "react";
import PropTypes from "prop-types";

class Button extends Component {
  constructor(props) {
    super(props);
  }

  static get propTypes() {
    return {
      children: PropTypes.any,
      buttonName: PropTypes.string,
      bgColor: PropTypes.string,
      hoverColor: PropTypes.string,
    };
  }

  render() {
    const { buttonName, bgColor, hoverColor } = this.props;
    return (
      <button
        className={`${bgColor} ${hoverColor} text-white px-3 py-2 mb-2 rounded`}
      >
        {buttonName}
      </button>
    );
  }
}

export default Button;
