import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./app/app";
import PageHome from "./pages/PageHome/PageHome";
import PagePleasure from "./pages/PagePleasure/PagePleasure";
import OurCoffee from "./pages/our-coffee/our-coffee";
import PageProductInfo from "./pages/PageProductInfo/PageProductInfo";

import "./index.scss";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<PageHome />} />
          <Route path="/for" element={<PagePleasure />} />
          <Route path="/our" element={<OurCoffee />} />
          <Route path="/product/:id" element={<ProductInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
