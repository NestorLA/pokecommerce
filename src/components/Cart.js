import React, { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

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
      
    </Col>))}
      </Container>
    </>
  );
};

export default Cart;
