import { Component } from "react";
import { withRouter } from "../../functions/withRouter/with-router";

import OurCoffeHeader from "../../widgets/our-coffee-header/our-coffee-header";
import ProductAboutIt from "../../widgets/product-about-it/product-about-it";
import BlackBeen from "../../shared/ui/black-been/black-been";
import Header from "../../widgets/layout/Header/Header";

import "./product-info.scss";

class ProductInfo extends Component {
  render() {
    const productData = this.props.location?.state;
    return (
      <div>
        <header className="our-coffee-header">
          <OurCoffeHeader />
        </header>
        <section className="product-about-it">
          <ProductAboutIt productData={productData} />
        </section>
        <nav className="product-nav-menu">
          <Header />
        </nav>
        <div className="product__black-been">
          <BlackBeen />
        </div>
      </div>
    );
  }
}

export default withRouter(ProductInfo);
