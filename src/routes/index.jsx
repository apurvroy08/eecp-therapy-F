import React from "react";
import Layout from "../layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
