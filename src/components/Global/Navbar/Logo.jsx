import logo from "../../../assets/organic-logo.png";

const Logo = () => {
  return (
    <div className="flex items-center gap-1">
      <div className="h-[50px] w-[50px] flex items-center">
        <img src={logo} alt="Organic" />
      </div>
      <span className="text-[32px] font-semibold  text-[#2D9C46] font-yellowTail">
        Nourish
      </span>
    </div>
  );
};

export default Logo;
