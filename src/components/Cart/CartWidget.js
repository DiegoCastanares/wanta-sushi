import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { CartContextUse } from "../../context/CartContext";

function CartWidget() {
  const { cartProducts } = CartContextUse();
  return (
    <>
      <Link to="/Cart" className="text text-dark">
        <FiShoppingCart size={25} />
      </Link>
      {cartProducts > 0 ? (
        <span className="position-absolute translate-middle badge rounded-pill bg-danger">
          {cartProducts}
        </span>
      ) : (
        ""
      )}
    </>
  );
}

export default CartWidget;
