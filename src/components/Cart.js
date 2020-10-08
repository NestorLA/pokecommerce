import React, { useContext, useEffect, useState } from "react";
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
  const [total, setTotal] = useContext(CartContext);
  console.log(cart);

  useEffect(() => {}, []);
  return (
    <Container className="text-white ">
      <Row className="flex-column">
        <Col>
          <h2 className="text-uppercase"> carrito</h2>
          <p>Items en carrito: {cart.length}</p>
        </Col>
      </Row>
      <Row className="justify-content-center mb-2">
        {cart.length > 0 ? (
          <>
            {cart.map((img, i) => (
              <Col xs={6} sm={6} md={4} xl={3} key={img.id}>
                <Card className="shadow mb-2 h-100">
                  <Card.Img
                    className="rounded itemdetail"
                    variant="top"
                    src={img.image}
                    alt="pokemon"
                  />
                  <Card.Body className="text-center text-dark ">
                    <Card.Title className="font-weight-bold">
                      {uppercaseFL(img.title)}
                    </Card.Title>
                    <Card.Text>Cantidad: {img.qty}</Card.Text>
                    <Card.Text>Precio unitario: {img.price}</Card.Text>
                    <Card.Text>Precio total: {img.price * img.qty}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </>
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
