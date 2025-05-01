import HeaderHome from "./layout/HeaderHome/HeaderHome";
import SectionAboutUs from "../../widgets/sections/SectionAboutUs/SectionAboutUs";
import SectionOurBest from "./layout/SectionOurBest/SectionOurBest";
import Header from "../../widgets/layout/Header/Header";
import BlackBeen from "../../shared/ui/black-been/black-been";

import "./PageHome.scss";

const PageHome = () => {
  return (
    <div className="coffee-house">
      <HeaderHome />
      <SectionAboutUs />
      <SectionOurBest cardsLimit={3} />
      <Header theme={"black"} />
      <BlackBeen />
    </div>
  );
};

export default PageHome;
