import React, { Component } from "react";
import PropTypes from "prop-types";
import EduInstance from "./Instances/EduInstance";
import ExpInstance from "./Instances/ExpInstance";
import MainBodyContext from "../../MainBodyContext";

class MainBodyCv extends Component {
  constructor(props) {
    super(props);
  }

  static contextType = MainBodyContext;

  static get propTypes() {
    return {
      children: PropTypes.any,
    };
  }

  render() {
    const { description } = this.context.state.personal;
    const { uniName, cityEdu, degree, subject, fromEdu, toEdu } =
      this.context.state.education;
    const { position, company, cityExp, fromExp, toExp } =
      this.context.state.experience;
    return (
      <div
        className='col-span-2 row-span-5 p-5 [&>div]:mb-5 [&>div>hr]:border-solid 
        [&>div>hr]:border-1 [&>div>hr]:border-gray-300 [&>div>h2]:text-blue-900 
      [&>div>h2]:text-md [&>div>h2]:font-semibold [&>div>hr]:pb-2'
      >
        <div>
          <h2>Description</h2>
          <hr />
          <p className='text-gray-600'>
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            aliquid aspernatur dolore laudantium cumque sunt ut ullam ad
            pariatur iste. Ut accusamus amet hic soluta incidunt velit sequi
            optio dolor! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Iure id esse numquam similique nam quia cupiditate officiis */}
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
}

export default MainBodyCv;
