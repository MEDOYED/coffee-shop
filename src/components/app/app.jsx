import { Component } from "react";

import Header from "../widgets/header/header";
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
