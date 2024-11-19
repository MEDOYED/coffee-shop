import { Component } from "react";

import BlackBeen from "../black-been/black-been";
import Line from "../../ui/line/line";

import img from "../../../assets/img/for-your-pleasure/fyp-about.png";

import "./fyp-about.scss";

class FypAbout extends Component {
  render() {
    return (
      <>
        <div className="fyp-about">
          <img src={img} alt="a cup of hot coffee" className="fyp-about__img" />
          <div className="fyp-about__content">
            <h2 className="fyp-about__heading">About our goods</h2>
            <BlackBeen />
            <p className="fyp-about__text">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible. <br /> <br /> Afraid at highly months do things
              on at. Situation recommend objection do intention <br /> so
              questions. <br /> As greatly removed calling pleased improve an.
              Last ask him cold feel <br /> met spot shy want. Children me
              laughing we prospect answered followed. At it went <br /> is song
              that held help face.
            </p>
          </div>
        </div>
        <Line />
      </>
    );
  }
}

export default FypAbout;