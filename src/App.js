import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import NavBar from "./components/Main/NavBar";
import Cart from "./components/Cart/Cart";
import Buyer from "./components/Cart/Buyer";
import { CartContextProvider } from "./context/CartContext";
import Carousel from "./components/Main/Carousel";
import Map from "./components/Main/Map";
import Footer from "./components/Main/Footer";

//App.js es el componente principal de la aplicación
//contiene todos los componentes que se van a renderizar
//contiene el ruter de las páginas
//envia las props del mapa a la página de mapa

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
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCLTIeCon890PDQwP0d5g0b6Rz4vwJ9QbM&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </Route>
          <Route path="/category/:categoria">
            <Carousel />
            <ItemListContainer />
            <Map
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCLTIeCon890PDQwP0d5g0b6Rz4vwJ9QbM&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/Cart">
            <Cart />
          </Route>
          <Route exact path="/Confirmation">
            <Buyer />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </CartContextProvider>
  );
}
