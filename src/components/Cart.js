import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <button
        onClick={handleClearCart}
        className="text-white p-2 m-2 bg-black rounded-lg"
      >
        Clear Cart
      </button>

      {cartItems.length === 0 && (
        <h1 className="font-bold text-2xl mt-10">Cart is empty 😟</h1>
      )}

      <div className="w-6/12 m-auto">
        <ItemsList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
