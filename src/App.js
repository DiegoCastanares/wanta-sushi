import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import Item from "./components/Item";

function App() {
  return (
    <>
      <Item />
      <ItemListContainer texto="Ya podes agregar tus rolls al pedido" />
    </>
  );
}

export default App;
