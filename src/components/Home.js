import React from "react";
import ItemList from "./ItemList";
import Carrousel from "./Carrousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Home = ({ pokes }) => {
  return (
    <>
      <Container className="mb-3">
        <Row className="justify-content-md-center">
          <Carrousel />
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-md-center">
          <ItemList pokes={pokes} />
        </Row>
      </Container>
    </>
  );
};

export default Home;
