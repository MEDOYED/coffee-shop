import { useParams } from "react-router-dom";

import BlackBeen from "../../../shared/ui/black-been/black-been";

import dataProductCard from "../../../shared/data/dataProductCard";

import "./SectionAboutProduct.scss";

const SectionAboutProduct = () => {
  const { id } = useParams();

  const cardDataByID = dataProductCard.find(item => item.id === Number(id));

  return (
    <div className="section-about-product">
      <img
        className="section-about-product__img"
        src={cardDataByID?.src}
        alt={cardDataByID?.alt}
      />
      <div className="section-about-product__content">
        <h2 className="section-about-product__title">About it</h2>
        <BlackBeen />
        <div className="section-about-product__country">
          <span className="section-about-product__country--bold">Country:</span>
          {cardDataByID?.country}
        </div>
        <p className="section-about-product__description">
          <span className="section-about-product__description--bold">
            Description:
          </span>
          {cardDataByID?.description}
        </p>
        <div className="section-about-product__price">
          Price:
          <span className="section-about-product__price--second-word">
            {cardDataByID?.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SectionAboutProduct;
