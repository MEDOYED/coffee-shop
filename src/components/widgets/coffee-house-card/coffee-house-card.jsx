import { Component } from "react";

import "./coffee-house-card.scss";

class CoffeeHouseCard extends Component {
  render() {
    const { src, description, price } = this.props;
    return (
      <li className="home-card">
        <img className="home-card__img" src={src} alt="Coffee" />
        <p className="home-card__description">{description}</p>
        <p className="home-card__price">{price}</p>
      </li>
    );
  }
}

export default CoffeeHouseCard;
