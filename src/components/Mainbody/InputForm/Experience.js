import React, { Component } from "react";
import Input from "./commonComponents/Input";
import Button from "./commonComponents/Button";
import MainBodyContext from "../MainBodyContext";

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  static contextType = MainBodyContext;

  render() {
    const { handleExpChange } = this.context;
    return (
      <div className='flex flex-col'>
        <h1 className='text-xl font-medium mb-4'>Experience</h1>
        <Input
          inputType='text'
          placeholder='Position'
          inputName='position'
          onChange={handleExpChange}
        />
        <Input
          inputType='text'
          placeholder='Company'
          inputName='company'
          onChange={handleExpChange}
        />
        <Input
          inputType='text'
          placeholder='City'
          inputName='cityExp'
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
          onChange={handleExpChange}
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
}

export default Experience;
