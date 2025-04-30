import { Component } from "react";

import blackBeen from "../../../shared/assets/img/footer-icon.svg";
import "./black.been.scss";

class BlackBeen extends Component {
  render() {
    const { isMirror } = this.props;

    const blackBeanImg =
      isMirror === "mirror" ? "black-been__img--mirrored" : "black-been__img";
    return (
      <div className="black-been">
        <div className="black-been__line"></div>
        <img className={blackBeanImg} src={blackBeen} alt="White Been" />
        <div className="black-been__line"></div>
      </div>
    );
  }
}

export default BlackBeen;
