import React, { Component } from "react";

class Instance extends Component {
  render() {
    return (
      <div className='flex mb-2'>
        <div className='w-28 pr-5 [&>span]:font-medium'>
          <span>From -</span>
          <span> To</span>
        </div>
        <div>
          <div className='font-medium'>Software Engineer</div>
          <div className='text-gray-600'>
            <span>Facebook ,</span>
            <span>Mecca</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Instance;
