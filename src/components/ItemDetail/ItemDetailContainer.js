import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "./ItemDetail";

import misProductos from "../../productos.json";

function ItemDetailContainer() {
  const [producto, setProducto] = useState({});
  const { id: idProduct } = useParams();

  const getItems = () => {
    return new Promise((resolve, reject) => {
      const buscarProducto = misProductos.find(
        (item) => item.id === parseInt(idProduct)
      );
      setTimeout(() => {
        resolve(buscarProducto);
        reject("error al traer productos");
      }, 3000);
    });
  };

  useEffect(() => {
    setProducto({});
    getItems()
      .then((res) => setProducto(res))
      .catch((acaHayError) => console.log(acaHayError));
  }, [idProduct]);

  return <ItemDetail producto={producto} />;
}

export default ItemDetailContainer;
