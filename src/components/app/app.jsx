import { Component } from "react";

import Header from "../widgets/header/header";
import { Outlet } from "react-router-dom";

import "./app.scss";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Outlet />
      </>
    );
  }
}

export default App;
