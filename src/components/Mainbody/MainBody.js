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
      resetStateObject(experience);
    } else {
      setEduInstances([...eduInstances, newInstance]);
      resetStateObject(education);
    }
  };

  const handleDeleteInstance = (instanceId, instanceType) => {
    if (instanceType === "exp") {
      setExpInstances(
        expInstances.filter((instance) => instance.key !== instanceId)
      );
    } else {
      setEduInstances(
        eduInstances.filter((instance) => instance.key !== instanceId)
      );
    }
  };

  const resetStateObject = (stateObject) => {
    if (stateObject === experience) {
      setExperience({
        key: "",
        position: "",
        company: "",
        cityExp: "",
        fromExp: "",
        toExp: "",
      });
    } else {
      setEducation({
        key: "",
        uniName: "",
        cityEdu: "",
        degree: "",
        subject: "",
        fromEdu: "",
        toEdu: "",
      });
    }
  };

  const handleRetrieveInstance = (instanceType, instanceObject) => {
    if (instanceType === "edu") {
      setEducation({
        key: instanceObject.key,
        uniName: instanceObject.uniName,
        cityEdu: instanceObject.cityEdu,
        degree: instanceObject.degree,
        subject: instanceObject.subject,
        fromEdu: instanceObject.fromEdu,
        toEdu: instanceObject.toEdu,
      });
    } else {
      setExperience({
        key: instanceObject.key,
        position: instanceObject.position,
        company: instanceObject.company,
        cityExp: instanceObject.cityExp,
        fromExp: instanceObject.fromExp,
        toExp: instanceObject.toExp,
      });
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
        handleDeleteInstance: handleDeleteInstance,
        handleRetrieveInstance: handleRetrieveInstance,
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
