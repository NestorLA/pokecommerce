import React from "react";
import Navbar from "react-bootstrap/Navbar";
import CartIcon from "./CartIcon";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md" className="mb-5">
        <Navbar.Brand href="#home">Pokecommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          
        </Nav>

        <Form inline>
          <CartIcon />
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
