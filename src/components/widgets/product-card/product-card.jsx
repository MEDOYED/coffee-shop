import { Link } from "react-router-dom";

import "./product-card.scss";

const ProductCard = ({
  src,
  description,
  price,
  country,
  hasShadow,
  hasCountry,
  id,
}) => {
  const shadowClass = hasShadow ? "home-cards__shadow" : "";
  const countryParagraph = hasCountry ? (
    <div className="home-cards__county">{country}</div>
  ) : null;

  return (
    <>
      <li className={shadowClass}>
        <Link
          className="home-cards"
          to={`/product/${id}`}
          state={{ id, src, description, country, price }}
        >
          <img className="home-cards__img" src={src} alt="Coffee" />
          <p className="home-cards__description">{description}</p>
          {countryParagraph}
          <p className="home-cards__price">{price}</p>
        </Link>
      </li>
    </>
  );
};

export default ProductCard;
