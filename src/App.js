// import "./styles.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart/Cart";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <ItemListContainer />
        </Route>
        <Route path="/category/:id">
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
  );
}
