import React from "react";
import PropTypes from "prop-types";

export default function ExpInstance({
  stateObject,
  position,
  companyName,
  cityName,
  from,
  to,
  handleRetrieve,
}) {
  const handleClick = (instanceType, instanceObject) => {
    handleRetrieve(instanceType, instanceObject);
  };

  return (
    <div
      className='flex mb-2 hover:bg-gray-200'
      onClick={() => handleClick("exp", stateObject)}
    >
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
  stateObject: PropTypes.object,
  from: PropTypes.string,
  to: PropTypes.string,
  position: PropTypes.string,
  companyName: PropTypes.string,
  cityName: PropTypes.string,
  handleRetrieve: PropTypes.func,
};
