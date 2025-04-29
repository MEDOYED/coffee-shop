import { Component } from "react";

import NavMenu from "../widgets/layout/nav-menu/nav-menu";
import { Outlet } from "react-router-dom";

import "./app.scss";

class App extends Component {
  render() {
    return (
      <div className="container">
        <NavMenu theme={"white"} />
        <Outlet />
      </div>
    );
  }
}

export default App;
