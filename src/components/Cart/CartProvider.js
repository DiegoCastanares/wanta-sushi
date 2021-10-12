import React from "react";
export const CartContext = React.createContext();
export const useCartContext = () => React.useContext(CartContext);
export const CartProvider = (props) => {
  // se fija si el carro esta en memoria, si no hay nada, guarda un array vacio en el estado
  const [list, setList] = React.useState(
    () => JSON.parse(window.sessionStorage.getItem("cart")) || []
  );
  /*  console.log("sessionStorage:" + list) */
  const addCart = (item_to_add) => {
    // se fija si esta el item en el carrito
    const found = list.find((element) => element.id === item_to_add.id);
    if (found) {
      // vamos a recorrer mi array del carro en busca de el item para aumentarle la cantidad en el carro
      const carroViejo = list.map((element) => {
        // si el ID del elemento del array (lo que ya esta en el carro) es igual al ID del elemento que quiero agregar al carro
        if (element.id === item_to_add.id) {
          // devolveme el item con la cantidad que se agregue
          return {
            ...item_to_add,
            contador: item_to_add.contador + element.contador,
          };
        }
        // aca se re arma el array del carro
        return element;
      });
      setList(carroViejo);
      window.sessionStorage.setItem("cart", JSON.stringify(carroViejo));
      console.log(found);
      // si if ya estaba en el carrito, entra aca, y por ahora no hace nada .
    } else {
      // si no estaba el item, se agrega al array carro
      const carro = [...list, item_to_add];
      /*  console.log("array" + carro); */
      setList(carro);
      window.sessionStorage.setItem("cart", JSON.stringify(carro));
    }
  };
  const totalItems = () => {
    let total_items = list.reduce(
      (total, product) => total + product.contador,
      0
    );
    return total_items;
  };
  const totalPrize = () => {
    let total_prize = list
      .reduce((total, product) => total + product.prize * product.contador, 0)
      .toFixed(2);
    return total_prize;
  };
  const quitarProducto = (item) => {
    const carro = list.filter((element) => element.id !== item.id);
    setList(carro);
    window.sessionStorage.setItem("cart", JSON.stringify(carro));
  };
  return (
    <>
      <CartContext.Provider
        value={{
          addCart,
          list,
          totalItems,
          totalPrize,
          quitarProducto,
        }}
      >
        {props.children}
      </CartContext.Provider>
    </>
  );
};
