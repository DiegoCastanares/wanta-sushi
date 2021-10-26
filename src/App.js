import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart/Cart";
import { CartContextProvider } from "./context/CartContext";
import Carousel from "./components/Carousel";

export default function App() {
  return (
    <CartContextProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Carousel />
            <ItemListContainer />
          </Route>
          <Route path="/category/:categoria">
            <ItemListContainer />
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/Cart">
            <Cart />
          </Route>
        </Switch>
      </Router>
    </CartContextProvider>
  );
}
