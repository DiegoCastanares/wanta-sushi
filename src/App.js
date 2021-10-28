import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart/Cart";
import User from "./components/User";
import { CartContextProvider } from "./context/CartContext";
import Carousel from "./components/Carousel";
import Map from "./components/Map";
import Footer from "./components/Footer";

export default function App() {
  return (
    <CartContextProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Carousel />
            <ItemListContainer />
            <Map
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
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
          <Route exact path="/Confirmation">
            <User />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </CartContextProvider>
  );
}
