import React, { Component } from 'react'
import CvTemplate from './CvTemplate'
import InputForm from './InputForm'

export default class MainBody extends Component {
  render() {
    return (
      <div className='lg:px-32'>
        <InputForm />
        <CvTemplate />
      </div>
    )
  }
}
