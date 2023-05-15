import React, { useContext } from "react";
import EduInstance from "./Instances/EduInstance";
import ExpInstance from "./Instances/ExpInstance";
import MainBodyContext from "../../MainBodyContext";

export default function MainBodyCv() {
  const { statePersonal, expInstances, eduInstances, handleRetrieveInstance } =
    useContext(MainBodyContext);
  const { description } = statePersonal;

  return (
    <div
      className='col-span-2 row-span-5 p-5 [&>div]:mb-5 [&>div>hr]:border-solid 
    [&>div>hr]:border-1 [&>div>hr]:border-gray-300 [&>div>h2]:text-blue-900 
  [&>div>h2]:text-md [&>div>h2]:font-semibold [&>div>hr]:pb-2'
    >
      <div>
        <h2>Description</h2>
        <hr />
        <p className='text-gray-600 break-all'>
          {description.length > 0 ? description : null}
          {/* lorem ipsum dolor sit amet, consectetur lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor */}
        </p>
      </div>
      <div>
        <h2>Experience</h2>
        <hr />
        {expInstances.length > 0
          ? expInstances.map((instance) => {
              return (
                <ExpInstance
                  key={instance.key}
                  stateObject={instance}
                  position={instance.position}
                  companyName={instance.company}
                  cityName={instance.cityExp}
                  from={instance.fromExp}
                  to={instance.toExp}
                  handleRetrieve={handleRetrieveInstance}
                />
              );
            })
          : null}
      </div>
      <div>
        <h2>Education</h2>
        <hr />
        {eduInstances.length > 0
          ? eduInstances.map((instance) => {
              return (
                <EduInstance
                  key={instance.key}
                  stateObject={instance}
                  id={instance.key}
                  uniName={instance.uniName}
                  cityName={instance.cityEdu}
                  degreeName={instance.degree}
                  subjectName={instance.subject}
                  from={instance.fromEdu}
                  to={instance.toEdu}
                  handleRetrieve={handleRetrieveInstance}
                />
              );
            })
          : null}
      </div>
    </div>
  );
}
