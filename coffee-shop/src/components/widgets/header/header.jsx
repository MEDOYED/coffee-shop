import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./header.scss";

class Header extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li key="home">
            <Link className="header-link" to={"/"}>
              Coffee House
            </Link>
          </li>
          <li key="our">
            <Link className="header-link" to={"/our"}>
              Our coffee
            </Link>
          </li>
          <li key="for">
            <Link className="header-link" to={"/for"}>
              For your pleasure
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
