import ProductCard from "../product-card/product-card";

import dataProductCard from "../../shared/data/dataProductCard";

import "./our-coffee-products-arr.scss";

const OurCoffeeProductArr = () => {
  return (
    <div className="aob-products-arr">
      <ul className="aob-products-arr__item">
        {dataProductCard.map(item => (
          <ProductCard item={item} hasShadow hasCountry />
        ))}
      </ul>
    </div>
  );
};

export default OurCoffeeProductArr;
