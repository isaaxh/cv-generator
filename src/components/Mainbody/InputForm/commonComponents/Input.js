import React, { Component } from "react";
import PropTypes from "prop-types";

class Input extends Component {
  constructor(props) {
    super(props);
  }

  static get propTypes() {
    return {
      children: PropTypes.any,
      placeholder: PropTypes.string,
      inputType: PropTypes.string,
      inputName: PropTypes.string,
      onChange: PropTypes.func,
    };
  }

  handleChange = (e) => {
    this.props.inputName = e.target.dataset.name;
    console.log(this.props.inputName);
    switch (e.target.dataset.name) {
      case "fName":
        this.props.onChange(event.target.value);
        break;
      case "lName":
        console.trace(this.props.onChange(event.target.value));
        break;
      case "title":
        console.trace(console.log("title"));
        break;
    }
  };

  render() {
    const { placeholder, inputType, inputName } = this.props;
    return (
      <input
        type={inputType}
        className='px-3 py-1 mb-2 rounded'
        placeholder={placeholder}
        onChange={this.handleChange}
        data-name={inputName}
      />
    );
  }
}

export default Input;
