import React from "react";
import PropTypes from "prop-types";

export default function EduInstance({
  id,
  uniName,
  degreeName,
  subjectName,
  cityName,
  from,
  to,
  handleDelete,
}) {
  const handleClick = () => {
    handleDelete(id, "edu");
  };
  return (
    <div className='flex mb-2 hover:bg-gray-200' onClick={handleClick}>
      <div className='w-28 pr-5 [&>span]:font-medium truncate'>
        <span>{from}</span> - <span>{to}</span>
      </div>
      <div className='truncate'>
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

EduInstance.propTypes = {
  children: PropTypes.any,
  id: PropTypes.number,
  from: PropTypes.string,
  to: PropTypes.string,
  uniName: PropTypes.string,
  degreeName: PropTypes.string,
  subjectName: PropTypes.string,
  title: PropTypes.string,
  company: PropTypes.string,
  cityName: PropTypes.string,
  handleDelete: PropTypes.func,
};
