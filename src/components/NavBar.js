import React, { useState, useEffect } from "react";

import LogoWanta from "./LogoWanta.png";
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";
// import product from "../productos.json";
import axios from "axios";

function NavBar() {
  const [prod, setProd] = useState([]);

  const obtenerProd = async () => {
    const res = await axios.get(
      "https://api.jsonbin.io/b/615e51799548541c29bf4661/1"
    );
    const products = await res.data;
    setProd(products);
  };

  useEffect(() => {
    obtenerProd();
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/">
          <img src={LogoWanta} alt="" width="100" height="100" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse  justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li>
              <Link to="/">Home</Link>
            </li>

            {prod.map((item) => (
              <li>
                <NavLink
                  to={`/category/${item.categoria}`}
                  key={item.idCategoria}
                  activeClassName="currentCategory"
                  className="nav-item mx-2"
                >
                  {" "}
                  {item.categoria}
                </NavLink>
              </li>
            ))}

            <li className="nav-item mt-1 mx-4">
              <CartWidget itemsCart="4" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
