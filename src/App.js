import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Context

import { CartProvider } from "./context/CartContext";

// Components
import Spinner from "./components/Spinner";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";

//React-Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  const [result, setResult] = useState([]);
  const [pokes, setPokes] = useState([]);
  const [load, setLoad] = useState("true");

  const arr = [];

  //Llamada a la API
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
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
  }, 1500);

  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <Header />
          <Switch>
            <Route exact path="/">
              <Container>
                <Row className="justify-content-md-center">
                  {load ? <Spinner /> : <Home pokes={pokes} />}
                </Row>
              </Container>
            </Route>
            <Route path="/pokemon/:id" component={ItemDetailContainer}></Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
          </Switch>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
