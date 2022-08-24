import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Details from '../pages/Details';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/detail:id" element={<Details />} />
        <Route path="/" element={<Main />} />
        <Route path={"*"} component={NotFound}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;