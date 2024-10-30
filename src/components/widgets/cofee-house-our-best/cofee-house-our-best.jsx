import { Component } from "react";

import CoffeeHouseCard from "../coffee-house-card/coffee-house-card";

// import image
import solimoImg from "../../../assets/img/home/home-solimo.png";
import prestoImg from "../../../assets/img/home/home-presto.jpeg";
import oromistoImg from "../../../assets/img/home/home-aromisto.jpeg";

import "./coffee-house-our-best.scss";

class CoffeeHouseOurBest extends Component {
  data = [
    {
      src: solimoImg,
      description: "Solimo Coffee Beans 2 kg",
      price: "10.73$",
    },
    {
      src: prestoImg,
      description: "Presto Coffee Beans 1 kg",
      price: "15.99$",
    },
    {
      src: oromistoImg,
      description: "AROMISTICO Coffee 1 kg",
      price: "6.99$",
    },
  ];

  renderCards() {
    return this.data.map((item, index) => (
      <CoffeeHouseCard
        key={index}
        src={item.src}
        description={item.description}
        price={item.price}
      />
    ));
  }

  render() {
    return (
      <div className="container">
        <div className="home-our">
          <div className="home-our__title">Our best</div>
          <ul className="home-our__cards">{this.renderCards()}</ul>
        </div>
      </div>
    );
  }
}

export default CoffeeHouseOurBest;
