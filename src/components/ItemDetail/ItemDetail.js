import React from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContextUse } from "../../context/CartContext";

const ItemDetail = ({ producto }) => {
  const { addItem } = CartContextUse();

  const onAdd = (qty) => {
    console.log("Se agregaron ", "productos al carrito");

    addItem(producto, qty);
  };

  return (
    <div className=" d-flex justify-content-center mt-3">
      <div className="card col-3 border-0">
        <img
          src={producto.imagen}
          className="card-img-top"
          alt={producto.nombre}
        />

        <div className="card-body col">
          <h4 className="card-title text-center"> {producto.nombre} </h4>
          <h5 className="card-text text-center"> {producto.precio} </h5>
          <p className="card-text text-center mb-4">{producto.descripcion}</p>
          <ItemCount onAdd={onAdd} stock={producto.stock} initial={1} />
          <Link to="/">
            <button className="btn btn-secondary col-12 px-4 mt-3">
              Volver a la tienda
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
