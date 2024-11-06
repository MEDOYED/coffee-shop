import React, { Component } from "react";

import OurCoffeHeader from "../../widgets/our-coffee-header/our-coffee-header";

import "./our-coffee.scss";

class OurCoffee extends Component {
  render() {
    return (
      <div className="container">
        <OurCoffeHeader />
      </div>
    );
  }
}

export default OurCoffee;
