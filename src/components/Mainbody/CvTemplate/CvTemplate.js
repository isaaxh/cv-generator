import React from "react";
import HeaderCv from "./HeaderCv";
import MainBodyCv from "./MainBodyCv/MainBodyCv";
import SideSectionCv from "./SideSectionCv";

export default function CvTemplate() {
  return (
    // h-[1122px] w-[794] max-w-4xl 595 x 842
    <section
      className=' bg-zinc-100 shadow-2xl w-[210mm] h-[297mm]
    rounded lg:sticky lg:top-0 grid grid-cols-3 grid-rows-6'
      id='cv-content'
    >
      <HeaderCv />
      <MainBodyCv />
      <SideSectionCv />
    </section>
  );
}
