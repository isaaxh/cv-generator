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
    this.context.state.inputName = e.target.dataset.name;
    this.props.onChange(event.target.value);
  };

  render() {
    const { placeholder, inputType, inputName } = this.props;
    return (
      <input
        className='px-3 py-1 mb-2 rounded'
        type={inputType}
        placeholder={placeholder}
        onChange={this.handleChange}
        data-name={inputName}
      />
    );
  }
}

export default Input;
