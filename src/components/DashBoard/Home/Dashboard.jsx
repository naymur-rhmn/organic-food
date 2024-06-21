import React, { useContext, useEffect } from "react";
import Message from "./Message";
import { CartContext } from "../../../provider/CartProvider";

const Dashboard = () => {
  const { cart } = useContext(CartContext);
  const totalPrice = cart
    .map((item) => item.price * item.quantity)
    .reduce((prevValue, currentValue) => prevValue + currentValue, 0)
    .toFixed(2);
  return (
    <div>
      <Message />
      <div className="grid grid-cols-12 gap-4 mt-6">
        {/* ===== left content ======= */}
        <div className="bg-green-100 col-span-8">a</div>
        {/* ====== orders summary ====== */}
        <div className="bg-[#458aa5] col-span-4 p-6 rounded-md min-h-[600px]">
          <h6 className=" font-bold text-white capitalize border-b-2 text-center">
            my orders
          </h6>
          <div className="flex justify-between mt-5">
            <div className="flex-1">
              <p className="text-black font-semibold capitalize">name</p>
            </div>
            <div className="flex-1">
              <p className="text-black font-semibold capitalize">Price</p>
            </div>
            <div className="flex-1">
              <p className="text-black font-semibold capitalize">Quantity</p>
            </div>
            <div className="flex-1">
              <p className="text-center text-black font-semibold capitalize">
                Action
              </p>
            </div>
          </div>
          <div>
            {cart.map((item) => {
              return (
                <div
                  key={item._id}
                  className="flex items-center justify-between mt-3 border-dashed border-b pb-2"
                >
                  <p className="flex-1 text-gray-900">{item?.name}</p>
                  <p className="flex-1 text-gray-900">${item?.price}</p>
                  <p className="flex-1 text-gray-900">{item?.quantity}</p>
                  <div className="flex-1 text-gray-900 text-center">
                    <button className="bg-gray-800 p-2 px-3 text-white rounded-md text-sm">
                      Cancel
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex gap-4 mt-4">
            <p className="text-white font-semibold capitalize">total price: </p>
            <p className="text-white font-semibold capitalize">${totalPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
