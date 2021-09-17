import LogoWanta from "./LogoWanta.png";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <img src={LogoWanta} alt="" width="100" height="100" />

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse  justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Nuestros Rolls
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Zonas de Entrega
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Hacé tu Pedido
              </a>
            </li>

            <li class="nav-item">
              <CartWidget />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
