import React, { useState, useEffect } from "react";
import "./App.css";

// Components
import Spinner from "./components/Spinner";
import Header from "./components/Header";
import Home from "./components/Home";

//React-Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function App() {
  const [result, setResult] = useState([]);
  const [poke, setPoke] = useState([]);
  const [load, setLoad] = useState("true");

  const arr = [];

  //Llamada a la API
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
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
          {load ? <Spinner /> : <Home poke={poke} />}
        </Row>
      </Container>
    </div>
  );
}

export default App;
