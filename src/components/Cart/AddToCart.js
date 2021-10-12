import React, { useContext } from "react";
import { CartContext } from "./CartProvider";

const AddToCart = () => {
  const addCart = useContext(CartContext);

  return (
    <div>
      <button className="btn btn-primary col-12 mt-3" onClick={addCart}>
        Agregar al Carrito
      </button>
    </div>
  );
};

export default AddToCart;
