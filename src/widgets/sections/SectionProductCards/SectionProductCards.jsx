import ProductCard from "../../cards/CardProduct/CardProduct";

import dataProductCard from "../../../shared/data/dataProductCard";

import "./SectionProductCards.scss";

const SectionProductCards = ({ cardsLimit }) => {
  const displayedCards = cardsLimit
    ? dataProductCard.slice(0, cardsLimit)
    : dataProductCard;

  return (
    <div className="aob-products-arr">
      <ul className="aob-products-arr__item">
        {displayedCards.map(item => (
          <ProductCard item={item} hasShadow hasCountry />
        ))}
      </ul>
    </div>
  );
};

export default SectionProductCards;
