import BlackBeen from "../../shared/ui/black-been/black-been";

import "./SectionAboutProduct.scss";

const SectionAboutProduct = () => {
  return (
    <div className="container product-about-it">
      {/* <img className="product-about-it__img" src={src} alt="" /> */}
      <div className="product-about-it__content">
        <h2 className="product-about-it__title">About it</h2>
        <BlackBeen />
        <div className="product-about-it__country">
          <span className="product-about-it__country--bold">Country:</span>
          {/* {country} */}
        </div>
        <p className="product-about-it__description">
          <span className="product-about-it__description--bold">
            Description:
          </span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
          mollitia magnam est, perspiciatis, odit consectetur quos quisquam hic
          tenetur deleniti libero reprehenderit ipsa qui quis nisi dolores. Sit,
          expedita illum
        </p>
        <div className="product-about-it__price">
          Price:
          <span className="product-about-it__price--second-word">
            {/* {price} */}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SectionAboutProduct;
