import React, { Component } from "react";
import PropTypes from "prop-types";
import MainBodyContext from "../MainBodyContext";

class HeaderCv extends Component {
  constructor(props) {
    super(props);
  }

  static contextType = MainBodyContext;

  static get propTypes() {
    return {
      children: PropTypes.any,
      firstName: PropTypes.string,
    };
  }

  render() {
    const { firstName, lastName, title } = this.context.state.personal;
    // console.log(lastName);

    return (
      <div className='bg-blue-900 [&>*]:text-white col-span-3 flex flex-col justify-center p-6'>
        <div className='lg:flex [&>*]:text-6xl [&>*]:font-bold'>
          <span>
            {firstName.length > 0 ? <h1>{firstName}</h1> : <h1>First</h1>}
          </span>
          &nbsp; &nbsp;
          <span>
            {lastName.length > 0 ? <h1>{lastName}</h1> : <h1>Last</h1>}
          </span>
        </div>
        <h2 className='text-2xl'>
          {title.length > 0 ? title : "Software Engineer"}
        </h2>
      </div>
    );
  }
}

export default HeaderCv;
