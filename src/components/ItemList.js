import React from "react";

//React-Bootstrap
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

// Helpers
import { uppercaseFL } from "../helpers";

//Router
import { Link } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemList = ({ pokes }) => {
  return pokes.map((img, i) => (
    <Col xs={6} md={3} xl={2} id={img.id} key={img.id}>
      <Link to={`/pokemon/${img.id}`} style={{ textDecoration: "none" }}>
        <Card className="shadow mb-2">
          <Card.Img
            className="rounded"
            variant="top"
            src={img.sprites.other.dream_world.front_default}
            alt="pokemon"
          />
          <Card.Body className="text-center text-dark">
            <Card.Text className="font-weight-bold">
              {uppercaseFL(img.name)}
            </Card.Text>
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
