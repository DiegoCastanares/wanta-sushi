import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount";

function Item({ product }) {
  return (
    <div className="card" style={{ width: "15rem", margin: ".50rem" }}>
      <img src={product.imagen} className="card-img-top" alt={product.nombre} />
      <div className="card-body">
        <h5 className="card-title"> {product.nombre} </h5>
        <p className="card-text"> {product.precio} </p>
        <ItemCount stock={product.stock} initial={1} />
        <Link
          to={`/item/${product.id}`}
          className="btn btn-secondary mt-3 col-12"
        >
          detalle
        </Link>
      </div>
    </div>
  );
}

export default Item;
