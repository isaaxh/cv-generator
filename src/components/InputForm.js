import React, { Component } from "react";
import InfoForm from "./InfoForm";
import PersonalInformation from "./PersonalInformation";

export default class InputForm extends Component {
  render() {
    return (
      <div className='bg-zinc-100 flex-1 shadow-2xl rounded p-5 h-auto max-w-4xl h-fit-content lg:p-9 '>
        <section className=''>
          <PersonalInformation />
        </section>
        <section>
          <InfoForm />
        </section>
        <section>
          <InfoForm />
        </section>
      </div>
    );
  }
}
