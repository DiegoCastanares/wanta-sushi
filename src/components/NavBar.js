import LogoWanta from "./LogoWanta.png";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <img src={LogoWanta} alt="" width="100" height="100" />

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
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Nuestros Rolls
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Zonas de Entrega
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Hacé tu Pedido
              </a>
            </li>

            <li className="nav-item mt-2 mx-4">
              <CartWidget itemsCart="4" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
