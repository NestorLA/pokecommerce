import React from "react";
import Navbar from "react-bootstrap/Navbar";
import CartIcon from "./CartIcon";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Link } from "react-router-dom";

import { useUser } from "../session/hooks";

const Header = () => {
  const user = useUser();
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
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/categories/hierba">Hierba </Link>
              </NavDropdown.Item>{" "}
              <NavDropdown.Item>
                <Link to="/categories/fuego">Fuego</Link>
              </NavDropdown.Item>{" "}
              <NavDropdown.Item>
                <Link to="/categories/agua">Agua</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                {" "}
                <Link to="/categories/bicho">Bicho </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Form inline>
            <CartIcon />
            {user ? (
              <a style={{ color: "white" }}>Bienvenido {user.displayName}</a>
            ) : null}
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
