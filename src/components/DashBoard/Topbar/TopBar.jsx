import Logo from "../../Global/Navbar/Logo";
import dummyImg from "../../../assets/business-professional-icon.png";
import { useEffect, useRef, useState } from "react";
import useAuth from "../../../hook/useAuth";
import Cart from "../../Global/Navbar/Cart";

const TopBar = () => {
  const { user, logOut } = useAuth();

  return (
    <div className="fixed top-0 left-0 w-full h-[80px] px-4 flex justify-between items-center bg-navyCs z-50 ">
      <div>
        <Logo />
      </div>
      <div className="flex gap-4">
        <Cart />
        <div className="relative flex justify-center mr-2">
          <div className="h-12 w-12 rounded-full flex justify-center items-center bg-gray-400">
            <img
              className="rounded-full w-full h-full cursor-pointer"
              // onClick={() => setToggle((prev) => !prev)}
              src={user?.photoURL}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
