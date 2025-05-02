import { useState } from "react";

import OurCoffeHeader from "../../widgets/our-coffee-header/our-coffee-header";
import AboutOurBeans from "../../widgets/about-our-beans/about-our-beans";
import AobSearchPanel from "../../widgets/aob-search-panel/aob-search-panel";
import FilterCountries from "../../widgets/filters/FilterCountries/FilterCountries";
import SectionProductCards from "../../widgets/sections/SectionProductCards/SectionProductCards";
import Header from "../../widgets/layout/Header/Header";
import BlackBeen from "../../shared/ui/black-been/black-been";

import "./PageOurCoffee.scss";

const PageOurCoffee = () => {
  const [currentCountry, setCurrentCountry] = useState("All");

  return (
    <div className="container">
      <OurCoffeHeader />
      <AboutOurBeans />
      <section className="our-coffee__fiter">
        <AobSearchPanel />
        <FilterCountries onChangeCountry={setCurrentCountry} />
      </section>
      <SectionProductCards currentCountry={currentCountry} />
      <Header />
      <div className="our-coffee__black-been">
        <BlackBeen />
      </div>
    </div>
  );
};

export default PageOurCoffee;
