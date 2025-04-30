import { Component } from "react";

import Header from "../widgets/layout/Header/Header";

import { Outlet } from "react-router-dom";

import "./app.scss";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header theme={"white"} />
        <Outlet />
      </div>
    );
  }
}

export default App;
