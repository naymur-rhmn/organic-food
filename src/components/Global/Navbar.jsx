import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa6";
import { useState, useRef, useEffect } from "react";
import useAuth from "../../hook/useAuth";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { user, logOut } = useAuth();
  const dropdownRef = useRef(null);
  // close user profile or user log, reg container onclick outside in document
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setToggle(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedowm", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logOut();
    setToggle(false);
  };

  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto px-4 md:px-12">
        <div className="flex items-center gap-52  h-[80px]">
          <div>
            <span>Organic</span>
          </div>
          <div className="flex justify-between items-center w-full">
            <nav>
              <ul className="flex gap-4 items-center">
                <Link to={"/"}>
                  <li>Home</li>
                </Link>
                <Link to={"/shop"}>
                  <li>Shop</li>
                </Link>
                <li>About</li>
                <Link to="/dashboard">Dashboard</Link>
              </ul>
            </nav>
            {/* conditional trigger */}
            {user?.email ? (
              <div className="relative flex justify-center" ref={dropdownRef}>
                <div className="h-12 w-12 rounded-full flex justify-center items-center">
                  <img
                    className="rounded-full w-full h-full cursor-pointer"
                    onClick={() => setToggle((prev) => !prev)}
                    src={user.photoURL}
                    alt=""
                  />
                </div>

                <div
                  className={`bg-white transition py-4 px-6 absolute top-12 z-50 rounded-lg  gap-2 flex-col ${
                    toggle ? "flex" : "hidden"
                  }`}
                >
                  <button className="border px-5 py-1 font-roboto font-medium transition rounded border-greenCs hover:bg-greenCs w-full">
                    Profile
                  </button>

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
                  <button
                    className={`border px-5 py-1 font-roboto font-medium transition rounded border-orangeCs hover:bg-orangeCs `}
                  >
                    Register
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
