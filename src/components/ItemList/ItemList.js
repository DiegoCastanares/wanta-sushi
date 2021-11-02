import React from "react";
import Item from "./Item";

//ItemList se encarga de mostrar una lista de cards con los items

const ItemList = ({ productos }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {productos.length !== 0 ? (
        productos.map((producto) => (
          <Item product={producto} key={producto.id} />
        ))
      ) : (
        <div className="text-center">
          <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemList;
