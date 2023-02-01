import React, { Component } from "react";
import HeaderCv from "./CvTemplate/HeaderCv";
import MainBodyCv from "./CvTemplate/MainBodyCv";
import SideSectionCv from "./CvTemplate/SideSectionCv";

export default class CvTemplate extends Component {
  render() {
    return (
      <section
        className='bg-zinc-100 h-[1122px] w-[794] max-w-4xl flex-1 shadow-2xl 
      rounded lg:sticky lg:top-0 grid grid-cols-3 grid-rows-6'
      >
        <HeaderCv />
        <MainBodyCv />
        <SideSectionCv />
      </section>
    );
  }
}
