import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../../../assets/img/header-logo.svg";

import "./header.scss";

class Header extends Component {
  render() {
    return (
      <div className="container">
        <nav className="header">
          <ul className="header-list">
            <li className="header-item" key="home">
              <Link className="header-link" to={"/"}>
                <img className="header-img" src={logo} alt="Header logo" />
                <p>Coffee House</p>
              </Link>
            </li>
            <li className="header-item" key="our">
              <Link className="header-link" to={"/our"}>
                <p>Our coffee</p>
              </Link>
            </li>
            <li className="header-item" key="for">
              <Link className="header-link" to={"/for"}>
                <p>For your pleasure</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
