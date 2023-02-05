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
        photo: "",
        address: "",
        phone: "",
        email: "",
        description: "",
      },
      experience: {},
      education: {},
    };
  }

  handlePersonalChange = (newValue) => {
    const { inputName, personal } = this.state;
    switch (inputName) {
      case "fName":
        this.setState({ personal: { ...personal, firstName: newValue } });
        break;
      case "lName":
        this.setState({ personal: { ...personal, lastName: newValue } });
        break;
      case "title":
        this.setState({ personal: { ...personal, title: newValue } });
        break;
      case "address":
        this.setState({ personal: { ...personal, address: newValue } });
        break;
      case "phone":
        this.setState({ personal: { ...personal, phone: newValue } });
        break;
      case "email":
        this.setState({ personal: { ...personal, email: newValue } });
        break;
      case "description":
        this.setState({ personal: { ...personal, description: newValue } });
        break;
    }
  };

  render() {
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
          <CvTemplate />
        </div>
      </MainBodyContext.Provider>
    );
  }
}
