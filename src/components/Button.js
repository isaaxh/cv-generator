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
    };
  }

  render() {
    const { buttonName } = this.props;
    return (
      <button className='bg-zinc-800 text-white px-3 py-2 mb-2 rounded'>
        {buttonName}
      </button>
    );
  }
}

export default Button;
