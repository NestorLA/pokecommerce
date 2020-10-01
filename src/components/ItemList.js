import React from "react";

//React-Bootstrap
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

// Helpers
import { uppercaseFL } from "../helpers";

//Router
import { Link } from "react-router-dom";

const ItemList = ({ pokes }) => {
  return pokes.map((img, i) => (
    <Col xs={6} sm={4} md={3} xl={2} id={img.id} key={img.id}>
      <Link to={`/pokemon/${img.id}`} style={{ textDecoration: "none" }}>
        <Card className="shadow h-100">
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
      </Link>
    </Col>
  ));
};

export default ItemList;
