import React from "react";
import HeaderCv from "./HeaderCv";
import MainBodyCv from "./MainBodyCv/MainBodyCv";
import SideSectionCv from "./SideSectionCv";

export default function CvTemplate() {
  return (
    <section
      className='bg-zinc-100 h-[1122px] w-[794] min-w-4xl flex-1 shadow-2xl 
    rounded lg:sticky lg:top-0 grid grid-cols-3 grid-rows-6'
    >
      <HeaderCv />
      <MainBodyCv />
      <SideSectionCv />
    </section>
  );
}
