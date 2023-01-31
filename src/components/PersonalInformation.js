import React, { Component } from "react";
import Input from "./Input";

class PersonalInformation extends Component {
  render() {
    return (
      <div className='flex flex-col '>
        <h1 className='text-xl font-medium mb-4'>Personal Information</h1>
        <Input inputType='text' inputName='First name' />
        <Input inputType='text' inputName='Last name' />
        <Input inputType='text' inputName='Title' />
        <label
          className='px-3 py-1 mb-2 rounded cursor-pointer bg-white text-gray-400'
          htmlFor='img'
        >
          Photo
        </label>
        <input className='hidden' id='img' type='file' />
        {/* <Input inputType='file' inputName='Photo' /> */}
        <Input inputType='text' inputName='Address' />
        <Input inputType='text' inputName='Phone number' />
        <Input inputType='email' inputName='Email' />
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
