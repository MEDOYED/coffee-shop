import OurCoffeHeader from "../../widgets/our-coffee-header/our-coffee-header";
import AboutOurBeans from "../../widgets/about-our-beans/about-our-beans";
import AobSearchPanel from "../../widgets/aob-search-panel/aob-search-panel";
import FilterCountries from "../../widgets/filters/FilterCountries/FilterCountries";
import SectionProductCards from "../../widgets/sections/SectionProductCards/SectionProductCards";
import Header from "../../widgets/layout/Header/Header";
import BlackBeen from "../../shared/ui/black-been/black-been";

import "./PageOurCoffee.scss";

// handleFilter(country) {
//   if (country === "All") {
//     this.setState({ filteredData: this.state.aobData });
//   } else {
//     const filteredData = this.state.aobData.filter(
//       item => item.country === country,
//     );
//     this.setState({ filteredData });
//   }
// }

// componentDidMount() {
//   this.setState({ filteredData: this.state.aobData });
// }

// handleCardClick = id => {
//   this.props.history.push(`/product/${id}`);
// };

// onUpdateSearch(term) {
//   this.setState({ term: term });
// }

// filterBySearchTerm() {
//   const { term, aobData } = this.state;
//   if (!term) return aobData; // Якщо термін порожній, повертаємо всі дані
//   return aobData.filter(item =>
//     item.description.toLowerCase().includes(term.toLowerCase()),
//   );
// }

// getFilteredData() {
//   const { aobData, term, filteredData } = this.state;

//   let result = filteredData.length ? filteredData : aobData;

//   if (term) {
//     result = result.filter(item =>
//       item.description.toLowerCase().includes(term.toLowerCase()),
//     );
//   }

//   return result;
// }

const PageOurCoffee = () => {
  return (
    <div className="container">
      <OurCoffeHeader />
      <AboutOurBeans />
      <section className="our-coffee__fiter">
        <AobSearchPanel onUpdateSearch={term => this.onUpdateSearch(term)} />
        <FilterCountries />
      </section>
      <SectionProductCards
      // filteredData={this.state.filteredData}
      // filteredData={filteredData}
      // handleCardClick={this.handleCardClick}
      />
      <Header />
      <div className="our-coffee__black-been">
        <BlackBeen />
      </div>
    </div>
  );
};

export default PageOurCoffee;
