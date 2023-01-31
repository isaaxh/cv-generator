import React, { Component } from "react";
import Input from "./Input";

class PersonalInformation extends Component {
  render() {
    return (
      <div className='flex flex-col '>
        <h1 className='text-xl font-medium mb-4'>Personal Information</h1>
        <Input inputName='First name' />
        <Input inputName='Last name' />
        <Input inputName='Title' />
        <Input inputName='Photo' />
        <Input inputName='Address' />
        <Input inputName='Phone number' />
        <Input inputName='Email' />

        <textarea
          className='px-3 py-1 mb-2 rounded resize-y'
          name='description'
          id='description'
          cols='30'
          rows='3'
          placeholder='Description'
        ></textarea>
      </div>
    );
  }
}

export default PersonalInformation;
