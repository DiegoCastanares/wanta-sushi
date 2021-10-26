import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { CartContextUse } from "../context/CartContext";

export const User = () => {
  const [datosEnviados, setDatosEnviados] = useState(false);
  const { createNewOrder } = CartContextUse();

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
        }}
        validate={(valores) => {
          let errores = {};
          if (!valores.name) {
            errores.name = "El nombre es requerido";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
            errores.name = "El nombre debe contener solo letras";
          }

          if (!valores.email) {
            errores.email = "El email es requerido";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.email
            )
          ) {
            errores.email =
              "El email puede contener solo letras, numeros, puntos, guiones y guion bajo";
          }

          if (!valores.phone) {
            errores.phone = "El telefono es requerido";
          } else if (!/^[0-9]{10}$/.test(valores.phone)) {
            errores.phone = "El telefono debe contener 10 digitos";
          }

          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          setDatosEnviados(true);
          setTimeout(() => setDatosEnviados(false), 5000);
          createNewOrder(valores);
        }}
      >
        {({ errors }) => (
          <Form className="col-md-6 offset-md-3 mt-4">
            <div className="col">
              <label htmlFor="name">Name</label>
              <Field
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="Enter name"
              />
              <ErrorMessage
                name="name"
                component={() => (
                  <div className="text-danger">{errors.name}</div>
                )}
              />
            </div>
            <div className="col">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Enter email"
              />
              <ErrorMessage
                name="email"
                component={() => (
                  <div className="text-danger">{errors.email}</div>
                )}
              />
            </div>
            <div className="col ">
              <label htmlFor="phone">Phone Number</label>
              <Field
                type="text"
                className="form-control"
                name="phone"
                id="phone"
                placeholder="Enter phone number"
              />
              <ErrorMessage
                name="phone"
                component={() => (
                  <div className="text-danger">{errors.phone}</div>
                )}
              />
            </div>
            <button type="submit" className="btn btn-primary col-2 mt-3">
              {" "}
              Enviar Pedido
            </button>
          </Form>
        )}
      </Formik>
      {datosEnviados && (
        <p className="text-success">Tu pedido ha sido enviado</p>
      )}
    </>
  );
};
