import { Component } from "react";
import { withRouter } from "../../functions/withRouter/with-router";

import BlackBeen from "../black-been/black-been";

import img from "../../../assets/img/our-coffee/our-coffee-product.jpeg";

import "./product-about-it.scss";

class ProductAboutIt extends Component {
  componentDidMount() {
    const itemId = this.props.params.id;
    console.log(itemId);
  }

  render() {
    const { productData } = this.props;

    // Перевірка, чи productData передано
    if (!productData) {
      return (
        <p>No product data available. Please go back and select a product.</p>
      );
    }

    const { src, country, price } = productData;
    return (
      <div className="container product-about-it">
        <img className="product-about-it__img" src={src} alt="" />
        <div className="product-about-it__content">
          <h2 className="product-about-it__title">About it</h2>
          <BlackBeen />
          <div className="product-about-it__country">
            <span className="product-about-it__country--bold">Country:</span>
            {country}
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
            <span className="product-about-it__price--second-word">
              {price}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ProductAboutIt);
