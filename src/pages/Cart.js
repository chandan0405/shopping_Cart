import React from "react";
import CardCart from "../components/CardCart";
import '../App.css';
import UseTitles from "../hooks/UseTitles";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
function Cart() {
  const {total, cartList}=useCart();
  UseTitles("Cart");
  // console.log(cartList);
  return (
    <main>
      <section className="cart">
        <h1>Cart Item: {cartList.length}</h1>
        {cartList.map((product) => {
          return <CardCart key={product.id} product={product} />;
        })}
        <Link path="/buynow">
          <h1 className="totalprice">Total:${total}</h1>
        </Link>
      </section>
    </main>
  );
}

export default Cart;
