import { Outlet } from "react-router-dom";

import s from "./App.module.scss";

const App = () => {
  return (
    <div className="container">
      <Outlet />
    </div>
  );
};

export default App;
