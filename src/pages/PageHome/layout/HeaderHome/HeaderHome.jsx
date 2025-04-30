import { Link } from "react-router-dom";

import WhiteBeen from "../../../../shared/ui/WhiteBeen/WhiteBeen";

import "./HeaderHome.scss";

const HeaderHome = () => {
  return (
    <header className="header-home">
      <div className="header-home__content">
        <h1 className="header-home__content-title">
          Everything You Love About Coffee
        </h1>

        <WhiteBeen />

        <h2 className="header-home__content-subtitle">
          We makes every day full of energy and taste.
        </h2>
        <h2 className="header-home__content-subtitle">
          Want to try our beans?
        </h2>
        <button className="header-home__content-btn">
          <Link to={"/our"}>More</Link>
        </button>
      </div>
    </header>
  );
};

export default HeaderHome;
