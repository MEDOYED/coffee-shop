import React, { Component } from "react";

import CoffeeHouseHeader from "../../widgets/cofee-house-header/coffee-house-header";
import CoffeeHouseAbout from "../../widgets/cofee-house-about/coffee-house-about";
import CoffeeHouseOurBest from "../../widgets/cofee-house-our-best/cofee-house-our-best";
import NavMenu from "../../widgets/nav-menu/nav-menu";
import BlackBeen from "../../ui/black-been/black-been";

import "./coffee-house.scss";

class CoffeeHouse extends Component {
  render() {
    return (
      <div className="coffee-house">
        <CoffeeHouseHeader />
        <CoffeeHouseAbout />
        <CoffeeHouseOurBest />
        <NavMenu theme={"black"} />
        <BlackBeen />
      </div>
    );
  }
}

export default CoffeeHouse;
