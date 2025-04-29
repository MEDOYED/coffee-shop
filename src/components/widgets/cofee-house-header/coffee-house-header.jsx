import { Component } from "react";
import { Link } from "react-router-dom";

import WhiteBeen from "../../ui/WhiteBeen/WhiteBeen";

import "./coffee-house-header.scss";

class CoffeeHouseHeader extends Component {
  render() {
    return (
      <>
        <header className="home-header">
          <div className="home-header__content">
            <h1 className="home-header__content-title">
              Everything You Love About Coffee
            </h1>

            <WhiteBeen />

            <h2 className="home-header-subtitle">
              We makes every day full of energy and taste.
            </h2>
            <h2 className="home-header-subtitle">Want to try our beans?</h2>
            <button className="home-header-btn">
              <Link to={"/our"}>More</Link>
            </button>
          </div>
        </header>
      </>
    );
  }
}

export default CoffeeHouseHeader;
