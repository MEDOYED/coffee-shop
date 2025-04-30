import { Link } from "react-router-dom";

import logoWhite from "../../../shared/assets/img/header-logo.svg";
import logoBlack from "../../../shared/assets/img/home/home-footer.svg";

import "./Header.scss";

const Header = ({ theme }) => {
  const logo = theme === "white" ? logoWhite : logoBlack;

  const linkClassName =
    theme === "white" ? "header-link-white" : "header-link-black";

  const positionNavClassName =
    theme === "white" ? "header-nav-white" : "header-nav-black";

  return (
    <div className="header">
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
};

export default Header;
