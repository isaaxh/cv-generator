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
      title: PropTypes.string,
      company: PropTypes.string,
      city: PropTypes.string,
    };
  }

  render() {
    const { from, to, title, company, city } = this.props;
    return (
      <div className='flex mb-2'>
        <div className='w-28 pr-5 [&>span]:font-medium'>
          <span>{from}</span> - <span>{to}</span>
        </div>
        <div>
          <div className='font-medium'>{title}</div>
          <div className='text-gray-600'>
            `<span>{company}</span>
            <span>{city}</span>``
          </div>
        </div>
      </div>
    );
  }
}

export default Instance;
