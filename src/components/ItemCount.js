import React, { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, initial, onAdd, addOn }) => {
  const [contador, setContador] = useState(initial);
  const [state, setState] = useState(true);

  const sumar = () => (contador < stock ? setContador(contador + 1) : "");
  console.log(contador);

  const restar = () => (contador > initial ? setContador(contador - 1) : "");

  addOn = () => {
    onAdd(contador);
    setState();
  };

  return state ? (
    <div className="row mx-0">
      <button className="btn btn-outline-primary col-2" onClick={sumar}>
        +
      </button>
      <span className="col-8 fs-4 d-flex justify-content-center">
        {contador}
      </span>

      <button className="btn btn-primary col-2" onClick={restar}>
        -
      </button>
      <button className="btn btn-primary col-12 mt-3" onClick={() => addOn()}>
        Agregar al Carrito
      </button>
    </div>
  ) : (
    <Link to="../Cart">
      <button
        className="btn btn-warning col-12 mt-3"
        style={{ backgroundColor: "#DDFEE1", borderColor: "#DDFEE1" }}
      >
        Terminar Compra
      </button>
    </Link>
  );
};

export default ItemCount;
