// import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ItemListContainer from "./components/ItemList/ItemListContainer";
// import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <ItemListContainer />
        </Route>
        <Route exact path="/category/:id">
          <ItemListContainer />
        </Route>
        <Route exact path="/item/:id">
          <ItemDetailContainer />
        </Route>
      </Switch>
    </Router>
  );
}

// import "./App.css";
// import NavBar from "./components/NavBar";
// import ItemListContainer from "./components/ItemListContainer";

// function App() {
//   return (
//     <>
//       <NavBar />
//       <ItemListContainer />
//     </>
//   );
// }

// export default App;
