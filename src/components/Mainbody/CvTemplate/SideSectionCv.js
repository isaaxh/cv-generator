import React, { Component } from "react";
import MainBodyContext from "../MainBodyContext";
import imgPlaceholder from "../../../imgs/img-placeholder.jpeg";

class SideSectionCv extends Component {
  static contextType = MainBodyContext;

  render() {
    const { address, phone, email, imgUrl } = this.context.state.personal;
    return (
      <div className='bg-gray-200 [&>h3]:font-medium row-span-5 flex flex-col p-5 [&>p]:text-gray-600 [&>p]:mb-2 '>
        <img
          className='pb-5'
          src={imgUrl.length > 0 ? imgUrl : imgPlaceholder}
          alt='imgs'
        />
        <h2 className='font-bold'>Personal Details</h2>
        <hr className='border-solid border-1 border-gray-400 pb-5' />
        <h3>Address</h3>
        <p>
          {address.length > 0
            ? address
            : "Lorem ipsum dolor sit, amet consectetur lorem"}
        </p>
        <h3>Phone number</h3>
        <p>{phone.length > 0 ? phone : "0123456789"}</p>
        <h3>Email</h3>
        <p>{email.length > 0 ? email : "email@gmail.com"}</p>
      </div>
    );
  }
}

export default SideSectionCv;
