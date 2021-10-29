import React from "react";
import { Link } from "react-router-dom";

function Item({ product }) {
  return (
    <div className="card mx-2 mb-4 border-0" style={{ width: "15rem" }}>
      <img src={product.imagen} className="card-img-top" alt={product.nombre} />
      <div className="card-body">
        <h5 className="card-title text-center"> {product.nombre} </h5>

        <Link
          to={`/item/${product.id}`}
          className="btn btn-secondary mt-3 col-12"
        >
          Detalle
        </Link>
      </div>
    </div>
  );
}

export default Item;
