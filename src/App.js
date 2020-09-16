import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Components
import Spinner from "./components/Spinner";
import Header from "./components/Header";
import Home from "./components/Home";

//React-Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ItemDetail from "./components/ItemDetail";

function App() {
  const [result, setResult] = useState([]);
  const [pokes, setPokes] = useState([]);
  const [load, setLoad] = useState("true");

  const arr = [];

  //Llamada a la API
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=50")
      .then((response) => response.json())
      .then((data) =>
        setResult(
          data.results.forEach((item) => {
            fetch(item.url)
              .then((response) => response.json())
              .then((allpokemon) => arr.push(allpokemon));
            setPokes(arr);
          })
        )
      );
  }, []);

  setTimeout(() => {
    setLoad(false);
    
  }, 2000);

  

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Container>
              <Row className="justify-content-md-center">
                {load ? <Spinner /> : <Home pokes={pokes} />}
              </Row>
            </Container>
          </Route>
          <Route path="/pokemon/:id" component={ItemDetail}>
            {load ? <Spinner /> : <ItemDetail pokes={pokes} />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
