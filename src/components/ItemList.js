import React from "react";

//React-Bootstrap
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

// Helpers
import { uppercaseFL } from "../helpers";

const ItemList = ({ poke }) => {
  return poke.map((img, i) => (
    <Col xs={4} md={3} xl={2} id={img.id} key={img.id}>
      <Card className="shadow mb-2">
        <Card.Img
          className="rounded"
          variant="top"
          src={img.sprites.front_default}
          alt="pokemon"
        />
        <Card.Body className="text-center">
          <Card.Text className="font-weight-bold">
            {uppercaseFL(img.name)}
          </Card.Text>
          <Card.Text className="font-italic">
            Tipo: {uppercaseFL(img.types[0].type.name)}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ));
};

export default ItemList;
