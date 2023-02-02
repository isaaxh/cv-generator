import React, { Component } from "react";
import PropTypes from "prop-types";

class HeaderCv extends Component {
  constructor(props) {
    super(props);
  }

  static get propTypes() {
    return {
      children: PropTypes.any,
      firstName: PropTypes.string,
    };
  }

  render() {
    const { firstName } = this.props;
    return (
      <div className='bg-blue-900 [&>*]:text-white col-span-3 flex flex-col justify-center p-6'>
        <div className='lg:flex [&>*]:text-6xl [&>*]:font-bold'>
          <h1>{firstName}</h1>
          <h1>Last</h1>
        </div>
        <h2 className='text-2xl'>software Engineer</h2>
      </div>
    );
  }
}

export default HeaderCv;
