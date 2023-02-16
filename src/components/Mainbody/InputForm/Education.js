import React, { useContext } from "react";
import Input from "./commonComponents/Input";
import Button from "./commonComponents/Button";
import MainBodyContext from "../MainBodyContext";

export default function Education() {
  const { handleEduChange, stateEducation, handleAddingInstance } =
    useContext(MainBodyContext);
  return (
    <div className='flex flex-col'>
      <h1 className='text-xl font-medium mb-4'>Education</h1>
      <Input
        inputType='text'
        placeholder='University name'
        inputName='uniName'
        inputValue={stateEducation.uniName}
        onChange={handleEduChange}
      />
      <Input
        inputType='text'
        placeholder='City'
        inputName='cityEdu'
        inputValue={stateEducation.cityEdu}
        onChange={handleEduChange}
      />
      <Input
        inputType='text'
        placeholder='Degree'
        inputName='degree'
        inputValue={stateEducation.degree}
        onChange={handleEduChange}
      />
      <Input
        inputType='text'
        placeholder='Subject'
        inputName='subject'
        inputValue={stateEducation.subject}
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
        inputValue={stateEducation.fromEdu}
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
        inputValue={stateEducation.toEdu}
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
        onClick={handleAddingInstance}
        instanceObject={stateEducation}
        arrayName='edu'
      />
    </div>
  );
}
