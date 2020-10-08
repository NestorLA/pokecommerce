import React, { useState } from "react";

export const CartContext = React.createContext([]);

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(Number);

  const sumaProductos = (id) => {
    console.log("SUMA PRODUCTOS CONTEXT!", id);
  };

  return (
    <CartContext.Provider value={[cart, setCart, sumaProductos, total, setTotal]}>
      {props.children}
    </CartContext.Provider>
  );
};
