import React, { useState } from "react";
import ItemCount from "./ItemCount";

import { uppercaseFL } from "../helpers";

//react bootstrap
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const ItemDetail = ({ poke }) => {
  console.log(poke.name);
  const [count, setCount] = useState(0);

  return (
    <>
      <Container>
        <Row>
          <Col className="d-flex justify-content-center flex-column align-items-center">
            <Card border="dark" style={{ width: "16rem" }}>
              <Card.Img variant="top" src={poke.sprites.front_default} alt="" />
              <Card.Body className="text-center">
                <Card.Title>Nombre: {uppercaseFL(poke.name)}</Card.Title>
                <Card.Text>Altura: {poke.height / 10} metros.</Card.Text>
                <Card.Text>Peso: {poke.weight / 10} kilogramos.</Card.Text>
              </Card.Body>
            </Card>
            <ItemCount
              Min="1"
              Max="4"
              Initial="1"
              count={count}
              style={{ width: "16rem" }}
              setCount={setCount}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ItemDetail;
