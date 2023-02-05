import React, { Component } from "react";
import MainBodyContext from "./MainBodyContext";
import CvTemplate from "./../Mainbody/CvTemplate/CvTemplate";
import InputForm from "./../Mainbody/InputForm/InputForm";

export default class MainBody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputName: "",
      personal: {
        firstName: "",
        lastName: "",
        title: "",
      },
      experience: {},
      education: {},
    };
  }

  handlePersonalChange = (newValue) => {
    // console.log(this.state.inputName);
    switch (this.state.inputName) {
      case "fName":
        this.setState({ ...this.state, personal: { firstName: newValue } });
        break;
      case "lName":
        this.setState({ ...this.state, personal: { lastName: newValue } });
        break;
      case "title":
        this.setState({ ...this.state, personal: { title: newValue } });
        break;
    }
  };

  render() {
    const { firstName } = this.state.personal;
    const { handlePersonalChange } = this;
    return (
      <MainBodyContext.Provider
        value={{
          state: this.state,
          handlePerChange: handlePersonalChange,
        }}
      >
        <div
          className='bg-zinc-300 p-16 flex flex-col gap-24 lg:flex-row 
                          md:justify-between h-fit-content lg:px-32'
        >
          <InputForm />
          <CvTemplate {...{ firstName }} />
        </div>
      </MainBodyContext.Provider>
    );
  }
}
