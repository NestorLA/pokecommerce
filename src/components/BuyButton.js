import React, { useContext } from "react";

import { CartContext } from "../context/CartContext";

import Button from "react-bootstrap/Button";

const BuyButton = ({ count, poke }) => {
  console.log(`Este es el poke: ${poke}`);
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    const pokemon = poke;
    pokemon.qty = count;
    
    setCart((currentCart) => [...currentCart, pokemon]);
    console.log(cart);
  };

  return (
    <Button
      variant="danger"
      style={{ width: "16rem" }}
      className="mt-1 mb-3"
      onClick={addToCart}
    >
      {" "}
      Comprar {count}{" "}
    </Button>
  );
};

export default BuyButton;
