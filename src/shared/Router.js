import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Details from '../pages/Details';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:id" element={<Details />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;