import { FiShoppingCart } from "react-icons/fi";

function CartWidget({ itemsCart }) {
  return (
    <>
      <FiShoppingCart size={25} />
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
