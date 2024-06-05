import Logo from "./Logo";
import Nav from "./Nav";
import UserSticker from "./UserSticker";
import ResNav from "./ResNav";

const Navbar = () => {
  return (
    <div className="bg-white z-50  sticky top-0 left-0">
      <div className="max-w-screen-xl mx-auto px-4 md:px-12 ">
        <div className="flex justify-between md:justify-normal items-center md:gap-20 lg:gap-48 h-[80px]">
          <Logo />
          <div className="md:flex hidden justify-between items-center w-full">
            <Nav />
            <UserSticker />
          </div>
          <ResNav />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
