import React, { useContext } from "react";
import Input from "./commonComponents/Input";
import Button from "./commonComponents/Button";
import MainBodyContext from "../MainBodyContext";

export default function Education() {
  const { handleEduChange } = useContext(MainBodyContext);
  return (
    <div className='flex flex-col'>
      <h1 className='text-xl font-medium mb-4'>Education</h1>
      <Input
        inputType='text'
        placeholder='University name'
        inputName='uniName'
        onChange={handleEduChange}
      />
      <Input
        inputType='text'
        placeholder='City'
        inputName='cityEdu'
        onChange={handleEduChange}
      />
      <Input
        inputType='text'
        placeholder='Degree'
        inputName='degree'
        onChange={handleEduChange}
      />
      <Input
        inputType='text'
        placeholder='Subject'
        inputName='subject'
        onChange={handleEduChange}
      />
      <Input
        inputType='number'
        min='1900'
        max='2099'
        step='1'
        value='2023'
        placeholder='From'
        inputName='fromEdu'
        onChange={handleEduChange}
      />
      <Input
        inputType='number'
        min='1900'
        max='2099'
        step='1'
        value='2023'
        placeholder='To'
        inputName='toEdu'
        onChange={handleEduChange}
      />

      <Button
        buttonName='Delete'
        bgColor='bg-zinc-800'
        hoverColor='hover:bg-zinc-600'
      />
      <Button
        buttonName='Add'
        bgColor='bg-zinc-800'
        hoverColor='hover:bg-zinc-600'
      />
    </div>
  );
}
