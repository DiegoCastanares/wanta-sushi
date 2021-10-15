import React from "react";
import { CartContextUse } from "../../context/CartContext";

const Cart = () => {
  const { clear, cart, removeItem, totalArticle } = CartContextUse();
  console.log(cart);

  return cart.length === 0 ? (
    <>
      <h1>Carrito Malvado</h1>
    </>
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
                Eliminar Compras
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
    </>
  );
};

export default Cart;
