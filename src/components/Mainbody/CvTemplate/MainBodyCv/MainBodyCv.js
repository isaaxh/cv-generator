import React, { useContext } from "react";
import EduInstance from "./Instances/EduInstance";
import ExpInstance from "./Instances/ExpInstance";
import MainBodyContext from "../../MainBodyContext";

export default function MainBodyCv() {
  const { statePersonal, stateEducation, expInstances } =
    useContext(MainBodyContext);
  const { description } = statePersonal;
  const { uniName, cityEdu, degree, subject, fromEdu, toEdu } = stateEducation;
  // const { position, company, cityExp, fromExp, toExp } = stateExperience;

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
          {description.length > 0 ? description : "-"}
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
                  position={instance.position}
                  companyName={instance.company}
                  cityName={instance.cityExp}
                  from={instance.fromExp}
                  to={instance.toExp}
                />
              );
            })
          : null}
      </div>
      <div>
        <h2>Education</h2>
        <hr />
        <EduInstance
          uniName={uniName}
          cityName={cityEdu}
          degreeName={degree}
          subjectName={subject}
          from={fromEdu}
          to={toEdu}
        />
      </div>
    </div>
  );
}
