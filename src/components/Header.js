import React from "react";
import Navbar from "react-bootstrap/Navbar";
import CartIcon from "./CartIcon";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md" className="">
        <Link to={"/"}>
          {" "}
          <Navbar.Brand>Pokecommerce</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link to={"/"}>
              <Navbar.Text className="mr-2">Home</Navbar.Text>
            </Link>
            <Link to={"/"}>
              <Navbar.Text className="mr-2">Pokemons</Navbar.Text>
            </Link>
            <Link to={"/cart"}>
              <Navbar.Text className="mr-2">Carrito</Navbar.Text>
            </Link>
          </Nav>

          <Form inline>
            <CartIcon />
            <FormControl
              type="text"
              placeholder="Busca aquí!"
              className="mr-sm-2"
            />
            <Button variant="outline-danger">Búsqueda</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
