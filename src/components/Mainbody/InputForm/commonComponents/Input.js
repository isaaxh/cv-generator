import React, { Component } from "react";
import MainBodyContext from "../../MainBodyContext";
import PropTypes from "prop-types";

class Input extends Component {
  constructor(props) {
    super(props);
  }

  static contextType = MainBodyContext;

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
    switch (e.target.dataset.name) {
      case "fName":
        this.context.state.inputName = e.target.dataset.name;
        this.props.onChange(event.target.value);
        break;
      case "lName":
        this.context.state.inputName = e.target.dataset.name;
        console.log(this.context.state.inputName);
        this.props.onChange(event.target.value);
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
