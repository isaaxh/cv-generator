import React, { Component } from "react";

class HeaderCv extends Component {
  render() {
    return (
      <div className='bg-blue-900 [&>*]:text-white col-span-3 flex flex-col justify-center p-6'>
        <div className='lg:flex [&>*]:text-6xl [&>*]:font-bold'>
          <h1>FIRST</h1>
          <h1>LAST</h1>
        </div>
        <h2 className='text-2xl'>Software Engineer</h2>
      </div>
    );
  }
}

export default HeaderCv;
