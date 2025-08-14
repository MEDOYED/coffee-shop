import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./app/App";
// import PageHome from "./pages/PageHome/PageHome";
// import PagePleasure from "./pages/PagePleasure/PagePleasure";
// import PageOurCoffee from "./pages/PageOurCoffee/PageOurCoffee";
// import PageProductInfo from "./pages/PageProductInfo/PageProductInfo";

import "./index.scss";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
  // <StrictMode>
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={<App />}>
  {
    /* <Route path="/" element={<PageHome />} />
          <Route path="/for" element={<PagePleasure />} />
          <Route path="/our" element={<PageOurCoffee />} />
          <Route path="/product/:id" element={<PageProductInfo />} /> */
  },
  //       </Route>
  //     </Routes>
  //   </BrowserRouter>
  // </StrictMode>,
);
