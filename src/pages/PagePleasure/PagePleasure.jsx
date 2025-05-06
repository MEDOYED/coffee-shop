import SectionHero from "../../widgets/sections/SectionHero/SectionHero";
import FypAbout from "../../widgets/fyp-about/fyp-about";
import SectionProductCards from "../../widgets/sections/SectionProductCards/SectionProductCards";
import Header from "../../widgets/layout/Header/Header";
import BlackBeen from "../../shared/ui/black-been/black-been";
import ProductCard from "../../widgets/cards/CardProduct/CardProduct";

import heroImg from "../../shared/assets/img/for-your-pleasure/fyp-header-img.png";

import "./PagePleasure.scss";

const PagePleasure = () => {
  return (
    <main>
      <SectionHero imageSrc={heroImg} title={"For your pleasure"} />
      <section className="fyp__about-section">
        <FypAbout />
      </section>
      <section className="fyp__products"></section>
      <SectionProductCards />
      <ProductCard />
      <Header />
      <div className="fyp__black-been">
        <BlackBeen />
      </div>
    </main>
  );
};

export default PagePleasure;
