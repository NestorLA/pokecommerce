import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const CategoriesList = ({ pokes }) => {
  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <div>
          {" "}
          <div>
            <h2 className="text-center">Categorías</h2>
            <Link to="/categories/hierba" className="mx-2 text-white">
              Hierba
            </Link>
            <Link to="/categories/fuego" className="mx-2 text-white">
              Fuego
            </Link>
            <Link to="/categories/agua" className="mx-2 text-white">
              Agua
            </Link>
            <Link to="/categories/bicho" className="mx-2 text-white">
              Bicho
            </Link>
          </div>
          <div>
            <h3 className="text-center">Productos</h3>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default CategoriesList;
