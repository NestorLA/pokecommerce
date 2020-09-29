import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  console.log(cart);
  return (
    <div>
      <div className="container">
        <h2> Cart </h2>
        <span>Items en carrito: {cart.length}</span>
        <br></br>
        <span>Precio total: 0</span>
      </div>
    </div>
  );
};

export default Cart;
