import React from "react";

import LogoWanta from "./LogoWanta.png";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
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
            <li className="nav-item mt-1 mx-4">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item mt-1 mx-4">
              <Link to="/category/mas_vendidos">Mas Vendidos</Link>
            </li>
            <li className="nav-item mt-1 mx-4">
              <Link to="/category/roll%20semanal">Roll Semanal</Link>
            </li>
            <li className="nav-item mt-1 mx-4">
              <Link to="/category/tempurizados">Tempurizados</Link>
            </li>
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
