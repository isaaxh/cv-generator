import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { inputName } = this.props;
    return <input className='' placeholder={inputName} />;
  }
}

export default Input;
