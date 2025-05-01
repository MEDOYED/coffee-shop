import { useParams } from "react-router-dom";

import BlackBeen from "../../shared/ui/black-been/black-been";

import dataProductCard from "../../shared/data/dataProductCard";

import "./SectionAboutProduct.scss";

const SectionAboutProduct = () => {
  const { id } = useParams();

  const cardDataByID = dataProductCard.find(item => item.id === Number(id));

  return (
    <div className="container product-about-it">
      <img
        className="product-about-it__img"
        src={cardDataByID?.src}
        alt={cardDataByID?.alt}
      />
      <div className="product-about-it__content">
        <h2 className="product-about-it__title">About it</h2>
        <BlackBeen />
        <div className="product-about-it__country">
          <span className="product-about-it__country--bold">Country:</span>
          {cardDataByID?.country}
        </div>
        <p className="product-about-it__description">
          <span className="product-about-it__description--bold">
            Description:
          </span>
          {cardDataByID?.description}
        </p>
        <div className="product-about-it__price">
          Price:
          <span className="product-about-it__price--second-word">
            {cardDataByID?.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SectionAboutProduct;
