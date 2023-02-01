import React, { Component } from "react";
import PropTypes from "prop-types";
import Input from "./commonComponents/Input";
import Button from "./commonComponents/Button";

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  static get propTypes() {
    return {
      children: PropTypes.any,
      title: PropTypes.string,
    };
  }

  render() {
    const { title } = this.props;
    return (
      <div className='flex flex-col'>
        <h1 className='text-xl font-medium mb-4'>{title}</h1>
        <Input inputType='text' inputName='Position' />
        <Input inputType='text' inputName='Company' />
        <Input inputType='text' inputName='City' />
        <Input inputType='date' inputName='From' />
        <Input inputType='date' inputName='To' />
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
