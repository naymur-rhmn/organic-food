import { FaCircleArrowRight } from "react-icons/fa6";

const ButtonPrimary = ({ value, bg }) => {
  return (
    <button
      className={`py-[20px] px-[39px] bg-orangeCs text-[20px] font-bold font-roboto rounded-xl flex items-center gap-2 group text-navyCs`}
    >
      <span>{value}</span>
      <FaCircleArrowRight className="group-hover:translate-x-1 transition-all" />
    </button>
  );
};

export default ButtonPrimary;
