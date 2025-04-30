import HeaderHome from "./layout/HeaderHome/HeaderHome";
import SectionAboutUs from "../../widgets/layout/sections/SectionAboutUs/SectionAboutUs";
import CoffeeHouseOurBest from "../../widgets/cofee-house-our-best/cofee-house-our-best";
import Header from "../../widgets/layout/Header/Header";
import BlackBeen from "../../ui/black-been/black-been";

import "./PageHome.scss";

const PageHome = () => {
  return (
    <div className="coffee-house">
      <HeaderHome />
      <SectionAboutUs />
      <CoffeeHouseOurBest />
      <Header theme={"black"} />
      <BlackBeen />
    </div>
  );
};

export default PageHome;
