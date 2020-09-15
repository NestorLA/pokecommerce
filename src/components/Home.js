import React from "react";
import ItemList from "./ItemList";

const Home = ({ poke }) => {
  return (
    <>
      {" "}
      <ItemList poke={poke} />
    </>
  );
};

export default Home;
