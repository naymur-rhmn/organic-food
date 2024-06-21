import { FaCartArrowDown } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../../../provider/CartProvider";
import { Link } from "react-router-dom";
const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <Link to="/dashboard">
      <div className="bg-lightGreenCs flex items-center gap-1 p-2  rounded-full">
        <div className="bg-navyCs p-2 rounded-full text-white">
          <FaCartArrowDown size={14} />
        </div>
        <div className="font-medium flex gap-1 items-center">
          <span>cart</span>
          <span className="h-8 w-8  rounded-full  border flex items-center justify-center ">
            {cart.length}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Cart;
