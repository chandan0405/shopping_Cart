import React, { useEffect, useState } from "react";
import "./productCard.css";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { cartList, addToCart, removeFromCart } = useCart();
  const { id, productName, price, imageSrc } = product;
  const [isInCart, setIsInCart] = useState(false);
  useEffect(() => {
    const productIsinCart = cartList.find((cartItem) => cartItem.id === id);
    productIsinCart ? setIsInCart(true) : setIsInCart(false);
  }, [cartList, id]);
  return (
    <div className="productCard">
      <img src={imageSrc} alt={product.alt} />
      <p className="name">{productName}</p>
      <div className="action">
        <p>${price}</p>
        {isInCart ? (
          <button className="remove" onClick={() => removeFromCart(product)}>
            Remove
          </button>
        ) : (
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
