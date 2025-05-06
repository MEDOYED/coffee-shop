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
    <main className="page-pleasure">
      <SectionHero imageSrc={heroImg} title={"For your pleasure"} />
      <section className="page-pleasure__section-about">
        <FypAbout />
      </section>
      <SectionProductCards />
      <ProductCard />
      <Header />
      <div className="page-pleasure__black-been">
        <BlackBeen />
      </div>
    </main>
  );
};

export default PagePleasure;
