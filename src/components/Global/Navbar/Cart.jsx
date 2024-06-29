import { FaCartArrowDown } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../../../provider/CartProvider";
import { Link } from "react-router-dom";
const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <Link to="/dashboard">
      <div className="bg-lightGreenCs flex items-center gap-1 p-2 relative rounded-full">
        <div className="bg-navyCs p-2 rounded-full text-white z-10">
          <FaCartArrowDown size={14} />
        </div>
        <span className="h-6 w-6 absolute left-6 -top-2 z-0 bg-white rounded-full  border flex items-center text-greenCs font-bold text-[10px] justify-center ">
          {cart.length}
        </span>
      </div>
    </Link>
  );
};

export default Cart;
