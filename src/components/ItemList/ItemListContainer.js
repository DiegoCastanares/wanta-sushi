import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase";

//ItemListContainer se encarga de

function ItemListContainer() {
  const [product, setProduct] = useState([]);
  const { categoria: productCategoria } = useParams();

  useEffect(() => {
    const getProducts = async () => {
      const { docs } = await getFirestore().collection("productos").get();
      const newArray = docs.map((item) => ({ id: item.id, ...item.data() }));

      if (productCategoria) {
        const filterCategoria = newArray.filter(
          (item) => item.categoria === productCategoria
        );
        setProduct(filterCategoria);
      } else {
        setProduct(newArray);
      }
    };
    getProducts();
  }, [productCategoria]);

  return (
    <>
      {!productCategoria ? (
        <h1 className="text-center mt-5">Nuestro Menu</h1>
      ) : (
        <h1 className="text-center mt-5">Nuestros {productCategoria}</h1>
      )}
      <ItemList productos={product} />;
    </>
  );
}

export default ItemListContainer;
