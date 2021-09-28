import React, { useState } from "react";

const ItemCount = (props) => {
  const [contador, setContador] = useState(1);
  const { stock, initial } = props;

  //   const stock = 20;
  //   const initial = 1;

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  console.log(contador);

  const restar = () => {
    if (contador > initial) {
      setContador(contador - 1);
    }
  };

  return (
    <div className="row">
      <button className="btn btn-outline-primary col-2" onClick={sumar}>
        +
      </button>
      <span className="col-8 justify-text-center fs-4 d-flex justify-content-center">
        {contador}
      </span>
      <button className="btn btn-primary col-2" onClick={restar}>
        -
      </button>
      <button className="btn btn-primary px-3 mt-3">Agregar al Carrito</button>
    </div>
  );
};

export default ItemCount;
