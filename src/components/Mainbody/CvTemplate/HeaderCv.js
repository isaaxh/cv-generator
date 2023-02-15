import React, { useContext } from "react";
import MainBodyContext from "../MainBodyContext";

export default function HeaderCv() {
  const { statePersonal } = useContext(MainBodyContext);
  const { firstName, lastName, title } = statePersonal;

  return (
    <div className='bg-blue-900 [&>*]:text-white col-span-3 flex flex-col justify-center p-6'>
      <div className='flex [&>*]:text-6xl [&>*]:font-bold truncate'>
        <span>
          {firstName.length > 0 ? <h1>{firstName}</h1> : <h1>First</h1>}
        </span>
        &nbsp; &nbsp;
        <span className='break-words'>
          {lastName.length > 0 ? <h1>{lastName}</h1> : <h1>Last</h1>}
        </span>
      </div>
      <h2 className='text-2xl'>
        {title.length > 0 ? title : "Software Engineer"}
      </h2>
    </div>
  );
}
