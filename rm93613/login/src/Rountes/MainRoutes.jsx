import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from '../Components/Home';
import Login from '../Components/Login';
import Produto from '../Components/Produto';

const MainRoutes = ()=> {
  return (
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/produto' element={<Produto/>}/>
    </Routes>

  );
}

export default MainRoutes;