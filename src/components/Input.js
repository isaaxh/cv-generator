import React, { Component } from "react";
import PropTypes from "prop-types";

class Input extends Component {
  constructor(props) {
    super(props);
  }

  static get propTypes() {
    return {
      children: PropTypes.any,
      inputName: PropTypes.string,
    };
  }

  render() {
    const { inputName } = this.props;
    return <input className='px-3 py-1 mb-2 rounded' placeholder={inputName} />;
  }
}

export default Input;
