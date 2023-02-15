import React, { useContext } from "react";
import EduInstance from "./Instances/EduInstance";
import ExpInstance from "./Instances/ExpInstance";
import MainBodyContext from "../../MainBodyContext";

export default function MainBodyCv() {
  const { statePersonal, stateEducation, stateExperience } =
    useContext(MainBodyContext);
  const { description } = statePersonal;
  const { uniName, cityEdu, degree, subject, fromEdu, toEdu } = stateEducation;
  const { position, company, cityExp, fromExp, toExp } = stateExperience;

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
        <ExpInstance
          position={position}
          companyName={company}
          cityName={cityExp}
          from={fromExp}
          to={toExp}
        />
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
