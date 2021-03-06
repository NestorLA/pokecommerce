import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

import { Link } from "react-router-dom";

const CartIcon = () => {
  const [cart] = useContext(CartContext);
  return (
    <>
      <Link to={"/cart"}>
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
      </Link>
    </>
  );
};

export default CartIcon;
