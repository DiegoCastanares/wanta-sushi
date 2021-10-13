import React, { useState } from "react";

const ItemCount = ({ stock, initial }) => {
  const [contador, setContador] = useState(initial);
  const [state, setState] = useState(true);

  const sumar = () => (contador < stock ? setContador(contador + 1) : "");
  console.log(contador);

  const restar = () => (contador > initial ? setContador(contador - 1) : "");

  const onAdd = (ev, input) => {
    ev.preventDefault();
    setState();
    console.log("se agrega al carrito");
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
      <button className="btn btn-primary col-12 mt-3" onClick={onAdd}>
        Agregar al Carrito
      </button>
    </div>
  ) : (
    <div className="row">
      <div className="col-12">
        <a className="btn btn-success form-control" href="../cart">
          Ir al carrito
        </a>
      </div>
    </div>
  );
};

export default ItemCount;
