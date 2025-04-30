import { Link } from "react-router-dom";

import "./CardProduct.scss";

const ProductCard = ({ hasShadow, hasCountry, item }) => {
  if (!item) return null;

  const shadowClass = hasShadow ? "home-cards__shadow" : "";

  return (
    <li className={shadowClass}>
      <Link className="home-cards" to={`/product/${item.id}`}>
        <img className="home-cards__img" src={item.src} alt="Coffee" />
        <p className="home-cards__description">{item.description}</p>
        {hasCountry && <div className="home-cards__county">{item.country}</div>}
        <p className="home-cards__price">{item.price}</p>
      </Link>
    </li>
  );
};

export default ProductCard;
