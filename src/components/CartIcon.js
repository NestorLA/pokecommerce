import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartIcon = () => {
  const [cart, setCart] = useContext(CartContext);
  return (
    <>
      {cart.length > 0 ? (
        <div>
          <i className="fas fa-shopping-cart text-light mr-1"></i>
          <span className="text-light mr-2">({cart.length})</span>{" "}
        </div>
      ) : (
        <div>
          <i className="fas fa-shopping-cart text-light mr-3"></i>
        </div>
      )}
    </>
  );
};

export default CartIcon;
