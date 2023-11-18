import React from 'react'
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import Logo from "../assets/web-logo.png";
import { useCart } from '../context/CartContext';
function Headr() {
  const {cartList}=useCart();
  return (
    <header>
      <div to="/" className="logo">
        <img src={Logo} alt="shopmate Logo" />
        <span>Shopping cart</span>
      </div>
      <nav className='navigation'>
        <NavLink to="/" className="link" end>
          Home
        </NavLink>
        <NavLink to="/cart" className="link">
          Cart
        </NavLink>
      </nav>
      <Link to="/cart" className='items'>
        <span>Cart: {cartList.length}</span>
      </Link>
    </header>
  );
}

export default Headr