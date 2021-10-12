import React from "react";
import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";
import AddToCart from "../Cart/AddToCart";

const ItemDetail = ({ producto }) => {
  return (
    <div className="container">
      <div className="card col-md-6 offset-md-3">
        <img
          src={producto.imagen}
          className="card-img-top"
          alt={producto.nombre}
        />

        <div className="card-body col">
          <h4 className="card-title"> {producto.nombre} </h4>
          <h5 className="card-text"> {producto.precio} </h5>
          <p className="card-text">{producto.descripcion}</p>
          <ItemCount stock={producto.stock} initial={1} />
          <AddToCart />
          <Link to="/">
            <button className="btn btn-secondary col-12 px-4 mt-3">
              Cerrar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
