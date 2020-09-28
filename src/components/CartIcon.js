import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";



const CartIcon = () => {
  const [cart, setCart] = useContext(CartContext);
  return ( <div>
    <i className="fas fa-shopping-cart text-light mr-3"></i>
    {cart.length > 1 ? <span>({cart.length})</span> : null}
  </div> );
}
 
export default CartIcon;
