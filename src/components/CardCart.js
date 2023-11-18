import React from "react";
import "./cardCart.css";
import { useCart } from "../context/CartContext";
function CardCart({ product }) {
  const {removeFromCart}=useCart();
  return (
    <div className="cardCart">
      <img src={product.imageSrc} alt={product.alt} />
      <p className="productname">{product.productName}</p>
      <p className="productPrice">{product.price}</p>
      <button className="remove" onClick={() => removeFromCart(product)}>
        Remove
      </button>
    </div>
  );
}

export default CardCart;
