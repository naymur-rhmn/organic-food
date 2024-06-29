import Logo from "./Logo";
import Nav from "./Nav";
import UserSticker from "./UserSticker";
import ResNav from "./ResNav";
import { Link } from "react-router-dom";
import Cart from "./Cart";

const Navbar = () => {
  return (
    <div className="bg-white z-50  sticky top-0 left-0">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-12 ">
        <div className="flex justify-between md:justify-normal items-center md:gap-8 lg:gap-32 h-[80px]">
          <Link to={"/"}>
            <Logo />
          </Link>
          <div className="md:flex hidden justify-between items-center w-full">
            <Nav />
            <div className="flex gap-4 items-center">
              <Cart />
              <UserSticker />
            </div>
          </div>
          <ResNav />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
