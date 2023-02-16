import React, { useContext } from "react";
import Input from "./commonComponents/Input";
import Button from "./commonComponents/Button";
import MainBodyContext from "../MainBodyContext";

export default function Experience() {
  const {
    handleExpChange,
    handleAddingInstance,
    handleDeleteInstance,
    stateExperience,
  } = useContext(MainBodyContext);
  return (
    <div className='flex flex-col'>
      <h1 className='text-xl font-medium mb-4'>Experience</h1>
      <Input
        inputType='text'
        placeholder='Position'
        inputName='position'
        inputValue={stateExperience.position}
        onChange={handleExpChange}
      />
      <Input
        inputType='text'
        placeholder='Company'
        inputName='company'
        inputValue={stateExperience.company}
        onChange={handleExpChange}
      />
      <Input
        inputType='text'
        placeholder='City'
        inputName='cityExp'
        inputValue={stateExperience.cityExp}
        onChange={handleExpChange}
      />
      <Input
        inputType='number'
        min='1900'
        max='2099'
        step='1'
        value='2023'
        placeholder='From'
        inputName='fromExp'
        inputValue={stateExperience.fromExp}
        onChange={handleExpChange}
      />
      <Input
        inputType='number'
        min='1900'
        max='2099'
        step='1'
        value='2023'
        placeholder='To'
        inputName='toExp'
        inputValue={stateExperience.toExp}
        onChange={handleExpChange}
      />
      <Button
        buttonName='Delete'
        bgColor='bg-zinc-800'
        hoverColor='hover:bg-zinc-600'
        instanceDeleteObject={stateExperience}
        onClick={handleDeleteInstance}
        arrayName='exp'
      />
      <Button
        buttonName='Add'
        bgColor='bg-zinc-800'
        hoverColor='hover:bg-zinc-600'
        onClick={handleAddingInstance}
        instanceAddObject={stateExperience}
        arrayName='exp'
      />
    </div>
  );
}
