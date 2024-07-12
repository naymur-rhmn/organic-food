import { FaRegUser } from "react-icons/fa6";
import { useState, useRef, useEffect } from "react";
import useAuth from "../../../hook/useAuth";
import { Link } from "react-router-dom";
import dummyImg from "../../../assets/business-professional-icon.png";

const UserSticker = () => {
  const [toggle, setToggle] = useState(false);
  const { user, logOut } = useAuth();
  const dropdownRef = useRef(null);
  // close user profile or user log/reg container on click outside in document
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setToggle(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logOut();
    setToggle(false);
  };

  return (
    <>
      {user?.email ? (
        <div className="relative flex justify-center" ref={dropdownRef}>
          <div className="h-9 w-9 rounded-full flex justify-center items-center bg-gray-400">
            <img
              className="rounded-full w-full h-full cursor-pointer"
              onClick={() => setToggle((prev) => !prev)}
              src={user?.photoURL}
              alt=""
            />
          </div>

          <div
            className={`bg-white transition py-4 px-6 absolute top-12 z-50 rounded-lg  gap-2 flex-col ${
              toggle ? "flex" : "hidden"
            }`}
          >
            <button
              onClick={handleLogout}
              className="border px-5 py-1 font-roboto font-medium transition rounded border-grayCs hover:bg-grayCs w-full"
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div className="relative flex justify-center" ref={dropdownRef}>
          <FaRegUser
            onClick={() => setToggle((prev) => !prev)}
            size={24}
            className="cursor-pointer"
          />
          <div
            className={`bg-white  transition py-4 px-6 absolute top-9 z-50 rounded-lg flex gap-2 flex-col  ${
              toggle ? "flex" : "hidden"
            }`}
          >
            <Link to="/login">
              <button
                onClick={() => setToggle(false)}
                className="border px-5 py-1 font-roboto font-medium transition rounded border-greenCs hover:bg-greenCs w-full"
              >
                Login
              </button>
            </Link>
            <Link to="/register">
              <button
                onClick={() => setToggle(false)}
                className={`border px-5 py-1 font-roboto font-medium transition rounded border-orangeCs hover:bg-orangeCs `}
              >
                Register
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default UserSticker;
