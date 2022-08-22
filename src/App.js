import React, { useState } from 'react';
import Main from './pages/Main';
import Details from './pages/Details';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";




const App = () => {
  const navigate = useNavigate();

  const onClickDetailhandler = (id) => {
    navigate(`/`+id);
  }

  const onClickMainHandler = () => {
    navigate(`/`);
  }

  return (
    <Routes>
          <Route path="/" element={<Main onClickDetailhandler={onClickDetailhandler}/>} />
          <Route path="/:id" element={<Details onClickMainHandler={onClickMainHandler}/>} />
    </Routes>
  );
}

export default App;