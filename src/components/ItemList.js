import React, { useState, useEffect } from "react";
import Item from "./Item";

const ItemList = () => {
  const [productList, setproductList] = useState(0);

  const products = [
    {
      id: 1,
      title: "Nigiri",
      price: 500,
      pictureUrl: "",
    },
    { id: 2, title: "Maki", price: 500, pictureUrl: "" },
    { id: 3, title: "Uramaki", price: 500, pictureUrl: "" },
    { id: 4, title: "Temaki", price: 500, pictureUrl: "" },
    { id: 5, title: "Oshi", price: 500, pictureUrl: "" },
    { id: 6, title: "Inari", price: 500, pictureUrl: "" },
  ];

  const ackData = new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(products);
    }, 2000);
  });

  ackData.then((response) => {
    setproductList(
      response.map((item, index) => <Item props={item} key={index} />)
    );
  });

  useEffect(() => {}, []);

  return (
    <>
      <div>{productList}</div>
    </>
  );
};

export default ItemList;
