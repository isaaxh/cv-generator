import React, { Component } from "react";
// import Input from "./Input";

class PersonalInformation extends Component {
  render() {
    return (
      <>
        <h1 className='text-xl font-medium'>Personal Information</h1>
        {/* <Input inputName='First name' /> */}

        {/* <input type='text' placeholder='First name' />
        <input type='text' placeholder='Last name' />
        <input type='text' placeholder='Title' />
        <input type='text' placeholder='Photo' />
        <input type='text' placeholder='Address' />
        <input type='text' placeholder='Phone number' />
        <input type='text' placeholder='Email' /> */}
        <textarea
          name='description'
          id='description'
          cols='30'
          rows='10'
          placeholder='description'
        ></textarea>
      </>
    );
  }
}

export default PersonalInformation;
