import React, { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import BuyButton from "./BuyButton";

import { uppercaseFL } from "../helpers";

//react bootstrap
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ItemDetail = ({ poke }) => {
  const [count, setCount] = useState(1);

  return (
    <>
      <Container>
        <Row>
          <Col className="d-flex justify-content-center flex-column align-items-center">
            <Card border="dark" style={{ width: "18rem" }} className="h-100 card-detail">
              <Card.Img variant="top" src={poke.image} alt=""  className="itemdetail"/>
              <Card.Body className="text-center">
                <Card.Title>Nombre: {uppercaseFL(poke.title)}</Card.Title>
                <Card.Text>Altura: {poke.height / 10} metros.</Card.Text>
                <Card.Text>Peso: {poke.weight / 10} kilogramos.</Card.Text>
                <Card.Text className=" border border-dark"> Descripción: {poke.description}</Card.Text>
                <Card.Text> Precio: {poke.price}</Card.Text>
              </Card.Body>
            </Card>
            <ItemCount
              Min="1"
              Max="4"
              count={count}
              style={{ width: "16rem" }}
              setCount={setCount}
              poke={poke}
            />
            <BuyButton count={count} poke={poke} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ItemDetail;
