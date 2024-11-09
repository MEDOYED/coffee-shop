import { Component } from "react";

import solimo from "../../../assets/img/home/home-solimo.png";
import presto from "../../../assets/img/home/home-presto.jpeg";
import aromisto from "../../../assets/img/home/home-aromisto.jpeg";

import ProductCard from "../product-card/product-card";

import "./our-coffee-products-arr.scss";

class AobProductsArr extends Component {
  aobData = [
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
  ];

  renderProducts() {
    return this.aobData.map(item => (
      <ProductCard
        hasCountry
        hasShadow
        src={item.src}
        description={item.description}
        country={item.country}
        price={item.price}
      />
    ));
  }

  render() {
    return (
      <div className="aob-products-arr">
        <ul className="aob-products-arr__item">{this.renderProducts()}</ul>
      </div>
    );
  }
}

export default AobProductsArr;
