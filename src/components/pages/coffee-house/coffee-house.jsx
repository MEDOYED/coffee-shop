import React, { Component } from "react";

import CoffeeHouseHeader from "../../widgets/cofee-house-header/coffee-house-header";
import CoffeeHouseAbout from "../../widgets/cofee-house-about/coffee-house-about";
import CoffeeHouseOurBest from "../../widgets/cofee-house-our-best/cofee-house-our-best";
import Header from "../../widgets/header/header";
import BlackBeen from "../../widgets/black-been/black-been";

import "./coffee-house.scss";

class CoffeeHouse extends Component {
  render() {
    return (
      <div className="coffee-house">
        <CoffeeHouseHeader />
        <CoffeeHouseAbout />
        <CoffeeHouseOurBest />
        <Header theme={"black"} />
        <BlackBeen />
      </div>
    );
  }
}

export default CoffeeHouse;
