import React, { Component } from "react";

import CoffeeHouseHeader from "../../widgets/cofee-house-header/coffee-house-header";
import CoffeeHouseAbout from "../../widgets/cofee-house-about/coffee-house-about";

import "./coffee-house.scss";

class CoffeeHouse extends Component {
  render() {
    return (
      <>
        <CoffeeHouseHeader></CoffeeHouseHeader>
        <CoffeeHouseAbout />
      </>
    );
  }
}

export default CoffeeHouse;
