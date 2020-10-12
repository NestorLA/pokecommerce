import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Table from "react-bootstrap/Table";

const TableCart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(
      cart
        .map((tprice) => tprice.price * tprice.qty)
        .reduce((total, valor) => total + valor)
    );
  }, [cart]);
  return (
    <>
      <Table striped bordered variant="dark">
        <thead>
          <tr>
            <th>Pokemon</th>
            <th>Imágen</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
            <th>Precio Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((img) => (
            <tr key={img.id}>
              <td className="text-capitalize">{img.title}</td>
              <td>
                <img src={img.image} alt=""></img>
              </td>
              <td>{img.qty}</td>
              <td>{img.price}</td>
              <td>{img.price * img.qty}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Container className="flex-column">
        <p>Total Compra: $ {totalPrice}</p>
        <p>Para continuar haz click en el botón.</p>
        <Link to="/form" className="btn btn-dark">
          Realizar compra
        </Link>
      </Container>
    </>
  );
};

export default TableCart;
