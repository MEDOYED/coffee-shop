import React, { Component } from "react";

import FypHeader from "../../widgets/fyp-header/fyp-header";
import FypAbout from "../../widgets/fyp-about/fyp-about";

import "./for-your-pleasure.scss";

class ForYourPleasure extends Component {
  render() {
    return (
      <div className="container">
        <FypHeader />
        <section className="fyp-about-section">
          <FypAbout />
        </section>
      </div>
    );
  }
}

export default ForYourPleasure;
