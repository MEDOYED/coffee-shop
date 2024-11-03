import React, { Component } from "react";
import { Link } from "react-router-dom";

import logoWhite from "../../../assets/img/header-logo.svg";
import logoBlack from "../../../assets/img/footer-icon.svg";

import "./header.scss";

class Header extends Component {
  render() {
    const { theme } = this.props;
    const logo = theme === "white" ? logoWhite : logoBlack;

    const linkClassName =
      theme === "white" ? "header-link-white" : "header-link-black";

    const positionNavClassName =
      theme === "white" ? "header-nav-white" : "header-nav-black";

    return (
      <div className="container">
        <nav className={positionNavClassName}>
          <ul className="header-list">
            <li className="header-item" key="home">
              <Link className={linkClassName} to={"/"}>
                <img className="header-img" src={logo} alt="Header logo" />
                <p>Coffee House</p>
              </Link>
            </li>
            <li className="header-item" key="our">
              <Link className={linkClassName} to={"/our"}>
                <p>Our coffee</p>
              </Link>
            </li>
            <li className="header-item" key="for">
              <Link className={linkClassName} to={"/for"}>
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
