import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { getFirestore } from "../../firebase";
import { CartContextUse } from "../../context/CartContext";
import swal from "sweetalert";
import { Redirect } from "react-router";

const Buyer = () => {
  const { cart, totalPrice, clear } = CartContextUse();

  const createNewOrder = (values) => {
    //Conectarme a firebase y a la base de datos
    const db = getFirestore();
    //Cual es la coleccion sobre la cual voy a trabajar
    //.doc() estoy haciendo referencia que voy a manipular documentos
    const documentCollection = db.collection("order").doc();

    const newOrder = {
      user: {
        name: values.name,
        phone: values.phone,
        email: values.email,
      },
      idOrder: documentCollection.id,
      cart: cart,
      totalPrice: totalPrice,
      date: new Date(),
    };

    const idOrder = newOrder.idOrder;

    swal("Pedido enviado bajo el codigo", idOrder, "success");

    //Llamo a batch, manipular documentos en lote o en bloque
    const batch = db.batch();

    batch.set(documentCollection, newOrder);

    batch
      .commit()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
    clear();
  };

  return (
    <>
      {cart.length > 0 ? (
        <Formik
          initialValues={{
            name: "",
            phone: "",
            email: "",
            emailConfirm: "",
          }}
          validate={(valores) => {
            let errores = {};
            if (!valores.name) {
              errores.name = "El nombre es requerido";
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
              errores.name = "El nombre debe contener solo letras";
            }

            if (!valores.phone) {
              errores.phone = "El telefono es requerido";
            } else if (!/^[0-9]{10}$/.test(valores.phone)) {
              errores.phone = "El teléfono debe contener 10 digitos";
            }

            if (!valores.emailConfirm) {
              errores.emailConfirm = "El email es requerido";
            } else if (valores.email !== valores.emailConfirm) {
              errores.emailConfirm = "El email no coincide";
            }

            return errores;
          }}
          onSubmit={(valores, { resetForm }) => {
            resetForm();
            createNewOrder(valores);
          }}
        >
          {({ errors }) => (
            <div className="d-flex justify-content-center">
              <Form
                className="col-md-6 col-xl-4 col-8 mt-5"
                style={{ minHeight: "70vh" }}
              >
                <div className="col my-2">
                  <label htmlFor="name">Nombre</label>
                  <Field
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    placeholder="Ingresa tu nombre"
                  />
                  <ErrorMessage
                    name="name"
                    component={() => (
                      <div className="text-danger">{errors.name}</div>
                    )}
                  />
                </div>

                <div className="col my-2 ">
                  <label htmlFor="phone">Numero de telefono</label>
                  <Field
                    type="text"
                    className="form-control"
                    name="phone"
                    id="phone"
                    placeholder="Ingresa tu numero de telefono"
                  />
                  <ErrorMessage
                    name="phone"
                    component={() => (
                      <div className="text-danger">{errors.phone}</div>
                    )}
                  />
                </div>
                <div className="col my-2">
                  <label htmlFor="email">Email</label>
                  <Field
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Ingresa tu email"
                  />
                  <ErrorMessage
                    name="email"
                    component={() => (
                      <div className="text-danger">{errors.email}</div>
                    )}
                  />
                </div>

                <div className="col my-2">
                  <label htmlFor="emailConfirm">Confirmar email</label>
                  <Field
                    type="email"
                    className="form-control"
                    name="emailConfirm"
                    id="emailConfirm"
                    placeholder="Ingresa tu email nuevamente"
                  />
                  <ErrorMessage
                    name="emailConfirm"
                    component={() => (
                      <div className="text-danger">{errors.emailConfirm}</div>
                    )}
                  />
                </div>

                <div className="d-flex justify-content-center">
                  <button
                    type="submit"
                    className="btn col-6 mt-4"
                    style={{
                      backgroundColor: "#DDFEE1",
                      borderColor: "#DDFEE1",
                    }}
                  >
                    Enviar Pedido
                  </button>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default Buyer;
