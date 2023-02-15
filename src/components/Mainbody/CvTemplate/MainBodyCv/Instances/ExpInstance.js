import React from "react";
import PropTypes from "prop-types";

export default function ExpInstance({
  position,
  companyName,
  cityName,
  from,
  to,
}) {
  return (
    <div className='flex mb-2'>
      <div className='w-28 pr-5 [&>span]:font-medium truncate'>
        <span>{from}</span> - <span>{to}</span>
      </div>
      <div className='truncate'>
        <div className='font-medium'>{position}</div>
        <div className='text-gray-600'>
          {companyName}, {cityName}
        </div>
      </div>
    </div>
  );
}

ExpInstance.propTypes = {
  children: PropTypes.any,
  from: PropTypes.string,
  to: PropTypes.string,
  position: PropTypes.string,
  companyName: PropTypes.string,
  cityName: PropTypes.string,
};
