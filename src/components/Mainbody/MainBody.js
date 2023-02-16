import React, { useState } from "react";
import MainBodyContext from "./MainBodyContext";
import CvTemplate from "./../Mainbody/CvTemplate/CvTemplate";
import InputForm from "./../Mainbody/InputForm/InputForm";

export default function MainBody() {
  const [expInstances, setExpInstances] = useState([]);
  const [eduInstances, setEduInstances] = useState([]);

  // const [currentObject, setCurrentObject] = useState([]);

  const [personal, setPersonal] = useState({
    firstName: "",
    lastName: "",
    title: "",
    imgUrl: "",
    address: "",
    phone: "",
    email: "",
    description: "",
  });

  const [experience, setExperience] = useState({
    key: "",
    position: "",
    company: "",
    cityExp: "",
    fromExp: "",
    toExp: "",
  });

  const [education, setEducation] = useState({
    key: "",
    uniName: "",
    cityEdu: "",
    degree: "",
    subject: "",
    fromEdu: "",
    toEdu: "",
  });

  const handlePersonalChange = (fieldName, newValue) => {
    setPersonal({ ...personal, [fieldName]: newValue });
  };

  const handleFileChange = (e) => {
    setPersonal({
      ...personal,
      imgUrl: URL.createObjectURL(e.target.files[0]),
    });
  };

  const handleEducationChange = (fieldName, newValue) => {
    setEducation({ ...education, [fieldName]: newValue });
  };

  const handleExperienceChange = (fieldName, newValue) => {
    setExperience({ ...experience, [fieldName]: newValue });
  };

  const handleAddingInstance = (newInstance, arrayName) => {
    newInstance.key = Date.now();
    if (arrayName === "exp") {
      setExpInstances([...expInstances, newInstance]);
    } else {
      setEduInstances([...eduInstances, newInstance]);
    }
  };

  return (
    <MainBodyContext.Provider
      value={{
        expInstances: expInstances,
        eduInstances: eduInstances,
        statePersonal: personal,
        stateEducation: education,
        stateExperience: experience,
        handleAddingInstance: handleAddingInstance,
        handlePerChange: handlePersonalChange,
        handleFileChange: handleFileChange,
        handleEduChange: handleEducationChange,
        handleExpChange: handleExperienceChange,
      }}
    >
      <div
        className='bg-zinc-300 p-16 flex flex-col gap-24 lg:flex-row 
                        md:justify-between h-fit-content lg:px-32'
      >
        <InputForm />
        <CvTemplate />
      </div>
    </MainBodyContext.Provider>
  );
}
