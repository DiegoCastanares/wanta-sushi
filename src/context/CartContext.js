import { createContext, useContext, useState } from "react";

//CartContext es el contexto que se va a usar en toda la aplicación

const CartContext = createContext();

export const CartContextUse = () => {
  return useContext(CartContext);
};

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //AddItem añade un nuevo item al carrito
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
  //isInCart comprueba si un item está en el carrito
  const isInCart = (id) => cart.find((element) => element.item.id === id);

  //clear limpia el carrito
  const clear = () => setCart([]);

  //removeItem elimina un item del carrito
  const removeItem = (id) => {
    const cartFilter = cart.filter((element) => element.item.id !== id);

    setCart(cartFilter);
  };

  //totalArticle multiplica la cantidad de un item por el precio
  const totalArticle = (priceArt, cantArt) => {
    return priceArt * cantArt;
  };

  //cartProducts devuelve el carrito
  const cartProducts = cart.reduce(
    (acc, product) => (acc += product.quantity),
    0
  );

  //totalPrice devuelve el precio total del carrito
  const totalPrice = cart.reduce(
    (acc, { quantity, item }) => acc + quantity * item.precio,
    0
  );

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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
