import { Component } from "react";

import ProductCard from "../product-card/product-card";

import "./our-coffee-products-arr.scss";

class OurCoffeeProductArr extends Component {
  renderProducts() {
    //   if (!filteredData || !Array.isArray(filteredData)) {
    //     return <p>No products to display</p>;
    //   }

    const { filteredData, handleCardClick } = this.props;
    return filteredData.map((item, index) => (
      <ProductCard
        hasCountry
        hasShadow
        src={item.src}
        description={item.description}
        country={item.country}
        price={item.price}
        key={index}
        id={item.id}
        onClick={handleCardClick}
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

export default OurCoffeeProductArr;
