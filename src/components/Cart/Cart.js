import React from "react";
import { Link } from "react-router-dom";
import { CartContextUse } from "../../context/CartContext";
import DeleteCart from "../Buttons/DeleteCart";

const Cart = () => {
  const { cart, totalArticle, totalPrice, removeItem } = CartContextUse();
  console.log(cart);
  console.log(cart.length);

  return cart.length === 0 ? (
    <div className="container" style={{ minHeight: "70vh" }}>
      <div className="mt-5">
        <h1 className="col text-center">Tu carro de compras esta vacío</h1>
      </div>
      <div className="d-flex justify-content-center my-5">
        <Link to="/" className="btn btn-secondary">
          Ir a comprar
        </Link>
      </div>
    </div>
  ) : (
    <div className="container mt-5" style={{ minHeight: "70vh" }}>
      <table className="table">
        <thead className="col-12">
          <tr>
            <th scope="col" className="col-1 align-middle text-center"></th>
            <th scope="col" className="col-2 align-middle text-center">
              Cantidad
            </th>
            <th scope="col" className="col-2 align-middle text-center">
              Producto
            </th>
            <th scope="col" className="col-2 align-middle text-center">
              Precio
            </th>
            <th scope="col" className="col-2 align-middle text-center">
              Total
            </th>
            <th className="col-2 align-middle text-center"></th>
          </tr>
        </thead>
      </table>
      {cart.map(({ item, quantity }) => {
        console.log(cart);
        return (
          <div className="container">
            <table className="table">
              <tbody className="col-12 ">
                <tr>
                  <th scope="row" className="col-2 align-middle p-0">
                    <img
                      src={item.imagen}
                      alt={item.nombre}
                      className="col-12"
                    />
                  </th>
                  <td className="col-2 align-middle text-center">{quantity}</td>
                  <td className="col-2 align-middle text-center">
                    {item.nombre}
                  </td>
                  <td className="col-2 align-middle text-center">
                    {item.precio}
                  </td>
                  <td className="col-2 align-middle text-center">
                    {totalArticle(item.precio, quantity)}
                  </td>
                  <td className="col-2 align-middle text-center">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="btn"
                      style={{
                        backgroundColor: "#F1AFD1",
                        borderColor: "#F1AFD1",
                      }}
                    >
                      X
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}

      <table className="table">
        <thead className="col-12">
          <tr>
            <th scope="col" className="col-2 align-middle text-center fs-4">
              Total a pagar: {totalPrice}
            </th>
          </tr>
        </thead>
      </table>
      <div className="d-flex justify-content-evenly mt-5">
        <DeleteCart />
        <Link
          to="/Confirmation"
          className="btn"
          style={{ backgroundColor: "#DDFEE1", borderColor: "#DDFEE1" }}
        >
          Realizar Compra
        </Link>
      </div>
    </div>
  );
};

export default Cart;
