import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Spinner from "./Spinner";
import { getFirestore } from "../firebase";

const Categories = () => {
  const [pokes, setPokes] = useState([]); // estado de pokemon
  const [load, setLoad] = useState("true");
  const { categoryId } = useParams();

  // Traingo datos desde Firebase
  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("items");
    const itemsByCategory = itemCollection.where(
      "categoryId",
      "==",
      categoryId
    );

    itemsByCategory
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("No results!");
        }
        setPokes(
          querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      })
      .catch((error) => {
        console.log("Error searching items", error);
      })
      .finally(() => {
        setLoad(false);
      });
  }, [categoryId]);

  return (
    <div className="categories">
      <h1>Categoría {categoryId}</h1>
      {load ? (
        <Spinner />
      ) : (
        <div className="categories__list">
          {pokes.map((poke) => {
            return <ItemDetail poke={poke} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Categories;
