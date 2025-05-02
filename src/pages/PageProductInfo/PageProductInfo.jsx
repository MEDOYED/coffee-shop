import OurCoffeHeader from "../../widgets/our-coffee-header/our-coffee-header";
import SectionAboutProduct from "../../widgets/sections/SectionAboutProduct/SectionAboutProduct";
import BlackBeen from "../../shared/ui/black-been/black-been";
import Header from "../../widgets/layout/Header/Header";

import "./PageProductInfo.scss";

const PageProductInfo = () => {
  return (
    <section>
      <header className="our-coffee-header">
        <OurCoffeHeader />
      </header>
      <section className="product-about-it">
        <SectionAboutProduct />
      </section>
      <nav className="product-nav-menu">
        <Header />
      </nav>
      <div className="product__black-been">
        <BlackBeen />
      </div>
    </section>
  );
};

export default PageProductInfo;
