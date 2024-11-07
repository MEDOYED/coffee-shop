import React, { Component } from "react";

import OurCoffeHeader from "../../widgets/our-coffee-header/our-coffee-header";
import AboutOurBeans from "../../widgets/about-our-beans/about-our-beans";
import AobSearchPanel from "../../widgets/aob-search-panel/aob-search-panel";
import AobFilter from "../../widgets/aob-filter/aob-filter";

import "./our-coffee.scss";

class OurCoffee extends Component {
  render() {
    return (
      <div className="container">
        <OurCoffeHeader />
        <AboutOurBeans />
        <section className="our-coffee__fiter">
          <AobSearchPanel />
          <AobFilter />
        </section>
      </div>
    );
  }
}

export default OurCoffee;
