import React from "react";
import { CartContextUse } from "../../context/CartContext";

const DeleteCart = () => {
  const { clear } = CartContextUse();
  return (
    <button
      onClick={clear}
      className="btn"
      style={{ backgroundColor: "#F1AFD1", borderColor: "#F1AFD1" }}
    >
      Eliminar Compra
    </button>
  );
};

export default DeleteCart;
