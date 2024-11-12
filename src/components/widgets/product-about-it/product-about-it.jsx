import { Component } from "react";

import BlackBeen from "../black-been/black-been";

import img from "../../../assets/img/our-coffee/our-coffee-product.jpeg";

import "./product-about-it.scss";

class ProductAboutIt extends Component {
  render() {
    return (
      <div className="container product-about-it">
        <img className="product-about-it__img" src={img} alt="" />
        <div className="product-about-it__content">
          <h2 className="product-about-it__title">About it</h2>
          <BlackBeen />
          <div className="product-about-it__country">
            <span className="product-about-it__country--bold">Country:</span>
            Brazil
          </div>
          <p className="product-about-it__description">
            <span className="product-about-it__description--bold">
              Description:
            </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            mollitia magnam est, perspiciatis, odit consectetur quos quisquam
            hic tenetur deleniti libero reprehenderit ipsa qui quis nisi
            dolores. Sit, expedita illum.
          </p>
          <div className="product-about-it__price">
            Price:
            <span className="product-about-it__price--second-word">16.99$</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductAboutIt;
