import useAuth from "../../hook/useAuth";
import Logo from "../Global/Navbar/Logo";
import dummyImg from "../../assets/business-professional-icon.png";
import { useEffect, useRef, useState } from "react";

const TopBar = () => {
  const { user, logOut } = useAuth();

  return (
    <div className="fixed top-0 left-0 w-full h-[80px] px-4 flex justify-between items-center bg-navyCs z-50 ">
      <div>
        <Logo />
      </div>
      <div>
        <div className="relative flex justify-center mr-2">
          <div className="h-12 w-12 rounded-full flex justify-center items-center">
            <img
              className="rounded-full w-full h-full cursor-pointer"
              // onClick={() => setToggle((prev) => !prev)}
              src={user?.photoURL == true ? user.photoURL : dummyImg}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
