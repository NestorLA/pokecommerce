import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//components
import ItemDetail from "./ItemDetail";
import Spinner from "./Spinner";

const ItemDetailContainer = () => {
  let { id } = useParams(); // parametros de la URL
  const [poke, setPoke] = useState([]); // estado de pokemon
  const [load, setLoad] = useState("true"); // estado de spinner

  // llamda a la API para un id especifico
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => setPoke(data));
  }, []);

  setTimeout(() => {
    setLoad(false);
  }, 1500);

  return <>{load ? <Spinner /> : <ItemDetail poke={poke} />}</>;
};

export default ItemDetailContainer;
