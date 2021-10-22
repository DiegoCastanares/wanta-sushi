import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getFirestore } from "../../firebase";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const { title: itemTitle } = useParams();

  useEffect(() => {
    const getDetail = async () => {
      const { docs } = await getFirestore().collection("productos").get();
      const newArray = docs.map((item) => ({ id: item.id, ...item.data() }));
      const findProduct = newArray.find((item) => item.title === itemTitle);
      setProduct(findProduct);
    };

    getDetail();
  }, [itemTitle]);
  return <ItemDetail producto={product} />;
};

export default ItemDetailContainer;
