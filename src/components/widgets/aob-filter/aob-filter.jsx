import { Component } from "react";

import "./aob-filter.scss";

class AobFilter extends Component {
  render() {
    return (
      <div className="aob-filter">
        <div className="aob-filter__text">Or filter</div>
        <button className="aob-filter__btn">Brazil</button>
        <button className="aob-filter__btn">Kenya</button>
        <button className="aob-filter__btn">Columbia</button>
      </div>
    );
  }
}

export default AobFilter;
