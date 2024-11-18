import { Component } from "react";

import "./aob-search-panel.scss";

class AobSearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };

    this.onUpdateSearch = this.onUpdateSearch.bind(this);
  }

  onUpdateSearch(e) {
    const term = e.target.value;
    this.setState({ term: term });
    this.props.onUpdateSearch(term);
  }
  render() {
    return (
      <div className="aob-search-panel">
        <div className="aob-search-panel__text">Looking for</div>
        <input
          className="aob-search-panel__input"
          // type="text"
          type="search"
          placeholder="start typing here..."
          onChange={this.onUpdateSearch}
        />
      </div>
    );
  }
}

export default AobSearchPanel;
