import React from "react";

const ItemDetail = ({ producto }) => {
  return (
    <div className="card" style={{ width: "15rem", margin: "10px" }}>
      <img
        src={producto.imagen}
        className="card-img-top"
        alt={producto.nombre}
      />

      <div className="card-body">
        <h5 className="card-title"> {producto.nombre} </h5>
        <p className="card-text"> {producto.precio} </p>
      </div>
    </div>
  );
};

export default ItemDetail;
