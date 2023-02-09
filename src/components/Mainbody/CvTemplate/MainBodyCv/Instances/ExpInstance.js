import React, { Component } from "react";
import PropTypes from "prop-types";

class ExpInstance extends Component {
  constructor(props) {
    super(props);
  }

  static get propTypes() {
    return {
      children: PropTypes.any,
      from: PropTypes.string,
      to: PropTypes.string,
      position: PropTypes.string,
      companyName: PropTypes.string,
      cityName: PropTypes.string,
    };
  }

  render() {
    const { position, companyName, cityName, from, to } = this.props;
    return (
      <div className='flex mb-2'>
        <div className='w-28 pr-5 [&>span]:font-medium'>
          <span>{from}</span> - <span>{to}</span>
        </div>
        <div>
          <div className='font-medium'>{position}</div>
          <div className='text-gray-600'>
            {companyName}, {cityName}
          </div>
        </div>
      </div>
    );
  }
}

export default ExpInstance;
