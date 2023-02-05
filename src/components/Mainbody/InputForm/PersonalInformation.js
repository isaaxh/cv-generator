import React, { Component } from "react";
import MainBodyContext from "../MainBodyContext";
import Input from "./commonComponents/Input";

class PersonalInformation extends Component {
  constructor(props) {
    super(props);
  }

  static contextType = MainBodyContext;

  handleDesChange = (e) => {
    this.context.state.inputName = "description";
    this.context.handlePerChange(e.target.value);
  };

  render() {
    const { handlePerChange, handleFileChange } = this.context;
    return (
      <div className='flex flex-col '>
        <h1 className='text-xl font-medium mb-4'>Personal Information</h1>
        <Input
          inputType='text'
          placeholder='First name'
          inputName='fName'
          onChange={handlePerChange}
        />
        <Input
          inputType='text'
          placeholder='Last name'
          inputName='lName'
          onChange={handlePerChange}
        />
        <Input
          inputType='text'
          placeholder='Title'
          inputName='title'
          onChange={handlePerChange}
        />
        <label
          className='px-3 py-1 mb-2 rounded cursor-pointer bg-white text-gray-400'
          htmlFor='img'
        >
          Photo
        </label>
        <input
          className='hidden'
          id='img'
          type='file'
          onChange={handleFileChange}
        />
        <Input
          inputType='text'
          placeholder='Address'
          inputName='address'
          onChange={handlePerChange}
        />
        <Input
          inputType='number'
          placeholder='Phone number'
          inputName='phone'
          onChange={handlePerChange}
        />
        <Input
          inputType='email'
          placeholder='Email'
          inputName='email'
          onChange={handlePerChange}
        />
        <textarea
          className='px-3 py-1 mb-2 rounded resize-y'
          name='description'
          id='description'
          cols='30'
          rows='3'
          placeholder='Description'
          onChange={this.handleDesChange}
        ></textarea>
      </div>
    );
  }
}

export default PersonalInformation;
