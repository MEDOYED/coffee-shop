import SectionHero from "../../widgets/sections/SectionHero/SectionHero";
import SectionAboutProduct from "../../widgets/sections/SectionAboutProduct/SectionAboutProduct";
import BlackBeen from "../../shared/ui/black-been/black-been";
import Header from "../../widgets/layout/Header/Header";

import headerImg from "../../shared/assets/img/our-coffee/our-coffee-header-img.jpeg";

import "./PageProductInfo.scss";

const PageProductInfo = () => {
  return (
    <section>
      <SectionHero imageSrc={headerImg} title={"Product Info"} />
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
