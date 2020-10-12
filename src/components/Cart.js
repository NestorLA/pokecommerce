import React, { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import TableCart from "./TableCart";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const Cart = () => {
  const [cart] = useContext(CartContext);

  useEffect(() => {}, []);
  return (
    <Container className="text-white ">
      <Row className="flex-column">
        <Col>
          <h2 className="text-uppercase mt-2"> carrito</h2>
          <p>Items en carrito: {cart.length}</p>
        </Col>
      </Row>
      <Row className="justify-content-center mb-2">
        {cart.length > 0 ? (
          <TableCart cart={cart} />
        ) : (
          <>
            <Col>
              <p>No tienes items en tu carrito!</p>
              <Link to={"/"}>
                {" "}
                <br></br>
                <Button variant="dark">Seguí Comprando!</Button>{" "}
              </Link>
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
};

export default Cart;
