import React, { useContext } from "react";
import MainBodyContext from "../MainBodyContext";
import Input from "./commonComponents/Input";

export default function PersonalInformation() {
  const { handlePerChange, handleFileChange, statePersonal } =
    useContext(MainBodyContext);

  const handleDesChange = (e) => {
    handlePerChange("description", e.target.value);
  };

  return (
    <div className='flex flex-col '>
      <h1 className='text-xl font-medium mb-4'>Personal Information</h1>
      <Input
        inputType='text'
        placeholder='First name'
        inputValue={statePersonal.firstName}
        inputName='firstName'
        onChange={handlePerChange}
      />
      <Input
        inputType='text'
        placeholder='Last name'
        inputName='lastName'
        inputValue={statePersonal.lastName}
        onChange={handlePerChange}
      />
      <Input
        inputType='text'
        placeholder='Title'
        inputName='title'
        inputValue={statePersonal.title}
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
        inputValue={statePersonal.address}
        onChange={handlePerChange}
      />
      <Input
        inputType='number'
        placeholder='Phone number'
        inputName='phone'
        inputValue={statePersonal.phone}
        onChange={handlePerChange}
      />
      <Input
        inputType='email'
        placeholder='Email'
        inputName='email'
        inputValue={statePersonal.email}
        onChange={handlePerChange}
      />
      <textarea
        className='px-3 py-1 mb-2 rounded resize-y'
        name='description'
        id='description'
        cols='30'
        rows='3'
        placeholder='Description'
        value={statePersonal.description}
        onChange={handleDesChange}
      ></textarea>
    </div>
  );
}
