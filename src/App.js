import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Context
import { CartProvider } from "./context/CartContext";

// Firebase
import { getFirestore } from "./firebase";

// Components
import Spinner from "./components/Spinner";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Form from "./components/Form";
import Categories from "./components/Categories";
import Footer from "./components/Footer";

//React-Bootstrap
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  const [pokes, setPokes] = useState([]);
  const [load, setLoad] = useState("true");

  // llamada a firebase
  useEffect(() => {
    setLoad(true);
    const db = getFirestore();
    const itemCollection = db.collection("items");
    itemCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("No data!");
        }
        setPokes(
          querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      })
      .catch((error) => {
        console.log("Error intentando traer items: ", error);
      })
      .finally(() => {
        setLoad(false);
      });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <Header />
          <Switch>
            <Route exact path="/">
              {load ? (
                <Spinner />
              ) : (
                <>
                  <Home pokes={pokes} /> <Footer />
                </>
              )}
            </Route>
            <Route path="/pokemon/:id" component={ItemDetailContainer}></Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route path="/form">
              <Form />
            </Route>
            <Route path="/categories/:categoryId">
              <Categories />
            </Route>
          </Switch>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
