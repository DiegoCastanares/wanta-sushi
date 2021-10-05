import React from "react";
import ItemCount from "../ItemCount";

const ItemDetail = ({ producto }) => {
  return (
    <div className="card col" style={{ width: "15rem", margin: "10px" }}>
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
      </div>
    </div>
  );
};

export default ItemDetail;
