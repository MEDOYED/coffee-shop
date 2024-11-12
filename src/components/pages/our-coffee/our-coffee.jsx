import React, { Component } from "react";

import OurCoffeHeader from "../../widgets/our-coffee-header/our-coffee-header";
import AboutOurBeans from "../../widgets/about-our-beans/about-our-beans";
import AobSearchPanel from "../../widgets/aob-search-panel/aob-search-panel";
import AobFilter from "../../widgets/aob-filter/aob-filter";
import OurCoffeeProductArr from "../../widgets/our-coffee-products-arr/our-coffee-products-arr";
import NavMenu from "../../widgets/nav-menu/nav-menu";
import BlackBeen from "../../widgets/black-been/black-been";

import solimo from "../../../assets/img/home/home-solimo.png";
import presto from "../../../assets/img/home/home-presto.jpeg";
import aromisto from "../../../assets/img/home/home-aromisto.jpeg";

import "./our-coffee.scss";

class OurCoffee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aobData: [
        {
          src: solimo,
          description: "Solimo Coffee Beans 1 kg",
          country: "Brazil",
          price: "6.99$",
        },
        {
          src: presto,
          description: "Presto Coffee Beans 2 kg",
          country: "Kenya",
          price: "9.99$",
        },
        {
          src: aromisto,
          description: "AROMISTICO Coffee 1 kg",
          country: "Columbia",
          price: "6.99$",
        },
        {
          src: aromisto,
          description: "AROMISTICO Coffee 1 kg",
          country: "Brazil",
          price: "11.99$",
        },
        {
          src: solimo,
          description: "Solimo Coffee Beans 1 kg",
          country: "Kenya",
          price: "10.99$",
        },
        {
          src: presto,
          description: "Presto Coffee Beans 2 kg",
          country: "Columbia",
          price: "13.99$",
        },
      ],
      filteredData: [],
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(country) {
    if (country === "All") {
      this.setState({ filteredData: this.state.aobData });
    } else {
      const filteredData = this.state.aobData.filter(
        item => item.country === country,
      );
      this.setState({ filteredData });
    }
  }

  componentDidMount() {
    this.setState({ filteredData: this.state.aobData });
  }

  render() {
    return (
      <div className="container">
        <OurCoffeHeader />
        <AboutOurBeans />
        <section className="our-coffee__fiter">
          <AobSearchPanel />
          <AobFilter handleFilter={this.handleFilter} />
        </section>
        <OurCoffeeProductArr filteredData={this.state.filteredData} />
        <NavMenu />
        <div className="our-coffee__black-been">
          <BlackBeen />
        </div>
      </div>
    );
  }
}

export default OurCoffee;
