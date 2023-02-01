import React, { Component } from "react";
import profilePic from "../imgs/isaacPic.png";

class SideSectionCv extends Component {
  render() {
    return (
      <div className='bg-gray-200 [&>h3]:font-medium row-span-5 flex flex-col p-5 [&>p]:text-gray-600 [&>p]:mb-2 '>
        <img className='pb-5' src={profilePic} alt='imgs' />
        <h2 className='font-bold'>Personal Details</h2>
        <hr className='border-solid border-1 border-gray-400 pb-5' />
        <h3>Address</h3>
        <p>Lorem ipsum dolor sit, amet consectetur lorem</p>
        <h3>Phone number</h3>
        <p>1234567890</p>
        <h3>Email</h3>
        <p>email@gmail.com</p>
      </div>
    );
  }
}

export default SideSectionCv;
