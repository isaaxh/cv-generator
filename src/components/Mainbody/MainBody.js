import React, { Component } from "react";
import CvTemplate from "./../Mainbody/CvTemplate/CvTemplate";
import InputForm from "./../Mainbody/InputForm/InputForm";

export default class MainBody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personal: {
        inputName: "",
        firstName: "",
        lastName: "",
        title: "",
      },
      experience: {},
      education: {},
    };
  }

  handlePersonalChange = (newValue) => {
    // console.log(this.state.personal.inputName);
    switch (this.state.personal.inputName) {
      case "fName":
        this.setState({ ...this.state, personal: { firstName: newValue } });
        break;
      case "lName":
        // code block
        break;
      case "title":
        // code block
        break;
    }
  };

  render() {
    const { inputName, firstName } = this.state.personal;
    return (
      <div
        className='bg-zinc-300 p-16 flex flex-col gap-24 lg:flex-row 
                          md:justify-between h-fit-content lg:px-32'
      >
        <InputForm {...{ inputName }} onChange={this.handlePersonalChange} />
        <CvTemplate {...{ firstName }} />
      </div>
    );
  }
}
