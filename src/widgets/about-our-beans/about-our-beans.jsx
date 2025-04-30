import { Component } from "react";

import BlackBeen from "../../shared/ui/black-been/black-been";
import Line from "../../shared/ui/line/line";

import girlImg from "../../shared/assets/img/our-coffee/our-coffee-girl.jpeg";

import "./about-our-beans.scss";

class AboutOurBeans extends Component {
  render() {
    return (
      <>
        <div className="aob">
          <img className="aob-img" src={girlImg} alt="girt immage" />
          <div className="aob-content">
            <BlackBeen isMirror={"mirror"} />
            <h2 className="aob-content__title">About our beans</h2>
            <BlackBeen />
            <p className="aob-content__text">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible. <br /> <br />
              Afraid at highly months do things on at. Situation recommend
              objection do intention <br /> so questions.
              <br /> As greatly removed calling pleased improve an. Last ask him
              cold feel <br /> met spot shy want. Children me laughing we
              prospect answered followed. At it went <br /> is song that held
              help face.
            </p>
          </div>
        </div>
        <Line />
      </>
    );
  }
}

export default AboutOurBeans;
