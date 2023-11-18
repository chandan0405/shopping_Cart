import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Cart from "../pages/Cart";
function Allroutes() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default Allroutes;