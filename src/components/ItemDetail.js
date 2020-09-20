import React from "react";
import ItemCount from "./ItemCount";

import { uppercaseFL } from "../helpers";

//react bootstrap
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const ItemDetail = ({ poke }) => {
  console.log(poke.name);

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} sm={8} className="d-flex justify-content-center">
            <Card border="dark" style={{ width: "16rem" }}>
              <Card.Img variant="top" src={poke.sprites.front_default} alt="" />
              <Card.Body className="text-center">
                <Card.Title>Nombre: {uppercaseFL(poke.name)}</Card.Title>
                <Card.Text>Altura: {poke.height / 10} metros.</Card.Text>
                <Card.Text>Peso: {poke.weight / 10} kilogramos.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} className="justify-content-center">
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Image src={poke.sprites.back_default} rounded />
              </ListGroup.Item>
              <ListGroup.Item>
                <Image src={poke.sprites.front_shiny} rounded />
              </ListGroup.Item>
              <ListGroup.Item>
                <Image src={poke.sprites.back_shiny} rounded />
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center">
          <Col xs={12} sm={8} className="d-flex justify-content-center">
            {" "}
            <ItemCount Min="1" Max="2" Initial="1" />
          </Col>
          <Col>
            {" "}
            <Button variant="dark">Comprar</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ItemDetail;
