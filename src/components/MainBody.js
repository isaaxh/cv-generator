import React, { Component } from "react";
import CvTemplate from "./CvTemplate";
import InputForm from "./InputForm";

export default class MainBody extends Component {
  render() {
    return (
      <div
        className='bg-zinc-300 p-16 flex flex-col gap-24 lg:flex-row 
                          md:justify-between h-screen lg:px-32'
      >
        <InputForm />
        <CvTemplate />
      </div>
    );
  }
}
