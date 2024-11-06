import React, { Component } from "react";

import OurCoffeHeader from "../../widgets/our-coffee-header/our-coffee-header";
import AboutOurBeans from "../../widgets/about-our-beans/about-our-beans";

import "./our-coffee.scss";

class OurCoffee extends Component {
  render() {
    return (
      <div className="container">
        <OurCoffeHeader />
        <AboutOurBeans />
      </div>
    );
  }
}

export default OurCoffee;
