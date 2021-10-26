import { createContext, useContext, useState } from "react";
import { getFirestore } from "../firebase";

const CartContext = createContext();

export const CartContextUse = () => {
  return useContext(CartContext);
};

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      const updateQty = [...cart];
      updateQty.map((element) => {
        if (element.item.id === item.id) {
          element.quantity += quantity;
        }
      });
      setCart(updateQty);
    } else {
      setCart([...cart, { item, quantity }]);
    }
  };

  const isInCart = (id) => cart.find((element) => element.item.id === id);

  const clear = () => setCart([]);

  const removeItem = (id) => {
    const cartFilter = cart.filter((element) => element.item.id !== id);

    setCart(cartFilter);
  };

  const totalArticle = (priceArt, cantArt) => {
    return priceArt * cantArt;
  };

  const cartProducts = cart.reduce(
    (acc, product) => (acc += product.quantity),
    0
  );

  const totalPrice = cart.reduce(
    (acc, { quantity, item }) => acc + quantity * item.precio,
    0
  );

  //tengo que sacar esta funcion de aca y crear un componente que se encargue de hacer esto
  const createNewOrder = (values) => {
    //Conectarme a firebase y a la base de datos
    const db = getFirestore();
    //Cual es la coleccion sobre la cual voy a trabajar
    //.doc() estoy haciendo referencia que voy a manipular documentos
    const documentCollection = db.collection("order").doc();

    const newOrder = {
      user: {
        name: values.name,
        phone: values.phone,
        email: values.email,
      },
      idOrder: documentCollection.id,
      cart: cart,
      totalPrice: totalPrice,
      date: new Date(),
    };

    const idOrder = newOrder.idOrder;

    console.log(idOrder);

    //Llamo a batch, manipular documentos en lote o en bloque
    const batch = db.batch();

    batch.set(documentCollection, newOrder);

    batch
      .commit()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  console.log("carrito", cart);

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        clear,
        removeItem,
        totalArticle,
        totalPrice,
        cartProducts,
        createNewOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
