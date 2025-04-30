import React, { Component } from "react";

import FypHeader from "../../widgets/fyp-header/fyp-header";
import FypAbout from "../../widgets/fyp-about/fyp-about";
import OurCoffeeProductArr from "../../widgets/our-coffee-products-arr/our-coffee-products-arr";
import Header from "../../widgets/layout/Header/Header";
import BlackBeen from "../../shared/ui/black-been/black-been";

import solimo from "../../shared/assets/img/home/home-solimo.png";
import presto from "../../shared/assets/img/home/home-presto.jpeg";
import aromisto from "../../shared/assets/img/home/home-aromisto.jpeg";

import "./for-your-pleasure.scss";

class ForYourPleasure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aobData: [
        {
          id: 1,
          src: solimo,
          description: "Solimo Coffee Beans 1 kg",
          country: "Brazil",
          price: "6.99$",
        },
        {
          id: 2,
          src: presto,
          description: "Presto Coffee Beans 2 kg",
          country: "Kenya",
          price: "9.99$",
        },
        {
          id: 3,
          src: aromisto,
          description: "AROMISTICO Coffee 1 kg",
          country: "Columbia",
          price: "6.99$",
        },
        {
          id: 4,
          src: aromisto,
          description: "AROMISTICO Coffee 1 kg",
          country: "Brazil",
          price: "11.99$",
        },
        {
          id: 5,
          src: solimo,
          description: "Solimo Coffee Beans 1 kg",
          country: "Kenya",
          price: "10.99$",
        },
        {
          id: 6,
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

  handleCardClick = id => {
    this.props.history.push(`/product/${id}`);
  };

  render() {
    return (
      <div className="container">
        <FypHeader />
        <section className="fyp__about-section">
          <FypAbout />
        </section>
        <section className="fyp__products"></section>
        <OurCoffeeProductArr
          filteredData={this.state.filteredData}
          handleCardClick={this.handleCardClick}
        />
        <Header />
        <div className="fyp__black-been">
          <BlackBeen />
        </div>
      </div>
    );
  }
}

export default ForYourPleasure;
