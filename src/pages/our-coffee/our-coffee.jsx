import React, { Component } from "react";

import OurCoffeHeader from "../../widgets/our-coffee-header/our-coffee-header";
import AboutOurBeans from "../../widgets/about-our-beans/about-our-beans";
import AobSearchPanel from "../../widgets/aob-search-panel/aob-search-panel";
import AobFilter from "../../widgets/aob-filter/aob-filter";
import SectionProductCards from "../../widgets/SectionProductCards/SectionProductCards";
import Header from "../../widgets/layout/Header/Header";
import BlackBeen from "../../shared/ui/black-been/black-been";

import solimo from "../../shared/assets/img/home/home-solimo.png";
import presto from "../../shared/assets/img/home/home-presto.jpeg";
import aromisto from "../../shared/assets/img/home/home-aromisto.jpeg";

import "./our-coffee.scss";

class OurCoffee extends Component {
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
      term: "",
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

  onUpdateSearch(term) {
    this.setState({ term: term });
  }

  filterBySearchTerm() {
    const { term, aobData } = this.state;
    if (!term) return aobData; // Якщо термін порожній, повертаємо всі дані
    return aobData.filter(item =>
      item.description.toLowerCase().includes(term.toLowerCase()),
    );
  }

  getFilteredData() {
    const { aobData, term, filteredData } = this.state;

    let result = filteredData.length ? filteredData : aobData;

    if (term) {
      result = result.filter(item =>
        item.description.toLowerCase().includes(term.toLowerCase()),
      );
    }

    return result;
  }

  render() {
    const filteredData = this.getFilteredData();

    return (
      <div className="container">
        <OurCoffeHeader />
        <AboutOurBeans />
        <section className="our-coffee__fiter">
          <AobSearchPanel onUpdateSearch={term => this.onUpdateSearch(term)} />
          <AobFilter handleFilter={this.handleFilter} />
        </section>
        <SectionProductCards
        // filteredData={this.state.filteredData}
        // filteredData={filteredData}
        // handleCardClick={this.handleCardClick}
        />
        <Header />
        <div className="our-coffee__black-been">
          <BlackBeen />
        </div>
      </div>
    );
  }
}

export default OurCoffee;
