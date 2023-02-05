import React, { Component } from "react";
import PropTypes from "prop-types";
import HeaderCv from "./HeaderCv";
import MainBodyCv from "./MainBodyCv/MainBodyCv";
import SideSectionCv from "./SideSectionCv";

export default class CvTemplate extends Component {
  constructor(props) {
    super(props);
  }

  static get propTypes() {
    return {
      children: PropTypes.any,
      firstName: PropTypes.string,
    };
  }

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
