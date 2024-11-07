import { Component } from "react";

import "./aob-search-panel.scss";

class AobSearchPanel extends Component {
  render() {
    return (
      <div className="aob-search-panel">
        <div className="aob-search-panel__text">Looking for</div>
        <input
          className="aob-search-panel__input"
          type="text"
          placeholder="start typing here..."
        />
      </div>
    );
  }
}

export default AobSearchPanel;
