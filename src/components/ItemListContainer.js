import React from "react";

const ItemListContainer = (props) => {
  const { texto, numero } = props;
  return numero < 1 ? (
    <div className="row">
      <h2 className="col-md-6 offset-md-3">{texto}</h2>
    </div>
  ) : (
    <div className="row">
      <h2 className="col-md-6 offset-md-3">Greeting</h2>
    </div>
  );
};

export default ItemListContainer;
