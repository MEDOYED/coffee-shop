import { Component } from "react";

import "./product-card.scss";

class ProductCard extends Component {
  render() {
    const { src, description, price, country, hasShadow, hasCountry } =
      this.props;
    const shadowClass = hasShadow ? "home-card__shadow" : "";
    const countryParagraph = hasCountry ? (
      <div className="home-card__county">{country}</div>
    ) : null;
    return (
      <li className={`home-card  ${shadowClass}`}>
        <img className="home-card__img" src={src} alt="Coffee" />
        <p className="home-card__description">{description}</p>
        {countryParagraph}
        <p className="home-card__price">{price}</p>
      </li>
    );
  }
}

export default ProductCard;
