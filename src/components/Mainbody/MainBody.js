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
        imgUrl: "",
        address: "",
        phone: "",
        email: "",
        description: "",
      },
      experience: {},
      education: {
        uniName: "",
        city: "",
        degree: "",
        subject: "",
        from: "",
        to: "",
      },
    };
  }

  handlePersonalChange = (newValue) => {
    const { inputName, personal } = this.state;
    this.setState({ personal: { ...personal, [inputName]: newValue } });
  };

  handleFileChange = (e) => {
    const { personal } = this.state;
    this.setState({
      personal: { ...personal, imgUrl: URL.createObjectURL(e.target.files[0]) },
    });
  };

  handleEducationChange = (newValue) => {
    const { inputName, education } = this.state;
    this.setState({ education: { ...education, [inputName]: newValue } });
  };

  render() {
    const { handlePersonalChange, handleFileChange, handleEducationChange } =
      this;
    return (
      <MainBodyContext.Provider
        value={{
          state: this.state,
          handlePerChange: handlePersonalChange,
          handleFileChange: handleFileChange,
          handleEduChange: handleEducationChange,
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
