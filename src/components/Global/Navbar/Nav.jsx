import { Link } from "react-router-dom";
import useAuth from "../../../hook/useAuth";

const Nav = () => {
  const { user } = useAuth();
  return (
    <nav className="flex gap-6 items-center">
      <Link to={"/"} className="font-medium text-base font-roboto">
        Home
      </Link>
      <Link to={"/shop"} className="font-medium text-base font-roboto">
        Shop
      </Link>
      <Link to="/dashboard" className="font-medium text-base font-roboto">
        Dashboard
      </Link>
    </nav>
  );
};

export default Nav;
