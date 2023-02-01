import React, { Component } from "react";
import CvTemplate from "./Mainbody/CvTemplate";
import InputForm from "./Mainbody/InputForm";

export default class MainBody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personal: {
        firstName: "",
        lastName: "",
        title: "",
      },
    };
  }

  handlePersonalChange = (newValue) => {
    this.setState({ ...this.state, personal: { firstName: newValue } });
    console.log(this.state.personal.firstName);
  };

  render() {
    const { firstName, lastName, title } = this.state;
    return (
      <div
        className='bg-zinc-300 p-16 flex flex-col gap-24 lg:flex-row 
                          md:justify-between h-fit-content lg:px-32'
      >
        <InputForm
          firstName={firstName}
          lastName={lastName}
          title={title}
          onChange={this.handlePersonalChange}
        />
        <CvTemplate />
      </div>
    );
  }
}
