import { Component } from "react";
import { Link } from "react-router-dom";

import "./product-card.scss";

class ProductCard extends Component {
  render() {
    const { src, description, price, country, hasShadow, hasCountry, id } =
      this.props;
    const shadowClass = hasShadow ? "home-card__shadow" : "";
    const countryParagraph = hasCountry ? (
      <div className="home-card__county">{country}</div>
    ) : null;
    return (
      <li className={`home-card  ${shadowClass}`}>
        <Link
          className="home-card"
          to={`/product/${id}`}
          state={{ id, src, description, country, price }}
        >
          <img className="home-card__img" src={src} alt="Coffee" />
          <p className="home-card__description">{description}</p>
          {countryParagraph}
          <p className="home-card__price">{price}</p>
        </Link>
      </li>
    );
  }
}

export default ProductCard;
