import ProductCard from "../../cards/CardProduct/CardProduct";

import dataProductCard from "../../../shared/data/dataProductCard";

import "./SectionProductCards.scss";

const SectionProductCards = ({ cardsLimit, currentCountry }) => {
  const displayedCards = cardsLimit
    ? dataProductCard.slice(0, cardsLimit)
    : dataProductCard;

  let filteredByCountryCards;
  if (currentCountry) {
    if (currentCountry === "All") {
      filteredByCountryCards = displayedCards;
    } else {
      filteredByCountryCards = displayedCards.filter(
        card => card.country === currentCountry,
      );
    }
  } else {
    filteredByCountryCards = displayedCards;
  }

  return (
    <div className="aob-products-arr">
      <ul className="aob-products-arr__item">
        {filteredByCountryCards.map(item => (
          <ProductCard key={item.id} item={item} hasShadow hasCountry />
        ))}
      </ul>
    </div>
  );
};

export default SectionProductCards;
