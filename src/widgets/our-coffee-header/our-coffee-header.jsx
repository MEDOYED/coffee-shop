import { Component } from "react";

import headerImg from "../../shared/assets/img/our-coffee/our-coffee-header-img.jpeg";

import "./our-coffee-header.scss";

class OurCoffeeHeader extends Component {
  render() {
    return (
      <div className="our-coffee-header">
        <img
          className="our-coffee-header__img"
          src={headerImg}
          alt="header on our coffee page"
        />
        <h2 className="our-coffee-header__title">Our Coffee</h2>
      </div>
    );
  }
}

export default OurCoffeeHeader;
