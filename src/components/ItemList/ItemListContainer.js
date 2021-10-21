import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
// import misProductos from "../../productos.json";

import { getFirestore } from "../../firebase";
const ItemListContainer = () => {
  const [loading, setLoading] = useState(false);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    setLoading(true);
    //inicializar la conexion con firebase u conectarme
    //a firestore
    const db = getFirestore();
    //Vamos a ir a la coleccion que yo quiero
    const itemCollection = db.collection("productos");
    //Vamos a buscar la informacion
    itemCollection
      .get()

      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("No Hay resultados");
        }
        console.log(querySnapshot.docs);
        setProductos(
          querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      })
      .catch((error) => {
        console.log("Error al traer los productos", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  console.log(productos);

  // function ItemListContainer() {
  //   const [productos, setProductos] = useState([]);
  //   const { id: idCategory } = useParams();

  //   const getItems = () => {
  //     return new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         if (idCategory) {
  //           const filtroCategory = misProductos.filter(
  //             (item) => item.categoria === idCategory
  //           );
  //           resolve(filtroCategory);
  //         } else {
  //           resolve(misProductos);
  //         }

  //         reject("error al traer productos");
  //       }, 2000);
  //     });
  //   };

  //   useEffect(() => {
  //     setProductos([]);
  //     getItems()
  //       .then((res) => setProductos(res))
  //       .catch((acaHayError) => console.log(acaHayError));
  //   }, [idCategory]);

  return (
    <>
      <h2 className="text-center my-5">Nuestro Menu</h2>
      <ItemList productos={productos} />;
    </>
  );
};

export default ItemListContainer;
