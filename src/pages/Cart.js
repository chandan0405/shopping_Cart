import React from "react";
import CardCart from "../components/CardCart";
import '../App.css';
import UseTitles from "../hooks/UseTitles";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
function Cart() {
  const {total, cartList}=useCart();
  UseTitles("Cart");
  console.log(cartList);
  const productArray = [
    {
      id: 1,
      imageSrc:
        "https://www.reliancedigital.in/medias/Xiaomi-Basic-EP-492520057-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w0NDg0N3xpbWFnZS9qcGVnfGltYWdlcy9oYzQvaDFiLzk5ODE3Mzk2OTYxNTguanBnfGYxNThlMWJlNDFjODFkNzkxNTU2MWU4NTczODQ5ZjA0NzZjZjM2MDNmZjhjN2UxMDRkYjE0ZmMxOGIyM2YxN2M",
      alt: "wired oneplus ",
      productName: "OnePlus Nord E103A Wired Earphone",
      price: "$15",
    },
    {
      id: 2,
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvypLIybiGn5rcbw26npKvBwuxg3H_jZYkGA&usqp=CAU",
      alt: "boat headphone",
      productName: "boAt Bassheads 950v2",
      price: "$15",
    },
  ];
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
