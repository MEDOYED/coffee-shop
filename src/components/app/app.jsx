import { Component } from "react";

import NavMenu from "../widgets/nav-menu/nav-menu";
import { Outlet } from "react-router-dom";

import "./app.scss";

class App extends Component {
  render() {
    return (
      <>
        <NavMenu theme={"white"} />
        <Outlet />
      </>
    );
  }
}

export default App;
