import React, { useState } from "react";
import MainBodyContext from "./MainBodyContext";
import CvTemplate from "./../Mainbody/CvTemplate/CvTemplate";
import InputForm from "./../Mainbody/InputForm/InputForm";
import jsPDF from "jspdf";

export default function MainBody() {
  const [expInstances, setExpInstances] = useState([]);
  const [eduInstances, setEduInstances] = useState([]);

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

  const handleResetForm = () => {
    setPersonal({
      firstName: "",
      lastName: "",
      title: "",
      imgUrl: "",
      address: "",
      phone: "",
      email: "",
      description: "",
    });
    setExperience({
      key: "",
      position: "",
      company: "",
      cityExp: "",
      fromExp: "",
      toExp: "",
    });
    setEducation({
      key: "",
      uniName: "",
      cityEdu: "",
      degree: "",
      subject: "",
      fromEdu: "",
      toEdu: "",
    });
  };

  const loadExample = () => {
    setPersonal({
      firstName: "John",
      lastName: "Smith",
      title: "Junior Developer",
      imgUrl: "",
      address: "123 Fake St., Cityville, Countryland, US",
      phone: "+123456789",
      email: "johnsmith@example.com",
      description:
        "As a junior developer, I am a dedicated and enthusiastic professional with a strong passion for software development. my knowledge and stay up-to-date with industry trends. With a strong work ethic and a positive attitude, I am ready to make a valuable contribution to your team.",
    });
    setExperience({
      key: "01",
      position: "Junior Developer",
      company: "ABC Co.",
      cityExp: "LA",
      fromExp: "2021",
      toExp: "2022",
    });
    setEducation({
      key: "02",
      uniName: "ABC School of LA",
      cityEdu: "LA",
      degree: "BCs. Computer Science",
      subject: "AI",
      fromEdu: "2021",
      toEdu: "2023",
    });
  };

  const generatePDF = () => {
    const doc = new jsPDF("p", "pt", "a4");

    doc.html(document.querySelector("#cv-content"), {
      callback: function (pdf) {
        pdf.save("mycv.pdf");
      },
    });
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
        loadExample: loadExample,
        resetForm: handleResetForm,
        generatePDF: generatePDF,
      }}
    >
      <div
        className='bg-zinc-300 p-16 flex flex-col gap-24 xl:flex-row 
                        md:justify-between h-fit-content lg:px-32'
      >
        <InputForm />
        <CvTemplate />
      </div>
    </MainBodyContext.Provider>
  );
}
