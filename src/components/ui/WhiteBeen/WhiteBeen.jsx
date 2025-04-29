import whiteBeen from "../../../assets/img/home/home-white-been.svg";

import "./WhiteBeen.scss";

const WhiteBeen = () => {
  return (
    <div className="white-been">
      <hr className="white-been__line" />
      <img className="white-been__img" src={whiteBeen} alt="White Been" />

      <hr className="white-been__line" />
    </div>
  );
};

export default WhiteBeen;
