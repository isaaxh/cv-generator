import React, { Component } from "react";
import PropTypes from "prop-types";
import PersonalInformation from "./PersonalInformation";
import Experience from "./Experience";
import Education from "./Education";
import Button from "./commonComponents/Button";

export default class InputForm extends Component {
  constructor(props) {
    super(props);
  }

  static get propTypes() {
    return {
      children: PropTypes.any,
      inputName: PropTypes.string,
      onChange: PropTypes.func,
    };
  }

  render() {
    const { inputName } = this.props;
    return (
      <div className='bg-zinc-100 flex-1 shadow-2xl rounded p-5 h-auto max-w-4xl h-fit-content lg:p-9 '>
        <section className='mb-7'>
          <PersonalInformation
            {...{ inputName }}
            onChange={this.props.onChange}
          />
        </section>
        <section className='mb-7'>
          <Experience title='Experience' />
        </section>
        <section className='mb-7'>
          <Education title='Education' />
        </section>
        <div className='flex flex-col'>
          <Button
            buttonName='Generate PDF'
            bgColor='bg-green-600'
            hoverColor='hover:bg-green-700'
          />
          <Button
            buttonName='Load example'
            bgColor='bg-orange-600'
            hoverColor='hover:bg-orange-700'
          />
          <Button
            buttonName='Reset'
            bgColor='bg-red-600'
            hoverColor='hover:bg-red-700'
          />
        </div>
      </div>
    );
  }
}
