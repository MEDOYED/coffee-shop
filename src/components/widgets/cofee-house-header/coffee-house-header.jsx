import { Component } from "react";
import { Link } from "react-router-dom";

import whiteBeen from "../../../assets/img/home/home-white-been.svg";
import "./coffee-house-header.scss";

class CoffeeHouseHeader extends Component {
  render() {
    return (
      <div className="container">
        <header className="home-header">
          <div className="home-header__content">
            <h1 className="home-header__content-title">
              Everything You Love About Coffee
            </h1>
            <div className="home-header__content-been">
              <div className="home-header__content-line"></div>
              <img
                className="home-header__content-img"
                src={whiteBeen}
                alt="White Been"
              />
              <div className="home-header__content-line"></div>
            </div>
            <h2 className="home-header-subtitle">
              We makes every day full of energy and taste.
            </h2>
            <h2 className="home-header-subtitle">Want to try our beans?</h2>
            <button className="home-header-btn">
              <Link to={"/our"}>More</Link>
            </button>
          </div>
        </header>
      </div>
    );
  }
}

export default CoffeeHouseHeader;
