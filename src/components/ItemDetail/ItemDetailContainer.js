import { useState, useEffect } from "react";
import { getFirestore } from "../../firebase";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);

  const getDataDb = () => {
    //inicializar la conexion con firebase u conectarme
    //a firestore
    const db = getFirestore();
    //Vamos a ir a la coleccion que yo quiero
    const itemCollection = db.collection("productos");
    //Vamos a buscar la informacion
    itemCollection
      .get()
      .then((informacionBaseDatos) => {
        if (informacionBaseDatos.size === 0) {
          console.log("No Hay resultados");
        }
        console.log("documentos: ", informacionBaseDatos.docs);
        setProducto(
          informacionBaseDatos.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      })
      .catch((error) => {
        console.error("Error al traer los productos", error);
      });
  };

  useEffect(() => {
    getDataDb();
  }, []);

  return <ItemDetail producto={producto} />;
};

export default ItemDetailContainer;

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import ItemDetail from "./ItemDetail";

// function ItemDetailContainer() {
//   const [producto, setProducto] = useState({});
//   const { id: idProduct } = useParams();

//   const getItems = () => {
//     return new Promise((resolve, reject) => {
//       const buscarProducto = misProductos.find(
//         (item) => item.id === parseInt(idProduct)
//       );
//       setTimeout(() => {
//         resolve(buscarProducto);
//         reject("error al traer productos");
//       }, 2000);
//     });
//   };

//   useEffect(() => {
//     setProducto({});
//     getItems()
//       .then((res) => setProducto(res))
//       .catch((acaHayError) => console.log(acaHayError));
//   }, [idProduct]);

//   return <ItemDetail producto={producto} />;
// }
