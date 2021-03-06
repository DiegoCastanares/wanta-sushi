import React from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContextUse } from "../../context/CartContext";

//ItemDetail muestra el detalle de cada producto a partir de su id y pasa el producto al componente ItemCount

const ItemDetail = ({ producto }) => {
  const { addItem } = CartContextUse();

  const onAdd = (qty) => {
    addItem(producto, qty);
  };

  return (
    <div className=" d-flex justify-content-center">
      <div className="card col col-sm-10 col-md-4 col-xl-3 border-0">
        <img
          src={producto.imagen}
          className="card-img-top"
          alt={producto.nombre}
        />

        <div className="card-body col">
          <h4 className="card-title text-center"> {producto.nombre} </h4>
          <h5 className="card-title text-center text-secondary">
            {" "}
            -- Rolls {producto.categoria} --{" "}
          </h5>
          <p className="card-text text-center mb-3 fst-italic">
            {producto.descripcion}
          </p>
          <h5 className="card-text text-center mb-3">
            Tu roll x 10 piezas $ {producto.precio}{" "}
          </h5>
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
