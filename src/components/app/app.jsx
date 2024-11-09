import { Component } from "react";

import Header from "../widgets/nav-menu/nav-menu";
import { Outlet } from "react-router-dom";

import "./app.scss";

class App extends Component {
  render() {
    return (
      <>
        <Header theme={"white"} />
        <Outlet />
      </>
    );
  }
}

export default App;
