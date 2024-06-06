import { FaCircleArrowRight } from "react-icons/fa6";

const ButtonPrimary = ({ value, bg }) => {
  return (
    <button
      className={`md:py-[22px] py-[15px] px-[20px] md:px-[32px] bg-orangeCs text-[18px] md:text-[20px] font-bold font-roboto rounded-xl flex items-center gap-2 group text-navyCs`}
    >
      <span>{value}</span>
      <FaCircleArrowRight className="group-hover:translate-x-1 transition-all" />
    </button>
  );
};

export default ButtonPrimary;
