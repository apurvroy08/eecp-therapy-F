import React from "react";
import Layout from "../layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../views/homePage";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
