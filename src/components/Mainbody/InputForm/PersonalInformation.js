import React, { Component } from "react";
import PropTypes from "prop-types";
import Input from "./commonComponents/Input";

class PersonalInformation extends Component {
  constructor(props) {
    super(props);
  }

  static get propTypes() {
    return {
      children: PropTypes.any,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      title: PropTypes.string,
      handlePersonalChange: PropTypes.func,
    };
  }

  render() {
    const { firstName, lastName, title, handlePersonalChange } = this.props;
    return (
      <div className='flex flex-col '>
        <h1 className='text-xl font-medium mb-4'>Personal Information</h1>
        <Input
          inputType='text'
          placeholder='First name'
          value={firstName}
          onChange={handlePersonalChange}
        />
        <Input inputType='text' placeholder='Last name' inputValue={lastName} />
        <Input inputType='text' placeholder='Title' inputValue={title} />
        <label
          className='px-3 py-1 mb-2 rounded cursor-pointer bg-white text-gray-400'
          htmlFor='img'
        >
          Photo
        </label>
        <input className='hidden' id='img' type='file' />
        <Input inputType='text' inputName='Address' />
        <Input inputType='number' inputName='Phone number' />
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
