import { Component } from "react";

import ProductCard from "../cards/CardProduct/CardProduct";

// import image
import solimoImg from "../../shared/assets/img/home/home-solimo.png";
import prestoImg from "../../shared/assets/img/home/home-presto.jpeg";
import oromistoImg from "../../shared/assets/img/home/home-aromisto.jpeg";

import "./coffee-house-our-best.scss";

class CoffeeHouseOurBest extends Component {
  data = [
    {
      id: 1,
      src: solimoImg,
      description: "Solimo Coffee Beans 2 kg",
      price: "10.73$",
      country: "Brazil",
    },
    {
      id: 2,
      src: prestoImg,
      description: "Presto Coffee Beans 1 kg",
      price: "15.99$",
      country: "Kenya",
    },
    {
      id: 3,
      src: oromistoImg,
      description: "AROMISTICO Coffee 1 kg",
      price: "6.99$",
      country: "Columbia",
    },
  ];

  renderCards() {
    return this.data.map((item, index) => (
      <ProductCard
        id={item.id}
        country={item.country}
        key={index}
        src={item.src}
        description={item.description}
        price={item.price}
      />
    ));
  }

  render() {
    return (
      <>
        <div className="home-our">
          <div className="home-our__title">Our best</div>
          <ul className="home-our__cards">{this.renderCards()}</ul>
        </div>
      </>
    );
  }
}

export default CoffeeHouseOurBest;
