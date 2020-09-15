import React, { useState, useEffect } from "react";
import "./App.css";

// Components
import Spinner from "./components/Spinner";
import Header from "./components/Header";

//React-Bootstrap
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Helpers
import { uppercaseFL } from "./helpers";

function App() {
  const [result, setResult] = useState([]);
  const [poke, setPoke] = useState([]);
  const [load, setLoad] = useState("true");

  const arr = [];

  //Llamada a la API
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=50")
      .then((response) => response.json())
      .then((data) =>
        setResult(
          data.results.map((item) => {
            fetch(item.url)
              .then((response) => response.json())
              .then((allpokemon) => arr.push(allpokemon));
            setPoke(arr);
          })
        )
      );
  }, []);

  setTimeout(() => {
    setLoad(false);
  }, 2000);

  return (
    <div className="App">
          <Header />
      <Container>
        <Row className="justify-content-md-center">
          {load ? (
            <Spinner />
          ) : (
            poke.map((img, i) => (
              <Col xs={6} md={3} xl={2} id={img.id} key={img.id}>
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
            ))
          )}
        </Row>
      </Container>
    </div>
  );
}

export default App;
