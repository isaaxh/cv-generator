import React, { Component } from "react";
import PersonalInformation from "./PersonalInformation";
import Experience from "./Education";

export default class InputForm extends Component {
  render() {
    return (
      <div className='bg-zinc-100 flex-1 shadow-2xl rounded p-5 h-auto max-w-4xl h-fit-content lg:p-9 '>
        <section className='mb-5'>
          <PersonalInformation />
        </section>
        <section className='mb-5'>
          <Experience title='Experience' />
        </section>
        <section className='mb-5'>
          {/* <InformationForm title='Education' /> */}
        </section>
      </div>
    );
  }
}
