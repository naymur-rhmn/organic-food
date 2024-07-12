import { Link, NavLink, Outlet } from "react-router-dom";
import { AiOutlineProduct } from "react-icons/ai";
import { MdDeleteSweep } from "react-icons/md";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { HiHome } from "react-icons/hi2";
import { HiMiniUserGroup } from "react-icons/hi2";
import { PiKeyReturn } from "react-icons/pi";
import { MdOutlineRateReview } from "react-icons/md";
import TopBar from "../components/DashBoard/Topbar/TopBar";
import useAuth from "../hook/useAuth";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const DashBoardLayout = () => {
  const { logOut } = useAuth();
  const handleLogOut = () => {
    logOut();
  };
  return (
    <>
      <ScrollToTop />

      <div className="h-screen">
        <TopBar />
        <div className="clear-both">
          <div className="bg-navyCs w-[320px] overflow-y-auto fixed top-[80px] h-[calc(100vh-80px)] px-5 flex flex-col justify-between">
            <ul className="pt-14 flex flex-col gap-8 text-xl font-bold text-[#f0f2f2]">
              <NavLink
                to="dashboard"
                className={({ isActive }) =>
                  isActive ? "text-teal-500" : " hover:text-teal-500"
                }
              >
                <li className="flex gap-4 items-center ">
                  <HiHome size={30} /> <span>Dashboard</span>
                </li>
              </NavLink>
              <NavLink
                to="products"
                className={({ isActive }) =>
                  isActive ? "text-teal-500" : " hover:text-teal-500"
                }
              >
                <li className="flex gap-4 items-center hover:text-teal-500">
                  <AiOutlineProduct size={30} /> <span>Products</span>
                </li>
              </NavLink>
              <NavLink
                to="addProduct"
                className={({ isActive }) =>
                  isActive ? "text-teal-500" : " hover:text-teal-500"
                }
              >
                <li className="flex gap-4 items-center hover:text-teal-500">
                  <MdOutlineAddToPhotos size={30} />
                  <span>Add Item</span>
                </li>
              </NavLink>
              <NavLink
                to="users"
                className={({ isActive }) =>
                  isActive ? "text-teal-500" : " hover:text-teal-500"
                }
              >
                <li className="flex gap-4 items-center ">
                  <HiMiniUserGroup size={30} />
                  <span>User</span>
                </li>
              </NavLink>
              <NavLink
                to={`user/delete`}
                className={({ isActive }) =>
                  isActive ? "text-teal-500" : " hover:text-teal-500"
                }
              >
                <li className="flex gap-4 items-center ">
                  <MdDeleteSweep size={30} />
                  <span>Delete User</span>
                </li>
              </NavLink>
              <NavLink
                to={`review`}
                className={({ isActive }) =>
                  isActive ? "text-teal-500" : " hover:text-teal-500"
                }
              >
                <li className="flex gap-4 items-center ">
                  <MdOutlineRateReview size={30} />
                  <span>Put Review</span>
                </li>
              </NavLink>
            </ul>

            <ul className="mb-5 flex flex-col gap-4">
              <Link to="/">
                <li className="flex gap-2 items-center text-base font-bold text-gray-400  hover:text-teal-500">
                  <PiKeyReturn size={18} />
                  <span>Home Page</span>
                </li>
              </Link>
              <li
                onClick={handleLogOut}
                className="flex gap-2 items-center text-base font-bold text-gray-400 cursor-pointer hover:text-teal-500"
              >
                <RiLogoutBoxRLine size={18} />
                <span>Logout</span>
              </li>
            </ul>
          </div>
          {/* Second child takes up the remaining width */}
          <div className="bg-lightGrayCs h-full px-6 py-10 float-right absolute right-0 top-[80px] w-[calc(100vw-336px)] ">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoardLayout;
