import React, { Component } from "react";
import PropTypes from "prop-types";

class Input extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  static get propTypes() {
    return {
      children: PropTypes.any,
      placeholder: PropTypes.string,
      inputType: PropTypes.string,
      handlePersonalChange: PropTypes.func,
    };
  }

  handleChange(event) {
    this.props.handlePersonalChange(event.target.value);
  }

  render() {
    const { placeholder, inputType } = this.props;
    return (
      <input
        type={inputType}
        className='px-3 py-1 mb-2 rounded'
        placeholder={placeholder}
        onChange={this.handleChange}
      />
    );
  }
}

export default Input;
