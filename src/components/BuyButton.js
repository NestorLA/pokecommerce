import React from "react";

import Button from "react-bootstrap/Button";

const BuyButton = ({ count }) => {
  return <Button variant="dark" style={{ width: "16rem" }} className="mt-2"> Comprar {count} </Button>;
};

export default BuyButton;
