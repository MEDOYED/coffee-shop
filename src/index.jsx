import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./components/app/app";
import CoffeeHouse from "./components/pages/coffee-house/coffee-house";
import ForYourPleasure from "./components/pages/for-your-pleasure/for-your-pleasure";
import OurCoffee from "./components/pages/our-coffee/our-coffee";
import ProductInfo from "./components/pages/product-info/product-info";

import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <CoffeeHouse /> },
      { path: "/for", element: <ForYourPleasure /> },
      { path: "/our", element: <OurCoffee /> },
      { path: "/product/:id", element: <ProductInfo /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
