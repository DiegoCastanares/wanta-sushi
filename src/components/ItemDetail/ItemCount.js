import React, { useState } from "react";
import { Link } from "react-router-dom";

//ItemCount se encarga de mostrar el contador de items y el boton de agregar al carrito

const ItemCount = ({ stock, initial, onAdd, addOn }) => {
  const [contador, setContador] = useState(initial);
  const [state, setState] = useState(true);

  const sumar = () => (contador < stock ? setContador(contador + 1) : "");

  const restar = () => (contador > initial ? setContador(contador - 1) : "");

  addOn = () => {
    onAdd(contador);
    setState();
  };

  return state ? ( //si el state es true, se muestra el contador
    <div className="row mx-0">
      <button className="btn btn-outline-secondary col-2" onClick={restar}>
        -
      </button>
      <span className="col-8 fs-4 d-flex justify-content-center">
        {contador}
      </span>

      <button className="btn btn-outline-secondary col-2" onClick={sumar}>
        +
      </button>
      <button
        className="btn  col-12 mt-3"
        style={{ backgroundColor: "#DDFEE1", borderColor: "#DDFEE1" }}
        onClick={() => addOn()}
      >
        Agregar al Carrito
      </button>
    </div>
  ) : (
    //si el estado es false, se muestra el boton de ir al carrito
    <Link to="../Cart">
      <button
        className="btn col-12 mt-3"
        style={{ backgroundColor: "#DDFEE1", borderColor: "#DDFEE1" }}
      >
        Ver Carrito
      </button>
    </Link>
  );
};

export default ItemCount;
