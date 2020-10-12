import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { getFirestore } from "../firebase";
import * as firebase from "firebase/app";
import "firebase/firestore";

function Field({
  name,
  inputLabel,
  nameField,
  type,
  id,
  placeholder,
  valueInput,
  onChange,
}) {
  return (
    <>
      <div className="col-sm-6">
        <label htmlFor={inputLabel} name={name} className="form-label">
          {nameField}
        </label>
        <input
          type={type}
          value={valueInput}
          className="form-control"
          id={id}
          placeholder={placeholder}
          required
          onChange={onChange}
        ></input>
      </div>
    </>
  );
}

const Form = () => {
  const [cart, setCart] = useContext(CartContext);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirm, setEmailConfirm] = useState("");
  const [orderId, setOrderId] = useState(null);
  const [sent, setSent] = useState(false);

  console.log(cart);

  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const onPhoneChange = (event) => {
    setPhone(event.target.value);
  };
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onEmailConfirmChange = (event) => {
    setEmailConfirm(event.target.value);
  };

  const updateDataFirebase = async () => {
    const db = getFirestore();
    const itemsToUpdate = db.collection("items").where(
      firebase.firestore.FieldPath.documentId(),
      "in",
      cart.map((i) => i.id)
    );

    const query = await itemsToUpdate.get();
    const batch = db.batch();

    const outOfStock = [];
    query.docs.forEach((docSnapShot, idx) => {
      if (docSnapShot.data().stock >= cart[idx].quantity) {
        batch.update(docSnapShot.ref, {
          stock: docSnapShot.data().stock - cart[idx].quantity,
        });
      } else {
        outOfStock.push({ ...docSnapShot.data(), id: docSnapShot.id });
      }
    });

    if (outOfStock.length === 0) {
      await batch.commit();
    }
  };

  async function createOrder() {
    setSent(true);
    // Info de usuario
    const userInfo = { name, phone, email };

    // Items
    const items = cart.map((p) => ({
      id: p.id,
      name: p.title,
      quantity: p.qty,
      subtotal: p.price * p.qty,
    }));

    // Total
    const totalPrice = cart.reduce(
      (total, product) => total + product.qty * product.price,
      0
    );

    const db = getFirestore();
    const orders = db.collection("orders");
    const newOrder = {
      userInfo,
      items,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: totalPrice,
    };

    try {
      const { id } = await orders.add(newOrder);
      setOrderId(id);
      setCart([]);
    } catch (err) {
      console.log("Ha ocurrido un error creando la orden de compra");
    }
    updateDataFirebase();
  }

  if (orderId) {
    return (
      <>
        <div className="container">
          <div className="py-5 text-center mt-5 text-white">
            <h2 className="mt-5 font-weight-bold">¡Gracias por tu compra!</h2>
            <h4 className="my-5">
              La transacción se ha realizado exitosamente.
            </h4>
            <p className="font-weight-bold">El ID de tu compra es {orderId}</p>
            <Link to={`/`}>
              <button className="btn btn-block btn-dark">
                Volver a la tienda
              </button>
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container text-white">
        <div className="text-center py-5">
          <h4 className="mt-5">
            Completa el formulario con tus datos para confirmar la compra.
          </h4>
        </div>
        <div className="row">
          <div className="col-md-12">
            <form>
              <div className="row">
                <Field
                  inputLabel="inputName"
                  name="name"
                  nameField="Nombre y Apellido"
                  valueInput={name}
                  type="text"
                  id="inputName"
                  placeholder="Nombre y Apellido"
                  onChange={onNameChange}
                />
                <Field
                  inputLabel="inputPhone"
                  name="phone"
                  nameField="Teléfono"
                  valueInput={phone}
                  type="text"
                  id="inputPhone"
                  placeholder="1133225566"
                  onChange={onPhoneChange}
                />
                <Field
                  inputLabel="inputEmail"
                  name="email"
                  nameField="Email"
                  valueInput={email}
                  type="email"
                  id="inputEmail"
                  placeholder="tumail@mail.com"
                  onChange={onEmailChange}
                />
                <Field
                  inputLabel="inputConfirmEmail"
                  name="email"
                  nameField="Confirmar Email"
                  valueInput={emailConfirm}
                  type="email"
                  id="inputConfirmEmail"
                  placeholder="tumail@mail.com"
                  onChange={onEmailConfirmChange}
                />
              </div>
              <button
                className="btn btn-dark btn-lg btn-block mt-3"
                type="submit"
                disabled={
                  !name || !phone || !email || emailConfirm !== email || sent
                }
                onClick={createOrder}
              >
                <strong>Confirmar</strong>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
