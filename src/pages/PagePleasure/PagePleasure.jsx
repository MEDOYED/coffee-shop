import FypHeader from "../../widgets/fyp-header/fyp-header";
import FypAbout from "../../widgets/fyp-about/fyp-about";
import OurCoffeeProductArr from "../../widgets/our-coffee-products-arr/our-coffee-products-arr";
import Header from "../../widgets/layout/Header/Header";
import BlackBeen from "../../shared/ui/black-been/black-been";
import ProductCard from "../../widgets/product-card/product-card";

import dataProductCard from "../../shared/data/dataProductCard";

import "./PagePleasure.scss";

const PagePleasure = () => {
  return (
    <div className="container">
      <FypHeader />
      <section className="fyp__about-section">
        <FypAbout />
      </section>
      <section className="fyp__products"></section>
      <OurCoffeeProductArr
      // filteredData={this.state.filteredData}
      // handleCardClick={this.handleCardClick}
      />
      <ProductCard />
      <Header />
      <div className="fyp__black-been">
        <BlackBeen />
      </div>
    </div>
  );
};

export default PagePleasure;
