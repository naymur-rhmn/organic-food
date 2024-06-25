import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hook/useAuth";

const Nav = () => {
  const { user } = useAuth();
  return (
    <nav className="flex gap-6 items-center">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? "font-medium text-base font-roboto relative text-greenCs"
            : "font-medium text-base font-roboto "
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"/about"}
        className={({ isActive }) =>
          isActive
            ? "font-medium text-base font-roboto relative text-greenCs"
            : "font-medium text-base font-roboto"
        }
      >
        About
      </NavLink>
      <NavLink
        to={"/shop"}
        className={({ isActive }) =>
          isActive
            ? "font-medium text-base font-roboto relative text-greenCs"
            : "font-medium text-base font-roboto"
        }
      >
        Shop
      </NavLink>
      {user && (
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "font-medium text-base font-roboto relative text-greenCs"
              : "font-medium text-base font-roboto"
          }
        >
          Dashboard
        </NavLink>
      )}
    </nav>
  );
};

export default Nav;
