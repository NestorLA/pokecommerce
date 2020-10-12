import React from "react";
import CategoriesList from './CategoriesList'


//React-Bootstrap
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

// Helpers
import { uppercaseFL } from "../helpers";

//Router
import { Link } from "react-router-dom";

const ItemList = ({ pokes }) => {
  return (
    <>
      {" "}
      <CategoriesList />
      {pokes.map((img, i) => (
        <Col xs={6} sm={6} md={4} xl={2} id={img.id} key={img.id}>
          <Link to={`/pokemon/${img.id}`} style={{ textDecoration: "none" }}>
            <Card className="shadow h-100">
              <Card.Img
                className="rounded itemlist"
                variant="top"
                src={img.image}
                alt="pokemon"
              />
              <Card.Body className="text-center text-dark text-nowrap">
                <Card.Title>{uppercaseFL(img.title)}</Card.Title>
                <Card.Text>Precio: {img.price}</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      ))}
    </>
  );
};

export default ItemList;
