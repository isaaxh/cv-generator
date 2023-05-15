import React, { useContext } from "react";
import PersonalInformation from "./PersonalInformation";
import Experience from "./Experience";
import Education from "./Education";
import Button from "./commonComponents/Button";
import MainBodyContext from "../MainBodyContext";

export default function InputForm() {
  const { loadExample, resetForm, generatePDF } = useContext(MainBodyContext);

  const handleLoadExampleClick = () => {
    loadExample();
  };

  return (
    <div className='bg-zinc-100 flex-1 shadow-2xl rounded p-5 h-auto max-w-3xl h-fit-content lg:p-9 '>
      <section className='mb-7'>
        <PersonalInformation />
      </section>
      <section className='mb-7'>
        <Experience title='Experience' />
      </section>
      <section className='mb-7'>
        <Education title='Education' />
      </section>
      <div className='flex flex-col'>
        <Button
          buttonName='Generate PDF'
          bgColor='bg-green-600'
          hoverColor='hover:bg-green-700'
          onClick={generatePDF}
        />
        <Button
          buttonName='Load example'
          bgColor='bg-orange-600'
          hoverColor='hover:bg-orange-700'
          onClick={handleLoadExampleClick}
        />
        <Button
          buttonName='Reset'
          bgColor='bg-red-600'
          hoverColor='hover:bg-red-700'
          onClick={resetForm}
        />
      </div>
    </div>
  );
}
