import React, { useContext } from "react";
import MainBodyContext from "../MainBodyContext";
import imgPlaceholder from "../../../imgs/img-placeholder.jpeg";

export default function SideSectionCv() {
  const { statePersonal } = useContext(MainBodyContext);
  const { address, phone, email, imgUrl } = statePersonal;

  return (
    <div className='bg-gray-200 [&>h3]:font-medium row-span-5 flex flex-col p-5 [&>p]:text-gray-600 [&>p]:mb-2 '>
      <img
        className='pb-5'
        src={imgUrl.length > 0 ? imgUrl : imgPlaceholder}
        alt='imgs'
      />
      <h2 className='font-bold truncate'>Personal Details</h2>
      <hr className='border-solid border-1 border-gray-400 pb-5' />
      <h3 className='truncate'>Address</h3>
      <p className='break-all'>
        {address.length > 0
          ? address
          : "Lorem ipsum dolor sit, amet consectetur lorem"}
      </p>
      <h3 className='truncate'>Phone number</h3>
      <p className='break-all'>{phone.length > 0 ? phone : "0123456789"}</p>
      <h3 className='truncate'>Email</h3>
      <p className='break-all'>
        {email.length > 0 ? email : "email@gmail.com"}
      </p>
    </div>
  );
}
