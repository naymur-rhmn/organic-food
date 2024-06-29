import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import open from "../../../assets/menu-open.png";
import close from "../../../assets/menu-close.png";

const ResNav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  //   const dropdownRef = useRef(null);

  const handleToggleMenu = () => {
    setToggleMenu((prev) => !prev);
    if (toggleMenu) {
    }
  };

  // close user profile or user log/reg container on click outside in document
  //   useEffect(() => {
  //     function handleClickOutside(event) {
  //       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //         setToggleMenu(false);
  //       }
  //     }
  //     document.addEventListener("mousedown", handleClickOutside);
  //     return () => {
  //       document.removeEventListener("mousedown", handleClickOutside);
  //     };
  //   }, []);

  return (
    <div className="md:hidden z-20">
      {toggleMenu ? (
        <button onClick={handleToggleMenu}>
          <img className="h-5 w-5" src={close} alt="" />
        </button>
      ) : (
        <button onClick={handleToggleMenu}>
          <img className="h-6 w-6" src={open} alt="" />
        </button>
      )}
      <div
        className={`absolute top-[80px] transition  h-[400px] left-0 w-full bg-white  shadow-xl p-5 ${
          toggleMenu ? "block" : "hidden"
        }`}
      >
        <nav className="flex flex-col gap-2 items-center">
          <Link
            onClick={handleToggleMenu}
            to={"/"}
            className="font-medium text-base font-roboto py-2 bg-gray-100 hover:bg-gray-200 w-full text-center rounded-md"
          >
            Home
          </Link>
          <Link
            onClick={handleToggleMenu}
            to={"/about"}
            className="font-medium text-base font-roboto py-2 bg-gray-100 hover:bg-gray-200 w-full text-center rounded-md"
          >
            About
          </Link>
          <Link
            onClick={handleToggleMenu}
            to={"/shop"}
            className="font-medium text-base font-roboto py-2 bg-gray-100 hover:bg-gray-200 w-full text-center rounded-md"
          >
            Shop
          </Link>
          <Link
            onClick={handleToggleMenu}
            to={"/services"}
            className="font-medium text-base font-roboto py-2 bg-gray-100 hover:bg-gray-200 w-full text-center rounded-md"
          >
            Services
          </Link>
          <Link
            onClick={handleToggleMenu}
            to="/dashboard"
            className="font-medium text-base font-roboto py-2 bg-gray-100 hover:bg-gray-200 w-full text-center rounded-md"
          >
            Dashboard
          </Link>
          <Link
            onClick={handleToggleMenu}
            to="/login"
            className="font-medium text-base font-roboto py-2 bg-green-500 hover:bg-green-400 w-full text-center rounded-md"
          >
            Login
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default ResNav;
