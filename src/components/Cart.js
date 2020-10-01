import React, { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

// Helpers
import { uppercaseFL } from "../helpers";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  console.log(cart);

  return (
    <>
      <Container>
        <h2 className="text-uppercase"> carrito</h2>
        <br></br>
        <p>Items en carrito: {cart.length}</p>

        {cart.length > 0 ? (
          <>
            {cart.map((img, i) => (
              <Col xs={6} sm={4} md={3} xl={2} id={img.id} key={img.id}>
                <Card className="shadow mb-2 h-100">
                  <Card.Img
                    className="rounded"
                    variant="top"
                    src={img.sprites.front_default}
                    alt="pokemon"
                  />
                  <Card.Body className="text-center text-dark text-nowrap">
                    <Card.Title>{uppercaseFL(img.name)}</Card.Title>
                    <Card.Text className="font-italic">
                      Tipo: {uppercaseFL(img.types[0].type.name)}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </>
        ) : (
          <>
            <p>No tienes items en tu carrito!</p>
            <Link to={"/"}>
              {" "}
              <Button variant="dark">Seguí Comprando!</Button>{" "}
            </Link>
          </>
        )}
      </Container>
    </>
  );
};

export default Cart;
