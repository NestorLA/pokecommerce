import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//components
import ItemDetail from "./ItemDetail";
import Spinner from "./Spinner";

//firebase
import { getFirestore } from "../firebase";

const ItemDetailContainer = () => {
  let { id } = useParams(); // parametros de la URL
  const [poke, setPoke] = useState([]); // estado de pokemon
  const [load, setLoad] = useState("true"); // estado de spinner

  // llamda a la API para un id especifico
  // useEffect(() => {
  //   fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  //     .then((response) => response.json())
  //     .then((data) => setPoke(data));
  // }, []);

  // setTimeout(() => {
  //   setLoad(false);
  // }, 1000);

  useEffect(() => {
    setLoad(true);
    const db = getFirestore();
    const itemCollection = db.collection("items");
    const item = itemCollection.doc(id);

    item
      .get()
      .then((doc) => {
        if (!doc.exists) {
          console.log("Item does not exist!");
          return true;
        }
        console.log("Item found!");
        setPoke({ id: doc.id, ...doc.data() });
      })
      .catch((error) => {
        console.log("Error searching item ", error);
      })
      .finally(() => {
        setLoad(false);
      });
  }, [id]);

  console.log(poke);

  return <>{load ? <Spinner /> : <ItemDetail poke={poke} />}</>;
};

export default ItemDetailContainer;
