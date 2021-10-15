import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

function CartWidget({ itemsCart }) {
  return (
    <>
      <Link to="/Cart" className="text text-dark">
        <FiShoppingCart size={25} />
      </Link>
      {itemsCart > 0 ? (
        <span className="position-absolute translate-middle badge rounded-pill bg-danger">
          {itemsCart}
        </span>
      ) : (
        ""
      )}
    </>
  );
}

export default CartWidget;
