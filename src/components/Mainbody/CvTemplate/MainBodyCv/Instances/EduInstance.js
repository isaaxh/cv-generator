import React, { Component } from "react";
import PropTypes from "prop-types";

class Instance extends Component {
  constructor(props) {
    super(props);
  }

  static get propTypes() {
    return {
      children: PropTypes.any,
      from: PropTypes.string,
      to: PropTypes.string,
      uniName: PropTypes.string,
      degreeName: PropTypes.string,
      subjectName: PropTypes.string,
      title: PropTypes.string,
      company: PropTypes.string,
      cityName: PropTypes.string,
    };
  }

  render() {
    const { uniName, degreeName, subjectName, cityName, from, to } = this.props;
    return (
      <div className='flex mb-2'>
        <div className='w-28 pr-5 [&>span]:font-medium'>
          <span>{from}</span> - <span>{to}</span>
        </div>
        <div>
          <div className='font-medium'>
            {uniName}, {cityName}
          </div>
          <div className='text-gray-600'>
            <div>Degree: {degreeName}</div>
            <div>Subject: {subjectName}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Instance;
