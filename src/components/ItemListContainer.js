import React from "react";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {
  const { texto, numero } = props;
  return numero < 1 ? (
    <div className="row">
      <h2 className="col-md-6 offset-md-3">{texto}</h2>
    </div>
  ) : (
    <>
      <div className="d-flex justify-content-center">
        <h2 className="col-md-6 offset-md-3">{texto} </h2>
      </div>
      <ItemList />
    </>
  );
};

export default ItemListContainer;
