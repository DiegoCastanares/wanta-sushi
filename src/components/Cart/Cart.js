import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CartContextUse } from "../../context/CartContext";
import { User } from "../User";

const Cart = () => {
  const [cargaUser, setCargaUser] = useState(false);
  const { clear, cart, removeItem, totalArticle, totalPrice } =
    CartContextUse();
  console.log(cart);
  console.log(cart.length);

  const handleCargaUser = () => {
    setCargaUser(true);
  };

  return cart.length === 0 ? (
    <div className="fluid-container">
      <div className="row">
        <h1 className="col text-center">Tu carro de compras esta vacío</h1>
      </div>
      <div className="row">
        <Link
          to="/"
          className="btn btn-secondary mt-3 col-3 col-md-6 offset-md-3"
        >
          Ir a comprar
        </Link>
      </div>
    </div>
  ) : (
    <>
      <table className="table">
        <thead className="col-12">
          <tr>
            <th scope="col" className="col-2 align-middle text-center">
              Imagen
            </th>
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
            <th scope="col" className="col-2 align-middle text-center">
              <button onClick={clear} className="btn btn-danger">
                Eliminar Compra
              </button>
            </th>
          </tr>
        </thead>
      </table>
      {cart.map(({ item, quantity }) => {
        console.log(cart);
        return (
          <>
            <table className="table">
              <tbody className="col-12 ">
                <tr>
                  <th scope="row" className="col-2">
                    <img src={item.imagen} alt="" className="col-12" />
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
                      className="btn btn-warning"
                    >
                      Quitar Item
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        );
      })}

      <table className="table">
        <thead className="col-12">
          <tr>
            <th scope="col" className="col-2 align-middle text-center"></th>
            <th scope="col" className="col-2 align-middle text-center"></th>
            <th scope="col" className="col-2 align-middle text-center">
              {" "}
              <button onClick={handleCargaUser} className="btn btn-success">
                {" "}
                Confirmar Pedido{" "}
              </button>
            </th>
            <th scope="col" className="col-2 align-middle text-center"></th>
            <th scope="col" className="col-2 align-middle text-center">
              Total Compra
            </th>
            <th scope="col" className="col-2 align-middle text-center">
              <h3>{totalPrice}</h3>
            </th>
          </tr>
        </thead>
      </table>

      {cargaUser && <User />}
    </>
  );
};

export default Cart;
