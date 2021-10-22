import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getFirestore } from "../../firebase";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const { id: itemId } = useParams();

  useEffect(() => {
    const getDetail = async () => {
      const { docs } = await getFirestore().collection("productos").get();
      const newArray = docs.map((item) => ({ id: item.id, ...item.data() }));
      const findProduct = newArray.find((item) => item.id === itemId);
      setProduct(findProduct);
    };

    getDetail();
  }, [itemId]);
  return <ItemDetail producto={product} />;
};

export default ItemDetailContainer;
