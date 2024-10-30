import { Component } from "react";

import blackBeen from "../../../assets/img/footer-icon.svg";
import "./black.been.scss";

class BlackBeen extends Component {
  render() {
    return (
      <div className="black-been">
        <div className="black-been__line"></div>
        <img className="black-been__img" src={blackBeen} alt="White Been" />
        <div className="black-been__line"></div>
      </div>
    );
  }
}

export default BlackBeen;
