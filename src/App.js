import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Item from "./components/Item";

function App() {
  return (
    <>
      <NavBar />
      <Item />
      <ItemListContainer texto="Ya podes agregar tus rolls al pedido" />
    </>
  );
}

export default App;
