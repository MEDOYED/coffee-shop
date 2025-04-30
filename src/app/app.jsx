import Header from "../widgets/layout/Header/Header";

import { Outlet } from "react-router-dom";

import "./app.scss";

import "./app.scss";

const app = () => {
  return (
    <div className="container">
      <Header theme={"white"} />
      <Outlet />
    </div>
  );
};

export default app;
