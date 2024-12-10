import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./components/app/app";
import CoffeeHouse from "./components/pages/coffee-house/coffee-house";
import ForYourPleasure from "./components/pages/for-your-pleasure/for-your-pleasure";
import OurCoffee from "./components/pages/our-coffee/our-coffee";
import ProductInfo from "./components/pages/product-info/product-info";

import "./index.scss";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<CoffeeHouse />} />
          <Route path="/for" element={<ForYourPleasure />} />
          <Route path="/our" element={<OurCoffee />} />
          <Route path="/product/:id" element={<ProductInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
