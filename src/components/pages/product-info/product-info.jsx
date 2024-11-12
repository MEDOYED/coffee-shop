import { Component } from "react";

import OurCoffeHeader from "../../widgets/our-coffee-header/our-coffee-header";
import ProductAboutIt from "../../widgets/product-about-it/product-about-it";
import BlackBeen from "../../widgets/black-been/black-been";
import NavMenu from "../../widgets/nav-menu/nav-menu";

import "./product-info.scss";

class ProductInfo extends Component {
  render() {
    return (
      <div>
        <header className="our-coffee-header">
          <OurCoffeHeader />
        </header>
        <section className="product-about-it">
          <ProductAboutIt />
        </section>
        <nav className="product-nav-menu">
          <NavMenu />
        </nav>
        <BlackBeen />
      </div>
    );
  }
}

export default ProductInfo;
