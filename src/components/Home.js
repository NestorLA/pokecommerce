import React from "react";
import ItemList from "./ItemList";

const Home = ({ pokes }) => {
  return (
    <>
      {" "}
      <ItemList pokes={pokes} />
    </>
  );
};

export default Home;
