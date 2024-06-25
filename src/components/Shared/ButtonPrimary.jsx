import { FaCircleArrowRight } from "react-icons/fa6";

const ButtonPrimary = ({ value, bg }) => {
  return (
    <button
      className={`md:py-[20px] py-[15px] px-[15px] md:px-[24px] bg-[#2A9776] text-[18px] md:text-[20px] font-bold font-roboto rounded-xl flex items-center gap-2 group text-white`}
    >
      <span className="inline-block min-w-[99px] ">{value}</span>
      <FaCircleArrowRight className="group-hover:translate-x-1 transition-all" />
    </button>
  );
};

export default ButtonPrimary;
